(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{424:function(t,e,r){"use strict";r.r(e);var a=r(2),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("p",[t._v("自2022年01月17日起，开始了阿源的菜鸟算法成长之路，感谢冴羽大佬及群内小伙伴发起的算法刷题打卡活动，忙碌一周终于开始了。")]),t._v(" "),e("h2",{attrs:{id:"一、题目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、题目"}},[t._v("#")]),t._v(" 一、题目")]),t._v(" "),e("ol",{attrs:{start:"495"}},[e("li",[t._v("提莫攻击")])]),t._v(" "),e("p",[t._v("题目详情查看：\n来源：力扣（LeetCode）\n链接：https://leetcode-cn.com/problems/teemo-attacking")]),t._v(" "),e("h2",{attrs:{id:"二、分析解题思路"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、分析解题思路"}},[t._v("#")]),t._v(" 二、分析解题思路")]),t._v(" "),e("h3",{attrs:{id:"_2-1-清奇的脑回路-之错误🙅案例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-清奇的脑回路-之错误🙅案例"}},[t._v("#")]),t._v(" 2.1 清奇的脑回路（之错误🙅案例）")]),t._v(" "),e("p",[t._v("第一遍读完题目：")]),t._v(" "),e("p",[t._v("1、秒数是逐一递增的")]),t._v(" "),e("p",[t._v("2、对应timeSeries数组记录多少秒发起进攻")]),t._v(" "),e("p",[t._v("3、duçration 是进攻对应中毒的持续时间")]),t._v(" "),e("p",[t._v("第一种情况：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("duration毒素持续的时间作用在对应的进攻时间，逐一往后推算 如[1,3],毒液持续2秒.\n\n秒数时间线：1, 2, 3,4,5,6,7  \n\n1秒时攻击，持续时间「1,2」\n3秒攻击，持续时间「3,4」,将区间合并[1，2，3，4]，对应中毒总秒数就是 4\n")])])]),e("p",[t._v("第二种情况：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("遇到毒还没消耗完又进攻的时候，对应中毒影响的时间会受到影响，如[2,4,5,8],毒液持续3秒,秒数时间线：1，2，3，4，5，6，7，8，9，10，11。\n原每秒数节点的攻击毒液持续时间段应该是：\n对应2秒：「2，3，4」，4秒：「4，5，6」5秒：「5，6，7」，8秒：「8，9，10」\n将其排成一列数组[2,3,4,4,5,6,5,6,7,8,9,10],只需要将数组去重后[2,3,4,5,6,7,8,9,10]对应数组的长度就是对应的中毒状态总秒数9\n")])])]),e("p",[t._v("从上面分析后，思路就是：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("遍历进攻时间的数组，得到对应秒数的持续时间数组")])]),t._v(" "),e("li",[e("p",[t._v("将所有进攻时刻的中毒事件数组合并去重")])]),t._v(" "),e("li",[e("p",[t._v("去重后的长度就是对应几次进攻后的总中毒时间")])]),t._v(" "),e("li",[e("p",[t._v("既然题目提示了3种情况， 需要注意边界的测试用例情况")])])]),t._v(" "),e("p",[t._v("阿巴巴巴，写了那多，我自己的好像思路清楚了许多，接下来尝试写代码，最终运行代码查看（3.1 错误代码🙅），发现不可行。")]),t._v(" "),e("h3",{attrs:{id:"_2-2-进一步分析-正确题解🙆"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-进一步分析-正确题解🙆"}},[t._v("#")]),t._v(" 2.2 进一步分析（正确题解🙆）")]),t._v(" "),e("p",[t._v("上一步分析，部分是正确的，只是使用的执行算法逻辑不太可行， 接下来继续分析：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("timeSeries [t+ duration-1]  时间是中毒的")])]),t._v(" "),e("li",[e("p",[t._v("timeSeries[i]-timerSeries[i-1] >= duration 时， 说明上一次攻击到下一攻击到中毒时间已结束，中毒时间为 duration")])]),t._v(" "),e("li",[e("p",[t._v("timeSeries[i]-timerSeries[i-1]< duration 时，则上一次攻击的中毒时间还没结束，说一，上次中毒的时间则是： timeSeries[i]-timeSeries[i-1]")])]),t._v(" "),e("li",[e("p",[t._v("将每次攻击后，的中毒时间累加就是 总的持续中毒时间")])])]),t._v(" "),e("h3",{attrs:{id:"_2-3-换个角度看-2-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-换个角度看-2-1"}},[t._v("#")]),t._v(" 2.3 换个角度看 2.1")]),t._v(" "),e("p",[t._v("在2.1 中读题后分解的方法，之后直接使用数组去存储又从二维数组在转不太聪明的样子。 不过2.1中思路换个角度换个算法还是可行的：")]),t._v(" "),e("ul",[e("li",[t._v("计算总的未去重的中毒时间： timeSerie.length * duration")]),t._v(" "),e("li",[t._v("判断攻击时间， 总中毒事件减去重复的时间")]),t._v(" "),e("li",[t._v("重复的时间计算： timeSerie[i]-timeSerie[i-1]< duration时（需要去重），多出的时间：duration-(timeSeries[i]-timeSeries[i-1]）")])]),t._v(" "),e("h2",{attrs:{id:"三、代码-复杂度分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、代码-复杂度分析"}},[t._v("#")]),t._v(" 三、代码&复杂度分析")]),t._v(" "),e("h3",{attrs:{id:"_3-1-错误代码🙅"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-错误代码🙅"}},[t._v("#")]),t._v(" 3.1 错误代码🙅")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" var findPoisonedDuration = function(timeSeries, duration) {\n     let arr = []\n     //遍历数组\n    timeSeries.forEach(item=>{\n        let arr1 = []\n        // 记录每一次攻击的中毒时间\n        for(let i=0;i<duration;i++){\n            arr1.push(item+i)\n        }\n        arr.push(arr1)\n    })\n    arr = arr.flat() //二维数组转1维数组\n    //数组去重\n    arr = arr.filter((item,index,arr)=>{\n        return arr.indexOf(item,0) === index;\n    })\n    return arr.length\n};\n")])])]),e("p",[e("strong",[t._v("复杂度分析：")])]),t._v(" "),e("ul",[e("li",[t._v("时间复杂度: O(n^2)+O(n)+O(n),所以是 O(n^2)")]),t._v(" "),e("li",[t._v("空间复杂度：O(n)， 所以空间复杂度是O(n), 其中n是上面arr的长度\n分析：")]),t._v(" "),e("li",[t._v("随着n变大， 时间复杂度和空间复杂度会越来越大，所以导致运行超时间")])]),t._v(" "),e("h3",{attrs:{id:"_3-2-正确代码✅"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-正确代码✅"}},[t._v("#")]),t._v(" 3.2 正确代码✅")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("var findPoisonedDuration = function(timeSeries, duration) {\n    let len = timeSeries.length, timeCount = 0;\n    for(let i=1;i<len;++i){\n        let oneCount = timeSeries[i] - timeSeries[i-1];\n        if(oneCount>=duration){\n            timeCount += duration;\n        }else{\n            timeCount += oneCount;\n        }\n    }\n    timeCount+=duration\n    return timeCount;\n};\n")])])]),e("p",[e("strong",[t._v("复杂度分析：")])]),t._v(" "),e("ul",[e("li",[t._v("时间复杂度: O(n)")]),t._v(" "),e("li",[t._v("空间复杂度：O(1)")])]),t._v(" "),e("h3",{attrs:{id:"_3-3-正确代码-✅"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-正确代码-✅"}},[t._v("#")]),t._v(" 3.3 正确代码 ✅")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("var findPoisonedDuration = function(timeSeries, duration) {\n    let timeCount = timeSeries.length * duration\n    for(let i=1;i<timeSeries.length;i++){\n        if(timeSeries[i]-timeSeries[i-1]<duration){\n            timeCount -= duration-timeSeries[i]+timeSeries[i-1]\n        }\n    }\n    return timeCount;\n};\n")])])]),e("p",[e("strong",[t._v("复杂度分析：")])]),t._v(" "),e("ul",[e("li",[t._v("时间复杂度: O(n)")]),t._v(" "),e("li",[t._v("空间复杂度：O(1)")])]),t._v(" "),e("h2",{attrs:{id:"四、总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、总结"}},[t._v("#")]),t._v(" 四、总结")]),t._v(" "),e("p",[t._v("本题目，虽然第一个思路不太可行，还超时了，因为其中隐含了另外两个算法导致时间复杂度和空间复杂度都不理想，当数目太大时，会导致运行超时。是一个典型的错误案例。")]),t._v(" "),e("p",[t._v("深深感慨下笔还需要考虑思路对不对啊， 刷算法的第二天，简单题让我感觉自己被摁在地上摩擦！")]),t._v(" "),e("h3",{attrs:{id:"_4-1-知识点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-知识点"}},[t._v("#")]),t._v(" 4.1 知识点")]),t._v(" "),e("p",[t._v("题目原本简单， 被我一个清奇的脑回路带偏。不过分析完时间复杂度和空间复杂度之后，最终还是要总结下上面一路摸爬滚打中涉及到的知识点：")]),t._v(" "),e("ol",[e("li",[t._v("二维数组转换一维数组；")]),t._v(" "),e("li",[t._v("一维数组如何去重")]),t._v(" "),e("li",[t._v("JS中的数组方法")])]),t._v(" "),e("h4",{attrs:{id:"_1⃣️-二维数组转一维数组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1⃣️-二维数组转一维数组"}},[t._v("#")]),t._v(" 1⃣️ 二维数组转一维数组")]),t._v(" "),e("p",[t._v("1、使用 "),e("code",[t._v("es5")]),t._v("的reduce方法 "),e("code",[t._v("arr.reduce(callback[,initialValue])")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("var arr1 = [[0,1,3],[2,3],[4,5]]\nvar arr2 = \n\n")])])]),e("p",[t._v("2、利用"),e("code",[t._v("es6")]),t._v("的map函数 和递归")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("var arr1 =[[0,1,3],[2,3],[4,5]]\nfunction flatten(arr){\n    return [].concat(...arr.map(x=>\n        Array.isArray(x) ? flatten(x):x\n    ))\n}\nvar arr2 = flatten(arr1)\n")])])]),e("p",[t._v("3、 利用"),e("code",[t._v("apply")]),t._v("实现")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("var arr1 =[[0,1,3],[2,3],[4,5]]\nvar arr2 = [].concat.apply([],arr1);\n")])])]),e("p",[t._v("4、 将数组变成字符串，利用"),e("code",[t._v("str.split(',')")]),t._v("实现（缺点：数组元素都变成字符串）")]),t._v(" "),e("p",[t._v("5、使用ES6 "),e("code",[t._v("Array.prototype.flat()")]),t._v("(缺点：有兼容问题)\nflat() 方法会移除空项，但"),e("code",[t._v("undefined")]),t._v("、"),e("code",[t._v("null")]),t._v("会保留")]),t._v(" "),e("p",[t._v("具体内容实现本篇不展开讲解， 后续另作篇幅记录。")]),t._v(" "),e("p",[t._v("可参考："),e("a",{attrs:{href:"https://www.cnblogs.com/wang-xx/p/11268276.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("js二维转一维数组"),e("OutboundLink")],1)]),t._v(" "),e("h4",{attrs:{id:"_2⃣️-数组去重复"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2⃣️-数组去重复"}},[t._v("#")]),t._v(" 2⃣️ 数组去重复")]),t._v(" "),e("p",[t._v("1、利用ES6 Set去重")]),t._v(" "),e("p",[t._v("2、两次for循环， splice去重（ES5常用）")]),t._v(" "),e("p",[t._v("3、利用indexOf去重")]),t._v(" "),e("p",[t._v("4、利用sort()")]),t._v(" "),e("p",[t._v("5、利用includes")]),t._v(" "),e("p",[t._v("6、利用hasOwnProperty")]),t._v(" "),e("p",[t._v("7、利用filter")]),t._v(" "),e("p",[t._v("8、利用递归去重")]),t._v(" "),e("p",[t._v("9、利用Map数据结构去重")]),t._v(" "),e("p",[t._v("10、利用reduce+ includes")]),t._v(" "),e("p",[t._v("11、[...new Set(arr)]")]),t._v(" "),e("p",[t._v("具体内容实现本篇不展开讲解，后续另作篇幅记录。")]),t._v(" "),e("p",[t._v("可参考："),e("a",{attrs:{href:"https://segmentfault.com/a/1190000016418021",target:"_blank",rel:"noopener noreferrer"}},[t._v("js中的12种去重方法"),e("OutboundLink")],1)]),t._v(" "),e("h4",{attrs:{id:"_3⃣️-js中遍历的方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3⃣️-js中遍历的方法"}},[t._v("#")]),t._v(" 3⃣️ JS中遍历的方法")]),t._v(" "),e("p",[t._v("1、for()\n2、while 和 do...while语句\n3、forEach\n4、for-in\n5、for-of")]),t._v(" "),e("p",[t._v("详细用法查看："),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN：loop循环和迭代"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"_4-2-最优解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-最优解"}},[t._v("#")]),t._v(" 4.2 最优解")]),t._v(" "),e("p",[t._v("根据第二部分的题解， 正确的解法可以有两种思路， 一个是区分两种不同的中毒持续时间，再将其累加。第二个是计算出总的正常中毒时间后，再减去重复的时间。")])])}),[],!1,null,null,null);e.default=n.exports}}]);