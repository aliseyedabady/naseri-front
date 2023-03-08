import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Divider,
  Dropdown,
  Layout,
  Menu,
  Space,
  theme,
  Typography,
} from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const { Header, Sider, Content } = Layout;

const PanelLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, sideBarBackgroundColor, sidebarColorDefault },
  } = theme.useToken();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {" "}
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        minHeight="100vh"
        style={{
          backgroundColor: sideBarBackgroundColor,
          zIndex: 14142124124,
          position: "relative",
          minHeight: "100vh",
          overflowY: "hidden",
        }}
        breakpoint="lg"
      >
        <Typography.Text
          style={{
            color: "#ffffff",
            textAlign: "center",
            margin: "20px auto",
            display: "block",
            fontSize: "18px",
          }}
        >
          ناصری سرویس
        </Typography.Text>
        <Divider dashed style={{ borderColor: "#393945" }} />
        <Menu
          mode="inline"
          style={{
            backgroundColor: "transparent",
            color: sidebarColorDefault,
          }}
          defaultSelectedKeys={["1"]}
          selectedKeys={[pathname]}
          items={[
            {
              key: "/",
              icon: <UserOutlined />,
              label: <Link to={"/"}>داشبورد</Link>,
            },
            {
              key: "/users",
              icon: <VideoCameraOutlined />,
              label: <Link to={"/users"}>کاربران</Link>,
            },
            {
              key: "3",
              label: <Link to={"/chart"}>نمودار ها</Link>,
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
        <Header
          style={{
            background: colorBgContainer,
            padding: "0 40px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {React.createElement(MenuOutlined, {
            className: "trigger",
            onClick: () => setCollapsed(!collapsed),
            style: { fontSize: "20px" },
          })}

          <Dropdown
            dropdownRender={menu => (
              <div
                style={{
                  backgroundColor: "#fff",
                  boxShadow: " 0px 0px 50px 0px rgba(82, 63, 105, 0.15)",
                  marginTop: "10px",
                  borderRadius: "0.475rem",
                }}
              >
                <Space direction="horizontal" size={12} style={{ padding: 8 }}>
                  <Avatar
                    shape="square"
                    style={{ marginRight: "auto" }}
                    src={require("../assets/image/ali.jpg")}
                  />
                  <Space direction="vertical">
                    <Typography.Text>علی سیدآبادی</Typography.Text>
                    <Typography.Text>ialiseyed@gmail.com</Typography.Text>
                  </Space>
                </Space>
                <Divider style={{ margin: "0" }} />
                <Menu
                  style={{ boxShadow: "none" }}
                  items={[
                    {
                      key: "1",
                      label: <Link to={"/"}>پروفایل</Link>,
                    },
                    {
                      key: "2",
                      label: <Link to={"/users"}>کاربران</Link>,
                    },

                    {
                      key: "3",
                      label: "محصولات",
                    },
                  ]}
                />
                <Divider style={{ margin: "0" }} />
                <Menu
                  style={{ boxShadow: "none" }}
                  items={[
                    {
                      key: "3",
                      label: "خروج",
                    },
                  ]}
                />
              </div>
            )}
          >
            <Avatar
              shape="square"
              style={{ marginRight: "auto" }}
              src={require("../assets/image/ali.jpg")}
            />
          </Dropdown>
          <Dropdown style={{}}>
            <SearchOutlined
              style={{ fontSize: "20px", marginRight: "15px" }}
              fontSize={20}
            />
          </Dropdown>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            // background: colorBgContainer,
          }}
        >
          {" "}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}{" "}
          </motion.div>{" "}
        </Content>
      </Layout>
    </Layout>
  );
};

export default PanelLayout;
