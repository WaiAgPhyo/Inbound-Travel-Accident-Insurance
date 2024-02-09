import React from "react";
import { Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import logo from "../images/MI-logo2.png";
import benefit2 from "../images/benefit2.png";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
  },
  section: {
    width: "90%",
    margin: "0 auto",
  },
  header: {
    fontSize: 12,
    borderBottom: "1px",
    marginTop: 20,
    marginBottom: 10,
  },
  logo: {
    width: "50px",
    position: "absolute",
    top: 50,
    right: 0,
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
});

const PdfPage2 = () => {
   // Get current date
   const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        {/* Header */}
        <View style={styles.header}>
          <Text>INBOUND TRAVEL ACCIDENT INSURANCE</Text>
          <Text>POLICY TERMS AND CONDITIONS</Text>
        </View>

        <Image src={logo} style={styles.logo}></Image>

        {/* body text */}
        <View style={styles.body_txt}>
          <Text style={styles.h1}>SECTION I: COVERAGES</Text>
          <Text style={styles.h1}>1. DEFINITIONS</Text>
          <Text style={styles.p}>
            ACCIDENT/ACCIDENTAL refers sudden, unintended and unforeseen mishap
            caused by external, violent and visible means. INSURED refers to a
            natural person or legal entity that purchases an Insurance Policy,
            and in some cases, an insured can be a policy owner as well as an
            insured person.
          </Text>
          <Text style={styles.p}>
            EFFECTIVE DATE refers to the date of premium payment or the date of
            arrival in Myanmar(after passing immigration counter stationed at
            the arrival airport) whichever is later.
          </Text>
          <Text style={styles.p}>
            MEDICAL EXPENSE refers to the services fee that an Authorized
            Hospital or Medical Center charges Insured that are considered
            Normal and Customary while he/she is their Inpatient.
          </Text>
          <Text style={styles.p}>
            MEDICAL PRACTITIONER refers to a person who has a medical degree, is
            licensed or registered in the country which they operate and is
            accredited by a medical board or equivalent organization to render
            medical services, except of Family Members.
          </Text>
          <Text style={styles.p}>
            LOSS OF SIGHT refers to a physical condition where the Insured is
            completely blind and cannot be cured.
          </Text>
          <Text style={styles.p}>
            PERIOD OF INSURANCE refers to the period of cover shown in the
            Policy Schedule and/or Certificate of Insurance for which the
            appropriate premium has been paid.
          </Text>
          <Text style={styles.p}>
            PERMANENT DISABLEMENT refers to Injury which:
          </Text>
          <Text style={styles.p}>
            i. falls into one of the categories listed in the Scale of Permanent
            Disablement Benefits Table.
          </Text>
          <Text style={styles.p}>
            ii. having lasted for a continuous period of twelve (12) calendar
            months from the date of the Accident entirely prevents the Insured
            from engaging in gainful employment of any and every kind and from
            which there is no hope of improvement.
          </Text>
          <Text style={styles.p}>
            PREMIUM refers to the amount paid by an insured to an insurer under
            an Insurance Policy as consideration for the obligations assumed by
            the insurer.
          </Text>
          <Text style={styles.p}>
            REASONABLE AND CUSTOMARY CHARGES refer to charges or fees which are
            generally prevailing and of normal standard for the medical
            condition concerned in the country and city where the insured is
            treated.
          </Text>
          <Text style={styles.p}>THE COMPANY refers to Myanma Insurance.</Text>
          <Text style={styles.p}>
            TRAVELING ROUTE refers to the journey within the Republic of the
            Union of Myanmar.
          </Text>
          <Text style={styles.p}>
            TRIP refers to the period between the Commencement of Cover and
            Expiry of Cover.
          </Text>
          <Text style={styles.p_txt}>
            COVID-19 Coronavirus disease 2019 (COVID-19) is an infectious
            disease caused by severe acute respiratory syndrome coronavirus 2
            (SARS-CoV-2).
          </Text>

          <Text style={styles.h1}>2.SCOPE OF COVER</Text>
          <Text style={styles.p_txt}>PERSONAL ACCIDENT BENEFITS</Text>
          <Text style={styles.p}>• ACCIDENTAL DEATH</Text>
          <Text style={styles.p}>
            The Company will pay the sum insured as stated in the Schedule of
            Benefit, if the Insured sustained Accident during the Trip which
            results in Death within 90 days from the day the incident occurred.
          </Text>
          <Text style={styles.p}>• PERMANENT DISABLEMENT</Text>
          <Text style={styles.p}>
            The Company will pay the sum insured as stated in the Schedule of
            Benefit, if the Insured sustained Accident during the Trip which
            results in Permanent Disablement. The disablement must be certified
            by a Medical Practitioner.
          </Text>

          <Image src={benefit2}></Image>
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

export default PdfPage2;
