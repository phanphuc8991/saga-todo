// style
import styles from "./Main.module.scss";

// component
import Todos from "../Todos";

// ant component
import { Pagination } from "antd";
function Home() {
  return (
    
    <div className={styles.main}>
      <Todos />
      <div className={styles.pagination}>
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  );
}

export default Home;
