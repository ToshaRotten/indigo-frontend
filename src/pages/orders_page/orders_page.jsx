import { useMemo, useState } from "react";
import { GetOrderItems } from "../../server_controller/server_controller.js";
import { DatePicker, Flex, Input, Table, Typography } from "antd";
import moment from "moment";

const { Search } = Input;

const OrdersPage = () => {
  const initialOrders = GetOrderItems();
  console.log(initialOrders);
  const [searchText, setSearchText] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const columns = [
    {
      title: "Номер заказа",
      dataIndex: "orderNumber",
      key: "orderNumber",
      sorter: (a, b) => a.orderNumber.localeCompare(b.orderNumber),
      width: "20%",
    },
    {
      title: "Дата доставки",
      dataIndex: "deliveryDate",
      key: "deliveryDate",
      render: (text) => moment(text).format("DD.MM.YYYY"),
      sorter: (a, b) =>
        moment(a.deliveryDate).unix() - moment(b.deliveryDate).unix(),
      width: "20%",
    },
    {
      title: "Имя клиента",
      dataIndex: "customerName",
      key: "customerName",
      width: "30%",
    },
    {
      title: "Статус",
      dataIndex: "status",
      key: "status",
      width: "15%",
    },
  ];

  const filteredOrders = useMemo(() => {
    let filtered = initialOrders;

    if (searchText) {
      filtered = filtered.filter((order) =>
        order.orderNumber.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (selectedDate) {
      const formattedSelectedDate = selectedDate.format("YYYY-MM-DD");
      filtered = filtered.filter(
        (order) => order.deliveryDate === formattedSelectedDate,
      );
    }

    return filtered;
  }, [searchText, selectedDate]);

  return (
    <div style={{ padding: "24px" }}>
      <Typography.Title level={2} style={{ marginBottom: "24px" }}>
        Список заказов
      </Typography.Title>

      <Flex gap="middle" wrap="wrap" style={{ marginBottom: "24px" }}>
        <Search
          placeholder="Поиск по номеру заказа..."
          allowClear
          enterButton="Поиск"
          size="large"
          value={searchText}
          onSearch={setSearchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ maxWidth: 300 }}
        />

        <DatePicker
          placeholder="Выбрать дату доставки"
          size="large"
          format="DD.MM.YYYY"
          value={selectedDate}
          onChange={setSelectedDate}
          allowClear
        />
      </Flex>

      <Table
        columns={columns}
        dataSource={filteredOrders}
        pagination={{ pageSize: 10 }}
        bordered
        scroll={{ x: "max-content" }}
      />
    </div>
  );
};

export default OrdersPage;
