import React from "react";
import { Card, Row, Col } from "antd";
import "./home.css";
import Menu from './menu'
const Home: any = () => {
  return (
    <div className="home-container">
      <Row gutter={10}>
        <Col span={4}>
          <Card className="menu">
            <Menu/>
          </Card>
        </Col>
        <Col span={20}>
          <Card className="home">Home</Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
