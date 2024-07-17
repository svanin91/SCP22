import React, { useState } from "react";
import { AddContext } from "../AddControlContext";

/**
 * il context provider mi permette di chiudere gli elementi che voglio possano raggiungere questo context all'interno del componente <AddControlContextProvider/>
 */

export const AddControlContextProvider = ({
  children,
}: React.PropsWithChildren<object>) => {
  //A2_TabRig_informazioni_generali------------------------------------------------------------------

  const [
    A2_TabRig_informazioni_generali_D_01_data,
    setA2_TabRig_informazioni_generali_D_01_data,
  ] = useState<string>("");
  const [
    A2_TabRig_informazioni_generali_D_01_numero_pattuglia,
    setA2_TabRig_informazioni_generali_D_01_numero_pattuglia,
  ] = useState<number | undefined>(undefined);
  const [
    A2_TabRig_informazioni_generali_D_01_turno,
    setA2_TabRig_informazioni_generali_D_01_turno,
  ] = useState<string>("");
  const [
    A2_TabRig_informazioni_generali_D_02_ora_inizio,
    setA2_TabRig_informazioni_generali_D_02_ora_inizio,
  ] = useState("");
  const [
    A2_TabRig_informazioni_generali_D_03_ora_fine,
    setA2_TabRig_informazioni_generali_D_03_ora_fine,
  ] = useState("");
  const [
    A2_TabRig_informazioni_generali_D_04_numero_giorno_settimana,
    setA2_TabRig_informazioni_generali_D_04_numero_giorno_settimana,
  ] = useState<number | undefined>(undefined);
  const [
    A2_TabRig_informazioni_generali_D_05_latitudine,
    setA2_TabRig_informazioni_generali_D_05_latitudine,
  ] = useState<number | undefined>(undefined);
  const [
    A2_TabRig_informazioni_generali_D_06_longitudine,
    setA2_TabRig_informazioni_generali_D_06_longitudine,
  ] = useState<number | undefined>(undefined);
  const [
    A2_TabRig_informazioni_generali_D_07_provincia,
    setA2_TabRig_informazioni_generali_D_07_provincia,
  ] = useState("");
  const [
    A2_TabRig_informazioni_generali_D_08_comune,
    setA2_TabRig_informazioni_generali_D_08_comune,
  ] = useState("");
  const [
    A2_TabRig_informazioni_generali_D_09_codice_avviamento_postale,
    setA2_TabRig_informazioni_generali_D_09_codice_avviamento_postale,
  ] = useState<number | undefined>(undefined);
  const [
    A2_TabRig_informazioni_generali_D_10_regione,
    setA2_TabRig_informazioni_generali_D_10_regione,
  ] = useState("");
  const [
    A2_TabRig_informazioni_generali_D_11_indirizzo,
    setA2_TabRig_informazioni_generali_D_11_indirizzo,
  ] = useState("");
  const [
    A2_TabRig_informazioni_generali_D_12_nome_operatore,
    setA2_TabRig_informazioni_generali_D_12_nome_operatore,
  ] = useState("");
  const [
    A2_TabRig_informazioni_generali_D_13_cognome_operatore,
    setA2_TabRig_informazioni_generali_D_13_cognome_operatore,
  ] = useState("");
  const [
    A2_TabRig_informazioni_generali_D_12_nome_operatore_2,
    setA2_TabRig_informazioni_generali_D_12_nome_operatore_2,
  ] = useState("");
  const [
    A2_TabRig_informazioni_generali_D_13_cognome_operatore_2,
    setA2_TabRig_informazioni_generali_D_13_cognome_operatore_2,
  ] = useState("");
  const [
    A2_TabRig_informazioni_generali_id_record,
    setA2_TabRig_informazioni_generali_id_record,
  ] = useState<number | undefined>(undefined);
  const [
    A2_TabRig_informazioni_generali_D_14_stato,
    setA2_TabRig_informazioni_generali_D_14_stato,
  ] = useState("");
  const [
    A2_TabRig_informazioni_generali_D_15_targa,
    setA2_TabRig_informazioni_generali_D_15_targa,
  ] = useState("");

  const [
    A2_TabRig_informazioni_generali_D_16_nome_conducente,
    setA2_TabRig_informazioni_generali_D_16_nome_conducente,
  ] = useState("");

  const [
    A2_TabRig_informazioni_generali_D_17_cognome_conducente,
    setA2_TabRig_informazioni_generali_D_17_cognome_conducente,
  ] = useState("");

  const [
    A2_TabRig_informazioni_generali_D_18_nome_proprietario,
    setA2_TabRig_informazioni_generali_D_18_nome_proprietario,
  ] = useState("");

  const [
    A2_TabRig_informazioni_generali_D_19_cognome_proprietario,
    setA2_TabRig_informazioni_generali_D_19_cognome_proprietario,
  ] = useState("");

  const [
    A2_TabRig_informazioni_generali_D_20_numero_patente,
    setA2_TabRig_informazioni_generali_D_20_numero_patente,
  ] = useState("");

  const [
    A2_TabRig_informazioni_generali_D_21_numero_carta_id,
    setA2_TabRig_informazioni_generali_D_21_numero_carta_id,
  ] = useState("");

  const [
    A2_TabRig_informazioni_generali_D_22_numero_passaporto,
    setA2_TabRig_informazioni_generali_D_22_numero_passaporto,
  ] = useState("");

  const [
    A2_TabRig_informazioni_generali_D_23_marca_modello_veicolo,
    setA2_TabRig_informazioni_generali_D_23_marca_modello_veicolo,
  ] = useState("");

  const [
    A2_TabRig_informazioni_generali_D_24_cognome_nome_operatore,
    setA2_TabRig_informazioni_generali_D_24_cognome_nome_operatore,
  ] = useState("");
  const [
    A2_TabRig_informazioni_generali_D_24_cognome_nome_operatore_2,
    setA2_TabRig_informazioni_generali_D_24_cognome_nome_operatore_2,
  ] = useState("");

  const [
    A2_TabRig_informazioni_generali_D_25_norme_violate,
    setA2_TabRig_informazioni_generali_D_25_norme_violate,
  ] = useState<string[]>([]);

  const [
    A2_TabRig_informazioni_generali_D_27_controlli_eseguiti,
    setA2_TabRig_informazioni_generali_D_27_controlli_eseguiti,
  ] = useState("");

  const [
    A2_TabRig_informazioni_generali_D_28_patente_ritirata,
    setA2_TabRig_informazioni_generali_D_28_patente_ritirata,
  ] = useState<number | undefined>(undefined);

  const [
    A2_TabRig_informazioni_generali_D_29_tipo_mezzo,
    setA2_TabRig_informazioni_generali_D_29_tipo_mezzo,
  ] = useState("");

  const [
    A2_TabRig_informazioni_generali_D_30_note,
    setA2_TabRig_informazioni_generali_D_30_note,
  ] = useState("");

  const [
    A2_TabRig_informazioni_generali_D_31_carta_circolazione_ritirata,
    setA2_TabRig_informazioni_generali_D_31_carta_circolazione_ritirata,
  ] = useState<number | undefined>(undefined);

  const [
    A2_TabRig_informazioni_generali_D_32_certificato_assicurazione_ritirato,
    setA2_TabRig_informazioni_generali_D_32_certificato_assicurazione_ritirato,
  ] = useState<number | undefined>(undefined);

  const [
    A2_TabRig_informazioni_generali_D_33_verifica_revisione,
    setA2_TabRig_informazioni_generali_D_33_verifica_revisione,
  ] = useState<number | undefined>(undefined);

  const [
    A2_TabRig_informazioni_generali_D_34_verifica_assicurazione,
    setA2_TabRig_informazioni_generali_D_34_verifica_assicurazione,
  ] = useState<number | undefined>(undefined);

  const [
    A2_TabRig_informazioni_generali_D_35_verifica_scarico,
    setA2_TabRig_informazioni_generali_D_35_verifica_scarico,
  ] = useState<number | undefined>(undefined);

  const [
    A2_TabRig_informazioni_generali_D_36_verifica_cinture_sicurezza,
    setA2_TabRig_informazioni_generali_D_36_verifica_cinture_sicurezza,
  ] = useState<number | undefined>(undefined);

  const [
    A2_TabRig_informazioni_generali_D_37_verifica_pneumatici,
    setA2_TabRig_informazioni_generali_D_37_verifica_pneumatici,
  ] = useState<number | undefined>(undefined);

  const [
    A2_TabRig_informazioni_generali_D_38_verifica_luci,
    setA2_TabRig_informazioni_generali_D_38_verifica_luci,
  ] = useState<number | undefined>(undefined);

  const [
    A2_TabRig_informazioni_generali_D_39_targa_rimorchio,
    setA2_TabRig_informazioni_generali_D_39_targa_rimorchio,
  ] = useState("");

  //A3_02_TabRig_PatenteGuida---------------------------------------------------------------------

  const [
    A3_02_TabRig_PatenteGuida_id_record,
    setA3_02_TabRig_PatenteGuida_id_record,
  ] = useState<number | undefined>(undefined);
  const [
    A3_02_TabRig_PatenteGuida_N_02_cognome_conducente,
    setA3_02_TabRig_PatenteGuida_N_02_cognome_conducente,
  ] = useState("");
  const [
    A3_02_TabRig_PatenteGuida_N_03_nome_conducente,
    setA3_02_TabRig_PatenteGuida_N_03_nome_conducente,
  ] = useState("");
  const [
    A3_02_TabRig_PatenteGuida_N_04_data_nascita_conducente,
    setA3_02_TabRig_PatenteGuida_N_04_data_nascita_conducente,
  ] = useState<string>("");
  const [
    A3_02_TabRig_PatenteGuida_N_05_luogo_nascita_conducente,
    setA3_02_TabRig_PatenteGuida_N_05_luogo_nascita_conducente,
  ] = useState("");
  const [
    A3_02_TabRig_PatenteGuida_N_06_data_emissione_documento_conducente,
    setA3_02_TabRig_PatenteGuida_N_06_data_emissione_documento_conducente,
  ] = useState<string>("");
  const [
    A3_02_TabRig_PatenteGuida_N_07_data_scadenza_documento_conducente,
    setA3_02_TabRig_PatenteGuida_N_07_data_scadenza_documento_conducente,
  ] = useState<string>("");
  const [
    A3_02_TabRig_PatenteGuida_N_08_rilasciata_da_conducente,
    setA3_02_TabRig_PatenteGuida_N_08_rilasciata_da_conducente,
  ] = useState("");
  const [
    A3_02_TabRig_PatenteGuida_N_09_numero_documento_conducente,
    setA3_02_TabRig_PatenteGuida_N_09_numero_documento_conducente,
  ] = useState("");
  const [
    A3_02_TabRig_PatenteGuida_N_10_categoria_patente_conducente,
    setA3_02_TabRig_PatenteGuida_N_10_categoria_patente_conducente,
  ] = useState<string[]>([]);
  const [
    A3_02_TabRig_PatenteGuida_N_11_annotazioni_restrizioni_conducente,
    setA3_02_TabRig_PatenteGuida_N_11_annotazioni_restrizioni_conducente,
  ] = useState("");

  // Per passeggero_1
  const [
    A3_02_TabRig_PatenteGuida_N_02_cognome_passeggero_1,
    setA3_02_TabRig_PatenteGuida_N_02_cognome_passeggero_1,
  ] = useState("");
  const [
    A3_02_TabRig_PatenteGuida_N_03_nome_passeggero_1,
    setA3_02_TabRig_PatenteGuida_N_03_nome_passeggero_1,
  ] = useState("");
  const [
    A3_02_TabRig_PatenteGuida_N_04_data_nascita_passeggero_1,
    setA3_02_TabRig_PatenteGuida_N_04_data_nascita_passeggero_1,
  ] = useState<string>("");
  const [
    A3_02_TabRig_PatenteGuida_N_05_luogo_nascita_passeggero_1,
    setA3_02_TabRig_PatenteGuida_N_05_luogo_nascita_passeggero_1,
  ] = useState("");
  const [
    A3_02_TabRig_PatenteGuida_N_06_data_emissione_documento_passeggero_1,
    setA3_02_TabRig_PatenteGuida_N_06_data_emissione_documento_passeggero_1,
  ] = useState<string>("");
  const [
    A3_02_TabRig_PatenteGuida_N_07_data_scadenza_documento_passeggero_1,
    setA3_02_TabRig_PatenteGuida_N_07_data_scadenza_documento_passeggero_1,
  ] = useState<string>("");
  const [
    A3_02_TabRig_PatenteGuida_N_08_rilasciata_da_passeggero_1,
    setA3_02_TabRig_PatenteGuida_N_08_rilasciata_da_passeggero_1,
  ] = useState("");
  const [
    A3_02_TabRig_PatenteGuida_N_09_numero_documento_passeggero_1,
    setA3_02_TabRig_PatenteGuida_N_09_numero_documento_passeggero_1,
  ] = useState("");
  const [
    A3_02_TabRig_PatenteGuida_N_10_categoria_patente_passeggero_1,
    setA3_02_TabRig_PatenteGuida_N_10_categoria_patente_passeggero_1,
  ] = useState<string[]>([]);
  const [
    A3_02_TabRig_PatenteGuida_N_11_annotazioni_restrizioni_passeggero_1,
    setA3_02_TabRig_PatenteGuida_N_11_annotazioni_restrizioni_passeggero_1,
  ] = useState("");
  // Per passeggero_2
  const [
    A3_02_TabRig_PatenteGuida_N_02_cognome_passeggero_2,
    setA3_02_TabRig_PatenteGuida_N_02_cognome_passeggero_2,
  ] = useState("");
  const [
    A3_02_TabRig_PatenteGuida_N_03_nome_passeggero_2,
    setA3_02_TabRig_PatenteGuida_N_03_nome_passeggero_2,
  ] = useState("");
  const [
    A3_02_TabRig_PatenteGuida_N_04_data_nascita_passeggero_2,
    setA3_02_TabRig_PatenteGuida_N_04_data_nascita_passeggero_2,
  ] = useState<string>("");
  const [
    A3_02_TabRig_PatenteGuida_N_05_luogo_nascita_passeggero_2,
    setA3_02_TabRig_PatenteGuida_N_05_luogo_nascita_passeggero_2,
  ] = useState("");
  const [
    A3_02_TabRig_PatenteGuida_N_06_data_emissione_documento_passeggero_2,
    setA3_02_TabRig_PatenteGuida_N_06_data_emissione_documento_passeggero_2,
  ] = useState<string>("");
  const [
    A3_02_TabRig_PatenteGuida_N_07_data_scadenza_documento_passeggero_2,
    setA3_02_TabRig_PatenteGuida_N_07_data_scadenza_documento_passeggero_2,
  ] = useState<string>("");
  const [
    A3_02_TabRig_PatenteGuida_N_08_rilasciata_da_passeggero_2,
    setA3_02_TabRig_PatenteGuida_N_08_rilasciata_da_passeggero_2,
  ] = useState("");
  const [
    A3_02_TabRig_PatenteGuida_N_09_numero_documento_passeggero_2,
    setA3_02_TabRig_PatenteGuida_N_09_numero_documento_passeggero_2,
  ] = useState("");
  const [
    A3_02_TabRig_PatenteGuida_N_10_categoria_patente_passeggero_2,
    setA3_02_TabRig_PatenteGuida_N_10_categoria_patente_passeggero_2,
  ] = useState<string[]>([]);
  const [
    A3_02_TabRig_PatenteGuida_N_11_annotazioni_restrizioni_passeggero_2,
    setA3_02_TabRig_PatenteGuida_N_11_annotazioni_restrizioni_passeggero_2,
  ] = useState("");

  // Per passeggero_3
  const [
    A3_02_TabRig_PatenteGuida_N_02_cognome_passeggero_3,
    setA3_02_TabRig_PatenteGuida_N_02_cognome_passeggero_3,
  ] = useState("");
  const [
    A3_02_TabRig_PatenteGuida_N_03_nome_passeggero_3,
    setA3_02_TabRig_PatenteGuida_N_03_nome_passeggero_3,
  ] = useState("");
  const [
    A3_02_TabRig_PatenteGuida_N_04_data_nascita_passeggero_3,
    setA3_02_TabRig_PatenteGuida_N_04_data_nascita_passeggero_3,
  ] = useState<string>("");
  const [
    A3_02_TabRig_PatenteGuida_N_05_luogo_nascita_passeggero_3,
    setA3_02_TabRig_PatenteGuida_N_05_luogo_nascita_passeggero_3,
  ] = useState("");
  const [
    A3_02_TabRig_PatenteGuida_N_06_data_emissione_documento_passeggero_3,
    setA3_02_TabRig_PatenteGuida_N_06_data_emissione_documento_passeggero_3,
  ] = useState<string>("");
  const [
    A3_02_TabRig_PatenteGuida_N_07_data_scadenza_documento_passeggero_3,
    setA3_02_TabRig_PatenteGuida_N_07_data_scadenza_documento_passeggero_3,
  ] = useState<string>("");
  const [
    A3_02_TabRig_PatenteGuida_N_08_rilasciata_da_passeggero_3,
    setA3_02_TabRig_PatenteGuida_N_08_rilasciata_da_passeggero_3,
  ] = useState("");
  const [
    A3_02_TabRig_PatenteGuida_N_09_numero_documento_passeggero_3,
    setA3_02_TabRig_PatenteGuida_N_09_numero_documento_passeggero_3,
  ] = useState("");
  const [
    A3_02_TabRig_PatenteGuida_N_10_categoria_patente_passeggero_3,
    setA3_02_TabRig_PatenteGuida_N_10_categoria_patente_passeggero_3,
  ] = useState<string[]>([]);
  const [
    A3_02_TabRig_PatenteGuida_N_11_annotazioni_restrizioni_passeggero_3,
    setA3_02_TabRig_PatenteGuida_N_11_annotazioni_restrizioni_passeggero_3,
  ] = useState("");

  // Per passeggero_4
  const [
    A3_02_TabRig_PatenteGuida_N_02_cognome_passeggero_4,
    setA3_02_TabRig_PatenteGuida_N_02_cognome_passeggero_4,
  ] = useState("");
  const [
    A3_02_TabRig_PatenteGuida_N_03_nome_passeggero_4,
    setA3_02_TabRig_PatenteGuida_N_03_nome_passeggero_4,
  ] = useState("");
  const [
    A3_02_TabRig_PatenteGuida_N_04_data_nascita_passeggero_4,
    setA3_02_TabRig_PatenteGuida_N_04_data_nascita_passeggero_4,
  ] = useState<string>("");
  const [
    A3_02_TabRig_PatenteGuida_N_05_luogo_nascita_passeggero_4,
    setA3_02_TabRig_PatenteGuida_N_05_luogo_nascita_passeggero_4,
  ] = useState("");
  const [
    A3_02_TabRig_PatenteGuida_N_06_data_emissione_documento_passeggero_4,
    setA3_02_TabRig_PatenteGuida_N_06_data_emissione_documento_passeggero_4,
  ] = useState<string>("");
  const [
    A3_02_TabRig_PatenteGuida_N_07_data_scadenza_documento_passeggero_4,
    setA3_02_TabRig_PatenteGuida_N_07_data_scadenza_documento_passeggero_4,
  ] = useState<string>("");
  const [
    A3_02_TabRig_PatenteGuida_N_08_rilasciata_da_passeggero_4,
    setA3_02_TabRig_PatenteGuida_N_08_rilasciata_da_passeggero_4,
  ] = useState("");
  const [
    A3_02_TabRig_PatenteGuida_N_09_numero_documento_passeggero_4,
    setA3_02_TabRig_PatenteGuida_N_09_numero_documento_passeggero_4,
  ] = useState("");
  const [
    A3_02_TabRig_PatenteGuida_N_10_categoria_patente_passeggero_4,
    setA3_02_TabRig_PatenteGuida_N_10_categoria_patente_passeggero_4,
  ] = useState<string[]>([]);
  const [
    A3_02_TabRig_PatenteGuida_N_11_annotazioni_restrizioni_passeggero_4,
    setA3_02_TabRig_PatenteGuida_N_11_annotazioni_restrizioni_passeggero_4,
  ] = useState("");

  // Per passeggero_5
  const [
    A3_02_TabRig_PatenteGuida_N_02_cognome_passeggero_5,
    setA3_02_TabRig_PatenteGuida_N_02_cognome_passeggero_5,
  ] = useState("");
  const [
    A3_02_TabRig_PatenteGuida_N_03_nome_passeggero_5,
    setA3_02_TabRig_PatenteGuida_N_03_nome_passeggero_5,
  ] = useState("");
  const [
    A3_02_TabRig_PatenteGuida_N_04_data_nascita_passeggero_5,
    setA3_02_TabRig_PatenteGuida_N_04_data_nascita_passeggero_5,
  ] = useState<string>("");
  const [
    A3_02_TabRig_PatenteGuida_N_05_luogo_nascita_passeggero_5,
    setA3_02_TabRig_PatenteGuida_N_05_luogo_nascita_passeggero_5,
  ] = useState("");
  const [
    A3_02_TabRig_PatenteGuida_N_06_data_emissione_documento_passeggero_5,
    setA3_02_TabRig_PatenteGuida_N_06_data_emissione_documento_passeggero_5,
  ] = useState<string>("");
  const [
    A3_02_TabRig_PatenteGuida_N_07_data_scadenza_documento_passeggero_5,
    setA3_02_TabRig_PatenteGuida_N_07_data_scadenza_documento_passeggero_5,
  ] = useState<string>("");
  const [
    A3_02_TabRig_PatenteGuida_N_08_rilasciata_da_passeggero_5,
    setA3_02_TabRig_PatenteGuida_N_08_rilasciata_da_passeggero_5,
  ] = useState("");
  const [
    A3_02_TabRig_PatenteGuida_N_09_numero_documento_passeggero_5,
    setA3_02_TabRig_PatenteGuida_N_09_numero_documento_passeggero_5,
  ] = useState("");
  const [
    A3_02_TabRig_PatenteGuida_N_10_categoria_patente_passeggero_5,
    setA3_02_TabRig_PatenteGuida_N_10_categoria_patente_passeggero_5,
  ] = useState<string[]>([]);
  const [
    A3_02_TabRig_PatenteGuida_N_11_annotazioni_restrizioni_passeggero_5,
    setA3_02_TabRig_PatenteGuida_N_11_annotazioni_restrizioni_passeggero_5,
  ] = useState("");

  //A3_03_TabRig_CartaIdentita-------------------------------------------------------------

  const [
    A3_03_TabRig_CartaIdentita_id_record,
    setA3_03_TabRig_CartaIdentita_id_record,
  ] = useState<number | undefined>(undefined);
  const [
    A3_03_TabRig_CartaIdentita_N_02_comune_ufficio_emettitore_conducente,
    setA3_03_TabRig_CartaIdentita_N_02_comune_ufficio_emettitore_conducente,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_03_cognome_conducente,
    setA3_03_TabRig_CartaIdentita_N_03_cognome_conducente,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_04_nome_conducente,
    setA3_03_TabRig_CartaIdentita_N_04_nome_conducente,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_05_data_nascita_conducente,
    setA3_03_TabRig_CartaIdentita_N_05_data_nascita_conducente,
  ] = useState<string>("");
  const [
    A3_03_TabRig_CartaIdentita_N_06_luogo_nascita_conducente,
    setA3_03_TabRig_CartaIdentita_N_06_luogo_nascita_conducente,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_08_sesso_conducente,
    setA3_03_TabRig_CartaIdentita_N_08_sesso_conducente,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_09_statura_conducente,
    setA3_03_TabRig_CartaIdentita_N_09_statura_conducente,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_10_occhi_conducente,
    setA3_03_TabRig_CartaIdentita_N_10_occhi_conducente,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_11_cittadinanza_conducente,
    setA3_03_TabRig_CartaIdentita_N_11_cittadinanza_conducente,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_12_codice_fiscale_conducente,
    setA3_03_TabRig_CartaIdentita_N_12_codice_fiscale_conducente,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_13_residenza_conducente,
    setA3_03_TabRig_CartaIdentita_N_13_residenza_conducente,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_14_professione_conducente,
    setA3_03_TabRig_CartaIdentita_N_14_professione_conducente,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_15_stato_civile_conducente,
    setA3_03_TabRig_CartaIdentita_N_15_stato_civile_conducente,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_16_eventuale_non_validita_per_espatrio_conducente,
    setA3_03_TabRig_CartaIdentita_N_16_eventuale_non_validita_per_espatrio_conducente,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_17_nome_cognome_padre_nel_caso_minore_conducente,
    setA3_03_TabRig_CartaIdentita_N_17_nome_cognome_padre_nel_caso_minore_conducente,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_23_nome_cognome_madre_nel_caso_minore_conducente,
    setA3_03_TabRig_CartaIdentita_N_23_nome_cognome_madre_nel_caso_minore_conducente,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_18_estremi_atto_nascita_conducente,
    setA3_03_TabRig_CartaIdentita_N_18_estremi_atto_nascita_conducente,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_19_comune_di_iscrizione_AIRE_conducente,
    setA3_03_TabRig_CartaIdentita_N_19_comune_di_iscrizione_AIRE_conducente,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_20_numero_documento_conducente,
    setA3_03_TabRig_CartaIdentita_N_20_numero_documento_conducente,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_21_data_emissione_documento_conducente,
    setA3_03_TabRig_CartaIdentita_N_21_data_emissione_documento_conducente,
  ] = useState<string>("");
  const [
    A3_03_TabRig_CartaIdentita_N_22_data_scadenza_documento_conducente,
    setA3_03_TabRig_CartaIdentita_N_22_data_scadenza_documento_conducente,
  ] = useState<string>("");

  const [
    A3_03_TabRig_CartaIdentita_N_02_comune_ufficio_emettitore_passeggero_1,
    setA3_03_TabRig_CartaIdentita_N_02_comune_ufficio_emettitore_passeggero_1,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_03_cognome_passeggero_1,
    setA3_03_TabRig_CartaIdentita_N_03_cognome_passeggero_1,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_04_nome_passeggero_1,
    setA3_03_TabRig_CartaIdentita_N_04_nome_passeggero_1,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_05_data_nascita_passeggero_1,
    setA3_03_TabRig_CartaIdentita_N_05_data_nascita_passeggero_1,
  ] = useState<string>("");
  const [
    A3_03_TabRig_CartaIdentita_N_06_luogo_nascita_passeggero_1,
    setA3_03_TabRig_CartaIdentita_N_06_luogo_nascita_passeggero_1,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_08_sesso_passeggero_1,
    setA3_03_TabRig_CartaIdentita_N_08_sesso_passeggero_1,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_09_statura_passeggero_1,
    setA3_03_TabRig_CartaIdentita_N_09_statura_passeggero_1,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_10_occhi_passeggero_1,
    setA3_03_TabRig_CartaIdentita_N_10_occhi_passeggero_1,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_11_cittadinanza_passeggero_1,
    setA3_03_TabRig_CartaIdentita_N_11_cittadinanza_passeggero_1,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_12_codice_fiscale_passeggero_1,
    setA3_03_TabRig_CartaIdentita_N_12_codice_fiscale_passeggero_1,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_13_residenza_passeggero_1,
    setA3_03_TabRig_CartaIdentita_N_13_residenza_passeggero_1,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_14_professione_passeggero_1,
    setA3_03_TabRig_CartaIdentita_N_14_professione_passeggero_1,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_15_stato_civile_passeggero_1,
    setA3_03_TabRig_CartaIdentita_N_15_stato_civile_passeggero_1,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_16_eventuale_non_validita_per_espatrio_passeggero_1,
    setA3_03_TabRig_CartaIdentita_N_16_eventuale_non_validita_per_espatrio_passeggero_1,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_17_nome_cognome_padre_nel_caso_minore_passeggero_1,
    setA3_03_TabRig_CartaIdentita_N_17_nome_cognome_padre_nel_caso_minore_passeggero_1,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_23_nome_cognome_madre_nel_caso_minore_passeggero_1,
    setA3_03_TabRig_CartaIdentita_N_23_nome_cognome_madre_nel_caso_minore_passeggero_1,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_18_estremi_atto_nascita_passeggero_1,
    setA3_03_TabRig_CartaIdentita_N_18_estremi_atto_nascita_passeggero_1,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_19_comune_di_iscrizione_AIRE_passeggero_1,
    setA3_03_TabRig_CartaIdentita_N_19_comune_di_iscrizione_AIRE_passeggero_1,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_20_numero_documento_passeggero_1,
    setA3_03_TabRig_CartaIdentita_N_20_numero_documento_passeggero_1,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_21_data_emissione_documento_passeggero_1,
    setA3_03_TabRig_CartaIdentita_N_21_data_emissione_documento_passeggero_1,
  ] = useState<string>("");
  const [
    A3_03_TabRig_CartaIdentita_N_22_data_scadenza_documento_passeggero_1,
    setA3_03_TabRig_CartaIdentita_N_22_data_scadenza_documento_passeggero_1,
  ] = useState<string>("");
  const [
    A3_03_TabRig_CartaIdentita_N_02_comune_ufficio_emettitore_passeggero_2,
    setA3_03_TabRig_CartaIdentita_N_02_comune_ufficio_emettitore_passeggero_2,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_03_cognome_passeggero_2,
    setA3_03_TabRig_CartaIdentita_N_03_cognome_passeggero_2,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_04_nome_passeggero_2,
    setA3_03_TabRig_CartaIdentita_N_04_nome_passeggero_2,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_05_data_nascita_passeggero_2,
    setA3_03_TabRig_CartaIdentita_N_05_data_nascita_passeggero_2,
  ] = useState<string>("");
  const [
    A3_03_TabRig_CartaIdentita_N_06_luogo_nascita_passeggero_2,
    setA3_03_TabRig_CartaIdentita_N_06_luogo_nascita_passeggero_2,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_08_sesso_passeggero_2,
    setA3_03_TabRig_CartaIdentita_N_08_sesso_passeggero_2,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_09_statura_passeggero_2,
    setA3_03_TabRig_CartaIdentita_N_09_statura_passeggero_2,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_10_occhi_passeggero_2,
    setA3_03_TabRig_CartaIdentita_N_10_occhi_passeggero_2,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_11_cittadinanza_passeggero_2,
    setA3_03_TabRig_CartaIdentita_N_11_cittadinanza_passeggero_2,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_12_codice_fiscale_passeggero_2,
    setA3_03_TabRig_CartaIdentita_N_12_codice_fiscale_passeggero_2,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_13_residenza_passeggero_2,
    setA3_03_TabRig_CartaIdentita_N_13_residenza_passeggero_2,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_14_professione_passeggero_2,
    setA3_03_TabRig_CartaIdentita_N_14_professione_passeggero_2,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_15_stato_civile_passeggero_2,
    setA3_03_TabRig_CartaIdentita_N_15_stato_civile_passeggero_2,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_16_eventuale_non_validita_per_espatrio_passeggero_2,
    setA3_03_TabRig_CartaIdentita_N_16_eventuale_non_validita_per_espatrio_passeggero_2,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_17_nome_cognome_padre_nel_caso_minore_passeggero_2,
    setA3_03_TabRig_CartaIdentita_N_17_nome_cognome_padre_nel_caso_minore_passeggero_2,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_23_nome_cognome_madre_nel_caso_minore_passeggero_2,
    setA3_03_TabRig_CartaIdentita_N_23_nome_cognome_madre_nel_caso_minore_passeggero_2,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_18_estremi_atto_nascita_passeggero_2,
    setA3_03_TabRig_CartaIdentita_N_18_estremi_atto_nascita_passeggero_2,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_19_comune_di_iscrizione_AIRE_passeggero_2,
    setA3_03_TabRig_CartaIdentita_N_19_comune_di_iscrizione_AIRE_passeggero_2,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_20_numero_documento_passeggero_2,
    setA3_03_TabRig_CartaIdentita_N_20_numero_documento_passeggero_2,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_21_data_emissione_documento_passeggero_2,
    setA3_03_TabRig_CartaIdentita_N_21_data_emissione_documento_passeggero_2,
  ] = useState<string>("");
  const [
    A3_03_TabRig_CartaIdentita_N_22_data_scadenza_documento_passeggero_2,
    setA3_03_TabRig_CartaIdentita_N_22_data_scadenza_documento_passeggero_2,
  ] = useState<string>("");
  const [
    A3_03_TabRig_CartaIdentita_N_02_comune_ufficio_emettitore_passeggero_3,
    setA3_03_TabRig_CartaIdentita_N_02_comune_ufficio_emettitore_passeggero_3,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_03_cognome_passeggero_3,
    setA3_03_TabRig_CartaIdentita_N_03_cognome_passeggero_3,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_04_nome_passeggero_3,
    setA3_03_TabRig_CartaIdentita_N_04_nome_passeggero_3,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_05_data_nascita_passeggero_3,
    setA3_03_TabRig_CartaIdentita_N_05_data_nascita_passeggero_3,
  ] = useState<string>("");
  const [
    A3_03_TabRig_CartaIdentita_N_06_luogo_nascita_passeggero_3,
    setA3_03_TabRig_CartaIdentita_N_06_luogo_nascita_passeggero_3,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_08_sesso_passeggero_3,
    setA3_03_TabRig_CartaIdentita_N_08_sesso_passeggero_3,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_09_statura_passeggero_3,
    setA3_03_TabRig_CartaIdentita_N_09_statura_passeggero_3,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_10_occhi_passeggero_3,
    setA3_03_TabRig_CartaIdentita_N_10_occhi_passeggero_3,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_11_cittadinanza_passeggero_3,
    setA3_03_TabRig_CartaIdentita_N_11_cittadinanza_passeggero_3,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_12_codice_fiscale_passeggero_3,
    setA3_03_TabRig_CartaIdentita_N_12_codice_fiscale_passeggero_3,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_13_residenza_passeggero_3,
    setA3_03_TabRig_CartaIdentita_N_13_residenza_passeggero_3,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_14_professione_passeggero_3,
    setA3_03_TabRig_CartaIdentita_N_14_professione_passeggero_3,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_15_stato_civile_passeggero_3,
    setA3_03_TabRig_CartaIdentita_N_15_stato_civile_passeggero_3,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_16_eventuale_non_validita_per_espatrio_passeggero_3,
    setA3_03_TabRig_CartaIdentita_N_16_eventuale_non_validita_per_espatrio_passeggero_3,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_17_nome_cognome_padre_nel_caso_minore_passeggero_3,
    setA3_03_TabRig_CartaIdentita_N_17_nome_cognome_padre_nel_caso_minore_passeggero_3,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_23_nome_cognome_madre_nel_caso_minore_passeggero_3,
    setA3_03_TabRig_CartaIdentita_N_23_nome_cognome_madre_nel_caso_minore_passeggero_3,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_18_estremi_atto_nascita_passeggero_3,
    setA3_03_TabRig_CartaIdentita_N_18_estremi_atto_nascita_passeggero_3,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_19_comune_di_iscrizione_AIRE_passeggero_3,
    setA3_03_TabRig_CartaIdentita_N_19_comune_di_iscrizione_AIRE_passeggero_3,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_20_numero_documento_passeggero_3,
    setA3_03_TabRig_CartaIdentita_N_20_numero_documento_passeggero_3,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_21_data_emissione_documento_passeggero_3,
    setA3_03_TabRig_CartaIdentita_N_21_data_emissione_documento_passeggero_3,
  ] = useState<string>("");
  const [
    A3_03_TabRig_CartaIdentita_N_22_data_scadenza_documento_passeggero_3,
    setA3_03_TabRig_CartaIdentita_N_22_data_scadenza_documento_passeggero_3,
  ] = useState<string>("");
  const [
    A3_03_TabRig_CartaIdentita_N_02_comune_ufficio_emettitore_passeggero_4,
    setA3_03_TabRig_CartaIdentita_N_02_comune_ufficio_emettitore_passeggero_4,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_03_cognome_passeggero_4,
    setA3_03_TabRig_CartaIdentita_N_03_cognome_passeggero_4,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_04_nome_passeggero_4,
    setA3_03_TabRig_CartaIdentita_N_04_nome_passeggero_4,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_05_data_nascita_passeggero_4,
    setA3_03_TabRig_CartaIdentita_N_05_data_nascita_passeggero_4,
  ] = useState<string>("");
  const [
    A3_03_TabRig_CartaIdentita_N_06_luogo_nascita_passeggero_4,
    setA3_03_TabRig_CartaIdentita_N_06_luogo_nascita_passeggero_4,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_08_sesso_passeggero_4,
    setA3_03_TabRig_CartaIdentita_N_08_sesso_passeggero_4,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_09_statura_passeggero_4,
    setA3_03_TabRig_CartaIdentita_N_09_statura_passeggero_4,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_10_occhi_passeggero_4,
    setA3_03_TabRig_CartaIdentita_N_10_occhi_passeggero_4,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_11_cittadinanza_passeggero_4,
    setA3_03_TabRig_CartaIdentita_N_11_cittadinanza_passeggero_4,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_12_codice_fiscale_passeggero_4,
    setA3_03_TabRig_CartaIdentita_N_12_codice_fiscale_passeggero_4,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_13_residenza_passeggero_4,
    setA3_03_TabRig_CartaIdentita_N_13_residenza_passeggero_4,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_14_professione_passeggero_4,
    setA3_03_TabRig_CartaIdentita_N_14_professione_passeggero_4,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_15_stato_civile_passeggero_4,
    setA3_03_TabRig_CartaIdentita_N_15_stato_civile_passeggero_4,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_16_eventuale_non_validita_per_espatrio_passeggero_4,
    setA3_03_TabRig_CartaIdentita_N_16_eventuale_non_validita_per_espatrio_passeggero_4,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_17_nome_cognome_padre_nel_caso_minore_passeggero_4,
    setA3_03_TabRig_CartaIdentita_N_17_nome_cognome_padre_nel_caso_minore_passeggero_4,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_23_nome_cognome_madre_nel_caso_minore_passeggero_4,
    setA3_03_TabRig_CartaIdentita_N_23_nome_cognome_madre_nel_caso_minore_passeggero_4,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_18_estremi_atto_nascita_passeggero_4,
    setA3_03_TabRig_CartaIdentita_N_18_estremi_atto_nascita_passeggero_4,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_19_comune_di_iscrizione_AIRE_passeggero_4,
    setA3_03_TabRig_CartaIdentita_N_19_comune_di_iscrizione_AIRE_passeggero_4,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_20_numero_documento_passeggero_4,
    setA3_03_TabRig_CartaIdentita_N_20_numero_documento_passeggero_4,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_21_data_emissione_documento_passeggero_4,
    setA3_03_TabRig_CartaIdentita_N_21_data_emissione_documento_passeggero_4,
  ] = useState<string>("");
  const [
    A3_03_TabRig_CartaIdentita_N_22_data_scadenza_documento_passeggero_4,
    setA3_03_TabRig_CartaIdentita_N_22_data_scadenza_documento_passeggero_4,
  ] = useState<string>("");
  const [
    A3_03_TabRig_CartaIdentita_N_02_comune_ufficio_emettitore_passeggero_5,
    setA3_03_TabRig_CartaIdentita_N_02_comune_ufficio_emettitore_passeggero_5,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_03_cognome_passeggero_5,
    setA3_03_TabRig_CartaIdentita_N_03_cognome_passeggero_5,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_04_nome_passeggero_5,
    setA3_03_TabRig_CartaIdentita_N_04_nome_passeggero_5,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_05_data_nascita_passeggero_5,
    setA3_03_TabRig_CartaIdentita_N_05_data_nascita_passeggero_5,
  ] = useState<string>("");
  const [
    A3_03_TabRig_CartaIdentita_N_06_luogo_nascita_passeggero_5,
    setA3_03_TabRig_CartaIdentita_N_06_luogo_nascita_passeggero_5,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_08_sesso_passeggero_5,
    setA3_03_TabRig_CartaIdentita_N_08_sesso_passeggero_5,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_09_statura_passeggero_5,
    setA3_03_TabRig_CartaIdentita_N_09_statura_passeggero_5,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_10_occhi_passeggero_5,
    setA3_03_TabRig_CartaIdentita_N_10_occhi_passeggero_5,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_11_cittadinanza_passeggero_5,
    setA3_03_TabRig_CartaIdentita_N_11_cittadinanza_passeggero_5,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_12_codice_fiscale_passeggero_5,
    setA3_03_TabRig_CartaIdentita_N_12_codice_fiscale_passeggero_5,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_13_residenza_passeggero_5,
    setA3_03_TabRig_CartaIdentita_N_13_residenza_passeggero_5,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_14_professione_passeggero_5,
    setA3_03_TabRig_CartaIdentita_N_14_professione_passeggero_5,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_15_stato_civile_passeggero_5,
    setA3_03_TabRig_CartaIdentita_N_15_stato_civile_passeggero_5,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_16_eventuale_non_validita_per_espatrio_passeggero_5,
    setA3_03_TabRig_CartaIdentita_N_16_eventuale_non_validita_per_espatrio_passeggero_5,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_17_nome_cognome_padre_nel_caso_minore_passeggero_5,
    setA3_03_TabRig_CartaIdentita_N_17_nome_cognome_padre_nel_caso_minore_passeggero_5,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_23_nome_cognome_madre_nel_caso_minore_passeggero_5,
    setA3_03_TabRig_CartaIdentita_N_23_nome_cognome_madre_nel_caso_minore_passeggero_5,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_18_estremi_atto_nascita_passeggero_5,
    setA3_03_TabRig_CartaIdentita_N_18_estremi_atto_nascita_passeggero_5,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_19_comune_di_iscrizione_AIRE_passeggero_5,
    setA3_03_TabRig_CartaIdentita_N_19_comune_di_iscrizione_AIRE_passeggero_5,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_20_numero_documento_passeggero_5,
    setA3_03_TabRig_CartaIdentita_N_20_numero_documento_passeggero_5,
  ] = useState("");
  const [
    A3_03_TabRig_CartaIdentita_N_21_data_emissione_documento_passeggero_5,
    setA3_03_TabRig_CartaIdentita_N_21_data_emissione_documento_passeggero_5,
  ] = useState<string>("");
  const [
    A3_03_TabRig_CartaIdentita_N_22_data_scadenza_documento_passeggero_5,
    setA3_03_TabRig_CartaIdentita_N_22_data_scadenza_documento_passeggero_5,
  ] = useState<string>("");

  //A3_04_TabRig_Passaporto-------------------------------------------------------------

  const [
    A3_04_TabRig_Passaporto_id_record,
    setA3_04_TabRig_Passaporto_id_record,
  ] = useState<number | undefined>(undefined);
  const [
    A3_04_TabRig_Passaporto_N_02_tipo_conducente,
    setA3_04_TabRig_Passaporto_N_02_tipo_conducente,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_03_codice_paese_conducente,
    setA3_04_TabRig_Passaporto_N_03_codice_paese_conducente,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_04_numero_passaporto_conducente,
    setA3_04_TabRig_Passaporto_N_04_numero_passaporto_conducente,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_05_cognome_conducente,
    setA3_04_TabRig_Passaporto_N_05_cognome_conducente,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_06_nome_conducente,
    setA3_04_TabRig_Passaporto_N_06_nome_conducente,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_07_cittadinanza_conducente,
    setA3_04_TabRig_Passaporto_N_07_cittadinanza_conducente,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_08_data_nascita_conducente,
    setA3_04_TabRig_Passaporto_N_08_data_nascita_conducente,
  ] = useState<string>("");
  const [
    A3_04_TabRig_Passaporto_N_09_luogo_nascita_conducente,
    setA3_04_TabRig_Passaporto_N_09_luogo_nascita_conducente,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_10_sesso_conducente,
    setA3_04_TabRig_Passaporto_N_10_sesso_conducente,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_11_data_emissione_documento_conducente,
    setA3_04_TabRig_Passaporto_N_11_data_emissione_documento_conducente,
  ] = useState<string>("");
  const [
    A3_04_TabRig_Passaporto_N_12_data_scadenza_documento_conducente,
    setA3_04_TabRig_Passaporto_N_12_data_scadenza_documento_conducente,
  ] = useState<string>("");
  const [
    A3_04_TabRig_Passaporto_N_13_autorita_emittente_conducente,
    setA3_04_TabRig_Passaporto_N_13_autorita_emittente_conducente,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_02_tipo_passeggero_1,
    setA3_04_TabRig_Passaporto_N_02_tipo_passeggero_1,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_03_codice_paese_passeggero_1,
    setA3_04_TabRig_Passaporto_N_03_codice_paese_passeggero_1,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_04_numero_passaporto_passeggero_1,
    setA3_04_TabRig_Passaporto_N_04_numero_passaporto_passeggero_1,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_05_cognome_passeggero_1,
    setA3_04_TabRig_Passaporto_N_05_cognome_passeggero_1,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_06_nome_passeggero_1,
    setA3_04_TabRig_Passaporto_N_06_nome_passeggero_1,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_07_cittadinanza_passeggero_1,
    setA3_04_TabRig_Passaporto_N_07_cittadinanza_passeggero_1,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_08_data_nascita_passeggero_1,
    setA3_04_TabRig_Passaporto_N_08_data_nascita_passeggero_1,
  ] = useState<string>("");
  const [
    A3_04_TabRig_Passaporto_N_09_luogo_nascita_passeggero_1,
    setA3_04_TabRig_Passaporto_N_09_luogo_nascita_passeggero_1,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_10_sesso_passeggero_1,
    setA3_04_TabRig_Passaporto_N_10_sesso_passeggero_1,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_11_data_emissione_documento_passeggero_1,
    setA3_04_TabRig_Passaporto_N_11_data_emissione_documento_passeggero_1,
  ] = useState<string>("");
  const [
    A3_04_TabRig_Passaporto_N_12_data_scadenza_documento_passeggero_1,
    setA3_04_TabRig_Passaporto_N_12_data_scadenza_documento_passeggero_1,
  ] = useState<string>("");
  const [
    A3_04_TabRig_Passaporto_N_13_autorita_emittente_passeggero_1,
    setA3_04_TabRig_Passaporto_N_13_autorita_emittente_passeggero_1,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_02_tipo_passeggero_2,
    setA3_04_TabRig_Passaporto_N_02_tipo_passeggero_2,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_03_codice_paese_passeggero_2,
    setA3_04_TabRig_Passaporto_N_03_codice_paese_passeggero_2,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_04_numero_passaporto_passeggero_2,
    setA3_04_TabRig_Passaporto_N_04_numero_passaporto_passeggero_2,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_05_cognome_passeggero_2,
    setA3_04_TabRig_Passaporto_N_05_cognome_passeggero_2,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_06_nome_passeggero_2,
    setA3_04_TabRig_Passaporto_N_06_nome_passeggero_2,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_07_cittadinanza_passeggero_2,
    setA3_04_TabRig_Passaporto_N_07_cittadinanza_passeggero_2,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_08_data_nascita_passeggero_2,
    setA3_04_TabRig_Passaporto_N_08_data_nascita_passeggero_2,
  ] = useState<string>("");
  const [
    A3_04_TabRig_Passaporto_N_09_luogo_nascita_passeggero_2,
    setA3_04_TabRig_Passaporto_N_09_luogo_nascita_passeggero_2,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_10_sesso_passeggero_2,
    setA3_04_TabRig_Passaporto_N_10_sesso_passeggero_2,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_11_data_emissione_documento_passeggero_2,
    setA3_04_TabRig_Passaporto_N_11_data_emissione_documento_passeggero_2,
  ] = useState<string>("");
  const [
    A3_04_TabRig_Passaporto_N_12_data_scadenza_documento_passeggero_2,
    setA3_04_TabRig_Passaporto_N_12_data_scadenza_documento_passeggero_2,
  ] = useState<string>("");
  const [
    A3_04_TabRig_Passaporto_N_13_autorita_emittente_passeggero_2,
    setA3_04_TabRig_Passaporto_N_13_autorita_emittente_passeggero_2,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_02_tipo_passeggero_3,
    setA3_04_TabRig_Passaporto_N_02_tipo_passeggero_3,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_03_codice_paese_passeggero_3,
    setA3_04_TabRig_Passaporto_N_03_codice_paese_passeggero_3,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_04_numero_passaporto_passeggero_3,
    setA3_04_TabRig_Passaporto_N_04_numero_passaporto_passeggero_3,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_05_cognome_passeggero_3,
    setA3_04_TabRig_Passaporto_N_05_cognome_passeggero_3,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_06_nome_passeggero_3,
    setA3_04_TabRig_Passaporto_N_06_nome_passeggero_3,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_07_cittadinanza_passeggero_3,
    setA3_04_TabRig_Passaporto_N_07_cittadinanza_passeggero_3,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_08_data_nascita_passeggero_3,
    setA3_04_TabRig_Passaporto_N_08_data_nascita_passeggero_3,
  ] = useState<string>("");
  const [
    A3_04_TabRig_Passaporto_N_09_luogo_nascita_passeggero_3,
    setA3_04_TabRig_Passaporto_N_09_luogo_nascita_passeggero_3,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_10_sesso_passeggero_3,
    setA3_04_TabRig_Passaporto_N_10_sesso_passeggero_3,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_11_data_emissione_documento_passeggero_3,
    setA3_04_TabRig_Passaporto_N_11_data_emissione_documento_passeggero_3,
  ] = useState<string>("");
  const [
    A3_04_TabRig_Passaporto_N_12_data_scadenza_documento_passeggero_3,
    setA3_04_TabRig_Passaporto_N_12_data_scadenza_documento_passeggero_3,
  ] = useState<string>("");
  const [
    A3_04_TabRig_Passaporto_N_13_autorita_emittente_passeggero_3,
    setA3_04_TabRig_Passaporto_N_13_autorita_emittente_passeggero_3,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_02_tipo_passeggero_4,
    setA3_04_TabRig_Passaporto_N_02_tipo_passeggero_4,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_03_codice_paese_passeggero_4,
    setA3_04_TabRig_Passaporto_N_03_codice_paese_passeggero_4,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_04_numero_passaporto_passeggero_4,
    setA3_04_TabRig_Passaporto_N_04_numero_passaporto_passeggero_4,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_05_cognome_passeggero_4,
    setA3_04_TabRig_Passaporto_N_05_cognome_passeggero_4,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_06_nome_passeggero_4,
    setA3_04_TabRig_Passaporto_N_06_nome_passeggero_4,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_07_cittadinanza_passeggero_4,
    setA3_04_TabRig_Passaporto_N_07_cittadinanza_passeggero_4,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_08_data_nascita_passeggero_4,
    setA3_04_TabRig_Passaporto_N_08_data_nascita_passeggero_4,
  ] = useState<string>("");
  const [
    A3_04_TabRig_Passaporto_N_09_luogo_nascita_passeggero_4,
    setA3_04_TabRig_Passaporto_N_09_luogo_nascita_passeggero_4,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_10_sesso_passeggero_4,
    setA3_04_TabRig_Passaporto_N_10_sesso_passeggero_4,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_11_data_emissione_documento_passeggero_4,
    setA3_04_TabRig_Passaporto_N_11_data_emissione_documento_passeggero_4,
  ] = useState<string>("");
  const [
    A3_04_TabRig_Passaporto_N_12_data_scadenza_documento_passeggero_4,
    setA3_04_TabRig_Passaporto_N_12_data_scadenza_documento_passeggero_4,
  ] = useState<string>("");
  const [
    A3_04_TabRig_Passaporto_N_13_autorita_emittente_passeggero_4,
    setA3_04_TabRig_Passaporto_N_13_autorita_emittente_passeggero_4,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_02_tipo_passeggero_5,
    setA3_04_TabRig_Passaporto_N_02_tipo_passeggero_5,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_03_codice_paese_passeggero_5,
    setA3_04_TabRig_Passaporto_N_03_codice_paese_passeggero_5,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_04_numero_passaporto_passeggero_5,
    setA3_04_TabRig_Passaporto_N_04_numero_passaporto_passeggero_5,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_05_cognome_passeggero_5,
    setA3_04_TabRig_Passaporto_N_05_cognome_passeggero_5,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_06_nome_passeggero_5,
    setA3_04_TabRig_Passaporto_N_06_nome_passeggero_5,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_07_cittadinanza_passeggero_5,
    setA3_04_TabRig_Passaporto_N_07_cittadinanza_passeggero_5,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_08_data_nascita_passeggero_5,
    setA3_04_TabRig_Passaporto_N_08_data_nascita_passeggero_5,
  ] = useState<string>("");
  const [
    A3_04_TabRig_Passaporto_N_09_luogo_nascita_passeggero_5,
    setA3_04_TabRig_Passaporto_N_09_luogo_nascita_passeggero_5,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_10_sesso_passeggero_5,
    setA3_04_TabRig_Passaporto_N_10_sesso_passeggero_5,
  ] = useState("");
  const [
    A3_04_TabRig_Passaporto_N_11_data_emissione_documento_passeggero_5,
    setA3_04_TabRig_Passaporto_N_11_data_emissione_documento_passeggero_5,
  ] = useState<string>("");
  const [
    A3_04_TabRig_Passaporto_N_12_data_scadenza_documento_passeggero_5,
    setA3_04_TabRig_Passaporto_N_12_data_scadenza_documento_passeggero_5,
  ] = useState<string>("");
  const [
    A3_04_TabRig_Passaporto_N_13_autorita_emittente_passeggero_5,
    setA3_04_TabRig_Passaporto_N_13_autorita_emittente_passeggero_5,
  ] = useState("");

  //A3_05_TabRig_CartaCircolazione---------------------------------------------------------

  const [
    A3_05_TabRig_CartaCircolazione_N_01_targa_veicolo,
    setA3_05_TabRig_CartaCircolazione_N_01_targa_veicolo,
  ] = useState("");
  const [
    A3_05_TabRig_CartaCircolazione_N_02_data_prima_immatricolazione,
    setA3_05_TabRig_CartaCircolazione_N_02_data_prima_immatricolazione,
  ] = useState<string>("");
  const [
    A3_05_TabRig_CartaCircolazione_N_03_nome_proprietario,
    setA3_05_TabRig_CartaCircolazione_N_03_nome_proprietario,
  ] = useState("");
  const [
    A3_05_TabRig_CartaCircolazione_N_04_cognome_proprietario,
    setA3_05_TabRig_CartaCircolazione_N_04_cognome_proprietario,
  ] = useState("");
  const [
    A3_05_TabRig_CartaCircolazione_N_05_data_nascita,
    setA3_05_TabRig_CartaCircolazione_N_05_data_nascita,
  ] = useState<string>("");
  const [
    A3_05_TabRig_CartaCircolazione_N_06_luogo_nascita,
    setA3_05_TabRig_CartaCircolazione_N_06_luogo_nascita,
  ] = useState("");
  const [
    A3_05_TabRig_CartaCircolazione_N_07_marca_modello_veicolo,
    setA3_05_TabRig_CartaCircolazione_N_07_marca_modello_veicolo,
  ] = useState("");
  const [
    A3_05_TabRig_CartaCircolazione_N_08_numero_telaio,
    setA3_05_TabRig_CartaCircolazione_N_08_numero_telaio,
  ] = useState("");
  const [
    A3_05_TabRig_CartaCircolazione_N_09_categorie_veicolo,
    setA3_05_TabRig_CartaCircolazione_N_09_categorie_veicolo,
  ] = useState("");
  const [
    A3_05_TabRig_CartaCircolazione_N_10_destinazione_uso,
    setA3_05_TabRig_CartaCircolazione_N_10_destinazione_uso,
  ] = useState("");
  const [
    A3_05_TabRig_CartaCircolazione_N_11_emissioni,
    setA3_05_TabRig_CartaCircolazione_N_11_emissioni,
  ] = useState("");
  const [
    A3_05_TabRig_CartaCircolazione_N_12_classe_ambientale,
    setA3_05_TabRig_CartaCircolazione_N_12_classe_ambientale,
  ] = useState("");
  const [
    A3_05_TabRig_CartaCircolazione_N_13_massa_a_vuoto,
    setA3_05_TabRig_CartaCircolazione_N_13_massa_a_vuoto,
  ] = useState("");
  const [
    A3_05_TabRig_CartaCircolazione_N_14_numero_assi,
    setA3_05_TabRig_CartaCircolazione_N_14_numero_assi,
  ] = useState<string>("");
  const [
    A3_05_TabRig_CartaCircolazione_N_15_massa_massima_a_carico_tecnicamente_ammissibile,
    setA3_05_TabRig_CartaCircolazione_N_15_massa_massima_a_carico_tecnicamente_ammissibile,
  ] = useState("");
  const [
    A3_05_TabRig_CartaCircolazione_N_16_massa_massima_a_rimorchio_ammissibile_con_rimorchio_frenato,
    setA3_05_TabRig_CartaCircolazione_N_16_massa_massima_a_rimorchio_ammissibile_con_rimorchio_frenato,
  ] = useState("");
  const [
    A3_05_TabRig_CartaCircolazione_N_17_massa_massima_a_rimorchio_ammissibile_con_rimorchio_non_frenato,
    setA3_05_TabRig_CartaCircolazione_N_17_massa_massima_a_rimorchio_ammissibile_con_rimorchio_non_frenato,
  ] = useState("");
  const [
    A3_05_TabRig_CartaCircolazione_N_18_cilindrata,
    setA3_05_TabRig_CartaCircolazione_N_18_cilindrata,
  ] = useState("");
  const [
    A3_05_TabRig_CartaCircolazione_N_19_potenza_netta_kW,
    setA3_05_TabRig_CartaCircolazione_N_19_potenza_netta_kW,
  ] = useState("");
  const [
    A3_05_TabRig_CartaCircolazione_N_20_tipo_combustibile_alimentazione,
    setA3_05_TabRig_CartaCircolazione_N_20_tipo_combustibile_alimentazione,
  ] = useState("");
  const [
    A3_05_TabRig_CartaCircolazione_N_21_numero_id_motore,
    setA3_05_TabRig_CartaCircolazione_N_21_numero_id_motore,
  ] = useState("");
  const [
    A3_05_TabRig_CartaCircolazione_N_22_rapporto_potenza_massa_in_kW_solo_motocicli,
    setA3_05_TabRig_CartaCircolazione_N_22_rapporto_potenza_massa_in_kW_solo_motocicli,
  ] = useState("");
  const [
    A3_05_TabRig_CartaCircolazione_N_23_numeri_posti_a_sedere,
    setA3_05_TabRig_CartaCircolazione_N_23_numeri_posti_a_sedere,
  ] = useState<number | undefined>(undefined);
  const [
    A3_05_TabRig_CartaCircolazione_N_24_Emissioni_co2_g_km,
    setA3_05_TabRig_CartaCircolazione_N_24_Emissioni_co2_g_km,
  ] = useState<number | undefined>(undefined);
  const [
    A3_05_TabRig_CartaCircolazione_N_25_tipo_mezzo,
    setA3_05_TabRig_CartaCircolazione_N_25_tipo_mezzo,
  ] = useState("");
  const [
    A3_05_TabRig_CartaCircolazione_id_record,
    setA3_05_TabRig_CartaCircolazione_id_record,
  ] = useState<number | undefined>(undefined);

  //A3_06_TabRig_CertificatoAssicurazione---------------------------------------------------

  const [
    A3_06_TabRig_CertificatoAssicurazione_N_01_nome,
    setA3_06_TabRig_CertificatoAssicurazione_N_01_nome,
  ] = useState("");
  const [
    A3_06_TabRig_CertificatoAssicurazione_N_02_cognome,
    setA3_06_TabRig_CertificatoAssicurazione_N_02_cognome,
  ] = useState("");
  const [
    A3_06_TabRig_CertificatoAssicurazione_N_03_indirizzo_residenza,
    setA3_06_TabRig_CertificatoAssicurazione_N_03_indirizzo_residenza,
  ] = useState("");
  const [
    A3_06_TabRig_CertificatoAssicurazione_N_04_nome_compagnia_assicurativa,
    setA3_06_TabRig_CertificatoAssicurazione_N_04_nome_compagnia_assicurativa,
  ] = useState("");
  const [
    A3_06_TabRig_CertificatoAssicurazione_N_05_targa_veicolo,
    setA3_06_TabRig_CertificatoAssicurazione_N_05_targa_veicolo,
  ] = useState("");
  const [
    A3_06_TabRig_CertificatoAssicurazione_N_06_numero_polizza,
    setA3_06_TabRig_CertificatoAssicurazione_N_06_numero_polizza,
  ] = useState("");
  const [
    A3_06_TabRig_CertificatoAssicurazione_N_07_data_inizio_polizza,
    setA3_06_TabRig_CertificatoAssicurazione_N_07_data_inizio_polizza,
  ] = useState<string>("");
  const [
    A3_06_TabRig_CertificatoAssicurazione_N_08_data_fine_polizza,
    setA3_06_TabRig_CertificatoAssicurazione_N_08_data_fine_polizza,
  ] = useState<string>("");
  const [
    A3_06_TabRig_CertificatoAssicurazione_N_09_marca_modello_veicolo,
    setA3_06_TabRig_CertificatoAssicurazione_N_09_marca_modello_veicolo,
  ] = useState("");
  const [
    A3_06_TabRig_CertificatoAssicurazione_N_10_cilindrata,
    setA3_06_TabRig_CertificatoAssicurazione_N_10_cilindrata,
  ] = useState("");
  const [
    A3_06_TabRig_CertificatoAssicurazione_N_11_potenza,
    setA3_06_TabRig_CertificatoAssicurazione_N_11_potenza,
  ] = useState("");
  const [
    A3_06_TabRig_CertificatoAssicurazione_N_12_carburante,
    setA3_06_TabRig_CertificatoAssicurazione_N_12_carburante,
  ] = useState("");
  const [
    A3_06_TabRig_CertificatoAssicurazione_id_record,
    setA3_06_TabRig_CertificatoAssicurazione_id_record,
  ] = useState<number | undefined>(undefined);

  //A4_01_TabRig_Immagini---------------------------------------------------------------

  const [
    A4_01_TabRig_Immagini_M_immagine_01,
    setA4_01_TabRig_Immagini_M_immagine_01,
  ] = useState<string>("");

  const [
    A4_01_TabRig_Immagini_M_immagine_02,
    setA4_01_TabRig_Immagini_M_immagine_02,
  ] = useState<string>("");

  const [
    A4_01_TabRig_Immagini_M_immagine_03,
    setA4_01_TabRig_Immagini_M_immagine_03,
  ] = useState<string>("");

  const [
    A4_01_TabRig_Immagini_M_immagine_04,
    setA4_01_TabRig_Immagini_M_immagine_04,
  ] = useState<string>("");

  const [
    A4_01_TabRig_Immagini_M_immagine_05,
    setA4_01_TabRig_Immagini_M_immagine_05,
  ] = useState<string>("");

  const [
    A4_01_TabRig_Immagini_M_immagine_06,
    setA4_01_TabRig_Immagini_M_immagine_06,
  ] = useState<string>("");

  const [
    A4_01_TabRig_Immagini_M_immagine_07,
    setA4_01_TabRig_Immagini_M_immagine_07,
  ] = useState<string>("");

  const [
    A4_01_TabRig_Immagini_M_immagine_08,
    setA4_01_TabRig_Immagini_M_immagine_08,
  ] = useState<string>("");

  const [
    A4_01_TabRig_Immagini_M_immagine_09,
    setA4_01_TabRig_Immagini_M_immagine_09,
  ] = useState<string>("");

  const [
    A4_01_TabRig_Immagini_M_immagine_10,
    setA4_01_TabRig_Immagini_M_immagine_10,
  ] = useState<string>("");

  const [
    A4_01_TabRig_Immagini_M_immagine_11,
    setA4_01_TabRig_Immagini_M_immagine_11,
  ] = useState<string>("");

  const [
    A4_01_TabRig_Immagini_M_immagine_12,
    setA4_01_TabRig_Immagini_M_immagine_12,
  ] = useState<string>("");

  const [
    A4_01_TabRig_Immagini_M_immagine_13,
    setA4_01_TabRig_Immagini_M_immagine_13,
  ] = useState<string>("");

  const [
    A4_01_TabRig_Immagini_M_immagine_14,
    setA4_01_TabRig_Immagini_M_immagine_14,
  ] = useState<string>("");

  const [
    A4_01_TabRig_Immagini_M_immagine_15,
    setA4_01_TabRig_Immagini_M_immagine_15,
  ] = useState<string>("");

  const [
    A4_01_TabRig_Immagini_M_immagine_16,
    setA4_01_TabRig_Immagini_M_immagine_16,
  ] = useState<string>("");

  const [
    A4_01_TabRig_Immagini_M_immagine_17,
    setA4_01_TabRig_Immagini_M_immagine_17,
  ] = useState<string>("");

  const [
    A4_01_TabRig_Immagini_M_immagine_18,
    setA4_01_TabRig_Immagini_M_immagine_18,
  ] = useState<string>("");

  const [
    A4_01_TabRig_Immagini_M_immagine_19,
    setA4_01_TabRig_Immagini_M_immagine_19,
  ] = useState<string>("");

  const [
    A4_01_TabRig_Immagini_M_immagine_20,
    setA4_01_TabRig_Immagini_M_immagine_20,
  ] = useState<string>("");

  const [
    A4_01_TabRig_Immagini_M_immagine_21,
    setA4_01_TabRig_Immagini_M_immagine_21,
  ] = useState<string>("");

  const [
    A4_01_TabRig_Immagini_M_immagine_22,
    setA4_01_TabRig_Immagini_M_immagine_22,
  ] = useState<string>("");

  const [
    A4_01_TabRig_Immagini_M_immagine_23,
    setA4_01_TabRig_Immagini_M_immagine_23,
  ] = useState<string>("");

  const [
    A4_01_TabRig_Immagini_M_immagine_24,
    setA4_01_TabRig_Immagini_M_immagine_24,
  ] = useState<string>("");

  const [
    A4_01_TabRig_Immagini_M_immagine_25,
    setA4_01_TabRig_Immagini_M_immagine_25,
  ] = useState<string>("");

  const [
    A4_01_TabRig_Immagini_M_immagine_26,
    setA4_01_TabRig_Immagini_M_immagine_26,
  ] = useState<string>("");

  const [
    A4_01_TabRig_Immagini_M_immagine_27,
    setA4_01_TabRig_Immagini_M_immagine_27,
  ] = useState<string>("");

  const [
    A4_01_TabRig_Immagini_M_immagine_28,
    setA4_01_TabRig_Immagini_M_immagine_28,
  ] = useState<string>("");

  const [
    A4_01_TabRig_Immagini_M_immagine_29,
    setA4_01_TabRig_Immagini_M_immagine_29,
  ] = useState<string>("");

  const [
    A4_01_TabRig_Immagini_M_immagine_30,
    setA4_01_TabRig_Immagini_M_immagine_30,
  ] = useState<string>("");

  return (
    <AddContext.Provider
      value={{
        //A2_TabRig_informazioni_generali------------------------------------------------------------------

        A2_TabRig_informazioni_generali_D_01_data,
        setA2_TabRig_informazioni_generali_D_01_data,
        A2_TabRig_informazioni_generali_D_01_numero_pattuglia,
        setA2_TabRig_informazioni_generali_D_01_numero_pattuglia,
        A2_TabRig_informazioni_generali_D_01_turno,
        setA2_TabRig_informazioni_generali_D_01_turno,
        A2_TabRig_informazioni_generali_D_02_ora_inizio,
        setA2_TabRig_informazioni_generali_D_02_ora_inizio,
        A2_TabRig_informazioni_generali_D_03_ora_fine,
        setA2_TabRig_informazioni_generali_D_03_ora_fine,
        A2_TabRig_informazioni_generali_D_04_numero_giorno_settimana,
        setA2_TabRig_informazioni_generali_D_04_numero_giorno_settimana,
        A2_TabRig_informazioni_generali_D_05_latitudine,
        setA2_TabRig_informazioni_generali_D_05_latitudine,
        A2_TabRig_informazioni_generali_D_06_longitudine,
        setA2_TabRig_informazioni_generali_D_06_longitudine,
        A2_TabRig_informazioni_generali_D_07_provincia,
        setA2_TabRig_informazioni_generali_D_07_provincia,
        A2_TabRig_informazioni_generali_D_08_comune,
        setA2_TabRig_informazioni_generali_D_08_comune,
        A2_TabRig_informazioni_generali_D_09_codice_avviamento_postale,
        setA2_TabRig_informazioni_generali_D_09_codice_avviamento_postale,
        A2_TabRig_informazioni_generali_D_10_regione,
        setA2_TabRig_informazioni_generali_D_10_regione,
        A2_TabRig_informazioni_generali_D_11_indirizzo,
        setA2_TabRig_informazioni_generali_D_11_indirizzo,
        A2_TabRig_informazioni_generali_D_12_nome_operatore,
        setA2_TabRig_informazioni_generali_D_12_nome_operatore,
        A2_TabRig_informazioni_generali_D_13_cognome_operatore,
        setA2_TabRig_informazioni_generali_D_13_cognome_operatore,
        A2_TabRig_informazioni_generali_D_12_nome_operatore_2,
        setA2_TabRig_informazioni_generali_D_12_nome_operatore_2,
        A2_TabRig_informazioni_generali_D_13_cognome_operatore_2,
        setA2_TabRig_informazioni_generali_D_13_cognome_operatore_2,
        A2_TabRig_informazioni_generali_id_record,
        setA2_TabRig_informazioni_generali_id_record,
        A2_TabRig_informazioni_generali_D_14_stato,
        setA2_TabRig_informazioni_generali_D_14_stato,
        A2_TabRig_informazioni_generali_D_15_targa,
        setA2_TabRig_informazioni_generali_D_15_targa,
        A2_TabRig_informazioni_generali_D_16_nome_conducente,
        setA2_TabRig_informazioni_generali_D_16_nome_conducente,
        A2_TabRig_informazioni_generali_D_17_cognome_conducente,
        setA2_TabRig_informazioni_generali_D_17_cognome_conducente,
        A2_TabRig_informazioni_generali_D_18_nome_proprietario,
        setA2_TabRig_informazioni_generali_D_18_nome_proprietario,
        A2_TabRig_informazioni_generali_D_19_cognome_proprietario,
        setA2_TabRig_informazioni_generali_D_19_cognome_proprietario,
        A2_TabRig_informazioni_generali_D_20_numero_patente,
        setA2_TabRig_informazioni_generali_D_20_numero_patente,
        A2_TabRig_informazioni_generali_D_21_numero_carta_id,
        setA2_TabRig_informazioni_generali_D_21_numero_carta_id,
        A2_TabRig_informazioni_generali_D_22_numero_passaporto,
        setA2_TabRig_informazioni_generali_D_22_numero_passaporto,
        A2_TabRig_informazioni_generali_D_23_marca_modello_veicolo,
        setA2_TabRig_informazioni_generali_D_23_marca_modello_veicolo,
        A2_TabRig_informazioni_generali_D_24_cognome_nome_operatore_2,
        setA2_TabRig_informazioni_generali_D_24_cognome_nome_operatore_2,
        A2_TabRig_informazioni_generali_D_24_cognome_nome_operatore,
        setA2_TabRig_informazioni_generali_D_24_cognome_nome_operatore,
        A2_TabRig_informazioni_generali_D_25_norme_violate,
        setA2_TabRig_informazioni_generali_D_25_norme_violate,
        A2_TabRig_informazioni_generali_D_27_controlli_eseguiti,
        setA2_TabRig_informazioni_generali_D_27_controlli_eseguiti,
        A2_TabRig_informazioni_generali_D_28_patente_ritirata,
        setA2_TabRig_informazioni_generali_D_28_patente_ritirata,
        A2_TabRig_informazioni_generali_D_29_tipo_mezzo,
        setA2_TabRig_informazioni_generali_D_29_tipo_mezzo,
        A2_TabRig_informazioni_generali_D_30_note,
        setA2_TabRig_informazioni_generali_D_30_note,
        A2_TabRig_informazioni_generali_D_31_carta_circolazione_ritirata,
        setA2_TabRig_informazioni_generali_D_31_carta_circolazione_ritirata,
        A2_TabRig_informazioni_generali_D_32_certificato_assicurazione_ritirato,
        setA2_TabRig_informazioni_generali_D_32_certificato_assicurazione_ritirato,
        A2_TabRig_informazioni_generali_D_33_verifica_revisione,
        setA2_TabRig_informazioni_generali_D_33_verifica_revisione,
        A2_TabRig_informazioni_generali_D_34_verifica_assicurazione,
        setA2_TabRig_informazioni_generali_D_34_verifica_assicurazione,
        A2_TabRig_informazioni_generali_D_35_verifica_scarico,
        setA2_TabRig_informazioni_generali_D_35_verifica_scarico,
        A2_TabRig_informazioni_generali_D_36_verifica_cinture_sicurezza,
        setA2_TabRig_informazioni_generali_D_36_verifica_cinture_sicurezza,
        A2_TabRig_informazioni_generali_D_37_verifica_pneumatici,
        setA2_TabRig_informazioni_generali_D_37_verifica_pneumatici,
        A2_TabRig_informazioni_generali_D_38_verifica_luci,
        setA2_TabRig_informazioni_generali_D_38_verifica_luci,
        A2_TabRig_informazioni_generali_D_39_targa_rimorchio,
        setA2_TabRig_informazioni_generali_D_39_targa_rimorchio,

        //A3_02_TabRig_PatenteGuida---------------------------------------------------------------------

        A3_02_TabRig_PatenteGuida_id_record,
        setA3_02_TabRig_PatenteGuida_id_record,
        A3_02_TabRig_PatenteGuida_N_02_cognome_conducente,
        setA3_02_TabRig_PatenteGuida_N_02_cognome_conducente,
        A3_02_TabRig_PatenteGuida_N_03_nome_conducente,
        setA3_02_TabRig_PatenteGuida_N_03_nome_conducente,
        A3_02_TabRig_PatenteGuida_N_04_data_nascita_conducente,
        setA3_02_TabRig_PatenteGuida_N_04_data_nascita_conducente,
        A3_02_TabRig_PatenteGuida_N_05_luogo_nascita_conducente,
        setA3_02_TabRig_PatenteGuida_N_05_luogo_nascita_conducente,
        A3_02_TabRig_PatenteGuida_N_06_data_emissione_documento_conducente,
        setA3_02_TabRig_PatenteGuida_N_06_data_emissione_documento_conducente,
        A3_02_TabRig_PatenteGuida_N_07_data_scadenza_documento_conducente,
        setA3_02_TabRig_PatenteGuida_N_07_data_scadenza_documento_conducente,
        A3_02_TabRig_PatenteGuida_N_08_rilasciata_da_conducente,
        setA3_02_TabRig_PatenteGuida_N_08_rilasciata_da_conducente,
        A3_02_TabRig_PatenteGuida_N_09_numero_documento_conducente,
        setA3_02_TabRig_PatenteGuida_N_09_numero_documento_conducente,
        A3_02_TabRig_PatenteGuida_N_10_categoria_patente_conducente,
        setA3_02_TabRig_PatenteGuida_N_10_categoria_patente_conducente,
        A3_02_TabRig_PatenteGuida_N_11_annotazioni_restrizioni_conducente,
        setA3_02_TabRig_PatenteGuida_N_11_annotazioni_restrizioni_conducente,
        A3_02_TabRig_PatenteGuida_N_02_cognome_passeggero_1,
        setA3_02_TabRig_PatenteGuida_N_02_cognome_passeggero_1,
        A3_02_TabRig_PatenteGuida_N_03_nome_passeggero_1,
        setA3_02_TabRig_PatenteGuida_N_03_nome_passeggero_1,
        A3_02_TabRig_PatenteGuida_N_04_data_nascita_passeggero_1,
        setA3_02_TabRig_PatenteGuida_N_04_data_nascita_passeggero_1,
        A3_02_TabRig_PatenteGuida_N_05_luogo_nascita_passeggero_1,
        setA3_02_TabRig_PatenteGuida_N_05_luogo_nascita_passeggero_1,
        A3_02_TabRig_PatenteGuida_N_06_data_emissione_documento_passeggero_1,
        setA3_02_TabRig_PatenteGuida_N_06_data_emissione_documento_passeggero_1,
        A3_02_TabRig_PatenteGuida_N_07_data_scadenza_documento_passeggero_1,
        setA3_02_TabRig_PatenteGuida_N_07_data_scadenza_documento_passeggero_1,
        A3_02_TabRig_PatenteGuida_N_08_rilasciata_da_passeggero_1,
        setA3_02_TabRig_PatenteGuida_N_08_rilasciata_da_passeggero_1,
        A3_02_TabRig_PatenteGuida_N_09_numero_documento_passeggero_1,
        setA3_02_TabRig_PatenteGuida_N_09_numero_documento_passeggero_1,
        A3_02_TabRig_PatenteGuida_N_10_categoria_patente_passeggero_1,
        setA3_02_TabRig_PatenteGuida_N_10_categoria_patente_passeggero_1,
        A3_02_TabRig_PatenteGuida_N_11_annotazioni_restrizioni_passeggero_1,
        setA3_02_TabRig_PatenteGuida_N_11_annotazioni_restrizioni_passeggero_1,
        A3_02_TabRig_PatenteGuida_N_02_cognome_passeggero_2,
        setA3_02_TabRig_PatenteGuida_N_02_cognome_passeggero_2,
        A3_02_TabRig_PatenteGuida_N_03_nome_passeggero_2,
        setA3_02_TabRig_PatenteGuida_N_03_nome_passeggero_2,
        A3_02_TabRig_PatenteGuida_N_04_data_nascita_passeggero_2,
        setA3_02_TabRig_PatenteGuida_N_04_data_nascita_passeggero_2,
        A3_02_TabRig_PatenteGuida_N_05_luogo_nascita_passeggero_2,
        setA3_02_TabRig_PatenteGuida_N_05_luogo_nascita_passeggero_2,
        A3_02_TabRig_PatenteGuida_N_06_data_emissione_documento_passeggero_2,
        setA3_02_TabRig_PatenteGuida_N_06_data_emissione_documento_passeggero_2,
        A3_02_TabRig_PatenteGuida_N_07_data_scadenza_documento_passeggero_2,
        setA3_02_TabRig_PatenteGuida_N_07_data_scadenza_documento_passeggero_2,
        A3_02_TabRig_PatenteGuida_N_08_rilasciata_da_passeggero_2,
        setA3_02_TabRig_PatenteGuida_N_08_rilasciata_da_passeggero_2,
        A3_02_TabRig_PatenteGuida_N_09_numero_documento_passeggero_2,
        setA3_02_TabRig_PatenteGuida_N_09_numero_documento_passeggero_2,
        A3_02_TabRig_PatenteGuida_N_10_categoria_patente_passeggero_2,
        setA3_02_TabRig_PatenteGuida_N_10_categoria_patente_passeggero_2,
        A3_02_TabRig_PatenteGuida_N_11_annotazioni_restrizioni_passeggero_2,
        setA3_02_TabRig_PatenteGuida_N_11_annotazioni_restrizioni_passeggero_2,
        A3_02_TabRig_PatenteGuida_N_02_cognome_passeggero_3,
        setA3_02_TabRig_PatenteGuida_N_02_cognome_passeggero_3,
        A3_02_TabRig_PatenteGuida_N_03_nome_passeggero_3,
        setA3_02_TabRig_PatenteGuida_N_03_nome_passeggero_3,
        A3_02_TabRig_PatenteGuida_N_04_data_nascita_passeggero_3,
        setA3_02_TabRig_PatenteGuida_N_04_data_nascita_passeggero_3,
        A3_02_TabRig_PatenteGuida_N_05_luogo_nascita_passeggero_3,
        setA3_02_TabRig_PatenteGuida_N_05_luogo_nascita_passeggero_3,
        A3_02_TabRig_PatenteGuida_N_06_data_emissione_documento_passeggero_3,
        setA3_02_TabRig_PatenteGuida_N_06_data_emissione_documento_passeggero_3,
        A3_02_TabRig_PatenteGuida_N_07_data_scadenza_documento_passeggero_3,
        setA3_02_TabRig_PatenteGuida_N_07_data_scadenza_documento_passeggero_3,
        A3_02_TabRig_PatenteGuida_N_08_rilasciata_da_passeggero_3,
        setA3_02_TabRig_PatenteGuida_N_08_rilasciata_da_passeggero_3,
        A3_02_TabRig_PatenteGuida_N_09_numero_documento_passeggero_3,
        setA3_02_TabRig_PatenteGuida_N_09_numero_documento_passeggero_3,
        A3_02_TabRig_PatenteGuida_N_10_categoria_patente_passeggero_3,
        setA3_02_TabRig_PatenteGuida_N_10_categoria_patente_passeggero_3,
        A3_02_TabRig_PatenteGuida_N_11_annotazioni_restrizioni_passeggero_3,
        setA3_02_TabRig_PatenteGuida_N_11_annotazioni_restrizioni_passeggero_3,

        A3_02_TabRig_PatenteGuida_N_02_cognome_passeggero_4,
        setA3_02_TabRig_PatenteGuida_N_02_cognome_passeggero_4,
        A3_02_TabRig_PatenteGuida_N_03_nome_passeggero_4,
        setA3_02_TabRig_PatenteGuida_N_03_nome_passeggero_4,
        A3_02_TabRig_PatenteGuida_N_04_data_nascita_passeggero_4,
        setA3_02_TabRig_PatenteGuida_N_04_data_nascita_passeggero_4,
        A3_02_TabRig_PatenteGuida_N_05_luogo_nascita_passeggero_4,
        setA3_02_TabRig_PatenteGuida_N_05_luogo_nascita_passeggero_4,
        A3_02_TabRig_PatenteGuida_N_06_data_emissione_documento_passeggero_4,
        setA3_02_TabRig_PatenteGuida_N_06_data_emissione_documento_passeggero_4,
        A3_02_TabRig_PatenteGuida_N_07_data_scadenza_documento_passeggero_4,
        setA3_02_TabRig_PatenteGuida_N_07_data_scadenza_documento_passeggero_4,
        A3_02_TabRig_PatenteGuida_N_08_rilasciata_da_passeggero_4,
        setA3_02_TabRig_PatenteGuida_N_08_rilasciata_da_passeggero_4,
        A3_02_TabRig_PatenteGuida_N_09_numero_documento_passeggero_4,
        setA3_02_TabRig_PatenteGuida_N_09_numero_documento_passeggero_4,
        A3_02_TabRig_PatenteGuida_N_10_categoria_patente_passeggero_4,
        setA3_02_TabRig_PatenteGuida_N_10_categoria_patente_passeggero_4,
        A3_02_TabRig_PatenteGuida_N_11_annotazioni_restrizioni_passeggero_4,
        setA3_02_TabRig_PatenteGuida_N_11_annotazioni_restrizioni_passeggero_4,

        A3_02_TabRig_PatenteGuida_N_02_cognome_passeggero_5,
        setA3_02_TabRig_PatenteGuida_N_02_cognome_passeggero_5,
        A3_02_TabRig_PatenteGuida_N_03_nome_passeggero_5,
        setA3_02_TabRig_PatenteGuida_N_03_nome_passeggero_5,
        A3_02_TabRig_PatenteGuida_N_04_data_nascita_passeggero_5,
        setA3_02_TabRig_PatenteGuida_N_04_data_nascita_passeggero_5,
        A3_02_TabRig_PatenteGuida_N_05_luogo_nascita_passeggero_5,
        setA3_02_TabRig_PatenteGuida_N_05_luogo_nascita_passeggero_5,
        A3_02_TabRig_PatenteGuida_N_06_data_emissione_documento_passeggero_5,
        setA3_02_TabRig_PatenteGuida_N_06_data_emissione_documento_passeggero_5,
        A3_02_TabRig_PatenteGuida_N_07_data_scadenza_documento_passeggero_5,
        setA3_02_TabRig_PatenteGuida_N_07_data_scadenza_documento_passeggero_5,
        A3_02_TabRig_PatenteGuida_N_08_rilasciata_da_passeggero_5,
        setA3_02_TabRig_PatenteGuida_N_08_rilasciata_da_passeggero_5,
        A3_02_TabRig_PatenteGuida_N_09_numero_documento_passeggero_5,
        setA3_02_TabRig_PatenteGuida_N_09_numero_documento_passeggero_5,
        A3_02_TabRig_PatenteGuida_N_10_categoria_patente_passeggero_5,
        setA3_02_TabRig_PatenteGuida_N_10_categoria_patente_passeggero_5,
        A3_02_TabRig_PatenteGuida_N_11_annotazioni_restrizioni_passeggero_5,
        setA3_02_TabRig_PatenteGuida_N_11_annotazioni_restrizioni_passeggero_5,

        //A3_03_TabRig_CartaIdentita---------------------------------------------------------------

        A3_03_TabRig_CartaIdentita_id_record,
        setA3_03_TabRig_CartaIdentita_id_record,
        A3_03_TabRig_CartaIdentita_N_02_comune_ufficio_emettitore_conducente,
        setA3_03_TabRig_CartaIdentita_N_02_comune_ufficio_emettitore_conducente,
        A3_03_TabRig_CartaIdentita_N_03_cognome_conducente,
        setA3_03_TabRig_CartaIdentita_N_03_cognome_conducente,
        A3_03_TabRig_CartaIdentita_N_04_nome_conducente,
        setA3_03_TabRig_CartaIdentita_N_04_nome_conducente,
        A3_03_TabRig_CartaIdentita_N_05_data_nascita_conducente,
        setA3_03_TabRig_CartaIdentita_N_05_data_nascita_conducente,
        A3_03_TabRig_CartaIdentita_N_06_luogo_nascita_conducente,
        setA3_03_TabRig_CartaIdentita_N_06_luogo_nascita_conducente,
        A3_03_TabRig_CartaIdentita_N_08_sesso_conducente,
        setA3_03_TabRig_CartaIdentita_N_08_sesso_conducente,
        A3_03_TabRig_CartaIdentita_N_09_statura_conducente,
        setA3_03_TabRig_CartaIdentita_N_09_statura_conducente,
        A3_03_TabRig_CartaIdentita_N_10_occhi_conducente,
        setA3_03_TabRig_CartaIdentita_N_10_occhi_conducente,
        A3_03_TabRig_CartaIdentita_N_11_cittadinanza_conducente,
        setA3_03_TabRig_CartaIdentita_N_11_cittadinanza_conducente,
        A3_03_TabRig_CartaIdentita_N_12_codice_fiscale_conducente,
        setA3_03_TabRig_CartaIdentita_N_12_codice_fiscale_conducente,
        A3_03_TabRig_CartaIdentita_N_13_residenza_conducente,
        setA3_03_TabRig_CartaIdentita_N_13_residenza_conducente,
        A3_03_TabRig_CartaIdentita_N_14_professione_conducente,
        setA3_03_TabRig_CartaIdentita_N_14_professione_conducente,
        A3_03_TabRig_CartaIdentita_N_15_stato_civile_conducente,
        setA3_03_TabRig_CartaIdentita_N_15_stato_civile_conducente,
        A3_03_TabRig_CartaIdentita_N_16_eventuale_non_validita_per_espatrio_conducente,
        setA3_03_TabRig_CartaIdentita_N_16_eventuale_non_validita_per_espatrio_conducente,
        A3_03_TabRig_CartaIdentita_N_17_nome_cognome_padre_nel_caso_minore_conducente,
        setA3_03_TabRig_CartaIdentita_N_17_nome_cognome_padre_nel_caso_minore_conducente,
        A3_03_TabRig_CartaIdentita_N_23_nome_cognome_madre_nel_caso_minore_conducente,
        setA3_03_TabRig_CartaIdentita_N_23_nome_cognome_madre_nel_caso_minore_conducente,
        A3_03_TabRig_CartaIdentita_N_18_estremi_atto_nascita_conducente,
        setA3_03_TabRig_CartaIdentita_N_18_estremi_atto_nascita_conducente,
        A3_03_TabRig_CartaIdentita_N_19_comune_di_iscrizione_AIRE_conducente,
        setA3_03_TabRig_CartaIdentita_N_19_comune_di_iscrizione_AIRE_conducente,
        A3_03_TabRig_CartaIdentita_N_20_numero_documento_conducente,
        setA3_03_TabRig_CartaIdentita_N_20_numero_documento_conducente,
        A3_03_TabRig_CartaIdentita_N_21_data_emissione_documento_conducente,
        setA3_03_TabRig_CartaIdentita_N_21_data_emissione_documento_conducente,
        A3_03_TabRig_CartaIdentita_N_22_data_scadenza_documento_conducente,
        setA3_03_TabRig_CartaIdentita_N_22_data_scadenza_documento_conducente,
        A3_03_TabRig_CartaIdentita_N_02_comune_ufficio_emettitore_passeggero_1,
        setA3_03_TabRig_CartaIdentita_N_02_comune_ufficio_emettitore_passeggero_1,
        A3_03_TabRig_CartaIdentita_N_03_cognome_passeggero_1,
        setA3_03_TabRig_CartaIdentita_N_03_cognome_passeggero_1,
        A3_03_TabRig_CartaIdentita_N_04_nome_passeggero_1,
        setA3_03_TabRig_CartaIdentita_N_04_nome_passeggero_1,
        A3_03_TabRig_CartaIdentita_N_05_data_nascita_passeggero_1,
        setA3_03_TabRig_CartaIdentita_N_05_data_nascita_passeggero_1,
        A3_03_TabRig_CartaIdentita_N_06_luogo_nascita_passeggero_1,
        setA3_03_TabRig_CartaIdentita_N_06_luogo_nascita_passeggero_1,
        A3_03_TabRig_CartaIdentita_N_08_sesso_passeggero_1,
        setA3_03_TabRig_CartaIdentita_N_08_sesso_passeggero_1,
        A3_03_TabRig_CartaIdentita_N_09_statura_passeggero_1,
        setA3_03_TabRig_CartaIdentita_N_09_statura_passeggero_1,
        A3_03_TabRig_CartaIdentita_N_10_occhi_passeggero_1,
        setA3_03_TabRig_CartaIdentita_N_10_occhi_passeggero_1,
        A3_03_TabRig_CartaIdentita_N_11_cittadinanza_passeggero_1,
        setA3_03_TabRig_CartaIdentita_N_11_cittadinanza_passeggero_1,
        A3_03_TabRig_CartaIdentita_N_12_codice_fiscale_passeggero_1,
        setA3_03_TabRig_CartaIdentita_N_12_codice_fiscale_passeggero_1,
        A3_03_TabRig_CartaIdentita_N_13_residenza_passeggero_1,
        setA3_03_TabRig_CartaIdentita_N_13_residenza_passeggero_1,
        A3_03_TabRig_CartaIdentita_N_14_professione_passeggero_1,
        setA3_03_TabRig_CartaIdentita_N_14_professione_passeggero_1,
        A3_03_TabRig_CartaIdentita_N_15_stato_civile_passeggero_1,
        setA3_03_TabRig_CartaIdentita_N_15_stato_civile_passeggero_1,
        A3_03_TabRig_CartaIdentita_N_16_eventuale_non_validita_per_espatrio_passeggero_1,
        setA3_03_TabRig_CartaIdentita_N_16_eventuale_non_validita_per_espatrio_passeggero_1,
        A3_03_TabRig_CartaIdentita_N_17_nome_cognome_padre_nel_caso_minore_passeggero_1,
        setA3_03_TabRig_CartaIdentita_N_17_nome_cognome_padre_nel_caso_minore_passeggero_1,
        A3_03_TabRig_CartaIdentita_N_23_nome_cognome_madre_nel_caso_minore_passeggero_1,
        setA3_03_TabRig_CartaIdentita_N_23_nome_cognome_madre_nel_caso_minore_passeggero_1,
        A3_03_TabRig_CartaIdentita_N_18_estremi_atto_nascita_passeggero_1,
        setA3_03_TabRig_CartaIdentita_N_18_estremi_atto_nascita_passeggero_1,
        A3_03_TabRig_CartaIdentita_N_19_comune_di_iscrizione_AIRE_passeggero_1,
        setA3_03_TabRig_CartaIdentita_N_19_comune_di_iscrizione_AIRE_passeggero_1,
        A3_03_TabRig_CartaIdentita_N_20_numero_documento_passeggero_1,
        setA3_03_TabRig_CartaIdentita_N_20_numero_documento_passeggero_1,
        A3_03_TabRig_CartaIdentita_N_21_data_emissione_documento_passeggero_1,
        setA3_03_TabRig_CartaIdentita_N_21_data_emissione_documento_passeggero_1,
        A3_03_TabRig_CartaIdentita_N_22_data_scadenza_documento_passeggero_1,
        setA3_03_TabRig_CartaIdentita_N_22_data_scadenza_documento_passeggero_1,
        A3_03_TabRig_CartaIdentita_N_02_comune_ufficio_emettitore_passeggero_2,
        setA3_03_TabRig_CartaIdentita_N_02_comune_ufficio_emettitore_passeggero_2,
        A3_03_TabRig_CartaIdentita_N_03_cognome_passeggero_2,
        setA3_03_TabRig_CartaIdentita_N_03_cognome_passeggero_2,
        A3_03_TabRig_CartaIdentita_N_04_nome_passeggero_2,
        setA3_03_TabRig_CartaIdentita_N_04_nome_passeggero_2,
        A3_03_TabRig_CartaIdentita_N_05_data_nascita_passeggero_2,
        setA3_03_TabRig_CartaIdentita_N_05_data_nascita_passeggero_2,
        A3_03_TabRig_CartaIdentita_N_06_luogo_nascita_passeggero_2,
        setA3_03_TabRig_CartaIdentita_N_06_luogo_nascita_passeggero_2,
        A3_03_TabRig_CartaIdentita_N_08_sesso_passeggero_2,
        setA3_03_TabRig_CartaIdentita_N_08_sesso_passeggero_2,
        A3_03_TabRig_CartaIdentita_N_09_statura_passeggero_2,
        setA3_03_TabRig_CartaIdentita_N_09_statura_passeggero_2,
        A3_03_TabRig_CartaIdentita_N_10_occhi_passeggero_2,
        setA3_03_TabRig_CartaIdentita_N_10_occhi_passeggero_2,
        A3_03_TabRig_CartaIdentita_N_11_cittadinanza_passeggero_2,
        setA3_03_TabRig_CartaIdentita_N_11_cittadinanza_passeggero_2,
        A3_03_TabRig_CartaIdentita_N_12_codice_fiscale_passeggero_2,
        setA3_03_TabRig_CartaIdentita_N_12_codice_fiscale_passeggero_2,
        A3_03_TabRig_CartaIdentita_N_13_residenza_passeggero_2,
        setA3_03_TabRig_CartaIdentita_N_13_residenza_passeggero_2,
        A3_03_TabRig_CartaIdentita_N_14_professione_passeggero_2,
        setA3_03_TabRig_CartaIdentita_N_14_professione_passeggero_2,
        A3_03_TabRig_CartaIdentita_N_15_stato_civile_passeggero_2,
        setA3_03_TabRig_CartaIdentita_N_15_stato_civile_passeggero_2,
        A3_03_TabRig_CartaIdentita_N_16_eventuale_non_validita_per_espatrio_passeggero_2,
        setA3_03_TabRig_CartaIdentita_N_16_eventuale_non_validita_per_espatrio_passeggero_2,
        A3_03_TabRig_CartaIdentita_N_17_nome_cognome_padre_nel_caso_minore_passeggero_2,
        setA3_03_TabRig_CartaIdentita_N_17_nome_cognome_padre_nel_caso_minore_passeggero_2,
        A3_03_TabRig_CartaIdentita_N_23_nome_cognome_madre_nel_caso_minore_passeggero_2,
        setA3_03_TabRig_CartaIdentita_N_23_nome_cognome_madre_nel_caso_minore_passeggero_2,
        A3_03_TabRig_CartaIdentita_N_18_estremi_atto_nascita_passeggero_2,
        setA3_03_TabRig_CartaIdentita_N_18_estremi_atto_nascita_passeggero_2,
        A3_03_TabRig_CartaIdentita_N_19_comune_di_iscrizione_AIRE_passeggero_2,
        setA3_03_TabRig_CartaIdentita_N_19_comune_di_iscrizione_AIRE_passeggero_2,
        A3_03_TabRig_CartaIdentita_N_20_numero_documento_passeggero_2,
        setA3_03_TabRig_CartaIdentita_N_20_numero_documento_passeggero_2,
        A3_03_TabRig_CartaIdentita_N_21_data_emissione_documento_passeggero_2,
        setA3_03_TabRig_CartaIdentita_N_21_data_emissione_documento_passeggero_2,
        A3_03_TabRig_CartaIdentita_N_22_data_scadenza_documento_passeggero_2,
        setA3_03_TabRig_CartaIdentita_N_22_data_scadenza_documento_passeggero_2,

        A3_03_TabRig_CartaIdentita_N_02_comune_ufficio_emettitore_passeggero_3,
        setA3_03_TabRig_CartaIdentita_N_02_comune_ufficio_emettitore_passeggero_3,
        A3_03_TabRig_CartaIdentita_N_03_cognome_passeggero_3,
        setA3_03_TabRig_CartaIdentita_N_03_cognome_passeggero_3,
        A3_03_TabRig_CartaIdentita_N_04_nome_passeggero_3,
        setA3_03_TabRig_CartaIdentita_N_04_nome_passeggero_3,
        A3_03_TabRig_CartaIdentita_N_05_data_nascita_passeggero_3,
        setA3_03_TabRig_CartaIdentita_N_05_data_nascita_passeggero_3,
        A3_03_TabRig_CartaIdentita_N_06_luogo_nascita_passeggero_3,
        setA3_03_TabRig_CartaIdentita_N_06_luogo_nascita_passeggero_3,
        A3_03_TabRig_CartaIdentita_N_08_sesso_passeggero_3,
        setA3_03_TabRig_CartaIdentita_N_08_sesso_passeggero_3,
        A3_03_TabRig_CartaIdentita_N_09_statura_passeggero_3,
        setA3_03_TabRig_CartaIdentita_N_09_statura_passeggero_3,
        A3_03_TabRig_CartaIdentita_N_10_occhi_passeggero_3,
        setA3_03_TabRig_CartaIdentita_N_10_occhi_passeggero_3,
        A3_03_TabRig_CartaIdentita_N_11_cittadinanza_passeggero_3,
        setA3_03_TabRig_CartaIdentita_N_11_cittadinanza_passeggero_3,
        A3_03_TabRig_CartaIdentita_N_12_codice_fiscale_passeggero_3,
        setA3_03_TabRig_CartaIdentita_N_12_codice_fiscale_passeggero_3,
        A3_03_TabRig_CartaIdentita_N_13_residenza_passeggero_3,
        setA3_03_TabRig_CartaIdentita_N_13_residenza_passeggero_3,
        A3_03_TabRig_CartaIdentita_N_14_professione_passeggero_3,
        setA3_03_TabRig_CartaIdentita_N_14_professione_passeggero_3,
        A3_03_TabRig_CartaIdentita_N_15_stato_civile_passeggero_3,
        setA3_03_TabRig_CartaIdentita_N_15_stato_civile_passeggero_3,
        A3_03_TabRig_CartaIdentita_N_16_eventuale_non_validita_per_espatrio_passeggero_3,
        setA3_03_TabRig_CartaIdentita_N_16_eventuale_non_validita_per_espatrio_passeggero_3,
        A3_03_TabRig_CartaIdentita_N_17_nome_cognome_padre_nel_caso_minore_passeggero_3,
        setA3_03_TabRig_CartaIdentita_N_17_nome_cognome_padre_nel_caso_minore_passeggero_3,
        A3_03_TabRig_CartaIdentita_N_23_nome_cognome_madre_nel_caso_minore_passeggero_3,
        setA3_03_TabRig_CartaIdentita_N_23_nome_cognome_madre_nel_caso_minore_passeggero_3,
        A3_03_TabRig_CartaIdentita_N_18_estremi_atto_nascita_passeggero_3,
        setA3_03_TabRig_CartaIdentita_N_18_estremi_atto_nascita_passeggero_3,
        A3_03_TabRig_CartaIdentita_N_19_comune_di_iscrizione_AIRE_passeggero_3,
        setA3_03_TabRig_CartaIdentita_N_19_comune_di_iscrizione_AIRE_passeggero_3,
        A3_03_TabRig_CartaIdentita_N_20_numero_documento_passeggero_3,
        setA3_03_TabRig_CartaIdentita_N_20_numero_documento_passeggero_3,
        A3_03_TabRig_CartaIdentita_N_21_data_emissione_documento_passeggero_3,
        setA3_03_TabRig_CartaIdentita_N_21_data_emissione_documento_passeggero_3,
        A3_03_TabRig_CartaIdentita_N_22_data_scadenza_documento_passeggero_3,
        setA3_03_TabRig_CartaIdentita_N_22_data_scadenza_documento_passeggero_3,

        A3_03_TabRig_CartaIdentita_N_02_comune_ufficio_emettitore_passeggero_4,
        setA3_03_TabRig_CartaIdentita_N_02_comune_ufficio_emettitore_passeggero_4,
        A3_03_TabRig_CartaIdentita_N_03_cognome_passeggero_4,
        setA3_03_TabRig_CartaIdentita_N_03_cognome_passeggero_4,
        A3_03_TabRig_CartaIdentita_N_04_nome_passeggero_4,
        setA3_03_TabRig_CartaIdentita_N_04_nome_passeggero_4,
        A3_03_TabRig_CartaIdentita_N_05_data_nascita_passeggero_4,
        setA3_03_TabRig_CartaIdentita_N_05_data_nascita_passeggero_4,
        A3_03_TabRig_CartaIdentita_N_06_luogo_nascita_passeggero_4,
        setA3_03_TabRig_CartaIdentita_N_06_luogo_nascita_passeggero_4,
        A3_03_TabRig_CartaIdentita_N_08_sesso_passeggero_4,
        setA3_03_TabRig_CartaIdentita_N_08_sesso_passeggero_4,
        A3_03_TabRig_CartaIdentita_N_09_statura_passeggero_4,
        setA3_03_TabRig_CartaIdentita_N_09_statura_passeggero_4,
        A3_03_TabRig_CartaIdentita_N_10_occhi_passeggero_4,
        setA3_03_TabRig_CartaIdentita_N_10_occhi_passeggero_4,
        A3_03_TabRig_CartaIdentita_N_11_cittadinanza_passeggero_4,
        setA3_03_TabRig_CartaIdentita_N_11_cittadinanza_passeggero_4,
        A3_03_TabRig_CartaIdentita_N_12_codice_fiscale_passeggero_4,
        setA3_03_TabRig_CartaIdentita_N_12_codice_fiscale_passeggero_4,
        A3_03_TabRig_CartaIdentita_N_13_residenza_passeggero_4,
        setA3_03_TabRig_CartaIdentita_N_13_residenza_passeggero_4,
        A3_03_TabRig_CartaIdentita_N_14_professione_passeggero_4,
        setA3_03_TabRig_CartaIdentita_N_14_professione_passeggero_4,
        A3_03_TabRig_CartaIdentita_N_15_stato_civile_passeggero_4,
        setA3_03_TabRig_CartaIdentita_N_15_stato_civile_passeggero_4,
        A3_03_TabRig_CartaIdentita_N_16_eventuale_non_validita_per_espatrio_passeggero_4,
        setA3_03_TabRig_CartaIdentita_N_16_eventuale_non_validita_per_espatrio_passeggero_4,
        A3_03_TabRig_CartaIdentita_N_17_nome_cognome_padre_nel_caso_minore_passeggero_4,
        setA3_03_TabRig_CartaIdentita_N_17_nome_cognome_padre_nel_caso_minore_passeggero_4,
        A3_03_TabRig_CartaIdentita_N_23_nome_cognome_madre_nel_caso_minore_passeggero_4,
        setA3_03_TabRig_CartaIdentita_N_23_nome_cognome_madre_nel_caso_minore_passeggero_4,
        A3_03_TabRig_CartaIdentita_N_18_estremi_atto_nascita_passeggero_4,
        setA3_03_TabRig_CartaIdentita_N_18_estremi_atto_nascita_passeggero_4,
        A3_03_TabRig_CartaIdentita_N_19_comune_di_iscrizione_AIRE_passeggero_4,
        setA3_03_TabRig_CartaIdentita_N_19_comune_di_iscrizione_AIRE_passeggero_4,
        A3_03_TabRig_CartaIdentita_N_20_numero_documento_passeggero_4,
        setA3_03_TabRig_CartaIdentita_N_20_numero_documento_passeggero_4,
        A3_03_TabRig_CartaIdentita_N_21_data_emissione_documento_passeggero_4,
        setA3_03_TabRig_CartaIdentita_N_21_data_emissione_documento_passeggero_4,
        A3_03_TabRig_CartaIdentita_N_22_data_scadenza_documento_passeggero_4,
        setA3_03_TabRig_CartaIdentita_N_22_data_scadenza_documento_passeggero_4,

        A3_03_TabRig_CartaIdentita_N_02_comune_ufficio_emettitore_passeggero_5,
        setA3_03_TabRig_CartaIdentita_N_02_comune_ufficio_emettitore_passeggero_5,
        A3_03_TabRig_CartaIdentita_N_03_cognome_passeggero_5,
        setA3_03_TabRig_CartaIdentita_N_03_cognome_passeggero_5,
        A3_03_TabRig_CartaIdentita_N_04_nome_passeggero_5,
        setA3_03_TabRig_CartaIdentita_N_04_nome_passeggero_5,
        A3_03_TabRig_CartaIdentita_N_05_data_nascita_passeggero_5,
        setA3_03_TabRig_CartaIdentita_N_05_data_nascita_passeggero_5,
        A3_03_TabRig_CartaIdentita_N_06_luogo_nascita_passeggero_5,
        setA3_03_TabRig_CartaIdentita_N_06_luogo_nascita_passeggero_5,
        A3_03_TabRig_CartaIdentita_N_08_sesso_passeggero_5,
        setA3_03_TabRig_CartaIdentita_N_08_sesso_passeggero_5,
        A3_03_TabRig_CartaIdentita_N_09_statura_passeggero_5,
        setA3_03_TabRig_CartaIdentita_N_09_statura_passeggero_5,
        A3_03_TabRig_CartaIdentita_N_10_occhi_passeggero_5,
        setA3_03_TabRig_CartaIdentita_N_10_occhi_passeggero_5,
        A3_03_TabRig_CartaIdentita_N_11_cittadinanza_passeggero_5,
        setA3_03_TabRig_CartaIdentita_N_11_cittadinanza_passeggero_5,
        A3_03_TabRig_CartaIdentita_N_12_codice_fiscale_passeggero_5,
        setA3_03_TabRig_CartaIdentita_N_12_codice_fiscale_passeggero_5,
        A3_03_TabRig_CartaIdentita_N_13_residenza_passeggero_5,
        setA3_03_TabRig_CartaIdentita_N_13_residenza_passeggero_5,
        A3_03_TabRig_CartaIdentita_N_14_professione_passeggero_5,
        setA3_03_TabRig_CartaIdentita_N_14_professione_passeggero_5,
        A3_03_TabRig_CartaIdentita_N_15_stato_civile_passeggero_5,
        setA3_03_TabRig_CartaIdentita_N_15_stato_civile_passeggero_5,
        A3_03_TabRig_CartaIdentita_N_16_eventuale_non_validita_per_espatrio_passeggero_5,
        setA3_03_TabRig_CartaIdentita_N_16_eventuale_non_validita_per_espatrio_passeggero_5,
        A3_03_TabRig_CartaIdentita_N_17_nome_cognome_padre_nel_caso_minore_passeggero_5,
        setA3_03_TabRig_CartaIdentita_N_17_nome_cognome_padre_nel_caso_minore_passeggero_5,
        A3_03_TabRig_CartaIdentita_N_23_nome_cognome_madre_nel_caso_minore_passeggero_5,
        setA3_03_TabRig_CartaIdentita_N_23_nome_cognome_madre_nel_caso_minore_passeggero_5,
        A3_03_TabRig_CartaIdentita_N_18_estremi_atto_nascita_passeggero_5,
        setA3_03_TabRig_CartaIdentita_N_18_estremi_atto_nascita_passeggero_5,
        A3_03_TabRig_CartaIdentita_N_19_comune_di_iscrizione_AIRE_passeggero_5,
        setA3_03_TabRig_CartaIdentita_N_19_comune_di_iscrizione_AIRE_passeggero_5,
        A3_03_TabRig_CartaIdentita_N_20_numero_documento_passeggero_5,
        setA3_03_TabRig_CartaIdentita_N_20_numero_documento_passeggero_5,
        A3_03_TabRig_CartaIdentita_N_21_data_emissione_documento_passeggero_5,
        setA3_03_TabRig_CartaIdentita_N_21_data_emissione_documento_passeggero_5,
        A3_03_TabRig_CartaIdentita_N_22_data_scadenza_documento_passeggero_5,
        setA3_03_TabRig_CartaIdentita_N_22_data_scadenza_documento_passeggero_5,

        //A3_04_TabRig_Passaporto---------------------------------------------------------------

        A3_04_TabRig_Passaporto_id_record,
        setA3_04_TabRig_Passaporto_id_record,
        A3_04_TabRig_Passaporto_N_02_tipo_conducente,
        setA3_04_TabRig_Passaporto_N_02_tipo_conducente,
        A3_04_TabRig_Passaporto_N_03_codice_paese_conducente,
        setA3_04_TabRig_Passaporto_N_03_codice_paese_conducente,
        A3_04_TabRig_Passaporto_N_04_numero_passaporto_conducente,
        setA3_04_TabRig_Passaporto_N_04_numero_passaporto_conducente,
        A3_04_TabRig_Passaporto_N_05_cognome_conducente,
        setA3_04_TabRig_Passaporto_N_05_cognome_conducente,
        A3_04_TabRig_Passaporto_N_06_nome_conducente,
        setA3_04_TabRig_Passaporto_N_06_nome_conducente,
        A3_04_TabRig_Passaporto_N_07_cittadinanza_conducente,
        setA3_04_TabRig_Passaporto_N_07_cittadinanza_conducente,
        A3_04_TabRig_Passaporto_N_08_data_nascita_conducente,
        setA3_04_TabRig_Passaporto_N_08_data_nascita_conducente,
        A3_04_TabRig_Passaporto_N_09_luogo_nascita_conducente,
        setA3_04_TabRig_Passaporto_N_09_luogo_nascita_conducente,
        A3_04_TabRig_Passaporto_N_10_sesso_conducente,
        setA3_04_TabRig_Passaporto_N_10_sesso_conducente,
        A3_04_TabRig_Passaporto_N_11_data_emissione_documento_conducente,
        setA3_04_TabRig_Passaporto_N_11_data_emissione_documento_conducente,
        A3_04_TabRig_Passaporto_N_12_data_scadenza_documento_conducente,
        setA3_04_TabRig_Passaporto_N_12_data_scadenza_documento_conducente,
        A3_04_TabRig_Passaporto_N_13_autorita_emittente_conducente,
        setA3_04_TabRig_Passaporto_N_13_autorita_emittente_conducente,
        A3_04_TabRig_Passaporto_N_02_tipo_passeggero_1,
        setA3_04_TabRig_Passaporto_N_02_tipo_passeggero_1,
        A3_04_TabRig_Passaporto_N_03_codice_paese_passeggero_1,
        setA3_04_TabRig_Passaporto_N_03_codice_paese_passeggero_1,
        A3_04_TabRig_Passaporto_N_04_numero_passaporto_passeggero_1,
        setA3_04_TabRig_Passaporto_N_04_numero_passaporto_passeggero_1,
        A3_04_TabRig_Passaporto_N_05_cognome_passeggero_1,
        setA3_04_TabRig_Passaporto_N_05_cognome_passeggero_1,
        A3_04_TabRig_Passaporto_N_06_nome_passeggero_1,
        setA3_04_TabRig_Passaporto_N_06_nome_passeggero_1,
        A3_04_TabRig_Passaporto_N_07_cittadinanza_passeggero_1,
        setA3_04_TabRig_Passaporto_N_07_cittadinanza_passeggero_1,
        A3_04_TabRig_Passaporto_N_08_data_nascita_passeggero_1,
        setA3_04_TabRig_Passaporto_N_08_data_nascita_passeggero_1,
        A3_04_TabRig_Passaporto_N_09_luogo_nascita_passeggero_1,
        setA3_04_TabRig_Passaporto_N_09_luogo_nascita_passeggero_1,
        A3_04_TabRig_Passaporto_N_10_sesso_passeggero_1,
        setA3_04_TabRig_Passaporto_N_10_sesso_passeggero_1,
        A3_04_TabRig_Passaporto_N_11_data_emissione_documento_passeggero_1,
        setA3_04_TabRig_Passaporto_N_11_data_emissione_documento_passeggero_1,
        A3_04_TabRig_Passaporto_N_12_data_scadenza_documento_passeggero_1,
        setA3_04_TabRig_Passaporto_N_12_data_scadenza_documento_passeggero_1,
        A3_04_TabRig_Passaporto_N_13_autorita_emittente_passeggero_1,
        setA3_04_TabRig_Passaporto_N_13_autorita_emittente_passeggero_1,
        // Passeggero 2
        A3_04_TabRig_Passaporto_N_02_tipo_passeggero_2,
        setA3_04_TabRig_Passaporto_N_02_tipo_passeggero_2,
        A3_04_TabRig_Passaporto_N_03_codice_paese_passeggero_2,
        setA3_04_TabRig_Passaporto_N_03_codice_paese_passeggero_2,
        A3_04_TabRig_Passaporto_N_04_numero_passaporto_passeggero_2,
        setA3_04_TabRig_Passaporto_N_04_numero_passaporto_passeggero_2,
        A3_04_TabRig_Passaporto_N_05_cognome_passeggero_2,
        setA3_04_TabRig_Passaporto_N_05_cognome_passeggero_2,
        A3_04_TabRig_Passaporto_N_06_nome_passeggero_2,
        setA3_04_TabRig_Passaporto_N_06_nome_passeggero_2,
        A3_04_TabRig_Passaporto_N_07_cittadinanza_passeggero_2,
        setA3_04_TabRig_Passaporto_N_07_cittadinanza_passeggero_2,
        A3_04_TabRig_Passaporto_N_08_data_nascita_passeggero_2,
        setA3_04_TabRig_Passaporto_N_08_data_nascita_passeggero_2,
        A3_04_TabRig_Passaporto_N_09_luogo_nascita_passeggero_2,
        setA3_04_TabRig_Passaporto_N_09_luogo_nascita_passeggero_2,
        A3_04_TabRig_Passaporto_N_10_sesso_passeggero_2,
        setA3_04_TabRig_Passaporto_N_10_sesso_passeggero_2,
        A3_04_TabRig_Passaporto_N_11_data_emissione_documento_passeggero_2,
        setA3_04_TabRig_Passaporto_N_11_data_emissione_documento_passeggero_2,
        A3_04_TabRig_Passaporto_N_12_data_scadenza_documento_passeggero_2,
        setA3_04_TabRig_Passaporto_N_12_data_scadenza_documento_passeggero_2,
        A3_04_TabRig_Passaporto_N_13_autorita_emittente_passeggero_2,
        setA3_04_TabRig_Passaporto_N_13_autorita_emittente_passeggero_2,

        // Passeggero 3
        A3_04_TabRig_Passaporto_N_02_tipo_passeggero_3,
        setA3_04_TabRig_Passaporto_N_02_tipo_passeggero_3,
        A3_04_TabRig_Passaporto_N_03_codice_paese_passeggero_3,
        setA3_04_TabRig_Passaporto_N_03_codice_paese_passeggero_3,
        A3_04_TabRig_Passaporto_N_04_numero_passaporto_passeggero_3,
        setA3_04_TabRig_Passaporto_N_04_numero_passaporto_passeggero_3,
        A3_04_TabRig_Passaporto_N_05_cognome_passeggero_3,
        setA3_04_TabRig_Passaporto_N_05_cognome_passeggero_3,
        A3_04_TabRig_Passaporto_N_06_nome_passeggero_3,
        setA3_04_TabRig_Passaporto_N_06_nome_passeggero_3,
        A3_04_TabRig_Passaporto_N_07_cittadinanza_passeggero_3,
        setA3_04_TabRig_Passaporto_N_07_cittadinanza_passeggero_3,
        A3_04_TabRig_Passaporto_N_08_data_nascita_passeggero_3,
        setA3_04_TabRig_Passaporto_N_08_data_nascita_passeggero_3,
        A3_04_TabRig_Passaporto_N_09_luogo_nascita_passeggero_3,
        setA3_04_TabRig_Passaporto_N_09_luogo_nascita_passeggero_3,
        A3_04_TabRig_Passaporto_N_10_sesso_passeggero_3,
        setA3_04_TabRig_Passaporto_N_10_sesso_passeggero_3,
        A3_04_TabRig_Passaporto_N_11_data_emissione_documento_passeggero_3,
        setA3_04_TabRig_Passaporto_N_11_data_emissione_documento_passeggero_3,
        A3_04_TabRig_Passaporto_N_12_data_scadenza_documento_passeggero_3,
        setA3_04_TabRig_Passaporto_N_12_data_scadenza_documento_passeggero_3,
        A3_04_TabRig_Passaporto_N_13_autorita_emittente_passeggero_3,
        setA3_04_TabRig_Passaporto_N_13_autorita_emittente_passeggero_3,

        // Passeggero 4
        A3_04_TabRig_Passaporto_N_02_tipo_passeggero_4,
        setA3_04_TabRig_Passaporto_N_02_tipo_passeggero_4,
        A3_04_TabRig_Passaporto_N_03_codice_paese_passeggero_4,
        setA3_04_TabRig_Passaporto_N_03_codice_paese_passeggero_4,
        A3_04_TabRig_Passaporto_N_04_numero_passaporto_passeggero_4,
        setA3_04_TabRig_Passaporto_N_04_numero_passaporto_passeggero_4,
        A3_04_TabRig_Passaporto_N_05_cognome_passeggero_4,
        setA3_04_TabRig_Passaporto_N_05_cognome_passeggero_4,
        A3_04_TabRig_Passaporto_N_06_nome_passeggero_4,
        setA3_04_TabRig_Passaporto_N_06_nome_passeggero_4,
        A3_04_TabRig_Passaporto_N_07_cittadinanza_passeggero_4,
        setA3_04_TabRig_Passaporto_N_07_cittadinanza_passeggero_4,
        A3_04_TabRig_Passaporto_N_08_data_nascita_passeggero_4,
        setA3_04_TabRig_Passaporto_N_08_data_nascita_passeggero_4,
        A3_04_TabRig_Passaporto_N_09_luogo_nascita_passeggero_4,
        setA3_04_TabRig_Passaporto_N_09_luogo_nascita_passeggero_4,
        A3_04_TabRig_Passaporto_N_10_sesso_passeggero_4,
        setA3_04_TabRig_Passaporto_N_10_sesso_passeggero_4,
        A3_04_TabRig_Passaporto_N_11_data_emissione_documento_passeggero_4,
        setA3_04_TabRig_Passaporto_N_11_data_emissione_documento_passeggero_4,
        A3_04_TabRig_Passaporto_N_12_data_scadenza_documento_passeggero_4,
        setA3_04_TabRig_Passaporto_N_12_data_scadenza_documento_passeggero_4,
        A3_04_TabRig_Passaporto_N_13_autorita_emittente_passeggero_4,
        setA3_04_TabRig_Passaporto_N_13_autorita_emittente_passeggero_4,

        // Passeggero 5
        A3_04_TabRig_Passaporto_N_02_tipo_passeggero_5,
        setA3_04_TabRig_Passaporto_N_02_tipo_passeggero_5,
        A3_04_TabRig_Passaporto_N_03_codice_paese_passeggero_5,
        setA3_04_TabRig_Passaporto_N_03_codice_paese_passeggero_5,
        A3_04_TabRig_Passaporto_N_04_numero_passaporto_passeggero_5,
        setA3_04_TabRig_Passaporto_N_04_numero_passaporto_passeggero_5,
        A3_04_TabRig_Passaporto_N_05_cognome_passeggero_5,
        setA3_04_TabRig_Passaporto_N_05_cognome_passeggero_5,
        A3_04_TabRig_Passaporto_N_06_nome_passeggero_5,
        setA3_04_TabRig_Passaporto_N_06_nome_passeggero_5,
        A3_04_TabRig_Passaporto_N_07_cittadinanza_passeggero_5,
        setA3_04_TabRig_Passaporto_N_07_cittadinanza_passeggero_5,
        A3_04_TabRig_Passaporto_N_08_data_nascita_passeggero_5,
        setA3_04_TabRig_Passaporto_N_08_data_nascita_passeggero_5,
        A3_04_TabRig_Passaporto_N_09_luogo_nascita_passeggero_5,
        setA3_04_TabRig_Passaporto_N_09_luogo_nascita_passeggero_5,
        A3_04_TabRig_Passaporto_N_10_sesso_passeggero_5,
        setA3_04_TabRig_Passaporto_N_10_sesso_passeggero_5,
        A3_04_TabRig_Passaporto_N_11_data_emissione_documento_passeggero_5,
        setA3_04_TabRig_Passaporto_N_11_data_emissione_documento_passeggero_5,
        A3_04_TabRig_Passaporto_N_12_data_scadenza_documento_passeggero_5,
        setA3_04_TabRig_Passaporto_N_12_data_scadenza_documento_passeggero_5,
        A3_04_TabRig_Passaporto_N_13_autorita_emittente_passeggero_5,
        setA3_04_TabRig_Passaporto_N_13_autorita_emittente_passeggero_5,

        //A3_05_TabRig_CartaCircolazione---------------------------------------------------------------

        A3_05_TabRig_CartaCircolazione_N_01_targa_veicolo,
        setA3_05_TabRig_CartaCircolazione_N_01_targa_veicolo,
        A3_05_TabRig_CartaCircolazione_N_02_data_prima_immatricolazione,
        setA3_05_TabRig_CartaCircolazione_N_02_data_prima_immatricolazione,
        A3_05_TabRig_CartaCircolazione_N_03_nome_proprietario,
        setA3_05_TabRig_CartaCircolazione_N_03_nome_proprietario,
        A3_05_TabRig_CartaCircolazione_N_04_cognome_proprietario,
        setA3_05_TabRig_CartaCircolazione_N_04_cognome_proprietario,
        A3_05_TabRig_CartaCircolazione_N_05_data_nascita,
        setA3_05_TabRig_CartaCircolazione_N_05_data_nascita,
        A3_05_TabRig_CartaCircolazione_N_06_luogo_nascita,
        setA3_05_TabRig_CartaCircolazione_N_06_luogo_nascita,
        A3_05_TabRig_CartaCircolazione_N_07_marca_modello_veicolo,
        setA3_05_TabRig_CartaCircolazione_N_07_marca_modello_veicolo,
        A3_05_TabRig_CartaCircolazione_N_08_numero_telaio,
        setA3_05_TabRig_CartaCircolazione_N_08_numero_telaio,
        A3_05_TabRig_CartaCircolazione_N_09_categorie_veicolo,
        setA3_05_TabRig_CartaCircolazione_N_09_categorie_veicolo,
        A3_05_TabRig_CartaCircolazione_N_10_destinazione_uso,
        setA3_05_TabRig_CartaCircolazione_N_10_destinazione_uso,
        A3_05_TabRig_CartaCircolazione_N_11_emissioni,
        setA3_05_TabRig_CartaCircolazione_N_11_emissioni,
        A3_05_TabRig_CartaCircolazione_N_12_classe_ambientale,
        setA3_05_TabRig_CartaCircolazione_N_12_classe_ambientale,
        A3_05_TabRig_CartaCircolazione_N_13_massa_a_vuoto,
        setA3_05_TabRig_CartaCircolazione_N_13_massa_a_vuoto,
        A3_05_TabRig_CartaCircolazione_N_14_numero_assi,
        setA3_05_TabRig_CartaCircolazione_N_14_numero_assi,
        A3_05_TabRig_CartaCircolazione_N_15_massa_massima_a_carico_tecnicamente_ammissibile,
        setA3_05_TabRig_CartaCircolazione_N_15_massa_massima_a_carico_tecnicamente_ammissibile,
        A3_05_TabRig_CartaCircolazione_N_16_massa_massima_a_rimorchio_ammissibile_con_rimorchio_frenato,
        setA3_05_TabRig_CartaCircolazione_N_16_massa_massima_a_rimorchio_ammissibile_con_rimorchio_frenato,
        A3_05_TabRig_CartaCircolazione_N_17_massa_massima_a_rimorchio_ammissibile_con_rimorchio_non_frenato,
        setA3_05_TabRig_CartaCircolazione_N_17_massa_massima_a_rimorchio_ammissibile_con_rimorchio_non_frenato,
        A3_05_TabRig_CartaCircolazione_N_18_cilindrata,
        setA3_05_TabRig_CartaCircolazione_N_18_cilindrata,
        A3_05_TabRig_CartaCircolazione_N_19_potenza_netta_kW,
        setA3_05_TabRig_CartaCircolazione_N_19_potenza_netta_kW,
        A3_05_TabRig_CartaCircolazione_N_20_tipo_combustibile_alimentazione,
        setA3_05_TabRig_CartaCircolazione_N_20_tipo_combustibile_alimentazione,
        A3_05_TabRig_CartaCircolazione_N_21_numero_id_motore,
        setA3_05_TabRig_CartaCircolazione_N_21_numero_id_motore,
        A3_05_TabRig_CartaCircolazione_N_22_rapporto_potenza_massa_in_kW_solo_motocicli,
        setA3_05_TabRig_CartaCircolazione_N_22_rapporto_potenza_massa_in_kW_solo_motocicli,
        A3_05_TabRig_CartaCircolazione_N_23_numeri_posti_a_sedere,
        setA3_05_TabRig_CartaCircolazione_N_23_numeri_posti_a_sedere,
        A3_05_TabRig_CartaCircolazione_N_24_Emissioni_co2_g_km,
        setA3_05_TabRig_CartaCircolazione_N_24_Emissioni_co2_g_km,
        A3_05_TabRig_CartaCircolazione_id_record,
        setA3_05_TabRig_CartaCircolazione_id_record,
        A3_05_TabRig_CartaCircolazione_N_25_tipo_mezzo,
        setA3_05_TabRig_CartaCircolazione_N_25_tipo_mezzo,

        //A3_06_TabRig_CertificatoAssicurazione---------------------------------------------------------------

        A3_06_TabRig_CertificatoAssicurazione_N_01_nome,
        setA3_06_TabRig_CertificatoAssicurazione_N_01_nome,
        A3_06_TabRig_CertificatoAssicurazione_N_02_cognome,
        setA3_06_TabRig_CertificatoAssicurazione_N_02_cognome,
        A3_06_TabRig_CertificatoAssicurazione_N_03_indirizzo_residenza,
        setA3_06_TabRig_CertificatoAssicurazione_N_03_indirizzo_residenza,
        A3_06_TabRig_CertificatoAssicurazione_N_04_nome_compagnia_assicurativa,
        setA3_06_TabRig_CertificatoAssicurazione_N_04_nome_compagnia_assicurativa,
        A3_06_TabRig_CertificatoAssicurazione_N_05_targa_veicolo,
        setA3_06_TabRig_CertificatoAssicurazione_N_05_targa_veicolo,
        A3_06_TabRig_CertificatoAssicurazione_N_06_numero_polizza,
        setA3_06_TabRig_CertificatoAssicurazione_N_06_numero_polizza,
        A3_06_TabRig_CertificatoAssicurazione_N_07_data_inizio_polizza,
        setA3_06_TabRig_CertificatoAssicurazione_N_07_data_inizio_polizza,
        A3_06_TabRig_CertificatoAssicurazione_N_08_data_fine_polizza,
        setA3_06_TabRig_CertificatoAssicurazione_N_08_data_fine_polizza,
        A3_06_TabRig_CertificatoAssicurazione_N_09_marca_modello_veicolo,
        setA3_06_TabRig_CertificatoAssicurazione_N_09_marca_modello_veicolo,
        A3_06_TabRig_CertificatoAssicurazione_N_10_cilindrata,
        setA3_06_TabRig_CertificatoAssicurazione_N_10_cilindrata,
        A3_06_TabRig_CertificatoAssicurazione_N_11_potenza,
        setA3_06_TabRig_CertificatoAssicurazione_N_11_potenza,
        A3_06_TabRig_CertificatoAssicurazione_N_12_carburante,
        setA3_06_TabRig_CertificatoAssicurazione_N_12_carburante,
        A3_06_TabRig_CertificatoAssicurazione_id_record,
        setA3_06_TabRig_CertificatoAssicurazione_id_record,

        //A4_01_TabRig_Immagini---------------------------------------------------------------

        A4_01_TabRig_Immagini_M_immagine_01,
        setA4_01_TabRig_Immagini_M_immagine_01,
        A4_01_TabRig_Immagini_M_immagine_02,
        setA4_01_TabRig_Immagini_M_immagine_02,
        A4_01_TabRig_Immagini_M_immagine_03,
        setA4_01_TabRig_Immagini_M_immagine_03,
        A4_01_TabRig_Immagini_M_immagine_04,
        setA4_01_TabRig_Immagini_M_immagine_04,
        A4_01_TabRig_Immagini_M_immagine_05,
        setA4_01_TabRig_Immagini_M_immagine_05,
        A4_01_TabRig_Immagini_M_immagine_06,
        setA4_01_TabRig_Immagini_M_immagine_06,
        A4_01_TabRig_Immagini_M_immagine_07,
        setA4_01_TabRig_Immagini_M_immagine_07,
        A4_01_TabRig_Immagini_M_immagine_08,
        setA4_01_TabRig_Immagini_M_immagine_08,
        A4_01_TabRig_Immagini_M_immagine_09,
        setA4_01_TabRig_Immagini_M_immagine_09,
        A4_01_TabRig_Immagini_M_immagine_10,
        setA4_01_TabRig_Immagini_M_immagine_10,
        A4_01_TabRig_Immagini_M_immagine_11,
        setA4_01_TabRig_Immagini_M_immagine_11,
        A4_01_TabRig_Immagini_M_immagine_12,
        setA4_01_TabRig_Immagini_M_immagine_12,
        A4_01_TabRig_Immagini_M_immagine_13,
        setA4_01_TabRig_Immagini_M_immagine_13,
        A4_01_TabRig_Immagini_M_immagine_14,
        setA4_01_TabRig_Immagini_M_immagine_14,
        A4_01_TabRig_Immagini_M_immagine_15,
        setA4_01_TabRig_Immagini_M_immagine_15,
        A4_01_TabRig_Immagini_M_immagine_16,
        setA4_01_TabRig_Immagini_M_immagine_16,
        A4_01_TabRig_Immagini_M_immagine_17,
        setA4_01_TabRig_Immagini_M_immagine_17,
        A4_01_TabRig_Immagini_M_immagine_18,
        setA4_01_TabRig_Immagini_M_immagine_18,
        A4_01_TabRig_Immagini_M_immagine_19,
        setA4_01_TabRig_Immagini_M_immagine_19,
        A4_01_TabRig_Immagini_M_immagine_20,
        setA4_01_TabRig_Immagini_M_immagine_20,
        A4_01_TabRig_Immagini_M_immagine_21,
        setA4_01_TabRig_Immagini_M_immagine_21,
        A4_01_TabRig_Immagini_M_immagine_22,
        setA4_01_TabRig_Immagini_M_immagine_22,
        A4_01_TabRig_Immagini_M_immagine_23,
        setA4_01_TabRig_Immagini_M_immagine_23,
        A4_01_TabRig_Immagini_M_immagine_24,
        setA4_01_TabRig_Immagini_M_immagine_24,
        A4_01_TabRig_Immagini_M_immagine_25,
        setA4_01_TabRig_Immagini_M_immagine_25,
        A4_01_TabRig_Immagini_M_immagine_26,
        setA4_01_TabRig_Immagini_M_immagine_26,
        A4_01_TabRig_Immagini_M_immagine_27,
        setA4_01_TabRig_Immagini_M_immagine_27,
        A4_01_TabRig_Immagini_M_immagine_28,
        setA4_01_TabRig_Immagini_M_immagine_28,
        A4_01_TabRig_Immagini_M_immagine_29,
        setA4_01_TabRig_Immagini_M_immagine_29,
        A4_01_TabRig_Immagini_M_immagine_30,
        setA4_01_TabRig_Immagini_M_immagine_30,
      }}
    >
      {children}
    </AddContext.Provider>
  );
};
