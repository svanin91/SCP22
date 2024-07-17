/**
 * CHIAMTA PER RECUPERARE TUTTI I RECORD DEL DB
 * ricevo nella funzione provaChiamataPerTuttiRecords il token per parametro e lo utilizzo della
 * chiamata axios con un try catch per gestire le eccezzioni
 */

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
 * QUESTA CHIAMATA PERMETTE, AL CLICK DI UNA RIGA DELLA TABELLA PRINCIPALE, DI ANDARE A RECUPERARE TUTTI I DATI DEL CONTROLLO SELEZIONATO
 */

const getSingleRecord = async (token, tabella, req, res) => {
  let body = req.body;
  let config = {
    method: "POST",
    maxBodyLength: Infinity,
    url: `https://srv04/fmi/data/v2/databases/SCP22/layouts/${tabella}/_find`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: body,
  };
  try {
    const response = await axios(config);
    return response.data.response.data[0];
  } catch (error) {
    console.log(error.message + "della tabella" + tabella);
    throw error; // Rilancia l'errore per gestirlo lato server
  }
};

export default getSingleRecord;
