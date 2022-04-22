// style
import "./FormProject.css";

// ant component
import { Button, Form, Input } from "antd";

// default props
FormProject.defaultProps = {
  onSubmit: () => {},
  bthLooding: false,
};

function FormProject({ onSubmit, bthLooding }) {
  // METHOD
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
        onFinish={onSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {/* name*/}
        <Form.Item
          rules={[
            {
              required: true,
              message: "Please input project name!",
            },
          ]}
          name="name"
          className="form-item"
        >
          <Input placeholder="name" />
        </Form.Item>
        {/* name*/}
        {/* Button*/}
        <Form.Item className="form-item">
          <Button
            style={{ width: "100%" }}
            type="primary"
            htmlType="submit"
            loading={bthLooding}
          >
            Submit
          </Button>
        </Form.Item>
        {/* Button*/}
      </Form>
    </div>
  );
}

export default FormProject;
