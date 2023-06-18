import React from "react";
import { Button, Checkbox, Form, Input, Card } from "antd";
import "./login.css";
const Login = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Card className="Card">
      <Form
        name="basic"
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 100 }}
        style={{ maxWidth: 2000 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <div className="signup">
        <p className="para">New to MeCharts? Please click here for</p>
        <a href="/signup" className="button">
          Sign-Up
        </a>
      </div>
    </Card>
  );
};
export default Login;
