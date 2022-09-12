---
title: leetcode-448. 找到所有数组中消失的数字+JavaScript中indexOf方法&哈希表
author: 阿源 Hecate
date: '2022-01-25'
---

## 一、题目

448. 找到所有数组中消失的数字
给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。    


示例 1：

```
输入：nums = [4,3,2,7,8,2,3,1]
输出：[5,6]
```

示例 2：

```
输入：nums = [1,1]
输出：[2]
```


提示：
```
- n == nums.length
- 1 <= n <= 105
- 1 <= nums[i] <= n
```

进阶：你能在不使用额外空间且时间复杂度为 O(n) 的情况下解决这个问题吗? 你可以假定返回的数组不算在额外空间内。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array

## 二、分析解题思路
如题：给出一个有n个整数的数组。找出所有在 [1,n] 范围内的但是没有出现在nums数组中的数字， 找到他们并以数组的形式返回。

### 思路一 （遍历+indexOf）

根据案例可以有大概思路：
- 计算出这个数组的长度，`len = nums.length` ,1~len
- 遍历找出不在1～len的数i，不在nums中的数。使用indexOf
- 即得到结果

举例：
```
let nums = [4,5,6,8,9,1,5,2,5,9]
 
nums的长度是：10， [1,n] 就是1～10 ，[1,2,3,4,5,6,7,8,9,10]
将nums进行升序处理：nums=[1,2,4,5,5,5,6,8,9,9]
遍历对比后可以得到未出现的数：[3,7,10]
```

代码见3.1

### 思路二（哈希表）

## 三、JS代码

### 3.1 （遍历+indexOf）
```
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    let lessNums = []
    let len = nums.length
    nums.sort((a,b)=>a-b)
    for(let i=1;i<=len;i++){
        if(nums.indexOf(i) == -1){
            lessNums.push(i)
        }
    }
    return lessNums
};

let nums = [4,5,6,8,9,1,5,2,5,9]
let result = findDisappearedNumbers(nums);
console.log(result)
```

### 3.2 哈希表
## 四、总结
为什么indexOf的方法耗时那么久，咱们一起研究研究JavaScript中的indexOf
### 4.1 知识点

### 4.2 最优解
