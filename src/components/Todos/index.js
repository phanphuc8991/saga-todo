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
  { id: 1, text: "run", image: "images" },
  { id: 2, text: "run", image: "images" },
  { id: 3, text: "run", image: "images" },
  { id: 4, text: "run", image: "images" },
  { id: 5, text: "run", image: "images" },
  { id: 6, text: "run", image: "images" },
  { id: 7, text: "run", image: "images" },
  { id: 8, text: "run", image: "images" },
];
function Todos() {
  // STATE

  // METHOD

  // open drawer

  return (
    <div className={styles.todos}>
      <Row>
        {todos.map((todo) => (
          <Col
            key={todo.id}
            className="gutter-row"
            span={6}
            style={{ marginBottom: "20px" }}
          >
            <Todo />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Todos;
