// react
import { useState } from "react";

// redux
import { useSelector, useDispatch } from "react-redux";
import { updateProjectStart } from "features/project/projectActions";
import { alertHidden, alertShow } from "components/Alert/alertActions";

// style
import styles from "./Projects.module.scss";

// component
import FormProject from "components/FormProject";
import AlertCustom from "components/Alert";

// ant icon
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

// ant component
import { Drawer, Popconfirm, message } from "antd";

// default props
Project.defaultProps = {
  project: {},
};

function Project({ project }) {
  // STATE
  const [visible, setVisible] = useState(false);

  // REDUX
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const loading = useSelector((state) => state.button.loading);
  const type = useSelector((state) => state.alert.type);
  const text = useSelector((state) => state.alert.text);
  const description = useSelector((state) => state.alert.description);
  // METHOD

  // open drawer
  const showDrawer = () => {
    setVisible(true);
  };
  // close drawer
  const onClose = () => {
    setVisible(false);
    dispatch(alertHidden());
  };

  // Popconfirm
  function confirm(e) {
    console.log(e);
    message.success("Click on Yes");
  }

  function cancel(e) {
    console.log(e);
    message.error("Click on No");
  }

  // update project
  const updateProject = (projectForm) => {
    const newProject = {
      userId: currentUser?._id,
      ...projectForm,
    };
    dispatch(updateProjectStart({ id: project._id, newProject }));
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
    <div className={styles.projects}>
      <div className={styles.projectName}>{project?.name}</div>
      <div className={styles.btnUpdateDelete}>
        <div className={styles.btnDelete}>
          {" "}
          <Popconfirm
            title="Are you sure to delete this project?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <DeleteOutlined />
          </Popconfirm>
        </div>

        <div className={styles.btnUpdate} onClick={showDrawer}>
          {" "}
          <EditOutlined />
        </div>
      </div>
      <Drawer
        title="Update Project"
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
          loading={loading}
          alert={alert}
          projectUpdate={project}
          onSubmit={updateProject}
        />
      </Drawer>
    </div>
  );
}

export default Project;
