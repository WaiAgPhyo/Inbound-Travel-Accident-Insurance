import React from "react";
import { Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import logo from "../images/MI-logo2.png";
import benefit from "../images/benefit.png";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
  },
  section: {
    width: "90%",
    margin: "0 auto",
  },
  logo: {
    width: "50px",
    position: "absolute",
    top: 20,
    right: 0,
  },
  body_txt: {
    top: 55,
  },
  h1: {
    fontSize: 10,
    marginBottom: 15,
  },
  p: {
    fontSize: 9,
    lineHeight: 1.5,
    marginBottom: 5,
  },
  p_txt: {
    fontSize: 9,
    lineHeight: 1.5,
    marginBottom: 15,
  },
  printDate: {
    position: "absolute",
    bottom: 0,
    right: 0,
    fontSize: 10,
    display: "flex",
    flexDirection: "row",
    marginBottom: 30,
  },
  benefit_img: {
    marginBottom: 10,
  },
});

const PdfPage8 = () => {
  // Get current date
  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Image src={logo} style={styles.logo}></Image>

        <View style={styles.body_txt}>
          <Text style={styles.h1}>SECTION V: BENEFITS</Text>
          <Image src={benefit} style={styles.benefit_img}></Image>
          <Text style={styles.p}>
            We hereby confirm that the Insured is covered for medical treatment
            expenses for accident,covid-19 and repatriation of dead body up to
            USD 50,000, subject to the terms & conditions and exclusions stated
            in the Policy issued by Myanma Insurance.Refund premium is subject
            to General Conditions and Provisions clause of No.7.Effective date
            refers to the date of premium payment or the date of arrival in
            Myanmar (after passing the immigration counter stationed at the
            arrival airport) whichever is later.
          </Text>
        </View>

        {/* print date */}
        <View style={styles.printDate}>
          <Text>Print Date </Text>
          <Text>: {currentDate}</Text>
        </View>
      </View>
    </Page>
  );
};

export default PdfPage8;
