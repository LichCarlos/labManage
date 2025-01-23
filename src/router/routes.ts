export const constantRoute = [
  {
      //登录
      path: '/login',
      //@ts-ignore
      component: () => import('@/views/login/index.vue'),
      name: 'login',
      meta: {
          title: '登录',//菜单标题
          hidden: true,//代表路由标题在菜单中是否隐藏  true:隐藏 false:不隐藏
          icon: "Promotion",//菜单文字左侧的图标,支持element-plus全部图标
      }
  },
  {
      //登录成功以后展示数据的路由
      path: '/',
            //@ts-ignore
      component: () => import('@/layout/index.vue'),
      name: 'layout',
      meta: {
          title: '',
          hidden: false,
          icon: ''
      },
      redirect: '/home',
      children: [
          {
              path: '/home',
                    //@ts-ignore
              component: () => import('@/views/home/index.vue'),
              meta: {
                  title: '首页',
                  hidden: false,
                  icon: 'HomeFilled'
              }
          }
      ]
  },
  {
      //404
      path: '/404',
            //@ts-ignore
      component: () => import('@/views/404/index.vue'),
      name: '404',
      meta: {
          title: '404',
          hidden: true,
          icon: 'DocumentDelete'
      }
  },
  {
      path: '/screen',
            //@ts-ignore
      component: () => import('@/views/screen/index.vue'),
      name: 'Screen',
      meta: {
          hidden: false,
          title: '数据大屏',
          icon: 'Platform'
      }
    },
    {
                 
        path: '/lab',
        //@ts-ignore
        component: () => import('@/views/lab/index.vue'),
        name: 'lab',
        meta: {
            title: '实验室管理',//菜单标题
            hidden: false,//代表路由标题在菜单中是否隐藏  true:隐藏 false:不隐藏
            icon: "Promotion",//菜单文字左侧的图标,支持element-plus全部图标
        },
      },
      {
                 
        path: '/department',
        //@ts-ignore
        component: () => import('@/views/department/index.vue'),
        name: 'department',
        meta: {
            title: '部门管理',//菜单标题
            hidden: false,//代表路由标题在菜单中是否隐藏  true:隐藏 false:不隐藏
            icon: "Promotion",//菜单文字左侧的图标,支持element-plus全部图标
        },
      }

]
