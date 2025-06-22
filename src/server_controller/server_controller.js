import { data } from "react-router-dom";
import { getServerAddress } from "../config_context/config_context.js";
import { authorizedFetch } from "./auth/auth.js";

export const ServerBaseAddress = getServerAddress();
export const ServerImageAddress = getServerAddress() + "/images";

function GetUserByID(userId) {
  fetch(ServerBaseAddress + `/api/user/${userId}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
  return data;
}
//
// function CreateCartItem(userID, productID) {
//   fetch(ServerBaseAddress + `/api/cart_item`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ userId, productId }),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     });
// }

function GetCartItems() {
  const userId = 1;
  fetch(ServerBaseAddress + `/api/cart_item?userId=${userId}`)
    .then((response) => response.json())
    .then((data) => {
      // Handle cart items
      console.log(data);
    });
  return data.items; // Return cart items
}

function GetProductCatgories() {
  fetch(ServerBaseAddress + "/api/product_categories")
    .then((response) => response.json())
    .then((data) => {
      // Handle product categories
      console.log(data);
    });
  return data.categories;
}

export function GetProducts() {
  return authorizedFetch(ServerBaseAddress + "/api/products")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Полученные данные:", data);
      return data;
    })
    .catch((error) => {
      console.error("Ошибка при получении продуктов:", error);
      return [];
    });
}

export function GetUsers() {
  return authorizedFetch(ServerBaseAddress + "/api/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Полученные данные:", data);
      return data;
    })
    .catch((error) => {
      console.error("Ошибка при получении пользователей:", error);
      return [];
    });
}

export const GetNewsData = () => {
  const newsItems = [
    {
      id: 1,
      image: "expandedFactory.png",
      title: "Расширяем наши фермы для увеличения поставок!",
      description:
        "Мы с гордостью объявляем о значительном расширении наших фермерских мощностей, что позволит нам удовлетворить растущий спрос на высококачественное мясо индейки.",
      link: "#",
    },
    {
      id: 2,
      image: "newProducts.png",
      title: "Представляем новую линейку продуктов из индейки!",
      description:
        "Откройте для себя наши инновационные продукты: нежные котлеты из индейки и сочные колбаски, разработанные для вашего удобства и наслаждения.",
      link: "#",
    },
    {
      id: 3,
      image: "ecology.png",
      title: "Наше стремление к устойчивому развитию",
      description:
        "Узнайте, как мы внедряем передовые практики для обеспечения экологической устойчивости и благополучия наших птиц на всех этапах производства.",
      link: "#",
    },
  ];
  return newsItems;
};

export const GetOrderItems = () => {
  const initialOrders = [
    {
      key: "1",
      orderNumber: "ORD001",
      deliveryDate: "2025-07-10",
      customerName: "Иванов Иван",
      status: "В пути",
    },
    {
      key: "2",
      orderNumber: "ORD002",
      deliveryDate: "2025-07-05",
      customerName: "Петрова Анна",
      status: "Доставлен",
    },
    {
      key: "3",
      orderNumber: "ORD003",
      deliveryDate: "2025-07-15",
      customerName: "Сидоров Олег",
      status: "Обработка",
    },
    {
      key: "4",
      orderNumber: "ORD004",
      deliveryDate: "2025-07-12",
      customerName: "Кузнецова Мария",
      status: "В пути",
    },
    {
      key: "5",
      orderNumber: "ORD005",
      deliveryDate: "2025-07-20",
      customerName: "Смирнов Дмитрий",
      status: "Новый",
    },
    {
      key: "6",
      orderNumber: "ORD010",
      deliveryDate: "2025-06-25",
      customerName: "Федорова Елена",
      status: "Отменен",
    },
  ];
  return initialOrders;
};

function CreateOrder() {
  const userId = 1;
  const cartItems = GetCartItems();
  fetch(ServerBaseAddress + `/api/order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, cartItems }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle order creation
      console.log(data);
    });
}

// function GetOrderItems() {
//   const orderId = 1;
//   fetch(ServerBaseAddress + `/api/order_item?orderId=${orderId}`)
//     .then((response) => response.json())
//     .then((data) => {
//       // Handle order items
//       console.log(data);
//     });
//   return data.items; // Return order items
// }
