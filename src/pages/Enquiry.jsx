import React, { useEffect, useState } from "react";
import "./enquiry.css";
import axios from "axios";
import ComboBox from "../components/ComboBox";
import PdfOverlay from "../pdf/PdfOverlay";

const Enquiry = () => {
  const [countrydata, setCountryData] = useState([]);
  const [searchcountry, setSearchCountry] = useState();
  const [searchnum, setSearchNum] = useState();
  const [pdfdata, setPdfData] = useState([]);
  const [age, setAge] = useState();
  const [showmodal, setShowModal] = useState(null);

  function back(value) {
    setShowModal(value);
  }

  function showHandler(id) {
    setShowModal(id);
  }
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/country")
      .then((data) => setCountryData(data.data.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (countrydata) {
      const sortedCountries = [...countrydata].sort((a, b) =>
        a.countryName.localeCompare(b.countryName)
      );
      setCountryData(sortedCountries);
    }
  }, []);

  function selectedoption(V) {
    if (V.id == "country") {
      setSearchCountry(V.value);
    }
  }

  const searchHandler = () => {
    axios
      .get(
        `http://localhost:8080/api/v1/inboundProposal/searchEnquiry?passportNo=${searchnum}&issuedCountry=${searchcountry}`
      )
      .then((res) => setPdfData(res.data.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    pdfdata.map((item) => {
      if (item?.insuredPerson.insuredPersonDOB) {
        const [day, month, year] = !item?.insuredPerson.child
          ? item?.insuredPerson.insuredPersonDOB.split("-").map(Number)
          : item?.childDOB.split("-").map(Number);
        const birthDateObj = new Date(year, month - 1, day);
        const currentDate = new Date();
        const ageDiffMs = currentDate - birthDateObj;
        const ageDate = new Date(ageDiffMs);
        const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);

        setAge(calculatedAge);
      }
    });
  }, [pdfdata]);
  return (
    <>
      <div className="enquiry-container">
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
                  onChange={(e) => setSearchNum(e.target.value)}
                />
              </div>
              <div className="category">
                <label htmlFor="passportNumber" className="category-txt">
                  Passport Issued Country <span className="star">*</span>
                </label>
                <ComboBox
                  data={countrydata}
                  option={selectedoption}
                  selection="country"
                />
              </div>
            </div>
            <button className="search-btn" onClick={searchHandler}>
              Search
            </button>

            <div className="pdf_bloc">
              {pdfdata.map((item, index) => (
                <div className="pdf_table" key={index}>
                  <div className="pdf_contents">
                    <div className="pdf_row pdf-row-color">
                      <p>Insured's Name</p>
                      <p>Date of Birth</p>
                      <p>Age</p>
                      <p>Insurance Period</p>
                      <p>Passport No</p>
                    </div>
                    <div className="pdf_row pdf_row--bottom">
                      <p>
                        {item.insuredPerson.child
                          ? item.childName
                          : item.insuredPerson.insuredPersonName}
                      </p>
                      <p>
                        {item.insuredPerson.child
                          ? item.childDOB
                          : item.insuredPerson.insuredPersonDOB}
                      </p>
                      <p>{age}</p>
                      <p>{item?.coveragePlan}</p>
                      <p>
                        {item?.insuredPerson.passportNumber}
                        {" / "}
                        {item?.insuredPerson.passportIssuedCountry}
                      </p>
                    </div>
                  </div>
                  <div className="pdf_downloadbtn">
                    <button onClick={() => showHandler(item?.certificateNo)}>
                      Download Here!
                    </button>
                  </div>
                </div>
              ))}
              {showmodal && <PdfOverlay back={back} id={showmodal} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enquiry;
