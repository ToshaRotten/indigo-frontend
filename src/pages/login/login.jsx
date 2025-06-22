import { useEffect, useState } from "react";
import { Alert, Button, Flex, Form, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import SystemRoute from "../../routes/routes.jsx";
import "./login.css";
import { doAuth } from "../../server_controller/auth/auth.js";

export default function Login() {
  const push = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showAlert, setShowAlert] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [loading, setLoading] = useState(false);

  const registrationButtonHandler = () => {
    push(SystemRoute.registration());
  };

  const HandleLogin = () => {
    setLoading(true);
    setShowAlert(false);
    setErrorText("");

    if (!username) {
      setErrorText('Поле "Логин" не заполнено');
      setShowAlert(true);
      return;
    }

    if (!password) {
      setErrorText('Поле "Пароль" не заполнено');
      setShowAlert(true);
      return;
    }

    if (doAuth(username, password)) {
      setLoading(false);
      setTimeout(5000);
      push(SystemRoute.privateRoute());
    }
  };

  return (
    <>
      <div className="container">
        <Form layout="vertical" className="form">
          <Typography.Title level={3} className="title">
            Вход
          </Typography.Title>
          <Form.Item label={<div className="formItem">Логин</div>}>
            <Input
              autofocus
              placeholder="Логин"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Item>
          <Form.Item label={<div className="formItem">Пароль</div>}>
            <Input
              placeholder="Пароль"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <Flex align="center" justify="space-evenly">
            <Button type="primary" htmlType="submit" onClick={HandleLogin}>
              {loading ? "Вход..." : "Войти"}
            </Button>

            <Button
              type="default"
              htmlType="submit"
              onClick={registrationButtonHandler}
            >
              Зарегистрироваться
            </Button>
          </Flex>

          {showAlert && <Alert type="error" message={errorText} showIcon />}
        </Form>
      </div>
    </>
  );
}
