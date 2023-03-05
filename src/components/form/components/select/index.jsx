import { Form, Select, theme } from "antd";
import React from "react";
import { isIn } from "../../../../utils/functions";

const AkoSelect = ({ element }) => {
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
      <Select
        defaultValue="lucy"
        style={{ backgroundColor: inputBackgroundColor }}
        // onChange={handleChange}
        options={[
          { value: "jack", label: "Jack" },
          { value: "lucy", label: "Lucy" },
          { value: "Yiminghe", label: "yiminghe" },
          { value: "disabled", label: "Disabled", disabled: true },
        ]}
      />
    </Form.Item>
  );
};

export default AkoSelect;
