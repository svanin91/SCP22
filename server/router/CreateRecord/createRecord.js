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

/**
 * QUESTA CHIAMATA AGGIUNGE AD UN RECORD ESISTENTE I VALORI DELL OGGETTO BODY. PER SPECIFICARE IL RECORD USO IL SUO ID UNIVOCO FILEMAKER NELL URL
 */

const url =
  "https://srv04/fmi/data/v2/databases/SCP22/layouts/A1_TabPri_SessioneControllo/records";

const nuovoControllo = async (token, req, res) => {
  let config = {
    method: "POST",
    maxBodyLength: Infinity,
    url: url,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: req.body,
  };

  try {
    const response = await axios(config);
    res.send(response.data.response.recordId);
  } catch (error) {
    if (error.response) {
      console.log("Stato della risposta nuovo:", error.response.status);
      console.log("Dati della risposta nuovo:", error.response.data);
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
export default nuovoControllo;
