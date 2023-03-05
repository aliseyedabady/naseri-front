import React from "react";
import { Button, Checkbox, Col, Form, Input, Row, theme } from "antd";
import { useForm } from "./hook";
import { isIn } from "../../utils/functions";
import Grid from "./components/grid";
import AkoInput from "./components/input";
import AkoSelect from "./components/select";
const AkoForm = ({ form }) => {
  const {} = useForm();
  const renderElement = element => {
    switch (element.type) {
      case "images":
        return <></>;
      case "select":
        return <AkoSelect element={element} />;
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
      case "clock":
        return <></>;
      case "file":
        return <></>;
      case "excel":
        return <></>;
      default:
        return <AkoInput element={element} />;
    }
  };
  return (
    <Form name="" autoComplete="off" layout="vertical" size={"middle"}>
      <Row gutter={[24, 0]}>
        {form.map(element => {
          return (
            <Grid lg={6} md={12} span={24}>
              {renderElement(element)}
            </Grid>
          );
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
