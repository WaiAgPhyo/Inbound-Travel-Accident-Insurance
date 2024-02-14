import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";

export const ConfirmForm = () => {
  // const location = useLocation();
  // // const navigate = useNavigate();

  // const [items, setItem] = useState({});

  // useEffect(() => {
  //   if (location?.state) {
  //     setItem(location.state);
  //   }
  // }, [location]);

  return (
    <>
      <div className="bg-body-secondary">
        <div className="container text-start mt-6 bg-white shadow p-3 mb-5 bg-body-tertiary rounded">
          <div className="main-container">
            <h4 className="mt-4">
              PLEASE CHECK PAYMENT AND INSURED PERSON INFORMATION
            </h4>
            <div>
              <h5 className="mt-5">
                <u>PAYMENT INFORMATION</u>
              </h5>
              <div className="mt-5">
              <table class="table">
                <tr>
                  <th scope="row">Payment Channel</th>
                  <td className="col-sm-6">VISA</td>
                  
                </tr>
              </table>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
