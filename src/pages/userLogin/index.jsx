import React from "react";
import "../../assets/styles/custom.scss";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  Layout,
  theme,
  Typography,
  Button,
  Form,
  Input,
  Avatar,
  Row,
  Col,
} from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const UserLogin = () => {

  const { Content } = Layout;

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

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
    <Row justify={"center"}>
      <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }}>
        <div
          style={{
            backgroundColor: pageBackground,
            height: "100vh",
            overflow: "hidden",
          }}
          className="main"
        >
          <div className="sub-main" style={{ backgroundColor: cardBackground }}>
            <div className="main-form">
              <Avatar size={64} icon={<UserOutlined />} className="avatar" />

              <Typography.Title style={{ whiteSpace: "nowrap" }}>
                ورود کاربر
              </Typography.Title>

              <div>
                <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                >
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "لطفا نام کاربری خود را وارد نمایید!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="نام کاربری"
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "لطفا رمز عبور خود را وارد نمایید!",
                      },
                    ]}
                  >
                    <Input.Password
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      placeholder="رمز عبور" 
                      iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                      }
                    />
                  </Form.Item>

                  <div className="forget-section">
                    <Form.Item>
                      <a className="login-form-forgot" href="">
                        فراموشی رمز
                      </a>
                    </Form.Item>
                  </div>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      ورود
                    </Button>
                    <br />
                    {/* <Button htmlType="submit" className="cancell-form-button">
                      لغو
                    </Button> */}
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default UserLogin;
