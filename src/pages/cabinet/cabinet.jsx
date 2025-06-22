import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import "./cabinet.css";
import { getUser } from "../../server_controller/auth/auth.js";
import { Button, Card, Descriptions, Typography } from "antd";
import { HomeOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import SystemRoute from "../../routes/routes.jsx";
import { useNavigate } from "react-router-dom";

export default function Cabinet() {
  const navigate = useNavigate();

  const user = getUser();

  let userRole;

  if (user.category_id === 1) {
    userRole = "Администратор";
  }
  if (user.category_id === 2) {
    userRole = "Пользователь";
  }
  if (user.category_id === 3) {
    userRole = "Кладовщик";
  }
  if (user.category_id === 4) {
    userRole = "Менеджер";
  }

  const logoutButtonHandler = () => {
    navigate(SystemRoute.root);
  };

  return (
    <>
      <Header
        breadcrumbItems={[
          {
            href: "/authorized",
            title: <HomeOutlined />,
            breadcrumbName: "Home",
          },
          {
            href: "/authorized/about",
            title: "Личный кабинет",
            breadcrumbName: "Cabinet",
          },
        ]}
      />
      <div className="main">
        <Card
          title={
            <Typography.Title level={3} style={{ textAlign: "center" }}>
              Личный кабинет <UserOutlined />
            </Typography.Title>
          }
          style={{
            maxWidth: 700,
            margin: "50px auto",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          }}
          extra={
            <Button
              type="primary"
              danger
              onClick={logoutButtonHandler}
              icon={<LogoutOutlined />}
            >
              Выйти
            </Button>
          }
        >
          <Descriptions
            bordered
            column={{ xxl: 2, xl: 2, lg: 2, md: 1, sm: 1, xs: 1 }}
          >
            <Descriptions.Item label="Имя пользователя">
              {user.username}
            </Descriptions.Item>
            <Descriptions.Item label="Электронная почта">
              {user.email}
            </Descriptions.Item>
            <Descriptions.Item label="Имя">{user.first_name}</Descriptions.Item>
            <Descriptions.Item label="Фамилия">
              {user.last_name}
            </Descriptions.Item>
            {user.thirdName && (
              <Descriptions.Item label="Отчество">
                {user.thirdName}
              </Descriptions.Item>
            )}
            {user.age && (
              <Descriptions.Item label="Возраст">{user.age}</Descriptions.Item>
            )}
            <Descriptions.Item label="Роль">{userRole}</Descriptions.Item>
          </Descriptions>
        </Card>
      </div>
      <Footer />
    </>
  );
}
