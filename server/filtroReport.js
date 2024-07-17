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

// CHIAMATA PER CERCARE QUANDO FILTRATO PER LA GENERAZIONE REPORT

const filtroReport = async (token, req, res) => {
  const url = `https://srv04/fmi/data/v2/databases/SCP22/layouts/A2_TabRig_informazioni_generali/_find`;

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
    res.send(response.data.response.data);
  } catch (error) {
    res
      .status(500)
      .send({ error: "Si è verificato un errore durante la richiesta" });
    //throw error; // Lancia nuovamente l'errore per gestirlo nel chiamante
  }
};

export default filtroReport;
