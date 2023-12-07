/*
 * Author  Vincy.Li
 * Date  2023-07-05 14:57:41
 * LastEditors  Vincy.Li
 * LastEditTime  2023-12-07 10:01:44
 * Description
 */
import React from "react";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import "./index.css";
import routerConfig from "../config/router.config";
const modules = import.meta.glob("/src/pages/**/*.jsx");
console.log("routerConfig :>> ", routerConfig);

const getRoute = (routerConfig) => {
  const arr = [];
  for (const path in modules) {
    modules[path]().then((mod) => {
      if (mod.default) {
        const Element = mod.default;
        arr.push(<Route path="home" element={<Element />} />);
      }
      arr.push(<Route path="" element={<h2>not found</h2>}></Route>);
    });
  }
  return arr;
};

const routes = getRoute(routerConfig);
const router = createBrowserRouter(createRoutesFromElements(routes));

export default router;
