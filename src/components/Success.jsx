import React, { useEffect, useState } from "react";
import PdfOverlay from "./PdfOverlay";
import "./success.css";
import { faCheck, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Success = ({ back }) => {
  const [pdf, setPdf] = useState(null);
  const now = new Date();
  function back(value) {
    setPdf(value);
  }
  return (
    <div className="success_container">
      <div className="success_form">
        <div className="sccuess_alert">
          <FontAwesomeIcon icon={faCheck} className="sccuess_icon" />
          <p>Payment Success!!!</p>
        </div>
        <div className="success_bloc">
          <div className="success_card">
            <p className="success_name">Transcation Time </p>
            <p className="success_detail">
              {now && now.toLocaleDateString()}{" "}
              {now && now.toLocaleTimeString()}
            </p>
          </div>
          <div className="success_card">
            <p className="success_name">Premium Amount </p>
            <p className="success_detail"> 21,400.00 MMK</p>
          </div>
          <div className="success_card">
            <p className="success_name">Order Id </p>
            <p className="success_detail">OUTMMK170721308465757U</p>
          </div>
          <div className="success_card">
            <p className="success_name">Payment Channel</p>
            <p className="success_detail">asdfsafd</p>
          </div>
        </div>
        <button
          onClick={() => setPdf((condition) => !condition)}
          className="success_btn"
        >
          <FontAwesomeIcon icon={faDownload} className="download_btn" />
          Download Policy Certificate
        </button>
        {pdf && <PdfOverlay back={back} />}
      </div>
    </div>
  );
};

export default Success;
