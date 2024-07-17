import axios from "axios";
import { useNavigate, NavigateOptions } from "react-router-dom";
import { NuovoControlloContext } from "../../Context/NuovoControlloContext";
import { LoggedContext } from "../../Context/LoggedContext";
import { useContext, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { css } from "@emotion/react";

const NuovoPopUp = ({ message, onClose, title }) => {
  /**
   * questo é un componente che permette la generazione di pop up
   */
  const LoggedMyContext = useContext(LoggedContext);
  const NuovoControlloMyContext = useContext(NuovoControlloContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const override = css`
  display: block,
  margin: 0 auto
`;

  let A_02a_n_record: string;

  // Definisci una funzione per stampare l'ID del record dati tabella dopo 5 secondi

  const runScriptPrelevaID = async () => {
    try {
      const response = await axios.post(
        "http://localhost:10100/runScriptPrelevaID"
      );
      // Qui estrapolo A_02a_n_record da utilizzare per la creazione di tutti i record nelle altre tabelle
      NuovoControlloMyContext.setA_02a_n_record(response.data);
      A_02a_n_record = response.data;
      // Puoi fare ulteriori elaborazioni sulla risposta qui
    } catch (error) {
      console.error("Errore durante la richiesta:", error);
      // Gestisci l'errore se necessario
    }
  };
  const createRecordInformazioniGenerali = async (A_02a_n_record: string) => {
    try {
      const response = await axios.post(
        "http://localhost:10100/runScriptCreateRecordInformazioniGenerali",
        { A_02a_n_record: A_02a_n_record }
      );
      NuovoControlloMyContext.setId_record_informazioni_generali(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createRecordPatente = async (A_02a_n_record: string) => {
    try {
      const response = await axios.post(
        "http://localhost:10100/runScriptCreateRecordPatente",
        { A_02a_n_record: A_02a_n_record }
      );
      NuovoControlloMyContext.setId_record_patente(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const createRecordCartaIdentita = async (A_02a_n_record: string) => {
    try {
      const response = await axios.post(
        "http://localhost:10100/runScriptCreateRecordCartaIdentita",
        { A_02a_n_record: A_02a_n_record }
      );
      NuovoControlloMyContext.setId_record_cartaIdentita(
        response.data.response.scriptResult
      );
    } catch (error) {
      console.log(error);
    }
  };
  const createRecordPassaporto = async (A_02a_n_record: string) => {
    try {
      const response = await axios.post(
        "http://localhost:10100/runScriptCreateRecordPassaporto",
        { A_02a_n_record: A_02a_n_record }
      );
      NuovoControlloMyContext.setId_record_passaporto(
        response.data.response.scriptResult
      );
    } catch (error) {
      console.log(error);
    }
  };
  const createRecordCartaCircolazione = async (A_02a_n_record: string) => {
    try {
      const response = await axios.post(
        "http://localhost:10100/runScriptCreateRecordCartaCircolazione",
        { A_02a_n_record: A_02a_n_record }
      );
      NuovoControlloMyContext.setId_record_cartaCircolazione(
        response.data.response.scriptResult
      );
    } catch (error) {
      console.log(error);
    }
  };
  const createRecordCertificatoAssicurazione = async (
    A_02a_n_record: string
  ) => {
    try {
      const response = await axios.post(
        "http://localhost:10100/runScriptCreateRecordCertificatoAssicurazione",
        { A_02a_n_record: A_02a_n_record }
      );
      NuovoControlloMyContext.setId_record_certificatoAssicurazione(
        response.data.response.scriptResult
      );
    } catch (error) {
      console.log(error);
    }
  };

  const createImmagini = async (A_02a_n_record: string) => {
    try {
      const response = await axios.post(
        "http://localhost:10100/runScriptCreateRecordImmagini",
        { A_02a_n_record: A_02a_n_record }
      );
      NuovoControlloMyContext.setId_record_Immagini(
        response.data.response.scriptResult
      );
    } catch (error) {
      console.log(error);
    }
  };

  const logCreazioneNuovoControllo = async (A_02a_n_record: string) => {
    await axios.post("http://localhost:10100/logCreazioneNuovoControllo", {
      nomeUtente: LoggedMyContext.A4_03_TabRig_utenti_M_05_nome_utente,
      numeroDocumento: A_02a_n_record,
      revisione: 1,
    });
  };

  const runScriptCreate = async (A_02a_n_record: string) => {
    setLoading(true);
    await createRecordInformazioniGenerali(A_02a_n_record);
    await createRecordPatente(A_02a_n_record);
    await createRecordCartaIdentita(A_02a_n_record);
    await createRecordPassaporto(A_02a_n_record);
    await createRecordCartaCircolazione(A_02a_n_record);
    await createRecordCertificatoAssicurazione(A_02a_n_record);
    await createImmagini(A_02a_n_record);
    logCreazioneNuovoControllo(A_02a_n_record);
    setLoading(true);
    navigate(`/nuovo-controllo`);
    onClose();
  };

  const lanciaScriptNuovoRecord = () => {
    NuovoControlloMyContext.setClickPopup(true);
    const dataA1_TabPri_SessioneControllo = {
      fieldData: {},
    };
    try {
      axios
        .post(
          "http://localhost:10100/nuovo-controllo",
          dataA1_TabPri_SessioneControllo
        )
        .then(async (response) => {
          await runScriptPrelevaID();
          await runScriptCreate(A_02a_n_record);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return loading ? (
    <div
      className="spinner flex fixed inset-0 z-10 justify-center items-center	w-full h-full"
      style={{ userSelect: "none" }}
    >
      <div className="bg-gray-800 bg-opacity-50 fixed inset-0"></div>
      <BeatLoader
        color={"rgb(223, 166, 0)"}
        loading={loading}
        cssOverride={override}
        size={30}
      />
    </div>
  ) : (
    <div
      className="fixed inset-0 z-10 flex items-center justify-center"
      style={{ userSelect: "none" }}
    >
      <div className="bg-gray-800 bg-opacity-50 fixed inset-0"></div>
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="p-4 md:p-5 text-center">
            <svg
              className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 9V4a1 1 0 0 0-1-1H8.914a1 1 0 0 0-.707.293L4.293 7.207A1 1 0 0 0 4 7.914V20a1 1 0 0 0 1 1h4M9 3v4a1 1 0 0 1-1 1H4m11 6v4m-2-2h4m3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
              />
            </svg>
            <h3 className="mb-5 text-2xl font-normal text-red-500 dark:text-gray-400">
              Aggiungi nuovo
            </h3>
            <p className="mb-5 text-base font-normal text-gray-500 dark:text-gray-400">
              Vuoi aggiungere un nuovo controllo ?
            </p>
            <button
              data-modal-hide="popup-modal"
              type="button"
              onClick={() => lanciaScriptNuovoRecord()}
              className=" bg-gialloSofitel border-2 border-gialloBordo hover:bg-gialloBordo hover:border-gialloBordo focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
            >
              Confermo
            </button>
            <button
              data-modal-hide="popup-modal"
              type="button"
              onClick={onClose}
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-500 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Annulla
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuovoPopUp;
/*
 <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div className="bg-gray-800 bg-opacity-50 fixed inset-0"></div>
      <div className="bg-white rounded-lg p-4 max-w-md mx-auto z-20">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="text-center">
          <p className="text-red-500 font-bold text-lg mb-2">{title}</p>
          <p className="text-gray-700">{message}</p>
          <div className="mt-4 ">
            <button
              className="w-16 mr-2 bg-gialloSofitel border-2 border-gialloBordo hover:bg-gialloBordo hover:border-gialloBordo font-medium rounded-lg text-sm px-4 py-2"
              onClick={() => lanciaScriptNuovoRecord()}
            >
              SI
            </button>
            <button
              className="w-16 ml-2 bg-gialloSofitel border-2 border-gialloBordo hover:bg-gialloBordo hover:border-gialloBordo font-medium rounded-lg text-sm px-4 py-2"
              onClick={onClose}
            >
              NO
            </button>
          </div>
        </div>
      </div>
    </div>
*/
