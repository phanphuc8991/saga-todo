// react
import { useState, useEffect, useRef } from "react";

// moment
import moment from "moment";

// style
import "./FormTodo.css";

// ant icon
import { UploadOutlined } from "@ant-design/icons";

// ant component

// component
import ButtonCustom from "components/Button";

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

// default props
FormTodo.defaultProps = {
  onSubmit: () => {},
  loading: false,
  alert: () => {},
  resetForm: false,
  projects: [],
  type: "",
  initialValues: {
    name: undefined,
    projectId: undefined,
    date: undefined,
    time: undefined,
    day: undefined,
    finished: false,
    image: undefined,
  },
};

function FormTodo({
  onSubmit,
  loading,
  alert,
  resetForm,
  projects,
  type,
  initialValues,
}) {
  // REF
  const refForm = useRef();

  // STATE

  const [fileListImage, setFileListImage] = useState([]);

  useEffect(() => {
    if (type !== "Update") {
      refForm.current.resetFields();
    }
  }, [resetForm]);
  // EFFECT
  useEffect(() => {
    if (type === "Update") {
      refForm.current.setFieldsValue(initialValues);
    }
    if (initialValues?.image) {
      setFileListImage([initialValues.image]);
    }
  }, [initialValues]);
  // METHOD

  const onFinishFailed = (errorInfo) => {
    alert(errorInfo);
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
        ref={refForm}
        name="basic"
        onFinish={onSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {/* name*/}
        <Form.Item
          name="name"
          className="form-item"
          rules={[
            {
              required: true,
              message: "Please input project name!",
            },
          ]}
        >
          <Input placeholder="name" />
        </Form.Item>
        {/* name*/}

        {/* date*/}
        <Form.Item
          name="date"
          className="form-item"
          rules={[
            {
              required: true,
              message: "Please choose date!",
            },
          ]}
        >
          <DatePicker
            format="DD/MM/YYYY"
            onChange={onChangeDate}
            style={{ width: "100%" }}
          />
        </Form.Item>
        {/* date*/}

        {/* time*/}
        <Form.Item
          name="time"
          className="form-item"
          rules={[
            {
              required: true,
              message: "Please choose time!",
            },
          ]}
        >
          <TimePicker onChange={onChangeTime} style={{ width: "100%" }} />
        </Form.Item>
        {/* time*/}

        {/* project-name*/}
        <Form.Item
          name="projectId"
          className="form-item"
          rules={[
            {
              required: true,
              message: "Please choose project!",
            },
          ]}
        >
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
        <Form.Item
          className="form-item"
          name="image"
          rules={[
            {
              validator: (_, value) => {
                console.log(value);
                if ((value && value.fileList?.length > 0) || value.thumbUrl) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Please choose image"));
              },
            },
          ]}
        >
          <Upload
            listType="picture"
            fileList={fileListImage}
            beforeUpload={onBeforeUpload}
            maxCount={1}
            className="upload-image"
            accept=".png,.jpg,.jpeg"
            onChange={(file) => {
              if (file.fileList.length === 0) {
                setFileListImage([]);
              } else {
                setFileListImage(file.fileList);
              }
            }}
          >
            <Button className="btn-upload" icon={<UploadOutlined />}>
              Image
            </Button>
          </Upload>
        </Form.Item>
        {/* image */}

        {/* Button*/}
        <Form.Item className="form-item">
          <ButtonCustom loading={loading} text={type} />
        </Form.Item>
        {/* Button*/}
      </Form>
    </div>
  );
}

export default FormTodo;
