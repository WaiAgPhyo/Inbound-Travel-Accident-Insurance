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

const PdfPage6 = () => {
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
          <Text style={styles.p}>BACTERIAL & VIRAL INFECTION</Text>
          <Text style={styles.p}>
            The Company will not pay for claims arising from bacterial or viral
            infections even if contacted by accident except bacterial infection
            that is the direct result of an accidental cut or wound.
          </Text>

          <Text style={styles.p}>CARELESSNESS</Text>
          <Text style={styles.p}>
            Those claims caused directly or indirectly by the bad faith of the
            Insured, by his/her participation in criminal acts, or as a result
            of his/her fraudulent, seriously negligent or reckless actions. The
            consequences of the actions of the Insured in a state of derangement
            or under psychiatric treatment are not covered either.
          </Text>

          <Text style={styles.p}>COSMETIC/ PLASTIC SURGERY</Text>
          <Text style={styles.p}>
            Any Plastic, Elective, Reconstructive Surgery including treatments
            for skin, blemishes, aging spots, freckles, dandruff, hair loss,
            weight control or elective surgery to improve physical appearance,
            except where such Surgery is necessary for the repair of damage
            caused solely by bodily injuries as a result of an Accident.
          </Text>

          <Text style={styles.p}>HAZARDOUS ACTIVITIES & SPORTS</Text>
          <Text style={styles.p}>
            Any treatment or accident arising from participating in:
          </Text>
          <Text style={styles.p}>
            • animal hunting (game hunting), car/ boat/ horse racing, Boxing
          </Text>
          <Text style={styles.p}>
            • all Skiing for recreation or competition including Jet Skiing,
            Skating, and Parachuting (unless to save Insured’s life)
          </Text>
          <Text style={styles.p}>
            • while getting in, getting out or taxing in Balloons or Gliders
          </Text>
          <Text style={styles.p}>
            • Bungee Jumping, Mountain Climbing with or without Mountain
            Climbing Equipment and Diving using Oxygen Cylinders and others
            Breathing Apparatus
          </Text>
          <Text style={styles.p}>
            • travelling in an aircraft not operated by a commercial airline
            which is taxiing, taking off or landing.
          </Text>
          <Text style={styles.p}>
            • This extends to driving a car or motorcycle without a driver’s
            license.
          </Text>
          <Text style={styles.p}>
            • Participation in competitions or tournaments organised by sporting
            federations or similar organisations.
          </Text>

          <Text style={styles.p}>FELONY / MISDEMEANOR / BRAWLING</Text>
          <Text style={styles.p}>
            • The Company will not indemnify the Insured in respect of any
            Liability or Injury arising out of criminal offences alleged.
          </Text>
          <Text style={styles.p}>
            • The Company will not pay claims for any accident occurring when
            the Insured is encouraging or taking part or participating in a
            brawling fight.
          </Text>

          <Text style={styles.p}>FIT TO TRAVEL</Text>
          <Text style={styles.p}>
            Where the Insured or his/her travelling companion were not fit to
            undertake the Trip as confirmed by his/her medical practitioner when
            booking the Trip or purchasing this policy.
          </Text>

          <Text style={styles.p}>PSYCHIATRY</Text>
          <Text style={styles.p}>
            Any diagnosis, medical investigation, symptom, diseases or treatment
            relating to emotional, stress, psychiatric or psychological
            disorders, Insanity, Behavioral or Characteristic Disorders. This
            extends to Concentration Problems, Autism, Depression, Eating
            Disorders or Anxiety.
          </Text>

          <Text style={styles.p}>PRE-EXISTING CONDITION</Text>
          <Text style={styles.p}>
            Any Pre-existing condition which the Insured received medical
            treatment, diagnosis consultation or prescribed drugs for which
            medical advice or treatment as recommended by physician preceding
            the Effective Date of the contract.
          </Text>

          <Text style={styles.p}>PREGNANCY</Text>
          <Text style={styles.p}>
            Any treatment arising from Pregnancy, Child Delivery, Abortion,
            Miscarriage (except accidental miscarriage), Infertility (includes
            Infertility Investigation and Treatment), Vasectomy or
            Contraception.
          </Text>

          <Text style={styles.p}>RADIOACTIVITY</Text>
          <Text style={styles.p}>
            Nuclear Weapons, Radiation, Radioactivity from Nuclear-Fuel or
            Nuclear Waste or Nuclear Radiation caused by combustion of fuel and
            Nuclear Fission which self-ignites. Explosion by Radioactivity
            Nuclear material or dangerous objects used in a Nuclear Explosion.
          </Text>

          <Text style={styles.p}>SEXUALLY TRANSMITTED DISEASES (STDs)</Text>
          <Text style={styles.p}>
            Any investigation, test or treatment arising directly or indirectly
            from Sexually Transmitted Diseases, including Venereal Diseases,
            Immune Deficiency Syndrome (AIDs), any AIDs-related condition or
            infection by Human Immune Deficiency Virus (HIV).
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

export default PdfPage6;
