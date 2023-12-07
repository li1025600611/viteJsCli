/*
 * Author  Vincy.Li
 * Date  2023-11-13 13:44:27
 * LastEditors  Vincy.Li
 * LastEditTime  2023-11-13 13:51:41
 * Description
 */
import React from "react";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";

Station.propTypes = {};

function Station(props) {
  return (
    <div>
      Station
      <Outlet />
    </div>
  );
}

export default Station;
