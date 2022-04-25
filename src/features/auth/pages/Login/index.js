// style
import styles from "./Login.module.scss";

// redux
import { useSelector, useDispatch } from "react-redux";
import { alertShow, alertHidden } from "components/Alert/alertActions";
import { loginStart } from "features/auth/authActions";
// components
import ButtonCustom from "components/Button";
import AlertCustom from "components/Alert";
// ant icon
import { UserOutlined, LockOutlined } from "@ant-design/icons";

// ant component
import { Form, Input } from "antd";

function Login() {
  // REDUX
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.button.loading);
  const type = useSelector((state) => state.alert.type);
  const text = useSelector((state) => state.alert.text);
  const description = useSelector((state) => state.alert.description);

  // METHOD
  const onFinishFailed = (errorInfo) => {
    const description = errorInfo.errorFields.map((error) => error.errors);
    dispatch(
      alertShow({ type: "error", text: "Error Text", description: description })
    );
  };
  // login
  const handleLogin = (user) => {
    dispatch(loginStart(user));
  };
  // closeAlertError
  const onCloseError = () => {
    dispatch(alertHidden());
  };

  return (
    <div className={styles.login}>
      <div className={styles.wrapperLogin}>
        <div className={styles.alert}>
          <AlertCustom
            type={type}
            text={text}
            description={description}
            onClose={onCloseError}
          />
        </div>

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
            <ButtonCustom loading={loading} />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
