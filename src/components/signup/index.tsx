import React from "react";
import { Button, Checkbox, Form, Input, Card ,InputNumber} from "antd";
import "./signup.css";
import {message} from 'antd'
const SignUp = () => {
  const onFinish = (values: any) => {
    const name = values.name
    const email = values.email
    const password = values.password
    const phonenumber = values.phonenumber
    const passwordhint = values.passwordhint
    const username = values.username
    fetch("http://localhost:8080/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        phonenumber,
        passwordhint,
        username
      }),
    }).then((res) => res.json()).then((data) => {
      message.info(data.message)})
  };

  const onFinishFailed = (errorInfo: any) => {
    message.error("Submit Failed:", errorInfo);
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
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your Name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ type: 'email' ,required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="PhoneNumber"
          name="phonenumber"
          rules={[{ required: true, message: "Please input your PhoneNumber!" }]}
        >
          <InputNumber style={{width:"100%"}}/>
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
        <p className="para">already have account in MeCharts? Please click here for</p>
        <a href="/login" className="button" style={{fontSize:"12px"}}>
          Login
        </a>
      </div>
    </Card>
  );
};
export default SignUp;

