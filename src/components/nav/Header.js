import React, { useState } from "react";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const Header = () => {
  const [current, setCurrent] = useState("home");
  const { SubMenu } = Menu;
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <Menu
      style={{
        display: "flex",
        justifyContent: "flex-end",
      }}
      className="d-flex justify-content-center"
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      //   items={items}
    >
      <Menu.Item key="home" icon={<AppstoreOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="login" icon={<UserAddOutlined />}>
        <Link to="/login">Login</Link>
      </Menu.Item>
      <Menu.Item key="register" icon={<AppstoreOutlined />}>
        <Link to="/register">Register</Link>
      </Menu.Item>
      <SubMenu icon={<SettingOutlined />} title="username">
        <Menu.Item key="setting:1">Option 1</Menu.Item>
        <Menu.Item key="setting:2">Option 2</Menu.Item>
      </SubMenu>
    </Menu>
  );
};
export default Header;
