/*
 * Author  Vincy.Li
 * Date  2023-11-10 13:56:37
 * LastEditors  Vincy.Li
 * LastEditTime  2023-12-08 15:37:19
 * Description
 */
/**
 * 两套路由 1.需要layout的 2.不需要layout的
 * TODO:懒加载
 */

export default [
  {
    path: "/",
    element: "/src/layout/index",
    errorElement: "/pages/ErrorPage",
    children: [
      {
        path: "contact/:contactId",
        element: "/src/pages/Contact/index.jsx",
        children: [
          {
            path: "children",
            element: "/src/pages/Contact/Children",
          },
        ],
      },
      // TODO:
      {
        path: "device",
        children: [
          {
            path: "index",
            element: "/src/pages/Device/index.jsx",
          },
          {
            path: "children",
            element: "/src/pages/Device/Children.jsx",
          },
        ],
      },
      {
        element: "/src/pages/Home",
        title: "默认页",
        index: true, // 根页面与path不能共存 没有输入任何path的时候渲染本页
      },
      {
        path: "station",
        element: "/src/pages/Station/index.jsx", // Station 嵌套 类似于layout
        title: "电站管理",
        children: [
          {
            element: "/src/pages/Station/Children", // 根页面 默认渲染 类似于redirect
            path: "children",
            title: "子页面",
          },
        ],
      },
    ],
  },
  {
    path: "home", // 大屏
    title: "大屏首页",
    element: "/src/pages/Home",
  },
  {
    path: "login",
    element: "/src/pages/Login",
  },
];
