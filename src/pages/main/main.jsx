import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import "./main.css";
import React from "react";
import { Image, Splitter } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import mainPageBackground from "./main_page_background.png";

export default function Main() {
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
						title: "Главная",
						breadcrumbName: "Main",
					},
				]}
			/>

			<div className="main">
				<Image
					preview={false}
					src={mainPageBackground}
					width="1200px"
					height="800px"
				/>
				<Splitter>
					<Splitter.Panel
						className="first-panel"
						defaultSize="40%"
						resizable={false}
					>
					</Splitter.Panel>
					<Splitter.Panel
						className="second-panel"
						defaultSize="60%"
						resizable={false}
					>
					</Splitter.Panel>
				</Splitter>
			</div>
			<Footer />
		</>
	);
}
