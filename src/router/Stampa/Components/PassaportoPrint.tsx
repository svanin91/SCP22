import { Text, View, StyleSheet } from "@react-pdf/renderer";

const PrintPassaporto = (props: any) => {
  const controllo = props.controllo;

  const styles = StyleSheet.create({
    sectionPassaporto: {
      display: "flex",
      flexDirection: "column",
    },
    subTitlePassaporto: {
      display: "flex",
      paddingVertical: 14,
      fontSize: 18,
      fontWeight: 700,
    },
    sectionsPassaporto: {
      display: "flex",
      flexDirection: "row",
      height: 200,
      paddingBottom: 15,
      borderBottom: "1px solid gray",
    },
    sectionPassaportoPart1: {
      flex: 1,
      display: "flex",
      justifyContent: "space-between",
    },
    sectionPassaportoPart2: {
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
    titleDataPassaporto: { fontSize: 11 },
    responsePassaporto: { fontSize: 13 },
  });
  return (
    <>
      {controllo.A3_04_TabRig_Passaporto.fieldData.N_05_cognome_conducente &&
      controllo.A3_04_TabRig_Passaporto.fieldData.N_06_nome_conducente ? (
        <View style={styles.sectionPassaporto}>
          <View style={styles.subTitlePassaporto}>
            <Text>Passaporto</Text>
          </View>
          <View style={styles.sectionsPassaporto}>
            <View style={styles.sectionPassaportoPart1}>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Conducente : </Text>
                <Text style={styles.responsePassaporto}>SI</Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>
                  Cognome e nome :{" "}
                </Text>
                <Text style={styles.responsePassaporto}>
                  {controllo.A3_04_TabRig_Passaporto.fieldData
                    .N_05_cognome_conducente +
                    " " +
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_06_nome_conducente}
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Cittadinanza : </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_07_cittadinanza_conducente
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>
                  Data di nascita :{" "}
                </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_08_data_nascita_conducente
                  }
                </Text>
              </View>

              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>
                  Luogo di nascita :{" "}
                </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_09_luogo_nascita_conducente
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Sesso : </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_10_sesso_conducente
                  }
                </Text>
              </View>
            </View>
            <View style={styles.sectionPassaportoPart2}>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Tipo : </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_02_tipo_conducente
                  }
                </Text>
              </View>

              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Codice paese : </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_03_codice_paese_conducente
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Numero doc. : </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_04_numero_passaporto
                  }
                </Text>
              </View>

              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>
                  Data emissione :{" "}
                </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_11_data_emissione_documento_conducente
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Data scadenza : </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_12_data_scadenza_documento_conducente
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>
                  Autorità emittente :{" "}
                </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_13_autorita_emittente_conducente
                  }
                </Text>
              </View>
            </View>
          </View>
        </View>
      ) : null}
      {controllo.A3_04_TabRig_Passaporto.fieldData.N_05_cognome_passeggero_1 &&
      controllo.A3_04_TabRig_Passaporto.fieldData.N_06_nome_passeggero_1 ? (
        <View style={styles.sectionPassaporto}>
          <View style={styles.sectionsPassaporto}>
            <View style={styles.sectionPassaportoPart1}>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Conducente: </Text>
                <Text style={styles.responsePassaporto}>NO</Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>
                  Cognome e nome :{" "}
                </Text>
                <Text style={styles.responsePassaporto}>
                  {controllo.A3_04_TabRig_Passaporto.fieldData
                    .N_05_cognome_passeggero_1 +
                    " " +
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_06_nome_passeggero_1}
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Cittadinanza : </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_07_cittadinanza_passeggero_1
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>
                  Data di nascita :{" "}
                </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_08_data_nascita_passeggero_1
                  }
                </Text>
              </View>

              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>
                  Luogo di nascita :{" "}
                </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_09_luogo_nascita_passeggero_1
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Sesso : </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_10_sesso_passeggero_1
                  }
                </Text>
              </View>
            </View>
            <View style={styles.sectionPassaportoPart2}>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Tipo : </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_02_tipo_passeggero_1
                  }
                </Text>
              </View>

              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Codice paese : </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_03_codice_paese_passeggero_1
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Numero doc. : </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_04_numero_passaporto_passeggero_1
                  }
                </Text>
              </View>

              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>
                  Data emissione :{" "}
                </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_11_data_emissione_documento_passeggero_1
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Data scadenza : </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_12_data_scadenza_documento_passeggero_1
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>
                  Autorità emittente :{" "}
                </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_13_autorita_emittente_passeggero_1
                  }
                </Text>
              </View>
            </View>
          </View>
        </View>
      ) : null}
      {controllo.A3_04_TabRig_Passaporto.fieldData.N_05_cognome_passeggero_2 &&
      controllo.A3_04_TabRig_Passaporto.fieldData.N_06_nome_passeggero_2 ? (
        <View style={styles.sectionPassaporto}>
          <View style={styles.sectionsPassaporto}>
            <View style={styles.sectionPassaportoPart1}>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Conducente: </Text>
                <Text style={styles.responsePassaporto}>NO</Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>
                  Cognome e nome :{" "}
                </Text>
                <Text style={styles.responsePassaporto}>
                  {controllo.A3_04_TabRig_Passaporto.fieldData
                    .N_05_cognome_passeggero_2 +
                    " " +
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_06_nome_passeggero_2}
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Cittadinanza : </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_07_cittadinanza_passeggero_2
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>
                  Data di nascita :{" "}
                </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_08_data_nascita_passeggero_2
                  }
                </Text>
              </View>

              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>
                  Luogo di nascita :{" "}
                </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_09_luogo_nascita_passeggero_2
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Sesso : </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_10_sesso_passeggero_2
                  }
                </Text>
              </View>
            </View>
            <View style={styles.sectionPassaportoPart2}>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Tipo : </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_02_tipo_passeggero_2
                  }
                </Text>
              </View>

              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Codice paese : </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_03_codice_paese_passeggero_2
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Numero doc. : </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_04_numero_passaporto_passeggero_2
                  }
                </Text>
              </View>

              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>
                  Data emissione :{" "}
                </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_11_data_emissione_documento_passeggero_2
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Data scadenza : </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_12_data_scadenza_documento_passeggero_2
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>
                  Autorità emittente :{" "}
                </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_13_autorita_emittente_passeggero_2
                  }
                </Text>
              </View>
            </View>
          </View>
        </View>
      ) : null}
      {controllo.A3_04_TabRig_Passaporto.fieldData.N_05_cognome_passeggero_3 &&
      controllo.A3_04_TabRig_Passaporto.fieldData.N_06_nome_passeggero_3 ? (
        <View style={styles.sectionPassaporto}>
          <View style={styles.sectionsPassaporto}>
            <View style={styles.sectionPassaportoPart1}>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Conducente : </Text>
                <Text style={styles.responsePassaporto}>NO</Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>
                  Cognome e nome :{" "}
                </Text>
                <Text style={styles.responsePassaporto}>
                  {controllo.A3_04_TabRig_Passaporto.fieldData
                    .N_05_cognome_passeggero_3 +
                    " " +
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_06_nome_passeggero_3}
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Cittadinanza : </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_07_cittadinanza_passeggero_3
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>
                  Data di nascita :{" "}
                </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_08_data_nascita_passeggero_3
                  }
                </Text>
              </View>

              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>
                  Luogo di nascita :{" "}
                </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_09_luogo_nascita_passeggero_3
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Sesso : </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_10_sesso_passeggero_3
                  }
                </Text>
              </View>
            </View>
            <View style={styles.sectionPassaportoPart2}>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Tipo : </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_02_tipo_passeggero_3
                  }
                </Text>
              </View>

              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Codice paese : </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_03_codice_paese_passeggero_3
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Numero doc. : </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_04_numero_passaporto_passeggero_3
                  }
                </Text>
              </View>

              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>
                  Data emissione :{" "}
                </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_11_data_emissione_documento_passeggero_3
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Data scadenza : </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_12_data_scadenza_documento_passeggero_3
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>
                  Autorità emittente :{" "}
                </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_13_autorita_emittente_passeggero_3
                  }
                </Text>
              </View>
            </View>
          </View>
        </View>
      ) : null}
      {controllo.A3_04_TabRig_Passaporto.fieldData.N_05_cognome_passeggero_4 &&
      controllo.A3_04_TabRig_Passaporto.fieldData.N_06_nome_passeggero_4 ? (
        <View style={styles.sectionPassaporto}>
          <View style={styles.sectionsPassaporto}>
            <View style={styles.sectionPassaportoPart1}>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Conducente: </Text>
                <Text style={styles.responsePassaporto}>NO</Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>
                  Cognome e nome :{" "}
                </Text>
                <Text style={styles.responsePassaporto}>
                  {controllo.A3_04_TabRig_Passaporto.fieldData
                    .N_05_cognome_passeggero_4 +
                    " " +
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_06_nome_passeggero_4}
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Cittadinanza : </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_07_cittadinanza_passeggero_4
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>
                  Data di nascita :{" "}
                </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_08_data_nascita_passeggero_4
                  }
                </Text>
              </View>

              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>
                  Luogo di nascita :{" "}
                </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_09_luogo_nascita_passeggero_4
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Sesso : </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_10_sesso_passeggero_4
                  }
                </Text>
              </View>
            </View>
            <View style={styles.sectionPassaportoPart2}>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Tipo : </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_02_tipo_passeggero_4
                  }
                </Text>
              </View>

              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Codice paese : </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_03_codice_paese_passeggero_4
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Numero doc. : </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_04_numero_passaporto_passeggero_4
                  }
                </Text>
              </View>

              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>
                  Data emissione :{" "}
                </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_11_data_emissione_documento_passeggero_4
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Data scadenza : </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_12_data_scadenza_documento_passeggero_4
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>
                  Autorità emittente :{" "}
                </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_13_autorita_emittente_passeggero_4
                  }
                </Text>
              </View>
            </View>
          </View>
        </View>
      ) : null}
      {controllo.A3_04_TabRig_Passaporto.fieldData.N_05_cognome_passeggero_5 &&
      controllo.A3_04_TabRig_Passaporto.fieldData.N_06_nome_passeggero_5 ? (
        <View style={styles.sectionPassaporto}>
          <View style={styles.sectionsPassaporto}>
            <View style={styles.sectionPassaportoPart1}>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Conducente: </Text>
                <Text style={styles.responsePassaporto}>NO</Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>
                  Cognome e nome :{" "}
                </Text>
                <Text style={styles.responsePassaporto}>
                  {controllo.A3_04_TabRig_Passaporto.fieldData
                    .N_05_cognome_passeggero_5 +
                    " " +
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_06_nome_passeggero_5}
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Cittadinanza : </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_07_cittadinanza_passeggero_5
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>
                  Data di nascita :{" "}
                </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_08_data_nascita_passeggero_5
                  }
                </Text>
              </View>

              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>
                  Luogo di nascita :{" "}
                </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_09_luogo_nascita_passeggero_5
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Sesso : </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_10_sesso_passeggero_5
                  }
                </Text>
              </View>
            </View>
            <View style={styles.sectionPassaportoPart2}>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Tipo : </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_02_tipo_passeggero_5
                  }
                </Text>
              </View>

              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Codice paese : </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_03_codice_paese_passeggero_5
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Numero doc. : </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_04_numero_passaporto_passeggero_5
                  }
                </Text>
              </View>

              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>
                  Data emissione :{" "}
                </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_11_data_emissione_documento_passeggero_5
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>Data scadenza : </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_12_data_scadenza_documento_passeggero_5
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPassaporto}>
                  Autorità emittente :{" "}
                </Text>
                <Text style={styles.responsePassaporto}>
                  {
                    controllo.A3_04_TabRig_Passaporto.fieldData
                      .N_13_autorita_emittente_passeggero_5
                  }
                </Text>
              </View>
            </View>
          </View>
        </View>
      ) : null}
    </>
  );
};
export default PrintPassaporto;
