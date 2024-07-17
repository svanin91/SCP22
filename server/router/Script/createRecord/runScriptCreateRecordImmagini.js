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
 * SCRIPT CHE CREA IN UNA TABELLA SPECIFICATA NELL'URL UN NUOVO RECORD, GLI INVIO NELL'URL UN NUMERO RECORD CHE UTILIZZERò NELLO
 * SCRIPT IN A_51a_numero_documento.
 * QUESTA FUNZIONE/SCRIPT VIENE UTILIZZATA QUANDO L'UTENTE creare UN RECORD, FILEMAKER ATTRAVERSO QUESTO SCRIPT CREA UN NUOVO
 * RECORD
 */
const runScriptCreateRecordImmagini = async (token, req, res) => {
  const url = `https://srv04/fmi/data/v2/databases/SCP22/layouts/A4_01_TabRig_Immagini/script/update_records_A4_01_TabRig_Immagini?script.param=${req.body.A_02a_n_record}`;
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
    return res.send(response.data);
  } catch (error) {
    console.log("errore", error);
    throw error; // Lancia nuovamente l'errore per gestirlo nel chiamante
  }
};

export default runScriptCreateRecordImmagini;
