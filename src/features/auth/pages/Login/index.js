// style
import styles from "./Login.module.scss";

// redux
import { useSelector, useDispatch } from "react-redux";
import { loginStart } from "../../authSlice";

// ant icon
import { UserOutlined, LockOutlined } from "@ant-design/icons";

// ant component
import { Form, Input, Button } from "antd";

function Login() {
  // REDUX
  const dispatch = useDispatch();
  const currrentUser = useSelector((state) => state.auth);
  console.log("currrentUser", currrentUser);
  // METHOD
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  // login
  const handleLogin = (user) => {
    console.log("handleLogin");
    dispatch(loginStart(user));
  };
  return (
    <div className={styles.login}>
      <div className={styles.wrapperLogin}>
        <div className={styles.textLogin}>Login</div>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={handleLogin}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            // rules={[
            //   {
            //     required: true,
            //     message: "Please input your username!",
            //   },
            // ]}
          >
            <Input placeholder="username" prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item
            name="password"
            // rules={[
            //   {
            //     required: true,
            //     message: "Please input your password!",
            //   },
            // ]}
          >
            <Input.Password placeholder="username" prefix={<LockOutlined />} />
          </Form.Item>

          <Form.Item>
            <Button style={{ width: "100%" }} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
