// react
import { useState } from "react";

// style
import styles from "./UpdateTodo.module.scss";

// component
import FormTodo from "../FormTodo";
// ant icon
import { PlusOutlined } from "@ant-design/icons";

// ant component
import { Button, Drawer } from "antd";

function UpdateTodo() {
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
    <div className={styles.updateTodo}>
      <div className={styles.btnUpdate}>
        <Button type="primary" style={{ width: "99%" }} onClick={showDrawer}>
          <PlusOutlined />
          Update Todo
        </Button>
      </div>
      <Drawer
        title="Add Todo"
        placement="left"
        onClose={onClose}
        visible={visible}
        width="300"
      >
        <FormTodo />
      </Drawer>
    </div>
  );
}

export default UpdateTodo;
