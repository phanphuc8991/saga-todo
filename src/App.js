import "./App.css";
import { Row, Col } from "antd";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
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

export default App;
