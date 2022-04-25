// react
import { useState } from "react";

// style
import styles from "./AddProject.module.scss";

// redux
import { useSelector, useDispatch } from "react-redux";
import { addProjectStart } from "features/project/projectActions";
import { alertHidden, alertShow } from "components/Alert/alertActions";

// component
import FormProject from "components/FormProject";
import AlertCustom from "components/Alert";

// ant icon
import { PlusOutlined } from "@ant-design/icons";

// ant component
import { Drawer } from "antd";

function AddProject() {
  // STATE
  const [visible, setVisible] = useState(false);

  // REDUX
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const loading = useSelector((state) => state.button.loading);
  const type = useSelector((state) => state.alert.type);
  const text = useSelector((state) => state.alert.text);
  const description = useSelector((state) => state.alert.description);

  // open drawer
  const showDrawer = () => {
    setVisible(true);
  };

  // close drawer
  const onClose = () => {
    setVisible(false);
    dispatch(alertHidden());
  };

  // create project
  const createProject = (project) => {
    const newProject = {
      userId: currentUser?._id,
      ...project,
    };
    dispatch(addProjectStart(newProject));
  };

  // closeAlertError
  const onCloseError = () => {
    dispatch(alertHidden());
  };

  // onFinishFailed
  const alert = (errorInfo) => {
    const description = errorInfo.errorFields.map((error) => error.errors);
    dispatch(
      alertShow({ type: "error", text: "Error Text", description: description })
    );
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
        width="300"
      >
        <div
          style={{
            position: "fixed",
            top: "15px",
            right: "30px",
            width: "380px",
          }}
        >
          <AlertCustom
            type={type}
            text={text}
            description={description}
            onClose={onCloseError}
          />
        </div>
        <FormProject
          onSubmit={createProject}
          loading={loading}
          alert={alert}
          resetForm={visible}
        />
      </Drawer>
    </div>
  );
}

export default AddProject;
