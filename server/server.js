import express from "express";
const app = express();
import cors from "cors";
app.use(cors());
import bodyParser from "body-parser";
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
app.use(express.json({ limit: "200mb" }));
import axios from "axios";
var data = JSON.stringify({});
import https from "https";
import sslRootCas from "ssl-root-cas";
https.globalAgent.options.ca = sslRootCas.create();
// eslint-disable-next-line no-undef
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
import multer from "multer";

import runScriptUpdateDataOraLastLogin from "./router/Auth/runScriptUpdateDataOraLastLogin.js";
import nuovoControllo from "./router/CreateRecord/createRecord.js";

import runScriptPrelevaID from "./router/Script/sessione/runScriptPrelevaID.js";
import runScriptCreateRecordInformazioniGenerali from "./router/Script/createRecord/runScriptCreateRecordInformazioniGenerali.js";
import runScriptCreateRecordPatente from "./router/Script/createRecord/runScriptCreateRecordPatente.js";
import runScriptCreateRecordCartaIdentita from "./router/Script/createRecord/runScriptCreateRecordCartaIdentita.js";
import runScriptCreateRecordPassaporto from "./router/Script/createRecord/runScriptCreateRecordPassaporto.js";
import runScriptCreateRecordCartaCircolazione from "./router/Script/createRecord/runScriptCreateRecordCartaCircolazione.js";
import runScriptCreateRecordCertificatoAssicurazione from "./router/Script/createRecord/runScriptCreateRecordCertificatoAssicurazione.js";

import runScriptCountRecordsA2_TabRig_informazioni_generali from "./router/Script/count/runScriptCountRecordsA2_TabRig_informazioni_generali.js";

import runScriptUpdateRecordCartaCircolazione from "./router/Script/updateRecord/runScriptUpdateRecordCartaCircolazione.js";
import runScriptUpdateRecordCartaIdentita from "./router/Script/updateRecord/runScriptUpdateRecordCartaIdentita.js";
import runScriptUpdateRecordCertificatoAssicurazione from "./router/Script/updateRecord/runScriptUpdateRecordCertificatoAssicurazione.js";
import runScriptUpdateRecordInformazioniGenerali from "./router/Script/updateRecord/runScriptUpdateRecordInformaizoniGenerali.js";
import runScriptUpdateRecordPatente from "./router/Script/updateRecord/runScriptUpdateRecordPatente.js";
import runScriptUpdateRecordPassaporto from "./router/Script/updateRecord/runScriptUpdateRecordPassaporto.js";

import getSingleRecord from "./router/GetRecords/getSingleRecord.js";
import getRecordsTable from "./router/GetRecords/getRecordsTable.js";
import getOtherRecordsTable from "./router/GetRecords/getOtherRecordsTable.js";
import findRecords from "./router/GetRecords/findRecords.js";

import createInformazioniGenerali from "./router/CreateRecord/createInformazioniGenerali.js";
import createPatente from "./router/CreateRecord/createPatente.js";
import createCartaIdentita from "./router/CreateRecord/createCartaIdentita.js";
import createPassaporto from "./router/CreateRecord/createPassaporto.js";
import createCartaCircolazione from "./router/CreateRecord/createCartaCircolazione.js";
import createCertificatoAssicurazione from "./router/CreateRecord/createCertificatoAssicurazione.js";

import filtroReport from "./filtroReport.js";
import invia_screenshot_email from "./router/screenShotEmail.js";

var tokenSCP22 = "no tokenSCP22";
var tokenTAW91 = "no token";
const urlConnectionSCP22 = `https://srv04/fmi/data/v2/databases/SCP22/sessions`;
const urlConnectionTAW91 = `https://srv04/fmi/data/v2/databases/TAW91/sessions`;
const UtenteAPI = "dataApi:dataApi";
const UtenteTAW91 = "svanin:svanin";

/**
 * importazioni chiamate
 */
import Login from "./router/Auth/auth.js";
import logLogoutClick from "./router/Auth/logout.js";
import logCreazioneNuovoControllo from "./router/log/creazioneControllo.js";
import logAccessoControlloSCP22 from "./router/log/accessoControllo.js";
import createImmagini from "./router/CreateRecord/createImmagini.js";
import runScriptCreateRecordImmagini from "./router/Script/createRecord/runScriptCreateRecordImmagini.js";
import runScriptUpdateRecordImmagini from "./router/Script/updateRecord/runAcriptUpdateRecordImmagini.js";
import logLogoutInattivita from "./router/log/logoutInattivita.js";
import getUser from "./router/User/AuthUser.js";
import codiceStradale from "./router/GetRecords/codiceDellaStrada.js";

// Codifica la stringa in Base
const Codifica = btoa(UtenteAPI);
const CodificaTAW91 = btoa(UtenteTAW91);

const upload = multer();

/**
 * QUESTA è LA CONNESSIONE AL DB FILMAKER CHE GENERA UN TOKEN PER L'ACCESSO NELLA PORTA 10100
 */

var configConnectionSCP22 = {
  method: "post",
  maxBodyLength: Infinity,
  url: urlConnectionSCP22,
  headers: {
    Authorization: `Basic ${Codifica} `,
    "Content-Type": "application/json",
  },
  data: data,
};
async function connessioneSCP22() {
  try {
    const response = await axios(configConnectionSCP22);
    tokenSCP22 = response.data.response.token;
    console.log("SCP22 connesso");
  } catch (error) {
    console.log("errore nella connessione ad SCP22", error.message);
  }
}

var configConnectionSCPTAW91 = {
  method: "post",
  maxBodyLength: Infinity,
  url: urlConnectionTAW91,
  headers: {
    Authorization: `Basic ${CodificaTAW91} `,
    "Content-Type": "application/json",
  },
  data: data,
};

async function connessioneTAW91() {
  try {
    const response = await axios(configConnectionSCPTAW91);
    tokenTAW91 = response.data.response.token;
    console.log("TAW91 connesso");
  } catch (error) {
    console.log("errore nella connessione ad db", error.message);
  }
}

// Ogni 10 minuti richiedi nuovamente la connessione a FileMaker per ottenere un nuovo tokenSCP22
setInterval(async () => {
  await connessioneSCP22();
  await connessioneTAW91();
}, 5 * 60 * 1000); // 5 minuti in millisecondi

/**
 * QUESTA è LA FUNZIONA ASYNCORNA CHE PERMETTE LA CONNESSIONE PRIMA DI QUALSIASI ALTRA OPERAZIONE
 */

(async () => {
  app.listen(10100, () => console.log("Siamo connessi alla porta 10100"));
  await connessioneSCP22();
  await connessioneTAW91();
})();

app.get("/getUser", async (req, res) => {
  await getUser(tokenTAW91, res);
});

/**
 *  QUESTA è LA CHIAMATA PER CERCARE UN RECORD CON NOME UTENTE CORRISPONDENTE E CONFRONTARE LA PASSWORD PER IL LOGIN
 */

app.post("/authentication", async (req, res) => {
  (async () => {
    await Login(tokenTAW91, req, res);
    connessioneTAW91();
  })();
});

/**
 *  QUESTA è LA CHIAMATA PER SCRIVERE NEL FILE DI LOG L'AVVENUTO LOGOUT
 */

app.post("/logLogoutClick", async (req, res) => {
  (async () => {
    await logLogoutClick(tokenSCP22, req, res);
    connessioneSCP22(3);
  })();
});

/**
 * QUESTA é LA CHIAMTA PER SCRIVERE NEL FILE DI LOG L'AVVENUTO LOGOUT AUTOMATICO PER INATTIVITà
 */

app.post("/logLogoutInattivita", async (req, res) => {
  (async () => {
    await logLogoutInattivita(tokenSCP22, req, res);
    connessioneSCP22(399);
  })();
});

/**
 *  QUESTA è LA CHIAMATA PER SCRIVERE NEL FILE DI LOG CHE L'UTENTE HA EFFETTUATO L'ACCESSO AD UN DOCUMENTO SCP22
 */

app.post("/logAccessoControlloSCP22", async (req, res) => {
  (async () => {
    await logAccessoControlloSCP22(tokenSCP22, req, res);
    connessioneSCP22(5);
  })();
});

/**
 *  QUESTA è LA CHIAMATA PER SCRIVERE NEL FILE DI LOG CHE L'UTENTE HA EFFETTUATO LA CREAZIONE DI UN NUOVO DOCUMENTO IN SCP22
 */

app.post("/logCreazioneNuovoControllo", async (req, res) => {
  (async () => {
    await logCreazioneNuovoControllo(tokenSCP22, req, res);
    connessioneSCP22(6);
  })();
});

// QUESTA é LA CHIAMATA PER MODIFICARE DATA O ORA DELL'ULTIMO LOGIN DI UN UTENTE

app.post("/runScriptUpdateDataOraLastLogin", async (req, res) => {
  (async () => {
    await runScriptUpdateDataOraLastLogin(tokenSCP22, req, res);
    connessioneSCP22(7);
  })();
});
// QUESTA é LA CHIAMATA PER CHIAMARE I DATI PER RIEPIRE LA TABELLA INIZIALE

app.get("/getRecordsTable", async (req, res) => {
  await getRecordsTable(tokenSCP22, res);
  connessioneSCP22(8);
});

// QUESTA é LA CHIAMATA PER CHIAMARE I DATI SUCCESSIVIA ALLO SCROLL

app.post("/getOtherRecordsTable", async (req, res) => {
  await getOtherRecordsTable(tokenSCP22, res, req);
  connessioneSCP22(9);
});

// QUESTA é LA CHIAMATA PER CONTARE I REGORD DELLA TABELLA A3_01_TabRig_DatiTabella

// @modificare

app.get("/runScriptCountRecords", async (req, res) => {
  await runScriptCountRecordsA2_TabRig_informazioni_generali(
    tokenSCP22,
    req,
    res
  );
  connessioneSCP22(10);
});

// QUESTA CHIAMATA PRENDE I RECORD DA TUTTE LE TABELLE

app.post("/getSingleRecord", async (req, res) => {
  try {
    const A3_02_TabRig_PatenteGuida = await getSingleRecord(
      tokenSCP22,
      "A3_02_TabRig_PatenteGuida",
      req,
      res
    );
    connessioneSCP22(11);

    const A3_03_TabRig_CartaIdentita = await getSingleRecord(
      tokenSCP22,
      "A3_03_TabRig_CartaIdentita",
      req,
      res
    );
    connessioneSCP22(12);

    const A3_04_TabRig_Passaporto = await getSingleRecord(
      tokenSCP22,
      "A3_04_TabRig_Passaporto",
      req,
      res
    );
    connessioneSCP22(13);

    const A3_05_TabRig_CartaCircolazione = await getSingleRecord(
      tokenSCP22,
      "A3_05_TabRig_CartaCircolazione",
      req,
      res
    );
    connessioneSCP22(14);

    const A3_06_TabRig_CertificatoAssicurazione = await getSingleRecord(
      tokenSCP22,
      "A3_06_TabRig_CertificatoAssicurazione",
      req,
      res
    );
    connessioneSCP22(20);
    const A2_TabRig_informazioni_generali = await getSingleRecord(
      tokenSCP22,
      "A2_TabRig_informazioni_generali",
      req,
      res
    );
    connessioneSCP22(21);
    const A4_01_TabRig_Immagini = await getSingleRecord(
      tokenSCP22,
      "A4_01_TabRig_Immagini",
      req,
      res
    );
    connessioneSCP22(22);

    const result = {
      A3_02_TabRig_PatenteGuida: A3_02_TabRig_PatenteGuida,
      A3_03_TabRig_CartaIdentita: A3_03_TabRig_CartaIdentita,
      A3_04_TabRig_Passaporto: A3_04_TabRig_Passaporto,
      A3_05_TabRig_CartaCircolazione: A3_05_TabRig_CartaCircolazione,
      A3_06_TabRig_CertificatoAssicurazione:
        A3_06_TabRig_CertificatoAssicurazione,
      A4_01_TabRig_Immagini: A4_01_TabRig_Immagini,
      A2_TabRig_informazioni_generali: A2_TabRig_informazioni_generali,
    };
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Errore durante la richiesta dei record.");
  }
});

// QUESTA CHIAMATA PERMETTE LA RICERCA NEL DB DELL' INPUT CERCATO

app.post("/findRecords", async (req, res) => {
  (async () => {
    await findRecords(tokenSCP22, req, res);
    connessioneSCP22(24);
  })();
});

// QUESTA è LA CHIAMATA PER CREARE UN NUOVO RECORD IN SESSIONE CONTROLLO

app.post("/nuovo-controllo", async (req, res) => {
  (async () => {
    await nuovoControllo(tokenSCP22, req, res);
    connessioneSCP22(26);
  })();
});

// QUESTA è LA CHIAMATA PER IMPOSTARE L'ORA IN TABELLA SESSIONE CONTROLLO

app.post("/runScriptPrelevaID", async (req, res) => {
  (async () => {
    await runScriptPrelevaID(tokenSCP22, req, res);
    connessioneSCP22(27);
  })();
});

/**
 * QUESTA é LA CHIAMATE PER CREARE OGNI VOLTA CHE SI CREA UN CONTROLLO NELLA TABELLA A1_TabPri_SessioneControllo UN RECORD PER OGNI ALTRA TABELLA
 * CON A_51a_numero documento UGUALE A A_02_n° record DI A1_TabPri_SessioneControllo ( CHE SARà QUINDI L'ID UNIVOCO DEL CONTROLLO) LA SECONDA CHIAMATA
 * SERVE PER L IMMISSIONE DATI
 */

// INFORMAZIONI GENERALI

app.post("/runScriptCreateRecordInformazioniGenerali", async (req, res) => {
  (async () => {
    await runScriptCreateRecordInformazioniGenerali(tokenSCP22, req, res);
    connessioneSCP22(28);
  })();
});
app.patch("/createInformazioniGenerali", async (req, res) => {
  (async () => {
    await createInformazioniGenerali(tokenSCP22, req, res);
    connessioneSCP22(29);
  })();
});

// PATENTE

app.post("/runScriptCreateRecordPatente", async (req, res) => {
  (async () => {
    await runScriptCreateRecordPatente(tokenSCP22, req, res);
    connessioneSCP22(31);
  })();
});
app.patch("/createPatente", async (req, res) => {
  (async () => {
    await createPatente(tokenSCP22, req, res);
    connessioneSCP22(32);
  })();
});

// CARTA IDENTITA

app.post("/runScriptCreateRecordCartaIdentita", async (req, res) => {
  (async () => {
    await runScriptCreateRecordCartaIdentita(tokenSCP22, req, res);
    connessioneSCP22(34);
  })();
});
app.patch("/createCartaIdentita", async (req, res) => {
  (async () => {
    await createCartaIdentita(tokenSCP22, req, res);
    connessioneSCP22(35);
  })();
});

// PASSAPORTO

app.post("/runScriptCreateRecordPassaporto", async (req, res) => {
  (async () => {
    await runScriptCreateRecordPassaporto(tokenSCP22, req, res);
    connessioneSCP22(37);
  })();
});
app.patch("/createPassaporto", async (req, res) => {
  (async () => {
    await createPassaporto(tokenSCP22, req, res);
    connessioneSCP22(38);
  })();
});

// CARTA DI CIRCOLAZIONE

app.post("/runScriptCreateRecordCartaCircolazione", async (req, res) => {
  (async () => {
    await runScriptCreateRecordCartaCircolazione(tokenSCP22, req, res);
    connessioneSCP22(40);
  })();
});
app.patch("/createCartaCircolazione", async (req, res) => {
  (async () => {
    await createCartaCircolazione(tokenSCP22, req, res);
    connessioneSCP22(41);
  })();
});

// CERTIFICATO ASSICURAZIONE

app.post("/runScriptCreateRecordCertificatoAssicurazione", async (req, res) => {
  (async () => {
    await runScriptCreateRecordCertificatoAssicurazione(tokenSCP22, req, res);
    connessioneSCP22(43);
  })();
});
app.patch("/createCertificatoAssicurazione", async (req, res) => {
  (async () => {
    await createCertificatoAssicurazione(tokenSCP22, req, res);
    connessioneSCP22(44);
  })();
});

// IMMAGINI

app.post("/runScriptCreateRecordImmagini", async (req, res) => {
  (async () => {
    await runScriptCreateRecordImmagini(tokenSCP22, req, res);
    connessioneSCP22(57);
  })();
});
app.patch("/createImmagini", async (req, res) => {
  (async () => {
    await createImmagini(tokenSCP22, req, res);
    connessioneSCP22(58);
  })();
});

/**
 * QUI LE CHIAMATE PER LA MODIFICA DI UN CONTROLLO CREANDO UN NUOVO RECORD CON STESSO ID E COPIA DEL PRECEDENTE GESTENDO IL CORRENTE OBSOLETO
 */
app.post("/runScriptUpdateRecordCartaCircolazione", async (req, res) => {
  (async () => {
    await runScriptUpdateRecordCartaCircolazione(tokenSCP22, req, res);
    connessioneSCP22(59);
  })();
});
app.post("/runScriptUpdateRecordCartaIdentita", async (req, res) => {
  (async () => {
    await runScriptUpdateRecordCartaIdentita(tokenSCP22, req, res);
    connessioneSCP22(60);
  })();
});
app.post("/runScriptUpdateRecordCertificatoAssicurazione", async (req, res) => {
  (async () => {
    await runScriptUpdateRecordCertificatoAssicurazione(tokenSCP22, req, res);
    connessioneSCP22(61);
  })();
});

app.post("/runScriptUpdateRecordInformazioniGenerali", async (req, res) => {
  (async () => {
    await runScriptUpdateRecordInformazioniGenerali(tokenSCP22, req, res);
    connessioneSCP22(64);
  })();
});
app.post("/runScriptUpdateRecordPatente", async (req, res) => {
  (async () => {
    await runScriptUpdateRecordPatente(tokenSCP22, req, res);
    connessioneSCP22(65);
  })();
});
app.post("/runScriptUpdateRecordPassaporto", async (req, res) => {
  (async () => {
    await runScriptUpdateRecordPassaporto(tokenSCP22, req, res);
    connessioneSCP22(69);
  })();
});
app.post("/runScriptUpdateRecordImmagini", async (req, res) => {
  (async () => {
    await runScriptUpdateRecordImmagini(tokenSCP22, req, res);
    connessioneSCP22(70);
  })();
});

// filtroReport

app.post("/filtroReport", async (req, res) => {
  (async () => {
    await filtroReport(tokenSCP22, req, res);
    connessioneSCP22(71);
  })();
});

// invio screenshot

app.post("/invia-screenshot-email", upload.single("screenshot"), (req, res) => {
  (async () => {
    await invia_screenshot_email(req, res);
    connessioneSCP22(71);
  })();
});

// CHIAMATA PER IL CODICE DELLA STRADA

app.get("/codiceStradale", async (req, res) => {
  await codiceStradale(tokenTAW91, req, res);
  connessioneTAW91();
});

let utente = {};
// Endpoint per ricevere i dati
app.post("/receive-context", (req, res) => {
  utente = req.body; // Memorizza i dati ricevuti nella variabile `utente`
  res.json({ message: "Dati ricevuti con successo" });
});

// Endpoint per inviare i dati al frontend
app.get("/receive-context", (req, res) => {
  res.json(utente); // Invia i dati memorizzati al frontend
});
