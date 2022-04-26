// react
import { useState } from "react";

// moment
import moment from "moment";

// style
import "./FormTodo.css";

// ant icon
import { UploadOutlined } from "@ant-design/icons";

// ant component
import {
  Button,
  Form,
  Input,
  DatePicker,
  TimePicker,
  Select,
  Upload,
} from "antd";

const { Option } = Select;

// default image
const fileList = [];

// default props
FormTodo.defaultProps = {
  onSubmit: () => {},
  loading: false,
  alert: () => {},
  resetForm: false,
  projects: [],
};

function FormTodo({ onSubmit, loading, alert, resetForm, projects }) {
  // STATE

  // METHOD
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // onChange datepicker
  function onChangeDate(date, dateString) {
    console.log(date, dateString);
  }

  // onChange timepicker
  function onChangeTime(date, dateString) {
    console.log(date, dateString);
  }

  // onBeforeUpload image
  function onBeforeUpload(image) {
    console.log("image:", image);
    return false;
  }

  return (
    <div className="form-todo">
      <Form
        name="basic"
        initialValues={{
          name: "",
          projectId: "",
          date: "",
          time: "",
          day: "",
          finished: false,
        }}
        onFinish={onSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {/* name*/}
        <Form.Item name="name" className="form-item">
          <Input placeholder="name" />
        </Form.Item>
        {/* name*/}

        {/* date*/}
        <Form.Item name="date" className="form-item">
          <DatePicker
            format="DD/MM/YYYY"
            onChange={onChangeDate}
            style={{ width: "100%" }}
          />
        </Form.Item>
        {/* date*/}

        {/* time*/}
        <Form.Item name="time" className="form-item">
          <TimePicker onChange={onChangeTime} style={{ width: "100%" }} />
        </Form.Item>
        {/* time*/}

        {/* project-name*/}
        <Form.Item name="projectName" className="form-item">
          <Select
            showSearch
            placeholder="Select project"
            optionFilterProp="children"
          >
            {projects.map((project) => (
              <Option key={project._id} value={project._id}>
                {project.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        {/* project-name*/}

        {/* image*/}
        <Form.Item className="form-item" name="image">
          <Upload
            listType="picture"
            defaultFileList={[...fileList]}
            beforeUpload={onBeforeUpload}
            maxCount={1}
            className="upload-image"
          >
            <Button className="btn-upload" icon={<UploadOutlined />}>
              Image
            </Button>
          </Upload>
        </Form.Item>
        {/* image */}

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

export default FormTodo;
