import React, { useState } from "react";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
const items = [
  {
    label: "Home",
    key: "home",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Login",
    key: "login",
    icon: <UserOutlined />,
  },
  {
    label: "Register",
    key: "register",
    icon: <UserAddOutlined />,
  },
  {
    label: "Username",
    key: "userName",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        children: [
          {
            label: "Option 1",
            key: "setting:3",
          },
          {
            label: "Option 2",
            key: "setting:4",
          },
        ],
      },
    ],
  },
];

const Header = () => {
  const [current, setCurrent] = useState("home");
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
      items={items}
    />
  );
};
export default Header;
