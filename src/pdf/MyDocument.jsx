import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

import PdfPage1 from "./PdfPage1";
import PdfPage2 from "./PdfPage2";
import PdfPage3 from "./PdfPage3";
import PdfPage4 from "./PdfPage4";
import PdfPage5 from "./PdfPage5";
import PdfPage6 from "./PdfPage6";
import PdfPage7 from "./PdfPage7";
import PdfPage8 from "./PdfPage8";

// Create styles
const styles = StyleSheet.create({
  //container
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
});

// Create Document Component
const MyDocument = ({ id }) => {
 
  return (
    <Document style={styles.container} title="myanma_insurnace.pdf">
      <PdfPage1 id={id}/>
      <PdfPage2 />
      <PdfPage3 />
      <PdfPage4 />
      <PdfPage5 />
      <PdfPage6 />
      <PdfPage7 />
      <PdfPage8 />
    </Document>
  );
};

export default MyDocument;
