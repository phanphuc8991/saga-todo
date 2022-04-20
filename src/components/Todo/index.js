// react
import { useState } from "react";
import image from "../../images/bg.jpeg";
// style
import styles from "./Todo.module.scss";

// ant icon

// ant component
import { Card } from "antd";

function Todo() {
  // STATE

  // METHOD

  // open drawer

  return (
    <div className={styles.todo}>
      <Card
        hoverable
        style={{ width: 230 }}
        cover={<img alt="example" src={image} />}
      ></Card>
    </div>
  );
}

export default Todo;
