// redux
import { useSelector } from "react-redux";

// ant component
import { Button } from "antd";

// default props
ButtonCustom.defaultProps = {
  loading: false,
};

function ButtonCustom({ loading }) {
  return (
    <div>
      <Button
        style={{ width: "100%" }}
        type="primary"
        htmlType="submit"
        loading={loading}
      >
        Submit
      </Button>
    </div>
  );
}
export default ButtonCustom;
