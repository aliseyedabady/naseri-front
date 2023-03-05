import React from "react";
import { Form, Input, DatePicker, theme } from "antd";
import { isIn } from "../../../../utils/functions";

const { TextArea } = Input;
const AkoTextArea = ({ element }) => {
  const {
    token: { inputBackgroundColor },
  } = theme.useToken();
  return (
    <Form.Item
      label={element.label}
      name={element.key}
      rules={element.rules}
      required={isIn(element.rules, "required", true)}
    >
      <TextArea
        showCount
        rows={4}
        maxLength={element.maxLength || false}
        style={{ backgroundColor: inputBackgroundColor }}
      />
    </Form.Item>
  );
};

export default AkoTextArea;
