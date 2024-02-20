import React from "react";
import { Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import logo from "../images/MI-logo2.png";

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
});

const PdfPage5 = () => {
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
          <Text style={styles.p}>7. CANCELLATION OF THE INSURANCE</Text>
          <Text style={styles.p}>
            In the event the Insured cancels his/her application after the
            Company has issued the policy but prior to the effective date of the
            Policy, the Company shall refund the premium to the Insured after
            the deduction of cancellation administration fee; however, bank
            charges or any other charges or fees for the remittance of refund
            premium shall be incurred by the Insured. No refund shall be made
            after the effective date of the Policy or in the event the Insured
            returns home prior to the expiry of the Policy.
          </Text>
          <Text style={styles.p}>
            (i) Eligibility for Applying Refund Premium
          </Text>
          <Text style={styles.p}>
            - In the event of the rejection to the E-Visa application of the
            insured who has purchased the Inbound Travel Accident Insurance,
            refund premium shall be applied for within 14 days from the date of
            E-Visa rejection together with the evidence of E-Visa rejection.
          </Text>
          <Text style={styles.p}>
            - In the event that the premium is paid more than once by the
            insured or proposer for the same policy with the same insurance
            period, the refund premium shall be applied for together with the
            evidence.
          </Text>
          <Text style={styles.p}>
            - In no other circumstances except above two circumstances,Myanma
            Insurance shall be liable for the refund premium
          </Text>
          <Text style={styles.p}>
            - The refund supporting documents shall be submitted together with
            the following information:
          </Text>
          <Text style={styles.p}>Insured’s name</Text>
          <Text style={styles.p}>Passport</Text>
          <Text style={styles.p}>Debit/Credit Card</Text>
          <Text style={styles.p}>Original Payment Transaction Date</Text>
          <Text style={styles.p}>Original Payment Transaction Amount</Text>
          <Text style={styles.p}>Invoice Number</Text>

          <Text style={styles.p}>8. CURRENCY</Text>
          <Text style={styles.p}>
            The currency of the premium and any coverage amounts (benefits) will
            be in US Dollar. The Company accesses the claims. This Provision
            remain applicable unless there is a regulation to control the use of
            currency.
          </Text>

          <Text style={styles.p}>9. CONFIDENTIALITY</Text>
          <Text style={styles.p}>
            The Company shall keep all information to which Insured provided
            confidential either through filling the application form or via
            electronic communication.
          </Text>

          <Text style={styles.p}>10. DISAPPEARANCE</Text>
          <Text style={styles.p}>
            If during the period of cover and whilst on the insured Trip, an
            Insured disappears following the disappearance, sinking or wrecking
            of a conveyance in which they were traveling and their body has not
            been found within twelve (12) months after the date of
            disappearance, they will be deemed to have died as a result of an
            Accident at the time of disappearance, sinking or wrecking of the
            conveyance. If benefit under PERSONAL ACCIDENT BENEFITS is payable
            because of a disappearance, the Company will only pay provided the
            Insured’s beneficiary give the Company a signed undertaking that the
            amounts will be repaid to the Company if the Insured is subsequently
            found to be alive.
          </Text>

          <Text style={styles.p}>11. MEDICAL AUTHORIZATION</Text>
          <Text style={styles.p_txt}>
            The Appointed Assistance Company would repatriate the Insured only
            when medical authorization from the attending doctor and the
            Appointed Assistance Company medical advisors certify that a
            repatriation is necessary.
          </Text>

          <Text style={styles.h1}>SECTION III: EXCLUSIONS</Text>
          <Text style={styles.p}>ADDICTION/ INTOXICATION</Text>
          <Text style={styles.p}>
            Those claims derived from illnesses or pathological states caused by
            the voluntary consumption of alcohol, drugs, toxic substances,
            narcotics or medicines acquired without medical prescription, as
            well as any kind of mental illness or mental imbalance.
          </Text>

          <Text style={styles.p}>AERIAL ACTIVITIES</Text>
          <Text style={styles.p}>
            This Policy does not pay claims arising from flying or other aerial
            activity except as a fare paying passenger in a fully licensed
            aircraft operated by a licensed commercial air carrier or recognized
            charter company.
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

export default PdfPage5;
