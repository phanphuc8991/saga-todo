// style
import styles from "./Main.module.scss";

// component
import Todos from "../Todos";

function Main() {
  return (
    <div className={styles.main}>
      <Todos />
    </div>
  );
}

export default Main;
