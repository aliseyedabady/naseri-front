import React from "react";
import "../../assets/styles/custom.scss";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Typography, Button, Form, Input, Avatar } from "antd";
import { useLogin } from "./Hook";
import SpinFC from "antd/es/spin";

const LoginForm = () => {
  const { login, loading } = useLogin();
  return (
    <div>
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
          onFinish={(values) => login(values)}>
          <Form.Item
            name="mobile"
            rules={[
              {
                required: true,
                message: "لطفا نام کاربری خود را وارد نمایید!",
              },
            ]}>
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
            ]}>
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
              disabled={loading}>
              {loading ? <SpinFC size="small" /> : "ورود"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
