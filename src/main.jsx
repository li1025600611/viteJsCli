/*
 * Author  Vincy.Li
 * Date  2023-07-05 14:57:41
 * LastEditors  Vincy.Li
 * LastEditTime  2023-12-08 15:56:10
 * Description
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import routes from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
