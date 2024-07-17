/**
 * CHIAMTA PER RECUPERARE TUTTI I RECORD DELLA TABELLA
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
let data = JSON.stringify({});
import https from "https";
import sslRootCas from "ssl-root-cas";
https.globalAgent.options.ca = sslRootCas.create();

/**
 *  QUESTA CHIAMATA PRELEVA I RECORD DAL DB (TABELLA A2_TabRig_informazioni_generali) PER CONVENZIONE DI FILEMAKER, LA RISPOSTA NON PUò AVERE PIU DI 100 RECORD
 */

const getRecordsTable = async (token, res) => {
  let config = {
    method: "GET",
    maxBodyLength: Infinity,
    url: `https://srv04/fmi/data/v2/databases/SCP22/layouts/A2_TabRig_informazioni_generali/records`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: {},
  };
  try {
    const response = await axios(config);
    res.send(response.data.response.data);
  } catch (error) {
    console.log(error.response.data);
    throw error; // Rilancia l'errore per gestirlo lato server
  }
};
export default getRecordsTable;
