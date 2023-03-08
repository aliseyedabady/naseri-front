import { Col, Grid, Row } from "antd";
import React from "react";
import AkoLineChart from "../../components/chart/Line";
import AkoProgressCircle from "./components/progressCircle";

const Dashboard = () => {
  return (
    <Row gutter={30} justify={"space-between"}>
      <Col lg={8} md={12} sm={24}>
        <AkoLineChart />
      </Col>
      <Col lg={4} md={8} sm={12}>
        <AkoProgressCircle />
      </Col>
    </Row>
  );
};

export default Dashboard;
