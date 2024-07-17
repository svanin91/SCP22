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
 * QUESTO SCRIPT VIENE UTILIZZATO QUANDO UN UTENTE MODIFICA UN DOCUMENTO ESISTENTE
 * QUESTO SCRIPT RACCOGLIE L'ID DEL CONTROLLO (ES. SCP22.000168)
 * LO CERCA NELLA TABELLA
 * LO DULPICA
 * DA AL RECORD VECCHIO LO STATUS DI OBSOLETO
 * DA AL NUOVO RECORD LO STATO DI REVISIONE +1
 * RESTITUISCE L'ID FILMAKER DEL RCORD PER POTER POI CON UN ALTRA CHIAMATA INVIARE IL BODY CON I VALORI DEI CAMPI
 */

const runScriptUpdateRecordCartaCircolazione = async (token, req, res) => {
  const url = `https://srv04/fmi/data/v2/databases/SCP22/layouts/A3_05_TabRig_CartaCircolazione/script/A3_05_TabRig_CartaCircolazione_corrente_obsoleto?script.param=${req.body.A_02a_n_record}`;
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

export default runScriptUpdateRecordCartaCircolazione;
