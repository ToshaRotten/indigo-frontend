import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import ProductCard from "../../components/product_card/product_card.jsx";
import { useEffect, useState } from "react";
import { Alert } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { GetProducts } from "../../server_controller/server_controller.js";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    GetProducts().then((products) => {
      if (Array.isArray(products)) {
        setProducts(products);
      }
    });
  }, []);

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
            href: "/authorized/products",
            title: "Продукты",
            breadcrumbName: "Products",
          },
        ]}
      />

      <div className="main">
        <div className="cards">
          <div className="cards">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                padding: "20px",
              }}
            >
              {products.length === 0
                ? (
                  <Alert
                    message="Нет продуктов"
                    description="Не удалось получить список продуктов"
                    type="info"
                    showIcon
                  />
                )
                : (
                  products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))
                )}
            </div>
            {" "}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
