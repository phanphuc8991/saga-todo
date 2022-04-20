// style
import styles from "./Main.module.scss";

// react router
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

// component
import Main from "../../components/Main";
import Sidebar from "../../components/Sidebar";

// ant component
import { Row, Col } from "antd";

function Home() {
  return (
    <div className={styles.home}>
      <Row>
        <Col span={5}>
          <Sidebar />
        </Col>
        <Col span={19}>
          <Main />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
