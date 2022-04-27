// style
import styles from "./Home.module.scss";

// redux
import { useSelector, useDispatch } from "react-redux";

// component
import Main from "components/Main";
import Sidebar from "features/sidebar/Sidebar";
import AlertCustom from "components/Alert";
// redux
import { alertHidden } from "components/Alert/alertActions";

// ant component
import { Row, Col } from "antd";

function Home() {
  // redux
  const dispatch = useDispatch();
  const type = useSelector((state) => state.alert.type);
  const text = useSelector((state) => state.alert.text);
  const description = useSelector((state) => state.alert.description);
  // method

  // closeAlertError
  const onCloseError = () => {
    dispatch(alertHidden());
  };

  return (
    <div className={styles.home}>
      <div className={styles.alertGlobal}>
        <AlertCustom
          type={type}
          text={text}
          description={description}
          onClose={onCloseError}
        />
      </div>
      <Row>
        <Col span={5} style={{ zIndex: "10" }}>
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
