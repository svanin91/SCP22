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
 * QUESTO SCRIPT PERMETTE DI TRASFORMARE LA DATA IN FORMATO STRINGA (PERCHè JSON) IN FILEMAKER IN FORMATO DATA E POI VALORIZZARE IL CAMPO DATA DI TIPO DATA
 * QUINDI LO SCRIPT PRENDERà IL VALORE DEL CAMPO DATA_STRING, LO TRASFORMERà IN DATA E POI LO METTERà NEL CAMPO DATA
 */

const runScriptDataCartaIdentita = async (token) => {
  const url = `https://srv04/fmi/data/v2/databases/SCP22/layouts/A3_03_TabRig_CartaIdentita/script/A3_03_TabRig_CartaIdentita_data`;
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
    await axios(config);
  } catch (error) {
    console.log("errore", error);
    throw error; // Lancia nuovamente l'errore per gestirlo nel chiamante
  }
};

export default runScriptDataCartaIdentita;
