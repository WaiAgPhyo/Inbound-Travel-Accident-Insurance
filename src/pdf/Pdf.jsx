import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "../pages/MyDocument";

const Pdf = () => {
  return (
    <div style={{ width: "80%", height: "100vh", margin: "0 auto" }} id="root">
      <PDFViewer width={"100%"} height={"100%"}>
        <MyDocument />
      </PDFViewer>
    </div>
  );
};

export default Pdf;
