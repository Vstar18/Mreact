const MENUS = [

  {
    name: "首页",
    path: "/app",
    icon: "home"
  },
  {
    name: "职业规划",
    path: "/app/profession",
    icon: "idcard",
    childMenu: [
      {
        name: "简历优化列表",
        path: "/app/profession/resume",
        component: 'views/Resume'
      },
      {
        name: "测试",
        path: "/app/test",
        component: 'views/test'
      },
    ]
  },
  {
    name: "配置管理",
    path: "/app/config",
    icon: "setting",
    childMenu: [
      {
        name: "帐号管理",
        path: "/app/home1",
        component: 'views/Home'
      },
      {
        name: "学科管理",
        path: "/app/demo2",
        component: 'views/Rematch'
      },
      {
        name: "角色管理",
        path: "/app/activity3",
        component: 'views/Activity/loadable'
      }
    ]
  }
];

export default MENUS