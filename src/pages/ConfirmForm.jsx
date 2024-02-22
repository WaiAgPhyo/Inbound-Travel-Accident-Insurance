import React from "react";
import "../components/Main.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "bootstrap";
import axios from "axios";

export const ConfirmForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [res, setRes] = useState();
  const [items, setItem] = useState({});
  const [returndata, setReturnData] = useState({});

  useEffect(() => {
    if (location?.state) {
      setItem(location.state);
    }
  }, [location]);

  function posting() {
    axios
      .post("http://localhost:8080/api/v1/inboundProposal", items)
      .then((res) => {
        setRes(res.status);
        setReturnData(res.data.data);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    if (res === 201) {
      navigate("/success", { state: { returndata, payment: items.payment } });
    }
  }, [res]);

  return (
    <>
      <div className="bg-body-secondary">
        <div className="container text-start mt-6 bg-white shadow p-3 mb-5 bg-body-tertiary rounded">
          <div className="main-container">
            <h4 className="mt-4 text_color">
              PLEASE CHECK PAYMENT AND INSURED PERSON INFORMATION
            </h4>
            <div>
              <h5 className="mt-5 text_color">
                <u>PAYMENT INFORMATION</u>
              </h5>
              {/* payment information */}
              <div className="mt-4">
                <div className="row p-2 mb-1 payment">
                  <div className="col fw-semibold">Payment Channel</div>
                  <div className="col-sm-7">{items.payment}</div>
                </div>
                <div className="row payment p-2 mb-1">
                  <div className="col fw-semibold">Premium Amount</div>
                  <div className="col-sm-7">{items.premiumrate} USD</div>
                </div>
                <div className="row payment p-2 mb-1">
                  <div className="col fw-semibold">Service Charge</div>
                  <div className="col-sm-7">15.2 USD</div>
                </div>
                <div className="row payment p-2 mb-1">
                  <div className="col fw-semibold">
                    Total Amount (Including Service Charges)
                  </div>
                  <div className="col-sm-7">{items.premiumrate + 15.2} USD</div>
                </div>
                <div className="row payment p-2 mb-1">
                  <div className="col fw-semibold">
                    Net Amount (Including Service Charges)
                  </div>
                  <div className="col-sm-7">{items.premiumrate + 15.2} USD</div>
                </div>
                {/* payment information */}

                {/* INSURED PERSON'S PASSPORT INFORMATION */}
                <div className="mt-5">
                  <h5 className="text_color">
                    <u>INSURED PERSON'S PASSPORT INFORMATION</u>
                  </h5>

                  <div className="row p-2 mt-4 border-bottom">
                    <div className="col fw-semibold">Passport Number</div>
                    <div className="col-sm-7">{items.passportNumber}</div>
                  </div>
                  <div className="row p-2 border-bottom">
                    <div className="col fw-semibold">Passport Issued Date</div>
                    <div className="col-sm-7">{items.passportIssuedDate}</div>
                  </div>
                  <div className="row p-2 border-bottom">
                    <div className="col fw-semibold">
                      Passport Issued Country
                    </div>
                    <div className="col-sm-7">
                      {items.passportIssuedCountry}
                    </div>
                  </div>
                </div>

                {/* INSURED PERSON'S PASSPORT INFORMATION */}

                {/* INSURED PERSON INFORMATION */}
                <h5 className="mt-5 text_color">
                  <u>INSURED PERSON INFORMATION</u>
                </h5>

                <div className="row p-2 mt-4 border-bottom">
                  <div className="col fw-semibold">Insured For</div>
                  <div className="col-sm-7">
                    {items.isChild == "true"
                      ? "Insured For This Policy Holder's Child"
                      : "Insured For This Poilcy Holder "}
                  </div>
                </div>
                <div className="row p-2 border-bottom">
                  <div className="col fw-semibold">Name (as per passport)</div>
                  <div className="col-sm-7">{items.insuredPersonName}</div>
                </div>
                <div className="row p-2 border-bottom">
                  <div className="col fw-semibold">
                    Date of Birth (as per passport)
                  </div>
                  <div className="col-sm-7">{items.insuredPersonDOB}</div>
                </div>
                <div className="row p-2 border-bottom">
                  <div className="col fw-semibold">
                    Gender (as per passport)
                  </div>
                  <div className="col-sm-7">{items.insuredPersonGender}</div>
                </div>
                <div className="row p-2 border-bottom">
                  <div className="col fw-semibold">Estimated Arrival Date</div>
                  <div className="col-sm-7">{items.estimateArrivalDate}</div>
                </div>
                {items.childName && (
                  <div className="row p-2 border-bottom">
                    <div className="col fw-semibold">Child Name</div>
                    <div className="col-sm-7">{items.childName}</div>
                  </div>
                )}
                {items.childBirth && (
                  <div className="row p-2 border-bottom">
                    <div className="col fw-semibold">Date of Birth (Child)</div>
                    <div className="col-sm-7">{items.childDOB}</div>
                  </div>
                )}
                {items.childGender && (
                  <div className="row p-2 border-bottom">
                    <div className="col fw-semibold">Gender (Child)</div>
                    <div className="col-sm-7">{items.childGender}</div>
                  </div>
                )}
                {items.childGuardianceName && (
                  <div className="row p-2 border-bottom">
                    <div className="col fw-semibold">
                      Guardiance Name (Child)
                    </div>
                    <div className="col-sm-7">{items.guardianceName}</div>
                  </div>
                )}
                {items.childRelationship && (
                  <div className="row p-2 border-bottom">
                    <div className="col fw-semibold">Relationship (Child)</div>
                    <div className="col-sm-7">{items.childRelationship}</div>
                  </div>
                )}

                <div className="row p-2 border-bottom">
                  <div className="col fw-semibold">Journey From</div>
                  <div className="col-sm-7">{items.journeyFrom}</div>
                </div>
                <div className="row p-2 border-bottom">
                  <div className="col fw-semibold">Journey To</div>
                  <div className="col-sm-7">Myanmar</div>
                </div>
                <div className="row p-2 border-bottom">
                  <div className="col fw-semibold">Coverage Plan</div>
                  <div className="col-sm-7">{items.coveragePlan}</div>
                </div>
                <div className="row p-2 border-bottom">
                  <div className="col fw-semibold">Contact Phone Number</div>
                  <div className="col-sm-7">
                    {items.insuredPersonPhoneNumber}
                  </div>
                </div>
                <div className="row p-2 border-bottom">
                  <div className="col fw-semibold">Email Address</div>
                  <div className="col-sm-7">{items.insuredPersonEmail}</div>
                </div>
                <div className="row p-2 border-bottom">
                  <div className="col fw-semibold">Resident Address</div>
                  <div className="col-sm-7">
                    {items.insuredPersonResidentAddress}
                  </div>
                </div>
                <div className="row p-2 border-bottom">
                  <div className="col fw-semibold">Resident Country</div>
                  <div className="col-sm-7">
                    {items.insuredPersonResidentCountry}
                  </div>
                </div>
                <div className="row p-2 border-bottom">
                  <div className="col fw-semibold">Address in Myanmar</div>
                  <div className="col-sm-7">
                    {items.insuredPersonAddressMyanmar}
                  </div>
                </div>
                {/* INSURED PERSON INFORMATION */}

                <h5 className="mt-5 text_color">
                  <u>BENEFICIARY INFORMATION</u>
                </h5>
                {/* BENEFICIARY INFORMATION */}
                <div className="row p-2 mt-4 border-bottom">
                  <div className="col fw-semibold">Name</div>
                  <div className="col-sm-7">{items.beneficiaryName}</div>
                </div>
                <div className="row p-2 border-bottom">
                  <div className="col fw-semibold">Date of Birth</div>
                  <div className="col-sm-7">{items.beneficiaryDOB}</div>
                </div>
                <div className="row p-2 border-bottom">
                  <div className="col fw-semibold">
                    National Identification Number
                  </div>
                  <div className="col-sm-7">{items.beneficiaryNRC}</div>
                </div>
                <div className="row p-2 border-bottom">
                  <div className="col fw-semibold">Relationship</div>
                  <div className="col-sm-7">
                    {items.beneficiaryRelationship}
                  </div>
                </div>
                <div className="row p-2 border-bottom">
                  <div className="col fw-semibold">Contact Number</div>
                  <div className="col-sm-7">{items.beneficiaryPhoneNumber}</div>
                </div>
                <div className="row p-2 border-bottom">
                  <div className="col fw-semibold">Email</div>
                  <div className="col-sm-7">{items.beneficiaryEmail}</div>
                </div>
                <div className="row p-2 border-bottom">
                  <div className="col fw-semibold">Resident Address</div>
                  <div className="col-sm-7">
                    {items.beneficiaryResidentAddress}
                  </div>
                </div>
                <div className="row p-2 border-bottom">
                  <div className="col fw-semibold">Resident Country</div>
                  <div className="col-sm-7">
                    {items.beneficiaryResidentCountry}
                  </div>
                </div>
                {/* BENEFICIARY INFORMATION */}

                <div className="row mt-3">
                  <div className="col-6 col-md-4 text-start">
                    <button
                      className="final-button btn  pl-1 pr-1 mb-4"
                      onClick={posting}
                    >
                      CONFIRM
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
