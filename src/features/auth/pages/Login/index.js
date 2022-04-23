// style
import styles from "./Login.module.scss";

// redux
import { useSelector, useDispatch } from "react-redux";
//import { loginStart } from "../../authSlice";
import { login } from "features/auth/authActions";

// ant icon
import { UserOutlined, LockOutlined } from "@ant-design/icons";

// ant component
import { Form, Input, Button, Spin } from "antd";

function Login() {
  // REDUX
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state.auth.isFetching);
  const error = useSelector((state) => state.auth.error);

  // METHOD
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  // login
  const handleLogin = (user) => {
    dispatch(login(user));
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
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input placeholder="username" prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder="password" prefix={<LockOutlined />} />
          </Form.Item>

          <Form.Item>
            <Button
              loading={isFetching}
              style={{ width: "100%" }}
              type="primary"
              htmlType="submit"
            >
              Login
            </Button>
          </Form.Item>
          {error && (
            <div className={styles.inCorrectLogin}>
              The username or password is incorrect{" "}
            </div>
          )}
        </Form>
      </div>
    </div>
  );
}

export default Login;
