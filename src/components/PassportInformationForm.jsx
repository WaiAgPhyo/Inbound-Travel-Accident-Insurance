import "./Main.css";
import agent from "./image/agent.png";
import self from "./image/self.png";
import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

export const PassportInformationForm = () => {
  // for radio
  const [option, setOption] = useState();
  const [agentRadio, setAgentRadio] = useState();
  // for date
  // const [passportDate, setPassportDate] = useState();
  
  // const [userclick, setUserClick] = useState(false);
  // const navigate = useNavigate();

  // const [passportNum, setPassportNum] = useState("");
  // const [passportCountry, setPassportCountry] = useState("");

  // function submitHandler() {
  //   setUserClick(true);
  //   if (userclick &&
  //     passportNum &&
  //     passportDate &&
  //     passportCountry ) {
  //       navigate("/confirm", {
  //         state: {
  //           passportIssuedDate: passportDate, 
  //           passportNumber: passportNum,
  //           passportIssuedCountry: passportCountry
  //         }})
  //   } }

  // const [formData, setFormData] = useState({
  //   passportNumber: "",
  //   emptyValidation: "",
  //   emailValidation: "",
  //   phNumberValidation: "",
  //   passportValidation: "",
  // });

  // const [errors, setErrors] = useState({});

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const validationErrors = {};
  //   if (!formData.emptyValidation.trim()) {
  //     validationErrors.emptyValidation = "This field is required."
  //   }

  //   if (!formData.emailValidation.trim()) {
  //     validationErrors.emailValidation = "";
  //   }
  //   else if (!/\S+@\S+\.\S+/.test(formData.emailValidation)) {
  //     validationErrors.emailValidation = "Please enter a valid email address."
  //   }

  //   if (!formData.phNumberValidation.trim()) {
  //     validationErrors.phNumberValidation = "This field is required."
  //   }
  //   else if (!/^\d{10}$/.test(formData.phNumberValidation)) {
  //     validationErrors.phNumberValidation = "Please enter a valid number."
  //   }

  //   if (!formData.passportValidation.trim()) {
  //     validationErrors.passportValidation = ""
  //   }
  //   else if (!/^[A-Z]{1,2}[0-9]{6,9}$/.test(formData.passportValidation)) {
  //     validationErrors.passportValidation = "Please input valid passport number"
  //   }

  //   setErrors(validationErrors);

  //   if (Object.keys(validationErrors).length === 0) {
  //     alert("Form submitted successfully");
  //   }

  // };

  return (
    <>
      <div className="bg-body-secondary">
        <h1 className="text_color text-center fs-4 mt-4">
          INBOUND TRAVEL ACCIDENT INSURANCE
        </h1>
        <div className="container text-center mt-4 bg-white shadow p-3 mb-5 bg-body-tertiary rounded">
          <div className="main-container">
            {/* passport information// */}
            <h2 className="text_color fs-6 text-start mt-4 mb-3">
              <u>PASSPORT INFORMATION(In English)</u>
            </h2>
            <form>
              <div className="row pb-2">
                <div className="col-6 col-md-4">
                  <div className="mb-3  text-start">
                    <label className="text_color form-label">
                      Passport Number
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="passportNumber"
                      // onChange={(e) => setPassportNum(e.target.value)}
                      className="form-control col-6"
                      placeholder="ENTER YOUR PASSPORT NO."
                    />
                    {/* {errors.passportValidation && (
                      <span className="valid_text text-danger fw-bolder">{errors.passportValidation}</span>
                    )} */}
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="mb-3 text-start date_picker">
                    <label className="text_color form-label">
                      Passport Issued Date.
                      <span className="text-danger">*</span>
                    </label>

                    <input
                      type="date"
                      name="passportIssuedDate"
                      className="form-control"
                      
                    />

                    {/* {errors.emptyValidation && (
                      <span className="valid_text text-danger fw-bolder">{errors.emptyValidation}</span>
                    )} */}
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="mb-3  text-start">
                    <label className="text_color form-label">
                      Passport Issued Country
                      <span className="text-danger">*</span>
                    </label>
                    <select
                      name="emptyValidation"
                      className="form-select"
                      aria-label="Default select example"
                      // onChange={(e)=> setPassportCountry(e.target.value)}
                    >
                      <option value="">SELECT ONE</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    {/* {errors.emptyValidation && (
                      <span className="valid_text text-danger fw-bolder">{errors.emptyValidation}</span>
                    )} */}
                  </div>
                </div>
              </div>
              <hr />
              {/* passport information// */}
              {/* insured information radio// */}
                      
              <h2 className="text_color fs-6 text-start mt-4 mb-3 pb-3">
                <u>INSURED INFORMATION (In English)</u>
              </h2>

              <div className="row mb-4 pb-2">
                <div className="col-md-5 text-start ">
                  <label htmlFor="self" className="text_color form-check-label">
                    <input
                      type="radio"
                      name="options"
                      id="self"
                      value="self"
                      onChange={(e) => setOption(e.target.id)}
                      className="radio form-check-input"
                    />
                    BUY FOR YOURSELF (THIS PASSPORT HOLDER)
                  </label>
                </div>
                <div className="col-md-6">
                  <label
                    htmlFor="child"
                    className="text_color form-check-label"
                  >
                    <input
                      type="radio"
                      name="options"
                      value="child"
                      id="child"
                      onChange={(e) => setOption(e.target.id)}
                      className="radio form-check-input"
                    />
                    BUY FOR THE CHILD TRAVEL TOGETHER WITH THIS PASSPORT HOLDER
                    (CHILD IS NOT HOLDING A VALID PASSPORT)
                  </label>
                </div>
              </div>

              {/* insured information radio// */}

              {/* insure information// */}

              <div className="row pb-2">
                <div className="col-6 col-md-4">
                  <div className="mb-3  text-start">
                    <label className="form-label text_color">
                      Name (as per passport)
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="emptyValidation"
                      className="form-control"
                      id="passportno"
                      placeholder="ENTER INSURED NAME"
                      // onChange={handleChange}
                    />
                    {/* {errors.emptyValidation && (
                      <span className="valid_text text-danger fw-bolder">{errors.emptyValidation}</span>
                    )} */}
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="mb-3  text-start">
                    <label className="form-label text_color">
                      Date of Birth (as per passport)
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      type="date"
                      name="emptyValidation"
                      className="form-control"
                      id="passportissueddate"
                      // onChange={handleChange}
                    />
                     {/* {errors.emptyValidation && (
                      <span className="valid_text text-danger fw-bolder">{errors.emptyValidation}</span>
                    )} */}
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="mb-3  text-start">
                    <label className="text_color form-label">
                      Gender (as per passport)
                      <span className="text-danger">*</span>
                    </label>
                    <select
                      name="emptyValidation"
                      // onChange={handleChange}
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option defaultValue="">SELECT ONE</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    {/* {errors.emptyValidation && (
                      <span className="valid_text text-danger fw-bolder">{errors.emptyValidation}</span>
                    )} */}
                  </div>
                </div>
              </div>
              {/* 3// */}
              <div className="row pb-2">
                <div className="col-6 col-md-4">
                  <div className="mb-3  text-start">
                    <label className="form-label text_color">
                      Estimated Arrival Date
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      type="date"
                      name="emptyValidation"
                      className="form-control"
                      id="passportissueddate"
                      // onChange={handleChange}
                    />
                     {/* {errors.emptyValidation && (
                      <span className="valid_text text-danger fw-bolder">{errors.emptyValidation}</span>
                    )} */}
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="mb-3  text-start">
                    <label className="text_color form-label">
                      Journey From
                      <span className="text-danger">*</span>
                    </label>
                    <select
                      name="emptyValidation"
                      // onChange={handleChange}
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option defaultValue="">SELECT ONE</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    {/* {errors.emptyValidation && (
                      <span className="valid_text text-danger fw-bolder">{errors.emptyValidation}</span>
                    )} */}
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="mb-3  text-start">
                    <label className="form-label text_color">
                      Journey To
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value="Myanmar"
                      aria-label="Disabled input example"
                      disabled
                      readOnly
                    />
                  </div>
                </div>
              </div>
              {/* 3// */}
              <div className="row pb-2">
                <div className="col-6 col-md-4">
                  <div className="mb-3  text-start">
                    <label className="text_color form-label">
                      Coverage Plan
                      <span className="text-danger">*</span>
                    </label>
                    <select
                      name="emptyValidation"
                      // onChange={handleChange}
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option defaultValue="">SELECT ONE</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    {/* {errors.emptyValidation && (
                      <span className="valid_text text-danger fw-bolder">{errors.emptyValidation}</span>
                    )} */}
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="mb-3  text-start">
                    <label className="form-label text_color">
                      Insured's Contact Phone Number
                      <span className="text-danger">*</span>
                    </label>
                    <div className="input-group mb-3">
                      <select className="col-sm-3 border border-light-subtle">
                        <option hidden>SELECT</option>
                        <option value="+95">+95</option>
                        </select>
                      <input
                        type="text"
                        name="phNumberValidation"
                        // onChange={handleChange}
                        className="form-control"
                        aria-label="Text input with segmented dropdown button"
                      />
                     
                    </div>
                    {/* {errors.phNumberValidation && (
                      <span className="valid_text text-danger fw-bolder">{errors.phNumberValidation}</span>
                    )} */}
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="mb-3  text-start">
                    <label className="form-label text_color">
                      Insured's Email
                    </label>
                    <input
                      name="emailValidation"
                      // onChange={handleChange}
                      type="text"
                      className="form-control"
                      id="passportno"
                      placeholder="Insured's Email Address"
                    />
                     {/* {errors.emailValidation && (
                      <span className="valid_text text-danger fw-bolder">{errors.emailValidation}</span>
                    )} */}
                  </div>
                </div>
              </div>
              {/* 3// */}
              <div className="row pb-2">
                <div className="col-6 col-md-4">
                  <div className="mb-3  text-start">
                    <label className="form-label text_color">
                      Address in Myanmar (Max: 250 Char)
                    </label>
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="..."
                    />
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="mb-3  text-start">
                    <label className="form-label text_color">
                      Resident Address (Max: 250 Char)
                      <span className="text-danger">*</span>
                    </label>
                    <textarea
                      name="emptyValidation"
                      // onChange={handleChange}
                      className="form-control"
                      rows="4"
                      placeholder="..."
                      maxLength="250"
                    />
                     {/* {errors.emptyValidation && (
                      <span className="valid_text text-danger fw-bolder">{errors.emptyValidation}</span>
                    )} */}
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="mb-3  text-start">
                    <label className="text_color form-label">
                      Resident Country
                      <span className="text-danger">*</span>
                    </label>
                    <select
                      name="emptyValidation"
                      // onChange={handleChange}
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option defaultValue="">SELECT ONE</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    {/* {errors.emptyValidation && (
                      <span className="valid_text text-danger fw-bolder">{errors.emptyValidation}</span>
                    )} */}
                  </div>
                </div>
              </div>
              {/* child information// */}
              {option == "child" && (
                <div className="bg-body-secondary ">
                  <div className="container-xl">
                    <h2 className="text_color text-start pt-4 mb-3 fs-6">
                      <u>
                        CHILD INFORMATION (CHILD IS NOT HOLDING A VALID
                        PASSPORT)
                      </u>
                    </h2>
                    <div className="row pb-2 pt-3">
                      <div className="col-6 col-md-4">
                        <div className="mb-3  text-start">
                          <label className="text_color form-label">
                            Child Name
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            name="emptyValidation"
                            // onChange={handleChange}
                            type="text"
                            className="form-control col-6"
                            placeholder="ENTER CHILD NAME"
                          />
                          {/* {errors.emptyValidation && (
                      <span className="valid_text text-danger fw-bolder">{errors.emptyValidation}</span>
                    )} */}
                        </div>
                      </div>
                      <div className="col-6 col-md-4">
                        <div className="mb-3 text-start">
                          <label className="text_color form-label">
                            Date of Birth
                            <span className="text-danger">*</span>
                          </label>

                          <input type="date" 
                          name="emptyValidation"
                          // onChange={handleChange}
                          className="form-control" />
                          {/* {errors.emptyValidation && (
                      <span className="valid_text text-danger fw-bolder">{errors.emptyValidation}</span>
                    )} */}
                        </div>
                      </div>
                      <div className="col-6 col-md-4">
                        <div className="mb-3  text-start">
                          <label className="text_color form-label">
                            Gender
                            <span className="text-danger">*</span>
                          </label>
                          <select
                            name="emptyValidation"
                            // onChange={handleChange}
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option defaultValue="">
                              SELECT ONE
                            </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                          {/* {errors.emptyValidation && (
                      <span className="valid_text text-danger fw-bolder">{errors.emptyValidation}</span>
                    )} */}
                        </div>
                      </div>
                    </div>
                    <div className="row pb-2">
                      <div className="col-6 col-md-4">
                        <div className="mb-3  text-start">
                          <label className="text_color form-label">
                            Guardiance Name
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            name="emptyValidation"
                            // onChange={handleChange}
                            type="text"
                            className="form-control col-6"
                            placeholder="ENTER GUARDIANCE NAME"
                          />
                          {/* {errors.emptyValidation && (
                      <span className="valid_text text-danger fw-bolder">{errors.emptyValidation}</span>
                    )} */}
                        </div>
                      </div>
                      <div className="col-6 col-md-4">
                        <div className="mb-3  text-start">
                          <label className="text_color form-label">
                            Relationship
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            name="emptyValidation"
                            // onChange={handleChange}
                            className="form-control col-6"
                            placeholder="ENTER RELATIONSHIP"
                          />
                          {/* {errors.emptyValidation && (
                      <span className="valid_text text-danger fw-bolder">{errors.emptyValidation}</span>
                    )} */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* child information// */}
              <hr />
              {/* insure information// */}

              {/* beneficary information// */}
              <h2 className="fs-6 text-start mt-4 mb-3 text_color pb-2">
                <u>BENEFICIARY INFORMATION (In English)</u>
              </h2>
              <div className="row pb-2">
                <div className="col-6 col-md-4">
                  <div className="mb-3  text-start">
                    <label className="form-label text_color">
                      Name
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="emptyValidation"
                      // onChange={handleChange}
                      className="form-control"
                      id="passportno"
                      placeholder="ENTER NAME"
                    />
                    {/* {errors.emptyValidation && (
                      <span className="valid_text text-danger fw-bolder">{errors.emptyValidation}</span>
                    )} */}
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="mb-3  text-start">
                    <label className="form-label text_color">
                      Date of Birth
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      type="date"
                      name="emptyValidation"
                      // onChange={handleChange}
                      className="form-control"
                      id="passportissueddate"
                    />
                    {/* {errors.emptyValidation && (
                      <span className="valid_text text-danger fw-bolder">{errors.emptyValidation}</span>
                    )} */}
                  </div>
                </div>

                <div className="col-6 col-md-4">
                  <div className="mb-3  text-start">
                    <label className="form-label text_color">
                      National Identificaiton Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="passportno"
                      placeholder="ENTER NATIONAL IDENTIFICAITON NUMBER"
                    />
                  </div>
                </div>
              </div>
              {/* 3// */}
              <div className="row pb-2">
                <div className="col-6 col-md-4">
                  <div className="mb-3  text-start">
                    <label className="form-label text_color">
                      Relationship
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="emptyValidation"
                      // onChange={handleChange}
                      className="form-control"
                      id="passportno"
                      placeholder="ENTER RELATIONSHIP"
                    />
                    {/* {errors.emptyValidation && (
                      <span className="valid_text text-danger fw-bolder">{errors.emptyValidation}</span>
                    )} */}
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="mb-3  text-start">
                    <label className="form-label text_color">
                      Contact Phone Number
                      <span className="text-danger">*</span>
                    </label>
                    <div className="input-group mb-3">
                      <select className="col-sm-3 border border-light-subtle">
                        <option hidden>SELECT</option>
                        <option value="+95">+95</option>
                        </select>
                      <input
                        type="text"
                        name="phNumberValidation"
                        // onChange={handleChange}
                        className="form-control"
                        aria-label="Text input with segmented dropdown button"
                      />
                     
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4">
                  <div className="mb-3  text-start">
                    <label className="form-label text_color">Email</label>
                    <input
                      type="text"
                      name="emailValidation"
                      // onChange={handleChange}
                      className="form-control"
                      id="passportno"
                      placeholder="Enter Email"
                    />
                     {/* {errors.emailValidation && (
                      <span className="valid_text text-danger fw-bolder">{errors.emailValidation}</span>
                    )} */}
                  </div>
                </div>
              </div>
              {/* 3// */}
              <div className="row">
                <div className="col-6 col-md-4">
                  <div className="mb-3  text-start">
                    <label className="form-label text_color">
                      Resident Addresss (Max: 250 Char)
                      <span className="text-danger">*</span>
                    </label>
                    <textarea
                      name="emptyValidation"
                      // onChange={handleChange}
                      className="form-control"
                      rows="4"
                      placeholder="..."
                    />
                    {/* {errors.emptyValidation && (
                      <span className="valid_text text-danger fw-bolder">{errors.emptyValidation}</span>
                    )} */}
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="mb-3  text-start">
                    <label className="text_color form-label">
                      Resident Country
                      <span className="text-danger">*</span>
                    </label>
                    <select
                      name="emptyValidation"
                      // onChange={handleChange}
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option defaultValue="">SELECT ONE</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    {/* {errors.emptyValidation && (
                      <span className="valid_text text-danger fw-bolder">{errors.emptyValidation}</span>
                    )} */}
                  </div>
                </div>
              </div>

              {/* beneficary information// */}

              {/* agent information testing// */}

              <div className="bg-body-secondary ps-4 ">
                <div className="pt-4 mb-4">
                  <h2 className="fs-6 text-start pb-4 text_color">
                    <u>
                      This section is only used for servicing agent of Myanma
                      Insurance
                    </u>
                  </h2>
                  <div className="row">
                    <div className="agent_container ">
                      <div className="agent_radio_box">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="services"
                          id="selfservice"
                          checked={agentRadio === "selfservice"}
                          onChange={(e) => setAgentRadio(e.target.id)}
                        />
                        <div
                          className={`service_box ${
                            agentRadio == "selfservice" &&
                            "service_box--selected"
                          }`}
                          onClick={() => setAgentRadio("selfservice")}
                        >
                          <label
                            htmlFor="selfservice"
                            className="text_color form-check-label"
                          >
                            <div className="agent_image">
                              <img src={self} alt="agent" />
                            </div>
                            SELF-SERVICE
                          </label>
                        </div>
                      </div>
                      <div
                        className="agent_radio_box"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        <input
                          className="form-check-input"
                          type="radio"
                          name="services"
                          id="agentservice"
                          checked={agentRadio === "agentservice"}
                          onChange={(e) => setAgentRadio(e.target.id)}
                        />
                        <div
                          className={`service_box ${
                            agentRadio == "agentservice" &&
                            "service_box--selected"
                          }`}
                          onClick={() => setAgentRadio("agentservice")}
                        >
                          <label htmlFor="agentservice" className="text_color ">
                            <div className="agent_image ">
                              <img src={agent} alt="agent" />
                            </div>
                            YANGON AERODROME COMPANY LIMITED
                          </label>
                        </div>
                      </div>
                      {/* modal */}
                      <div
                        className="modal fade"
                        id="staticBackdrop"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabIndex={"-1"}
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1
                                className="modal-title fs-5 text_color"
                                id="staticBackdropLabel"
                              >
                                Check Agent Information
                              </h1>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <div>
                                <div className="mb-3 text-start">
                                  <label className="col-form-label text_color">
                                    Agent License Number
                                    <span className="text-danger">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    name="emptyValidation"
                                    // onChange={handleChange}
                                    className="form-control"
                                    id="recipient-name"
                                    placeholder="Enter Agent License No."
                                  />
                                  {/* {errors.emptyValidation && (
                      <span className="valid_text text-danger fw-bolder">{errors.emptyValidation}</span>
                    )} */}
                                </div>
                                <div className="mb-3 text-start">
                                  <label className="col-form-label text_color">
                                    Password
                                    <span className="text-danger">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="emptyValidation"
                                    // onChange={handleChange}
                                    id="recipient-name"
                                    placeholder="00-0000"
                                  />
                                  {/* {errors.emptyValidation && (
                      <span className="valid_text text-danger fw-bolder">{errors.emptyValidation}</span>
                    )} */}
                                </div>
                              </div>
                            </div>
                            <div className="row ms-1">
                              <div className="col-6 col-md-4 text-start">
                                <button
                                  type="button"
                                  className="final-button btn pl-1 pr-1 mb-4"
                                >
                                  Check Agent
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* modal/ */}
                    </div>
                  </div>
                  {/* agent on click */}
                  {/* agent onclick box// */}
                  {agentRadio == "agentservice" && (
                    <div className="row pb-2">
                      <div className="col-6 col-md-4">
                        <div className="mb-3  text-start">
                          <label className="text_color form-label">
                            Agent License Number
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            name="emptyValidation"
                            // onChange={handleChange}
                            className="form-control col-6"
                            placeholder="ENTER YOUR PASSPORT NO."
                          />
                          {/* {errors.emptyValidation && (
                      <span className="valid_text text-danger fw-bolder">{errors.emptyValidation}</span>
                    )} */}
                        </div>
                      </div>
                      <div className="col-6 col-md-4">
                        <div className="mb-3  text-start">
                          <label className="text_color form-label">
                            Name
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            name="emptyValidation"
                            // onChange={handleChange}
                            className="form-control col-6"
                            placeholder="ENTER YOUR PASSPORT NO."
                          />
                          {/* {errors.emptyValidation && (
                      <span className="valid_text text-danger fw-bolder">{errors.emptyValidation}</span>
                    )} */}
                        </div>
                      </div>
                      <div className="col-6 col-md-4 mt-2">
                        <div className="mb-3 pt-4 text-start">
                          <div
                            className="agent-information"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                          >
                            <button className="final-button btn pl-1 pr-1">
                              Edit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* agent on click */}
                </div>
              </div>

              {/* agent information testiog// */}
              {/* button// */}

              <div className="row">
                <div className="col-6 col-md-4 text-start">
                  <button
                    type="submit"
                    className="final-button btn  pl-1 pr-1 mb-4"
                    // onClick={submitHandler}
                  >
                    SUBMIT AND CONTINUE
                  </button>
                </div>
              </div>

              {/* button// */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
