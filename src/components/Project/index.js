// react
import { useState } from "react";

// style
import styles from "./Project.module.scss";

// ant icon
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

// ant component

function AddTodo({ project }) {
  // STATE

  // METHOD

  return (
    <div className={styles.project}>
      <div className={styles.projectName}>Run</div>
      <div className={styles.btnUpdateDelete}>
        <div className={styles.btnDelete}>
          {" "}
          <DeleteOutlined />
        </div>
        <div className={styles.btnUpdate}>
          {" "}
          <EditOutlined />
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
