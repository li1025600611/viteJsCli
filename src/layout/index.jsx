/*
 * Author  Vincy.Li
 * Date  2023-07-05 15:18:10
 * LastEditors  Vincy.Li
 * LastEditTime  2023-11-10 17:11:42
 * Description
 */
import React, { useEffect, useRef } from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Outlet, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";

import styles from "./index.module.less";

const { Header, Sider, Content } = Layout;

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};
const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "rgba(231, 231, 231, 0.1)",
  padding: 24,
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
};

function BasicLayout() {
  const menuItems = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
      const key = String(index + 1);
      return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
        children: new Array(4).fill("").map((c, i) => {
          const subKey = String(index * 4 + i + 1);
          return {
            key: subKey,
            label: `option${subKey}`,
          };
        }),
      };
    }
  );

  const breadItems = [
    {
      title: "Home",
    },
    {
      title: <Link to="contact/breadItem">breadItem</Link>,
    },
  ];

  return (
    <div className={styles.basicLayoutWrap}>
      <Layout style={{ width: "100%", height: "100%" }}>
        <Header style={headerStyle}>
          <h2>
            <Link to="contact/vincy">link to contact</Link>
          </h2>
        </Header>
        <Layout hasSider style={{ height: `calc(100% - 64px)` }}>
          <Sider style={siderStyle}>
            <Menu
              mode="inline"
              style={{
                height: "100%",
                borderRight: 0,
              }}
              items={menuItems}
            />
          </Sider>
          <Content style={contentStyle}>
            <Breadcrumb items={breadItems} />
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default BasicLayout;
