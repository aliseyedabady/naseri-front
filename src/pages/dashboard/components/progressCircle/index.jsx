import { Card, Progress, Space, Tooltip, Typography } from "antd";
import React from "react";

const AkoProgressCircle = () => {
  return (
    <Card>
      <Typography.Title level={5}>وضغیت سفارشات اخیر</Typography.Title>
      <Typography.Paragraph className="subtitle-color fs-6">
        تمامی سفارشات روزانه crm میشود
      </Typography.Paragraph>
      <Tooltip title="۲۰ سفارش انجام شده / ۱۰ سفارش معلق">
        <Progress type="circle" percent={60} success={{ percent: 30 }} />
      </Tooltip>
    </Card>
  );
};

export default AkoProgressCircle;
