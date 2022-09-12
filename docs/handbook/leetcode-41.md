---
title: leetcode-41. 缺失的第一个正数：两次遍历& includes方法
author: 阿源 Hecate
date: '2022-01-28'
---

## 一、题目

41. 缺失的第一个正数
给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。

请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。
 
示例 1：

```
输入：nums = [1,2,0]
输出：3
```

示例 2：

```
输入：nums = [3,4,-1,1]
输出：2
```

示例 3：
```
输入：nums = [7,8,9,11,12]
输出：1
```

提示：
```
1 <= nums.length <= 5 * 105
-231 <= nums[i] <= 231 - 1
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/first-missing-positive

## 二、分析解题思路


### 思路一：两次遍历
初始数据处理：判断nums[i] 是否是正整数，其次判断nums[i]是否小于nums.length

1. 将原数组进行位移，使nums[i]尽量存放数字i+1
2. 遍历移位后的数组，查找位置与值不对应的最小的正整数

### 思路二：JavaScript的includes()方法
- 找出数组中缺失的第一个正数
    - 从1～nums.length开始寻找， 最多nums.length次数
    - 直接用原数组的下标开始查询
- includes()方法 判断一个数组中是否包含一个指定的值，如果存在则返回true,否则返回false。如果不存在的话，那结果就是i 
- 如果1～nums.length都出现，那结果就是nums.length+1

## 三、JS代码
### 3.1 两次遍历
```
 var firstMissingPositive = function(nums) {
    for(let i =0; i<nums.length; i++){
        while(nums[i]>0 && nums[i] <=nums.length && nums[i]!==nums[nums[i]-1]){
            let temp = nums[nums[i]-1];
            nums[nums[i]-1] = nums[i];
            nums[i] = temp;
        }
    }
    for(let i=0; i<nums.length; i++){
        if(nums[i]!=i+1){
            return i+1;
        }
    }
    return nums.length + 1
};
```

### 3.2 JavaScript中的includes()方法
```
var firstMissingPositive = function(nums) {
    for(let i=1;i<=nums.length;i++){
        if(!nums.includes(i)){
            return i
        }
    }
    return nums.length +1
}
```

