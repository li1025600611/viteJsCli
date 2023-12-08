/*
 * Author  Vincy.Li
 * Date  2023-07-05 14:57:41
 * LastEditors  Vincy.Li
 * LastEditTime  2023-12-08 15:55:19
 * Description
 */
import React from "react";

import { createBrowserRouter } from "react-router-dom";

import "./index.css";
import routerConfig from "../config/router.config";

// Vite 支持使用特殊的 import.meta.glob 函数从文件系统导入多个模块
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
    const findKey = Object.keys(modules).find((path) =>
      path.includes(item.element)
    );

    const findErrorKey = Object.keys(modules).find((path) =>
      path.includes(item.errorElement)
    );
    const Ele = modules[findKey]?.default;
    const Error = modules[findErrorKey]?.default;

    if (item.element) {
      if (item.children && item.children.length) {
        return {
          ...item,
          element: Ele ? <Ele /> : null,
          errorElement: Error ? <Error /> : null,
          children: getRoutes(item.children),
        };
      }

      return {
        ...item,
        element: Ele ? <Ele /> : null,
        errorElement: Error ? <Error /> : null,
      };
    }

    if (item.children && item.children.length) {
      return {
        ...item,
        element: Ele ? <Ele /> : null,
        errorElement: Error ? <Error /> : null,
        children: getRoutes(item.children),
      };
    }
  });
};

const routes = getRoutes(routerConfig);

export default createBrowserRouter(routes);
