import express from "express";
const app = express();
import cors from "cors";
app.use(cors());
import bodyParser from "body-parser";
const { urlencoded, json } = bodyParser;
app.use(urlencoded({ extended: true }));
app.use(json());
import axios from "axios";
import https from "https";
import sslRootCas from "ssl-root-cas";
https.globalAgent.options.ca = sslRootCas.create();
import moment from "moment";

/**
 * QUESTA CHIAMATA AGGIUNGE AD UN RECORD ESISTENTE I VALORI DELL OGGETTO BODY. PER SPECIFICARE IL RECORD USO IL SUO ID UNIVOCO FILEMAKER NELL URL
 * IL PACCHETTO MOMENT SERVE PER MODIFICARE IL FORMATO DI VISUALIZZAZIONE DELLA DATA
 */

const createPatente = async (token, req, res) => {
  const url = `https://srv04/fmi/data/v2/databases/SCP22/layouts/A3_02_TabRig_PatenteGuida/records/${req.body.id_record_patente}`;

  // con le condizioni di seguito trasformo la data in una stringa gg/mm/aaaa

  if (
    req.body.dataA3_02_TabRig_PatenteGuida.fieldData
      .N_04_data_nascita_conducente
  ) {
    const N_04_data_nascita_conducente = moment(
      req.body.dataA3_02_TabRig_PatenteGuida.fieldData
        .N_04_data_nascita_conducente
    ).format("DD/MM/YYYY");
    req.body.dataA3_02_TabRig_PatenteGuida.fieldData.N_04_data_nascita_conducente =
      N_04_data_nascita_conducente;
  }
  if (
    req.body.dataA3_02_TabRig_PatenteGuida.fieldData
      .N_04_data_nascita_passeggero_1
  ) {
    const N_04_data_nascita_passeggero_1 = moment(
      req.body.dataA3_02_TabRig_PatenteGuida.fieldData
        .N_04_data_nascita_passeggero_1
    ).format("DD/MM/YYYY");
    req.body.dataA3_02_TabRig_PatenteGuida.fieldData.N_04_data_nascita_passeggero_1 =
      N_04_data_nascita_passeggero_1;
  }
  if (
    req.body.dataA3_02_TabRig_PatenteGuida.fieldData
      .N_04_data_nascita_passeggero_2
  ) {
    const N_04_data_nascita_passeggero_2 = moment(
      req.body.dataA3_02_TabRig_PatenteGuida.fieldData
        .N_04_data_nascita_passeggero_2
    ).format("DD/MM/YYYY");
    req.body.dataA3_02_TabRig_PatenteGuida.fieldData.N_04_data_nascita_passeggero_2 =
      N_04_data_nascita_passeggero_2;
  }

  if (
    req.body.dataA3_02_TabRig_PatenteGuida.fieldData
      .N_04_data_nascita_passeggero_3
  ) {
    const N_04_data_nascita_passeggero_3 = moment(
      req.body.dataA3_02_TabRig_PatenteGuida.fieldData
        .N_04_data_nascita_passeggero_3
    ).format("DD/MM/YYYY");
    req.body.dataA3_02_TabRig_PatenteGuida.fieldData.N_04_data_nascita_passeggero_3 =
      N_04_data_nascita_passeggero_3;
  }
  if (
    req.body.dataA3_02_TabRig_PatenteGuida.fieldData
      .N_04_data_nascita_passeggero_4
  ) {
    const N_04_data_nascita_passeggero_4 = moment(
      req.body.dataA3_02_TabRig_PatenteGuida.fieldData
        .N_04_data_nascita_passeggero_4
    ).format("DD/MM/YYYY");
    req.body.dataA3_02_TabRig_PatenteGuida.fieldData.N_04_data_nascita_passeggero_4 =
      N_04_data_nascita_passeggero_4;
  }
  if (
    req.body.dataA3_02_TabRig_PatenteGuida.fieldData
      .N_04_data_nascita_passeggero_5
  ) {
    const N_04_data_nascita_passeggero_5 = moment(
      req.body.dataA3_02_TabRig_PatenteGuida.fieldData
        .N_04_data_nascita_passeggero_5
    ).format("DD/MM/YYYY");
    req.body.dataA3_02_TabRig_PatenteGuida.fieldData.N_04_data_nascita_passeggero_5 =
      N_04_data_nascita_passeggero_5;
  }

  //---------------------------------------
  if (
    req.body.dataA3_02_TabRig_PatenteGuida.fieldData
      .N_06_data_emissione_documento_conducente
  ) {
    const N_06_data_emissione_documento_conducente = moment(
      req.body.dataA3_02_TabRig_PatenteGuida.fieldData
        .N_06_data_emissione_documento_conducente
    ).format("DD/MM/YYYY");
    req.body.dataA3_02_TabRig_PatenteGuida.fieldData.N_06_data_emissione_documento_conducente =
      N_06_data_emissione_documento_conducente;
  }
  if (
    req.body.dataA3_02_TabRig_PatenteGuida.fieldData
      .N_06_data_emissione_documento_passeggero_1
  ) {
    const N_06_data_emissione_documento_passeggero_1 = moment(
      req.body.dataA3_02_TabRig_PatenteGuida.fieldData
        .N_06_data_emissione_documento_passeggero_1
    ).format("DD/MM/YYYY");
    req.body.dataA3_02_TabRig_PatenteGuida.fieldData.N_06_data_emissione_documento_passeggero_1 =
      N_06_data_emissione_documento_passeggero_1;
  }

  if (
    req.body.dataA3_02_TabRig_PatenteGuida.fieldData
      .N_06_data_emissione_documento_passeggero_2
  ) {
    const N_06_data_emissione_documento_passeggero_2 = moment(
      req.body.dataA3_02_TabRig_PatenteGuida.fieldData
        .N_06_data_emissione_documento_passeggero_2
    ).format("DD/MM/YYYY");
    req.body.dataA3_02_TabRig_PatenteGuida.fieldData.N_06_data_emissione_documento_passeggero_2 =
      N_06_data_emissione_documento_passeggero_2;
  }
  if (
    req.body.dataA3_02_TabRig_PatenteGuida.fieldData
      .N_06_data_emissione_documento_passeggero_3
  ) {
    const N_06_data_emissione_documento_passeggero_3 = moment(
      req.body.dataA3_02_TabRig_PatenteGuida.fieldData
        .N_06_data_emissione_documento_passeggero_3
    ).format("DD/MM/YYYY");
    req.body.dataA3_02_TabRig_PatenteGuida.fieldData.N_06_data_emissione_documento_passeggero_3 =
      N_06_data_emissione_documento_passeggero_3;
  }
  if (
    req.body.dataA3_02_TabRig_PatenteGuida.fieldData
      .N_06_data_emissione_documento_passeggero_4
  ) {
    const N_06_data_emissione_documento_passeggero_4 = moment(
      req.body.dataA3_02_TabRig_PatenteGuida.fieldData
        .N_06_data_emissione_documento_passeggero_4
    ).format("DD/MM/YYYY");
    req.body.dataA3_02_TabRig_PatenteGuida.fieldData.N_06_data_emissione_documento_passeggero_4 =
      N_06_data_emissione_documento_passeggero_4;
  }
  if (
    req.body.dataA3_02_TabRig_PatenteGuida.fieldData
      .N_06_data_emissione_documento_passeggero_5
  ) {
    const N_06_data_emissione_documento_passeggero_5 = moment(
      req.body.dataA3_02_TabRig_PatenteGuida.fieldData
        .N_06_data_emissione_documento_passeggero_5
    ).format("DD/MM/YYYY");
    req.body.dataA3_02_TabRig_PatenteGuida.fieldData.N_06_data_emissione_documento_passeggero_5 =
      N_06_data_emissione_documento_passeggero_5;
  }

  //--------------------------------

  if (
    req.body.dataA3_02_TabRig_PatenteGuida.fieldData
      .N_07_data_scadenza_documento_conducente
  ) {
    const N_07_data_scadenza_documento_conducente = moment(
      req.body.dataA3_02_TabRig_PatenteGuida.fieldData
        .N_07_data_scadenza_documento_conducente
    ).format("DD/MM/YYYY");
    req.body.dataA3_02_TabRig_PatenteGuida.fieldData.N_07_data_scadenza_documento_conducente =
      N_07_data_scadenza_documento_conducente;
  }
  if (
    req.body.dataA3_02_TabRig_PatenteGuida.fieldData
      .N_07_data_scadenza_documento_passeggero_1
  ) {
    const N_07_data_scadenza_documento_passeggero_1 = moment(
      req.body.dataA3_02_TabRig_PatenteGuida.fieldData
        .N_07_data_scadenza_documento_passeggero_1
    ).format("DD/MM/YYYY");
    req.body.dataA3_02_TabRig_PatenteGuida.fieldData.N_07_data_scadenza_documento_passeggero_1 =
      N_07_data_scadenza_documento_passeggero_1;
  }
  if (
    req.body.dataA3_02_TabRig_PatenteGuida.fieldData
      .N_07_data_scadenza_documento_passeggero_2
  ) {
    const N_07_data_scadenza_documento_passeggero_2 = moment(
      req.body.dataA3_02_TabRig_PatenteGuida.fieldData
        .N_07_data_scadenza_documento_passeggero_2
    ).format("DD/MM/YYYY");
    req.body.dataA3_02_TabRig_PatenteGuida.fieldData.N_07_data_scadenza_documento_passeggero_2 =
      N_07_data_scadenza_documento_passeggero_2;
  }
  if (
    req.body.dataA3_02_TabRig_PatenteGuida.fieldData
      .N_07_data_scadenza_documento_passeggero_3
  ) {
    const N_07_data_scadenza_documento_passeggero_3 = moment(
      req.body.dataA3_02_TabRig_PatenteGuida.fieldData
        .N_07_data_scadenza_documento_passeggero_3
    ).format("DD/MM/YYYY");
    req.body.dataA3_02_TabRig_PatenteGuida.fieldData.N_07_data_scadenza_documento_passeggero_3 =
      N_07_data_scadenza_documento_passeggero_3;
  }
  if (
    req.body.dataA3_02_TabRig_PatenteGuida.fieldData
      .N_07_data_scadenza_documento_passeggero_4
  ) {
    const N_07_data_scadenza_documento_passeggero_4 = moment(
      req.body.dataA3_02_TabRig_PatenteGuida.fieldData
        .N_07_data_scadenza_documento_passeggero_4
    ).format("DD/MM/YYYY");
    req.body.dataA3_02_TabRig_PatenteGuida.fieldData.N_07_data_scadenza_documento_passeggero_4 =
      N_07_data_scadenza_documento_passeggero_4;
  }
  if (
    req.body.dataA3_02_TabRig_PatenteGuida.fieldData
      .N_07_data_scadenza_documento_passeggero_5
  ) {
    const N_07_data_scadenza_documento_passeggero_5 = moment(
      req.body.dataA3_02_TabRig_PatenteGuida.fieldData
        .N_07_data_scadenza_documento_passeggero_5
    ).format("DD/MM/YYYY");
    req.body.dataA3_02_TabRig_PatenteGuida.fieldData.N_07_data_scadenza_documento_passeggero_5 =
      N_07_data_scadenza_documento_passeggero_5;
  }

  let config = {
    method: "PATCH",
    maxBodyLength: Infinity,
    url: url,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: req.body.dataA3_02_TabRig_PatenteGuida,
  };

  try {
    const response = await axios(config);
    res.send(response.data);
  } catch (error) {
    if (error.response) {
      console.log("Stato della risposta patente:", error.response.status);
      console.log("Dati della risposta patente:", error.response.data);
      res.send(error);
    } else if (error.request) {
      console.log("Richiesta inviata ma nessuna risposta ricevuta");
      res.send(error);
    } else {
      console.log("Errore durante la richiesta:", error.message);
      res.send(error);
    }
  }
};
export default createPatente;
