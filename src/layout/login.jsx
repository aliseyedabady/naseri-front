import React from "react";
import "../assets/styles/custom.scss";
import { Layout, theme, Row, Col } from "antd";

const UserLoginLayout = ({ children }) => {
  const { Content } = Layout;

  const {
    token: {
      colorBgContainer,
      sideBarBackgroundColor,
      sidebarColorDefault,
      pageBackground,
      cardBackground,
    },
  } = theme.useToken();
  return (
    <Row justify={"center"} style={{ backgroundColor: cardBackground }}>
      <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }}>
        <div
          style={{
            height: "100vh",
            overflow: "hidden",
          }}
          className="main"
        >
          <div className="sub-main" style={{ backgroundColor: pageBackground }}>
            <div className="main-form">
              {children}
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default UserLoginLayout;
