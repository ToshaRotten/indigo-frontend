import "./footer.css";
import Logo from "../logo/logo.jsx";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="left-container">
          <div className="logos"></div>
          <div className="phone">+7 913 781 12 90</div>
        </div>
        <div className="right-container">
          <Logo />
        </div>
      </div>
    </>
  );
}
