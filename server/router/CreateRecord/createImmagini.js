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

const createImmagini = async (token, req, res) => {
  // Funzione per comprimere una stringa base64 utilizzando zlib

  const url = `https://srv04/fmi/data/v2/databases/SCP22/layouts/A4_01_TabRig_Immagini/records/${req.body.id_record_Immagini}`;

  let config = {
    method: "PATCH",
    maxBodyLength: Infinity,
    url: url,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: req.body.data,
  };

  try {
    const response = await axios(config);
    res.send(response.data);
  } catch (error) {
    if (error.response) {
      console.log("Stato della risposta immagini:", error.response.status);
      console.log("Dati della risposta immagini:", error.response.data);
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
export default createImmagini;
