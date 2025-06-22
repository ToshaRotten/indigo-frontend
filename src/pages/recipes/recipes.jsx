import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import { useEffect, useState } from "react";
import React from "react";
import { HomeOutlined } from "@ant-design/icons";
import { Typography } from "antd";

export default function Recipes() {
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
            href: "/authorized/recipes",
            title: "Рецепты",
            breadcrumbName: "Recipes",
          },
        ]}
      />

      <div className="main">
        <Typography.Title level={2} className="news-cards-antd-heading">
          Рецепты
        </Typography.Title>
      </div>
      <Footer />
    </>
  );
}
