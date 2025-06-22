import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import "./favorite.css";
import { useEffect, useState } from "react";
import React from "react";
import { Alert, Card, Col, Row } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  HeartFilled,
  HomeOutlined,
  SettingOutlined,
} from "@ant-design/icons";

export default function Favorite() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        const headers = {
          "Content-Type": "application/json",
        };

        if (token) {
          headers["Authorization"] = `Bearer ${token}`;
        }

        const config = {
          headers: headers,
        };
        const response = await fetch(
          "http://195.133.1.151:3000/api/favorite_items",
          config,
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
        console.error("Failed to fetch projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
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
            href: "/authorized/favorite",
            title: "Избранное",
            breadcrumbName: "Favorite",
          },
        ]}
      />

      <div className="main"></div>
      <Footer />
    </>
  );
}
