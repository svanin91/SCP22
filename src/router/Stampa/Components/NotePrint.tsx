import { Text, View, StyleSheet } from "@react-pdf/renderer";

const PrintNote = (props: any) => {
  const controllo = props.controllo;

  const styles = StyleSheet.create({
    sectionNote: {
      display: "flex",
      flexDirection: "column",
    },
    subTitleNote: {
      display: "flex",
      paddingVertical: 14,
      fontSize: 18,
      fontWeight: 700,
    },
    sectionsNote: {
      display: "flex",
      flexDirection: "row",
      paddingBottom: 15,
    },
    sectionDato: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-end",
      flexWrap: "wrap",
    },
    titleDataNote: { fontSize: 11 },
    responseNote: { fontSize: 11 },
  });
  return (
    <>
      {controllo.A2_TabRig_informazioni_generali.fieldData
        .A_52a_flag_di_corrente_obsoleto ? (
        <View style={styles.sectionNote}>
          <View style={styles.subTitleNote}>
            <Text>Note</Text>
          </View>
          <View style={styles.sectionsNote}>
            <View style={styles.sectionDato}>
              <Text style={styles.responseNote}>
                {controllo.A2_TabRig_informazioni_generali.fieldData.D_30_note
                  ? controllo.A2_TabRig_informazioni_generali.fieldData
                      .D_30_note
                  : "Non sono presenti annotazioni per questo controllo"}
              </Text>
            </View>
          </View>
        </View>
      ) : null}
    </>
  );
};
export default PrintNote;
