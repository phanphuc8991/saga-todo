// redux
import { useSelector } from "react-redux";

// ant component
import { Button } from "antd";

// default props
ButtonCustom.defaultProps = {
  loading: false,
  text: "submit",
};

function ButtonCustom({ loading, text }) {
  return (
    <div>
      <Button
        style={{ width: "100%" }}
        type="primary"
        htmlType="submit"
        loading={loading}
      >
        {text}
      </Button>
    </div>
  );
}
export default ButtonCustom;
