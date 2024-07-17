import fs from "fs";
import moment from "moment";

// Funzione per scrivere nel file di log quando un utente crea o modifica un documento, il pacchetto fs mi permette di scrivere nel file log.txt
const scriviLog = (messaggio) => {
  const oraAttuale = moment().format("DD/MM/YYYY [alle] HH:mm");
  const log = `${oraAttuale}: ${messaggio}\n`;

  fs.appendFile("log.txt", log, (err) => {
    if (err) {
      console.error("Errore durante la scrittura nel file di log:", err);
    }
  });
};

// CHIAMATA CHE REGISTRA NEL LOG LA CREAZIONE DI UN CONTROLLO

const logCreazioneNuovoControllo = async (token, req, res) => {
  if (req.body.nomeUtente === "Nome utente non trovato") {
    return;
  }
  scriviLog(
    `Utente ${req.body.nomeUtente} ha creato un nuovo documento ${req.body.numeroDocumento} rev. ${req.body.revisione}`
  );
};
export default logCreazioneNuovoControllo;
