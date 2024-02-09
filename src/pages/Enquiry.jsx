import React from "react";

const Enquiry = () => {
  return (
    <>
      <div>
        <div className="items-center w-[90%] mx-auto">
          <h3 className="text-[#074DA1] font-semibold mb-5 text-[24px] uppercase size-full text-center">
            Contact Phone Number
          </h3>

          <div className="bg-[#FFFFFF] shadow-lg px-10 py-10 mb-20">
            <div className="flex-row flex justify-between">
              <div className="w-[48%] flex flex-col mb-[20px]">
                <label
                  htmlFor="passportNumber"
                  className="text-[#074DA1] font-semibold mb-5"
                >
                  Passport Number <span className="text-[red]">*</span>
                </label>
                <input
                  type="text"
                  placeholder=". . ."
                  className="border border-gray-400 rounded-md px-[5px] py-[10px]"
                />
              </div>
              <div className="w-[48%] flex flex-col">
                <label
                  htmlFor="passportNumber"
                  className="text-[#074DA1] font-semibold mb-5"
                >
                  Passport Issued Country <span className="text-[red]">*</span>
                </label>
                <select
                  type="text"
                  name="passportCountry"
                  className="border border-gray-400 rounded-md px-[5px] py-[11px] bg-[#ffffff]"
                >
                  <option hidden>SELECT ONE</option>
                  <option value="">SELECT ONE</option>
                  <option value="">SELECT TWO</option>
                  <option value="">SELECT THREE</option>
                </select>
              </div>
            </div>
            <button className="bg-[#074DA1] w-[120px] p-[8px] rounded-sm text-[#ffffff] hover:text-[#074DA1] hover:bg-[#FFFFFF] hover:border-[#074DA1] hover:border duration-500">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enquiry;
