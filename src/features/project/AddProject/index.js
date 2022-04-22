// react
import { useState } from "react";

// style
import styles from "./AddProject.module.scss";

// redux
import { useSelector, useDispatch } from "react-redux";
import { createProjectStart } from "../projectSlice";

// component
import FormProject from "components/FormProject";

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
  const isFetching = useSelector((state) => state.project.isFetching);
  const error = useSelector((state) => state.project.error);

  console.log("error", error);

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
        <FormProject onSubmit={createProject} bthLooding={isFetching} />
      </Drawer>
    </div>
  );
}

export default AddProject;
