import React from "react";
import { ImCross } from "react-icons/im";

export const PaymentReject = () => {
  return (
    <div>
      <div className="bg-body-secondary">
        <div className="container text-center mt-6 bg-white shadow p-5 mb-5 bg-body-tertiary rounded">
          <div>
            <h1>
              <ImCross className="reject_icon text-success pb-3" />
            </h1>
            <p>Your Payment is Rejected!</p>
          </div>
        </div>
      </div>
    </div>
  );
};
