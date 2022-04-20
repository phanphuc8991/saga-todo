// react
import { useState } from "react";

// style
import styles from "./Project.module.scss";

// component
import FormProject from "../FormProject";

// ant icon
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

// ant component
import { Drawer, Popconfirm, message } from "antd";

function Project({ project }) {
  // STATE
  const [visible, setVisible] = useState(false);

  // METHOD

  // open drawer
  const showDrawer = () => {
    setVisible(true);
  };
  // close drawer
  const onClose = () => {
    console.log("run..");
    setVisible(false);
  };

  // Popconfirm
  function confirm(e) {
    console.log(e);
    message.success("Click on Yes");
  }

  function cancel(e) {
    console.log(e);
    message.error("Click on No");
  }

  return (
    <div className={styles.project}>
      <div className={styles.projectName}>Run</div>
      <div className={styles.btnUpdateDelete}>
        <div className={styles.btnDelete}>
          {" "}
          <Popconfirm
            title="Are you sure to delete this project?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <DeleteOutlined />
          </Popconfirm>
        </div>

        <div className={styles.btnUpdate} onClick={showDrawer}>
          {" "}
          <EditOutlined />
        </div>
      </div>
      <Drawer
        title="Update Project"
        placement="left"
        onClose={onClose}
        visible={visible}
        width="300"
      >
        <FormProject />
      </Drawer>
    </div>
  );
}

export default Project;
