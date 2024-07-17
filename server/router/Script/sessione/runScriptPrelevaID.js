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
 * QUESTO SCRIPT PERMETTE DI PRELEVARE L'ID CREATO DALLA TABELLA A1_TabPri_SessioneControllo E DI POTERLO POI UTILIZZARE IN TUTTE LE ALTRE TABELLE PER
 * IDENTIFICARE IL CONTROLLO (ES. SCP22.000110)
 */

const runScriptPrelevaID = async (token, req, res) => {
  const url = `https://srv04/fmi/data/v2/databases/SCP22/layouts/A1_TabPri_SessioneControllo/script/A1_TabPri_PrelevaID_SessioneControllo`;
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

export default runScriptPrelevaID;
