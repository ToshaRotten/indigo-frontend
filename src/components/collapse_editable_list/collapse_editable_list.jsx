import { Button, Collapse, InputNumber, Space, Typography } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const { Panel } = Collapse;
const { Text } = Typography;

const CollapseEditableList = ({ items, onItemsChange, onRemoveItem }) => {
	const handleInputChange = (key, field, value) => {
		const newItems = items.map((item) =>
			item.key === key ? { ...item, [field]: value } : item,
		);
		onItemsChange(newItems);
	};

	return (
		<Collapse accordion>
			{items.map((item) => (
				<Panel
					header={<Text strong>{item.name || "Новый элемент"}</Text>}
					key={item.key}
					extra={
						<Space onClick={(e) => e.stopPropagation()}>
							{" "}
							<Button
								type="text"
								icon={<DeleteOutlined />}
								onClick={() => onRemoveItem(item.key)}
								danger
							>
								Удалить
							</Button>
						</Space>
					}
				>
					<Space direction="horizontal" style={{ width: "100%" }}>
						<h4>Название: {item.name}</h4>
						<InputNumber
							placeholder="Количество"
							min={0}
							value={item.quantity}
							onChange={(value) =>
								handleInputChange(item.key, "quantity", value ?? 0)
							}
						/>
						<InputNumber
							placeholder="Цена"
							disabled={true}
							min={0}
							value={item.price}
							formatter={(value) =>
								`${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " ₽"
							}
							parser={(value) => value.replace(/\ ₽\s?|(,*)/g, "")}
							onChange={(value) =>
								handleInputChange(item.key, "price", value ?? 0)
							}
						/>
					</Space>
				</Panel>
			))}
		</Collapse>
	);
};

export default CollapseEditableList;
