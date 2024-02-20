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

const PdfPage7 = () => {
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
          <Text style={styles.p}>SONIC BANGS</Text>
          <Text style={styles.p}>
            Loss, destruction or damage directly occasioned by pressure waves
            caused by aircraft and other aerial devices travelling at sonic or
            supersonic speeds.
          </Text>

          <Text style={styles.p}>SUICIDE</Text>
          <Text style={styles.p}>
            This Insurance does not cover suicide or attempting to commit
            suicide, self-inflicted accidents, attempting to cause accidents to
            him/herself or arranging for any third party to undertake such an
            act.
          </Text>

          <Text style={styles.p}>TOUR OPERATOR & AIRLINE FAILURE</Text>
          <Text style={styles.p}>
            Any claim that results from the tour operator, airline or any other
            company, firm or person not being able or not being willing to carry
            out any part of their obligation to the Insured.
          </Text>

          <Text style={styles.p}>TRAVELLING AGAINST WHO ADVICE</Text>
          <Text style={styles.p}>
            The Insured travel to a specific area or event when the World Health
            Organization (WHO) or regulatory authority in the country to/from
            which you are travelling has advised against all, or all but
            essential travel.
          </Text>

          <Text style={styles.p}>WAR/ TERRORISM</Text>
          <Text style={styles.p}>
            Any accidents or treatment arising from war (whether it is announced
            or not), invasion or execution by foreign enemy, Civil War,
            Revolution, Rebellions, Demonstrations against the government, Riot,
            Strike, Calamity or any political unrest having to announce martial
            law to control the situation, including Terrorism.
          </Text>

          <Text style={styles.p}>NATURAL PHENOMENA</Text>
          <Text style={styles.p_txt}>
            Extraordinary natural phenomena such as floods, earthquakes,
            landslides, volcanic eruptions, atypical cyclonic storms, falling
            objects from space and aerolites, and in general any extraordinary
            atmospheric, meteorological, seismic or geological phenomenon.
          </Text>

          <Text style={styles.h1}>SECTION IV: CLAIM PROCEDURE</Text>

          <Text style={styles.p}>1. CLAIM</Text>
          <Text style={styles.p}>
            In the event of any occurrence which may give rise to a claim for
            indemnity under this Policy, the Insured or the authorized Hospital
            or Medical Center (or the Insured’s beneficiary in case of death)
            shall:
          </Text>
          <Text style={styles.p}>
            (a) give notice to the Company in writing with full details within
            30 consecutive days after the completion of the Trip or 24
            consecutive hours from the date of Accident in the case of death or
            disablement if practicable,
          </Text>
          <Text style={styles.p}>
            (b) give the Company at his/her or authorized Hospital’s / Medical
            Centre’s own expense, all medical evidence, certificates, reports,
            original receipts, proof of ownership, documentation and any other
            evidence, verified by authorized person, which the Company may
            require from the Insured to support his/her claim.
          </Text>
          <Text style={styles.p}>
            In the event of an Emergency, Serious Accident, please call the
            24-hours the Company’s helpline number shown on the Certificate of
            Insurance, The Company’s website, or Claim Form. The Insured shall
            provide his/her name, policy number and details of his/her Accident,
            contact details of his/her attending doctor, his/her present
            location and how he/she can be contacted.
          </Text>

          <Text style={styles.p}>2. LEGAL PROCEEDINGS</Text>
          <Text style={styles.p}>
            No action at law or in equity shall be brought under this Policy
            against the Company prior to the expiration of 60 days after the
            proof of claim has been filed in accordance with the requirements of
            this Policy nor shall such action be brought at all unless it is
            brought within 2 years from the expiration of the period within
            which proof of claim is required under this Policy. If the Company
            shall disclaim liability for any claim under this Policy and no
            action has within five (5) calendar months from the date of such
            disclaimer been commenced against The Company, then the claim shall
            for all purposes be deemed to have been abandoned and shall not
            thereafter be recoverable.
          </Text>

          <Text style={styles.p}>3. DISPUTE RESOLUTION</Text>
          <Text style={styles.p}>
            The Parties may agree to take part in the dispute resolution or
            mediation in good faith and undertake to honor the terms of any
            settlement reached.
          </Text>
          <Text style={styles.p}>
            Or If any dispute is not reached any settlement through dispute
            resolution and mediation methods, the dispute may be submitted to
            Insurance Business Regulatory Board (IBRB) in Republic of the Union
            of Myanmar and IBRB’s decision shall be final and in force to the
            Parties of the dispute
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

export default PdfPage7;
