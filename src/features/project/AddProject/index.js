// react
import { useState } from "react";

// style
import styles from "./AddProject.module.scss";

// redux
import { useSelector, useDispatch } from "react-redux";
import { createProjectStart } from "../projectSlice";

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
  const loading = useSelector((state) => state.project.isFetching);
  console.log("loading", loading);
  // METHOD

  // open drawer
  const showDrawer = () => {
    setVisible(true);
  };

  // close drawer
  const onClose = () => {
    setVisible(false);
  };

  // create project
  const createProject = (project) => {
    const newProject = {
      userId: currentUser?._id,
      ...project,
    };
    dispatch(createProjectStart(newProject));
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
        <div style={{ position: "fixed", top: "15px", left: "50%" }}>
          <AlertCustom />
        </div>
        <FormProject onSubmit={createProject} bthLoading={loading} />
      </Drawer>
    </div>
  );
}

export default AddProject;
