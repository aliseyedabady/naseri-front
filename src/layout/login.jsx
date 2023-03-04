import React from "react";
import "../assets/styles/custom.scss";
import UserLogin from "../pages/userLogin";
import { Layout, theme } from "antd";

const UserLoginLayout = ({ children }) => {
  const { Content } = Layout;
  return <UserLogin />;
};

export default UserLoginLayout;
