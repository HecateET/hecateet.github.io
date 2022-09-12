---
title: 《深入浅出Vue.js》day02:如何变化侦测Object？
author: 阿源 Hecate
date: '2022-03-18'
---

# 1、变化侦测

> Vue.js最独特的特性之一是看起来并不显眼的响应式系统。数据模型仅仅是普通的JavaScript对象。而当你修改它们时，视图会进行更新。这使得状态管理非常简单、直接。不过理解其工作原理同样重要，这样你可以回避一些常见的问题。
>      
>                                                                            ——官方文档
> 


从状态生成DOM，在输出到用户界面显示的一整套流程叫做渲染，应用在运行时会不断地进行重新渲染。

而响应式系统赋予框架重新渲染的能力， 其最重要组成部分是【变化侦测】。变化侦测是响应式系统的核心，没有它就没有重新渲染。 在框架运行时，视图也就无法随着状态的变化而变化。

变化侦测的作用是侦测数据的变化。当数据变化时，会通知视图进行相应的更新。

**变化侦测的实现原理**

-   Object的变化侦测
-   Array的变化侦测
-   变化侦测相关的API实现原理

# 2、Object的变化侦测

> Object和Array的变化侦测采用不同的处理方式。

问：那他们的变化侦测不同的处理方式差异点在哪里？

问： 在javascript中，如何侦测一个对象的变化？

问：Object.defineProperty和ES6的Proxy的原理是什么？有什么差异，优劣势分别是什么？

## 2.1 什么是变化侦测

Vue.js的渲染过程是声明式的，通过模版来描述状态与DOM之间的映射关系。

Vue的特点是声明式，根据侦测数据的变化， 通过不同的状态， 通知试图显示。

变化侦测解决的问题是：在运行时应用内部的状态会不断发生变化，需要不停地重新渲染，如何确定状态中发生了变化？

变化侦测两种类型：

-   “推”（push）

    -   Vue.js的变化侦测是属于"推"
    -   主动，状态发生变化时，立刻就是道了。 在一定程度上知道哪些状态变了。
    -   粒度细

-   “拉”（pull）

    -   Angular和React的变化侦测都是属于“拉”
    -   被动
    -   粒度最粗

粒度越细，每个状态所绑定的依赖就越多， 依赖追踪在内存上的开销就会越大。

vue2.0采用虚拟DOM，将粒度调整为[中等粒度]，即一个状态的绑定的依赖不再是具体的DOM节点，而是一个组件。

状态变化话后，就会通知到组件， 组件内部再使用虚拟DOM进行比对。

（大大降低了依赖数量， 从而降低依赖追踪所消耗的内存。）

Vue能随意调整力度， 本质上还要归功于变化侦测。因为"推"类型的变化侦测可以随意调整粒度。

## 2.2 如何追踪变化

JavaScript中，如何侦测一个对象的变化？

有两种方法：

-   使用Object.deineProperty
-   ES6的Proxy


Vue实现变化侦测的原理：

-   Vue2.0 用Object.defineProperty
-   Vue3.0 用 ES6 Proxy

`Object.defineProperty`

-   劫持方式：只能劫持对象的属性，不能直接代理对象
-   流程：get中进行依赖收集，set数据时通知订阅者更新
-   存在的问题：虽然`Object.defineProperty`通过为属性设置`getter/setter`能够完成数据的响应式，但它并不算是实现数据的响应式的完美方案，某些情况下需要对其进行修补或者hack，这也是它的缺陷， 主要表现在两个方面：

<!---->

-   -   无法检测到对象属性的新增或删除
    -   不能监听数组的新增变化

```
function defineReactive(data,key,val){
  Object.defineProperty(data,key,{
    enumerable:true,
    configurable:true,
    get:function(){
      return val
    },
    set:function(){
      if(val === newVal){
        return
      }
      val = newVal
    }
   })
}
```

定义一个响应式数据`defineReactive`函数，在函数中进行变化追踪，封装后需要只需要传递data、key和val就行了。

`Proxy`

-   劫持方式：代理整个对象，只需做一层代理就可以监听同级结构下的所有属性变化，包括新增属性和删除属性
-   本质：`Proxy`本质上属于元编程非破坏性数据劫持，在原对象的基础上进行了功能的衍生而又不影响原对象， 符合松耦合高内聚的设计理念

```
let obj = new Proxy({},{
  get:function(target,propKey,value,receiver){
     console.log(`getting${propKey}`)
     return Reflect.get(target,propKey,receiver)
  },
  set:function(target,propKey,value,receiver){
    console.log(`setting${propKey}`)
    return Reflect.set(target,propKey,receiver)
  }
})
```

\


## 2.3 如何收集依赖

先收集依赖，即把用到数据name的地方收集起来，然后等属性发生变化时，把之前收集好的依赖循环触发一遍就好了。

一句话总结：**在getter中收集依赖，在setter中触发依赖。**

## 2.4 依赖收集在哪里

收集到Dep中

```
function defineReactive(data,key,val){
  let dep = []//新增
  Object.defineProperty(data,key,{
    enumerable:true,
    configurable:true,
    get:function(){
      dep.push(window.target) //新增
      return val
    },
    set:function(){
      if(val === newVal){
        return
      }
      // 新增
      for(let i=0;i<dep.length;i++){
        dep[i](newVal,val)
      }
      val = newVal
    }
   })
}
```

## 2.5 依赖是谁

收集的依赖是`window.target`，收集谁呢？当属性发生变化后， 通知谁。

## 2.6 什么是Watcher

Watcher是一个中介的角色，数据发生变化时通知它，然后它再通知其他地方。

```
// keypath

vm.$watch('a.b.c',function(newVal,oldVal){
  //do something
})
```

\


当'data.a.b.c'属性变化 的时候， 触发第二个参数中的函数。

如何实现上述功能？

-   把这个watcher实例添加到`data.a.b.c` 属性的Dep中就可以了
-   然后当`data.a.b.c`的值发生变化时候，就会通知`Watcher`
-   Watcher再执行参数中的这个回调函数。

如下：

```
export default class Watcher{
  constructor(vm,expOrFn,cb){
    this.vm = vm;
    //执行this.getter(),就可以读取data.a.b.c的内容
    this.getter = parsePath(expOrFn);
    this.cb = cb;
    this.value = this.get();
  }
  
  get(){
    window.target = this; //将window.target设置为当前的watcher实例
    let value = this.getter.call(this.vm,this.vm) // 读data.a.b.c的值，就会触发getter
    window.target = undefined
    return value
  }
  
  update(){
    const oldValue = this.value
    this.value = this.get()
    this.cb.call(this.vm,this.value,oldValue)
  }
}
```

触发了`getter`，就会触发收集依赖的逻辑。而关于收集依赖，上面已经介绍了，会从`window.target`中读取一个依赖并添加到`Dep`中。



依赖注入到`Dep`中后，每当`data.a.b.c`的值发生变化时，就会让依赖列表中所有的依赖循环触发`update`方法，也就是Watcher中的update方法。而`update`方法会执行参数中的回调函数，将`value和oldValue`传到参数中。

```
const bailER = /[^\w.$]/
export function parsePath(path){
  if(bailRE,test(path)){
    return
  }
  const segments = path.split('.)
  return function(obj){
    for(let i=0; i< segments.length;i++){
      if(!obj) return
      obj = obj[segments[i]]
    }
    return obj
  }
}
```

先将`keypath`用 . 分割成数组，然后循环数组一层一层去读数据，最后拿到的`obj`就是`keypath`中想要读的数据。

## 2.7 递归侦测所有key

希望把数据中的所有属性（包括子属性）都侦测到，所以要封装一个`Observer`类。这个类的作用是将一个数据内的所有属性（包括子属性）都转换成`getter/setter`的形式，然后去追踪它们的变化：

```
export class Observer{
  constructor (value){
    this.value = value
    
    if(!Array.isArray(value)){
      this.walk(value)
    }
  }
  
  walk(obj){
    const keys = Object.keys(obj)
    for(let i=0;i<keys.length;i++){
      defineReactive(obj,keys[i],obj[keys[i]])
    }
  }
}


function defineReactive(data,key,val){
  //新增递归子属性
  if(typeof val === 'object'){
    new Observer(val)
  }
  let dep = []//新增
  Object.defineProperty(data,key,{
    enumerable:true,
    configurable:true,
    get:function(){
      dep.push(window.target) //新增
      return val
    },
    set:function(){
      if(val === newVal){
        return
      }
      // 新增
      for(let i=0;i<dep.length;i++){
        dep[i](newVal,val)
      }
      val = newVal
    }
   })
}
```

-   定义了`Observer`类，它用来将一个正常的object转换成被侦测的object。
-   然后判断数据的类型，只有`Object`类型的数据才会调用`walk`将每一个属性转换成`getter/setter`的形式来侦测变化。
-   最后，在`defineReactive`中新增`new Observer(val)`来递归子属性，这样我们就可以把data中的所有属性（包括子属性）都转换成`getter/setter`的形式来侦测变化。

**只要将一个object传到Observer中，那么这个object就会变成响应式的object。**

## 2.8 关于Object的问题

前面介绍了`Object`类型数据的变化侦测原理，了解了数据的变化是通过`getter/setter`来追踪的。也正是由于这种追踪方式，有些语法中即便是数据发生了变化，`Vue.js`也追踪不到。

与其说是`Object`的问题，不如说是`Object.defineProperty`的问题， 通过这个实现的侦测，是侦测不到一下情况的变化的。

-   像object添加属性
-   从object中删除一个属性


为了解决这个问题，Vue.js提供了两个API——`vm.$set`与`vm.$delete`方法。

# 3、思考总结


-   变化侦测，就是侦测数据的变化。 当数据发生变化时，能侦测到并发出通知。
-   Object可以通过Object.defineProperty将属性转换为getter/setter的形式来追踪变化，读取数据时会触发getter，修改数据的时候会触发setter。
-   收集依赖需要为依赖找一个存储依赖的地方，为此我们创建了Dep，它用来收集依赖、删除依赖和向依赖发送消息等。
-   所谓的依赖，其实就是Watcher。只有Watcher触发的getter才会收集依赖，哪个Watcher触发了getter，就把哪个Watcher收集到Dep中。当数据发生变化时，会循环依赖列表，把所有的Watcher都通知一遍。
-   Watcher的原理
    -   先把自己设置到全局唯一的指定位置（例如window.target），然后读取数据
    -   因为读取了数据，所以会触发这个数据的getter
    -   接着，在getter中就会从全局唯一的那个位置读取当前正在读取数据的Watcher，并把这个Watcher收集到Dep中去。
    -   接着，在getter中就会从全局唯一的那个位置读取当前正在读取数据的Watcher，并把这个Watcher收集到Dep中去


-   我们创建了Observer类，它的作用是把一个object中的所有数据（包括子数据）都转换成响应式的，也就是它会侦测object中所有数据（包括子数据）的变化。




![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/038fb8301e42405fa145554046f35348~tplv-k3u1fbpfcp-zoom-1.image)


图解：

-   Data通过Observer转换为getter/setter的形式来追踪变化。
-   当外界通过Watcher读取数据时，会触发getter从而将Watcher添加到依赖中。
-   当数据发生变化时候， 会触发setter，从而向Dep中的依赖（Watcher）发送通知
-   Watcher接受到通知后， 会向外界发送通知， 变化通知到外界后可能会触发视图更新，也有可能会触发用户的某个回调函数。

阅读本章节的时候， 随着引发的几个问题：

-   问：那他们（Object和Array）的变化侦测不同的处理方式差异点在哪里？
-   问： 在javascript中，如何侦测一个对象的变化？
    - 看完本章问题得到解决，可以用Object.defineProperty属性来实现。



-   问：Object.defineProperty和ES6的Proxy的原理是什么？有什么差异，优劣势分别是什么？
