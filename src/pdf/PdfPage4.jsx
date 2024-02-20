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
    top: 30,
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

const PdfPage4 = () => {
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
          <Text style={styles.h1}>
            SECTION II: GENERAL CONDITIONS AND PROVISIONS
          </Text>
          <Text style={styles.p}>1. DUTY OF DISCLOSURE</Text>
          <Text style={styles.p}>
            The accuracy of the information provided over any means of
            electronic communications or in the Insured’s proposal form will
            form the basis of and be part of the contract. Before Insured enter
            into the Insurance contract and during the Period of Insurance,
            Insured must declare to The Company everything Insured know or could
            reasonably be expected to know which will affect The Company’s
            decision on the coverage and the terms of the insurance. If Insured
            are uncertain about whether a fact is relevant or not, Insured must
            declare to The Company about it. The Company will acknowledge
            receipt of acceptance of material information by stating these on
            the Policy Schedule. If Insured do not provide this information to
            The Company, The Company may:
          </Text>
          <Text style={styles.p}>
            i. reduce the amount payable for the claim under this Policy; or
          </Text>
          <Text style={styles.p}>
            ii. refuse to pay the claim that may arise; or
          </Text>
          <Text style={styles.p}>
            iii. cancel Insured’s Insurance Policy from inception.
          </Text>

          <Text style={styles.p}>2. ELIGIBILITY</Text>
          <Text style={styles.p}>
            Persons eligible for cover under this Policy are:
          </Text>
          <Text style={styles.p}>
            i. It can be purchased from one year age.
          </Text>

          <Text style={styles.p}>3. AMENDMENT OF THE INSURANCE POLICY</Text>
          <Text style={styles.p}>
            The Amendment of the Insurance Policy will be valid when The Company
            accepts such agreement and it is legally binding after a formal
            written statement being attached to the Policy or being issued as an
            endorsement by the Company.
          </Text>

          <Text style={styles.p}>4. CHANGE OF INSURANCE AGREEMENT</Text>
          <Text style={styles.p}>
            Insured shall give The Company immediate written notice of any
            changes in the Country of Residence, occupation, pursuits or health
            of any Insured, which is likely to result in a material increase in
            hazard to The Company and shall pay any additional premiums that may
            be required by The Company. Failure to do so shall entitle The
            Company, in the event of a claim, to repudiate such a claim or at
            The Company’s discretion, adjust the benefits payable.
          </Text>
          <Text style={styles.p}>
            The Company reserves the rights to amend the terms and provisions of
            this Policy on any Policy Anniversary date by giving Insured thirty
            (30) days’ written notice of such change. Notice can be delivered
            via electronic means or sent by ordinary mail to Insured’s last
            known correspondence address in The records. No alteration to this
            Policy shall be valid unless approved in writing by The Company’s
            authorized representative and reflected in an endorsement. No broker
            or advisor has the authority to amend or waive any of the terms and
            conditions of this Policy.
          </Text>

          <Text style={styles.p}>5. MISSTATEMENT</Text>
          <Text style={styles.p}>• Misstatement of Age</Text>
          <Text style={styles.p}>
            If the date of birth of any Insured has been incorrectly stated on
            the proposal form, then the renewal premium shall be adjusted based
            on the correct age. Any excess premium that may have been paid as a
            result of any misstatement of age shall be refunded without
            interest. If at the correct age Insured would not have been eligible
            for cover under this Policy, no benefit shall be payable, and The
            Company’s liability shall be limited to the refund of the premium
            paid without interest. Proof of age of each Insured must be
            submitted to The Company before any claims can be made under the
            Policy.
          </Text>

          <Text style={styles.p}>• Misstatement or fraud</Text>
          <Text style={styles.p}>
            The Company shall have no liability to pay any benefit under this
            Policy if Insured or any Insured:
          </Text>
          <Text style={styles.p}>
            - fail to fully and truthfully disclose to The Company all material
            information known (or which could reasonably be expected to be
            known) before inception of this policy and upon each renewal;
          </Text>
          <Text style={styles.p}>
            - fail to properly fulfil the terms and conditions of this policy;
          </Text>
          <Text style={styles.p}>- make any untruth statement;</Text>
          <Text style={styles.p}>
            - omit, suppress or incorrectly state any material information
            affecting the risk;
          </Text>
          <Text style={styles.p}>
            - make any claim that is fraudulent or exaggerated or make any false
            declaration or statement in support of a claim.
          </Text>

          <Text style={styles.p}>6. GOVERNING LAW AND JURISDICTION</Text>
          <Text style={styles.p}>
            The Policy shall be governed by and interpreted in accordance with
            the Law of Republic of the Union of Myanmar. The jurisdiction is the
            competent court in Republic of the Union of Myanmar.
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

export default PdfPage4;
