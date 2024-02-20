import React from "react";
import MyDocument from "./MyDocument";
import { PDFViewer } from "@react-pdf/renderer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const PdfOverlay = ({ back , id }) => {
  function backHandler() {
    back(false);
  }
  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        position: "fixed",
        zIndex: 200,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      id="root"
    >
      <div style={{ width: "80%", height: "100%", display: "flex" }}>
        <PDFViewer width={"100%"} height={"100%"}>
          <MyDocument id={id}/>
        </PDFViewer>

        <FontAwesomeIcon
          icon={faXmark}
          style={{
            backgroundColor: "#074da1",
            padding: "15px 17px",
            borderRadius: "50%",
            fontSize: "20px",
            color: "white",
            margin: "5px",
          }}
          onClick={backHandler}
        />
      </div>
    </div>
  );
};

export default PdfOverlay;
