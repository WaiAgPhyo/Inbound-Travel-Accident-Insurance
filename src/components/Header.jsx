import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faChevronDown,
  faChevronRight,
  faEnvelopeOpenText,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import icon from "../images/MiLogo3.png";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [type, setType] = useState("");
  const [money, setMoney] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedsubcategory, setSelectedSubCategory] = useState("");
  const categoryOptions = ["General Insurance", "Life Assurance"];
  const subcategoryOptions = {
    "General Insurance": [
      { topic: "Third Party Liability Insurance", value: "thirdparty" },
      { topic: "Inbound Travel Accident Insurance", value: "inbound" },
      { topic: "Fire & Allied Perils Insurance", value: "fire" },
      { topic: "Burglary Insurance", value: "burglary" },
      { topic: "Fidelity Insurance", value: "fidelity" },
      { topic: "Cash-in-safe Insurance", value: "cashsafe" },
      { topic: "Cash-in-transit Insurance", value: "cashtransit" },
      { topic: "Peronsal Accident & Disease Insurance", value: "disease" },
      { topic: "Peronsal Accident Insurance", value: "accident" },
      { topic: "Workmen's Compensation Insurance", value: "workmen" },
      { topic: "Liability Insurance", value: "liability" },
      { topic: "Contractor's & Machineries Insurance", value: "contractor" },
      { topic: "Deposit Insurance", value: "deposit" },
      { topic: "Marine Cargo Insurance", value: "marineCargo" },
      { topic: "Marine Hull & Machineries Insurance", value: "marineHull" },
      { topic: "Travel Insurance", value: "Travel" },
      {
        topic: "Ship Owner & Ship Operator's Liability Insurance",
        value: "ship",
      },
      {
        topic: "Kyar Fishing Barge Owner's Liability Insurance",
        value: "fishing",
      },
      { topic: "Comprehensive Motor Insurance", value: "motor" },
      { topic: "Credit Guarantee Insurance", value: "credit" },
      { topic: "Reinsurance", value: "reinsurance" },
    ],
    "Life Assurance": [
      { topic: "Government Personal Life Assurance", value: "government" },
      { topic: "Army Personal Life Assurance", value: "army" },
      { topic: "Public Life Assurance", value: "publicLife" },
      {
        topic: "Government Personal (Short Term) Endowment Life Assurance",
        value: "endowment",
      },
      { topic: "Short Term Endowment Life Insurance", value: "shortEndow" },
      { topic: "Education Life Insurance", value: "education" },
      { topic: "Student Life Insurance", value: "student" },
      { topic: "Smart Saving 5/2 Life Insurance", value: "smart1" },
      { topic: "Single Premium Endowment", value: "singlePremium" },
      { topic: "Share Job Life Insurance", value: "shareJob" },
      { topic: "Seamen Life Insurance", value: "seamen" },
      { topic: "Seamen Life Insurance(Plan)", value: "seamenPlan" },
      { topic: "Farmer's Life Insurance", value: "farmer" },
      { topic: "Group Life Insurance", value: "groupLife" },
      { topic: "Snake Bite Life Insurance", value: "snake" },
      { topic: "Sportmen Life Insurance", value: "sportmen" },
      { topic: "Health Insurance Including Covid-19 Cover", value: "health" },
      { topic: "Critical Illness Insurance", value: "critical" },
      { topic: "Micro Health Insurance", value: "micro" },
      { topic: "Public Term Life Insurance", value: "public" },
      { topic: "Single Premium Credit Life Insurance", value: "creditLife" },
      {
        topic: "Short Term Single Premium Credit Life Insurance",
        value: "shortCreditLife",
      },
    ],
  };
  //clickoutside
  const subItemRefs = Array.from({ length: categoryOptions.length }, () =>
    useRef(null)
  );
  const aboutRef = useRef(null);
  const categoryRef = useRef(null);
  const customerRef = useRef(null);
  const mediaRef = useRef(null);
  const subRef = useRef(null);
  const handleClickOutside = (event) => {
    if (
      event.target &&
      !subItemRefs.some(
        (ref) => ref.current && ref.current.contains(event.target)
      ) &&
      event.target != aboutRef.current &&
      event.target != categoryRef.current &&
      event.target != customerRef.current &&
      event.target != mediaRef.current &&
      event.target != subRef.current
    ) {
      setSelectedCategory(null);
      setCustomerShow(false);
      setMediaShow(false);
      setAboutShow(false);
      setSelectedSubCategory(null);
      setSelectedCustomer(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [selectedcustomer, setSelectedCustomer] = useState("");
  const customerOptions = {
    "Documents Center": [
      { topic: "Myanmar Insurance Law", value: "law" },
      { topic: "Life Laws", value: "lifelaw" },
      { topic: "Third-Party Insurance Rules", value: "rule" },
      { topic: "New Business & Proposal", value: "proposal" },
      { topic: "Claim Form", value: "claim" },
      { topic: "AML/CFT Documents", value: "doc" },
    ],
  };
  const [aboutshow, setAboutShow] = useState(null);
  const [customershow, setCustomerShow] = useState(null);
  const [mediashow, setMediaShow] = useState(null);
  function firstdropdown() {
    setAboutShow((condition) => !condition);
    setSelectedCategory(null);
    setSelectedSubCategory(null);
    setCustomerShow(false);
    setSelectedCustomer(null);
    setMediaShow(false);
  }
  function categorydown() {
    setSelectedCategory(categoryOptions);
    setAboutShow(false);
    setCustomerShow(false);
    setSelectedCustomer(null);
    setMediaShow(false);
  }
  function customerDrop() {
    setCustomerShow(true);
    setSelectedCategory(null);
    setSelectedSubCategory(null);
    setAboutShow(false);
    setMediaShow(false);
  }
  function categoryclose(e) {
    e.stopPropagation();
    e.preventDefault();
    setSelectedCategory(null);
    setSelectedSubCategory(null);
  }
  function customerclose(e) {
    e.stopPropagation();
    e.preventDefault();
    setSelectedCustomer(null);
    setCustomerShow(false);
  }
  function lastdropdown() {
    setMediaShow((condition) => !condition);
    setSelectedCategory(null);
    setSelectedSubCategory(null);
    setCustomerShow(false);
    setSelectedCustomer(null);
    setAboutShow(false);
  }
  const [image, setImage] = useState("");
  useEffect(() => {
    if (
      location.pathname == "/outbound/mmk" ||
      location.pathname == "/outbound/usd"
    ) {
      setImage(hand);
    }
    if (location) {
      const [, first, second] = location.pathname.split("/");
      if (first == "outbound") {
        setType("Outbound Travel Insurance ");
      }
      if (second == "mmk") {
        setMoney("For MMK");
      } else if (second == "usd") {
        setMoney("For USD");
      }
    }
  }, [location]);
  return (
    <div className="navi_container">
      <div className="header_container">
        <div className="header">
          <div className="img_icon">
            <img alt="icon" src={icon} />
          </div>
          <div className="contact">
            <div className="mail">
              <FontAwesomeIcon
                icon={faEnvelopeOpenText}
                className="mail_icon"
              />
              <div className="contactinfo">
                <a href="mailto: online-support@mminsurance.gov.mm">
                  <span className="bold">
                    {" "}
                    online-support@mminsurance.gov.mm
                  </span>
                </a>
                <p>
                  <span className="faint">Drop us a mail</span>
                </p>
              </div>
            </div>
            <div className="phone">
              <FontAwesomeIcon icon={faPhoneVolume} className="phone_icon" />
              <div className="contactinfo">
                <p>
                  <span className="bold">+959765428630,31</span>
                </p>
                <p>
                  <span className="faint">Make a call</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navi_bar">
        <div className="navi_bar-left">
          <NavLink className="left_category" to={"home"}>
            Home
          </NavLink>

          {/* About Us */}
          <div className="left_category">
            <NavLink
              className={"category_btn"}
              onClick={firstdropdown}
              ref={aboutRef}
            >
              About Us <FontAwesomeIcon icon={faChevronDown} />
            </NavLink>
            {aboutshow && (
              <div className="dropdown">
                <div className="dropdown_list">
                  <NavLink className="dropdown_btn">
                    Background History of Myanma Insurance
                  </NavLink>
                </div>
                <div className="dropdown_list">
                  <NavLink className="dropdown_btn">
                    About Myanma Insurance
                  </NavLink>
                </div>
              </div>
            )}
          </div>

          {/* Insurance Product */}
          <div className="left_category">
            <NavLink
              className={"category_btn"}
              onClick={categorydown}
              ref={categoryRef}
            >
              Insurance Products{" "}
              <FontAwesomeIcon icon={faChevronDown} onClick={categoryclose} />
            </NavLink>
            {selectedCategory && (
              <div className="dropdown">
                {selectedCategory.map((item, index) => (
                  <div className="dropdown_list" key={index}>
                    <NavLink
                      className="dropdown_btn"
                      onClick={() => setSelectedSubCategory(item)}
                      ref={subItemRefs[index]}
                    >
                      {item} <FontAwesomeIcon icon={faCaretRight} />
                    </NavLink>
                  </div>
                ))}
              </div>
            )}
            {selectedsubcategory && (
              <div className="dropdown dropdown--sub">
                {subcategoryOptions[selectedsubcategory].map((item, index) => (
                  <div className="dropdown_list" key={index}>
                    <NavLink className="dropdown_btn">{item.topic}</NavLink>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Customer Hub */}
          <div className="left_category">
            <NavLink
              className={"category_btn"}
              onClick={customerDrop}
              ref={customerRef}
            >
              Customer Hub{" "}
              <FontAwesomeIcon icon={faChevronDown} onClick={customerclose} />
            </NavLink>
            {customershow && (
              <div className="dropdown dropdown--long">
                <div className="dropdown_list">
                  <NavLink className="dropdown_btn">
                    Hospital Admission and Medical Claim Submission(Outbound
                    Travel Insurance)
                  </NavLink>
                </div>
                <div className="dropdown_list">
                  <NavLink
                    className="dropdown_btn"
                    onClick={() => setSelectedCustomer("Documents Center")}
                    ref={subRef}
                  >
                    Documents Center <FontAwesomeIcon icon={faCaretRight} />
                  </NavLink>
                </div>
                <div className="dropdown_list">
                  <NavLink className="dropdown_btn">FAQ</NavLink>
                </div>
              </div>
            )}
            {selectedcustomer && (
              <div className="dropdown dropdown--sub2">
                {customerOptions[selectedcustomer].map((item, index) => (
                  <div className="dropdown_list" key={index}>
                    <NavLink className="dropdown_btn">{item.topic}</NavLink>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* News & Media */}
          <div className="left_category">
            <NavLink
              className={"category_btn"}
              onClick={lastdropdown}
              ref={mediaRef}
            >
              News & Media
              <FontAwesomeIcon icon={faChevronDown} />
            </NavLink>
            {mediashow && (
              <div className="dropdown">
                <div className="dropdown_list">
                  <NavLink className="dropdown_btn">News</NavLink>
                </div>
                <div className="dropdown_list">
                  <NavLink className="dropdown_btn">Video</NavLink>
                </div>
                <div className="dropdown_list">
                  <NavLink className="dropdown_btn">Annoucement</NavLink>
                </div>
              </div>
            )}
          </div>

          <NavLink className="left_category" to={"contact"}>
            Contact Us
          </NavLink>
        </div>
        <div className="navi_bar-right">
          <div className="navigation">
            <NavLink className="navigation_btn">Premium Calculator</NavLink>
          </div>
          <div className="navigation">
            <NavLink className="navigation_btn">Print Ceritificates</NavLink>
          </div>
          <div className="navigation">
            <NavLink className="navigation_btn">Online Biller</NavLink>
          </div>
          <div className="navigation">
            <NavLink className="navigation_btn">Buy Online</NavLink>
          </div>
        </div>
      </div>
      {(location.pathname == "/outbound/mmk" ||
        location.pathname == "/outbound/usd") && (
        <div className="visual">
          <img src={image} alt="visual" />
        </div>
      )}
      <div className="link_port">
        {(location.pathname == "/outbound/mmk" ||
          location.pathname == "/outbound/usd") && (
          <div className="inner_link">
            <p className="bold">
              Home{" "}
              <FontAwesomeIcon
                icon={faChevronRight}
                className={"link_port_img"}
              />
            </p>
            <p>
              Insurance Products
              <FontAwesomeIcon
                icon={faChevronRight}
                className={"link_port_img"}
              />
            </p>
            <p>
              General Insurance{" "}
              <FontAwesomeIcon
                icon={faChevronRight}
                className={"link_port_img"}
              />
            </p>
            <p>
              {type}
              {money}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
