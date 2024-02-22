import React, { useEffect, useState } from "react";
import { Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import logo from "../images/MI-logo2.png";
import benefit from "../images/benefit.png";
import qr from "../images/QR.png";
import axios from "axios";
import { error } from "jquery";
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
  },
  section: {
    width: "90%",
    margin: "0 auto",
  },
  //header
  header: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: -20,
  },
  topic: {
    fontSize: 14,
    alignItems: "center",
    marginTop: 30,
  },
  firstTopic: {
    fontSize: 12,
  },
  logo: {
    width: "80px",
    marginTop: -30,
  },
  content: {
    fontSize: 8,
  },
  certificate: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 30,
  },
  information: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  col_information: {
    fontSize: 10,
  },
  sub_info: {
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
  },
  caption: {
    width: "100px",
  },
  txt: {
    fontSize: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  insure_info: {
    display: "flex",
    marginBottom: 10,
  },
  insure_caption: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  insure_name: {
    border: "1px",
    fontSize: 10,
    width: "20%",
    padding: 10,
    borderLeft: 0,
    textAlign: "center",
    backgroundColor: "#A9CCE3",
  },
  insure_name_left: {
    border: "1px",
    width: "20%",
    fontSize: 10,
    padding: 10,
    textAlign: "center",
    backgroundColor: "#A9CCE3",
  },
  insure_name_border: {
    border: "1px",
    fontSize: 10,
    width: "20%",
    padding: 10,
    borderTop: 0,
    borderLeft: 0,
    textAlign: "center",
  },
  insure_name_border_left: {
    border: "1px",
    fontSize: 10,
    width: "20%",
    padding: 10,
    borderTop: 0,
    textAlign: "center",
  },
  benefit_txt: {
    fontSize: 10,
    fontWeight: 800,
    borderBottom: "2px",
  },
  benefit_img: {
    marginBottom: 10,
  },
  print: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 40,
  },
  date: {
    fontSize: 10,
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
  },
});

const PdfPage1 = ({ id }) => {
  const [data, setData] = useState();
  const [age, setAge] = useState();
  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/api/v1/inboundProposal/findByCertificateId?id=${id}`
      )
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (data?.insuredPerson.insuredPersonDOB) {
      const [day, month, year] = !data?.insuredPerson.child
      ? data?.insuredPerson.insuredPersonDOB.split("-").map(Number)
      : data?.childDOB.split("-").map(Number);
      const birthDateObj = new Date(year, month - 1, day);
      const currentDate = new Date();
      const ageDiffMs = currentDate - birthDateObj;
      const ageDate = new Date(ageDiffMs);
      const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);

      setAge(calculatedAge);
    }
  }, [data]);

  // Get current date
  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        {/* header */}
        <View style={styles.topic}>
          <Text style={styles.firstTopic}>
            Ministry of Planning and Finance
          </Text>
          <Text>Myanma Insurance</Text>
        </View>

        <View style={styles.header}>
          <Image src={logo} style={styles.logo}></Image>
          <View style={styles.content}>
            <Text>Phone No : 01 8386919</Text>
            <Text>Email : lifere1-mi@mminsurance.gov.mm</Text>
          </View>
        </View>

        <Text style={styles.certificate}>
          Certificate of Insurance - Inbound Travel Accident Insurance
        </Text>
        {/* Body */}
        <View style={styles.information}>
          <View style={styles.col_information}>
            <View style={styles.sub_info}>
              <Text style={styles.caption}>Insurance Period </Text>
              <Text>: {data?.coveragePlan} Days</Text>
            </View>
            <View style={styles.sub_info}>
              <Text style={styles.caption}>Certificate Number </Text>
              <Text>: {data?.certificateID}</Text>
            </View>
            <View style={styles.sub_info}>
              <Text style={styles.caption}>Agent/Agency name </Text>
              <Text>: [N/A]</Text>
            </View>
            <View style={styles.sub_info}>
              <Text style={styles.caption}>Policy Holder </Text>
              <Text>: {data?.insuredPerson.insuredPersonName}</Text>
            </View>
            <View style={styles.sub_info}>
              <Text style={styles.caption}>Covid-19 coverage </Text>
              <Text>: Yes</Text>
            </View>
          </View>
          <View style={styles.col_information}>
            <View style={styles.sub_info}>
              <Text style={styles.caption}>Benefits </Text>
              <Text>: As per benefit table</Text>
            </View>
            <View style={styles.sub_info}>
              <Text style={styles.caption}>Journey from </Text>
              <Text>: {data?.journeyFrom}</Text>
            </View>
            <View style={styles.sub_info}>
              <Text style={styles.caption}>PP/Country </Text>
              <Text>
                :{data?.insuredPerson.passportNumber}{" "}
                {data?.insuredPerson.passportIssuedCountry}
              </Text>
            </View>
            <View style={styles.sub_info}>
              <Text style={styles.caption}>Payment Date </Text>
              <Text>: 25 Jan 2023</Text>
            </View>
            <View style={styles.sub_info}>
              <Text style={styles.caption}>Payment Ref No </Text>
              <Text>: null</Text>
            </View>
          </View>
        </View>
        <Text style={styles.content}>
          {data?.child
            ? "Buy for Child (This passport holder's child)"
            : "Buy for yourself (This passport holder)"}
        </Text>

        {/* Insured Person Info Table */}
        <Text style={styles.txt}>
          This Certificate of Insurance confirms coverage for :
        </Text>
        <View style={styles.insure_info}>
          <View style={styles.insure_caption}>
            <View style={styles.insure_name_left}>
              <Text>Insured's Name</Text>
            </View>
            <View style={styles.insure_name}>
              <Text>Date of birth</Text>
            </View>
            <View style={styles.insure_name}>
              <Text>Age</Text>
            </View>
            <View style={styles.insure_name}>
              <Text>Insurance Period</Text>
            </View>
            <View style={styles.insure_name}>
              <Text>Passport No</Text>
            </View>
          </View>

          <View style={styles.insure_caption}>
            <View style={styles.insure_name_border_left}>
              <Text>
                {!data?.insuredPerson.child
                  ? data?.insuredPerson.insuredPersonName
                  : data?.childName}
              </Text>
            </View>
            <View style={styles.insure_name_border}>
              <Text>
                {!data?.insuredPerson.child
                  ? data?.insuredPerson.insuredPersonDOB
                  : data?.childDOB}
              </Text>
            </View>
            <View style={styles.insure_name_border}>
              <Text>{age}</Text>
            </View>
            <View style={styles.insure_name_border}>
              <Text>{data?.coveragePlan} Days</Text>
            </View>
            <View style={styles.insure_name_border}>
              <Text>
                {data?.insuredPerson.passportNumber}{" "}
                {data?.insuredPerson.passportIssuedCountry}
              </Text>
            </View>
          </View>
        </View>

        {/* Table of Benefit */}
        <Image src={benefit} style={styles.benefit_img}></Image>
        <View style={styles.benefit_txt}>
          <Text style={styles.benefit_img}>
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

        {/* Print Date */}

        <View style={styles.print}>
          <Image src={qr} style={styles.logo}></Image>
          <View style={styles.date}>
            <Text>Print Date </Text>
            <Text>: {currentDate}</Text>
          </View>
        </View>
      </View>
    </Page>
  );
};

export default PdfPage1;
