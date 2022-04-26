// react
import { useState, useEffect } from "react";

// logo
import logo from "images/logo.jpg";

// style
import styles from "./Sidebar.module.scss";

// redux
import { useSelector, useDispatch } from "react-redux";
import { logout } from "features/auth/authActions";
import { getProjectsStart } from "features/project/projectActions";
import { alertHidden } from "components/Alert/alertActions";
// component
import AddTodo from "features/todo/AddTodo";
import Project from "features/project/Projects";
import AddProject from "features/project/AddProject";
import AlertCustom from "components/Alert";

// ant icon
import { CalendarOutlined, ProjectOutlined } from "@ant-design/icons";

// ant component
import { Menu, Avatar } from "antd";

const SubMenu = Menu.SubMenu;
const rootSubmenuKeys = ["sub1", "sub2"];

function Sidebar() {
  // STATE
  const [openKeys, setOpenKeys] = useState(["sub1"]);

  // REDUX
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const projects = useSelector((state) => state.project.projects);
  const type = useSelector((state) => state.alert.type);
  const text = useSelector((state) => state.alert.text);
  const description = useSelector((state) => state.alert.description);

  // EFFECT
  useEffect(() => {
    dispatch(getProjectsStart());
  }, []);
  // METHOD
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  // closeAlertError
  const onCloseError = () => {
    dispatch(alertHidden());
  };
  // logout
  const handleLogOut = () => {
    dispatch(logout());
  };
  return (
    <div className={styles.sidebar}>
      <div className={styles.alertGlobal}>
        <AlertCustom
          type={type}
          text={text}
          description={description}
          onClose={onCloseError}
        />
      </div>
      <div className={styles.logo}>
        <div className={styles.avatar}>
          <Avatar src={logo} style={{ width: 35 }} />
          <div className={styles.username} onClick={handleLogOut}>
            {currentUser?.username}
          </div>
        </div>

        <div className={styles.logout} onClick={handleLogOut}>
          Log Out
        </div>
      </div>

      <AddTodo projects={projects} />

      <Menu
        mode="inline"
        style={{ width: "100%" }}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <CalendarOutlined />
              <span>Calendar</span>
            </span>
          }
        >
          <Menu.Item key="1">Today</Menu.Item>
          <SubMenu key="sub3" title="Next Seven Days">
            <Menu.Item key="2">Monday</Menu.Item>
            <Menu.Item key="3">Tuesday</Menu.Item>
            <Menu.Item key="4">Wednesday</Menu.Item>
            <Menu.Item key="5">Thursday</Menu.Item>
            <Menu.Item key="6">Friday</Menu.Item>
            <Menu.Item key="7">Saturday</Menu.Item>
            <Menu.Item key="8">Sunday</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">All Days</Menu.Item>
        </SubMenu>

        <SubMenu
          key="sub2"
          title={
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <ProjectOutlined />
                <span>Projects</span>
              </div>
              <AddProject />
            </div>
          }
        >
          {projects.map((project) => (
            <Menu.Item key={project._id}>
              <Project project={project} />
            </Menu.Item>
          ))}
        </SubMenu>
      </Menu>
    </div>
  );
}

export default Sidebar;
