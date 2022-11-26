import React, { useState } from "react";
import { Button, Col, Form, Input, Row } from "antd";
import { auth } from "../../firebase";
import { Toast, ToastContainer } from "react-toastify/dist/components";
const Register = () => {
  const [registerationForm] = Form.useForm();
  const onFinish = () => {};

  const registerForm = () => (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
      form={registerationForm}
    >
      <Form.Item label="Email" name="email">
        <Input />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Register
      </Button>
    </Form>
  );

  return (
    <div className="container">
      <Row>
        <Col span={12}>
          <h1>Register</h1>
          {registerForm()}
        </Col>
        <Col span={12}>Registers</Col>
      </Row>
    </div>
  );
};

export default Register;
