---
title: 《深入浅出Vue.js》day03:如何变化侦测Array？
author: 阿源 Hecate
date: '2022-03-21'
---

# 前言：
本篇文章纯属个人看书学习的学习笔记， 有不妥的地方请多多评论指导～


-   学习Array的变化侦测
-   Array是如何追踪变化
-   在Array中拦截器是如使用
-   收集依赖
-   获取Observer实力
-   侦测Array的新增和元有元素的变化

# 1、Array的变化侦测

举例子:

```
this.list.push(1)
```

在Object中的侦测方式是通过`getter/setter`实现的，但是上面这个例子使用了`push`方法来改变数组，并不会触发`getter/setter`方法。

**因为可以通过`Array`原型上的方法来改变数组的内容， 所以`Object`那种通过`getter/setter`的实现方式就行不通了。**



# 2、Array如何追踪变化

注意：ES6之前，`JavaScript`并没有提供元编程的能力， 也就是**没有提供可以拦截原型方法的能力。** 但是我们**可以用自定义的方法去覆盖原生的原型方法。**

****

例如：用一个拦截器去覆盖`Array.prototype`。之后每当使用Array原型上的方法操作数组的时候， 都是执行的是拦截器中提供的方法。这样通过拦截器，我们就可以追踪到Array的变化了.

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1956a15fd4ca4d518d2540b12d3ec05e~tplv-k3u1fbpfcp-zoom-1.image)

使用拦截器覆盖原生方法。

# 3、拦截器

如何实现这个拦截器？拦截器其实就是一个和`Array.prototype`一样的`Object`,里面包含的属性一摸一样，只不过这个`Object`中某些可以改变数组自身内容的方法是我们**处理过的**。

在JavaScript中， Array原型上可以改变数组自身内容的方法有7个：`push、pop、shift、unshift、splice、sort和reverse.`

实现拦截器的代码如下：

```
const arrayProto = Array.prototype
export const arrayMethods = Object.create(arrayProto)

;[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
].forEach((method)=>{
  //缓存原始方法
  const original = arrayProto[method]
  Object.defineProperty(arrayMethods,method,{
    value:function mutator(...args){
      return original.apply(this,args)
    },
    enumerable:false,
    writable:true,
    configurable:true
  })
})	
```

`arrayMethods`继承自`Array.prototype`，拥有它的所有功能。用`arrayMethods`去覆盖`Array.prototype.

arrayMethods`上使用`Object.defineProperty`方法将可以改变原数组自身内容的方法进行封装。

当使用push方法的时候， 其实是调用的`arrayMethods.push`，对应的就是执行`mutator`函数。




在`mutator`执行`original`即原生`Array.prototype`上的方法， 来做它对应该做的事儿。

所以，我们可以在`mutator`函数中做一些其他的事儿， 例如新增发送变化的通知等。

# 4、使用拦截器覆盖Array原型

想要让拦截器生效， 就需要用它去覆盖`Array.prototype`。但是又不能直接去覆盖，因为这样会污染全局的`Array`.

实际上希望拦截只针对哪些被侦测了变化的数据生效，换句话说就是希望拦截器只能覆盖哪些响应式数组的原型（例如7个可以改变原数组的方法）。

将数据变成响应式的， 需要通过`Observer`，所以只要在`Observer`中使用拦截器覆盖那些即将被转换为响应式`Array`类型数据的原型就可以了。

例如：

```
export class Observer{
  constructor(value){
    this.value = value;
    
    if(Array.isArray(value)){ //新增兼容数组
      value.__proto__ = arrayMethods
    }else{
      this.walk(value)
    }
  }
}
```

\


`value.__proto__ = arrayMethods` 的作用就是将拦截器（加工后具备拦截功能的`arrayMethods`）赋值给` value.__proto__  `，通过` __proto__  `可以巧妙地实现覆盖value原型的功能。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4c49acfc81684b99875d7128931421d1~tplv-k3u1fbpfcp-zoom-1.image)

`__proto__`**是`Object.getPrototypeOf` 和 `Object.setPrototypeOf`的早期实现，所以使用ES6中的，`Object.setPrototypeOf`来代替** `__proto__` **完全可以实现一样的效果。**

\


# 5、将拦截器方法挂载到数组的属性上

`__proto__`访问原型的方式，并不是所有浏览器都支持， 所以我们需要处理不能使用`  __proto__ `的情况 **。**

****

Vue的做法很简单粗暴：如果不能使用 `__proto__` **，** 就直接讲`arrayMethods`身上的这些方法设置到被侦测的数组上：

```
import {arrayMethods} from './array'

//判断__proto__是否可用
const hasProto = '__proto__' in {}
const arrayKeys = Object.getOwnPropertyNames(arrayMethods)

export class Observer{
  constructor(value){
    this.value = value;
    
    if(Array.isArray(value)){ //新增兼容数组
      const augment = hasPro
         ? protoAugment
         : copyAugment
      augment(value,arrayMethods,arrayKey)
    }else{
      this.walk(value)
    }
  }
  ...
}
  

function protoAugment(target,src,keys){
  target.__proto__ = src
}

function copyAugment(target,src,keys){
  for(let i=0,l=keys.length; i<l;i++){
    const key = keys[i]
    def(target,key,src[key])
  }
}
```




`hasProto`判断浏览器是否支持`  __proto__ ` **：** 如果支持则用`protoAugment`来覆盖原型；如果不支持，则调用`copyAugment`函数将拦截器挂在到value上。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9645ecbb37c346b0ad18895fb80b7e7a~tplv-k3u1fbpfcp-zoom-1.image)

当访问一个对象的方法是你， 只有其自身不存在这个方法，才回去它的原型上找到这个方法。

# 6、如何收集依赖

之所以创建拦截器，**本质上是为了得到一种能力，一种当数组的内容发生变化时得到通知的能力**。

**Object中，是在`defineReactive`中的`getter`里使用Dep收集的，每个`key`都会有一个对应的`Dep`列表来存储依赖。**

****

==> 在getter中收集依赖，依赖被存储在Dep里

而数组在哪里收集依赖？

-   数组也是在getter
-   而`Array`的依赖和`Object`一样，也在`defineReactive`中收集：
-   `Array`在`getter` 中收集依赖， 在拦截器中触发依赖

```
function defineReactive(data,key,val){
  if(typeof val === 'object') new Observer(val)
  let dep = new Dep();
  Object.defineProperty(data,key,{
    enumerable:true,
    configurable:true,
    get:function(){
      dep.depend();//在这里收集Array的依赖
      return val;
    },
    set:function(newVal){
      if(val === newVal){
        return
      }
      dep.notify()
      val = newVal
    }
  })
}	
```

# 7、依赖列表存在哪儿

`Vue.js`把`Array`的依赖存放在`Observer`中：

```
export class Observer{
  constructor(value){
    this.value = value
    this.dep = new Dep() //新增Dep
    if(Array.isArray(value)){
    
      const augment = hasProto ? protoAugment:copyAugment
      augment(value,arrayMethods,arrayKey)
    }else{
      this.walk(value)
    }
  }
  ...
}
```

为什么数组的`dep`（依赖）要保存在`Observer`实例上呢？

-   因为`getter`中可以访问到`Observe`实例
-   同时在`Array`拦截器中也可以访到`Observe`实例

# 8、收集依赖

```
function defineReactive(data,key,val){
  let childOb = observe(val) //修改
  let dep = new Dep();
  Object.defineProperty(data,key,{
    enumerable:true,
    configurale:true,
    get:function(){
      dep.depend()
      
      //新增
      if(childOb){
        childOb.dep.depend();
      }
      return val;
    }
    set:function(newVal){
      if(val === newVal) return
      dep.notify()
      val = newVal
    }
  })
  
}
```




```
// 尝试为value创建一个Observer实例
// 如果创建成功，直接返回新创建的Observer实例
// 如果value已经存在一个Observer实例，则直接返回它

export function observe(value,asRootData){
  if(!isObject(value)) return
  let ob
  if(hasOwn(value,'__ob__') && value.__ob__ instanceof Observer){
    ob = value.__ob__
  }else{
    ob = new Observer(value)
  }
  return ob;
}
```



上述代码中， 新增了函数`observe`：

-   `observe`函数尝试创建一个`Observer`实例
-   如果`value`已经是响应式数据， 则不需要再次创建`Observer`实例
-   已有时，直接返回已创建的`Observer`实例，避免重复侦测`value`变化的问题。



通过这样的方式可以为数组收集依赖。

# 9、在拦截器中获取Observer实例

如何在拦截器中访问`Observer`实例？

-   因为`Array`拦截器是对原型的一种封装，所以可以在拦截器中访问到`this`（当前正在被操作的数组）
-   `dep`保存在`Observer`中，所以需要在`this`上读到`Observer`的实例



```
//工具函数
function def(obj,key,val,enumerable){
  Object.defineProperty(obj,key,{
    value:val,
    enumerable:!!enumerable,
    writable:true,
    configurable:true,
  })
}

export class Observer{
  constructor(value){
    this.value = value;
    this.dep = new Dep();
    def(value,'__ob__',this)
    
    if(Array.isArray(value)){
      const augment = hasProto ? protoAugment:copyAugment;
      augment(value,arrayMethods,arrayKey)
    }else {
      this.walk(value)
    }
  }
  ...
}
```

在`Observer`中新增了一段代码，它可以在`value`上新增一个不可枚举的属性 `__ob__`，这个属性的值就是当前`Observer`的实例。

之后就可以通过数组数据的 `__ob__`属性拿到`Observer`实例，然后就可以拿到 ` __ob__  `上的`dep`。

`__ob__`还可以用来标记当前value是否已经被Observer转换成了响应式数据。




换句话说：

-   所有被侦测了变化的数据身上都会有一个`__ob__`属性来表示它们是响应式的。
-   通过`__ob__`判断

<!---->

-   -   如果value是响应式的，则直接返回 `__ob__`
    -   如果不是响应式的，则使用`new Observer`来将数据转换成响应式数据。

<!---->

-   当value身上被标记了`__ob__`之后，就可以通过`value.__ob__`来访问`Observer`实例
-   如果是Array拦截器，因拦截器是原型方法

<!---->

-   -   可直接通过`this.__ob__`来访问`Observer`实例。




```
;[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
].forEach((method)=>{
  //缓存原始方法
  const original = arrayProto[method]
  Object.defineProperty(arrayMethods,method,{
    value:function mutator(...args){
      const ob = this.__ob__ //新增
      return original.apply(this,args)
    },
    enumerable:false,
    writable:true,
    configurable:true
  })
})	
```

我们在mutator函数里通过this.__ob__ 来获取Observer实例。

# 10、向数组的依赖发送通知

当侦测到数组发生变化时，会向依赖发送通知。

-   首先要可以访问到依赖。
-   在拦截器中访问`Observer`实例
-   只需在`Observer`实例中拿到`dep`属性
-   最后直接发通知即可

```
;[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
].forEach((method)=>{
  //缓存原始方法
  const original = arrayProto[method]
  dep(arrayMethods,method,function mutator(...args){
    const result = original.apply(this,args)
    const ob = this.__ob__
    ob.dep.notify() //向依赖发送消息
    return result;
  })
})	
```

上面的代码中，我们调用了`ob.dep.notify()`去通知依赖`（Watcher）`数据发生了改变。

# 11、侦测数组中元素的变化

所有响应式数据的子数据都要侦测，不论是Object中的数据还是Array中的数据。

如何侦测**所有数据子集**的变化？



在Observer中新增一些处理， 让其可以将Array也转换成响应式的：

```
export class Observer{
  constructor(value){
    this.value = value;
    def(value,'__ob__',this)
    
  
    if(Array.isArray(value)){ //新增兼容数组
      this.observerArray(value)
    }else{
      this.walk(value)
    }
  }
  ...
}
  
//侦测Array中的每一项
 observerArray(items){
   for(let i=0,l=items.length;i<l;i++){
     observe(items[i])
   }
   ...
 }
```



这里新增了`observeArray`方法,

-   其作用是循环`Array`中的每一项，
-   执行`observe`函数来侦测变化。

前面介绍过`observe`函数，其实就是将数组中的每个元素都执行一遍`new Observer`，这很明显是一个递归的过程。

# 12、侦测新增元素的变化

## 12.1 获取新增元素

在上面的代码中，我们通过`switch`对`method`进行判断，如果`method`是`push`、`unshift`、`splice`这种可以新增数组元素的方法，那么从`args`中将新增元素取出来，暂存在`inserted`中。

```
;[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
].forEach((method)=>{
  //缓存原始方法
  const original = arrayProto[method]
  def(arrayMethods,method,function mutator(...args){
    const result = original.apply(this,args)
    const ob = this.__ob__
    let inserted
    switch(method){
      case 'push':
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.slice(2)
        break;
    }
    ob.dep.notify() //向依赖发送消息
    return result;
  })
})	
```

接下来，我们要使用`Observer`把`inserted`中的元素转换成响应式的。

## 12.2 使用Observer侦测新增元素

我们可以在拦截器中通过`this`访问到`  __ob__ `，然后调用 ` __ob__  `上的`observeArray`方法就可以了:

```
;[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
].forEach((method)=>{
  //缓存原始方法
  const original = arrayProto[method]
  def(arrayMethods,method,function mutator(...args){
    const result = original.apply(this,args)
    const ob = this.__ob__
   
    let inserted
    switch(method){
      case 'push':
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.slice(2)
        break;
    }
    if(inserted) ob.observeArray(inserted) //新增
    ob.dep.notify() //向依赖发送消息
    return result;
  })
})	
```



上述代码中，我们从`this.__ob__` 上拿到`Observer`实例后，如果有新增元素，则使用`ob.observeArray`来侦测这些新增元素的变化。

# 13、关于Array的问题

因为Vue对Array的变化侦测是**通过拦截原型**的方式实现的，所以有些数组操作Vue.js是拦截不到的，比如：

```
this.list[0] = 2
```

修改数组中的第一个元素的值，无法检测到数组的变化，所以并不会触发`re-render`或`watch`



再例如：

```
this.list.length = 0;
```

这个清空数组操作也无法侦测到数组的变化，所以也不会触发`re-render`或`watch`等。

因为`Vue.js`的实现方式决定了无法对上面举的两个例子做拦截，也就没有办法响应.

在ES6之前，无法做到模拟数组的原生行为，所以拦截不到也是没有办法的事情。

ES6提供了元编程的能力，所以有能力拦截，现在的`Vue3`就是使用ES6提供的`Proxy`来实现这部分功能，从而解决这个问题。



# 14、总结

1、`Array`追踪变化的方式和`Object`不一样。

-   因为它是通过方法来改变内容的，所以我们通过创建拦截器去覆盖数组原型的方式来追踪变化。

2、 为了不污染全局`Array.prototype`，我们在`Observer`中只针对那些需要侦测变化的数组使用 ` __proto__  `来覆盖原型方法

-   但 ` __proto__  `在ES6之前并不是标准属性，不是所有浏览器都支持它。
-   针对不支持`  __proto__  `属性的浏览器，我们直接循环拦截器，把拦截器中的方法直接设置到数组身上来拦截`Array.prototype`上的原生方法。

3、`Array`收集依赖的方式和`Object`一样，都是在`getter`中收集。

-   由于使用依赖的位置不同，数组要在拦截器中向依赖发消息
-   所以依赖不能像`Object`那样保存在`defineReactive`中
-   而是把依赖保存在了`Observer`实例上。

4、在`Observer`中，我们对每个侦测了变化的数据都标上印记`  __ob__ `，并把`this`（Observer实例）保存在 ` __ob__  `上。

主要作用：

-   为了标记数据是否被侦测了变化（保证同一个数据只被侦测一次）
-   可以很方便地通过数据取到`  __ob__ `，从而拿到`Observer`实例上保存的依赖。
-   当拦截到数组发生变化时，向依赖发送通知。




5、除了侦测数组**自身的变化**外，**数组中元素发生的变化**也要侦测。

-   调用`observeArray`方法将数组中的每一个元素都转换成响应式的并侦测变化。



6、除了侦测已有数据外，当用户使用`push`等方法向数组中**新增数据**时，**新增的数据也要进行变化侦测**。

-   如果是`push、unshift和splice`方法

<!---->

-   -   从参数中将新增数据提取出来
    -   然后使用`observeArray`对新增数据进行**变化侦测**。

7、由于在ES6之前，`JavaScript`并没有提供元编程的能力，所以对于数组类型的数据，一些语法无法追踪到变化。

-   只能拦截原型上的方法
-   无法拦截数组特有的语法
-   例如使用`length`清空数组的操作就无法拦截。
