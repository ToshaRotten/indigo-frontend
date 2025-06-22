import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import { Button, Card, Col, Row, Typography } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import {
  GetNewsData,
  ServerImageAddress,
} from "../../server_controller/server_controller.js";

const { Meta } = Card;

export default function News() {
  const newsItems = GetNewsData();
  console.log(ServerImageAddress);

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
            href: "/authorized/news",
            title: "Новости",
            breadcrumbName: "News",
          },
        ]}
      />

      <div className="main">
        <Typography.Title level={2} className="news-cards-antd-heading">
          Последние новости
        </Typography.Title>
        <Row gutter={[16, 16]} justify="center">
          {newsItems.map((item) => (
            <Col key={item.id} xs={24} sm={24} md={8} lg={8} xl={8}>
              <Card
                hoverable
                cover={
                  <img
                    alt={item.title}
                    src={ServerImageAddress + item.image}
                    className="news-card-image"
                  />
                }
                onClick={() => (window.location.href = item.link)}
                className="news-card"
              >
                <Meta title={item.title} description={item.description} />
                <br />
                <Button
                  type="primary"
                  href={"/authorized/news/" + item.id}
                  className="news-card-link"
                >
                  Читать далее
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <Footer />
    </>
  );
}
