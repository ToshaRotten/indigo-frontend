import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import { Button, Layout, Typography } from "antd";
import "./about.css";
import { HomeOutlined } from "@ant-design/icons";

export default function About() {
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
            title: "О компании",
            breadcrumbName: "About",
          },
        ]}
      />

      <div className="main">
        <Layout>
          <Typography.Title level={1}>
            Мясо индейки с лучших птицефабрик России
          </Typography.Title>
          <Typography.Paragraph style={{ fontSize: "18px" }}>
            Мы являемся одним из крупнейших сельскохозяйственных предприятей,
            обеспечивающих полный цикл производства продукции из мяса индейки.
          </Typography.Paragraph>
        </Layout>
        <Button type="primary" size="large">
          Связаться с нами
        </Button>
      </div>
      <Footer />
    </>
  );
}
