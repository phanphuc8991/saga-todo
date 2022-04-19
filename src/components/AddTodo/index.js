// react
import { useState } from "react";

// style
import styles from "./AddTodo.module.scss";

// ant icon
import { PlusOutlined } from "@ant-design/icons";

// ant component
import { Button, Drawer } from "antd";

function AddTodo() {
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
    <div className={styles.addTodo}>
      <div className={styles.btnAdd}>
        <Button type="primary" style={{ width: "90%" }} onClick={showDrawer}>
          <PlusOutlined />
          New Todo
        </Button>
      </div>
      <Drawer
        title="Add Todo"
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

export default AddTodo;
