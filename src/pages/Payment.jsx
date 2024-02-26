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
      const parts = temp.child
        ? temp.childDOB.split("-").map(Number)
        : temp.insuredPersonDOB.split("-").map(Number);
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1; // Months are 0-indexed
      const year = parseInt(parts[2], 10);
      const insureBirth = new Date(year, month, day);
      let calculatedAge = today.getUTCFullYear() - insureBirth.getUTCFullYear();
      setAge(calculatedAge.toString());
      console.log("Calculated age:", calculatedAge);
    }
  }, [temp]);

  console.log(temp);

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
            <p className="category">Insured For</p>
            <p>
              {temp.child ? "Buy For Child" : "Buy For This Passport Holder"}
            </p>
          </div>
          <div className="payment_card">
            <p className="category">Net Premium</p>
            <p>{temp.premiumrate} USD</p>
          </div>
          <div className="payment_card">
            <p className="category">Age (Years)</p>
            <p>{age}</p>
          </div>
          <div className="payment_card">
            <p className="category">Coverage Plan</p>
            <p>{temp.coveragePlan} DAYS</p>
          </div>
          <div className="payment_card">
            <p className="category">Passport Number</p>
            <p>{temp.passportNumber}</p>
          </div>
          <div className="payment_card">
            <p className="category">Name (as per passport)</p>
            <p>{temp.insuredPersonName}</p>
          </div>
          <div className="payment_card">
            <p className="category">Estimated Arrival Date</p>
            <p>
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
                id="VISA"
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
                id="MASTER"
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
                id="JCB"
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
                id="UNION"
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
