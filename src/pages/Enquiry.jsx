import React from "react";
import "./enquiry.css";

const Enquiry = () => {
  return (
    <>
      <div className="enquiry">
        <div className="enquiry-header">
          <h3>Inbound Travel Accidence Insurance</h3>

          <div className="enquiry-body">
            <div className="enquiry-body-inner">
              <div className="category">
                <label htmlFor="passportNumber" className="category-txt">
                  Passport Number <span className="star">*</span>
                </label>
                <input
                  type="text"
                  placeholder=". . ."
                  className="category-input"
                />
              </div>
              <div className="category">
                <label htmlFor="passportNumber" className="category-txt">
                  Passport Issued Country <span className="star">*</span>
                </label>
                <select
                  type="text"
                  name="passportCountry"
                  className="category-input category-select"
                >
                  <option hidden>SELECT ONE</option>
                  <option value="">SELECT ONE</option>
                  <option value="">SELECT TWO</option>
                  <option value="">SELECT THREE</option>
                </select>
              </div>
            </div>
            <button className="search-btn">Search</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enquiry;
