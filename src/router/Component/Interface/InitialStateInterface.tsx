interface InitialStateInterface {
  //A2_TabRig_informazioni_generali------------------------------------------------------------------
  A2_TabRig_informazioni_generali_D_01_data: Date | undefined;

  A2_TabRig_informazioni_generali_D_02_ora_inizio: string;

  A2_TabRig_informazioni_generali_D_03_ora_fine: string;

  A2_TabRig_informazioni_generali_D_04_numero_giorno_settimana:
    | number
    | undefined;

  A2_TabRig_informazioni_generali_D_05_latitudine: number | undefined;

  A2_TabRig_informazioni_generali_D_06_longitudine: number | undefined;

  A2_TabRig_informazioni_generali_D_07_provincia: string;

  A2_TabRig_informazioni_generali_D_08_comune: string;

  A2_TabRig_informazioni_generali_D_09_codice_avviamento_postale:
    | number
    | undefined;

  A2_TabRig_informazioni_generali_D_10_regione: string;

  A2_TabRig_informazioni_generali_D_11_indirizzo: string;

  A2_TabRig_informazioni_generali_D_12_nome_operatore: string;

  A2_TabRig_informazioni_generali_D_13_cognome_operatore: string;

  A2_TabRig_informazioni_generali_id_record: number | undefined;

  A2_TabRig_informazioni_generali_D_14_stato: string;

  A2_TabRig_informazioni_generali_D_15_targa: string;

  A2_TabRig_informazioni_generali_D_16_nome_conducente: string;

  A2_TabRig_informazioni_generali_D_17_cognome_conducente: string;

  A2_TabRig_informazioni_generali_D_18_nome_proprietario: string;

  A2_TabRig_informazioni_generali_D_19_cognome_proprietario: string;

  A2_TabRig_informazioni_generali_D_20_numero_patente: string;

  A2_TabRig_informazioni_generali_D_21_numero_carta_id: string;

  A2_TabRig_informazioni_generali_D_22_numero_passaporto: string;

  A2_TabRig_informazioni_generali_D_23_marca_modello_veicolo: string;

  A2_TabRig_informazioni_generali_D_24_cognome_nome_operatore: string;

  A2_TabRig_informazioni_generali_D_25_norme_violate: string[];

  A2_TabRig_informazioni_generali_D_27_controlli_eseguiti: string;

  A2_TabRig_informazioni_generali_D_28_patente_ritirata: number;

  A2_TabRig_informazioni_generali_D_29_tipo_mezzo: string;

  A2_TabRig_informazioni_generali_D_30_note: string;

  A2_TabRig_informazioni_generali_D_31_carta_circolazione_ritirata: number;

  A2_TabRig_informazioni_generali_D_32_certificato_assicurazione_ritirato: number;

  A2_TabRig_informazioni_generali_D_33_verifica_revisione: number;

  A2_TabRig_informazioni_generali_D_34_verifica_assicurazione: number;

  A2_TabRig_informazioni_generali_D_35_verifica_scarico: number;

  A2_TabRig_informazioni_generali_D_36_verifica_cinture_sicurezza: number;

  A2_TabRig_informazioni_generali_D_37_verifica_pneumatici: number;

  A2_TabRig_informazioni_generali_D_38_verifica_luci: number;

  //A3_02_TabRig_PatenteGuida---------------------------------------------------------------------

  A3_02_TabRig_PatenteGuida_id_record: number | undefined;

  A3_02_TabRig_PatenteGuida_N_02_cognome_conducente: string;

  A3_02_TabRig_PatenteGuida_N_03_nome_conducente: string;

  A3_02_TabRig_PatenteGuida_N_04_data_nascita_conducente: Date | undefined;

  A3_02_TabRig_PatenteGuida_N_05_luogo_nascita_conducente: string;

  A3_02_TabRig_PatenteGuida_N_06_data_emissione_documento_conducente:
    | Date
    | undefined;

  A3_02_TabRig_PatenteGuida_N_07_data_scadenza_documento_conducente:
    | Date
    | undefined;

  A3_02_TabRig_PatenteGuida_N_08_rilasciata_da_conducente: string;

  A3_02_TabRig_PatenteGuida_N_09_numero_documento_conducente: string;

  A3_02_TabRig_PatenteGuida_N_10_categoria_patente_conducente: string[];

  A3_02_TabRig_PatenteGuida_N_11_annotazioni_restrizioni_conducente: string;

  //A3_03_TabRig_CartaIdentita---------------------------------------------------------------

  A3_03_TabRig_CartaIdentita_id_record: number | undefined;

  A3_03_TabRig_CartaIdentita_N_02_comune_ufficio_emettitore_conducente: string;

  A3_03_TabRig_CartaIdentita_N_03_cognome_conducente: string;

  A3_03_TabRig_CartaIdentita_N_04_nome_conducente: string;

  A3_03_TabRig_CartaIdentita_N_05_data_nascita_conducente: Date | undefined;

  A3_03_TabRig_CartaIdentita_N_06_luogo_nascita_conducente: string;

  A3_03_TabRig_CartaIdentita_N_08_sesso_conducente: string;

  A3_03_TabRig_CartaIdentita_N_09_statura_conducente: string;

  A3_03_TabRig_CartaIdentita_N_10_occhi_conducente: string;

  A3_03_TabRig_CartaIdentita_N_11_cittadinanza_conducente: string;

  A3_03_TabRig_CartaIdentita_N_12_codice_fiscale_conducente: string;

  A3_03_TabRig_CartaIdentita_N_13_residenza_conducente: string;

  A3_03_TabRig_CartaIdentita_N_14_professione_conducente: string;

  A3_03_TabRig_CartaIdentita_N_15_stato_civile_conducente: string;

  A3_03_TabRig_CartaIdentita_N_16_eventuale_non_validita_per_espatrio_conducente: string;

  A3_03_TabRig_CartaIdentita_N_17_nome_cognome_padre_nel_caso_minore_conducente: string;

  A3_03_TabRig_CartaIdentita_N_23_nome_cognome_madre_nel_caso_minore_conducente: string;

  A3_03_TabRig_CartaIdentita_N_18_estremi_atto_nascita_conducente: string;

  A3_03_TabRig_CartaIdentita_N_19_comune_di_iscrizione_AIRE_conducente: string;

  A3_03_TabRig_CartaIdentita_N_20_numero_documento_conducente: string;

  A3_03_TabRig_CartaIdentita_N_21_data_emissione_documento_conducente:
    | Date
    | undefined;

  A3_03_TabRig_CartaIdentita_N_22_data_scadenza_documento_conducente:
    | Date
    | undefined;

  //A3_04_TabRig_Passaporto---------------------------------------------------------------

  A3_04_TabRig_Passaporto_id_record: number | undefined;

  A3_04_TabRig_Passaporto_N_02_tipo_conducente: string;

  A3_04_TabRig_Passaporto_N_03_codice_paese_conducente: string;

  A3_04_TabRig_Passaporto_N_04_numero_passaporto_conducente: string;

  A3_04_TabRig_Passaporto_N_05_cognome_conducente: string;

  A3_04_TabRig_Passaporto_N_06_nome_conducente: string;

  A3_04_TabRig_Passaporto_N_07_cittadinanza_conducente: string;

  A3_04_TabRig_Passaporto_N_08_data_nascita_conducente: Date | undefined;

  A3_04_TabRig_Passaporto_N_09_luogo_nascita_conducente: string;

  A3_04_TabRig_Passaporto_N_10_sesso_conducente: string;

  A3_04_TabRig_Passaporto_N_11_data_emissione_documento_conducente:
    | Date
    | undefined;

  A3_04_TabRig_Passaporto_N_12_data_scadenza_documento_conducente:
    | Date
    | undefined;

  A3_04_TabRig_Passaporto_N_13_autorita_emittente_conducente: string;

  //A3_05_TabRig_CartaCircolazione---------------------------------------------------------------

  A3_05_TabRig_CartaCircolazione_N_01_targa_veicolo: string;

  A3_05_TabRig_CartaCircolazione_N_02_data_prima_immatricolazione:
    | Date
    | undefined;

  A3_05_TabRig_CartaCircolazione_N_03_nome_proprietario: string;

  A3_05_TabRig_CartaCircolazione_N_04_cognome_proprietario: string;

  A3_05_TabRig_CartaCircolazione_N_05_data_nascita: Date | undefined;

  A3_05_TabRig_CartaCircolazione_N_06_luogo_nascita: string;

  A3_05_TabRig_CartaCircolazione_N_07_marca_modello_veicolo: string;

  A3_05_TabRig_CartaCircolazione_N_08_numero_telaio: string;

  A3_05_TabRig_CartaCircolazione_N_09_categorie_veicolo: string;

  A3_05_TabRig_CartaCircolazione_N_10_destinazione_uso: string;

  A3_05_TabRig_CartaCircolazione_N_11_emissioni: string;

  A3_05_TabRig_CartaCircolazione_N_12_classe_ambientale: string;

  A3_05_TabRig_CartaCircolazione_N_13_massa_a_vuoto: string;

  A3_05_TabRig_CartaCircolazione_N_14_numero_assi: string;

  A3_05_TabRig_CartaCircolazione_N_15_massa_massima_a_carico_tecnicamente_ammissibile: string;

  A3_05_TabRig_CartaCircolazione_N_16_massa_massima_a_rimorchio_ammissibile_con_rimorchio_frenato: string;

  A3_05_TabRig_CartaCircolazione_N_17_massa_massima_a_rimorchio_ammissibile_con_rimorchio_non_frenato: string;

  A3_05_TabRig_CartaCircolazione_N_18_cilindrata: string;

  A3_05_TabRig_CartaCircolazione_N_19_potenza_netta_kW: string;

  A3_05_TabRig_CartaCircolazione_N_20_tipo_combustibile_alimentazione: string;

  A3_05_TabRig_CartaCircolazione_N_21_numero_id_motore: string;

  A3_05_TabRig_CartaCircolazione_N_22_rapporto_potenza_massa_in_kW_solo_motocicli: string;

  A3_05_TabRig_CartaCircolazione_N_23_numeri_posti_a_sedere: number | undefined;

  A3_05_TabRig_CartaCircolazione_id_record: number | undefined;

  A3_05_TabRig_CartaCircolazione_N_24_Emissioni_co2_g_km: number | undefined;

  A3_05_TabRig_CartaCircolazione_N_25_tipo_mezzo: string;

  //A3_06_TabRig_CertificatoAssicurazione---------------------------------------------------------------

  A3_06_TabRig_CertificatoAssicurazione_N_01_nome: string;

  A3_06_TabRig_CertificatoAssicurazione_N_02_cognome: string;

  A3_06_TabRig_CertificatoAssicurazione_N_03_indirizzo_residenza: string;

  A3_06_TabRig_CertificatoAssicurazione_N_04_nome_compagnia_assicurativa: string;

  A3_06_TabRig_CertificatoAssicurazione_N_05_targa_veicolo: string;

  A3_06_TabRig_CertificatoAssicurazione_N_06_numero_polizza: string;

  A3_06_TabRig_CertificatoAssicurazione_N_07_data_inizio_polizza:
    | Date
    | undefined;

  A3_06_TabRig_CertificatoAssicurazione_N_08_data_fine_polizza:
    | Date
    | undefined;

  A3_06_TabRig_CertificatoAssicurazione_N_09_marca_modello_veicolo: string;

  A3_06_TabRig_CertificatoAssicurazione_N_10_cilindrata: string;

  A3_06_TabRig_CertificatoAssicurazione_N_11_potenza: string;

  A3_06_TabRig_CertificatoAssicurazione_N_12_carburante: string;

  A3_06_TabRig_CertificatoAssicurazione_id_record: number | undefined;

  //A4_01_TabRig_Immagini---------------------------------------------------------------

  A4_01_TabRig_Immagini_M_immagine_01: string;
  A4_01_TabRig_Immagini_M_immagine_02: string;
  A4_01_TabRig_Immagini_M_immagine_03: string;
  A4_01_TabRig_Immagini_M_immagine_04: string;
  A4_01_TabRig_Immagini_M_immagine_05: string;
  A4_01_TabRig_Immagini_M_immagine_06: string;
  A4_01_TabRig_Immagini_M_immagine_07: string;
  A4_01_TabRig_Immagini_M_immagine_08: string;
  A4_01_TabRig_Immagini_M_immagine_09: string;
  A4_01_TabRig_Immagini_M_immagine_10: string;
  A4_01_TabRig_Immagini_M_immagine_11: string;
  A4_01_TabRig_Immagini_M_immagine_12: string;
  A4_01_TabRig_Immagini_M_immagine_13: string;
  A4_01_TabRig_Immagini_M_immagine_14: string;
  A4_01_TabRig_Immagini_M_immagine_15: string;
  A4_01_TabRig_Immagini_M_immagine_16: string;
  A4_01_TabRig_Immagini_M_immagine_17: string;
  A4_01_TabRig_Immagini_M_immagine_18: string;
  A4_01_TabRig_Immagini_M_immagine_19: string;
  A4_01_TabRig_Immagini_M_immagine_20: string;
  A4_01_TabRig_Immagini_M_immagine_21: string;
  A4_01_TabRig_Immagini_M_immagine_22: string;
  A4_01_TabRig_Immagini_M_immagine_23: string;
  A4_01_TabRig_Immagini_M_immagine_24: string;
  A4_01_TabRig_Immagini_M_immagine_25: string;
  A4_01_TabRig_Immagini_M_immagine_26: string;
  A4_01_TabRig_Immagini_M_immagine_27: string;
  A4_01_TabRig_Immagini_M_immagine_28: string;
  A4_01_TabRig_Immagini_M_immagine_29: string;
  A4_01_TabRig_Immagini_M_immagine_30: string;
}
export default InitialStateInterface;
