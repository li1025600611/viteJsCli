/*
 * Author  Vincy.Li
 * Date  2023-11-10 14:27:52
 * LastEditors  Vincy.Li
 * LastEditTime  2023-11-10 14:29:56
 * Description
 */
import React from "react";
import PropTypes from "prop-types";
import { useRouteError } from "react-router";

ErrorPage.propTypes = {};

function ErrorPage(props) {
  const error = useRouteError();
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
