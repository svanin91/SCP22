import { Text, View, StyleSheet } from "@react-pdf/renderer";

const PrintCertificatoAssicurazione = (props: any) => {
  const controllo = props.controllo;

  const styles = StyleSheet.create({
    sectionCertificatoAssicurazione: {
      display: "flex",
      flexDirection: "column",
    },
    subTitleCertificatoAssicurazione: {
      display: "flex",
      paddingVertical: 14,
      fontSize: 18,
      fontWeight: 700,
    },
    sectionsCertificatoAssicurazione: {
      display: "flex",
      flexDirection: "row",
      height: 160,
      paddingBottom: 15,
      borderBottom: "1px solid gray",
    },
    sectionCertificatoAssicurazionePart1: {
      flex: 1,
      display: "flex",
      justifyContent: "space-between",
    },
    sectionCertificatoAssicurazionePart2: {
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
    titleDataCertificatoAssicurazione: { fontSize: 11 },
    responseCertificatoAssicurazione: { fontSize: 11 },
  });
  return (
    <View style={styles.sectionCertificatoAssicurazione}>
      <View style={styles.subTitleCertificatoAssicurazione}>
        <Text>Certificato assicurativo</Text>
      </View>
      <View style={styles.sectionsCertificatoAssicurazione}>
        <View style={styles.sectionCertificatoAssicurazionePart1}>
          <View style={styles.sectionDato}>
            <Text style={styles.titleDataCertificatoAssicurazione}>
              Intestatario :{" "}
            </Text>
            <Text style={styles.responseCertificatoAssicurazione}>
              {controllo.A3_06_TabRig_CertificatoAssicurazione.fieldData
                .N_02_cognome +
                " " +
                controllo.A3_06_TabRig_CertificatoAssicurazione.fieldData
                  .N_01_nome}
            </Text>
          </View>
          <View style={styles.sectionDato}>
            <Text style={styles.titleDataCertificatoAssicurazione}>
              Indirizzo di residenza :{" "}
            </Text>
            <Text style={styles.responseCertificatoAssicurazione}>
              {
                controllo.A3_06_TabRig_CertificatoAssicurazione.fieldData
                  .N_03_indirizzo_residenza
              }
            </Text>
          </View>

          <View style={styles.sectionDato}>
            <Text style={styles.titleDataCertificatoAssicurazione}>
              Compagnia assicurativa :{" "}
            </Text>
            <Text style={styles.responseCertificatoAssicurazione}>
              {
                controllo.A3_06_TabRig_CertificatoAssicurazione.fieldData
                  .N_04_nome_compagnia_assicurativa
              }
            </Text>
          </View>
          <View style={styles.sectionDato}>
            <Text style={styles.titleDataCertificatoAssicurazione}>
              Numero polizza :{" "}
            </Text>
            <Text style={styles.responseCertificatoAssicurazione}>
              {
                controllo.A3_06_TabRig_CertificatoAssicurazione.fieldData
                  .N_06_numero_polizza
              }
            </Text>
          </View>
          <View style={styles.sectionDato}>
            <Text style={styles.titleDataCertificatoAssicurazione}>
              Targa veicolo :{" "}
            </Text>
            <Text style={styles.responseCertificatoAssicurazione}>
              {
                controllo.A3_06_TabRig_CertificatoAssicurazione.fieldData
                  .N_05_targa_veicolo
              }
            </Text>
          </View>
        </View>
        <View style={styles.sectionCertificatoAssicurazionePart2}>
          <View style={styles.sectionDato}>
            <Text style={styles.titleDataCertificatoAssicurazione}>
              Data decorrenza polizza :{" "}
            </Text>
            <Text style={styles.responseCertificatoAssicurazione}>
              {
                controllo.A3_06_TabRig_CertificatoAssicurazione.fieldData
                  .N_07_data_inizio_polizza
              }
            </Text>
          </View>
          <View style={styles.sectionDato}>
            <Text style={styles.titleDataCertificatoAssicurazione}>
              Data scadenza polizza :{" "}
            </Text>
            <Text style={styles.responseCertificatoAssicurazione}>
              {
                controllo.A3_06_TabRig_CertificatoAssicurazione.fieldData
                  .N_08_data_fine_polizza
              }
            </Text>
          </View>
          <View style={styles.sectionDato}>
            <Text style={styles.titleDataCertificatoAssicurazione}>
              Marca e modello :{" "}
            </Text>
            <Text style={styles.responseCertificatoAssicurazione}>
              {
                controllo.A3_06_TabRig_CertificatoAssicurazione.fieldData
                  .N_09_marca_modello_veicolo
              }
            </Text>
          </View>

          <View style={styles.sectionDato}>
            <Text style={styles.titleDataCertificatoAssicurazione}>
              Cilindrata :{" "}
            </Text>
            <Text style={styles.responseCertificatoAssicurazione}>
              {
                controllo.A3_06_TabRig_CertificatoAssicurazione.fieldData
                  .N_10_cilindrata
              }
            </Text>
          </View>
          <View style={styles.sectionDato}>
            <Text style={styles.titleDataCertificatoAssicurazione}>
              Potenza :{" "}
            </Text>
            <Text style={styles.responseCertificatoAssicurazione}>
              {
                controllo.A3_06_TabRig_CertificatoAssicurazione.fieldData
                  .N_11_potenza
              }
            </Text>
          </View>
          <View style={styles.sectionDato}>
            <Text style={styles.titleDataCertificatoAssicurazione}>
              Carburante :{" "}
            </Text>
            <Text style={styles.responseCertificatoAssicurazione}>
              {
                controllo.A3_06_TabRig_CertificatoAssicurazione.fieldData
                  .N_12_carburante
              }
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default PrintCertificatoAssicurazione;
