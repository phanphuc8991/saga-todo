// react
import { useState, useEffect } from "react";

// style
import styles from "./AddTodo.module.scss";

// moment
import moment from "moment";

// redux
import { useSelector, useDispatch } from "react-redux";
import { addTodoStart } from "features/todo/todoActions";
import { alertHidden, alertShow } from "components/Alert/alertActions";

// component
import FormTodo from "components/FormTodo";

// ant icon
import { PlusOutlined } from "@ant-design/icons";

// ant component
import { Button, Drawer } from "antd";
// default props
FormTodo.defaultProps = {
  projects: [],
};

function AddTodo({ projects }) {
  // STATE
  const [visible, setVisible] = useState(false);

  // REDUX
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.button.loading);
  const type = useSelector((state) => state.alert.type);
  // EFFECT
  useEffect(() => {
    if (type === "success") {
      setVisible(false);
    }
  });
  // METHOD

  // open drawer
  const showDrawer = () => {
    setVisible(true);
  };

  // close drawer
  const onClose = () => {
    if (!loading) {
      setVisible(false);
    }
  };

  // create project
  const createTodo = (todo) => {
    if (todo.image.fileList.length === 0) {
    }
    const newTodo = {
      ...todo,
      date: moment(todo.date).format("DD/MM/YYYY"),
      time: moment(todo.time).format("hh:mm A"),
      day: moment(todo.date).format("d"),
      finished: false,
    };
    dispatch(addTodoStart(newTodo));
  };

  // onFinishFailed
  const alert = (errorInfo) => {
    const description = errorInfo.errorFields.map((error) => error.errors);
    dispatch(
      alertShow({ type: "error", text: "Error Text", description: description })
    );
  };

  return (
    <div className={styles.addTodo}>
      <div className={styles.btnAdd}>
        <Button type="primary" style={{ width: "99%" }} onClick={showDrawer}>
          <PlusOutlined />
          New Todo
        </Button>
      </div>
      <Drawer
        title="Add Todo"
        placement="left"
        onClose={onClose}
        visible={visible}
        width="300"
      >
        <FormTodo
          alert={alert}
          loading={loading}
          onSubmit={createTodo}
          projects={projects}
          resetForm={visible}
          type="Create"
        />
      </Drawer>
    </div>
  );
}

export default AddTodo;
