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

function FormTodo() {
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

  // onChange select
  function onChangeSelect(value) {
    console.log(`selected ${value}`);
  }

  // onSearch select
  function onSearchSelect(val) {
    console.log("search:", val);
  }
  // onBeforeUpload image
  function onBeforeUpload(image) {
    console.log("image:", image);
    return false;
  }

  const formItemLayout = {
    labelCol: { span: 20 },
    wrapperCol: { span: 100 },
  };
  return (
    <div className="form-todo">
      <Form
        {...formItemLayout}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          name: "",
          projectId: "",
          date: "",
          time: "",
          day: "",
          finished: false,
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
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChangeSelect}
            onSearch={onSearchSelect}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </Form.Item>
        {/* project-name*/}

        {/* image*/}
        <Form.Item className="form-item">
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
