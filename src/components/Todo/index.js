// react
import { useState } from "react";
import image from "../../images/bg.jpeg";
// style
import styles from "./Todo.module.scss";

// ant icon
import {
  EditOutlined,
  EllipsisOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
// ant component
import { Card, Switch, Popconfirm } from "antd";
// default props
Todo.defaultProps = {
  todo: {
    name: undefined,
    date: undefined,
    day: undefined,
    image: undefined,
    finished: undefined,
  },
  onUpdate: () => {},
  onDelete: () => {},
  onFinished: () => {},
  loading: false,
};

function Todo({ todo, onUpdate, onDelete, onFinished, loading }) {
  // STATE
  const [visible, setVisibe] = useState(false);
  // METHOD
  const updateTodo = () => {
    onUpdate(todo);
  };

  const deleteTodo = () => {
    onDelete(todo);
  };
  const handleCancel = () => {
    setVisibe(false);
  };
  const openPopconfirm = () => {
    setVisibe(true);
  };
  return (
    <div className={styles.todo}>
      <Card
        actions={[
          <Popconfirm
            title="Are you sure to delete this project?"
            onConfirm={deleteTodo}
            visible={visible}
            okButtonProps={{ loading: loading }}
            onCancel={handleCancel}
            cancelText="Cancel"
            okText="Yes"
          >
            <DeleteOutlined key="delete" onClick={openPopconfirm} />
          </Popconfirm>,
          <EditOutlined key="update" onClick={updateTodo} />,

          <Switch size="small" />,
        ]}
        hoverable
        style={{ minWidth: 230 }}
        cover={
          <img
            style={{ maxWidth: 100 }}
            alt="img error"
            src={todo.image ? todo.image : ""}
          />
        }
      >
        <div>{todo.name && todo.name}</div>
        <div>{todo.date && todo.date}</div>
        <div>{todo.time && todo.time}</div>
        <div>{todo.finished ? "finished" : "pedding"}</div>
      </Card>
    </div>
  );
}

export default Todo;
