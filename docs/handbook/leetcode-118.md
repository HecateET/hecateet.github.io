---
title: leetcode-118. 杨辉三角：2次for循环+数学方法
author: 阿源 Hecate
date: '2022-02-13'
---

## 一、题目
118. 杨辉三角

给定一个非负整数 `numRows`，生成`「杨辉三角」`的前 `numRows` 行。

在`「杨辉三角」`中，每个数是它左上方和右上方的数的和。


![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6e3a71d629ce4bee88d1b486651e277a~tplv-k3u1fbpfcp-watermark.image?)

示例 1:
```
输入: numRows = 5
输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
```

示例 2:
```
输入: numRows = 1
输出: [[1]]
```


提示:
```
1 <= numRows <= 30
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/pascals-triangle

## 二、分析解题思路

### 2.1思路一
分析杨辉三角：

1.杨辉三角的每行的最左边和最右边的元素都是1。

2.在杨辉三角中， 除了每行的第一个和最后一个元素之外，每个数是它的左上方和右上方的数的和。

3.输入`numRows = 5 `,杨辉三角会有5行，且每行的元素个数根据行数递增，等于行数。推算， `let i=0;i<numRows;i++`,第i行的元素个数为`i+1`,初始化每行元素为1。

4.计算中间的元素的值：两次for循环， 初始化行数，并且计算中间的元素的值：左边上方：`arr[i-1][j-1]`,右上方：`arr[i-1][j]`


## 三、JS代码

### 3.1 思路一
```
/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    let arr = [];
    for(let i=0;i<numRows;i++){
        // 初始化
        const rows = new Array(i+1).fill(1);
        // 最左边和最右边的值都是1，所以j=0和j=length-1;不需要再单独计算
        for(let j=1;j<rows.length-1;j++){
            // 上一行的的下标：i-1, 左上角：j-1 和右上角：j
            rows[j] = arr[i-1][j]+arr[i-1][j-1]
        }
        arr.push(rows);
    }
    return arr;
};
let numRows = 5;
let result = generate(numRows);
console.log(result)

```

## 四、总结

复杂度：

时间复杂度：O(numRows^2)

空间复杂度：O(1)。