import { memo } from "react";
// style
import styles from "./Main.module.scss";

// component
import Todos from "features/todo/Todos";

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

export default memo(Home);
