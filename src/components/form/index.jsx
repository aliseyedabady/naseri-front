import React from "react";
import { Button, Checkbox, Col, Form, Input, Row, theme } from "antd";
import { useForm } from "./hook";
import { isIn } from "../../utils/functions";
import Grid from "./components/grid";
import AkoInput from "./components/input";
import AkoSelect from "./components/select";
import AkoTextArea from "./components/textarea";
import AkoImageUploader from "./components/imageUploader";
const AkoForm = ({ form }) => {
  const {} = useForm();
  const renderElement = element => {
    switch (element.type) {
      case "images":
        return <AkoImageUploader element={element} />;
      case "select":
        return <AkoSelect element={element} />;
      case "textarea":
        return <AkoTextArea element={element} />;
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
            <Grid
              lg={element.lg || 6}
              md={element.md || 12}
              span={element.span || 24}
            >
              {renderElement(element)}
            </Grid>
          );
        })}
      </Row>

      <Row justify={"end"}>
        <Grid>
          <Form.Item>
            <Button size="large" type="primary" htmlType="submit">
              ارسال
            </Button>
          </Form.Item>
        </Grid>
      </Row>
    </Form>
  );
};

export default AkoForm;
