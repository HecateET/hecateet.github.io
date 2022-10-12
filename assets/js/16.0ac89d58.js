(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{421:function(t,a,s){"use strict";s.r(a);var e=s(2),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"一、题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、题目"}},[t._v("#")]),t._v(" 一、题目")]),t._v(" "),a("p",[a("code",[t._v("283. 移动零")])]),t._v(" "),a("p",[t._v("给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。")]),t._v(" "),a("p",[t._v("请注意 ，必须在不复制数组的情况下原地对数组进行操作。")]),t._v(" "),a("p",[t._v("示例 1:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入: nums = [0,1,0,3,12]\n输出: [1,3,12,0,0]\n")])])]),a("p",[t._v("示例 2:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入: nums = [0]\n输出: [0]\n")])])]),a("p",[t._v("提示:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1 <= nums.length <= 104\n-231 <= nums[i] <= 231 - 1\n")])])]),a("p",[t._v("进阶：你能尽量减少完成的操作次数吗？")]),t._v(" "),a("p",[t._v("来源：力扣（LeetCode）\n链接：https://leetcode-cn.com/problems/move-zeroes")]),t._v(" "),a("h2",{attrs:{id:"二、分析解题思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、分析解题思路"}},[t._v("#")]),t._v(" 二、分析解题思路")]),t._v(" "),a("h3",{attrs:{id:"思路一-两次遍历"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路一-两次遍历"}},[t._v("#")]),t._v(" 思路一 两次遍历")]),t._v(" "),a("p",[t._v("第一次遍历数组，记录不等于将不等于0的数，往前移动，定义一个下标j=0，将遍历的非0的数赋值给nums[j]后，j++，遍历结束后j之后的数都是0。")]),t._v(" "),a("h2",{attrs:{id:"三、js代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、js代码"}},[t._v("#")]),t._v(" 三、JS代码")]),t._v(" "),a("h3",{attrs:{id:"_3-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1"}},[t._v("#")]),t._v(" 3.1")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" var moveZeroes = function(nums) {\n     let j=0;\n    for(let i=0;i<nums.length;i++){\n        if(nums[i]!== 0){\n            nums[j] = nums[i];\n            j++;\n        }\n    }\n    for(let i=j;i<nums.length;i++){\n        nums[i]=0;\n    }\n    return nums\n};\n")])])]),a("p",[t._v("复杂度：时间复杂度O(n)，空间复杂度O(1)")]),t._v(" "),a("h2",{attrs:{id:"四、总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、总结"}},[t._v("#")]),t._v(" 四、总结")]),t._v(" "),a("p",[t._v("复杂度：时间复杂度O(n)，空间复杂度O(1)")]),t._v(" "),a("h3",{attrs:{id:"_4-1-知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-知识点"}},[t._v("#")]),t._v(" 4.1 知识点")]),t._v(" "),a("h3",{attrs:{id:"_4-2-最优解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-最优解"}},[t._v("#")]),t._v(" 4.2 最优解")])])}),[],!1,null,null,null);a.default=r.exports}}]);