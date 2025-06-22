import { getServerAddress } from "../../config_context/config_context.js";
import { useNavigate } from "react-router-dom";
import SystemRoute from "../../routes/routes.jsx";

const ServerAuthAddress = getServerAddress() + "/auth/";

const userMock = {
  id: 0,
  first_name: "admin",
  last_name: "admin",
  third_name: "admin",
  email: "test@test.ru",
  age: "0",
  role_id: 1,
};

export function getUser() {
  if (!user) {
    return userMock;
  } else {
    return user;
  }
}

let user = {};
let token;

function getUserRole() {
  if (user.role_id === 1) {
    return "admin";
  }
  if (user.role_id === 2) {
    return "user";
  }
  if (user.role_id === 3) {
    return "storekeeper";
  }
  if (user.role_id === 4) {
    return "manager";
  }
}

function isAdmin() {
  return user.role_id === 1 ? true : false;
}

export async function doAuth(login, password) {
  try {
    const response = await fetch(ServerAuthAddress + "user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ login, password }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({
        message: response.statusText,
      }));
      throw new Error(errorData.message || "Ошибка входа");
    }

    const data = await response.json();

    localStorage.setItem("user", data.userData);
    localStorage.setItem("token", data.token);

    user = data.userData;
    token = data.token;

    return true;
  } catch (error) {
    console.error("Login failed:", error);
    return false;
  }
}

function doRefresh() {}

export function authorizedFetch(url, options) {
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return fetch(url, { ...options, headers });
}

export function Logout() {
  console.log("user logged out");
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  user = null;
  token = null;
}

export function isAuth() {
  return token ? true : false;
}
