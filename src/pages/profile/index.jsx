import { Avatar, Card, Col, Row, Typography } from "antd";
import React from "react";

const Profile = () => {
  return (
    <Row className="ant-card">
      <Col>
        <Row>
          <Col>
            <Row>
              <Col>
                <Avatar
                  shape="square"
                  style={{}}
                  size={100}
                  src={require("../../assets/image/ali.jpg")}
                />
              </Col>
              <Col>
                <div>
                  <Typography.Title level={4}>علی سیدآبادی</Typography.Title>
                  <Typography.Title>کارشناس فنی</Typography.Title>
                  <div className="border-dash">
                    <div>
                      <span></span>
                      $5,533
                    </div>
                    <p>درآمد</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Profile;
