// react
import { useState } from "react";

// style
import styles from "./Todos.module.scss";

// component
import Todo from "../Todo";

// ant icon

// ant component
import { Row, Col } from "antd";
const todos = [
  { text: "run", image: "images" },
  { text: "run", image: "images" },
  { text: "run", image: "images" },
  { text: "run", image: "images" },
  { text: "run", image: "images" },
  { text: "run", image: "images" },
  { text: "run", image: "images" },
  { text: "run", image: "images" },
];
function Todos() {
  // STATE

  // METHOD

  // open drawer

  return (
    <div className={styles.todos}>
      <Row>
        {todos.map((todo) => (
          <Col span={6} style={{ marginBottom: "20px" }}>
            <Todo />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Todos;
