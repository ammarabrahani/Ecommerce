import React, { useState } from "react";
import { Button, Col, Form, Input, Row } from "antd";
import { auth } from "../../firebase";
import { ToastContainer, toast } from "react-toastify";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";

import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [registerationForm] = Form.useForm();
  const onFinish = async () => {
    const actionCodeSettings = {
      url: "http://localhost:3000",
      handleCodeInApp: true,
    };

    const auth = getAuth();

    registerationForm.validateFields().then(async (values) => {
      sendSignInLinkToEmail(auth, values.email, actionCodeSettings)
        .then(() => {
          window.localStorage.setItem("emailForSignIn", values.email);
          toast.success(`Email is sent to ${values.email}`);
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage);
        });
    });
  };
  const notify = () => toast("Wow so easy!");

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
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
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
