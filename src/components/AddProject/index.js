// react
import { useState } from "react";

// style
import styles from "./AddProject.module.scss";

// ant icon
import { PlusOutlined } from "@ant-design/icons";

// ant component
import { Drawer } from "antd";

function AddProject() {
  // STATE
  const [visible, setVisible] = useState(false);

  // METHOD

  // open drawer
  const showDrawer = () => {
    setVisible(true);
  };

  // close drawer
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className={styles.addProject}>
      <div className={styles.iconAdd} onClick={showDrawer}>
        <PlusOutlined style={{ fontSize: "13px" }} />
      </div>
      <Drawer
        title="Add Project"
        placement="left"
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
}

export default AddProject;
