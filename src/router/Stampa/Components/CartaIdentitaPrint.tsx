import { Text, View, StyleSheet } from "@react-pdf/renderer";

const PrintCartaIdentita = (props: any) => {
  const controllo = props.controllo;

  const styles = StyleSheet.create({
    sectionCartaIdentita: {
      display: "flex",
      flexDirection: "column",
    },
    subTitleCartaIdentita: {
      display: "flex",
      paddingVertical: 14,
      fontSize: 18,
      fontWeight: 700,
    },
    sectionsCartaIdentita: {
      display: "flex",
      flexDirection: "row",
      height: 280,
      paddingBottom: 15,
      borderBottom: "1px solid gray",
    },
    sectionCartaIdentitaPart1: {
      flex: 1,
      display: "flex",
      justifyContent: "space-between",
    },
    sectionCartaIdentitaPart2: {
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
    titleDataCartaIdentita: { fontSize: 11 },
    responseDataCartaIdentita: { fontSize: 13 },
  });
  return (
    <>
      {controllo.A3_03_TabRig_CartaIdentita.fieldData.N_04_nome_conducente &&
      controllo.A3_03_TabRig_CartaIdentita.fieldData.N_03_cognome_conducente ? (
        <View style={styles.sectionCartaIdentita}>
          <View style={styles.subTitleCartaIdentita}>
            <Text>Carta d'identità</Text>
          </View>
          <View style={styles.sectionsCartaIdentita}>
            <View style={styles.sectionCartaIdentitaPart1}>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>Conducente : </Text>
                <Text style={styles.responseDataCartaIdentita}>SI</Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Cognome e nome :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {controllo.A3_03_TabRig_CartaIdentita.fieldData
                    .N_03_cognome_conducente +
                    " " +
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_04_nome_conducente}
                </Text>
              </View>

              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Data di nascita :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_05_data_nascita_conducente
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Luogo di nascita :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_06_luogo_nascita_conducente
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>Sesso : </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_08_sesso_conducente
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>Statura : </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_09_statura_conducente
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>Occhi : </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_10_occhi_conducente
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Cittadinanza :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_11_cittadinanza_conducente
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>CF : </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_12_codice_fiscale_conducente
                  }
                </Text>
              </View>
            </View>
            <View style={styles.sectionCartaIdentitaPart2}>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>Residenza : </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_13_residenza_conducente
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Professione :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_14_professione_conducente
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Stato civile :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_15_stato_civile_conducente
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Ente emettitore :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_02_comune_ufficio_emettitore_conducente
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>Numero doc : </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_20_numero_documento_conducente
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Data emissione :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_21_data_emissione_documento_conducente
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Data scadenza :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_22_data_scadenza_documento_conducente
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Estremi atto nascita :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_18_estremi_atto_nascita_conducente
                  }
                </Text>
              </View>{" "}
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Comune iscrizione AIRE :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_19_comune_di_iscrizione_AIRE_conducente
                  }
                </Text>
              </View>
            </View>
          </View>
        </View>
      ) : null}
      {controllo.A3_03_TabRig_CartaIdentita.fieldData.N_04_nome_passeggero_1 &&
      controllo.A3_03_TabRig_CartaIdentita.fieldData
        .N_03_cognome_passeggero_1 ? (
        <View style={styles.sectionCartaIdentita}>
          <View style={styles.sectionsCartaIdentita}>
            <View style={styles.sectionCartaIdentitaPart1}>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>Conducente : </Text>
                <Text style={styles.responseDataCartaIdentita}>NO</Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Cognome e nome :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {controllo.A3_03_TabRig_CartaIdentita.fieldData
                    .N_03_cognome_passeggero_1 +
                    " " +
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_04_nome_passeggero_1}
                </Text>
              </View>

              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Data di nascita :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_05_data_nascita_passeggero_1
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Luogo di nascita :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_06_luogo_nascita_passeggero_1
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>Sesso : </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_08_sesso_passeggero_1
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>Statura : </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_09_statura_passeggero_1
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>Occhi : </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_10_occhi_passeggero_1
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Cittadinanza :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_11_cittadinanza_passeggero_1
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>CF : </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_12_codice_fiscale_passeggero_1
                  }
                </Text>
              </View>
            </View>
            <View style={styles.sectionCartaIdentitaPart2}>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>Residenza : </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_13_residenza_passeggero_1
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Professione :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_14_professione_passeggero_1
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Stato civile :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_15_stato_civile_passeggero_1
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Ente emettitore :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_02_comune_ufficio_emettitore_passeggero_1
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>Numero doc : </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_20_numero_documento_passeggero_1
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Data emissione :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_21_data_emissione_documento_passeggero_1
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Data scadenza :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_22_data_scadenza_documento_passeggero_1
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Estremi atto nascita :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_18_estremi_atto_nascita_passeggero_1
                  }
                </Text>
              </View>{" "}
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Comune iscrizione AIRE :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_19_comune_di_iscrizione_AIRE_passeggero_1
                  }
                </Text>
              </View>
            </View>
          </View>
        </View>
      ) : null}
      {controllo.A3_03_TabRig_CartaIdentita.fieldData.N_04_nome_passeggero_2 &&
      controllo.A3_03_TabRig_CartaIdentita.fieldData
        .N_03_cognome_passeggero_2 ? (
        <View style={styles.sectionCartaIdentita}>
          <View style={styles.sectionsCartaIdentita}>
            <View style={styles.sectionCartaIdentitaPart1}>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>Conducente : </Text>
                <Text style={styles.responseDataCartaIdentita}>NO</Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Cognome e nome :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {controllo.A3_03_TabRig_CartaIdentita.fieldData
                    .N_03_cognome_passeggero_2 +
                    " " +
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_04_nome_passeggero_2}
                </Text>
              </View>

              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Data di nascita :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_05_data_nascita_passeggero_2
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Luogo di nascita :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_06_luogo_nascita_passeggero_2
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>Sesso : </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_08_sesso_passeggero_2
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>Statura : </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_09_statura_passeggero_2
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>Occhi : </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_10_occhi_passeggero_2
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Cittadinanza :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_11_cittadinanza_passeggero_2
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>CF : </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_12_codice_fiscale_passeggero_2
                  }
                </Text>
              </View>
            </View>
            <View style={styles.sectionCartaIdentitaPart2}>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>Residenza : </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_13_residenza_passeggero_2
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Professione :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_14_professione_passeggero_2
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Stato civile :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_15_stato_civile_passeggero_2
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Ente emettitore :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_02_comune_ufficio_emettitore_passeggero_2
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>Numero doc : </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_20_numero_documento_passeggero_2
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Data emissione :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_21_data_emissione_documento_passeggero_2
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Data scadenza :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_22_data_scadenza_documento_passeggero_2
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Estremi atto nascita :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_18_estremi_atto_nascita_passeggero_2
                  }
                </Text>
              </View>{" "}
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Comune iscrizione AIRE :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_19_comune_di_iscrizione_AIRE_passeggero_2
                  }
                </Text>
              </View>
            </View>
          </View>
        </View>
      ) : null}
      ```jsx
      {controllo.A3_03_TabRig_CartaIdentita.fieldData.N_04_nome_passeggero_3 &&
      controllo.A3_03_TabRig_CartaIdentita.fieldData
        .N_03_cognome_passeggero_3 ? (
        <View style={styles.sectionCartaIdentita}>
          <View style={styles.sectionsCartaIdentita}>
            <View style={styles.sectionCartaIdentitaPart1}>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>Conducente : </Text>
                <Text style={styles.responseDataCartaIdentita}>NO</Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Cognome e nome :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {controllo.A3_03_TabRig_CartaIdentita.fieldData
                    .N_03_cognome_passeggero_3 +
                    " " +
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_04_nome_passeggero_3}
                </Text>
              </View>

              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Data di nascita :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_05_data_nascita_passeggero_3
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Luogo di nascita :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_06_luogo_nascita_passeggero_3
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>Sesso : </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_08_sesso_passeggero_3
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>Statura : </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_09_statura_passeggero_3
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>Occhi : </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_10_occhi_passeggero_3
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Cittadinanza :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_11_cittadinanza_passeggero_3
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>CF : </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_12_codice_fiscale_passeggero_3
                  }
                </Text>
              </View>
            </View>
            <View style={styles.sectionCartaIdentitaPart2}>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>Residenza : </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_13_residenza_passeggero_3
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Professione :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_14_professione_passeggero_3
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Stato civile :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_15_stato_civile_passeggero_3
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Ente emettitore :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_02_comune_ufficio_emettitore_passeggero_3
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>Numero doc : </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_20_numero_documento_passeggero_3
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Data emissione :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_21_data_emissione_documento_passeggero_3
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Data scadenza :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_22_data_scadenza_documento_passeggero_3
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Estremi atto nascita :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_18_estremi_atto_nascita_passeggero_3
                  }
                </Text>
              </View>{" "}
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Comune iscrizione AIRE :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_19_comune_di_iscrizione_AIRE_passeggero_3
                  }
                </Text>
              </View>
            </View>
          </View>
        </View>
      ) : null}
      ```jsx
      {controllo.A3_03_TabRig_CartaIdentita.fieldData.N_04_nome_passeggero_4 &&
      controllo.A3_03_TabRig_CartaIdentita.fieldData
        .N_03_cognome_passeggero_4 ? (
        <View style={styles.sectionCartaIdentita}>
          <View style={styles.sectionsCartaIdentita}>
            <View style={styles.sectionCartaIdentitaPart1}>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>Conducente : </Text>
                <Text style={styles.responseDataCartaIdentita}>NO</Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Cognome e nome :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {controllo.A3_03_TabRig_CartaIdentita.fieldData
                    .N_03_cognome_passeggero_4 +
                    " " +
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_04_nome_passeggero_4}
                </Text>
              </View>

              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Data di nascita :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_05_data_nascita_passeggero_4
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Luogo di nascita :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_06_luogo_nascita_passeggero_4
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>Sesso : </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_08_sesso_passeggero_4
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>Statura : </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_09_statura_passeggero_4
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>Occhi : </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_10_occhi_passeggero_4
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Cittadinanza :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_11_cittadinanza_passeggero_4
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>CF : </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_12_codice_fiscale_passeggero_4
                  }
                </Text>
              </View>
            </View>
            <View style={styles.sectionCartaIdentitaPart2}>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>Residenza : </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_13_residenza_passeggero_4
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Professione :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_14_professione_passeggero_4
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Stato civile :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_15_stato_civile_passeggero_4
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Ente emettitore :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_02_comune_ufficio_emettitore_passeggero_4
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>Numero doc : </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_20_numero_documento_passeggero_4
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Data emissione :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_21_data_emissione_documento_passeggero_4
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Data scadenza :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_22_data_scadenza_documento_passeggero_4
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Estremi atto nascita :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_18_estremi_atto_nascita_passeggero_4
                  }
                </Text>
              </View>{" "}
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Comune iscrizione AIRE :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_19_comune_di_iscrizione_AIRE_passeggero_4
                  }
                </Text>
              </View>
            </View>
          </View>
        </View>
      ) : null}
      ```jsx
      {controllo.A3_03_TabRig_CartaIdentita.fieldData.N_04_nome_passeggero_5 &&
      controllo.A3_03_TabRig_CartaIdentita.fieldData
        .N_03_cognome_passeggero_5 ? (
        <View style={styles.sectionCartaIdentita}>
          <View style={styles.sectionsCartaIdentita}>
            <View style={styles.sectionCartaIdentitaPart1}>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>Conducente : </Text>
                <Text style={styles.responseDataCartaIdentita}>NO</Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Cognome e nome :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {controllo.A3_03_TabRig_CartaIdentita.fieldData
                    .N_03_cognome_passeggero_5 +
                    " " +
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_04_nome_passeggero_5}
                </Text>
              </View>

              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Data di nascita :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_05_data_nascita_passeggero_5
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Luogo di nascita :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_06_luogo_nascita_passeggero_5
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>Sesso : </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_08_sesso_passeggero_5
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>Statura : </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_09_statura_passeggero_5
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>Occhi : </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_10_occhi_passeggero_5
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Cittadinanza :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_11_cittadinanza_passeggero_5
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>CF : </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_12_codice_fiscale_passeggero_5
                  }
                </Text>
              </View>
            </View>
            <View style={styles.sectionCartaIdentitaPart2}>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>Residenza : </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_13_residenza_passeggero_5
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Professione :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_14_professione_passeggero_5
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Stato civile :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_15_stato_civile_passeggero_5
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Ente emettitore :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_02_comune_ufficio_emettitore_passeggero_5
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>Numero doc : </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_20_numero_documento_passeggero_5
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Data emissione :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_21_data_emissione_documento_passeggero_5
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Data scadenza :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_22_data_scadenza_documento_passeggero_5
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Estremi atto nascita :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_18_estremi_atto_nascita_passeggero_5
                  }
                </Text>
              </View>{" "}
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataCartaIdentita}>
                  Comune iscrizione AIRE :{" "}
                </Text>
                <Text style={styles.responseDataCartaIdentita}>
                  {
                    controllo.A3_03_TabRig_CartaIdentita.fieldData
                      .N_19_comune_di_iscrizione_AIRE_passeggero_5
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
export default PrintCartaIdentita;
