(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{420:function(e,a,t){"use strict";t.r(a);var r=t(2),_=Object(r.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),a("p",[e._v("自2022年01月17日起，开始了阿源的菜鸟算法成长之路，感谢冴羽大佬及群内小伙伴发起的算法刷题打卡活动，忙碌一周终于开始了。这是阿源「Hecate」刷法成长之路的第三天。今天早起跑步了，所以早晨没能完成算法题目的文章输出。 晚上部门聚餐结束后到家，把早晨的题解和代码分析了总结了如下：")]),e._v(" "),a("p",[e._v("上篇文章二话不说的立下了个flag：每天一道题，连续100天。阿源加油！")]),e._v(" "),a("p",[e._v("在此顺带回答下为什么要开始刷算法的问题。")]),e._v(" "),a("blockquote",[a("p",[e._v("我比较好奇刷算法题是为了什么？编程思维？应对面试？花费大量时间在算法上是否是一件比较高效的事"),a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c8f73c88bea64701afcd91ef1b6b8e2f~tplv-k3u1fbpfcp-zoom-1.image",alt:"[疑问]"}})])]),e._v(" "),a("p",[e._v("上篇算法打卡中，有小伙伴提出了这个问题。确实很值得深思。\n不过我想的算法之旅可能是如下比较简单：")]),e._v(" "),a("blockquote",[a("p",[e._v("个人的话一直知道算法很重要，至于自己为啥开始。\n不管是为了之后的面试也好，还是整体编程思维。")]),e._v(" "),a("ul",[a("li",[e._v("第一个转折点是，上周的做了一套题，里面的算法没做出来有点被打击到了，那种挫败感自己不能接受")]),e._v(" "),a("li",[e._v("第二个原本就有开始的计划，之前只看了算法书，但是没咋刷题。（开始算法之旅，就是努力缩小自己所知道和能做到的差距）")]),e._v(" "),a("li",[e._v("第三个正好在冴羽大佬的群里看到大家在讨论算法，然后志同道合的小伙伴们开始拉群组建一个算法小分队，算我一个开始的契机")]),e._v(" "),a("li",[e._v("最后想通过刷算法来补缺js基础知识点。然后再结合算法提升数据结构和编程思维，结合运用到实际开发工作中， 包括更加容易理解源码里的思想。")])])]),e._v(" "),a("h2",{attrs:{id:"一、题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、题目"}},[e._v("#")]),e._v(" 一、题目")]),e._v(" "),a("p",[e._v("leetcode  414\n给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。")]),e._v(" "),a("p",[e._v("示例 1：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("输入：[3, 2, 1]\n输出：1\n解释：第三大的数是 1 。\n")])])]),a("p",[e._v("示例 2：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("输入：[1, 2]\n输出：2\n解释：第三大的数不存在, 所以返回最大的数 2 。\n")])])]),a("p",[e._v("示例 3：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("输入：[2, 2, 3, 1]\n输出：1\n解释：注意，要求返回第三大的数，是指在所有不同数字中排第三大的数。\n此例中存在两个值为 2 的数，它们都排第二。在所有不同数字中排第三大的数为 1 。\n")])])]),a("p",[e._v("提示：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("1 <= nums.length <= 104\n-231 <= nums[i] <= 231 - 1\n")])])]),a("p",[e._v("进阶：你能设计一个时间复杂度 O(n) 的解决方案吗？")]),e._v(" "),a("p",[e._v("来源：力扣（LeetCode）\n链接：https://leetcode-cn.com/problems/third-maximum-number")]),e._v(" "),a("h2",{attrs:{id:"二、分析解题思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、分析解题思路"}},[e._v("#")]),e._v(" 二、分析解题思路")]),e._v(" "),a("h3",{attrs:{id:"_2-1-方法一-排序-去重"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-方法一-排序-去重"}},[e._v("#")]),e._v(" 2.1 方法一：排序+去重")]),e._v(" "),a("p",[e._v("求解第三个最大的数目，提供的例子有三种， 分别代表了三种不同的情况。")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("案例一：正常正常数组内各个数不重复的情况： 只需要对数组进行排序降序，就根据arr[2] 第三个数得到第三大的数。")])]),e._v(" "),a("li",[a("p",[e._v("案例二是：当数组中不超过三个的时候， 即没有第三大的数的时候， 直接返回最大的数目。")])]),e._v(" "),a("li",[a("p",[e._v("案例三： 案例输出，则代表的是， 数组中有相同的数字的时候。 通过简单的排序的话，会出现这种情况如："),a("code",[e._v("arr =[1,5,6,6,3,3,2,9]")]),e._v(" 降序后"),a("code",[e._v("arr = [9,6,6,5,3,3,2,1]")]),e._v(" 的情况，这时，获取"),a("code",[e._v("arr[2] = 6")]),e._v("并非数组中第三大的数，所以需要排序后去重。或者先去重再排序， 得到的降序，就可以获取到正确的答案输出 。")])])]),e._v(" "),a("p",[e._v("详细代码可以看 3.1 排序+去重")]),e._v(" "),a("h3",{attrs:{id:"_2-2-方法二-一次遍历"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-方法二-一次遍历"}},[e._v("#")]),e._v(" 2.2 方法二：一次遍历")]),e._v(" "),a("p",[e._v("遍历数组 定义三个变量来记录， 最大的前三个数。 如let a,b,c; a:最大值，b次大值，c第三大值。 初始化这三个数为无穷小的，就可以比数组中的原数都小了")]),e._v(" "),a("p",[e._v("遍历数组，判断数组的元素 item：")]),e._v(" "),a("ul",[a("li",[e._v("如果 item > a, 替换a，b，c 的数值。 让 c=b； b=a； a=item 模拟插入有序集合，并删除有序集合中的最小值的过程。")]),e._v(" "),a("li",[e._v("如果 a > item > b, 类似的，替换b和c的值，a保持不变。 c=b； b=item；")]),e._v(" "),a("li",[e._v("如果 b > item > c, 类似的，替换c的值，a，b保持不变。 c = item")]),e._v(" "),a("li",[e._v("其他情况不做处理。")])]),e._v(" "),a("p",[e._v("遍历结束后，在判断，如过c 第三大的值，还是我们始定义的「无穷小」，则说明数组中不存在第三大的数值， 所以返回数组中的最大值 a，否则返回第三大的值 c；")]),e._v(" "),a("p",[e._v("详细代码请看 3.2 一次遍历， 变量替换")]),e._v(" "),a("h2",{attrs:{id:"三、js代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、js代码"}},[e._v("#")]),e._v(" 三、JS代码")]),e._v(" "),a("h3",{attrs:{id:"_3-1-排序-去重"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-排序-去重"}},[e._v("#")]),e._v(" 3.1 排序+去重")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" var thirdMax = function(nums) {\n    //降序\n    nums= nums.sort((a,b)=>{\n        return  b-a\n    })\n    // 去重\n    nums = [...new Set(nums)]\n    return nums.length >= 3 ?nums[2]:nums[0];\n};\n")])])]),a("p",[a("strong",[e._v("复杂度分析：")])]),e._v(" "),a("p",[e._v("时间复杂度：O(nlogn)，其中 n 是数组nums 的长度。排序需要 O(nlogn) 的时间。")]),e._v(" "),a("p",[e._v("空间复杂度：O(logn)。排序需要的栈空间为O(logn)。")]),e._v(" "),a("h3",{attrs:{id:"_3-2-一次遍历"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-一次遍历"}},[e._v("#")]),e._v(" 3.2 一次遍历")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var thirdMax = function(nums){\n    let a = -Number.MAX_VALUE ,b= -Number.MAX_VALUE,c= -Number.MAX_VALUE;\n    for(const item of nums){\n        if(item>a){\n            c=b;\n            b=a;\n            a=item;\n        }else if(a>item && item>b){\n            c = b;\n            b = item;\n        }else if(b>item && item>c){\n            c = item;\n        }\n    }\n    console.log(a,b,c);\n    return c=== -Number.MAX_VALUE ? a:c;\n}\n")])])]),a("p",[a("strong",[e._v("复杂度分析：")])]),e._v(" "),a("p",[e._v("时间复杂度：O(n)，其中 n 是数组 nums 的长度。")]),e._v(" "),a("p",[e._v("空间复杂度：O(1)。")]),e._v(" "),a("h2",{attrs:{id:"四、总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、总结"}},[e._v("#")]),e._v(" 四、总结")]),e._v(" "),a("p",[e._v("这也是一道简单的数组遍历的算法题，思路可以有多种，目前我只写了javascript中的两种情况。 题目算法虽简单， 但边界值和几种情况需要单独考虑，细心些～。本次两种解法中，可以提取一部分知识点，接下来复习下上面用到的知识点。")]),e._v(" "),a("h3",{attrs:{id:"_4-1-知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-知识点"}},[e._v("#")]),e._v(" 4.1 知识点")]),e._v(" "),a("h4",{attrs:{id:"_1、for-of用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、for-of用法"}},[e._v("#")]),e._v(" 1、for of用法")]),e._v(" "),a("p",[a("code",[e._v("for...of")]),e._v(" 语句在可迭代对象（包括 "),a("code",[e._v("Array")]),e._v("，"),a("code",[e._v("Map")]),e._v("，"),a("code",[e._v("Set")]),e._v("，"),a("code",[e._v("String")]),e._v("，"),a("code",[e._v("TypedArray")]),e._v("，"),a("code",[e._v("arguments")]),e._v(" 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句")]),e._v(" "),a("p",[a("code",[e._v("variable")]),e._v("  在每次迭代中，将不同属性的值分配给变量。")]),e._v(" "),a("p",[a("code",[e._v("iterable")]),e._v("  被迭代枚举其属性的对象")]),e._v(" "),a("p",[e._v("语法：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("for (variable of iterable) {\n    //statements\n}\n")])])]),a("p",[e._v("案例：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const array1 = ['a', 'b', 'c'];\n\nfor (const element of array1) {\n  console.log(element);\n}\n\n// > \"a\"\n// > \"b\"\n// > \"c\"\n")])])]),a("h5",{attrs:{id:"for-of与for-in的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-of与for-in的区别"}},[e._v("#")]),e._v(" for...of与for...in的区别")]),e._v(" "),a("p",[e._v("无论是for...in还是for...of语句都是迭代一些东西。它们之间的主要区别在于它们的迭代方式。")]),e._v(" "),a("p",[a("code",[e._v("for...in")]),e._v(" 语句以任意顺序迭代对象的可枚举属性。")]),e._v(" "),a("p",[a("code",[e._v("for...of")]),e._v(" 语句遍历可迭代对象定义要迭代的数据。")]),e._v(" "),a("p",[e._v("以下示例显示了与Array一起使用时，for...of循环和for...in循环之间的区别。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('Object.prototype.objCustom = function() {};\nArray.prototype.arrCustom = function() {};\n\nlet iterable = [3, 5, 7];\niterable.foo = \'hello\';\n\nfor (let i in iterable) {\n  console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"\n}\n\nfor (let i in iterable) {\n  if (iterable.hasOwnProperty(i)) {\n    console.log(i); // logs 0, 1, 2, "foo"\n  }\n}\n\nfor (let i of iterable) {\n  console.log(i); // logs 3, 5, 7\n}\n')])])]),a("h4",{attrs:{id:"_2、es6之-set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、es6之-set"}},[e._v("#")]),e._v(" 2、ES6之 Set")]),e._v(" "),a("p",[a("code",[e._v("Set")]),e._v(" 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。可以理解成是不重复的数组。")]),e._v(" "),a("p",[e._v("Set 实现原理是哈希表:\n静态属性：")]),e._v(" "),a("ul",[a("li",[e._v("get Set[@@species] 构造函数用来创建派生对象.")])]),e._v(" "),a("p",[e._v("实例属性：")]),e._v(" "),a("ul",[a("li",[e._v("size ：返回 Set 对象中的值的个数")])]),e._v(" "),a("p",[e._v("方法：")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("add() 在Set对象尾部添加一个元素。返回该Set对象。")])]),e._v(" "),a("li",[a("p",[e._v("clear() 移除Set对象内的所有元素。")])]),e._v(" "),a("li",[a("p",[e._v("delete() 移除Set中与这个值相等的元素，返回Set.prototype.has(value)在这个操作前会返回的值（即如果该元素存在，返回true，否则返回false）。Set.prototype.has(value)在此后会返回false。")])]),e._v(" "),a("li",[a("p",[e._v("entrier() 返回一个新的迭代器对象，该对象包含Set对象中的按插入顺序排列的所有元素的值的[value, value]数组。为了使这个方法和Map对象保持相似， 每个值的键和值相等")])]),e._v(" "),a("li",[a("p",[e._v("forEach() 按照插入顺序，为Set对象中的每一个值调用一次callBackFn。如果提供了thisArg参数，回调中的this会是这个参数。")])]),e._v(" "),a("li",[a("p",[e._v("has() 返回一个布尔值，表示该值在Set中存在与否。")])]),e._v(" "),a("li",[a("p",[e._v("keys() 与values()方法相同，返回一个新的迭代器对象，该对象包含Set对象中的按插入顺序排列的所有元素的值。")])]),e._v(" "),a("li",[a("p",[e._v("values() 返回一个新的迭代器对象，该对象包含Set对象中的按插入顺序排列的所有元素的值。")])])]),e._v(" "),a("p",[e._v("数组去重复原理[...new Set(arr)]")]),e._v(" "),a("p",[e._v("详细查看MDN文档如何使用："),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN-Set"),a("OutboundLink")],1)]),e._v(" "),a("h4",{attrs:{id:"_3、number-max-value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、number-max-value"}},[e._v("#")]),e._v(" 3、Number.MAX_VALUE")]),e._v(" "),a("p",[a("code",[e._v("Number.MAX_VALUE")]),e._v(" 属性表示在 "),a("code",[e._v("JavaScript")]),e._v(" 里所能表示的最大数值。")]),e._v(" "),a("p",[e._v("Number.MAX_VALUE 属性的属性特性：")]),e._v(" "),a("ul",[a("li",[e._v("writable :false")]),e._v(" "),a("li",[e._v("enumerable :false")]),e._v(" "),a("li",[e._v("configurable: false")])]),e._v(" "),a("p",[a("code",[e._v("MAX_VALUE")]),e._v(" 属性值接近于 "),a("code",[e._v("1.79E+308")]),e._v("。大于 "),a("code",[e._v("MAX_VALUE")]),e._v(' 的值代表 "Infinity"。')]),e._v(" "),a("h3",{attrs:{id:"_4-2-最优解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-最优解"}},[e._v("#")]),e._v(" 4.2 最优解")]),e._v(" "),a("p",[e._v("自然是选择时间复杂度、空间复杂度比较小方法来实现。")]),e._v(" "),a("p",[e._v("自然对于时间复杂度和空间复杂度需要有个取舍，具体看需求倾向哪侧。")]),e._v(" "),a("p",[e._v("时间复杂度：O(1)<O(logn)<O(n)<O(n^2)\n其他形式的复杂度需要分析：O(nlogn)、O(n^3)、O(mn)、O(2^n)、O(n!)")]),e._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN-for用法"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN-MAX_VALUE"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN-Set"),a("OutboundLink")],1)])]),e._v(" "),a("LastUpdated")],1)}),[],!1,null,null,null);a.default=_.exports}}]);