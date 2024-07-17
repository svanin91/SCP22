import { Text, View, StyleSheet } from "@react-pdf/renderer";

const PrintPatente = (props: any) => {
  const controllo = props.controllo;

  const styles = StyleSheet.create({
    sectionPatente: {
      display: "flex",
      flexDirection: "column",
    },
    subTitlePatente: {
      display: "flex",
      paddingVertical: 14,
      fontSize: 18,
      fontWeight: 700,
    },
    sectionsPatente: {
      display: "flex",
      flexDirection: "row",
      height: 160,
      paddingBottom: 15,
      borderBottom: "1px solid gray",
    },
    sectionPatentePart1: {
      flex: 1,
      display: "flex",
      justifyContent: "space-between",
    },
    sectionPatentePart2: {
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
    titleDataPatente: { fontSize: 11 },
    responsePatente: { fontSize: 11 },
  });
  return (
    <>
      {controllo.A3_02_TabRig_PatenteGuida.fieldData.N_02_cognome_conducente &&
      controllo.A3_02_TabRig_PatenteGuida.fieldData.N_03_nome_conducente ? (
        <View break style={styles.sectionPatente}>
          <View style={styles.subTitlePatente}>
            <Text>Patente di guida</Text>
          </View>
          <View style={styles.sectionsPatente}>
            <View style={styles.sectionPatentePart1}>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>Conducente : </Text>
                <Text style={styles.responsePatente}>SI</Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>Cognome e nome : </Text>
                <Text style={styles.responsePatente}>
                  {controllo.A3_02_TabRig_PatenteGuida.fieldData
                    .N_02_cognome_conducente +
                    " " +
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_03_nome_conducente}
                </Text>
              </View>

              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>Data di nascita : </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_04_data_nascita_conducente
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>Luogo di nascita : </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_05_luogo_nascita_conducente
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>
                  Categoria patente :{" "}
                </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_10_categoria_patente_conducente
                  }
                </Text>
              </View>
            </View>
            <View style={styles.sectionPatentePart2}>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>
                  Data emissione doc. :{" "}
                </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_06_data_emissione_documento_conducente
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>
                  Data scadenza doc. :{" "}
                </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_07_data_scadenza_documento_conducente
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>Ente rilasciante : </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_08_rilasciata_da_conducente
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>Numero doc. : </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_09_numero_documento_conducente
                  }
                </Text>
              </View>

              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>
                  Annotazioni e restrizioni :{" "}
                </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_11_annotazioni_restrizioni_conducente
                  }
                </Text>
              </View>
            </View>
          </View>
        </View>
      ) : null}
      {controllo.A3_02_TabRig_PatenteGuida.fieldData
        .N_02_cognome_passeggero_1 &&
      controllo.A3_02_TabRig_PatenteGuida.fieldData.N_03_nome_passeggero_1 ? (
        <View break style={styles.sectionPatente}>
          <View style={styles.sectionsPatente}>
            <View style={styles.sectionPatentePart1}>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>Conducente : </Text>
                <Text style={styles.responsePatente}>NO</Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>Cognome e nome : </Text>
                <Text style={styles.responsePatente}>
                  {controllo.A3_02_TabRig_PatenteGuida.fieldData
                    .N_02_cognome_passeggero_1 +
                    " " +
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_03_nome_passeggero_1}
                </Text>
              </View>

              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>Data di nascita : </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_04_data_nascita_passeggero_1
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>Luogo di nascita : </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_05_luogo_nascita_passeggero_1
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>
                  Categoria patente :{" "}
                </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_10_categoria_patente_passeggero_1
                  }
                </Text>
              </View>
            </View>
            <View style={styles.sectionPatentePart2}>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>
                  Data emissione doc. :{" "}
                </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_06_data_emissione_documento_passeggero_1
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>
                  Data scadenza doc. :{" "}
                </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_07_data_scadenza_documento_passeggero_1
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>Ente rilasciante : </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_08_rilasciata_da_passeggero_1
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>Numero doc. : </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_09_numero_documento_passeggero_1
                  }
                </Text>
              </View>

              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>
                  Annotazioni e restrizioni :{" "}
                </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_11_annotazioni_restrizioni_passeggero_1
                  }
                </Text>
              </View>
            </View>
          </View>
        </View>
      ) : null}
      {controllo.A3_02_TabRig_PatenteGuida.fieldData
        .N_02_cognome_passeggero_2 &&
      controllo.A3_02_TabRig_PatenteGuida.fieldData.N_03_nome_passeggero_2 ? (
        <View break style={styles.sectionPatente}>
          <View style={styles.sectionsPatente}>
            <View style={styles.sectionPatentePart1}>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>Conducente : </Text>
                <Text style={styles.responsePatente}>NO</Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>Cognome e nome : </Text>
                <Text style={styles.responsePatente}>
                  {controllo.A3_02_TabRig_PatenteGuida.fieldData
                    .N_02_cognome_passeggero_2 +
                    " " +
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_03_nome_passeggero_2}
                </Text>
              </View>

              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>Data di nascita : </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_04_data_nascita_passeggero_2
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>Luogo di nascita : </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_05_luogo_nascita_passeggero_2
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>
                  Categoria patente :{" "}
                </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_10_categoria_patente_passeggero_2
                  }
                </Text>
              </View>
            </View>
            <View style={styles.sectionPatentePart2}>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>
                  Data emissione doc. :{" "}
                </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_06_data_emissione_documento_passeggero_2
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>
                  Data scadenza doc. :{" "}
                </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_07_data_scadenza_documento_passeggero_2
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>Ente rilasciante : </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_08_rilasciata_da_passeggero_2
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>Numero doc. : </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_09_numero_documento_passeggero_2
                  }
                </Text>
              </View>

              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>
                  Annotazioni e restrizioni :{" "}
                </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_11_annotazioni_restrizioni_passeggero_2
                  }
                </Text>
              </View>
            </View>
          </View>
        </View>
      ) : null}
      {controllo.A3_02_TabRig_PatenteGuida.fieldData
        .N_02_cognome_passeggero_3 &&
      controllo.A3_02_TabRig_PatenteGuida.fieldData.N_03_nome_passeggero_3 ? (
        <View break style={styles.sectionPatente}>
          <View style={styles.sectionsPatente}>
            <View style={styles.sectionPatentePart1}>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>Conducente : </Text>
                <Text style={styles.responsePatente}>NO</Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>Cognome e nome : </Text>
                <Text style={styles.responsePatente}>
                  {controllo.A3_02_TabRig_PatenteGuida.fieldData
                    .N_02_cognome_passeggero_3 +
                    " " +
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_03_nome_passeggero_3}
                </Text>
              </View>

              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>Data di nascita : </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_04_data_nascita_passeggero_3
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>Luogo di nascita : </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_05_luogo_nascita_passeggero_3
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>
                  Categoria patente :{" "}
                </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_10_categoria_patente_passeggero_3
                  }
                </Text>
              </View>
            </View>
            <View style={styles.sectionPatentePart2}>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>
                  Data emissione doc. :{" "}
                </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_06_data_emissione_documento_passeggero_3
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>
                  Data scadenza doc. :{" "}
                </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_07_data_scadenza_documento_passeggero_3
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>Ente rilasciante : </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_08_rilasciata_da_passeggero_3
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>Numero doc. : </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_09_numero_documento_passeggero_3
                  }
                </Text>
              </View>

              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>
                  Annotazioni e restrizioni :{" "}
                </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_11_annotazioni_restrizioni_passeggero_3
                  }
                </Text>
              </View>
            </View>
          </View>
        </View>
      ) : null}
      {controllo.A3_02_TabRig_PatenteGuida.fieldData
        .N_02_cognome_passeggero_4 &&
      controllo.A3_02_TabRig_PatenteGuida.fieldData.N_03_nome_passeggero_4 ? (
        <View break style={styles.sectionPatente}>
          <View style={styles.sectionsPatente}>
            <View style={styles.sectionPatentePart1}>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>Conducente : </Text>
                <Text style={styles.responsePatente}>NO</Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>Cognome e nome : </Text>
                <Text style={styles.responsePatente}>
                  {controllo.A3_02_TabRig_PatenteGuida.fieldData
                    .N_02_cognome_passeggero_4 +
                    " " +
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_03_nome_passeggero_4}
                </Text>
              </View>

              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>Data di nascita : </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_04_data_nascita_passeggero_4
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>Luogo di nascita : </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_05_luogo_nascita_passeggero_4
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>
                  Categoria patente :{" "}
                </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_10_categoria_patente_passeggero_4
                  }
                </Text>
              </View>
            </View>
            <View style={styles.sectionPatentePart2}>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>
                  Data emissione doc. :{" "}
                </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_06_data_emissione_documento_passeggero_4
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>
                  Data scadenza doc. :{" "}
                </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_07_data_scadenza_documento_passeggero_4
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>Ente rilasciante : </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_08_rilasciata_da_passeggero_4
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>Numero doc. : </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_09_numero_documento_passeggero_4
                  }
                </Text>
              </View>

              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>
                  Annotazioni e restrizioni :{" "}
                </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_11_annotazioni_restrizioni_passeggero_4
                  }
                </Text>
              </View>
            </View>
          </View>
        </View>
      ) : null}
      {controllo.A3_02_TabRig_PatenteGuida.fieldData
        .N_02_cognome_passeggero_5 &&
      controllo.A3_02_TabRig_PatenteGuida.fieldData.N_03_nome_passeggero_5 ? (
        <View break style={styles.sectionPatente}>
          <View style={styles.sectionsPatente}>
            <View style={styles.sectionPatentePart1}>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>Conducente: </Text>
                <Text style={styles.responsePatente}>NO</Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>Cognome e nome : </Text>
                <Text style={styles.responsePatente}>
                  {controllo.A3_02_TabRig_PatenteGuida.fieldData
                    .N_02_cognome_passeggero_5 +
                    " " +
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_03_nome_passeggero_5}
                </Text>
              </View>

              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>Data di nascita : </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_04_data_nascita_passeggero_5
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>Luogo di nascita : </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_05_luogo_nascita_passeggero_5
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>
                  Categoria patente :{" "}
                </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_10_categoria_patente_passeggero_5
                  }
                </Text>
              </View>
            </View>
            <View style={styles.sectionPatentePart2}>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>
                  Data emissione doc. :{" "}
                </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_06_data_emissione_documento_passeggero_5
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>
                  Data scadenza doc. :{" "}
                </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_07_data_scadenza_documento_passeggero_5
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>Ente rilasciante : </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_08_rilasciata_da_passeggero_5
                  }
                </Text>
              </View>
              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>Numero doc. : </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_09_numero_documento_passeggero_5
                  }
                </Text>
              </View>

              <View style={styles.sectionDato}>
                <Text style={styles.titleDataPatente}>
                  Annotazioni e restrizioni :{" "}
                </Text>
                <Text style={styles.responsePatente}>
                  {
                    controllo.A3_02_TabRig_PatenteGuida.fieldData
                      .N_11_annotazioni_restrizioni_passeggero_5
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
export default PrintPatente;
