import "./header.css";
import Logo from "../logo/logo.jsx";
import Navbar from "../navbar/navbar.jsx";
import { Breadcrumb } from "antd";

export default function Header(breadcrumbItems) {
  return (
    <>
      <div className="header">
        <div className="left-container">
          <Logo />
        </div>
        <div className="right-container">
          <Navbar />
        </div>
      </div>
      <Breadcrumb
        className="breadcrumb"
        separator=">"
        items={breadcrumbItems.breadcrumbItems}
      />
    </>
  );
}
