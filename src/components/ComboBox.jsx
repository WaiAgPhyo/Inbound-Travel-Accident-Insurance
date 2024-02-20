import React, { useState } from "react";
import { useEffect } from "react";
import Select from "react-select";

const ComboBox = ({ data, option, selection }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [options, setOptions] = useState([]);

  const handleChange = (e) => {
    setSelectedOption(e);
    option({ value: e.value, id: e.id });
  };

  const comboSearch = {
    control: (provided, state) => ({
      ...provided,
      minHeight: "36px", // Adjust height
    }),
    menu: (provided) => ({
      ...provided,
      width: "370px", // Adjust width based on selected option
      padding: "0 5px", // Remove padding
      margin: 0, // Remove margin
      borderRadius: 0,
    }),
    option: (provided, state) => ({
      ...provided,
      width: "370px",
      borderBottom: "1px solid black",
      backgroundColor: state.isSelected ? "skyblue" : "white",
      "&:hover": {
        backgroundColor: state.isSelected ? "skyblue" : "#eee", // Change background color on hover
      },
      "&:last-child": {
        borderBottom: "none",
      },
    }),
  };

  const customFilter = (option, searchText) => {
    if (!searchText) return true;
    return option.label.toLowerCase().startsWith(searchText.toLowerCase());
  };
  useEffect(() => {
    if (data && data.length > 0) {
      setOptions(
        data.map((item) => ({
          value: item.countryName,
          label: item.countryName,
          id: selection,
        }))
      );
    }
    // if (data && data.length > 0 && selection == "phNo") {
    //   setOptions(
    //     data.map((item) => ({
    //       value: item.countryCode,
    //       label: `(${item.countryCode}) ${item.countryName}`,
    //       id: selection,
    //     }))
    //   );
    // }
  }, [data]);
  return (
    <Select
      value={selectedOption}
      onChange={(e) => handleChange(e)}
      options={options}
      isSearchable
      placeholder="Search..."
      filterOption={customFilter}
      styles={comboSearch}
    />
  );
};

export default ComboBox;
