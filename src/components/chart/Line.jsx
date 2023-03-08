import React, { useEffect, useState } from "react";
import { Area, Line } from "@ant-design/plots";
import { Card, Space, Typography } from "antd";

const AkoLineChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json"
    )
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log("fetch data failed", error);
      });
  };
  const config = {
    data,
    // padding: "auto",
    xField: "Date",
    yField: "scales",
    line: { color: "#3EA6EE" },
    xAxis: {
      // type: 'timeCat',
      label: {
        style: { color: "red" },
      },
      area: {
        stroke: "red",
        lineWidth: 0,
        opacity: 0,
      },
    },
    yAxis: {
      label: {
        style: { color: "red" },
        offset: 30,
        textAlign: "left",
      },
      position: "right",
    },
    smooth: true,
    areaStyle: () => {
      return {
        fill: "l(270) 0:#ffffff 0.5:#CFEEF5 1:#3EA6EE",
      };
    },
  };
  return (
    <Card hoverable={true}>
      <div
        style={{
          justifyContent: "space-between",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div direction="vertical">
          <Typography.Title level={5}>فروش روزانه</Typography.Title>
          <Typography.Paragraph className="subtitle-color fs-6">
            1,042 فروش در طول روز
          </Typography.Paragraph>
        </div>
        <div>
          <Typography.Paragraph>21 فروردین ۱۴۰۱</Typography.Paragraph>
        </div>
      </div>

      <Area {...config} />
    </Card>
  );
};

export default AkoLineChart;
