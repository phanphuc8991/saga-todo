// redux
import { useSelector } from "react-redux";

// ant component
import { Alert } from "antd";

function AlertCustom() {
  const alertName = useSelector((state) => state.alert.alertName);

  return (
    <div>
      {alertName === "success" && (
        <Alert message="success" type="success" showIcon />
      )}

      {alertName === "error" && <Alert message="Error" type="error" showIcon />}
    </div>
  );
}
export default AlertCustom;
