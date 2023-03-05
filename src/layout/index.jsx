import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Typography } from "antd";

const { Header, Sider, Content } = Layout;

const PanelLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, sideBarBackgroundColor, sidebarColorDefault },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        minHeight="100vh"
        style={{ backgroundColor: sideBarBackgroundColor }}
      >
        <Typography.Text
          style={{
            color: "#ffffff",
            textAlign: "center",
            margin: "20px auto",
            display: "block",
          }}
        >
          ناصری سرویس
        </Typography.Text>
        <Menu
          mode="inline"
          style={{ backgroundColor: "transparent", color: sidebarColorDefault }}
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "داشبورد",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "کاربران",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "محصولات",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          {React.createElement(MenuOutlined, {
            className: "trigger",
            onClick: () => setCollapsed(!collapsed),
            style: { marginRight: "20px", fontSize: "20px" },
          })}
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default PanelLayout;
