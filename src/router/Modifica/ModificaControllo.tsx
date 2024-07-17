import { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { LoggedContext } from "../../Context/LoggedContext";
import { AddContext } from "../../Context/AddControlContext";
import { useNavigate, NavigateOptions } from "react-router-dom";

import InputSelectRegione from "../Component/Input/InputRegione";
import InputSelectProvincia from "../Component/Input/InputProvincia";
import InputComune from "../Component/Input/InputComune";
import InputIndirizzo from "../Component/Input/InputIndirizzo";

import InputSelectOperatore from "../Component/Input/InputOperatore";
import TabsCreateUpdate from "../Tabs/TabsCreateUpdate";
import axios from "axios";
import resetContext from "../../Reset_Context/ResetContext";
import InputTime from "../Component/Input/inputTime";
import InputDate from "../Component/Input/InputData";
import InputCAP from "../Component/Input/InputCAP";
import ErrorPopup from "../PopUp/ErrorPopup";
import { TabActiveContext } from "../../Context/TabActiveContext";
import { NuovoControlloContext } from "../../Context/NuovoControlloContext";
import EsciPopUp from "../PopUp/uscitaPopUp";

import { BeatLoader } from "react-spinners";
import { css } from "@emotion/react";
import InputText from "../Component/Input/InputText";
import InputNumber from "../Component/Input/InputNumber";

/**
 * IN QUESTO FILE VENGONO GENERATE PIU CHIAMATE AUTOMATICHE PER OGNI TABELLA.
 * PER OGNI TABELLA PARTE UN SCRIPT, CONTENETE IL NUMERO DOCUMENTO, CHE CREERà UN NOVO RECORD COPIA DEL PRECEDENTE PER OGNI TABELLA CON ID DOCUMENTO
 * QUELLO CHE GLI VIENE PASSATO COME PARAMETRO, LO SCRIPT RESTITUIRà PER OGNI RECORD IN OGNI TABELLA UN IDRECORD FILEMAKER
 * CON QUESTO ID RECORD FILMAKER IL SISTEMA MODIFICHERà, CON UN ALTRA CHIAMATA, IL CONTENUTO VUOTO DEI CAMPI CON IL CONTENUTO PRESENTE NEL CONTEXT
 * (MODIFICATO DELL'INSERIMENTO DI DATI NEI CAMPI INPUT DI DATI DA PARTE DELL'UTENTE).
 * SE NELLA TEBELLA SONO PRESENTI CAMPI DATA, PARTE UN ULTERIORE CHIMATA PER PRELEVARE IL VALORE DI DATA_STRING, RICAVARNE DA ESSO UN VALORE DI TIPO
 * DATA E VALORIZZARE IL CAMPO DATA DI TIPO DATE NEL DB
 */
function numeroGiornoSettimana(dataStringa: string) {
  // Suddividi la stringa nel formato dd/mm/yyyy
  const partiData = dataStringa.split("/");
  if (partiData.length !== 3) {
    throw new Error("La data fornita non è valida");
  }

  const giorno = parseInt(partiData[0], 10);
  const mese = parseInt(partiData[1], 10) - 1; // I mesi in JavaScript sono indicizzati da 0
  const anno = parseInt(partiData[2], 10);

  // Crea un oggetto Date
  const data = new Date(anno, mese, giorno);

  // Verifica se la data è valida
  if (isNaN(data.getTime())) {
    throw new Error("La data fornita non è valida");
  }

  // Ottieni il numero del giorno della settimana (0 per Domenica, 1 per Lunedì, ..., 6 per Sabato)
  const numeroGiorno = data.getDay();

  // Aggiusta il numero del giorno della settimana per renderlo compreso tra 1 e 7
  // (1 per Lunedì, ..., 7 per Domenica)
  return numeroGiorno === 0 ? 7 : numeroGiorno;
}

const ModificaControllo = () => {
  const LoggedMyContext = useContext(LoggedContext);
  const ControlloMyContext = useContext(AddContext);
  const TabActiveMyContext = useContext(TabActiveContext);
  const NuovoControlloMyContext = useContext(NuovoControlloContext);
  const navigate = useNavigate();
  const [showAuthError, setShowAuthError] = useState(false);
  const [messaggioPopUp, setMessaggioPopUp] = useState("");
  const [mostraPopUpUscita, setMostraPopUpUscita] = useState(false);
  const [loading, setLoading] = useState(false);
  const [stringaCategoriaPatente, setStringaCategoriaPatente] = useState("");
  const location = useLocation();
  const controllo = location.state.controllo;
  const numeroControllo = location.state.idControllo;

  const override = css`
  display: block,
  margin: 0 auto
`;

  const validTabs = [
    "tab2",
    "tab3",
    "tab4",
    "tab5",
    "tab6",
    "tab7",
    "tab8",
    "tab9",
  ];

  const indietroTabs = () => {
    switch (TabActiveMyContext.tabActive) {
      case "tab2":
        TabActiveMyContext.setTabActive("tab1");
        break;
      case "tab3":
        TabActiveMyContext.setTabActive("tab2");
        break;
      case "tab4":
        TabActiveMyContext.setTabActive("tab3");
        break;
      case "tab5":
        TabActiveMyContext.setTabActive("tab4");
        break;
      case "tab6":
        TabActiveMyContext.setTabActive("tab5");
        break;
      case "tab7":
        TabActiveMyContext.setTabActive("tab6");
        break;
      case "tab8":
        TabActiveMyContext.setTabActive("tab7");
        break;
      case "tab9":
        TabActiveMyContext.setTabActive("tab8");
        break;
      default:
        console.log("Nessuna tab precedente disponibile");
    }
  };

  let stringaNormeViolate;

  const controlKeysControlliEseguiti = [
    "ControlloMyContext.A2_TabRig_informazioni_generali_D_33_verifica_revisione",
    "ControlloMyContext.A2_TabRig_informazioni_generali_D_35_verifica_scarico",
    "ControlloMyContext.A2_TabRig_informazioni_generali_D_36_verifica_cinture_sicurezza",
    "ControlloMyContext.A2_TabRig_informazioni_generali_D_37_verifica_pneumatici",
    "ControlloMyContext.A2_TabRig_informazioni_generali_D_38_verifica_luci",
    "ControlloMyContext.A2_TabRig_informazioni_generali_D_34_verifica_assicurazione",
  ];

  const contextDataControlliEseguiti = {
    "ControlloMyContext.A2_TabRig_informazioni_generali_D_33_verifica_revisione":
      ControlloMyContext.A2_TabRig_informazioni_generali_D_33_verifica_revisione,
    "ControlloMyContext.A2_TabRig_informazioni_generali_D_35_verifica_scarico":
      ControlloMyContext.A2_TabRig_informazioni_generali_D_35_verifica_scarico,
    "ControlloMyContext.A2_TabRig_informazioni_generali_D_36_verifica_cinture_sicurezza":
      ControlloMyContext.A2_TabRig_informazioni_generali_D_36_verifica_cinture_sicurezza,
    "ControlloMyContext.A2_TabRig_informazioni_generali_D_37_verifica_pneumatici":
      ControlloMyContext.A2_TabRig_informazioni_generali_D_37_verifica_pneumatici,
    "ControlloMyContext.A2_TabRig_informazioni_generali_D_38_verifica_luci":
      ControlloMyContext.A2_TabRig_informazioni_generali_D_38_verifica_luci,
    "ControlloMyContext.A2_TabRig_informazioni_generali_D_34_verifica_assicurazione":
      ControlloMyContext.A2_TabRig_informazioni_generali_D_34_verifica_assicurazione,
  };

  const getControlliEseguitiString = (contextDataControlliEseguiti: any) => {
    let controlliEseguitiString = "";

    // Itera attraverso ogni chiave nel contesto
    controlKeysControlliEseguiti.forEach((key, index) => {
      if (key) {
        // Verifica se il valore della chiave nel contesto è 1
        if (contextDataControlliEseguiti[key] === 1) {
          // Ottieni il nome del controllo dalla chiave
          let controllo = key.split("_").pop().replace(/_/g, " ");
          if (controllo === "sicurezza") {
            controllo = "cinture di sicurezza";
          }
          // Aggiungi il nome del controllo alla stringa
          controlliEseguitiString += controllo;
          // Aggiungi la virgola se non è l'ultimo controllo

          if (index < controlKeysControlliEseguiti.length - 1) {
            controlliEseguitiString += ", ";
          }
        }
      }
    });
    // Rimuove l'ultima virgola e spazio se presenti
    if (controlliEseguitiString.endsWith(", ")) {
      controlliEseguitiString = controlliEseguitiString.slice(0, -2);
    }
    return controlliEseguitiString;
  };

  // Funzione per ottenere i documenti ritirati come stringa

  const controlKeysDocumentiRitirati = [
    "ControlloMyContext.A2_TabRig_informazioni_generali_D_28_patente_ritirata",
    "ControlloMyContext.A2_TabRig_informazioni_generali_D_31_carta_circolazione_ritirata",
    "ControlloMyContext.A2_TabRig_informazioni_generali_D_32_certificato_assicurazione_ritirato",
  ];

  const contextDataDocumentiRitirati = {
    "ControlloMyContext.A2_TabRig_informazioni_generali_D_28_patente_ritirata":
      ControlloMyContext.A2_TabRig_informazioni_generali_D_28_patente_ritirata,
    "ControlloMyContext.A2_TabRig_informazioni_generali_D_31_carta_circolazione_ritirata":
      ControlloMyContext.A2_TabRig_informazioni_generali_D_31_carta_circolazione_ritirata,
    "ControlloMyContext.A2_TabRig_informazioni_generali_D_32_certificato_assicurazione_ritirato":
      ControlloMyContext.A2_TabRig_informazioni_generali_D_32_certificato_assicurazione_ritirato,
  };

  // Funzione per ottenere i controlli eseguiti come stringa
  const getDocumentiRitiratiString = (contextDataDocumentiRitirati: any) => {
    let documentiRitiratiString = "";

    // Itera attraverso ogni chiave nel contesto
    controlKeysDocumentiRitirati.forEach((key, index) => {
      if (key) {
        // Verifica se il valore della chiave nel contesto è 1
        if (contextDataDocumentiRitirati[key] === 1) {
          // Ottieni il nome del controllo dalla chiave
          let controllo = key
            .split("informazioni_generali_")
            .pop()
            .replace(/_/g, " ");
          if (controllo === "D 28 patente ritirata") {
            controllo = "pantente";
          } else if (controllo === "D 32 certificato assicurazione ritirato") {
            controllo = "certificato assicurazione";
          } else if (controllo === "D 31 carta circolazione ritirata") {
            controllo = "carta di circolazione";
          }

          // Aggiungi il nome del controllo alla stringa
          documentiRitiratiString += controllo;
          // Aggiungi la virgola se non è l'ultimo controllo

          if (index < controlKeysDocumentiRitirati.length - 1) {
            documentiRitiratiString += ", ";
          }
        }
      }
    });
    // Rimuove l'ultima virgola e spazio se presenti
    if (documentiRitiratiString.endsWith(", ")) {
      documentiRitiratiString = documentiRitiratiString.slice(0, -2);
    }
    return documentiRitiratiString;
  };

  const dataA2_TabRig_informazioni_generali = {
    fieldData: {
      D_01_data:
        ControlloMyContext?.A2_TabRig_informazioni_generali_D_01_data?.toString(),
      D_01_numero_pattuglia:
        ControlloMyContext.A2_TabRig_informazioni_generali_D_01_numero_pattuglia,
      D_01_turno:
        ControlloMyContext.A2_TabRig_informazioni_generali_D_01_turno.trim(),
      D_02_ora_inizio:
        ControlloMyContext?.A2_TabRig_informazioni_generali_D_02_ora_inizio,
      D_03_ora_fine:
        ControlloMyContext?.A2_TabRig_informazioni_generali_D_03_ora_fine,
      D_04_numero_giorno_settimana:
        ControlloMyContext?.A2_TabRig_informazioni_generali_D_01_data
          ? numeroGiornoSettimana(
              ControlloMyContext?.A2_TabRig_informazioni_generali_D_01_data
            )
          : undefined,
      D_05_latitudine:
        ControlloMyContext?.A2_TabRig_informazioni_generali_D_05_latitudine,
      D_06_longitudine:
        ControlloMyContext?.A2_TabRig_informazioni_generali_D_06_longitudine,
      D_07_provincia:
        ControlloMyContext?.A2_TabRig_informazioni_generali_D_07_provincia.trim(),
      D_08_comune:
        ControlloMyContext?.A2_TabRig_informazioni_generali_D_08_comune,
      D_09_codice_avviamento_postale:
        ControlloMyContext?.A2_TabRig_informazioni_generali_D_09_codice_avviamento_postale,
      D_10_regione:
        ControlloMyContext?.A2_TabRig_informazioni_generali_D_10_regione.trim(),
      D_11_indirizzo:
        ControlloMyContext?.A2_TabRig_informazioni_generali_D_11_indirizzo,
      D_12_nome_operatore:
        ControlloMyContext?.A2_TabRig_informazioni_generali_D_12_nome_operatore.trim(),
      D_13_cognome_operatore:
        ControlloMyContext?.A2_TabRig_informazioni_generali_D_13_cognome_operatore.trim(),
      D_15_targa:
        ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_01_targa_veicolo,
      D_16_nome_patente_conducente:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_03_nome_conducente,
      D_17_cognome_patente_conducente:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_02_cognome_conducente,
      D_18_nome_proprietario:
        ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_03_nome_proprietario,
      D_19_cognome_proprietario:
        ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_04_cognome_proprietario,
      D_20_numero_patente_conducente:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_09_numero_documento_conducente.trim(),
      D_21_numero_carta_id_conducente:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_20_numero_documento_conducente.trim(),
      D_22_numero_passaporto_conducente:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_04_numero_passaporto_conducente,
      D_23_marca_modello_veicolo:
        ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_07_marca_modello_veicolo.trim(),
      D_24_cognome_nome_operatore:
        ControlloMyContext?.A2_TabRig_informazioni_generali_D_13_cognome_operatore.trim() +
        " " +
        ControlloMyContext?.A2_TabRig_informazioni_generali_D_12_nome_operatore.trim(),
      D_24_cognome_nome_operatore_2:
        ControlloMyContext?.A2_TabRig_informazioni_generali_D_13_cognome_operatore_2.trim() +
        " " +
        ControlloMyContext?.A2_TabRig_informazioni_generali_D_12_nome_operatore_2.trim(),
      D_25_norme_violate: stringaNormeViolate,
      D_26_documenti_ritirati: getDocumentiRitiratiString(
        contextDataDocumentiRitirati
      ),
      D_27_controlli_eseguiti: getControlliEseguitiString(
        contextDataControlliEseguiti
      ),
      D_28_patente_ritirata:
        ControlloMyContext.A2_TabRig_informazioni_generali_D_28_patente_ritirata
          ? ControlloMyContext.A2_TabRig_informazioni_generali_D_28_patente_ritirata
          : 0,
      D_29_tipo_mezzo:
        ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_09_categorie_veicolo,
      D_30_note: ControlloMyContext.A2_TabRig_informazioni_generali_D_30_note,
      D_31_carta_circolazione_ritirata:
        ControlloMyContext.A2_TabRig_informazioni_generali_D_31_carta_circolazione_ritirata
          ? ControlloMyContext.A2_TabRig_informazioni_generali_D_31_carta_circolazione_ritirata
          : 0,
      D_32_certificato_assicurazione_ritirato:
        ControlloMyContext.A2_TabRig_informazioni_generali_D_32_certificato_assicurazione_ritirato
          ? ControlloMyContext.A2_TabRig_informazioni_generali_D_32_certificato_assicurazione_ritirato
          : 0,
      D_33_verifica_revisione:
        ControlloMyContext.A2_TabRig_informazioni_generali_D_33_verifica_revisione
          ? ControlloMyContext.A2_TabRig_informazioni_generali_D_33_verifica_revisione
          : 0,
      D_34_verifica_assicurazione:
        ControlloMyContext.A2_TabRig_informazioni_generali_D_34_verifica_assicurazione
          ? ControlloMyContext.A2_TabRig_informazioni_generali_D_34_verifica_assicurazione
          : 0,
      D_35_verifica_scarico:
        ControlloMyContext.A2_TabRig_informazioni_generali_D_35_verifica_scarico
          ? ControlloMyContext.A2_TabRig_informazioni_generali_D_35_verifica_scarico
          : 0,
      D_36_verifica_cinture_sicurezza:
        ControlloMyContext.A2_TabRig_informazioni_generali_D_36_verifica_cinture_sicurezza
          ? ControlloMyContext.A2_TabRig_informazioni_generali_D_36_verifica_cinture_sicurezza
          : 0,
      D_37_verifica_pneumatici:
        ControlloMyContext.A2_TabRig_informazioni_generali_D_37_verifica_pneumatici
          ? ControlloMyContext.A2_TabRig_informazioni_generali_D_37_verifica_pneumatici
          : 0,
      D_38_verifica_luci:
        ControlloMyContext.A2_TabRig_informazioni_generali_D_38_verifica_luci
          ? ControlloMyContext.A2_TabRig_informazioni_generali_D_38_verifica_luci
          : 0,
      D_39_targa_rimorchio:
        ControlloMyContext.A2_TabRig_informazioni_generali_D_39_targa_rimorchio,
      D_40_nome_cartaIdentita_conducente:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_04_nome_conducente,
      D_41_cognome_cartaidentita_conducente:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_04_nome_conducente,
      D_42_nome_passaporto_conducente:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_06_nome_conducente,
      D_43_cognome_passaporto_conducente:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_05_cognome_conducente,
      D_44_numero_patente_passeggero_1:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_09_numero_documento_passeggero_1,
      D_45_numero_carta_id_passeggero_1:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_20_numero_documento_passeggero_1,
      D_46_numero_passaporto_passeggero_1:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_04_numero_passaporto_passeggero_1,
      D_47_nome_patente_passeggero_1:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_03_nome_passeggero_1,
      D_48_cognome_patente_passeggero_1:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_02_cognome_passeggero_1,
      D_49_nome_cartaIdentita_passeggero_1:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_04_nome_passeggero_1,
      D_50_cognome_cartaIdentita_passeggero_1:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_03_cognome_passeggero_1,
      D_51_nome_passaporto_passeggero_1:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_06_nome_passeggero_1,
      D_52_cognome_passaporto_passeggero_1:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_05_cognome_passeggero_1,
      D_53_numero_patente_passeggero_2:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_09_numero_documento_passeggero_2,
      D_54_numero_carta_id_passeggero_2:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_20_numero_documento_passeggero_2,
      D_55_numero_passaporto_passeggero_2:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_04_numero_passaporto_passeggero_2,
      D_56_nome_patente_passeggero_2:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_03_nome_passeggero_2,
      D_57_cognome_patente_passeggero_2:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_02_cognome_passeggero_2,
      D_58_nome_cartaIdentita_passeggero_2:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_04_nome_passeggero_2,
      D_59_cognome_cartaIdentita_passeggero_2:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_03_cognome_passeggero_2,
      D_60_nome_passaporto_passeggero_2:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_06_nome_passeggero_2,
      D_61_cognome_passaporto_passeggero_2:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_05_cognome_passeggero_2,
      D_62_numero_patente_passeggero_3:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_09_numero_documento_passeggero_3,
      D_63_numero_carta_id_passeggero_3:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_20_numero_documento_passeggero_3,
      D_64_numero_passaporto_passeggero_3:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_04_numero_passaporto_passeggero_3,
      D_65_nome_patente_passeggero_3:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_03_nome_passeggero_3,
      D_66_cognome_patente_passeggero_3:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_02_cognome_passeggero_3,
      D_67_nome_cartaIdentita_passeggero_3:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_04_nome_passeggero_3,
      D_68_cognome_cartaIdentita_passeggero_3:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_03_cognome_passeggero_3,
      D_69_nome_passaporto_passeggero_3:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_06_nome_passeggero_3,
      D_70_cognome_passaporto_passeggero_3:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_05_cognome_passeggero_3,
      D_71_numero_patente_passeggero_4:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_09_numero_documento_passeggero_4,
      D_72_numero_carta_id_passeggero_4:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_20_numero_documento_passeggero_4,
      D_73_numero_passaporto_passeggero_4:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_04_numero_passaporto_passeggero_4,
      D_74_nome_patente_passeggero_4:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_03_nome_passeggero_4,
      D_75_cognome_patente_passeggero_4:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_02_cognome_passeggero_4,
      D_76_nome_cartaIdentita_passeggero_4:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_04_nome_passeggero_4,
      D_77_cognome_cartaIdentita_passeggero_4:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_03_cognome_passeggero_4,
      D_78_nome_passaporto_passeggero_4:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_06_nome_passeggero_4,
      D_79_cognome_passaporto_passeggero_4:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_05_cognome_passeggero_4,
      D_80_numero_patente_passeggero_5:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_09_numero_documento_passeggero_5,
      D_81_numero_carta_id_passeggero_5:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_20_numero_documento_passeggero_5,
      D_82_numero_passaporto_passeggero_5:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_04_numero_passaporto_passeggero_5,
      D_83_nome_patente_passeggero_5:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_03_nome_passeggero_5,
      D_84_cognome_patente_passeggero_5:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_02_cognome_passeggero_5,
      D_85_nome_cartaIdentita_passeggero_5:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_04_nome_passeggero_5,
      D_86_cognome_cartaIdentita_passeggero_5:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_03_cognome_passeggero_5,
      D_87_nome_passaporto_passeggero_5:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_06_nome_passeggero_5,
      D_88_cognome_passaporto_passeggero_5:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_05_cognome_passeggero_5,
    },
  };

  /**
   * setto i context al render della pagina
   */

  useEffect(() => {
    const arrayCategoriaPatente =
      ControlloMyContext.A3_02_TabRig_PatenteGuida_N_10_categoria_patente_conducente;
    setStringaCategoriaPatente(arrayCategoriaPatente.join(","));

    const arrayNormeViolate =
      ControlloMyContext.A2_TabRig_informazioni_generali_D_25_norme_violate;

    // Converti l'array in una stringa separata da virgole
    stringaNormeViolate = arrayNormeViolate.join(",");
  }, [
    ControlloMyContext?.A2_TabRig_informazioni_generali_D_01_data,
    //ControlloMyContext.A3_02_TabRig_PatenteGuida_N_10_categoria_patente_conducente,
  ]);

  const createInformazioniGenerali = async () => {
    setLoading(true);
    try {
      await axios.patch("http://localhost:10100/createInformazioniGenerali", {
        dataA2_TabRig_informazioni_generali,
        id_record_informazioni_generali:
          NuovoControlloMyContext.id_record_informazioni_generali,
      });
    } catch (error) {
      console.error(
        "Errore durante la richiesta Informazioni generali:",
        error
      );
    }
    setLoading(false);
  };

  /**
   * costruisco un body da inviare a node
   */

  const dataA3_02_TabRig_PatenteGuida = {
    fieldData: {
      N_02_cognome_conducente:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_02_cognome_conducente,
      N_03_nome_conducente:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_03_nome_conducente,
      N_04_data_nascita_conducente:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_04_data_nascita_conducente?.toString(),
      N_05_luogo_nascita_conducente:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_05_luogo_nascita_conducente,
      N_06_data_emissione_documento_conducente:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_06_data_emissione_documento_conducente?.toString(),
      N_07_data_scadenza_documento_conducente:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_07_data_scadenza_documento_conducente?.toString(),
      N_08_rilasciata_da_conducente:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_08_rilasciata_da_conducente,
      N_09_numero_documento_conducente:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_09_numero_documento_conducente,
      N_10_categoria_patente_conducente: stringaCategoriaPatente,
      N_11_annotazioni_restrizioni_conducente:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_11_annotazioni_restrizioni_conducente,
      N_02_cognome_passeggero_1:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_02_cognome_passeggero_1,
      N_03_nome_passeggero_1:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_03_nome_passeggero_1,
      N_04_data_nascita_passeggero_1:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_04_data_nascita_passeggero_1?.toString(),
      N_05_luogo_nascita_passeggero_1:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_05_luogo_nascita_passeggero_1,
      N_06_data_emissione_documento_passeggero_1:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_06_data_emissione_documento_passeggero_1?.toString(),
      N_07_data_scadenza_documento_passeggero_1:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_07_data_scadenza_documento_passeggero_1?.toString(),
      N_08_rilasciata_da_passeggero_1:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_08_rilasciata_da_passeggero_1,
      N_09_numero_documento_passeggero_1:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_09_numero_documento_passeggero_1,
      N_10_categoria_patente_passeggero_1: stringaCategoriaPatente,
      N_11_annotazioni_restrizioni_passeggero_1:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_11_annotazioni_restrizioni_passeggero_1,
      N_02_cognome_passeggero_2:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_02_cognome_passeggero_2,
      N_03_nome_passeggero_2:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_03_nome_passeggero_2,
      N_04_data_nascita_passeggero_2:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_04_data_nascita_passeggero_2?.toString(),
      N_05_luogo_nascita_passeggero_2:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_05_luogo_nascita_passeggero_2,
      N_06_data_emissione_documento_passeggero_2:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_06_data_emissione_documento_passeggero_2?.toString(),
      N_07_data_scadenza_documento_passeggero_2:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_07_data_scadenza_documento_passeggero_2?.toString(),
      N_08_rilasciata_da_passeggero_2:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_08_rilasciata_da_passeggero_2,
      N_09_numero_documento_passeggero_2:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_09_numero_documento_passeggero_2,
      N_10_categoria_patente_passeggero_2: stringaCategoriaPatente,
      N_11_annotazioni_restrizioni_passeggero_2:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_11_annotazioni_restrizioni_passeggero_2,
      N_02_cognome_passeggero_3:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_02_cognome_passeggero_3,
      N_03_nome_passeggero_3:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_03_nome_passeggero_3,
      N_04_data_nascita_passeggero_3:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_04_data_nascita_passeggero_3?.toString(),
      N_05_luogo_nascita_passeggero_3:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_05_luogo_nascita_passeggero_3,
      N_06_data_emissione_documento_passeggero_3:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_06_data_emissione_documento_passeggero_3?.toString(),
      N_07_data_scadenza_documento_passeggero_3:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_07_data_scadenza_documento_passeggero_3?.toString(),
      N_08_rilasciata_da_passeggero_3:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_08_rilasciata_da_passeggero_3,
      N_09_numero_documento_passeggero_3:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_09_numero_documento_passeggero_3,
      N_10_categoria_patente_passeggero_3: stringaCategoriaPatente,
      N_11_annotazioni_restrizioni_passeggero_3:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_11_annotazioni_restrizioni_passeggero_3,
      N_02_cognome_passeggero_4:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_02_cognome_passeggero_4,
      N_03_nome_passeggero_4:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_03_nome_passeggero_4,
      N_04_data_nascita_passeggero_4:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_04_data_nascita_passeggero_4?.toString(),
      N_05_luogo_nascita_passeggero_4:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_05_luogo_nascita_passeggero_4,
      N_06_data_emissione_documento_passeggero_4:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_06_data_emissione_documento_passeggero_4?.toString(),
      N_07_data_scadenza_documento_passeggero_4:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_07_data_scadenza_documento_passeggero_4?.toString(),
      N_08_rilasciata_da_passeggero_4:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_08_rilasciata_da_passeggero_4,
      N_09_numero_documento_passeggero_4:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_09_numero_documento_passeggero_4,
      N_10_categoria_patente_passeggero_4: stringaCategoriaPatente,
      N_11_annotazioni_restrizioni_passeggero_4:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_11_annotazioni_restrizioni_passeggero_4,
      N_02_cognome_passeggero_5:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_02_cognome_passeggero_5,
      N_03_nome_passeggero_5:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_03_nome_passeggero_5,
      N_04_data_nascita_passeggero_5:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_04_data_nascita_passeggero_5?.toString(),
      N_05_luogo_nascita_passeggero_5:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_05_luogo_nascita_passeggero_5,
      N_06_data_emissione_documento_passeggero_5:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_06_data_emissione_documento_passeggero_5?.toString(),
      N_07_data_scadenza_documento_passeggero_5:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_07_data_scadenza_documento_passeggero_5?.toString(),
      N_08_rilasciata_da_passeggero_5:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_08_rilasciata_da_passeggero_5,
      N_09_numero_documento_passeggero_5:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_09_numero_documento_passeggero_5,
      N_10_categoria_patente_passeggero_5: stringaCategoriaPatente,
      N_11_annotazioni_restrizioni_passeggero_5:
        ControlloMyContext.A3_02_TabRig_PatenteGuida_N_11_annotazioni_restrizioni_passeggero_5,
    },
  };

  const createPatente = async () => {
    setLoading(true);
    try {
      await axios.patch("http://localhost:10100/createPatente", {
        dataA3_02_TabRig_PatenteGuida,
        id_record_patente: NuovoControlloMyContext.id_record_patente, // Utilizza la variabile scriptResult precedentemente definita
      });
    } catch (error) {
      console.error("Errore durante la richiesta Patente:", error);
    }
    setLoading(false);
  };

  const dataA3_03_TabRig_CartaIdentita = {
    fieldData: {
      N_02_comune_ufficio_emettitore_conducente:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_02_comune_ufficio_emettitore_conducente,
      N_03_cognome_conducente:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_03_cognome_conducente,
      N_04_nome_conducente:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_04_nome_conducente,
      N_05_data_nascita_conducente:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_05_data_nascita_conducente?.toString(),
      N_06_luogo_nascita_conducente:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_06_luogo_nascita_conducente,
      N_08_sesso_conducente:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_08_sesso_conducente,
      N_09_statura_conducente:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_09_statura_conducente,
      N_10_occhi_conducente:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_10_occhi_conducente,
      N_11_cittadinanza_conducente:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_11_cittadinanza_conducente,
      N_12_codice_fiscale_conducente:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_12_codice_fiscale_conducente,
      N_13_residenza_conducente:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_13_residenza_conducente,
      N_14_professione_conducente:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_14_professione_conducente,
      N_15_stato_civile_conducente:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_15_stato_civile_conducente,
      N_16_eventuale_non_validita_per_espatrio_conducente:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_16_eventuale_non_validita_per_espatrio_conducente,
      N_17_nome_cognome_padre_nel_caso_minore_conducente:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_17_nome_cognome_padre_nel_caso_minore_conducente,
      N_23_nome_cognome_madre_nel_caso_minore_conducente:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_23_nome_cognome_madre_nel_caso_minore_conducente,
      N_18_estremi_atto_nascita_conducente:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_18_estremi_atto_nascita_conducente,
      N_19_comune_di_iscrizione_AIRE_conducente:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_19_comune_di_iscrizione_AIRE_conducente,
      N_20_numero_documento_conducente:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_20_numero_documento_conducente,
      N_21_data_emissione_documento_conducente:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_21_data_emissione_documento_conducente?.toString(),
      N_22_data_scadenza_documento_conducente:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_22_data_scadenza_documento_conducente?.toString(),
      N_02_comune_ufficio_emettitore_passeggero_1:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_02_comune_ufficio_emettitore_passeggero_1,
      N_03_cognome_passeggero_1:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_03_cognome_passeggero_1,
      N_04_nome_passeggero_1:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_04_nome_passeggero_1,
      N_05_data_nascita_passeggero_1:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_05_data_nascita_passeggero_1?.toString(),
      N_06_luogo_nascita_passeggero_1:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_06_luogo_nascita_passeggero_1,
      N_08_sesso_passeggero_1:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_08_sesso_passeggero_1,
      N_09_statura_passeggero_1:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_09_statura_passeggero_1,
      N_10_occhi_passeggero_1:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_10_occhi_passeggero_1,
      N_11_cittadinanza_passeggero_1:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_11_cittadinanza_passeggero_1,
      N_12_codice_fiscale_passeggero_1:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_12_codice_fiscale_passeggero_1,
      N_13_residenza_passeggero_1:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_13_residenza_passeggero_1,
      N_14_professione_passeggero_1:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_14_professione_passeggero_1,
      N_15_stato_civile_passeggero_1:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_15_stato_civile_passeggero_1,
      N_16_eventuale_non_validita_per_espatrio_passeggero_1:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_16_eventuale_non_validita_per_espatrio_passeggero_1,
      N_17_nome_cognome_padre_nel_caso_minore_passeggero_1:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_17_nome_cognome_padre_nel_caso_minore_passeggero_1,
      N_23_nome_cognome_madre_nel_caso_minore_passeggero_1:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_23_nome_cognome_madre_nel_caso_minore_passeggero_1,
      N_18_estremi_atto_nascita_passeggero_1:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_18_estremi_atto_nascita_passeggero_1,
      N_19_comune_di_iscrizione_AIRE_passeggero_1:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_19_comune_di_iscrizione_AIRE_passeggero_1,
      N_20_numero_documento_passeggero_1:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_20_numero_documento_passeggero_1,
      N_21_data_emissione_documento_passeggero_1:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_21_data_emissione_documento_passeggero_1?.toString(),
      N_22_data_scadenza_documento_passeggero_1:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_22_data_scadenza_documento_passeggero_1?.toString(),
      N_02_comune_ufficio_emettitore_passeggero_2:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_02_comune_ufficio_emettitore_passeggero_2,
      N_03_cognome_passeggero_2:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_03_cognome_passeggero_2,
      N_04_nome_passeggero_2:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_04_nome_passeggero_2,
      N_05_data_nascita_passeggero_2:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_05_data_nascita_passeggero_2?.toString(),
      N_06_luogo_nascita_passeggero_2:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_06_luogo_nascita_passeggero_2,
      N_08_sesso_passeggero_2:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_08_sesso_passeggero_2,
      N_09_statura_passeggero_2:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_09_statura_passeggero_2,
      N_10_occhi_passeggero_2:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_10_occhi_passeggero_2,
      N_11_cittadinanza_passeggero_2:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_11_cittadinanza_passeggero_2,
      N_12_codice_fiscale_passeggero_2:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_12_codice_fiscale_passeggero_2,
      N_13_residenza_passeggero_2:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_13_residenza_passeggero_2,
      N_14_professione_passeggero_2:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_14_professione_passeggero_2,
      N_15_stato_civile_passeggero_2:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_15_stato_civile_passeggero_2,
      N_16_eventuale_non_validita_per_espatrio_passeggero_2:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_16_eventuale_non_validita_per_espatrio_passeggero_2,
      N_17_nome_cognome_padre_nel_caso_minore_passeggero_2:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_17_nome_cognome_padre_nel_caso_minore_passeggero_2,
      N_23_nome_cognome_madre_nel_caso_minore_passeggero_2:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_23_nome_cognome_madre_nel_caso_minore_passeggero_2,
      N_18_estremi_atto_nascita_passeggero_2:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_18_estremi_atto_nascita_passeggero_2,
      N_19_comune_di_iscrizione_AIRE_passeggero_2:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_19_comune_di_iscrizione_AIRE_passeggero_2,
      N_20_numero_documento_passeggero_2:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_20_numero_documento_passeggero_2,
      N_21_data_emissione_documento_passeggero_2:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_21_data_emissione_documento_passeggero_2?.toString(),
      N_22_data_scadenza_documento_passeggero_2:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_22_data_scadenza_documento_passeggero_2?.toString(),
      N_02_comune_ufficio_emettitore_passeggero_3:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_02_comune_ufficio_emettitore_passeggero_3,
      N_03_cognome_passeggero_3:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_03_cognome_passeggero_3,
      N_04_nome_passeggero_3:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_04_nome_passeggero_3,
      N_05_data_nascita_passeggero_3:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_05_data_nascita_passeggero_3?.toString(),
      N_06_luogo_nascita_passeggero_3:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_06_luogo_nascita_passeggero_3,
      N_08_sesso_passeggero_3:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_08_sesso_passeggero_3,
      N_09_statura_passeggero_3:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_09_statura_passeggero_3,
      N_10_occhi_passeggero_3:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_10_occhi_passeggero_3,
      N_11_cittadinanza_passeggero_3:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_11_cittadinanza_passeggero_3,
      N_12_codice_fiscale_passeggero_3:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_12_codice_fiscale_passeggero_3,
      N_13_residenza_passeggero_3:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_13_residenza_passeggero_3,
      N_14_professione_passeggero_3:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_14_professione_passeggero_3,
      N_15_stato_civile_passeggero_3:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_15_stato_civile_passeggero_3,
      N_16_eventuale_non_validita_per_espatrio_passeggero_3:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_16_eventuale_non_validita_per_espatrio_passeggero_3,
      N_17_nome_cognome_padre_nel_caso_minore_passeggero_3:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_17_nome_cognome_padre_nel_caso_minore_passeggero_3,
      N_23_nome_cognome_madre_nel_caso_minore_passeggero_3:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_23_nome_cognome_madre_nel_caso_minore_passeggero_3,
      N_18_estremi_atto_nascita_passeggero_3:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_18_estremi_atto_nascita_passeggero_3,
      N_19_comune_di_iscrizione_AIRE_passeggero_3:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_19_comune_di_iscrizione_AIRE_passeggero_3,
      N_20_numero_documento_passeggero_3:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_20_numero_documento_passeggero_3,
      N_21_data_emissione_documento_passeggero_3:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_21_data_emissione_documento_passeggero_3?.toString(),
      N_22_data_scadenza_documento_passeggero_3:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_22_data_scadenza_documento_passeggero_3?.toString(),
      N_02_comune_ufficio_emettitore_passeggero_4:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_02_comune_ufficio_emettitore_passeggero_4,
      N_03_cognome_passeggero_4:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_03_cognome_passeggero_4,
      N_04_nome_passeggero_4:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_04_nome_passeggero_4,
      N_05_data_nascita_passeggero_4:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_05_data_nascita_passeggero_4?.toString(),
      N_06_luogo_nascita_passeggero_4:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_06_luogo_nascita_passeggero_4,
      N_08_sesso_passeggero_4:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_08_sesso_passeggero_4,
      N_09_statura_passeggero_4:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_09_statura_passeggero_4,
      N_10_occhi_passeggero_4:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_10_occhi_passeggero_4,
      N_11_cittadinanza_passeggero_4:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_11_cittadinanza_passeggero_4,
      N_12_codice_fiscale_passeggero_4:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_12_codice_fiscale_passeggero_4,
      N_13_residenza_passeggero_4:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_13_residenza_passeggero_4,
      N_14_professione_passeggero_4:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_14_professione_passeggero_4,
      N_15_stato_civile_passeggero_4:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_15_stato_civile_passeggero_4,
      N_16_eventuale_non_validita_per_espatrio_passeggero_4:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_16_eventuale_non_validita_per_espatrio_passeggero_4,
      N_17_nome_cognome_padre_nel_caso_minore_passeggero_4:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_17_nome_cognome_padre_nel_caso_minore_passeggero_4,
      N_23_nome_cognome_madre_nel_caso_minore_passeggero_4:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_23_nome_cognome_madre_nel_caso_minore_passeggero_4,
      N_18_estremi_atto_nascita_passeggero_4:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_18_estremi_atto_nascita_passeggero_4,
      N_19_comune_di_iscrizione_AIRE_passeggero_4:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_19_comune_di_iscrizione_AIRE_passeggero_4,
      N_20_numero_documento_passeggero_4:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_20_numero_documento_passeggero_4,
      N_21_data_emissione_documento_passeggero_4:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_21_data_emissione_documento_passeggero_4?.toString(),
      N_22_data_scadenza_documento_passeggero_4:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_22_data_scadenza_documento_passeggero_4?.toString(),
      N_02_comune_ufficio_emettitore_passeggero_5:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_02_comune_ufficio_emettitore_passeggero_5,
      N_03_cognome_passeggero_5:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_03_cognome_passeggero_5,
      N_04_nome_passeggero_5:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_04_nome_passeggero_5,
      N_05_data_nascita_passeggero_5:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_05_data_nascita_passeggero_5?.toString(),
      N_06_luogo_nascita_passeggero_5:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_06_luogo_nascita_passeggero_5,
      N_08_sesso_passeggero_5:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_08_sesso_passeggero_5,
      N_09_statura_passeggero_5:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_09_statura_passeggero_5,
      N_10_occhi_passeggero_5:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_10_occhi_passeggero_5,
      N_11_cittadinanza_passeggero_5:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_11_cittadinanza_passeggero_5,
      N_12_codice_fiscale_passeggero_5:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_12_codice_fiscale_passeggero_5,
      N_13_residenza_passeggero_5:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_13_residenza_passeggero_5,
      N_14_professione_passeggero_5:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_14_professione_passeggero_5,
      N_15_stato_civile_passeggero_5:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_15_stato_civile_passeggero_5,
      N_16_eventuale_non_validita_per_espatrio_passeggero_5:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_16_eventuale_non_validita_per_espatrio_passeggero_5,
      N_17_nome_cognome_padre_nel_caso_minore_passeggero_5:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_17_nome_cognome_padre_nel_caso_minore_passeggero_5,
      N_23_nome_cognome_madre_nel_caso_minore_passeggero_5:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_23_nome_cognome_madre_nel_caso_minore_passeggero_5,
      N_18_estremi_atto_nascita_passeggero_5:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_18_estremi_atto_nascita_passeggero_5,
      N_19_comune_di_iscrizione_AIRE_passeggero_5:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_19_comune_di_iscrizione_AIRE_passeggero_5,
      N_20_numero_documento_passeggero_5:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_20_numero_documento_passeggero_5,
      N_21_data_emissione_documento_passeggero_5:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_21_data_emissione_documento_passeggero_5?.toString(),
      N_22_data_scadenza_documento_passeggero_5:
        ControlloMyContext.A3_03_TabRig_CartaIdentita_N_22_data_scadenza_documento_passeggero_5?.toString(),
    },
  };

  const createCartaIdentita = async () => {
    setLoading(true);
    try {
      await axios.patch("http://localhost:10100/createCartaIdentita", {
        dataA3_03_TabRig_CartaIdentita,
        id_record_cartaIdentita:
          NuovoControlloMyContext.id_record_cartaIdentita, // Utilizza la variabile scriptResult precedentemente definita
      });
    } catch (error) {
      console.error("Errore durante la richiesta Carta Identita:", error);
    }
    setLoading(false);
  };

  const dataA3_04_TabRig_Passaporto = {
    fieldData: {
      N_02_tipo_conducente:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_02_tipo_conducente,
      N_03_codice_paese_conducente:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_03_codice_paese_conducente,
      N_04_numero_passaporto_conducente:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_04_numero_passaporto_conducente,
      N_05_cognome_conducente:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_05_cognome_conducente,
      N_06_nome_conducente:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_06_nome_conducente,
      N_07_cittadinanza_conducente:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_07_cittadinanza_conducente,
      N_08_data_nascita_conducente:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_08_data_nascita_conducente?.toString(),
      N_09_luogo_nascita_conducente:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_09_luogo_nascita_conducente,
      N_10_sesso_conducente:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_10_sesso_conducente,
      N_11_data_emissione_documento_conducente:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_11_data_emissione_documento_conducente?.toString(),
      N_12_data_scadenza_documento_conducente:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_12_data_scadenza_documento_conducente?.toString(),
      N_13_autorita_emittente_conducente:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_13_autorita_emittente_conducente,
      N_02_tipo_passeggero_1:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_02_tipo_passeggero_1,
      N_03_codice_paese_passeggero_1:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_03_codice_paese_passeggero_1,
      N_04_numero_passaporto_passeggero_1:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_04_numero_passaporto_passeggero_1,
      N_05_cognome_passeggero_1:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_05_cognome_passeggero_1,
      N_06_nome_passeggero_1:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_06_nome_passeggero_1,
      N_07_cittadinanza_passeggero_1:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_07_cittadinanza_passeggero_1,
      N_08_data_nascita_passeggero_1:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_08_data_nascita_passeggero_1?.toString(),
      N_09_luogo_nascita_passeggero_1:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_09_luogo_nascita_passeggero_1,
      N_10_sesso_passeggero_1:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_10_sesso_passeggero_1,
      N_11_data_emissione_documento_passeggero_1:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_11_data_emissione_documento_passeggero_1?.toString(),
      N_12_data_scadenza_documento_passeggero_1:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_12_data_scadenza_documento_passeggero_1?.toString(),
      N_13_autorita_emittente_passeggero_1:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_13_autorita_emittente_passeggero_1,
      N_02_tipo_passeggero_2:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_02_tipo_passeggero_2,
      N_03_codice_paese_passeggero_2:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_03_codice_paese_passeggero_2,
      N_04_numero_passaporto_passeggero_2:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_04_numero_passaporto_passeggero_2,
      N_05_cognome_passeggero_2:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_05_cognome_passeggero_2,
      N_06_nome_passeggero_2:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_06_nome_passeggero_2,
      N_07_cittadinanza_passeggero_2:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_07_cittadinanza_passeggero_2,
      N_08_data_nascita_passeggero_2:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_08_data_nascita_passeggero_2?.toString(),
      N_09_luogo_nascita_passeggero_2:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_09_luogo_nascita_passeggero_2,
      N_10_sesso_passeggero_2:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_10_sesso_passeggero_2,
      N_11_data_emissione_documento_passeggero_2:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_11_data_emissione_documento_passeggero_2?.toString(),
      N_12_data_scadenza_documento_passeggero_2:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_12_data_scadenza_documento_passeggero_2?.toString(),
      N_13_autorita_emittente_passeggero_2:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_13_autorita_emittente_passeggero_2,
      N_02_tipo_passeggero_3:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_02_tipo_passeggero_3,
      N_03_codice_paese_passeggero_3:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_03_codice_paese_passeggero_3,
      N_04_numero_passaporto_passeggero_3:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_04_numero_passaporto_passeggero_3,
      N_05_cognome_passeggero_3:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_05_cognome_passeggero_3,
      N_06_nome_passeggero_3:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_06_nome_passeggero_3,
      N_07_cittadinanza_passeggero_3:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_07_cittadinanza_passeggero_3,
      N_08_data_nascita_passeggero_3:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_08_data_nascita_passeggero_3?.toString(),
      N_09_luogo_nascita_passeggero_3:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_09_luogo_nascita_passeggero_3,
      N_10_sesso_passeggero_3:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_10_sesso_passeggero_3,
      N_11_data_emissione_documento_passeggero_3:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_11_data_emissione_documento_passeggero_3?.toString(),
      N_12_data_scadenza_documento_passeggero_3:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_12_data_scadenza_documento_passeggero_3?.toString(),
      N_13_autorita_emittente_passeggero_3:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_13_autorita_emittente_passeggero_3,
      N_02_tipo_passeggero_4:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_02_tipo_passeggero_4,
      N_03_codice_paese_passeggero_4:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_03_codice_paese_passeggero_4,
      N_04_numero_passaporto_passeggero_4:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_04_numero_passaporto_passeggero_4,
      N_05_cognome_passeggero_4:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_05_cognome_passeggero_4,
      N_06_nome_passeggero_4:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_06_nome_passeggero_4,
      N_07_cittadinanza_passeggero_4:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_07_cittadinanza_passeggero_4,
      N_08_data_nascita_passeggero_4:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_08_data_nascita_passeggero_4?.toString(),
      N_09_luogo_nascita_passeggero_4:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_09_luogo_nascita_passeggero_4,
      N_10_sesso_passeggero_4:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_10_sesso_passeggero_4,
      N_11_data_emissione_documento_passeggero_4:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_11_data_emissione_documento_passeggero_4?.toString(),
      N_12_data_scadenza_documento_passeggero_4:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_12_data_scadenza_documento_passeggero_4?.toString(),
      N_13_autorita_emittente_passeggero_4:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_13_autorita_emittente_passeggero_4,
      N_02_tipo_passeggero_5:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_02_tipo_passeggero_5,
      N_03_codice_paese_passeggero_5:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_03_codice_paese_passeggero_5,
      N_04_numero_passaporto_passeggero_5:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_04_numero_passaporto_passeggero_5,
      N_05_cognome_passeggero_5:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_05_cognome_passeggero_5,
      N_06_nome_passeggero_5:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_06_nome_passeggero_5,
      N_07_cittadinanza_passeggero_5:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_07_cittadinanza_passeggero_5,
      N_08_data_nascita_passeggero_5:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_08_data_nascita_passeggero_5?.toString(),
      N_09_luogo_nascita_passeggero_5:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_09_luogo_nascita_passeggero_5,
      N_10_sesso_passeggero_5:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_10_sesso_passeggero_5,
      N_11_data_emissione_documento_passeggero_5:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_11_data_emissione_documento_passeggero_5?.toString(),
      N_12_data_scadenza_documento_passeggero_5:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_12_data_scadenza_documento_passeggero_5?.toString(),
      N_13_autorita_emittente_passeggero_5:
        ControlloMyContext.A3_04_TabRig_Passaporto_N_13_autorita_emittente_passeggero_5,
    },
  };

  const createPassaporto = async () => {
    setLoading(true);
    try {
      await axios.patch("http://localhost:10100/createPassaporto", {
        dataA3_04_TabRig_Passaporto,
        id_record_passaporto: NuovoControlloMyContext.id_record_passaporto, // Utilizza la variabile scriptResult precedentemente definita
      });
    } catch (error) {
      console.error("Errore durante la richiesta passaporto:", error);
    }
    setLoading(false);
  };

  const dataA3_05_TabRig_CartaCircolazione = {
    fieldData: {
      N_01_targa_veicolo:
        ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_01_targa_veicolo,
      N_02_data_prima_immatricolazione:
        ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_02_data_prima_immatricolazione?.toString(),
      N_03_nome_proprietario:
        ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_03_nome_proprietario,
      N_04_cognome_proprietario:
        ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_04_cognome_proprietario,
      N_05_data_nascita:
        ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_05_data_nascita?.toString(),
      N_06_luogo_nascita:
        ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_06_luogo_nascita,
      N_07_marca_modello_veicolo:
        ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_07_marca_modello_veicolo,
      N_08_numero_telaio:
        ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_08_numero_telaio,
      N_09_categorie_veicolo:
        ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_09_categorie_veicolo,
      N_10_destinazione_uso:
        ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_10_destinazione_uso,
      N_11_emissioni:
        ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_11_emissioni,
      N_12_classe_ambientale:
        ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_12_classe_ambientale,
      N_13_massa_a_vuoto:
        ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_13_massa_a_vuoto,
      N_14_numero_assi:
        ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_14_numero_assi,
      N_15_massa_massima_a_carico_tecnicamente_ammissibile:
        ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_15_massa_massima_a_carico_tecnicamente_ammissibile,
      N_16_massa_massima_a_rimorchio_ammissibile_con_rimorchio_frenato:
        ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_16_massa_massima_a_rimorchio_ammissibile_con_rimorchio_frenato,
      N_17_massa_massima_a_rimorchio_ammissibile_con_rimorchio_non_frenato:
        ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_17_massa_massima_a_rimorchio_ammissibile_con_rimorchio_non_frenato,
      N_18_cilindrata:
        ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_18_cilindrata,
      N_19_potenza_netta_kW:
        ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_19_potenza_netta_kW,
      N_20_tipo_combustibile_alimentazione:
        ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_20_tipo_combustibile_alimentazione,
      N_21_numero_id_motore:
        ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_21_numero_id_motore,
      N_22_rapporto_potenza_massa_in_kW_solo_motocicli:
        ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_22_rapporto_potenza_massa_in_kW_solo_motocicli,
      N_23_numeri_posti_a_sedere:
        ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_23_numeri_posti_a_sedere,
      N_24_Emissioni_co2_g_km:
        ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_24_Emissioni_co2_g_km,
    },
  };

  const createCartaCircolazione = async () => {
    setLoading(true);
    try {
      await axios.patch("http://localhost:10100/createCartaCircolazione", {
        dataA3_05_TabRig_CartaCircolazione,
        id_record_cartaCircolazione:
          NuovoControlloMyContext.id_record_cartaCircolazione,
        // Utilizza la variabile scriptResult precedentemente definita
      });
    } catch (error) {
      console.error(
        "Errore durante la richiesta Carta di circolazione:",
        error
      );
    }
    setLoading(false);
  };

  const dataA3_06_TabRig_CertificatoAssicurazione = {
    fieldData: {
      N_01_nome:
        ControlloMyContext.A3_06_TabRig_CertificatoAssicurazione_N_01_nome,
      N_02_cognome:
        ControlloMyContext.A3_06_TabRig_CertificatoAssicurazione_N_02_cognome,
      N_03_indirizzo_residenza:
        ControlloMyContext.A3_06_TabRig_CertificatoAssicurazione_N_03_indirizzo_residenza,
      N_04_nome_compagnia_assicurativa:
        ControlloMyContext.A3_06_TabRig_CertificatoAssicurazione_N_04_nome_compagnia_assicurativa,
      N_05_targa_veicolo:
        ControlloMyContext.A3_06_TabRig_CertificatoAssicurazione_N_05_targa_veicolo,
      N_06_numero_polizza:
        ControlloMyContext.A3_06_TabRig_CertificatoAssicurazione_N_06_numero_polizza,
      N_07_data_inizio_polizza:
        ControlloMyContext.A3_06_TabRig_CertificatoAssicurazione_N_07_data_inizio_polizza?.toString(),
      N_08_data_fine_polizza:
        ControlloMyContext?.A3_06_TabRig_CertificatoAssicurazione_N_08_data_fine_polizza?.toString(),
      N_09_marca_modello_veicolo:
        ControlloMyContext.A3_06_TabRig_CertificatoAssicurazione_N_09_marca_modello_veicolo,
      N_10_cilindrata:
        ControlloMyContext.A3_06_TabRig_CertificatoAssicurazione_N_10_cilindrata,
      N_11_potenza:
        ControlloMyContext.A3_06_TabRig_CertificatoAssicurazione_N_11_potenza,
      N_12_carburante:
        ControlloMyContext.A3_06_TabRig_CertificatoAssicurazione_N_12_carburante,
    },
  };

  const createCertificatoAssicurazione = async () => {
    setLoading(true);
    try {
      await axios.patch(
        "http://localhost:10100/createCertificatoAssicurazione",
        {
          dataA3_06_TabRig_CertificatoAssicurazione,
          id_record_certificatoAssicurazione:
            NuovoControlloMyContext.id_record_certificatoAssicurazione, // Utilizza la variabile scriptResult precedentemente definita
        }
      );
    } catch (error) {
      console.error(
        "Errore durante la richiesta certificato assicurazione:",
        error
      );
    }
    setLoading(false);
  };

  const dataA4_01_TabRig_Immagini = {
    fieldData: {
      M_immagine_01: ControlloMyContext.A4_01_TabRig_Immagini_M_immagine_01,
      M_immagine_02: ControlloMyContext.A4_01_TabRig_Immagini_M_immagine_02,
      M_immagine_03: ControlloMyContext.A4_01_TabRig_Immagini_M_immagine_03,
      M_immagine_04: ControlloMyContext.A4_01_TabRig_Immagini_M_immagine_04,
      M_immagine_05: ControlloMyContext.A4_01_TabRig_Immagini_M_immagine_05,
      M_immagine_06: ControlloMyContext.A4_01_TabRig_Immagini_M_immagine_06,
      M_immagine_07: ControlloMyContext.A4_01_TabRig_Immagini_M_immagine_07,
      M_immagine_08: ControlloMyContext.A4_01_TabRig_Immagini_M_immagine_08,
      M_immagine_09: ControlloMyContext.A4_01_TabRig_Immagini_M_immagine_09,
      M_immagine_10: ControlloMyContext.A4_01_TabRig_Immagini_M_immagine_10,
      M_immagine_11: ControlloMyContext.A4_01_TabRig_Immagini_M_immagine_11,
      M_immagine_12: ControlloMyContext.A4_01_TabRig_Immagini_M_immagine_12,
      M_immagine_13: ControlloMyContext.A4_01_TabRig_Immagini_M_immagine_13,
      M_immagine_14: ControlloMyContext.A4_01_TabRig_Immagini_M_immagine_14,
      M_immagine_15: ControlloMyContext.A4_01_TabRig_Immagini_M_immagine_15,
      M_immagine_16: ControlloMyContext.A4_01_TabRig_Immagini_M_immagine_16,
      M_immagine_17: ControlloMyContext.A4_01_TabRig_Immagini_M_immagine_17,
      M_immagine_18: ControlloMyContext.A4_01_TabRig_Immagini_M_immagine_18,
      M_immagine_19: ControlloMyContext.A4_01_TabRig_Immagini_M_immagine_19,
      M_immagine_20: ControlloMyContext.A4_01_TabRig_Immagini_M_immagine_20,
      M_immagine_21: ControlloMyContext.A4_01_TabRig_Immagini_M_immagine_21,
      M_immagine_22: ControlloMyContext.A4_01_TabRig_Immagini_M_immagine_22,
      M_immagine_23: ControlloMyContext.A4_01_TabRig_Immagini_M_immagine_23,
      M_immagine_24: ControlloMyContext.A4_01_TabRig_Immagini_M_immagine_24,
      M_immagine_25: ControlloMyContext.A4_01_TabRig_Immagini_M_immagine_25,
      M_immagine_26: ControlloMyContext.A4_01_TabRig_Immagini_M_immagine_26,
      M_immagine_27: ControlloMyContext.A4_01_TabRig_Immagini_M_immagine_27,
      M_immagine_28: ControlloMyContext.A4_01_TabRig_Immagini_M_immagine_28,
      M_immagine_29: ControlloMyContext.A4_01_TabRig_Immagini_M_immagine_29,
      M_immagine_30: ControlloMyContext.A4_01_TabRig_Immagini_M_immagine_30,
    },
  };

  const createImmagini = async () => {
    setLoading(true);
    try {
      await axios.patch("http://localhost:10100/createImmagini", {
        dataA4_01_TabRig_Immagini,
        id_record_Immagini: NuovoControlloMyContext.id_record_Immagini, // Utilizza la variabile scriptResult precedentemente definita
      });
    } catch (error) {
      console.error("Errore durante la richiesta immagini:", error);
    }
    setLoading(false);
  };

  // questa fuzione fa partire tutte le funzioni necessarie alla creazione di un nuovo controllo

  const handleAuthenticationError = (testo: string) => {
    setMessaggioPopUp(testo);
    setShowAuthError(true);
  };

  const closeErrorPopup = () => {
    setShowAuthError(false);
  };

  const handlePopUpUscita = () => {
    setMostraPopUpUscita(true);
  };
  const closeUscitaPopup = () => {
    setMostraPopUpUscita(false);
  };

  /**
   * chiamata per salvare il body in database
   */

  const submitData = async () => {
    if (TabActiveMyContext.tabActive === "tab1") {
      if (
        !ControlloMyContext?.A2_TabRig_informazioni_generali_D_02_ora_inizio
      ) {
        handleAuthenticationError("Ora di inizio del controllo non inserita");
      } else if (
        !ControlloMyContext.A2_TabRig_informazioni_generali_D_03_ora_fine
      ) {
        handleAuthenticationError("Ora di fine del controllo non inserita");
      } else if (
        !ControlloMyContext.A2_TabRig_informazioni_generali_D_12_nome_operatore
      ) {
        handleAuthenticationError("Operatore non selezoinato");
      } else if (
        !ControlloMyContext.A2_TabRig_informazioni_generali_D_10_regione
      ) {
        handleAuthenticationError(
          "Selezionare la Regione dove é stato effettuato il controllo"
        );
      } else if (
        !ControlloMyContext.A2_TabRig_informazioni_generali_D_07_provincia
      ) {
        handleAuthenticationError(
          "Selezionare la Provincia dove é stato effettuato il controllo"
        );
      } else if (
        !ControlloMyContext.A2_TabRig_informazioni_generali_D_08_comune
      ) {
        handleAuthenticationError(
          "Non è stato specificato il comune dove é stato effettuato il controllo"
        );
      } else if (
        !ControlloMyContext.A2_TabRig_informazioni_generali_D_09_codice_avviamento_postale
      ) {
        handleAuthenticationError(
          "Inserire il codice di avviamento postale della località dove é stato effettuato il controllo"
        );
      } else if (
        ControlloMyContext.A2_TabRig_informazioni_generali_D_09_codice_avviamento_postale.toString()
          .length !== 5 ||
        !/^\d{5}$/.test(
          ControlloMyContext.A2_TabRig_informazioni_generali_D_09_codice_avviamento_postale.toString()
        )
      ) {
        handleAuthenticationError(
          "Il codice di avviamento postale non è stato inserito o non è stato inserito nella maniera corretta"
        );
      } else if (
        !ControlloMyContext.A2_TabRig_informazioni_generali_D_11_indirizzo
      ) {
        handleAuthenticationError("Indirizzo del controllo mancante");
      }

      createCartaCircolazione();
      TabActiveMyContext.setTabActive("tab2");
    } else if (TabActiveMyContext.tabActive === "tab2") {
      createPatente();
      TabActiveMyContext.setTabActive("tab3");
    } else if (TabActiveMyContext.tabActive === "tab3") {
      createCartaIdentita();
      TabActiveMyContext.setTabActive("tab4");
    } else if (TabActiveMyContext.tabActive === "tab4") {
      createPassaporto();
      TabActiveMyContext.setTabActive("tab5");
    } else if (TabActiveMyContext.tabActive === "tab5") {
      createCertificatoAssicurazione();
      TabActiveMyContext.setTabActive("tab6");
    } else if (TabActiveMyContext.tabActive === "tab6") {
      setLoading(true);
      setLoading(false);
      TabActiveMyContext.setTabActive("tab7");
    } else if (TabActiveMyContext.tabActive === "tab7") {
      setLoading(true);
      setLoading(false);
      TabActiveMyContext.setTabActive("tab8");
    } else if (TabActiveMyContext.tabActive === "tab8") {
      createInformazioniGenerali();
      TabActiveMyContext.setTabActive("tab9");
    } else if (TabActiveMyContext.tabActive === "tab9") {
      createImmagini();
      resetContext(ControlloMyContext);
      TabActiveMyContext.setTabActive("tab1");
      navigate(`/SCP22`);
    } else {
      console.log("non c'é nulla da caricare");
    }
  };

  /**
   * Una volta salvato, resetto il context
   */

  return (
    <div
      className="bg-gray-200 w-screen h-screen px-4 pt-16 grid grid-cols-5"
      style={{ userSelect: "none" }}
    >
      <div className="col-span-1 h-full">
        <div
          className="h-full flex  border-r  border-gray-400 pr-3 "
          style={{ height: "calc(100% - 4rem)" }}
        >
          <div className="flex flex-col justify-around">
            <ul className="space-y-6 flex flex-col w-full">
              <li className="grid grid-cols-2 items-center ">
                <p className="pr-3 text-red-500">Pattuglia N. :</p>
                <InputNumber
                  initial={
                    controllo.A2_TabRig_informazioni_generali.fieldData
                      .D_01_numero_pattuglia
                  }
                  thisState={
                    ControlloMyContext.A2_TabRig_informazioni_generali_D_01_numero_pattuglia
                  }
                  thisSetState={
                    ControlloMyContext.setA2_TabRig_informazioni_generali_D_01_numero_pattuglia
                  }
                />
              </li>
              <li className="grid grid-cols-2 items-center ">
                <p className="pr-3 text-red-500">Turno:</p>
                <InputText
                  initial={
                    controllo.A2_TabRig_informazioni_generali.fieldData
                      .D_01_turno
                  }
                  thisState={
                    ControlloMyContext.A2_TabRig_informazioni_generali_D_01_turno
                  }
                  thisSetState={
                    ControlloMyContext.setA2_TabRig_informazioni_generali_D_01_turno
                  }
                />
              </li>
              <li className="grid grid-cols-2 items-center ">
                <p className="pr-3 text-red-500">Data:</p>
                <InputDate
                  initial={
                    controllo.A2_TabRig_informazioni_generali.fieldData
                      .D_01_data
                  }
                  thisState={
                    ControlloMyContext.A2_TabRig_informazioni_generali_D_01_data
                  }
                  thisSetState={
                    ControlloMyContext.setA2_TabRig_informazioni_generali_D_01_data
                  }
                />
              </li>
              <li className="grid grid-cols-2 items-center">
                <p className="pr-3 text-red-500">Seleziona operatore:</p>
                <InputSelectOperatore
                  initialNome={
                    controllo.A2_TabRig_informazioni_generali.fieldData
                      .D_12_nome_operatore
                  }
                  initialCognome={
                    controllo.A2_TabRig_informazioni_generali.fieldData
                      .D_13_cognome_operatore
                  }
                  thisStateNome={
                    ControlloMyContext?.A2_TabRig_informazioni_generali_D_12_nome_operatore
                  }
                  thisSetStateNome={
                    ControlloMyContext?.setA2_TabRig_informazioni_generali_D_12_nome_operatore
                  }
                  thisStateCognome={
                    ControlloMyContext?.A2_TabRig_informazioni_generali_D_13_cognome_operatore
                  }
                  thisSetStateCognome={
                    ControlloMyContext?.setA2_TabRig_informazioni_generali_D_13_cognome_operatore
                  }
                />
              </li>
              <li className="grid grid-cols-2 items-center">
                <p className="pr-3 text-red-500">
                  Seleziona secondo operatore:
                </p>
                <InputSelectOperatore
                  initialNome={
                    controllo.A2_TabRig_informazioni_generali.fieldData
                      .D_12_nome_operatore_2
                  }
                  initialCognome={
                    controllo.A2_TabRig_informazioni_generali.fieldData
                      .D_13_cognome_operatore_2
                  }
                  thisStateNome={
                    ControlloMyContext?.A2_TabRig_informazioni_generali_D_12_nome_operatore_2
                  }
                  thisSetStateNome={
                    ControlloMyContext?.setA2_TabRig_informazioni_generali_D_12_nome_operatore_2
                  }
                  thisStateCognome={
                    ControlloMyContext?.A2_TabRig_informazioni_generali_D_13_cognome_operatore_2
                  }
                  thisSetStateCognome={
                    ControlloMyContext?.setA2_TabRig_informazioni_generali_D_13_cognome_operatore_2
                  }
                />
              </li>
              <li className="grid grid-cols-2 items-center">
                <p className="pr-3 text-red-500">Orario di inizio:</p>
                <InputTime
                  initial={
                    controllo.A2_TabRig_informazioni_generali.fieldData
                      .D_02_ora_inizio
                  }
                  thisState={
                    ControlloMyContext?.A2_TabRig_informazioni_generali_D_02_ora_inizio
                  }
                  thisSetState={
                    ControlloMyContext?.setA2_TabRig_informazioni_generali_D_02_ora_inizio
                  }
                />
              </li>
              <li className="grid grid-cols-2 items-center">
                <p className="pr-3 text-red-500">Orario di fine:</p>
                <InputTime
                  initial={
                    controllo.A2_TabRig_informazioni_generali.fieldData
                      .D_03_ora_fine
                  }
                  thisState={
                    ControlloMyContext?.A2_TabRig_informazioni_generali_D_03_ora_fine
                  }
                  thisSetState={
                    ControlloMyContext?.setA2_TabRig_informazioni_generali_D_03_ora_fine
                  }
                />
              </li>
              <li className="grid grid-cols-2 items-center">
                <p className="pr-3 text-red-500">Regione:</p>
                <InputSelectRegione
                  initial={
                    controllo.A2_TabRig_informazioni_generali.fieldData
                      .D_10_regione
                  }
                  thisState={
                    ControlloMyContext?.A2_TabRig_informazioni_generali_D_10_regione
                  }
                  thisSetState={
                    ControlloMyContext?.setA2_TabRig_informazioni_generali_D_10_regione
                  }
                />
              </li>
              <li className="grid grid-cols-2 items-center">
                <p className="pr-3 text-red-500">Provincia:</p>
                <InputSelectProvincia
                  initial={
                    controllo.A2_TabRig_informazioni_generali.fieldData
                      .D_07_provincia
                  }
                  regioneControllo={
                    ControlloMyContext?.A2_TabRig_informazioni_generali_D_10_regione
                  }
                  thisState={
                    ControlloMyContext?.A2_TabRig_informazioni_generali_D_07_provincia
                  }
                  thisSetState={
                    ControlloMyContext?.setA2_TabRig_informazioni_generali_D_07_provincia
                  }
                />
              </li>
              <li className="grid grid-cols-2 items-center">
                <p className="pr-3 text-red-500">Comune:</p>
                <InputComune
                  initial={
                    controllo.A2_TabRig_informazioni_generali.fieldData
                      .D_08_comune
                  }
                  thisState={
                    ControlloMyContext?.A2_TabRig_informazioni_generali_D_08_comune
                  }
                  thisSetState={
                    ControlloMyContext?.setA2_TabRig_informazioni_generali_D_08_comune
                  }
                />
              </li>
              <li className="grid grid-cols-2 items-center">
                <p className="pr-3 text-red-500">Indirizzo:</p>
                <InputIndirizzo
                  initial={
                    controllo.A2_TabRig_informazioni_generali.fieldData
                      .D_11_indirizzo
                  }
                  thisState={
                    ControlloMyContext?.A2_TabRig_informazioni_generali_D_11_indirizzo
                  }
                  thisSetState={
                    ControlloMyContext?.setA2_TabRig_informazioni_generali_D_11_indirizzo
                  }
                />
              </li>
              <li className="grid grid-cols-2 items-center">
                <p className="pr-3 text-red-500">Codice avviamento postale:</p>
                <InputCAP
                  initial={
                    controllo.A2_TabRig_informazioni_generali.fieldData
                      .D_09_codice_avviamento_postale
                  }
                  thisState={
                    ControlloMyContext?.A2_TabRig_informazioni_generali_D_09_codice_avviamento_postale
                  }
                  thisSetState={
                    ControlloMyContext?.setA2_TabRig_informazioni_generali_D_09_codice_avviamento_postale
                  }
                  placeholder="CAP"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-span-4 h-full ">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-2xl pl-4 flex ">
              {"Modifica controllo" + " " + numeroControllo}
            </p>
          </div>

          <div className="h-16 flex items-center justify-end">
            <button
              onClick={() => submitData()}
              disabled={loading}
              className="  bg-gialloSofitel border-2 border-gialloBordo hover:bg-gialloBordo hover:border-gialloBordo font-medium rounded-lg text-sm px-4 py-2"
            >
              {TabActiveMyContext.tabActive === "tab9"
                ? "SALVA E CHIUDI"
                : "AVANTI"}
            </button>
            <button
              onClick={() => indietroTabs()}
              disabled={loading && TabActiveMyContext.tabActive === "tab1"}
              className={`w-auto ml-2 border-2 
                ${
                  TabActiveMyContext.tabActive === "tab1"
                    ? "bg-gray-400 hover:bg-gray-500 border-gray-500 hover:border-gray-500 font-medium rounded-lg text-sm px-4 py-2 mr-2"
                    : "bg-gialloSofitel border-2 border-gialloBordo hover:bg-gialloBordo hover:border-gialloBordo font-medium rounded-lg text-sm px-4 py-2 mr-2"
                }`}
            >
              INDIETRO
            </button>
            <button
              onClick={() => {
                navigate(`/controllo/${numeroControllo}`, {
                  state: {
                    datiControllo: controllo,
                  },
                  replace: true,
                } as NavigateOptions);
              }}
              disabled={loading}
              className="  bg-gialloSofitel border-2 border-gialloBordo hover:bg-gialloBordo hover:border-gialloBordo font-medium rounded-lg text-sm px-4 py-2"
            >
              ESCI SENZA SALVARE
            </button>
          </div>
        </div>

        <div className="h-full" style={{ height: "calc(100% - 4rem)" }}>
          {loading ? (
            <div className="spinner flex fixed inset-0 z-10 justify-center items-center	w-full h-full">
              <div className="bg-gray-800 bg-opacity-50 fixed inset-0"></div>
              <BeatLoader
                color={"rgb(223, 166, 0)"}
                loading={loading}
                cssOverride={override}
                size={30}
              />
            </div>
          ) : (
            <TabsCreateUpdate statoIniziale={controllo} />
          )}
        </div>
      </div>
      {showAuthError && (
        <ErrorPopup
          title={"ATTENZIONE !!"}
          message={messaggioPopUp}
          onClose={closeErrorPopup}
        />
      )}
      {mostraPopUpUscita && (
        <EsciPopUp
          title={"ATTENZIONE !!"}
          message={messaggioPopUp}
          onClose={closeUscitaPopup}
          rotta={`/controllo/${numeroControllo}`}
        />
      )}
    </div>
  );
};
export default ModificaControllo;
