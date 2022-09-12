---
title: leetcode-283.移动零：数组两次遍历
author: 阿源 Hecate
date: '2022-02-12'
---

## 一、题目
 
`283. 移动零`

给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

请注意 ，必须在不复制数组的情况下原地对数组进行操作。

示例 1:
```
输入: nums = [0,1,0,3,12]
输出: [1,3,12,0,0]
```
示例 2:
```
输入: nums = [0]
输出: [0]
```

提示:
```
1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
```

进阶：你能尽量减少完成的操作次数吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/move-zeroes

## 二、分析解题思路

### 思路一 两次遍历
第一次遍历数组，记录不等于将不等于0的数，往前移动，定义一个下标j=0，将遍历的非0的数赋值给nums[j]后，j++，遍历结束后j之后的数都是0。


## 三、JS代码

### 3.1 
```
 var moveZeroes = function(nums) {
     let j=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!== 0){
            nums[j] = nums[i];
            j++;
        }
    }
    for(let i=j;i<nums.length;i++){
        nums[i]=0;
    }
    return nums
};
```
复杂度：时间复杂度O(n)，空间复杂度O(1)

## 四、总结
复杂度：时间复杂度O(n)，空间复杂度O(1)

### 4.1 知识点

### 4.2 最优解
