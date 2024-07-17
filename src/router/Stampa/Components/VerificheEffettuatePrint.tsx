import { Text, View, StyleSheet } from "@react-pdf/renderer";

const PrintVerificheEffettuate = (props: any) => {
  const controllo = props.controllo;

  const styles = StyleSheet.create({
    sectionVerificheEffettuate: {
      display: "flex",
      flexDirection: "column",
    },
    subTitleVerificheEffettuate: {
      display: "flex",
      paddingVertical: 14,
      fontSize: 18,
      fontWeight: 700,
    },
    sectionsVerificheEffettuate: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: 170,
      paddingBottom: 15,
    },
    sectionVerificheEffettuatePart1: {
      flex: 1,
      display: "flex",
      justifyContent: "space-between",
    },
    sectionVerificheEffettuatePart2: {
      flex: 1,
      display: "flex",
      justifyContent: "space-between",
      height: 50,
    },
    sectionDato: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-end",
    },
    titleDataVerificheEffettuate: { fontSize: 11 },
    responseVerificheEffettuate: { fontSize: 11 },
  });
  return (
    <View style={styles.sectionVerificheEffettuate}>
      <View style={styles.subTitleVerificheEffettuate}>
        <Text>Controlli eseguiti</Text>
      </View>
      <View style={styles.sectionsVerificheEffettuate}>
        <View style={styles.sectionDato}>
          <Text style={styles.titleDataVerificheEffettuate}>Scarico : </Text>
          <Text style={styles.responseVerificheEffettuate}>
            {controllo.A2_TabRig_informazioni_generali.fieldData
              .D_35_verifica_scarico
              ? "SI"
              : "NO"}
          </Text>
        </View>
        <View style={styles.sectionDato}>
          <Text style={styles.titleDataVerificheEffettuate}>
            Cinture di sicurezza :{" "}
          </Text>
          <Text style={styles.responseVerificheEffettuate}>
            {controllo.A2_TabRig_informazioni_generali.fieldData
              .D_36_verifica_cinture_sicurezza
              ? "SI"
              : "NO"}
          </Text>
        </View>

        <View style={styles.sectionDato}>
          <Text style={styles.titleDataVerificheEffettuate}>Pneumatici : </Text>
          <Text style={styles.responseVerificheEffettuate}>
            {controllo.A2_TabRig_informazioni_generali.fieldData
              .D_37_verifica_pneumatici
              ? "SI"
              : "NO"}
          </Text>
        </View>
        <View style={styles.sectionDato}>
          <Text style={styles.titleDataVerificheEffettuate}>Luci : </Text>
          <Text style={styles.responseVerificheEffettuate}>
            {controllo.A2_TabRig_informazioni_generali.fieldData
              .D_38_verifica_luci
              ? "SI"
              : "NO"}
          </Text>
        </View>
        <View style={styles.sectionDato}>
          <Text style={styles.titleDataVerificheEffettuate}>
            Certificato assicurazione :{" "}
          </Text>
          <Text style={styles.responseVerificheEffettuate}>
            {controllo.A2_TabRig_informazioni_generali.fieldData
              .N_06_assicurazione
              ? "SI"
              : "NO"}
          </Text>
        </View>
        <View style={styles.sectionDato}>
          <Text style={styles.titleDataVerificheEffettuate}>
            Assicurazione :{" "}
          </Text>
          <Text style={styles.responseVerificheEffettuate}>
            {controllo.A2_TabRig_informazioni_generali.fieldData
              .D_33_verifica_revisione
              ? "SI"
              : "NO"}
          </Text>
        </View>
      </View>
    </View>
  );
};
export default PrintVerificheEffettuate;
