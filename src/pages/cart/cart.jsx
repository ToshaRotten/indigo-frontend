import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import "./cart.css";
import { HomeOutlined } from "@ant-design/icons";
import {
  Alert,
  Button,
  InputNumber,
  message,
  Popconfirm,
  Space,
  Table,
  Typography,
} from "antd";
import { useCart } from "../../server_controller/cart_context.js";

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, clearCart, totalAmount } =
    useCart();

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      message("Ваша корзина пуста!");
      return;
    }
    console.log("Оформление заказа:", cartItems);
    message(`Заказ на сумму ${totalAmount.toFixed(2)} ₽ оформлен!`);
    clearCart();
  };
  const columns = [
    {
      title: "Название товара",
      dataIndex: "Name",
      key: "Name",
    },
    {
      title: "Цена за ед.",
      dataIndex: "price",
      key: "price",
      // render: (text) => `${text.toFixed(2)} ₽`,
    },
    {
      title: "Количество",
      dataIndex: "quantity",
      key: "quantity",
      render: (quantity, record) => (
        <InputNumber
          min={1}
          value={quantity}
          onChange={(value) => updateQuantity(record.id, value)}
          style={{ width: 90 }}
        />
      ),
    },
    {
      title: "Сумма",
      key: "subtotal",
      // render: (_text, record) =>
      //   (record.price * record.quantity).toFixed(2) + " ₽",
    },
    {
      title: "Действия",
      key: "actions",
      // render: (_text, record) => (
      //   <Popconfirm
      //     title="Вы уверены, что хотите удалить товар?"
      //     onConfirm={() => removeFromCart(record.id)}
      //     okText="Да"
      //     cancelText="Нет"
      //   >
      //     <Button danger icon={<DeleteOutlined />}>
      //       Удалить
      //     </Button>
      //   </Popconfirm>
      // ),
    },
  ];

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
            href: "/authorized/cart",
            title: "Корзина",
            breadcrumbName: "Cart",
          },
        ]}
      />

      <div className="main">
        <div style={{ padding: "24px" }}>
          <Typography.Title level={2} style={{ marginBottom: "24px" }}>
            Ваша корзина
          </Typography.Title>

          {cartItems.length === 0
            ? (
              <Alert
                message="Ваша корзина пуста!"
                description="Добавьте товары из магазина, чтобы оформить заказ."
                type="info"
                showIcon
              />
            )
            : (
              <>
                <Table
                  columns={columns}
                  dataSource={cartItems}
                  pagination={false} // Отключаем пагинацию, так как это корзина
                  rowKey="id" // Указываем, что id товара является уникальным ключом строки
                  bordered
                  scroll={{ x: "max-content" }}
                  style={{ marginBottom: "20px" }}
                />

                <Space
                  size="large"
                  style={{ justifyContent: "space-between", width: "100%" }}
                >
                  <Typography.Title level={3}>
                    Итого: {totalAmount.toFixed(2)} ₽
                  </Typography.Title>
                  <Space>
                    <Button
                      onClick={clearCart}
                      danger
                      disabled={cartItems.length === 0}
                    >
                      Очистить корзину
                    </Button>
                    <Button
                      type="primary"
                      size="large"
                      onClick={handleCheckout}
                      disabled={cartItems.length === 0}
                    >
                      Оформить заказ
                    </Button>
                  </Space>
                </Space>
              </>
            )}
        </div>
        {" "}
      </div>
      <Footer />
    </>
  );
}
