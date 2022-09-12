(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{423:function(a,e,v){"use strict";v.r(e);var _=v(2),t=Object(_.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"一、题目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、题目"}},[a._v("#")]),a._v(" 一、题目")]),a._v(" "),e("p",[e("code",[a._v("598.范围求和 II")])]),a._v(" "),e("p",[a._v("给你一个"),e("code",[a._v("m x n")]),a._v(" 的矩阵 "),e("code",[a._v("M")]),a._v("，初始化时所有的 "),e("code",[a._v("0")]),a._v("和一个操作数组 "),e("code",[a._v("op")]),a._v("，其中 "),e("code",[a._v("ops[i] = [ai, bi]")]),a._v(" 意味着当所有的"),e("code",[a._v("0 <= x < ai")]),a._v("和 "),e("code",[a._v("0 <= y < bi")]),a._v(" 时， "),e("code",[a._v("M[x][y]")]),a._v(" 应该加 "),e("code",[a._v("1")]),a._v("。")]),a._v(" "),e("p",[a._v("在 执行完所有操作后 ，计算并返回 矩阵中最大整数的个数 。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b45f80be360a409fba0a3f1eca3492eb~tplv-k3u1fbpfcp-watermark.image?",alt:"ex1.jpeg"}})]),a._v(" "),e("p",[a._v("示例 1:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("输入: m = 3, n = 3，ops = [[2,2],[3,3]]\n输出: 4\n解释: M 中最大的整数是 2, 而且 M 中有4个值为2的元素。因此返回 4。\n")])])]),e("p",[a._v("示例 2:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("输入: m = 3, n = 3, ops = [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]\n输出: 4\n")])])]),e("p",[a._v("示例 3:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("输入: m = 3, n = 3, ops = []\n输出: 9\n")])])]),e("p",[a._v("提示:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("1 <= m, n <= 4 * 104\n0 <= ops.length <= 104\nops[i].length == 2\n1 <= ai <= m\n1 <= bi <= n\n")])])]),e("p",[a._v("来源：力扣（LeetCode）\n链接：https://leetcode-cn.com/problems/range-addition-ii")]),a._v(" "),e("h2",{attrs:{id:"二、分析解题思路"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、分析解题思路"}},[a._v("#")]),a._v(" 二、分析解题思路")]),a._v(" "),e("h3",{attrs:{id:"思路一"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#思路一"}},[a._v("#")]),a._v(" 思路一")]),a._v(" "),e("p",[a._v("首先来读题目：")]),a._v(" "),e("ul",[e("li",[a._v("给定一个"),e("code",[a._v("m*n")]),a._v("的二维数组"),e("code",[a._v("M")]),a._v("，每项的值初始化是0")]),a._v(" "),e("li",[a._v("再给定一个操作的数组：op，也是一个二维数组")]),a._v(" "),e("li",[a._v("op中的ops[i] = [ai, bi]，当所有的"),e("code",[a._v("0 <= x < ai")]),a._v("和 "),e("code",[a._v("0 <= y < bi")]),a._v(" 的时候时， M[x][y] 应该加 1。")])]),a._v(" "),e("p",[a._v("综上：每一次的操作，给定一个"),e("code",[a._v("(a,b)")]),a._v(",遍历，将"),e("code",[a._v("M")]),a._v("矩阵中的所有满足 "),e("code",[a._v("0<= i <= a")]),a._v(" 及 "),e("code",[a._v("0<= j <=b")]),a._v("的位置即"),e("code",[a._v("(i，j)")]),a._v("全部加上1。")]),a._v(" "),e("p",[a._v("因为"),e("code",[a._v("a")]),a._v(","),e("code",[a._v("b")]),a._v("都是正数，所以(0,0)总是满足条件，并且最终位置(0,0)的数值就等于操作的次数。")]),a._v(" "),e("p",[a._v("所以，我们的任务就等价于找出"),e("code",[a._v("M")]),a._v("矩阵中所有满足要求的次数刚好等于操作次数的位置。")]),a._v(" "),e("p",[a._v("假设："),e("code",[a._v("k")]),a._v(",那么"),e("code",[a._v("(i,j)")]),a._v("就需要满足以下调价")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("{ 0<= i <= a0, 0<= i <= a1,···，0<= i <= ak-1\n{ 0<= j <= b0, 0<= j <= b1,···，0<= j <= bk-1\n")])])]),e("p",[a._v("等价于：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("{ 0<= i <= mink(a)\n{ 0<= j <= mink(b)\n")])])]),e("p",[a._v("这样，我们就只需要求出"),e("code",[a._v("a")]),a._v("和"),e("code",[a._v("b")]),a._v("中的最小值，分别标记为"),e("code",[a._v("mink(a)")]),a._v("和"),e("code",[a._v("mink(b)")]),a._v(",所以满足"),e("code",[a._v("(1)")]),a._v("式的"),e("code",[a._v("(i,j)")]),a._v("一共有 "),e("code",[a._v("minka * minkb")]),a._v("对。")]),a._v(" "),e("h2",{attrs:{id:"三、js代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、js代码"}},[a._v("#")]),a._v(" 三、JS代码")]),a._v(" "),e("h3",{attrs:{id:"_3-1-思路一-维护所有操作的交集"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-思路一-维护所有操作的交集"}},[a._v("#")]),a._v(" 3.1 思路一：维护所有操作的交集")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('/**\n * @param {number} m\n * @param {number} n\n * @param {number[][]} ops\n * @return {number}\n */\n var maxCount = function(m, n, ops) {\n    let mina = m, minb = n;\n    for(const op of ops){\n        mina = Math.min(mina,op[0]);\n        minb = Math.min(minb,op[1]);\n        console.log("op:",op)\n        console.log("op[0]: ",op[0]," op[1]: ",op[1])\n        console.log("mina: ",mina," minb: ",minb)\n    }\n    return mina * minb;\n};\n\nlet m = 3, n = 3, ops=[[2,2],[3,3]];\nlet result = maxCount(m,n,ops);\nconsole.log(result)\n')])])]),e("p",[e("strong",[a._v("复杂度：")])]),a._v(" "),e("p",[a._v("时间复杂度：O(k),其中k是数组"),e("code",[a._v("ops")]),a._v("的长度")]),a._v(" "),e("p",[a._v("空间复杂度：O(1)")])])}),[],!1,null,null,null);e.default=t.exports}}]);