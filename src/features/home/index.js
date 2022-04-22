// style
import styles from "./Home.module.scss";
// component
import Main from "components/Main";
import Sidebar from "features/sidebar/Sidebar";

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
