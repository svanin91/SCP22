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

const createInformazioniGenerali = async (token, req, res) => {
  const url = `https://srv04/fmi/data/v2/databases/SCP22/layouts/A2_TabRig_informazioni_generali/records/${req.body.id_record_informazioni_generali}`;
  if (req.body.dataA2_TabRig_informazioni_generali.fieldData.D_01_data) {
    const D_01_data = moment(
      req.body.dataA2_TabRig_informazioni_generali.fieldData.D_01_data
    ).format("DD/MM/YYYY");
    req.body.dataA2_TabRig_informazioni_generali.fieldData.D_01_data =
      D_01_data;
  }

  let config = {
    method: "PATCH",
    maxBodyLength: Infinity,
    url: url,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: req.body.dataA2_TabRig_informazioni_generali,
  };

  try {
    const response = await axios(config);
    res.send(response.data);
  } catch (error) {
    if (error.response) {
      console.log("Stato della risposta info generali:", error.response.status);
      console.log("Dati della risposta info generali:", error.response.data);
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
export default createInformazioniGenerali;
