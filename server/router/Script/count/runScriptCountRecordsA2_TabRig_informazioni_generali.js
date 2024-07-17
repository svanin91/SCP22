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
 *  QUESTO SCRIPT PERMETTE DI RICEVERE COME RISPOSTA IL NUMERO DI RECORD PRESENTI NELLA TABELLA A3_01_TabRig_DatiTabella,
 *  CI è UTILE PER LA FUNZIONE CHE MI PERMETTE DI CARICARE ULTERIORI RECORD QUANDO SCROLLO LA TABELLA
 */

const runScriptCountRecordsA2_TabRig_informazioni_generali = async (
  token,
  req,
  res
) => {
  const url = `https://srv04/fmi/data/v2/databases/SCP22/layouts/A2_TabRig_informazioni_generali/script/A2_TabRig_informazioni_generali_count_records`;
  let config = {
    method: "GET",
    maxBodyLength: Infinity,
    url: url,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: {},
  };

  try {
    const response = await axios(config);
    return res.send(response.data.response.scriptResult);
  } catch (error) {
    console.log("errore", error);
    throw error; // Lancia nuovamente l'errore per gestirlo nel chiamante
  }
};

export default runScriptCountRecordsA2_TabRig_informazioni_generali;
