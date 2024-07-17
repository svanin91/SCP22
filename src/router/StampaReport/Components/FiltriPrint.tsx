import { Text, View, StyleSheet } from "@react-pdf/renderer";

const PrintFiltri = (props: any) => {
  const filtri = props.filtri;

  const trasformaData = (dataDaTrasformare: Date) => {
    const giorno = String(dataDaTrasformare.getDate()).padStart(2, "0");
    const mese = String(dataDaTrasformare.getMonth() + 1).padStart(2, "0"); // +1 perché i mesi partono da 0
    const anno = dataDaTrasformare.getFullYear();

    return `${giorno}/${mese}/${anno}`;
  };

  const styles = StyleSheet.create({
    sectionFilter: {
      fontSize: 12,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    containerFilterCol1: { width: "50%" },
    containerFilterCol2: { width: "50%" },
    sectionDateInterval: {
      paddingVertical: 5,
      display: "flex",
      flexDirection: "row",
    },
    sectionSpecificDate: { paddingVertical: 5 },
    sectionIntervalloOrario: { paddingVertical: 5 },
    sectionRegione: { paddingVertical: 5 },
    sectionProvincia: { paddingVertical: 5 },
    sectionComune: { paddingVertical: 5 },
    sectionCognomeNOmeOperatore: { paddingVertical: 5 },
    sectionNormaViolata: { paddingVertical: 5 },
  });

  return (
    <View style={styles.sectionFilter}>
      <View style={styles.containerFilterCol1}>
        <View>
          <View style={styles.sectionRegione}>
            <Text>Regione : {filtri.regioneFiltro}</Text>
          </View>
          <View style={styles.sectionProvincia}>
            <Text>Provincia : {filtri.provinciaFiltro}</Text>
          </View>
          <View style={styles.sectionComune}>
            <Text>Comune : {filtri.comuneFiltro}</Text>
          </View>

          {filtri.dateStartFiltro !== undefined &&
          filtri.dateEndFiltro !== undefined ? (
            <View style={styles.sectionDateInterval}>
              <Text>
                Intervallo date : dal {trasformaData(filtri.dateStartFiltro)} al{" "}
                {trasformaData(filtri.dateEndFiltro)}
              </Text>
            </View>
          ) : null}

          {filtri.specificDateFiltro !== undefined ? (
            <View style={styles.sectionSpecificDate}>
              <Text>
                Data specifica : {trasformaData(filtri.specificDateFiltro)}
              </Text>
            </View>
          ) : null}
        </View>
      </View>
      <View style={styles.containerFilterCol2}>
        <View style={styles.sectionIntervalloOrario}>
          <Text>
            Intervallo orario :{" "}
            {filtri.oraInizioFiltro ? (
              <Text>
                {" "}
                dalle {filtri.oraInizioFiltro} alle {filtri.oraFineFiltro}
              </Text>
            ) : null}
          </Text>
        </View>

        <View style={styles.sectionCognomeNOmeOperatore}>
          <Text>Operatore : {filtri.cognomeNomeOperatoreFiltro}</Text>
        </View>
        <View style={styles.sectionNormaViolata}>
          <Text>Norma violata : {filtri.normaViolataStringa}</Text>
        </View>
      </View>
    </View>
  );
};
export default PrintFiltri;
