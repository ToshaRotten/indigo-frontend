import React from "react";
import { useEffect } from "react";
import { Button } from "antd";
import {
  BookOutlined,
  HeartOutlined,
  LogoutOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./navbar.css";
import { useNavigate } from "react-router";
import SystemRoute from "../../routes/routes.jsx";
import { getUser, Logout } from "../../server_controller/auth/auth.js";

export default function Navbar() {
  const user = getUser();
  const navigate = useNavigate();

  const cabinetButtonHandler = () => {
    navigate(SystemRoute.privateRoute() + SystemRoute.cabinet());
  };

  const directoryButtonHandler = () => {
    navigate(SystemRoute.privateRoute() + SystemRoute.directory());
  };

  const aboutButtonHandler = () => {
    navigate(SystemRoute.privateRoute() + SystemRoute.about());
  };

  const contactsButtonHandler = () => {
    navigate(SystemRoute.privateRoute() + SystemRoute.contacts());
  };

  const productsButtonHandler = () => {
    navigate(SystemRoute.privateRoute() + SystemRoute.products());
  };

  const favoriteButtonHandler = () => {
    navigate(SystemRoute.privateRoute() + SystemRoute.favorite());
  };

  const cartButtonHandler = () => {
    navigate(SystemRoute.privateRoute() + SystemRoute.cart());
  };

  const recipesButtonHandler = () => {
    navigate(SystemRoute.privateRoute() + SystemRoute.recipes());
  };

  const whereToByButtonHandler = () => {
    navigate(SystemRoute.privateRoute() + SystemRoute.whereToBy());
  };

  const newsButtonHandler = () => {
    navigate(SystemRoute.privateRoute() + SystemRoute.news());
  };

  const logoutButtonHandler = () => {
    navigate(SystemRoute.root());
    Logout();
  };

  useEffect(() => {
    if (Object.keys(user).length === 0) {
      navigate(SystemRoute.root());
    }
  }, [user, navigate]);

  return (
    <>
      <div className="navbar">
        <div className="nav">
          <Button type="text" size="large" onClick={aboutButtonHandler}>
            О компании
          </Button>
          <Button type="text" size="large" onClick={productsButtonHandler}>
            Продукты
          </Button>
          <Button type="text" size="large" onClick={whereToByButtonHandler}>
            Где купить
          </Button>
          <Button type="text" size="large" onClick={recipesButtonHandler}>
            Рецепты
          </Button>
          <Button type="text" size="large" onClick={newsButtonHandler}>
            Новости
          </Button>
        </div>
        <div className="buttons">
          <Button
            type="primary"
            htmlType="button"
            onClick={contactsButtonHandler}
          >
            Контакты
          </Button>
        </div>
        <div className="icons">
          {user.category_id === 1
            ? (
              <Button
                type="default"
                shape="circle"
                size="large"
                onClick={directoryButtonHandler}
              >
                <BookOutlined />
              </Button>
            )
            : (
              ""
            )}
          <Button
            type="default"
            shape="circle"
            size="large"
            onClick={favoriteButtonHandler}
          >
            <HeartOutlined />
          </Button>
          <Button
            type="default"
            shape="circle"
            size="large"
            onClick={cartButtonHandler}
          >
            <ShoppingCartOutlined />
          </Button>
          <Button type="default" shape="circle" size="large">
            <SearchOutlined />
          </Button>
          <Button
            type="primary"
            shape="circle"
            size="large"
            onClick={cabinetButtonHandler}
          >
            <UserOutlined />
          </Button>
          <Button
            shape="circle"
            size="large"
            onClick={logoutButtonHandler}
            danger
          >
            <LogoutOutlined />
          </Button>
        </div>
      </div>
    </>
  );
}
