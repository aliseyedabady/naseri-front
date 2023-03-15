import React from "react";
import "../../assets/styles/custom.scss";
import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
  KeyOutlined,
} from "@ant-design/icons";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  Checkbox,
  Statistic,
  Avatar,
  Typography,
} from "antd";
import { useEffect, useState } from "react";
import { useForgetPass } from "./Hook";

const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
const ForgetPassword = () => {
  // const { form, showResend, changeShowResend } = useForgetPass();
  const onFinish = (values) => {
    console.log(":مقادیر گرفته شده از فرم", values);
  };

  const onChange = (val) => {
    if (val && 4.95 * 1000 < val && val < 5 * 1000) {
      console.log("changed!");
    }
  };
  // const renderBtn = () => {
  //   if (showResend) {
  //     return (
  //       <Button type="primary" htmlType="submit" className="login-form-button">
  //         ارسال مجدد کد
  //       </Button>
  //     );
  //   } else {
  //     return (
  //       <Button type="primary" htmlType="submit" className="login-form-button">
  //         ثبت
  //       </Button>
  //     );
  //   }
  // };
  return (
    <div>
      <Avatar size={64} icon={<KeyOutlined />} className="avatar" />

      <Typography.Title style={{ whiteSpace: "nowrap" }}>
        فراموشی رمز
      </Typography.Title>
      <div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "لطفا کد تایید را وارد نمایید!",
              },
            ]}>
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="کد تایید موقت"
            />
            <div className="countdown">
              {/* <Countdown
                format="mm:ss"
                value={Date.now() + 3 * 1000}
                onChange={onChange}
                onFinish={changeShowResend}
              /> */}
            </div>
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "لطفا رمز عبور خود را وارد نمایید",
              },
            ]}
            hasFeedback>
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="رمز عبور"
            />
          </Form.Item>

          <Form.Item
            name="confirm"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "لطفا رمز عبور خود را تایید نمایید",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("رمز‌های عبور با هم مطابقت ندارند")
                  );
                },
              }),
            ]}>
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="تایید رمز عبور"
            />
          </Form.Item>

          {/* <Form.Item>{renderBtn()}</Form.Item> */}
        </Form>
      </div>
    </div>
  );
};

export default ForgetPassword;
