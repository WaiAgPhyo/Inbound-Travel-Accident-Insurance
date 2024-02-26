import React from "react";
import logoImg from "../images/MiLogo.png";
import "./footer.css";

const Footer = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="footer-container">
      <div className="footer-head">
        <h3>CONTACT PHONE NUMBER</h3>
      </div>

      <div className="footer-body">
        <div className="department">
          <h4>Admin Department</h4>
          <p>379088, 384865, 252372, 246902</p>
        </div>

        <div className="department">
          <h4>Life Insurance Department</h4>
          <p>384881, 384876, 386919</p>
        </div>

        <div className="department">
          <h4>Account Department</h4>
          <p>384870, 384868</p>
        </div>

        <div className="department">
          <h4>Duty Room</h4>
          <p>379188</p>
        </div>

        <div className="department contactNum">
          <h4 className="fire">Fire, Engineering and Miscellaneous Insurance Department</h4>
          <p>251764, 384874, 384867</p>
        </div>

        <div className="department contactNum">
          <h4>Marine, Aviation & Travelling Insurance Department</h4>
          <p>251761</p>
        </div>

        <div className="department contactNum">
          <h4>Third-Party Liability Insurance Department</h4>
          <p>384864, 384873</p>
        </div>
      </div>

      <footer>
        <div className="footer-address">
            <p>
              © 2024 Myanma Insurance. <br />
              All Rights Reserved by Myanma Insurance
            </p>
          <div className="footer-logo">
            <img src={logoImg} alt="LogoImage" />
          </div>
        </div>
      </footer>
      <a href="#1" className="scroll-btn" onClick={scrollToTop}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="arrow"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 18.75 7.5-7.5 7.5 7.5"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 12.75 7.5-7.5 7.5 7.5"
          />
        </svg>
      </a>
    </div>
  );
};

export default Footer;
