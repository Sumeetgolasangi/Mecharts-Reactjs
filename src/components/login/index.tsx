import React from "react";
import { Button, Checkbox, Form, Input, Card ,message} from "antd";
import "./login.css";
const Login = () => {

  const onFinish = (values: any) => {
    const email = values.email
    const password = values.password
    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password
      }),
    }).then((res) => res.json()).then((data) => {
      sessionStorage.setItem("data", data.token);
      sessionStorage.setItem("user", data.data);
      message.info(data.message)})
  };

  const onFinishFailed = (errorInfo: any) => {
    message.error("Failed:", errorInfo);
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
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your Email!" }]}
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
        <a href="/signup" className="button" style={{fontSize:"12px"}}>
          Sign-Up
        </a>
      </div>
    </Card>
  );
};
export default Login;
