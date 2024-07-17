import { Text, View, StyleSheet } from "@react-pdf/renderer";

const PrintCartaCircolazione = (props: any) => {
  const controllo = props.controllo;

  const styles = StyleSheet.create({
    sectionCartaCircolazione: {
      display: "flex",
      flexDirection: "column",
    },
    subTitleCartaCircolazione: {
      display: "flex",
      paddingVertical: 14,
      fontSize: 18,
      fontWeight: 700,
    },
    sectionsCartaCircolazione: {
      display: "flex",
      flexDirection: "row",
      height: 300,
      paddingBottom: 15,
      borderBottom: "1px solid gray",
    },
    sectionCartaCircolazionePart1: {
      flex: 1,
      display: "flex",
      justifyContent: "space-between",
    },
    sectionCartaCircolazionePart2: {
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
    titleDataCartaCircolazione: { fontSize: 11 },
    titleDataCartaCircolazioneSM: { fontSize: 11 },
    responseCartaCircolazione: { fontSize: 11 },
  });
  return (
    <View style={styles.sectionCartaCircolazione}>
      <View style={styles.subTitleCartaCircolazione}>
        <Text>Carta di circolazione</Text>
      </View>
      <View style={styles.sectionsCartaCircolazione}>
        <View style={styles.sectionCartaCircolazionePart1}>
          <View style={styles.sectionDato}>
            <Text style={styles.titleDataCartaCircolazione}>
              Categoria Veicolo :
            </Text>
            <Text style={styles.responseCartaCircolazione}>
              {" "}
              {
                controllo.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_09_categorie_veicolo
              }
            </Text>
          </View>
          <View style={styles.sectionDato}>
            <Text style={styles.titleDataCartaCircolazione}>Targa : </Text>
            <Text style={styles.responseCartaCircolazione}>
              {" "}
              {
                controllo.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_01_targa_veicolo
              }
            </Text>
          </View>
          <View style={styles.sectionDato}>
            <Text style={styles.titleDataCartaCircolazione}>
              Data immatricolazione :
            </Text>
            <Text style={styles.responseCartaCircolazione}>
              {" "}
              {
                controllo.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_02_data_prima_immatricolazione
              }
            </Text>
          </View>
          <View style={styles.sectionDato}>
            <Text style={styles.titleDataCartaCircolazione}>
              Intestatario :
            </Text>
            <Text style={styles.responseCartaCircolazione}>
              {" "}
              {controllo.A3_05_TabRig_CartaCircolazione.fieldData
                .N_04_cognome_proprietario +
                " " +
                controllo.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_03_nome_proprietario}
            </Text>
          </View>
          <View style={styles.sectionDato}>
            <Text style={styles.titleDataCartaCircolazione}>
              Data di nascita :
            </Text>
            <Text style={styles.responseCartaCircolazione}>
              {" "}
              {
                controllo.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_05_data_nascita
              }
            </Text>
          </View>
          <View style={styles.sectionDato}>
            <Text style={styles.titleDataCartaCircolazione}>
              Luogo di nascita :
            </Text>
            <Text style={styles.responseCartaCircolazione}>
              {" "}
              {
                controllo.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_06_luogo_nascita
              }
            </Text>
          </View>
          <View style={styles.sectionDato}>
            <Text style={styles.titleDataCartaCircolazione}>
              Marca/Modello veicolo :
            </Text>
            <Text style={styles.responseCartaCircolazione}>
              {" "}
              {
                controllo.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_07_marca_modello_veicolo
              }
            </Text>
          </View>
          <View style={styles.sectionDato}>
            <Text style={styles.titleDataCartaCircolazione}>
              Numero di telaio :
            </Text>
            <Text style={styles.responseCartaCircolazione}>
              {" "}
              {
                controllo.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_08_numero_telaio
              }
            </Text>
          </View>
          <View style={styles.sectionDato}>
            <Text style={styles.titleDataCartaCircolazione}>
              Destinazione d'uso :
            </Text>
            <Text style={styles.responseCartaCircolazione}>
              {" "}
              {
                controllo.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_10_destinazione_uso
              }
            </Text>
          </View>
          <View style={styles.sectionDato}>
            <Text style={styles.titleDataCartaCircolazione}>
              Classe ambientale :
            </Text>
            <Text style={styles.responseCartaCircolazione}>
              {
                controllo.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_12_classe_ambientale
              }
            </Text>
          </View>
          <View style={styles.sectionDato}>
            <Text style={styles.titleDataCartaCircolazione}>
              Direttiva emissioni :
            </Text>
            <Text style={styles.responseCartaCircolazione}>
              {" "}
              {
                controllo.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_11_emissioni
              }
            </Text>
          </View>
          <View style={styles.sectionDato}>
            <Text style={styles.titleDataCartaCircolazione}>
              Valore emissioni :
            </Text>
            <Text style={styles.responseCartaCircolazione}>
              {" "}
              {
                controllo.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_24_Emissioni_co2_g_km
              }
            </Text>
          </View>
        </View>
        <View style={styles.sectionCartaCircolazionePart2}>
          <View style={styles.sectionDato}>
            <Text style={styles.titleDataCartaCircolazione}>
              Combustibile :
            </Text>
            <Text style={styles.responseCartaCircolazione}>
              {" "}
              {
                controllo.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_20_tipo_combustibile_alimentazione
              }
            </Text>
          </View>
          <View style={styles.sectionDato}>
            <Text style={styles.titleDataCartaCircolazione}>
              Numero di assi :
            </Text>
            <Text style={styles.responseCartaCircolazione}>
              {" "}
              {
                controllo.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_14_numero_assi
              }
            </Text>
          </View>
          <View style={styles.sectionDato}>
            <Text style={styles.titleDataCartaCircolazione}>
              Massa a vuoto :
            </Text>
            <Text style={styles.responseCartaCircolazione}>
              {" "}
              {
                controllo.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_13_massa_a_vuoto
              }
            </Text>
          </View>
          <View style={styles.sectionDato}>
            <Text style={styles.titleDataCartaCircolazioneSM}>
              Massa a carico ammissibile :
            </Text>
            <Text style={styles.responseCartaCircolazione}>
              {" "}
              {
                controllo.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_15_massa_massima_a_carico_tecnicamente_ammissibile
              }
            </Text>
          </View>
          <View style={styles.sectionDato}>
            <Text style={styles.titleDataCartaCircolazioneSM}>
              Massa ammissibile a rimorchio frenato :
            </Text>
            <Text style={styles.responseCartaCircolazione}>
              {" "}
              {
                controllo.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_16_massa_massima_a_rimorchio_ammissibile_con_rimorchio_frenato
              }
            </Text>
          </View>
          <View style={styles.sectionDato}>
            <Text style={styles.titleDataCartaCircolazioneSM}>
              Massa ammissibile a rimorchio non frenato :
            </Text>
            <Text style={styles.responseCartaCircolazione}>
              {" "}
              {
                controllo.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_17_massa_massima_a_rimorchio_ammissibile_con_rimorchio_non_frenato
              }
            </Text>
          </View>
          <View style={styles.sectionDato}>
            <Text style={styles.titleDataCartaCircolazione}>Cilindrata :</Text>
            <Text style={styles.responseCartaCircolazione}>
              {" "}
              {
                controllo.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_18_cilindrata
              }
            </Text>
          </View>
          <View style={styles.sectionDato}>
            <Text style={styles.titleDataCartaCircolazione}>Potenza :</Text>
            <Text style={styles.responseCartaCircolazione}>
              {" "}
              {
                controllo.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_19_potenza_netta_kW
              }
            </Text>
          </View>
          <View style={styles.sectionDato}>
            <Text style={styles.titleDataCartaCircolazione}>
              Numero motore :
            </Text>
            <Text style={styles.responseCartaCircolazione}>
              {" "}
              {
                controllo.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_21_numero_id_motore
              }
            </Text>
          </View>
          <View style={styles.sectionDato}>
            <Text style={styles.titleDataCartaCircolazione}>
              Rapporto P/M in kW/kg :
            </Text>
            <Text style={styles.responseCartaCircolazione}>
              {" "}
              {
                controllo.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_22_rapporto_potenza_massa_in_kW_solo_motocicli
              }
            </Text>
          </View>
          <View style={styles.sectionDato}>
            <Text style={styles.titleDataCartaCircolazione}>
              Numero posti a sedere :
            </Text>
            <Text style={styles.responseCartaCircolazione}>
              {" "}
              {
                controllo.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_23_numeri_posti_a_sedere
              }
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default PrintCartaCircolazione;
