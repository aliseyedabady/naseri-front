import React from "react";
import { isIn } from "../../../../utils/functions";
import { Form, Input, theme } from "antd";

const AkoInput = ({ element }) => {
  const {
    token: { inputBackgroundColor },
  } = theme.useToken();
  return (
    <Form.Item
      required={isIn(element.rules, "required", true)}
      label={element.label}
      rules={element.rules}
      name={element.key}
    >
      <Input style={{ backgroundColor: inputBackgroundColor }} />
    </Form.Item>
  );
};

export default AkoInput;
