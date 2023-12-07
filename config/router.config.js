/*
 * Author  Vincy.Li
 * Date  2023-11-10 13:56:37
 * LastEditors  Vincy.Li
 * LastEditTime  2023-11-13 15:38:05
 * Description
 */
/**
 * 两套路由 1.需要layout的 2.不需要layout的
 * TODO:懒加载
 */
// import React from "react";
// import Layout from "/layout/index";
// import ErrorPage from "/pages/ErrorPage"; // 404
// import Contact from "/pages/Contact";
// import Home from "/pages/Home";
// import Device from "/pages/Device";
// import Station from "/pages/Station";
// import StationChildren from "/pages/Station/Children";
// import Children from "/pages/Contact/Children";
// import Login from "/pages/Login";

export default [
  {
    path: "/",
    element: "/layout/index",
    errorElement: "/pages/ErrorPage",
    children: [
      {
        path: "contact/:contactId",
        element: "/pages/Contact",
        children: [
          {
            path: "children",
            element: "/pages/Contact/Children",
          },
        ],
      },
      {
        element: "/pages/Home",
        title: "默认页",
        index: true, // 根页面与path不能共存 没有输入任何path的时候渲染本页
      },
      {
        path: "device", // device仅仅作为前缀
        title: "设备管理",
        children: [
          {
            path: "", // 类似redirect功能
            title: "子页面",
            element: "/pages/Device",
          },
          {
            path: "index",
            title: "子页面",
            element: "/pages/Contact/Children",
          },
        ],
      },
      {
        path: "station",
        element: "/pages/Station", // Station 嵌套 类似于layout
        title: "电站管理",
        children: [
          {
            path: "index",
            title: "子页面",
            element: "/pages/Contact/Children", // 与Station共存
          },
          {
            element: "/pages/Station/Children", // 根页面 默认渲染 类似于redirect
            index: true,
            title: "子页面",
          },
        ],
      },
    ],
  },
  {
    path: "home", // 大屏
    title: "大屏首页",
    element: "/pages/Home",
  },
  {
    path: "login",
    element: "/pages/Login",
  },
];

// export default [];
