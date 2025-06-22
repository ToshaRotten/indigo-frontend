import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import Map from "../../components/map/map.jsx";
import { HomeOutlined } from "@ant-design/icons";

export default function WhereToBy() {
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
            href: "/authorized/where_to_by",
            title: "Где купить",
            breadcrumbName: "WhereToBy",
          },
        ]}
      />

      <div className="main">
        <Map latitude={54.92500197268563} longitude={73.55225776457942} />
      </div>

      <Footer />
    </>
  );
}
