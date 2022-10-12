module.exports = {
  title: "阿源 Hecate",
  description:
    "阿源 Hecate的博客 记录前端学习、日常生活、阅读、美食、运动等感想日记",
  keywords: [
    "阿源 Hecate的博客 记录前端学习、日常生活、阅读、美食、运动等感想日记",
  ],
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "script",
      {},
      `
        var _hmt = _hmt || [];
        (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?d7384eea898f82136bb26f27fb75c1e8";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
        })();
        `,
    ],
  ],
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "", // UA-00000000-0
      },
    ],
  ],
  theme: "reco",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  themeConfig: {
    subSidebar: "auto",
    logo: "/logo.png",
    base: "/ayuan-blog/",
    lastUpdated: "上次更新：", //上次更新
    nav: [
      { text: "首页", link: "/" },
      { text: "Github", link: "https://github.com/HecateET" },
      {
        text: "掘金",
        link: "https://juejin.cn/user/465848660675048/posts",
      },
      {
        text: "美食日记｜小红书",
        link: "https://www.xiaohongshu.com/user/profile/5e94f5de000000000100a3b1?xhsshare=CopyLink&appuid=5e94f5de000000000100a3b1&apptime=1644722473",
      },
      {
        text: "阿源 Hecate",
        items: [
            { text: "Github", link: "https://github.com/HecateET" },
            { text:'LeetCode', link: "https://leetcode.cn/u/hecate-d/"}
        ],
      },
    ],
    sidebar: [
      {
        title: "自我介绍下",
        path: "/",
        collapsable: false, //不折叠
        children: [
          { title: "关于阿源的七七八八", path: "/" },
          {
            title: "一张图看程序媛阿源的2021个人年度流水账",
            path: "/summary/ayuan-2021",
          },
        ],
      },
      {
        title: "深入浅出Vue.js",
        path: "/vueblog/part-01",
        collapsable: false, //不折叠
        children: [
          {
            title:
              "《深入浅出Vue.js》Day-01:元编程概念+Vue解决问题的思路+什么渐进式框架",
            path: "/vueblog/part-01",
          },
          {
            title: "《深入浅出Vue.js》Day02:如何变化侦测Object？",
            path: "/vueblog/part-02",
          },
          {
            title: "《深入浅出Vue.js》Day03:如何变化侦测Array？",
            path: "/vueblog/part-03",
          },
        ],
      },
      {
        title: "Vue.js设计与实现",
        path: "/vuejs3.0/part-about",
        collapsable: false, //不折叠
        children: [
          {
            title: "《Vue.js设计与实现》前言：全书讲什么？",
            path: "/vuejs3.0/part-about",
          },
          {
            title: "《Vue.js设计与实现》第1章 权衡的艺术",
            path: "/vuejs3.0/part-01",
          },
          {
            title: "《Vue.js设计与实现》第2章 框架设计的核心要素",
            path: "/vuejs3.0/part-02",
          },
          {
            title: "《Vue.js设计与实现》第3章 Vue.js3的设计思路",
            path: "/vuejs3.0/part-03",
          },
          {
            title: "《Vue.js设计与实现》第4章 响应系统的作用与实现",
            path: "/vuejs3.0/part-04",
          },
        ],
      },
      {
        title:"Vue.js 3.0 摸爬滚打",
        path:"/vue3study/day01",
        collapsable:false,
        children:[
            {
                title:"01-Vue3.0自我介绍",
                path:"/vue3study/day01",
            },
            {
                title:"02-Vue3.0-组合式API自我介绍",
                path:"/vue3study/day02",
            }
        ]
      },
      {
        title: "摸爬滚打的算法之旅",
        path: "/handbook/index",
        collapsable: true, //不折叠
        children: [
          {
            title: "495.提莫攻击：「数组遍历」&「去重」",
            path: "/handbook/leetcode-495",
          },
          {
            title: "414.第三大的数：「数组遍历」+「排序」+「去重」",
            path: "/handbook/leetcode-414",
          },
          {
            title: "697.数组的度：哈希函数",
            path: "/handbook/leetcode-697",
          },
          {
            title:
              "448. 找到所有数组中消失的数字+JavaScript中indexOf方法&哈希表",
            path: "/handbook/leetcode-448",
          },
          {
            title: "41. 缺失的第一个正数：两次遍历& includes方法",
            path: "/handbook/leetcode-41",
          },
          {
            title: "274. H 指数:时间复杂度&空间复杂度",
            path: "/handbook/leetcode-274",
          },
          { title: "283.移动零：数组两次遍历", path: "/handbook/leetcode-283" },
          {
            title: "118. 杨辉三角：2次for循环+数学方法",
            path: "/handbook/leetcode-118",
          },
          {
            title: "598.范围求和 II",
            path: "/handbook/leetcode-598",
          },
        ],
      },
      {
        title: "手写题",
        path: "/dailyQuestion/dailyQuestion",
        collapsable: false, //不折叠
        children: [
          {
            title:
              "《深入浅出Vue.js》Day-01:元编程概念+Vue解决问题的思路+什么渐进式框架",
            path: "/vueblog/part-01",
          },
          {
            title: "《深入浅出Vue.js》Day02:如何变化侦测Object？",
            path: "/vueblog/part-02",
          },
          {
            title: "《深入浅出Vue.js》Day03:如何变化侦测Array？",
            path: "/vueblog/part-03",
          },
        ],
      },
    ],
  },
};
