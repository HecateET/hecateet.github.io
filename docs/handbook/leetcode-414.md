---
title: leetcode-414.第三大的数：「数组遍历」+「排序」+「去重」
author: 阿源 Hecate
date: '2022-01-19'
---

## 前言

自2022年01月17日起，开始了阿源的菜鸟算法成长之路，感谢冴羽大佬及群内小伙伴发起的算法刷题打卡活动，忙碌一周终于开始了。这是阿源「Hecate」刷法成长之路的第三天。今天早起跑步了，所以早晨没能完成算法题目的文章输出。 晚上部门聚餐结束后到家，把早晨的题解和代码分析了总结了如下：

上篇文章二话不说的立下了个flag：每天一道题，连续100天。阿源加油！

在此顺带回答下为什么要开始刷算法的问题。
> 我比较好奇刷算法题是为了什么？编程思维？应对面试？花费大量时间在算法上是否是一件比较高效的事![[疑问]](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c8f73c88bea64701afcd91ef1b6b8e2f~tplv-k3u1fbpfcp-zoom-1.image)

上篇算法打卡中，有小伙伴提出了这个问题。确实很值得深思。
不过我想的算法之旅可能是如下比较简单：

> 个人的话一直知道算法很重要，至于自己为啥开始。
> 不管是为了之后的面试也好，还是整体编程思维。
> - 第一个转折点是，上周的做了一套题，里面的算法没做出来有点被打击到了，那种挫败感自己不能接受
> - 第二个原本就有开始的计划，之前只看了算法书，但是没咋刷题。（开始算法之旅，就是努力缩小自己所知道和能做到的差距）
> - 第三个正好在冴羽大佬的群里看到大家在讨论算法，然后志同道合的小伙伴们开始拉群组建一个算法小分队，算我一个开始的契机
> - 最后想通过刷算法来补缺js基础知识点。然后再结合算法提升数据结构和编程思维，结合运用到实际开发工作中， 包括更加容易理解源码里的思想。
> 



## 一、题目

leetcode  414
给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。


示例 1：
```
输入：[3, 2, 1]
输出：1
解释：第三大的数是 1 。
```

示例 2：

```
输入：[1, 2]
输出：2
解释：第三大的数不存在, 所以返回最大的数 2 。
```


示例 3：
```
输入：[2, 2, 3, 1]
输出：1
解释：注意，要求返回第三大的数，是指在所有不同数字中排第三大的数。
此例中存在两个值为 2 的数，它们都排第二。在所有不同数字中排第三大的数为 1 。
```

提示：
```
1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
```

进阶：你能设计一个时间复杂度 O(n) 的解决方案吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/third-maximum-number

## 二、分析解题思路

### 2.1 方法一：排序+去重
求解第三个最大的数目，提供的例子有三种， 分别代表了三种不同的情况。

- 案例一：正常正常数组内各个数不重复的情况： 只需要对数组进行排序降序，就根据arr[2] 第三个数得到第三大的数。

- 案例二是：当数组中不超过三个的时候， 即没有第三大的数的时候， 直接返回最大的数目。

- 案例三： 案例输出，则代表的是， 数组中有相同的数字的时候。 通过简单的排序的话，会出现这种情况如：`arr =[1,5,6,6,3,3,2,9]` 降序后` arr = [9,6,6,5,3,3,2,1]` 的情况，这时，获取`arr[2] = 6`并非数组中第三大的数，所以需要排序后去重。或者先去重再排序， 得到的降序，就可以获取到正确的答案输出 。

详细代码可以看 3.1 排序+去重

### 2.2 方法二：一次遍历
遍历数组 定义三个变量来记录， 最大的前三个数。 如let a,b,c; a:最大值，b次大值，c第三大值。 初始化这三个数为无穷小的，就可以比数组中的原数都小了

遍历数组，判断数组的元素 item：
- 如果 item > a, 替换a，b，c 的数值。 让 c=b； b=a； a=item 模拟插入有序集合，并删除有序集合中的最小值的过程。
- 如果 a > item > b, 类似的，替换b和c的值，a保持不变。 c=b； b=item；
- 如果 b > item > c, 类似的，替换c的值，a，b保持不变。 c = item
- 其他情况不做处理。 

遍历结束后，在判断，如过c 第三大的值，还是我们始定义的「无穷小」，则说明数组中不存在第三大的数值， 所以返回数组中的最大值 a，否则返回第三大的值 c；

详细代码请看 3.2 一次遍历， 变量替换

## 三、JS代码

### 3.1 排序+去重
```
 var thirdMax = function(nums) {
    //降序
    nums= nums.sort((a,b)=>{
        return  b-a
    })
    // 去重
    nums = [...new Set(nums)]
    return nums.length >= 3 ?nums[2]:nums[0];
};
```
**复杂度分析：**

时间复杂度：O(nlogn)，其中 n 是数组nums 的长度。排序需要 O(nlogn) 的时间。

空间复杂度：O(logn)。排序需要的栈空间为O(logn)。
### 3.2 一次遍历
```
var thirdMax = function(nums){
    let a = -Number.MAX_VALUE ,b= -Number.MAX_VALUE,c= -Number.MAX_VALUE;
    for(const item of nums){
        if(item>a){
            c=b;
            b=a;
            a=item;
        }else if(a>item && item>b){
            c = b;
            b = item;
        }else if(b>item && item>c){
            c = item;
        }
    }
    console.log(a,b,c);
    return c=== -Number.MAX_VALUE ? a:c;
}
```
**复杂度分析：**

时间复杂度：O(n)，其中 n 是数组 nums 的长度。

空间复杂度：O(1)。


## 四、总结
这也是一道简单的数组遍历的算法题，思路可以有多种，目前我只写了javascript中的两种情况。 题目算法虽简单， 但边界值和几种情况需要单独考虑，细心些～。本次两种解法中，可以提取一部分知识点，接下来复习下上面用到的知识点。
### 4.1 知识点
#### 1、for of用法
`for...of` 语句在可迭代对象（包括 `Array`，`Map`，`Set`，`String`，`TypedArray`，`arguments` 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句

`variable`  在每次迭代中，将不同属性的值分配给变量。

`iterable`  被迭代枚举其属性的对象

语法：
```
for (variable of iterable) {
    //statements
}
```
案例：
```
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// > "a"
// > "b"
// > "c"
```

##### for...of与for...in的区别
无论是for...in还是for...of语句都是迭代一些东西。它们之间的主要区别在于它们的迭代方式。

`for...in` 语句以任意顺序迭代对象的可枚举属性。

`for...of` 语句遍历可迭代对象定义要迭代的数据。

以下示例显示了与Array一起使用时，for...of循环和for...in循环之间的区别。

```
Object.prototype.objCustom = function() {};
Array.prototype.arrCustom = function() {};

let iterable = [3, 5, 7];
iterable.foo = 'hello';

for (let i in iterable) {
  console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (let i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // logs 0, 1, 2, "foo"
  }
}

for (let i of iterable) {
  console.log(i); // logs 3, 5, 7
}
```

#### 2、ES6之 Set
`Set` 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。可以理解成是不重复的数组。

Set 实现原理是哈希表:
静态属性：
- get Set[@@species] 构造函数用来创建派生对象.

实例属性：
- size ：返回 Set 对象中的值的个数


方法：
- add() 在Set对象尾部添加一个元素。返回该Set对象。
- clear() 移除Set对象内的所有元素。
- delete() 移除Set中与这个值相等的元素，返回Set.prototype.has(value)在这个操作前会返回的值（即如果该元素存在，返回true，否则返回false）。Set.prototype.has(value)在此后会返回false。
- entrier() 返回一个新的迭代器对象，该对象包含Set对象中的按插入顺序排列的所有元素的值的[value, value]数组。为了使这个方法和Map对象保持相似， 每个值的键和值相等
- forEach() 按照插入顺序，为Set对象中的每一个值调用一次callBackFn。如果提供了thisArg参数，回调中的this会是这个参数。

- has() 返回一个布尔值，表示该值在Set中存在与否。
- keys() 与values()方法相同，返回一个新的迭代器对象，该对象包含Set对象中的按插入顺序排列的所有元素的值。
- values() 返回一个新的迭代器对象，该对象包含Set对象中的按插入顺序排列的所有元素的值。


数组去重复原理[...new Set(arr)]

详细查看MDN文档如何使用：[MDN-Set](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set)


#### 3、Number.MAX_VALUE
`Number.MAX_VALUE` 属性表示在 `JavaScript` 里所能表示的最大数值。

Number.MAX_VALUE 属性的属性特性：
- writable :false
- enumerable :false
- configurable: false

`MAX_VALUE` 属性值接近于 `1.79E+308`。大于 `MAX_VALUE` 的值代表 "Infinity"。


### 4.2 最优解

自然是选择时间复杂度、空间复杂度比较小方法来实现。

自然对于时间复杂度和空间复杂度需要有个取舍，具体看需求倾向哪侧。

时间复杂度：O(1)<O(logn)<O(n)<O(n^2)
其他形式的复杂度需要分析：O(nlogn)、O(n^3)、O(mn)、O(2^n)、O(n!)


## 参考
- [MDN-for用法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of)
- [MDN-MAX_VALUE](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE)
- [MDN-Set](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set)



<LastUpdated />