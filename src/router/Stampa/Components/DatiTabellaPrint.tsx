import { Text, View, StyleSheet } from "@react-pdf/renderer";

const PrintDatiTabella = (props: any) => {
  const controllo = props.controllo;

  const styles = StyleSheet.create({
    sectionDatiTabella: {
      display: "flex",
      flexDirection: "row",
      height: 100,
      paddingBottom: 15,
      borderBottom: "1px solid gray",
    },
    sectionDatiTabellaPart1: {
      flex: 1,
      display: "flex",
      justifyContent: "space-between",
    },
    sectionDatiTabellaPart2: {
      flex: 1,
      display: "flex",
      justifyContent: "space-between",
    },
    sectionDatiTabellaPart3: {
      flex: 1,
      display: "flex",
      justifyContent: "space-between",
    },
    sectionDato: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-end",
      flexWrap: "wrap",
    },
    titleDataDatiTabella: { fontSize: 11 },
    responseDatiTabella: { fontSize: 11 },
  });
  return (
    <View style={styles.sectionDatiTabella}>
      <View style={styles.sectionDatiTabellaPart1}>
        <View style={styles.sectionDato}>
          <Text style={styles.titleDataDatiTabella}>Stato : </Text>
          <Text style={styles.responseDatiTabella}>
            {controllo.A2_TabRig_informazioni_generali.fieldData.D_14_stato}
          </Text>
        </View>
        <View style={styles.sectionDato}>
          <Text style={styles.titleDataDatiTabella}>Regione : </Text>
          <Text style={styles.responseDatiTabella}>
            {controllo.A2_TabRig_informazioni_generali.fieldData.D_10_regione}
          </Text>
        </View>
        <View style={styles.sectionDato}>
          <Text style={styles.titleDataDatiTabella}>Provincia : </Text>
          <Text style={styles.responseDatiTabella}>
            {controllo.A2_TabRig_informazioni_generali.fieldData.D_07_provincia}
          </Text>
        </View>
        <View style={styles.sectionDato}>
          <Text style={styles.titleDataDatiTabella}>Comune : </Text>
          <Text style={styles.responseDatiTabella}>
            {controllo.A2_TabRig_informazioni_generali.fieldData.D_08_comune}
          </Text>
        </View>
      </View>
      <View style={styles.sectionDatiTabellaPart2}>
        <View style={styles.sectionDato}>
          <Text style={styles.titleDataDatiTabella}>Indirizzo : </Text>
          <Text style={styles.responseDatiTabella}>
            {controllo.A2_TabRig_informazioni_generali.fieldData.D_11_indirizzo}
          </Text>
        </View>
        <View style={styles.sectionDato}>
          <Text style={styles.titleDataDatiTabella}>CAP : </Text>
          <Text style={styles.responseDatiTabella}>
            {
              controllo.A2_TabRig_informazioni_generali.fieldData
                .D_26_codice_postale
            }
          </Text>
        </View>

        <View style={styles.sectionDato}>
          <Text style={styles.titleDataDatiTabella}>Orario di inizio : </Text>
          <Text style={styles.responseDatiTabella}>
            {
              controllo.A2_TabRig_informazioni_generali.fieldData
                .D_02_ora_inizio
            }
          </Text>
        </View>
        <View style={styles.sectionDato}>
          <Text style={styles.titleDataDatiTabella}>Orario di fine : </Text>
          <Text style={styles.responseDatiTabella}>
            {controllo.A2_TabRig_informazioni_generali.fieldData.D_03_ora_fine}
          </Text>
        </View>
      </View>
      <View style={styles.sectionDatiTabellaPart3}>
        {" "}
        <View style={styles.sectionDato}>
          <Text style={styles.titleDataDatiTabella}>Data : </Text>
          <Text style={styles.responseDatiTabella}>
            {controllo.A2_TabRig_informazioni_generali.fieldData.D_01_data}
          </Text>
        </View>
        <View style={styles.sectionDato}>
          <Text style={styles.titleDataDatiTabella}>Operatore : </Text>
          <Text style={styles.responseDatiTabella}>
            {
              controllo.A2_TabRig_informazioni_generali.fieldData
                .D_27_cognome_nome_operatore
            }
          </Text>
        </View>
        <View style={styles.sectionDato}>
          <Text style={styles.titleDataDatiTabella}>
            Revisione del documento :
          </Text>
          <Text style={styles.responseDatiTabella}>
            {
              controllo.A2_TabRig_informazioni_generali.fieldData
                .A_09a_livello_di_revisione
            }
          </Text>
        </View>
        <View style={styles.sectionDato}>
          <Text style={styles.titleDataDatiTabella}>
            Stato del documento :{" "}
          </Text>
          <Text style={styles.responseDatiTabella}>
            {
              controllo.A2_TabRig_informazioni_generali.fieldData
                .A_52a_flag_di_corrente_obsoleto
            }
          </Text>
        </View>
      </View>
    </View>
  );
};
export default PrintDatiTabella;
