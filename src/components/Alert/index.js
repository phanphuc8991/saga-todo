// style
import styles from "./Alert.module.scss";

// ant component
import { Alert } from "antd";
import { CloseOutlined } from "@ant-design/icons";

// default props
AlertCustom.defaultProps = {
  type: "",
  text: "",
  description: "",
  onClose: null,
};

function AlertCustom({ text, type, onClose, description }) {
  const getDescription = () => {
    return (
      <ul style={{ listStyle: "none" }}>
        {typeof description === "string" ? (
          <li key={description}>{description}</li>
        ) : (
          description.map((description) => (
            <li key={description}>{description}</li>
          ))
        )}
      </ul>
    );
  };

  return (
    <>
      {type ? (
        <div className={styles.wrapperAlert}>
          <Alert
            message={text}
            type={type}
            description={getDescription()}
            showIcon
          />
          {onClose ? (
            <div className={styles.close} onClick={onClose}>
              <CloseOutlined />
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}{" "}
    </>
  );
}
export default AlertCustom;
