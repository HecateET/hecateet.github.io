module.exports = {
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
    subSidebar: 'auto',
    logo: "/assets/img/logo.png",
    base: '/ayuan-blog/',
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
