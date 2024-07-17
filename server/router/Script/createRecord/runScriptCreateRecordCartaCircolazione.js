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
 * QUESTA FUNZIONE/SCRIPT VIENE UTILIZZATA QUANDO L'UTENTE VUOLE MODIFICARE UN RECORD, FILEMAKER ATTRAVERSO QUESTO SCRIPT CREA UN NUOVO
 * RECORD UGUALE AL PRECEDENTE MODIFICANDO I CAMPI SECONDO QUANTO SPECIFICATO NEL BODY
 */

const runScriptCreateRecordCartaCircolazione = async (token, req, res) => {
  const url = `https://srv04/fmi/data/v2/databases/SCP22/layouts/A3_05_TabRig_CartaCircolazione/script/update_records_A3_05_TabRig_CartaCircolazione?script.param=${req.body.A_02a_n_record}`;
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

export default runScriptCreateRecordCartaCircolazione;
