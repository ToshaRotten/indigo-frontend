import { useState } from "react";
import { Alert, Button, Form, Input, Typography } from "antd";
//import { useNavigate } from "react-router-dom";
import "./registration.css";

export default function Registration() {
  //const push = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const [showAlert, setShowAlert] = useState(false);
  const [errorText, setErrorText] = useState("");

  return (
    <>
      <div className="container">
        <Form layout="vertical" className="form">
          <Typography.Title level={3} className="title">
            Регистрация
          </Typography.Title>

          <Form.Item label={<div className="formItem">Логин</div>}>
            <Input
              autofocus
              placeholder="Логин"
              onChange={(e) => setLogin(e.target.value)}
            />
          </Form.Item>

          <Form.Item label={<div className="formItem">Пароль</div>}>
            <Input
              placeholder="Пароль"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item label={<div className="formItem">Имя</div>}>
            <Input
              placeholder="Имя"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Item>

          <Form.Item label={<div className="formItem">Фамилия</div>}>
            <Input
              placeholder="Фамилия"
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Item>

          <Form.Item label={<div className="formItem">Телефон</div>}>
            <Input
              placeholder="Телефон"
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Item>

          <Button type="default">Зарегистрироваться</Button>
          {showAlert && <Alert type="error" message={errorText} showIcon />}
        </Form>
      </div>
    </>
  );
}
