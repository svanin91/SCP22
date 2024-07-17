import { Text, View, StyleSheet } from "@react-pdf/renderer";

const PrintNormeViolate = (props: any) => {
  const controllo = props.controllo;

  const styles = StyleSheet.create({
    sectionNormeViolate: {
      display: "flex",
      flexDirection: "column",
    },
    subTitleNormeViolate: {
      display: "flex",
      paddingVertical: 14,
      fontSize: 18,
      fontWeight: 700,
    },
    sectionsNormeViolate: {
      display: "flex",
      flexDirection: "row",
      paddingBottom: 10,
      borderBottom: "1px solid gray",
    },
    sectionDato: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-end",
      flexWrap: "wrap",
    },
    titleDataNormeViolate: { fontSize: 11 },
    responseNormeViolate: { fontSize: 11 },
  });
  return (
    <View style={styles.sectionNormeViolate}>
      <View style={styles.subTitleNormeViolate}>
        <Text>Norme violate</Text>
      </View>
      <View style={styles.sectionsNormeViolate}>
        <View style={styles.sectionDato}>
          <Text style={styles.responseNormeViolate}>
            {controllo.A2_TabRig_informazioni_generali.fieldData
              .D_25_norme_violate
              ? controllo.A2_TabRig_informazioni_generali.fieldData
                  .D_25_norme_violate
              : "Non è stata violata alcuna norma del codice della strada in questo controllo"}
          </Text>
        </View>
      </View>
    </View>
  );
};
export default PrintNormeViolate;
