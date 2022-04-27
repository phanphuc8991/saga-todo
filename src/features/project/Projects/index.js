// react
import { useState, useEffect } from "react";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  updateProjectStart,
  deleteProjectStart,
} from "features/project/projectActions";
import { alertHidden, alertShow } from "components/Alert/alertActions";

// style
import styles from "./Projects.module.scss";

// component
import FormProject from "components/FormProject";

// ant icon
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

// ant component
import { Drawer, Popconfirm } from "antd";

// default props
Project.defaultProps = {
  project: {},
};

function Project({ project }) {
  // STATE
  const [visibleDrawer, setvisibleDrawer] = useState(false);
  const [visiblePopconfirm, setVisiblePopconfirm] = useState(false);

  // REDUX
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const loading = useSelector((state) => state.button.loading);
  const type = useSelector((state) => state.alert.type);

  // EFFECT
  useEffect(() => {
    if (type === "success") {
      setvisibleDrawer(false);
    }
  });
  // METHOD

  // open drawer
  const showDrawer = () => {
    setvisibleDrawer(true);
  };
  // close drawer
  const onClose = () => {
    if (!loading) {
      setvisibleDrawer(false);
    }
  };

  // deleteProject
  const deleteProject = () => {
    console.log("deleteProjectStart");
    dispatch(deleteProjectStart({ id: project._id }));
  };

  // update project
  const updateProject = (projectForm) => {
    const newProject = {
      userId: currentUser?._id,
      ...projectForm,
    };
    dispatch(updateProjectStart({ id: project._id, newProject }));
  };

  // onFinishFailed
  const alert = (errorInfo) => {
    const description = errorInfo.errorFields.map((error) => error.errors);
    dispatch(
      alertShow({ type: "error", text: "Error Text", description: description })
    );
  };
  // showPopconfirm
  const showPopconfirm = () => {
    setVisiblePopconfirm(true);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisiblePopconfirm(false);
  };

  return (
    <div className={styles.projects}>
      <div className={styles.projectName}>{project?.name}</div>
      <div className={styles.btnUpdateDelete}>
        <div className={styles.btnDelete}>
          {" "}
          <Popconfirm
            title="Are you sure to delete this project?"
            onConfirm={deleteProject}
            visible={visiblePopconfirm}
            okButtonProps={{ loading: loading }}
            onCancel={handleCancel}
            cancelText="Cancel"
            okText="Yes"
          >
            <DeleteOutlined onClick={showPopconfirm} />
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
        visible={visibleDrawer}
        width="300"
      >
        <FormProject
          loading={loading}
          alert={alert}
          project={project}
          onSubmit={updateProject}
          resetForm={visibleDrawer}
        />
      </Drawer>
    </div>
  );
}

export default Project;
