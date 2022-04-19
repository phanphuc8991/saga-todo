// react
import { useState } from "react";

// component
import AddTodo from "../AddTodo";
import Project from "../Project";
import AddProject from "../AddProject";
// style
import styles from "./Sidebar.module.scss";

// logo
import logo from "../../images/logo.jpg";

// ant icon
import {
  CalendarOutlined,
  ProjectOutlined,
  PlusOutlined,
} from "@ant-design/icons";

// ant component
import { Menu, Avatar, Image, Button } from "antd";

const SubMenu = Menu.SubMenu;
const rootSubmenuKeys = ["sub1", "sub2"];

function Sidebar() {
  // STATE
  const [openKeys, setOpenKeys] = useState(["sub1"]);

  // METHOD
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.avatar}>
          <Avatar src={logo} style={{ width: 35 }} />
        </div>
        <div className={styles.logout}>Log Out</div>
      </div>

      <AddTodo />

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
          <Menu.Item key="30">
            <Project />
          </Menu.Item>
          <Menu.Item key="40">
            {" "}
            <Project />
          </Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default Sidebar;
