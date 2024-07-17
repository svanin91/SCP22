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

const createCertificatoAssicurazione = async (token, req, res) => {
  const url = `https://srv04/fmi/data/v2/databases/SCP22/layouts/A3_06_TabRig_CertificatoAssicurazione/records/${req.body.id_record_certificatoAssicurazione}`;

  if (
    req.body.dataA3_06_TabRig_CertificatoAssicurazione.fieldData
      .N_07_data_inizio_polizza
  ) {
    const N_07_data_inizio_polizza = moment(
      req.body.dataA3_06_TabRig_CertificatoAssicurazione.fieldData
        .N_07_data_inizio_polizza
    ).format("DD/MM/YYYY");
    req.body.dataA3_06_TabRig_CertificatoAssicurazione.fieldData.N_07_data_inizio_polizza =
      N_07_data_inizio_polizza;
  }

  if (
    req.body.dataA3_06_TabRig_CertificatoAssicurazione.fieldData
      .N_08_data_fine_polizza
  ) {
    const N_08_data_fine_polizza = moment(
      req.body.dataA3_06_TabRig_CertificatoAssicurazione.fieldData
        .N_08_data_fine_polizza
    ).format("DD/MM/YYYY");
    req.body.dataA3_06_TabRig_CertificatoAssicurazione.fieldData.N_08_data_fine_polizza =
      N_08_data_fine_polizza;
  }

  let config = {
    method: "PATCH",
    maxBodyLength: Infinity,
    url: url,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: req.body.dataA3_06_TabRig_CertificatoAssicurazione,
  };

  try {
    const response = await axios(config);
    res.send(response.data);
  } catch (error) {
    if (error.response) {
      console.log(
        "Stato della risposta certificazione assicurativa:",
        error.response.status
      );
      console.log(
        "Dati della risposta certificazione assicurativa:",
        error.response.data
      );
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
export default createCertificatoAssicurazione;
