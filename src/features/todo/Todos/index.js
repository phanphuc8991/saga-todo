// react
import { useState, useEffect, useRef } from "react";

// style
import styles from "./Todos.module.scss";
import moment from "moment";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getTodosStart, updateTodoStart } from "features/todo/todoActions";
import { alertHidden, alertShow } from "components/Alert/alertActions";

// component
import Todo from "components/Todo";
import FormTodo from "components/FormTodo";

// ant icon

// ant component
import { Row, Col, Drawer } from "antd";

function Todos() {
  // REF
  const refInitialValuesForm = useRef({
    name: undefined,
    projectId: undefined,
    date: undefined,
    time: undefined,
    day: undefined,
    finished: false,
  });

  // STATE
  const [visible, setVisible] = useState(false);

  // REDUX
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const loading = useSelector((state) => state.button.loading);
  const projects = useSelector((state) => state.project.projects);
  const type = useSelector((state) => state.alert.type);

  // EFFECT
  useEffect(() => {
    dispatch(getTodosStart());
  }, []);
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

  const onUpdate = (todo) => {
    refInitialValuesForm.current = {
      ...todo,
      date: moment(todo.date, "DD/MM/YYYY"),
      time: moment(todo.time, "hh:mm A"),
      image: {
        thumbUrl: todo.image,
      },
    };
    showDrawer();
  };

  const onDelete = (todo) => {
    console.log("delete", todo);
  };

  // create project
  const upadteTodo = (todo) => {
    const idTodo = refInitialValuesForm.current._id;
    const urlOldImage = refInitialValuesForm.current.image;

    const newTodo = {
      ...todo,
      date: moment(todo.date).format("DD/MM/YYYY"),
      time: moment(todo.time).format("hh:mm A"),
      day: moment(todo.date).format("d"),
    };

    const oldTodo = {
      ...refInitialValuesForm.current,
      date: moment(refInitialValuesForm.current.date).format("DD/MM/YYYY"),
      time: moment(refInitialValuesForm.current.time).format("hh:mm A"),
      day: moment(refInitialValuesForm.current.date).format("d"),
    };

    if (newTodo.name === oldTodo.name) {
      delete newTodo.name;
    }
    if (newTodo.date === oldTodo.date) {
      delete newTodo.date;
    }

    if (newTodo.day === oldTodo.day) {
      delete newTodo.day;
    }

    if (newTodo.time === oldTodo.time) {
      delete newTodo.time;
    }

    if (newTodo.projectId === oldTodo.projectId) {
      delete newTodo.projectId;
    }
    if (newTodo.image?.thumbUrl) {
      delete newTodo.image;
    }
    console.log("newTodo", newTodo);
    if (
      newTodo.name === oldTodo.name &&
      newTodo.date === oldTodo.date &&
      newTodo.day === oldTodo.day &&
      newTodo.projectId === oldTodo.projectId &&
      newTodo.time === oldTodo.time &&
      newTodo.image?.thumbUrl
    )
      return;
    console.log("da dispatch");
    dispatch(
      updateTodoStart({ id: idTodo, newTodo, urlOldImage: urlOldImage })
    );
  };

  // onFinishFailed
  const alert = (errorInfo) => {
    const description = errorInfo.errorFields.map((error) => error.errors);
    dispatch(
      alertShow({ type: "error", text: "Error Text", description: description })
    );
  };

  return (
    <div className={styles.todos}>
      <Drawer
        title="Update Todo"
        placement="left"
        onClose={onClose}
        visible={visible}
        width="300"
      >
        <FormTodo
          type="Update"
          initialValues={refInitialValuesForm.current}
          projects={projects}
          alert={alert}
          loading={loading}
          onSubmit={upadteTodo}
        />
      </Drawer>
      <Row>
        {todos.map((todo) => (
          <Col
            key={todo._id}
            className="gutter-row"
            span={6}
            style={{ marginBottom: "20px" }}
          >
            <Todo
              todo={todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
              loading={loading}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Todos;
