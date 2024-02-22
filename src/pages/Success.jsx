import React, { useEffect, useState } from "react";
import PdfOverlay from "../pdf/PdfOverlay";
import "./success.css";
import { faCheck, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";

const Success = ({ back }) => {
  const location = useLocation();
  const [item, setItem] = useState();
  const [pdf, setPdf] = useState(null);
  const [data, setData] = useState();
  const now = new Date();
  function back(value) {
    setPdf(value);
  }
  useEffect(() => {
    if (location) {
      setItem(location.state);
    }
  }, [location]);

  useEffect(() => {
    if (item) {
      setData(item.returndata);
    }
  }, [item]);
  function showpdf() {
    setPdf((condition) => !condition);
    document.body.style.overflow = pdf ? "" : "hidden";
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
            <p className="success_name">Transcation Time :</p>
            <p className="success_detail">
              {now && now.toLocaleDateString()}{" "}
              {now && now.toLocaleTimeString()}
            </p>
          </div>
          <div className="success_card">
            <p className="success_name">Premium Amount :</p>
            <p className="success_detail">{data?.premiumRate} USD</p>
          </div>
          <div className="success_card">
            <p className="success_name">Order Id :</p>
            <p className="success_detail">{data?.certificateNo}</p>
          </div>
          <div className="success_card">
            <p className="success_name">Payment Channel :</p>
            <p className="success_detail">{item && item.payment}</p>
          </div>
        </div>
        <button onClick={showpdf} className="success_btn">
          <FontAwesomeIcon icon={faDownload} className="download_btn" />
          Download Policy Certificate
        </button>
        {pdf && <PdfOverlay back={back} id={data?.certificateNo} />}
      </div>
    </div>
  );
};

export default Success;
