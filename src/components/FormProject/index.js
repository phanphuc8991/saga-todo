// react
import { useState } from "react";

// moment
import moment from "moment";

// style
import "./FormTodo.css";

// ant component
import { Button, Form, Input } from "antd";

function FormProject() {
  // STATE

  // METHOD
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="form-todo">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          name: "",
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {/* name*/}
        <Form.Item name="name" className="form-item">
          <Input placeholder="name" />
        </Form.Item>
        {/* name*/}
        {/* Button*/}
        <Form.Item className="form-item">
          <Button style={{ width: "100%" }} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        {/* Button*/}
      </Form>
    </div>
  );
}

export default FormProject;
