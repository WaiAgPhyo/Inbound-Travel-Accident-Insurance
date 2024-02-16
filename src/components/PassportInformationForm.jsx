import "./Main.css";
import agent from "./image/agent.png";
import self from "./image/self.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Validation } from "./validation";

export const PassportInformationForm = () => {
  // for radio
  const [option, setOption] = useState();
  const [agentRadio, setAgentRadio] = useState();

  // for date
  const [passportDate, setPassportDate] = useState();
  const [insureBirth, setInsureBirth] = useState();
  const [arrivalDate, setArrivalDate] = useState();
  const [childBirth, setChildBirth] = useState();
  const [beneBirth, setBeneBirth] = useState();

  const [userClick, setUserClick] = useState(false);
  const navigate = useNavigate();

  //  data store
  const [passportNum, setPassportNum] = useState("");
  const [passportCountry, setPassportCountry] = useState("");
  const [insureName, setInsureName] = useState("");
  const [insureGender, setInsureGender] = useState("");
  const [journeyFrom, setJourneyFrom] = useState("");
  const [coveragePlan, setCoveragePlan] = useState("");
  const [insurePh, setInsurePh] = useState("");
  const [insurePhCode, setInsurePhCode] = useState("");
  const [insureEmail, setInsureEmail] = useState("");
  const [insureAddress, setInsureAddress] = useState("");
  const [insureResAdd, setInsureResAdd] = useState("");
  const [insureResCountry, setInsureResCountry] = useState("");
  // child
  const [childName, setChildName] = useState("");
  const [childGender, setChildGender] = useState("");
  const [guardianceName, setGuardianceName] = useState("");
  const [childRelationship, setChildRelationShip] = useState("");
  // beneficary
  const [beneName, setBeneName] = useState("");
  const [beneIdenNum, setBeneIdenNum] = useState("");
  const [beneRelationship, setBeneRelationship] = useState("");
  const [benePhone, setBenePhone] = useState("");
  const [benePhCode, setBenePhCode] = useState("");
  const [beneEmail, setBeneEmail] = useState("");
  const [beneResAdd, setBeneResAdd] = useState("");
  const [beneResCountry, setBeneResCountry] = useState("");

  function submitHandler(e) {
    setUserClick(true);
    e.preventDefault();
    if (
      userClick &&
      passportNum &&
      passportDate &&
      passportCountry &&
      insureName &&
      insureBirth &&
      insureGender &&
      journeyFrom &&
      arrivalDate &&
      coveragePlan &&
      insurePh &&
      insurePhCode &&
      insureEmail &&
      insureAddress &&
      insureResAdd &&
      insureResCountry &&
      beneName &&
      beneIdenNum &&
      beneRelationship &&
      benePhone &&
      benePhCode &&
      beneEmail &&
      beneResAdd &&
      beneResCountry &&
      beneBirth &&
      !childBirth &&
      !childName &&
      !childGender &&
      !childRelationship &&
      !guardianceName
    ) {
      navigate("/confirm", {
        state: {
          passportIssuedDate: passportDate,
          passportNumber: passportNum,
          passportIssuedCountry: passportCountry,
          insureName: insureName,
          insureGender: insureGender,
          insureBirthDate: insureBirth,
          journeyFrom: journeyFrom,
          coveragePlan: coveragePlan,
          ArrivalDate: arrivalDate,
          insurePhoneNumber: insurePh,
          insurePhoneCode: insurePhCode,
          insureEmail: insureEmail,
          insureAddress: insureAddress,
          insureResidentAddress: insureResAdd,
          insureResidentCountry: insureResCountry,
          // childBirth: childBirth,
          // childName: childName,
          // childGender: childGender,
          // childGuardianceName: guardianceName,
          // childRelationship: childRelationship,
          beneficiaryName: beneName,
          beneficiaryBirth: beneBirth,
          beneficiaryIdenNumber: beneIdenNum,
          beneficiaryRelationship: beneRelationship,
          beneficiaryPhone: benePhone,
          beneficiaryPhoneCode: benePhCode,
          beneficiaryEmail: beneEmail,
          beneficiaryResidentAddress: beneResAdd,
          beneficiaryResidentCountry: beneResCountry,
        },
      });
    } else if (
      userClick &&
      passportNum &&
      passportDate &&
      passportCountry &&
      insureName &&
      insureBirth &&
      insureGender &&
      journeyFrom &&
      arrivalDate &&
      coveragePlan &&
      insurePh &&
      insurePhCode &&
      insureEmail &&
      insureAddress &&
      insureResAdd &&
      insureResCountry &&
      beneName &&
      beneIdenNum &&
      beneRelationship &&
      benePhone &&
      benePhCode &&
      beneEmail &&
      beneResAdd &&
      beneResCountry &&
      beneBirth &&
      childBirth &&
      childName &&
      childGender &&
      childRelationship &&
      guardianceName
    ) {
      navigate("/confirm", {
        state: {
          passportIssuedDate: passportDate,
          passportNumber: passportNum,
          passportIssuedCountry: passportCountry,
          insureName: insureName,
          insureGender: insureGender,
          insureBirthDate: insureBirth,
          journeyFrom: journeyFrom,
          coveragePlan: coveragePlan,
          ArrivalDate: arrivalDate,
          insurePhoneNumber: insurePh,
          insurePhoneCode: insurePhCode,
          insureEmail: insureEmail,
          insureAddress: insureAddress,
          insureResidentAddress: insureResAdd,
          insureResidentCountry: insureResCountry,
          childBirth: childBirth,
          childName: childName,
          childGender: childGender,
          childGuardianceName: guardianceName,
          childRelationship: childRelationship,
          beneficiaryName: beneName,
          beneficiaryBirth: beneBirth,
          beneficiaryIdenNumber: beneIdenNum,
          beneficiaryRelationship: beneRelationship,
          beneficiaryPhone: benePhone,
          beneficiaryPhoneCode: benePhCode,
          beneficiaryEmail: beneEmail,
          beneficiaryResidentAddress: beneResAdd,
          beneficiaryResidentCountry: beneResCountry,
        },
      });
    }
  }

  function editHandler(e){
    e.preventDefault()
  }

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
                      onChange={(e) => setPassportNum(e.target.value)}
                      className="form-control col-6"
                      placeholder="ENTER YOUR PASSPORT NO."
                    />
                    {userClick && !passportNum && <Validation />}

                
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
                      onChange={(e) => setPassportDate(e.target.value)}
                    />
                    {userClick && !passportDate && <Validation />}
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
                      onChange={(e) => setPassportCountry(e.target.value)}
                    >
                      <option value="">SELECT ONE</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    {userClick && !passportCountry && <Validation />}

                    
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
                      name="insureName"
                      className="form-control"
                      id="insureName"
                      placeholder="ENTER INSURED NAME"
                      onChange={(e) => setInsureName(e.target.value)}
                    />
                    {userClick && !insureName && <Validation />}

               
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
                      name="insureBirth"
                      className="form-control"
                      onChange={(e) => setInsureBirth(e.target.value)}
                    />
                    {userClick && !insureBirth && <Validation />}
                
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
                      onChange={(e) => setInsureGender(e.target.value)}
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option defaultValue="">SELECT ONE</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    {userClick && !insureGender && <Validation />}
                 
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
                      name="arrivalDate"
                      className="form-control"
                      onChange={(e) => setArrivalDate(e.target.value)}
                    />
                    {userClick && !arrivalDate && <Validation />}
             
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="mb-3  text-start">
                    <label className="text_color form-label">
                      Journey From
                      <span className="text-danger">*</span>
                    </label>
                    <select
                      name="journeyFrom"
                      onChange={(e) => setJourneyFrom(e.target.value)}
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option defaultValue="">SELECT ONE</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    {userClick && !journeyFrom && <Validation />}
                   
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
                      name="journeyTo"
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
                      onChange={(e) => setCoveragePlan(e.target.value)}
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option defaultValue="">SELECT ONE</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    {userClick && !coveragePlan && <Validation />}
                 
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="mb-3  text-start">
                    <label className="form-label text_color">
                      Insured's Contact Phone Number
                      <span className="text-danger">*</span>
                    </label>
                    <div className="input-group mb-3">
                      <select
                        className="col-sm-3 border border-light-subtle"
                        onChange={(e) => setInsurePhCode(e.target.value)}
                      >
                        <option hidden>SELECT</option>
                        <option value="+95">+95</option>
                      </select>
                      <input
                        type="text"
                        name="insurePh"
                        onChange={(e) => setInsurePh(e.target.value)}
                        className="form-control"
                        aria-label="Text input with segmented dropdown button"
                      />
                    </div>
                    {userClick && !insurePh && <Validation />}
                  
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="mb-3  text-start">
                    <label className="form-label text_color">
                      Insured's Email
                    </label>
                    <input
                      name="insureEmail"
                      type="text"
                      className="form-control"
                      id="passportno"
                      placeholder="Insured's Email Address"
                      onChange={(e) => setInsureEmail(e.target.value)}
                    />
                    {userClick && !insureEmail && <Validation />}
                  
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
                    name="myanmarAdd"
                      className="form-control"
                      rows="4"
                      placeholder="..."
                      onChange={(e) => setInsureAddress(e.target.value)}
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
                      name="residentAdd"
                      className="form-control"
                      rows="4"
                      placeholder="..."
                      maxLength="250"
                      onChange={(e) => setInsureResAdd(e.target.value)}
                    />
                    {userClick && !insureResAdd && <Validation />}
                
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="mb-3  text-start">
                    <label className="text_color form-label">
                      Resident Country
                      <span className="text-danger">*</span>
                    </label>
                    <select
                      name="residentCountry"
                      className="form-select"
                      onChange={(e) => setInsureResCountry(e.target.value)}
                      aria-label="Default select example"
                    >
                      <option defaultValue="">SELECT ONE</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    {userClick && !insureResCountry && <Validation />}
                
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
                            name="childName"
                            type="text"
                            className="form-control col-6"
                            placeholder="ENTER CHILD NAME"
                            onChange={(e) => setChildName(e.target.value)}
                          />
                          {userClick && !childName && <Validation />}
                    
                        </div>
                      </div>
                      <div className="col-6 col-md-4">
                        <div className="mb-3 text-start">
                          <label className="text_color form-label">
                            Date of Birth
                            <span className="text-danger">*</span>
                          </label>

                          <input
                            type="date"
                            name="childBirth"
                            className="form-control"
                            onChange={(e) => setChildBirth(e.target.value)}
                          />
                          {userClick && !childBirth && <Validation />}
                        
                        </div>
                      </div>
                      <div className="col-6 col-md-4">
                        <div className="mb-3  text-start">
                          <label className="text_color form-label">
                            Gender
                            <span className="text-danger">*</span>
                          </label>
                          <select
                            name="childGender"
                            onChange={(e) => setChildGender(e.target.value)}
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option defaultValue="">SELECT ONE</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                          {userClick && !childGender && <Validation />}
                      
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
                            name="guardiance"
                            onChange={(e) => setGuardianceName(e.target.value)}
                            type="text"
                            className="form-control col-6"
                            placeholder="ENTER GUARDIANCE NAME"
                          />
                          {userClick && !guardianceName && <Validation />}
                      
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
                            name="childRelation"
                            onChange={(e) =>
                              setChildRelationShip(e.target.value)
                            }
                            className="form-control col-6"
                            placeholder="ENTER RELATIONSHIP"
                          />
                          {userClick && !childRelationship && <Validation />}
                        
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
                      name="beneName"
                      onChange={(e) => setBeneName(e.target.value)}
                      className="form-control"
                      id="passportno"
                      placeholder="ENTER NAME"
                    />
                    {userClick && !beneName && <Validation />}
                 
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
                      name="beneBirth"
                      onChange={(e) => setBeneBirth(e.target.value)}
                      className="form-control"
                      id="passportissueddate"
                    />
                    {userClick && !beneBirth && <Validation />}
                  
                  </div>
                </div>

                <div className="col-6 col-md-4">
                  <div className="mb-3  text-start">
                    <label className="form-label text_color">
                      National Identificaiton Number
                    </label>
                    <input
                      name="beneIdenNum"
                      type="text"
                      className="form-control"
                      id="passportno"
                      onChange={(e) => setBeneIdenNum(e.target.value)}
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
                      name="beneRelation"
                      onChange={(e) => setBeneRelationship(e.target.value)}
                      className="form-control"
                      id="passportno"
                      placeholder="ENTER RELATIONSHIP"
                    />
                    {userClick && !beneRelationship && <Validation />}
                   
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="mb-3  text-start">
                    <label className="form-label text_color">
                      Contact Phone Number
                      <span className="text-danger">*</span>
                    </label>
                    <div className="input-group mb-3">
                      <select
                        className="col-sm-3 border border-light-subtle"
                        onChange={(e) => setBenePhCode(e.target.value)}
                      >
                        <option hidden>SELECT</option>
                        <option value="+95">+95</option>
                      </select>
                      <input
                        type="text"
                        name="benePh"
                        onChange={(e) => setBenePhone(e.target.value)}
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
                      name="beneEmail"
                      onChange={(e) => setBeneEmail(e.target.value)}
                      className="form-control"
                      id="passportno"
                      placeholder="Enter Email"
                    />
                    {userClick && !beneEmail && <Validation />}
                  
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
                      name="beneResAdd"
                      onChange={(e) => setBeneResAdd(e.target.value)}
                      className="form-control"
                      rows="4"
                      placeholder="..."
                    />
                    {userClick && !beneResAdd && <Validation />}
                
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="mb-3  text-start">
                    <label className="text_color form-label">
                      Resident Country
                      <span className="text-danger">*</span>
                    </label>
                    <select
                      name="beneResCountry"
                      onChange={(e) => setBeneResCountry(e.target.value)}
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option defaultValue="">SELECT ONE</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    {userClick && !beneResCountry && <Validation />}
                   
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
                                    className="form-control"
                                    id="recipient-name"
                                    placeholder="Enter Agent License No."
                                  />
                                  
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
                                    id="recipient-name"
                                    placeholder="00-0000"
                                  />
                    
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
                            name="agentLicNum"                       
                            className="form-control col-6"
                            placeholder="ENTER YOUR PASSPORT NO."
                          />
                         
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
                            name="agentName"
                            className="form-control col-6"
                            placeholder="ENTER YOUR PASSPORT NO."
                          />
                        
                        </div>
                      </div>
                      <div className="col-6 col-md-4 mt-2">
                        <div className="mb-3 pt-4 text-start">
                          <div
                            className="agent-information"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                          >
                            <button className="final-button btn pl-1 pr-1" onClick={(e)=>editHandler(e)}>
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
                    className="final-button btn  pl-1 pr-1 mb-4"
                    onClick={(e) => submitHandler(e)}
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
