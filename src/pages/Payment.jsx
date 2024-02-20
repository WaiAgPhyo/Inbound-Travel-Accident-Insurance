import React from "react";
import "./payment.css";
import visa from "../images/visa_icon.png";
import master from "../images/master_card.png";
import jcb from "../images/jcb_icon.png";
import union from "../images/union_pay_icon.png";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { faCircleCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const Payment = ({ temp, closing }) => {
  const navigate = useNavigate();
  const [selectedpayment, setSelectedPayment] = useState("Visa");
  const [age, setAge] = useState();
  function toAfterSubmit() {
    navigate("/confirm", { state: { ...temp, payment: selectedpayment } });
  }
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    if (temp) {
      const today = new Date();
      const parts = temp.insuredPersonDOB.split("-");
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1; // Months are 0-indexed
      const year = parseInt(parts[2], 10);
      const insureBirth = new Date(year, month, day);
      let calculatedAge = today.getUTCFullYear() - insureBirth.getUTCFullYear();
      setAge(calculatedAge.toString());
      console.log("Calculated age:", calculatedAge);
    }
  }, [temp]);
  

  function back() {
    closing(false);
  }

  return (
    <div className="overlay">
      <div className="payment_container">
        <div className="payment_titles">
          <h1 className="titles">
            PREMIUM INFORMATION AND CHOOSE PAYMENT METHOD
          </h1>
          <FontAwesomeIcon
            icon={faXmark}
            className="payment_back"
            onClick={back}
          />
        </div>
        <div className="payment_bloc">
          <div className="payment_card">
            <p>Insured For</p>
            <p className="payment_value">{temp.insuredPersonName}</p>
          </div>
          <div className="payment_card">
            <p>Net Premium</p>
            <p className="payment_value">{temp.premiumrate} USD</p>
          </div>
          <div className="payment_card">
            <p>Age (Years)</p>
            <p className="payment_value">{age}</p>
          </div>
          <div className="payment_card">
            <p>Coverage Plan</p>
            <p className="payment_value">{temp.coveragePlan} Days</p>
          </div>
          <div className="payment_card">
            <p>Passport Number</p>
            <p className="payment_value">{temp.passportNumber}</p>
          </div>
          <div className="payment_card">
            <p>
              Name
              <br />
              (as per passport)
            </p>
            <p className="payment_value">{temp.insuredPersonName}</p>
          </div>
          <div className="payment_card">
            <p>Estimated Arrival Date</p>
            <p className="payment_value">
              {temp.estimateArrivalDate && temp.estimateArrivalDate.toString()}
            </p>
          </div>
        </div>

        <div className="method">
          <p>Choose Payment Method</p>
          <div className="method_bloc">
            <label className="method_card">
              <img src={visa} alt="visa" />
              <input
                type="radio"
                checked={selectedpayment == "Visa"}
                name="card"
                id="Visa"
                onChange={(e) => setSelectedPayment(e.target.id)}
                className="invisible"
              />
              {selectedpayment == "Visa" && (
                <FontAwesomeIcon icon={faCircleCheck} className="check_icon" />
              )}
            </label>
            <label className="method_card">
              <img src={master} alt="Master" />
              <input
                type="radio"
                name="card"
                id="Master"
                checked={selectedpayment == "master"}
                onChange={(e) => setSelectedPayment(e.target.id)}
                className="invisible"
              />
              {selectedpayment == "Master" && (
                <FontAwesomeIcon icon={faCircleCheck} className="check_icon" />
              )}
            </label>
            <label className="method_card">
              <img src={jcb} alt="jcb" />
              <input
                type="radio"
                checked={selectedpayment == "Jcb"}
                name="card"
                id="Jcb"
                onChange={(e) => setSelectedPayment(e.target.id)}
                className="invisible"
              />
              {selectedpayment == "Jcb" && (
                <FontAwesomeIcon icon={faCircleCheck} className="check_icon" />
              )}
            </label>
            <label className="method_card">
              <img src={union} alt="union" />
              <input
                type="radio"
                checked={selectedpayment == "Union"}
                name="card"
                id="Union"
                onChange={(e) => setSelectedPayment(e.target.id)}
                className="invisible"
              />
              {selectedpayment == "Union" && (
                <FontAwesomeIcon icon={faCircleCheck} className="check_icon" />
              )}
            </label>
          </div>
        </div>
        <button className="payment_btn" onClick={toAfterSubmit}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Payment;
