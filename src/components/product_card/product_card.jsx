import React from "react";
import { Button, Card, message } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { ServerImageAddress } from "../../server_controller/server_controller.js";

import { useCart } from "../../server_controller/cart_context.js";

function ProductCard({ product }) {
  const [messageApi, contextHolder] = message.useMessage();
  const { addToCart } = useCart();

  const success = () => {
    console.log("added");
    messageApi.open({
      type: "success",
      content: "Товар успешно добавлен в корзину!",
    });
  };

  const handleAddToCart = () => {
    success();
    addToCart(product);
  };

  const cardActions = [];
  console.log(product);

  cardActions.push(
    <HeartOutlined fill style={{ color: "red" }} key="favorite" />,
    <Button onClick={handleAddToCart} size="small" type="text" shape="circle">
      <ShoppingCartOutlined key="cart" />
    </Button>,
  );

  return (
    <>
      {contextHolder}
      <Card
        title={product.Name}
        // onClick={""}
        cover={
          <img
            alt={product.Name}
            src={ServerImageAddress + "/" + product.Picture}
          />
        }
        variant="borderless"
        actions={cardActions}
        style={{ width: 300, margin: "20px" }}
      >
        <p>{product.Description}</p>
      </Card>
    </>
  );
}

export default ProductCard;
