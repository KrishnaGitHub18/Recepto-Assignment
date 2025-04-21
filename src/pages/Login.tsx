import React from "react";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const Login: React.FC = () => {
  const navigate = useNavigate();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    if (
      (values?.username === "admin1" ||
        values?.username === "admin2" ||
        values?.username === "admin3" ||
        values?.username === "admin4" ||
        values?.username === "admin5") &&
      values?.password === "admin"
    ) {
      message.success("Login Successful!");
      const nameVal =
        values?.username === "admin1"
          ? "Olivia Rhye"
          : values?.username === "admin2"
          ? "Ava Johnson"
          : values?.username === "admin3"
          ? "Mason Clark"
          : values?.username === "admin4"
          ? "Liam Patel"
          : "Emma Chen";

      localStorage.setItem(
        "userdata",
        JSON.stringify({
          name: nameVal,
          password: values?.password,
          verified: true,
          credits: (Math.floor(Math.random() * 11) + 90)*1000
        })
      );
      setTimeout(() => {
        navigate("/a/leads");
      }, 1000);
    } else {
      message.error("Invalid Credentials");
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    message.error("Error in logging in!");
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600, borderWidth: 2, padding: 40, borderRadius: 10 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          label={null}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
