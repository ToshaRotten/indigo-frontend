import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import Map from "../../components/map/map.jsx";
import { Card, Typography } from "antd";
import "./contacts.css";
import { HomeOutlined } from "@ant-design/icons";

export default function Contacts() {
  const companyInfo = {
    name: 'ООО "Инди"',
    address: "Омская область, с. Морозовка, ул. Юбилейная, д. 1",
    phone: "+7 (913) 456-7890",
    email: "contact@indi.ru",
  };
  // 54.92500197268563, 73.55225776457942
  const companyLatitude = 54.92500197268563;
  const companyLongitude = 73.55225776457942;

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
            href: "/authorized/contacts",
            title: "Контакты",
            breadcrumbName: "Contacts",
          },
        ]}
      />

      <div className="main">
        <Map latitude={companyLatitude} longitude={companyLongitude} />

        <Card className="card">
          <Typography level={4}>{companyInfo.name}</Typography>
          <Typography.Paragraph>
            <strong>Адрес:</strong> {companyInfo.address}
          </Typography.Paragraph>
          <Typography.Paragraph>
            <strong>Телефон:</strong> {companyInfo.phone}
          </Typography.Paragraph>
          <Typography.Paragraph>
            <strong>Email:</strong> {companyInfo.email}
          </Typography.Paragraph>
        </Card>
      </div>

      <Footer />
    </>
  );
}
