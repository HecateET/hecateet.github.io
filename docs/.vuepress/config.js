module.exports = {
  head: [
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
  title: "阿源 Hecate的博客",
  description:
    "阿源 Hecate的博客 记录前端学习、日常生活、阅读、美食、运动等感想日记",
  themeConfig: {
    subSidebar: "auto",
    logo: "/assets/img/logo.png",
    base: "/ayuan-blog/",
    lastUpdated: "上次更新：", //上次更新
    nav: [
      { text: "首页", link: "/" },
      {
        text: "阿源 Hecate的博客",
        items: [
          { text: "Github", link: "https://github.com/HecateET" },
          {
            text: "掘金",
            link: "https://juejin.cn/user/465848660675048/posts",
          },
          {
            text: "美食日记｜小红书",
            link: "https://www.xiaohongshu.com/user/profile/5e94f5de000000000100a3b1?xhsshare=CopyLink&appuid=5e94f5de000000000100a3b1&apptime=1644722473",
          },
        ],
      },
    ],
    sidebar: [
      {
        title: "欢迎学习",
        path: "/",
        collapsable: false, //不折叠
        children: [{ title: "学前必读", path: "/" }],
      },

      {
        title: "Vue.js设计与实现",
        path: "/handbook/ConditionalTypes",
        collapsable: false, //不折叠
        children: [
          { title: "前言：全书讲什么？", path: "/vuejs3.0/part-about" },
          { title: "第1章 权衡的艺术", path: "/vuejs3.0/part-01" },
          { title: "第2章 框架设计的核心要素", path: "/vuejs3.0/part-02" },
          { title: "第3章 Vue.js3的设计思路", path: "/vuejs3.0/part-03" },
          { title: "第4章 响应系统的作用与实现", path: "/vuejs3.0/part-04" },
        ],
      },
      {
        title: "基础学习",
        path: "/handbook/ConditionalTypes",
        collapsable: false, //不折叠
        children: [
          { title: "条件类型", path: "/handbook/ConditionalTypes" },
          { title: "泛型", path: "/handbook/Generics" },
        ],
      },
    ],
  },
};
