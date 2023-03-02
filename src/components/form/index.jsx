import React from "react";
import { Button, Checkbox, Col, Form, Input, Row, theme } from "antd";
import { useForm } from "./hook";
import { isIn } from "../../utils/functions";
const AkoForm = ({ form }) => {
  const {
    token: { inputBackgroundColor },
  } = theme.useToken();
  const {} = useForm();
  const renderElement = element => {
    switch (element.type) {
      case "images":
        return <></>;
      case "select":
        return <></>;
      case "textarea":
        return <></>;
      case "editor":
        return <></>;
      case "multiselect":
        return <></>;
      case "toggle":
        return <></>;

      case "date":
        return <></>;
      case "file":
        return <></>;
      case "excel":
        return <></>;
      default:
        return (
          <Col lg={6} md={12} span={24}>
            <Form.Item
              required={isIn(element.rules, "required", true)}
              label={element.label}
              rules={element.rules}
              name={element.key}
            >
              <Input style={{ backgroundColor: inputBackgroundColor }} />
            </Form.Item>
          </Col>
        );
    }
  };
  return (
    <Form name="" autoComplete="off" layout="vertical" size={"middle"}>
      <Row gutter={[24, 0]}>
        {form.map(element => {
          return renderElement(element);
        })}
      </Row>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          ارسال
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AkoForm;
