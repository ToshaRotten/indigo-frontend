import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined, HomeOutlined } from "@ant-design/icons";
import { Button, Card, Col, Image, Row, Spin, Typography } from "antd";
import { GetNewsData } from "../../server_controller/server_controller.js";
import { ServerImageAddress } from "../../server_controller/server_controller.js";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const newsItems = GetNewsData();

  const newsItem = newsItems.find((item) => item.id === parseInt(id));

  if (!newsItem) {
    return (
      <Row justify="center" align="middle" style={{ minHeight: "80vh" }}>
        <Col>
          <Spin size="large" tip="Загрузка новости..." />
          <Typography.Title
            level={4}
            style={{ textAlign: "center", marginTop: 20 }}
          >
            Новость не найдена.
          </Typography.Title>
          <Button
            type="primary"
            onClick={() => navigate("/")}
            style={{ marginTop: 20 }}
          >
            <ArrowLeftOutlined /> Вернуться к новостям
          </Button>
        </Col>
      </Row>
    );
  }

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
      <div
        className="news-detail-container main"
        style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}
      >
        <Button
          type="text"
          onClick={() => navigate(-1)}
          style={{ marginBottom: 20, color: "#1890ff" }}
        >
          <ArrowLeftOutlined /> Вернуться к списку новостей
        </Button>
        <Card>
          <Row gutter={[24, 24]}>
            <Col xs={24}>
              <Image
                src={ServerImageAddress + newsItem.image}
                alt={newsItem.title}
                style={{
                  width: "100%",
                  maxHeight: "400px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </Col>
            <Col xs={24}>
              <Typography.Title level={2}>{newsItem.title}</Typography.Title>
              <Typography.Paragraph strong>
                {newsItem.description}
              </Typography.Paragraph>
              <Typography.Paragraph>
                {newsItem.fullContent}
              </Typography.Paragraph>
            </Col>
          </Row>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default NewsDetail;
