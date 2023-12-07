/*
 * Author  Vincy.Li
 * Date  2023-07-05 14:57:41
 * LastEditors  Vincy.Li
 * LastEditTime  2023-12-07 14:11:45
 * Description
 */
import React, { useState } from "react";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "@/layout/index";
import Home from "@/pages/Home";

import "./index.css";
import routerConfig from "../config/router.config";
// Vite 支持使用特殊的 import.meta.glob 函数从文件系统导入多个模块
const modules = import.meta.glob("/src/pages/**/*.jsx", {
  eager: true,
});

const getRoute = (routerConfig) => {
  console.log("routerConfig :>> ", routerConfig);
  return (
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Home />} />
    </Route>
  );
};

const routeArr = getRoute(routerConfig);
const router = createBrowserRouter(createRoutesFromElements(routeArr));
console.log("router :>> ", router);

export default router;
