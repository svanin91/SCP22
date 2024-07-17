import fs from "fs";
import moment from "moment";

// Funzione per scrivere nel file di log quando un utente accede alla visione di un documento, il pacchetto fs mi permette di scrivere nel file log.txt
const scriviLog = (messaggio) => {
  const oraAttuale = moment().format("DD/MM/YYYY [alle] HH:mm");
  const log = `${oraAttuale}: ${messaggio}\n`;

  fs.appendFile("log.txt", log, (err) => {
    if (err) {
      console.error("Errore durante la scrittura nel file di log:", err);
    }
  });
};

// CHIAMATA CHE REGISTRA L'ACCESSO A SCP22

const logAccessoControlloSCP22 = async (token, req, res) => {
  if (req.body.nomeUtente === "Nome utente non trovato") {
    return;
  }
  scriviLog(
    `Utente ${req.body.nomeUtente} ha visionato il documento ${req.body.numeroDocumento}`
  );
};
export default logAccessoControlloSCP22;
