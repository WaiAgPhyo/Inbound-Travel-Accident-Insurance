import React from "react";
import logoImg from "../images/MiLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="h-[100vh] bg-white">
      <div className="flex text-center w-[90%] mx-auto">
        <h3 className="text-[#074DA1] font-bold mb-5 text-[24px] uppercase size-full mt-[15px]">
          Contact Phone Number
        </h3>
      </div>

      <div className="flex justify-center flex-wrap">
        <div className="xl:w-[21%] md:w-[40%] sm:w-[40%] border border-[#074DA1] text-center p-4 rounded mb-3 mx-2 md:mx-4">
          <h4 className="text-[14px] text-[#074DA1] font-bold mb-2 w-full">
            Admin Department
          </h4>
          <p className="text-[13px] font-bold ">
            379088, 384865, 252372, 246902
          </p>
        </div>

        <div className="xl:w-[21%] md:w-[40%] sm:w-[40%] border border-[#074DA1] text-center p-4 rounded mb-3 mx-2 md:mx-4">
          <h4 className="text-[14px] text-[#074DA1] font-bold mb-2 w-full">
            Life Insurance Department
          </h4>
          <p className="text-[13px] font-bold">384881, 384876, 386919</p>
        </div>

        <div className="xl:w-[21%] md:w-[40%] sm:w-[40%] border border-[#074DA1] text-center p-4 rounded mb-3 mx-2 md:mx-4">
          <h4 className="text-[14px] text-[#074DA1] font-bold mb-2 w-full">
            Account Department
          </h4>
          <p className="text-[13px] font-bold">384870, 384868</p>
        </div>

        <div className="xl:w-[21%] md:w-[40%] sm:w-[40%] border border-[#074DA1] text-center p-4 rounded mb-3 mx-2 md:mx-4">
          <h4 className="text-[14px] text-[#074DA1] font-bold mb-2 w-full">
            Duty Room
          </h4>
          <p className="text-[13px] font-bold">379188</p>
        </div>

        <div className="xl:w-[21%] md:w-[40%] sm:w-[40%] border border-[#074DA1] text-center p-2 h-[82px] rounded mb-3 mx-2 md:mx-4">
          <h4 className="text-[13px] text-[#074DA1] font-bold">
            Fire, Engineering and Miscellaneous Insurance Department
          </h4>
          <p className="text-[13px] font-bold mb-2">251764, 384874, 384867</p>
        </div>

        <div className="xl:w-[21%] md:w-[40%] sm:w-[40%] border border-[#074DA1] text-center p-2 h-[82px] rounded mb-3 mx-2 md:mx-4">
          <h4 className="text-[13px] text-[#074DA1] font-bold mb-2 w-full">
            Marine, Aviation & Travelling Insurance Department
          </h4>
          <p className="text-[13px] font-bold mb-2">251761</p>
        </div>

        <div className="xl:w-[21%] md:w-[40%] sm:w-[40%] border border-[#074DA1] text-center p-2 h-[82px] rounded mb-3 mx-2 md:mx-4">
          <h4 className="text-[13px] text-[#074DA1] font-bold mb-2 w-full">
            Third-Party Liability Insurance Department
          </h4>
          <p className="text-[13px] font-bold mb-2">384864, 384873</p>
        </div>
      </div>

      <footer className="bg-[#074DA1]">
        <div className="py-2 flex justify-between xl:flex-row flex-col-reverse w-[90%] mx-auto xl:text-left text-center ">
          <div>
            <p className="text-white my-2 py-2 md:text-[13px] sm:text-[11px]">
              © 2024 Myanma Insurance. <br />
              All Rights Reserved by Myanma Insurance
            </p>
          </div>
          <div className="flex justify-center">
            <img src={logoImg} alt="LogoImage" />
          </div>
          <div className="mt-4">
            <FontAwesomeIcon
              icon={faSquareFacebook}
              style={{
                color: "#ffffff",
                fontSize: "30px",
                marginBottom: "20px",
              }}
            />
          </div>
        </div>
      </footer>
      <a
        href="#1"
        className="w-[40px] h-[40px] bg-[#074DA1] fixed bottom-0 right-0 border-t-[2px] border-[#FFEF00]"
        onClick={scrollToTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-9 flex mx-auto items-center text-white"
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
