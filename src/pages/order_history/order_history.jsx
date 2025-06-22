import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import "./order.history.css";
import { Table } from "antd";
import { HomeOutlined } from "@ant-design/icons";

export default function OrderHistory() {
  const financeProjects = [
    {
      id: 1,
      name: "Инвестиции в стартапы",
      description: "Инвестиции в новые технологические стартапы.",
      budget: 500000,
      status: "Активен",
    },
    {
      id: 2,
      name: "Фонд недвижимости",
      description: "Инвестиции в жилую и коммерческую недвижимость.",
      budget: 2000000,
      status: "Завершен",
    },
    {
      id: 3,
      name: "Криптовалютный фонд",
      description: "Инвестиции в различные криптовалюты.",
      budget: 1000000,
      status: "Активен",
    },
    {
      id: 4,
      name: "Облигационный фонд",
      description: "Инвестиции в государственные и корпоративные облигации.",
      budget: 750000,
      status: "В ожидании",
    },
  ];
  const columns = [
    {
      title: "Название проекта",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Описание",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Бюджет",
      dataIndex: "budget",
      key: "budget",
    },
    {
      title: "Статус",
      dataIndex: "status",
      key: "status",
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
            href: "/authorized/OrderHistory",
            title: "История заказов",
            breadcrumbName: "OrderHistory",
          },
        ]}
      />
      <div className="main">
        <Table dataSource={financeProjects} columns={columns} rowKey="id" />
      </div>
      <Footer />
    </>
  );
}
