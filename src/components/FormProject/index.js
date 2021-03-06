import { useRef, useEffect } from "react";
// style
import "./FormProject.css";

// ant component
import { Button, Form, Input } from "antd";

// component
import ButtonCustom from "components/Button";

// default props
FormProject.defaultProps = {
  onSubmit: () => {},
  loading: false,
  alert: () => {},
  resetForm: false,
  project: { name: "" },
};

function FormProject({ onSubmit, loading, alert, resetForm, project }) {
  // REF
  const refForm = useRef();

  // EFFECT
  useEffect(() => {
    if (!project) {
      refForm.current.resetFields();
    }
  }, [resetForm]);

  useEffect(() => {
    refForm.current.setFieldsValue(project);
  }, [resetForm]);

  // METHOD
  const onFinishFailed = (errorInfo) => {
    alert(errorInfo);
  };

  return (
    <div className="form-project">
      <Form
        ref={refForm}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
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
          <ButtonCustom loading={loading} />
        </Form.Item>
        {/* Button*/}
      </Form>
    </div>
  );
}

export default FormProject;
