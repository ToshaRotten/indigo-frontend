import React, { useEffect, useMemo, useState } from "react";
import { Alert, Button, Flex, Select, Spin, Table, Typography } from "antd";
import moment from "moment"; // Для форматирования дат
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [selectedEntity, setSelectedEntity] = useState("users"); // Сущность по умолчанию
  const [entityData, setEntityData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDataFromAPI = async (entityType) => {
    console.log(`Fetching data for: /api/${entityType}`);
    // Имитация задержки сети
    await new Promise((resolve) => setTimeout(resolve, 800));

    // --- Имитация различных данных для разных сущностей ---
    switch (entityType) {
      case "users":
        return [
          {
            id: "u1",
            name: "Иван Петров",
            email: "ivan.p@example.com",
            registeredAt: "2024-01-15T10:00:00Z",
          },
          {
            id: "u2",
            name: "Мария Сидорова",
            email: "maria.s@example.com",
            registeredAt: "2023-11-20T14:30:00Z",
          },
          {
            id: "u3",
            name: "Алексей Козлов",
            email: "alex.k@example.com",
            registeredAt: "2025-02-01T08:00:00Z",
          },
        ];
      case "products":
        return [
          {
            id: "p1",
            name: "Молоко 3.2%",
            price: 120.5,
            stock: 150,
            category: "Молочные продукты",
          },
          {
            id: "p2",
            name: 'Хлеб "Бородинский"',
            price: 65.0,
            stock: 80,
            category: "Выпечка",
          },
          {
            id: "p3",
            name: "Индейка филе",
            price: 450.0,
            stock: 40,
            category: "Мясо",
          },
          {
            id: "p4",
            name: 'Яблоки "Гала"',
            price: 180.0,
            stock: 200,
            category: "Фрукты",
          },
        ];
      case "orders":
        return [
          {
            id: "o1",
            orderNumber: "ORD001",
            customerName: "Иван Петров",
            amount: 1500.0,
            orderDate: "2025-06-18T12:00:00Z",
            status: "Доставлен",
          },
          {
            id: "o2",
            orderNumber: "ORD002",
            customerName: "Мария Сидорова",
            amount: 850.0,
            orderDate: "2025-06-20T10:30:00Z",
            status: "В пути",
          },
          {
            id: "o3",
            orderNumber: "ORD003",
            customerName: "Алексей Козлов",
            amount: 2200.0,
            orderDate: "2025-06-21T16:00:00Z",
            status: "Обработка",
          },
        ];
      default:
        return []; // Возвращаем пустой массив, если сущность не найдена
    }
  };
  const columnsConfig = {
    users: [
      { title: "ID", dataIndex: "id", key: "id", width: 80 },
      {
        title: "Имя",
        dataIndex: "name",
        key: "name",
        sorter: (a, b) => a.name.localeCompare(b.name),
      },
      { title: "Email", dataIndex: "email", key: "email" },
      {
        title: "Дата регистрации",
        dataIndex: "registeredAt",
        key: "registeredAt",
        // render: (text) => moment(text).format("DD.MM.YYYY HH:mm"),
        sorter: (a, b) =>
          moment(a.registeredAt).unix() - moment(b.registeredAt).unix(),
      },
    ],
    products: [
      { title: "ID", dataIndex: "id", key: "id", width: 80 },
      {
        title: "Название",
        dataIndex: "name",
        key: "name",
        sorter: (a, b) => a.name.localeCompare(b.name),
      },
      {
        title: "Цена",
        dataIndex: "price",
        key: "price",
        sorter: (a, b) => a.price - b.price,
        // render: (text) => `${text.toFixed(2)} ₽`,
      },
      {
        title: "На складе",
        dataIndex: "stock",
        key: "stock",
        sorter: (a, b) => a.stock - b.stock,
      },
      { title: "Категория", dataIndex: "category", key: "category" },
    ],
    orders: [
      { title: "ID", dataIndex: "id", key: "id", width: 80 },
      {
        title: "Номер заказа",
        dataIndex: "orderNumber",
        key: "orderNumber",
        sorter: (a, b) => a.orderNumber.localeCompare(b.orderNumber),
      },
      { title: "Клиент", dataIndex: "customerName", key: "customerName" },
      {
        title: "Сумма",
        dataIndex: "amount",
        key: "amount",
        sorter: (a, b) => a.amount - b.amount,
        // render: (text) => `${text.toFixed(2)} ₽`,
      },
      {
        title: "Дата заказа",
        dataIndex: "orderDate",
        key: "orderDate",
        render: (text) => moment(text).format("DD.MM.YYYY HH:mm"),
        sorter: (a, b) =>
          moment(a.orderDate).unix() - moment(b.orderDate).unix(),
      },
      { title: "Статус", dataIndex: "status", key: "status" },
    ],
  };

  const { Option } = Select;
  const { Title } = Typography;

  useEffect(() => {
    const loadEntityData = async () => {
      setLoading(true);
      setError(null); // Сброс ошибки при новой загрузке
      setEntityData([]); // Очистка предыдущих данных

      try {
        const data = await fetchDataFromAPI(selectedEntity); // Ваша реальная функция API
        if (Array.isArray(data)) {
          // Присваиваем 'key' каждому элементу, если его нет (требование Ant Design Table)
          const dataWithKeys = data.map((item, index) => ({
            ...item,
            key: item.id || index.toString(), // Используем item.id, если есть, иначе index
          }));
          setEntityData(dataWithKeys);
        } else {
          console.error(
            "API did not return an array for entity:",
            selectedEntity,
            data,
          );
          setError(new Error("Полученные данные не являются массивом."));
        }
      } catch (err) {
        console.error("Error fetching entity data:", err);
        setError(
          new Error(
            `Ошибка загрузки данных: ${err.message || "Неизвестная ошибка"}`,
          ),
        );
      } finally {
        setLoading(false);
      }
    };

    loadEntityData();
  }, [selectedEntity]); // Зависимость: эффект запускается при изменении selectedEntity

  // Выбираем колонки на основе selectedEntity
  const columns = useMemo(() => {
    return columnsConfig[selectedEntity] || [];
  }, [selectedEntity]);

  return (
    <div style={{ padding: "24px" }}>
      <Button
        type="text"
        onClick={() => navigate(-1)}
        style={{ marginBottom: 20, color: "#1890ff" }}
      >
        <ArrowLeftOutlined /> Выход из панели администратора
      </Button>
      <Title level={2} style={{ marginBottom: "24px" }}>
        Панель администратора
      </Title>

      <Flex align="center" gap="middle" style={{ marginBottom: "24px" }}>
        <Typography.Text strong>Выберите сущность:</Typography.Text>
        <Select
          defaultValue={selectedEntity}
          style={{ width: 200 }}
          onChange={(value) => setSelectedEntity(value)}
          size="large"
        >
          <Option value="users">Пользователи</Option>
          <Option value="products">Продукты</Option>
          <Option value="orders">Заказы</Option>
          {/* Добавьте другие сущности по мере необходимости */}
        </Select>
      </Flex>

      <div style={{ position: "relative", minHeight: "300px" }}>
        {" "}
        {/* Для Spin */}
        {loading && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              zIndex: 10,
            }}
          >
            <Spin size="large" tip="Загрузка данных..." />
          </div>
        )}
        {error && (
          <Alert
            message="Ошибка"
            description={error.message}
            type="error"
            showIcon
            style={{ marginBottom: "20px" }}
          />
        )}
        {!loading && !error && entityData.length === 0 && (
          <Alert
            message="Данные не найдены"
            description="По выбранной сущности нет записей или произошла ошибка."
            type="info"
            showIcon
            style={{ marginBottom: "20px" }}
          />
        )}
        {/* Таблица будет отображаться только когда нет ошибок и есть данные или загрузка завершена */}
        {!loading && !error && (
          <Table
            columns={columns}
            dataSource={entityData}
            pagination={{ pageSize: 10 }}
            bordered
            scroll={{ x: "max-content" }}
            // Добавляем пустой массив данных, если entityData пуст, чтобы таблица не ругалась
            // и отображала "No Data" сообщение Ant Design
            locale={{ emptyText: "Нет данных для отображения" }}
          />
        )}
      </div>
    </div>
  );
}
