import { Text, View, StyleSheet } from "@react-pdf/renderer";

const PrintDocRitirati = (props: any) => {
  const controllo = props.controllo;

  const styles = StyleSheet.create({
    sectionDocRitirati: {
      display: "flex",
      flexDirection: "column",
    },
    subTitleDocRitirati: {
      display: "flex",
      paddingVertical: 14,
      fontSize: 18,
      fontWeight: 700,
    },
    sectionsDocRitirati: {
      display: "flex",
      flexDirection: "column",
      height: 70,
      paddingBottom: 15,
      borderBottom: "1px solid gray",
    },
    sectionDato: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-end",

      paddingVertical: 5,
    },
    titleDataDocRitirati: { fontSize: 11 },
    responseDocRitirati: { fontSize: 11 },
  });
  return (
    <>
      {controllo.A2_TabRig_informazioni_generali.fieldData
        .A_52a_flag_di_corrente_obsoleto ? (
        <View style={styles.sectionDocRitirati}>
          <View style={styles.subTitleDocRitirati}>
            <Text>Documenti ritirati</Text>
          </View>
          <View style={styles.sectionsDocRitirati}>
            <View style={styles.sectionDato}>
              <Text style={styles.titleDataDocRitirati}>Patente :</Text>
              <Text style={styles.responseDocRitirati}>
                {controllo.A2_TabRig_informazioni_generali.fieldData
                  .D_28_patante_ritirata
                  ? " SI"
                  : " NO"}
              </Text>
            </View>
            <View style={styles.sectionDato}>
              <Text style={styles.titleDataDocRitirati}>
                Carta di circolazione :
              </Text>

              <Text style={styles.responseDocRitirati}>
                {controllo.A2_TabRig_informazioni_generali.fieldData
                  .D_31_carta_circolazione_ritirata
                  ? " SI"
                  : " NO"}
              </Text>
            </View>
            <View style={styles.sectionDato}>
              <Text style={styles.titleDataDocRitirati}>
                Certificato assicurazione :
              </Text>

              <Text style={styles.responseDocRitirati}>
                {controllo.A2_TabRig_informazioni_generali.fieldData
                  .D_32_certificato_assicurazione_ritirato
                  ? " SI"
                  : " NO"}
              </Text>
            </View>
          </View>
        </View>
      ) : null}
    </>
  );
};
export default PrintDocRitirati;
