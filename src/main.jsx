/*
 * Author  Vincy.Li
 * Date  2023-07-05 14:57:41
 * LastEditors  Vincy.Li
 * LastEditTime  2023-12-08 11:43:04
 * Description
 */
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "@/layout/index";
import ErrorPage from "@/pages/ErrorPage"; // 404
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Device from "@/pages/Device";
import Station from "@/pages/Station";
import StationChildren from "@/pages/Station/Children";
import Children from "@/pages/Contact/Children";
import Login from "@/pages/Login";

import "./index.css";
import routerConfig from "../config/router.config";
const modules = import.meta.glob(
  [
    "/src/layout/*.jsx",
    "/src/pages/*.jsx",
    "/src/pages/*/*.jsx",
    "/src/pages/*/*/*.jsx",
    "/src/pages/*/*/*/*.jsx",
  ],
  {
    eager: true,
  }
);

const getRoutes = (arr) => {
  return arr.map((item) => {
    if (item.element) {
      const findKey = Object.keys(modules).find((path) =>
        path.includes(item.element)
      );

      if (findKey) {
        const Ele = modules[findKey].default;

        if (item.children && item.children.length) {
          return {
            ...item,
            element: <Ele />,
            children: getRoutes(item.children),
          };
        }
        console.log(111, <Ele />);
        return {
          ...item,
          element: <Ele />,
        };
      }
      return item;
    }
    return item;
  });
};

const router = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contact/:contactId",
        element: <Contact />,
        children: [
          {
            path: "children",
            element: <Children />,
          },
        ],
      },
      {
        element: <Home />,
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
            element: <Device />,
            lazy: () => import("@/pages/Device"),
          },
          {
            path: "index",
            title: "子页面",
            element: <Children />,
          },
        ],
      },
      {
        path: "station",
        element: <Station />, // Station 嵌套 类似于layout
        title: "电站管理",
        children: [
          {
            path: "index",
            title: "子页面",
            element: <Children />, // 与Station共存
          },
          {
            element: <StationChildren />, // 根页面 默认渲染 类似于redirect
            index: true,
            title: "子页面",
          },
        ],
      },
    ],
  },
  {
    path: "home2", // 大屏
    title: "大屏首页",
    element: <Home />,
  },
  {
    path: "login",
    element: <Login />,
  },
];

const routes = getRoutes(routerConfig);

console.log("routes :>> ", routes);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={createBrowserRouter(routes)} />
  </React.StrictMode>
);
