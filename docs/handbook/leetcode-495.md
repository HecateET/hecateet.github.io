---
title: leetcode-495.提莫攻击：「数组遍历」&「去重」
author: 阿源 Hecate
date: '2022-01-18'
---
## 前言

自2022年01月17日起，开始了阿源的菜鸟算法成长之路，感谢冴羽大佬及群内小伙伴发起的算法刷题打卡活动，忙碌一周终于开始了。 

## 一、题目
495. 提莫攻击

题目详情查看：
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/teemo-attacking



## 二、分析解题思路

### 2.1 清奇的脑回路（之错误🙅案例）

第一遍读完题目：

1、秒数是逐一递增的

2、对应timeSeries数组记录多少秒发起进攻

3、duçration 是进攻对应中毒的持续时间

第一种情况：
```
duration毒素持续的时间作用在对应的进攻时间，逐一往后推算 如[1,3],毒液持续2秒.

秒数时间线：1, 2, 3,4,5,6,7  

1秒时攻击，持续时间「1,2」
3秒攻击，持续时间「3,4」,将区间合并[1，2，3，4]，对应中毒总秒数就是 4
```

第二种情况：
```
遇到毒还没消耗完又进攻的时候，对应中毒影响的时间会受到影响，如[2,4,5,8],毒液持续3秒,秒数时间线：1，2，3，4，5，6，7，8，9，10，11。
原每秒数节点的攻击毒液持续时间段应该是：
对应2秒：「2，3，4」，4秒：「4，5，6」5秒：「5，6，7」，8秒：「8，9，10」
将其排成一列数组[2,3,4,4,5,6,5,6,7,8,9,10],只需要将数组去重后[2,3,4,5,6,7,8,9,10]对应数组的长度就是对应的中毒状态总秒数9
```
从上面分析后，思路就是：

- 遍历进攻时间的数组，得到对应秒数的持续时间数组

- 将所有进攻时刻的中毒事件数组合并去重

- 去重后的长度就是对应几次进攻后的总中毒时间

- 既然题目提示了3种情况， 需要注意边界的测试用例情况


阿巴巴巴，写了那多，我自己的好像思路清楚了许多，接下来尝试写代码，最终运行代码查看（3.1 错误代码🙅），发现不可行。


### 2.2 进一步分析（正确题解🙆）

上一步分析，部分是正确的，只是使用的执行算法逻辑不太可行， 接下来继续分析：

- timeSeries [t+ duration-1]  时间是中毒的 

- timeSeries[i]-timerSeries[i-1] >= duration 时， 说明上一次攻击到下一攻击到中毒时间已结束，中毒时间为 duration 

- timeSeries[i]-timerSeries[i-1]< duration 时，则上一次攻击的中毒时间还没结束，说一，上次中毒的时间则是： timeSeries[i]-timeSeries[i-1]
- 将每次攻击后，的中毒时间累加就是 总的持续中毒时间

### 2.3 换个角度看 2.1

在2.1 中读题后分解的方法，之后直接使用数组去存储又从二维数组在转不太聪明的样子。 不过2.1中思路换个角度换个算法还是可行的：

- 计算总的未去重的中毒时间： timeSerie.length * duration
- 判断攻击时间， 总中毒事件减去重复的时间
- 重复的时间计算： timeSerie[i]-timeSerie[i-1]< duration时（需要去重），多出的时间：duration-(timeSeries[i]-timeSeries[i-1]）

## 三、代码&复杂度分析

### 3.1 错误代码🙅
```
 var findPoisonedDuration = function(timeSeries, duration) {
     let arr = []
     //遍历数组
    timeSeries.forEach(item=>{
        let arr1 = []
        // 记录每一次攻击的中毒时间
        for(let i=0;i<duration;i++){
            arr1.push(item+i)
        }
        arr.push(arr1)
    })
    arr = arr.flat() //二维数组转1维数组
    //数组去重
    arr = arr.filter((item,index,arr)=>{
        return arr.indexOf(item,0) === index;
    })
    return arr.length
};
```
**复杂度分析：**
- 时间复杂度: O(n^2)+O(n)+O(n),所以是 O(n^2)
- 空间复杂度：O(n)， 所以空间复杂度是O(n), 其中n是上面arr的长度
分析：
- 随着n变大， 时间复杂度和空间复杂度会越来越大，所以导致运行超时间

### 3.2 正确代码✅

```
var findPoisonedDuration = function(timeSeries, duration) {
    let len = timeSeries.length, timeCount = 0;
    for(let i=1;i<len;++i){
        let oneCount = timeSeries[i] - timeSeries[i-1];
        if(oneCount>=duration){
            timeCount += duration;
        }else{
            timeCount += oneCount;
        }
    }
    timeCount+=duration
    return timeCount;
};
```
**复杂度分析：**
- 时间复杂度: O(n)
- 空间复杂度：O(1)

### 3.3 正确代码 ✅
```
var findPoisonedDuration = function(timeSeries, duration) {
    let timeCount = timeSeries.length * duration
    for(let i=1;i<timeSeries.length;i++){
        if(timeSeries[i]-timeSeries[i-1]<duration){
            timeCount -= duration-timeSeries[i]+timeSeries[i-1]
        }
    }
    return timeCount;
};
```
**复杂度分析：**
- 时间复杂度: O(n)
- 空间复杂度：O(1)

## 四、总结
本题目，虽然第一个思路不太可行，还超时了，因为其中隐含了另外两个算法导致时间复杂度和空间复杂度都不理想，当数目太大时，会导致运行超时。是一个典型的错误案例。

深深感慨下笔还需要考虑思路对不对啊， 刷算法的第二天，简单题让我感觉自己被摁在地上摩擦！

### 4.1 知识点
题目原本简单， 被我一个清奇的脑回路带偏。不过分析完时间复杂度和空间复杂度之后，最终还是要总结下上面一路摸爬滚打中涉及到的知识点：

 1. 二维数组转换一维数组；
 2. 一维数组如何去重
 3. JS中的数组方法

#### 1⃣️ 二维数组转一维数组
1、使用 `es5`的reduce方法 `arr.reduce(callback[,initialValue])`
```
var arr1 = [[0,1,3],[2,3],[4,5]]
var arr2 = 

```

2、利用`es6`的map函数 和递归
```
var arr1 =[[0,1,3],[2,3],[4,5]]
function flatten(arr){
    return [].concat(...arr.map(x=>
        Array.isArray(x) ? flatten(x):x
    ))
}
var arr2 = flatten(arr1)
```

3、 利用`apply`实现

```
var arr1 =[[0,1,3],[2,3],[4,5]]
var arr2 = [].concat.apply([],arr1);
```

4、 将数组变成字符串，利用`str.split(',')`实现（缺点：数组元素都变成字符串）

5、使用ES6 `Array.prototype.flat()`(缺点：有兼容问题)
flat() 方法会移除空项，但`undefined`、`null`会保留

具体内容实现本篇不展开讲解， 后续另作篇幅记录。

可参考：[js二维转一维数组](https://www.cnblogs.com/wang-xx/p/11268276.html)

#### 2⃣️ 数组去重复
1、利用ES6 Set去重

2、两次for循环， splice去重（ES5常用）

3、利用indexOf去重

4、利用sort()

5、利用includes

6、利用hasOwnProperty

7、利用filter

8、利用递归去重

9、利用Map数据结构去重

10、利用reduce+ includes

11、[...new Set(arr)]

具体内容实现本篇不展开讲解，后续另作篇幅记录。

可参考：[js中的12种去重方法](https://segmentfault.com/a/1190000016418021)

#### 3⃣️ JS中遍历的方法
1、for()
2、while 和 do...while语句
3、forEach
4、for-in
5、for-of

详细用法查看：[MDN：loop循环和迭代](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

### 4.2 最优解
根据第二部分的题解， 正确的解法可以有两种思路， 一个是区分两种不同的中毒持续时间，再将其累加。第二个是计算出总的正常中毒时间后，再减去重复的时间。 