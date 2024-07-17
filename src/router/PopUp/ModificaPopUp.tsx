import axios from "axios";
import { useNavigate, NavigateOptions, useLocation } from "react-router-dom";
import { NuovoControlloContext } from "../../Context/NuovoControlloContext";
import { LoggedContext } from "../../Context/LoggedContext";
import { useContext, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { css } from "@emotion/react";

const ModificaPopUp = ({ message, onClose, title, controllo, idControllo }) => {
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

  /**
   * TUTTE QUESTE CIHAMATE PERMETTONO LA CREAZIONE DI UN RECORD VUOTO CON STESSO AD DOCUMENTO DI QUELLO DA MODIFICARE
   */

  const logCreazioneNuovoControllo = async (A_02a_n_record: string) => {
    await axios.post("http://localhost:10100/logCreazioneNuovoControllo", {
      nomeUtente: LoggedMyContext.A4_03_TabRig_utenti_M_05_nome_utente,
      numeroDocumento: A_02a_n_record,
      revisione:
        controllo.A2_TabRig_informazioni_generali.fieldData
          .A_09a_livello_di_revisione,
    });
  };
  const createRecordInformazioniGenerali = async (A_02a_n_record: string) => {
    try {
      const response = await axios.post(
        "http://localhost:10100/runScriptUpdateRecordInformazioniGenerali",
        { A_02a_n_record: A_02a_n_record }
      );
      NuovoControlloMyContext.setId_record_informazioni_generali(
        response.data.response.scriptResult
      );
    } catch (error) {
      console.log(
        "Errore script creazione record in modifica di createRecordInformazioniGenerali",
        error
      );
    }
  };
  const createRecordPatente = async (A_02a_n_record: string) => {
    try {
      const response = await axios.post(
        "http://localhost:10100/runScriptUpdateRecordPatente",
        { A_02a_n_record: A_02a_n_record }
      );
      NuovoControlloMyContext.setId_record_patente(
        response.data.response.scriptResult
      );
    } catch (error) {
      console.log(
        "Errore script creazione record in modifica di createRecordPatente",
        error
      );
    }
  };
  const createRecordCartaIdentita = async (A_02a_n_record: string) => {
    try {
      const response = await axios.post(
        "http://localhost:10100/runScriptUpdateRecordCartaIdentita",
        { A_02a_n_record: A_02a_n_record }
      );
      NuovoControlloMyContext.setId_record_cartaIdentita(
        response.data.response.scriptResult
      );
    } catch (error) {
      console.log(
        "Errore script creazione record in modifica di createRecordCartaIdentita",
        error
      );
    }
  };
  const createRecordPassaporto = async (A_02a_n_record: string) => {
    try {
      const response = await axios.post(
        "http://localhost:10100/runScriptUpdateRecordPassaporto",
        { A_02a_n_record: A_02a_n_record }
      );
      NuovoControlloMyContext.setId_record_passaporto(
        response.data.response.scriptResult
      );
    } catch (error) {
      console.log(
        "Errore script creazione record in modifica di createRecordPassaporto",
        error
      );
    }
  };
  const createRecordCartaCircolazione = async (A_02a_n_record: string) => {
    try {
      const response = await axios.post(
        "http://localhost:10100/runScriptUpdateRecordCartaCircolazione",
        { A_02a_n_record: A_02a_n_record }
      );
      NuovoControlloMyContext.setId_record_cartaCircolazione(
        response.data.response.scriptResult
      );
    } catch (error) {
      console.log(
        "Errore script creazione record in modifica di createRecordCartaCircolazione",
        error
      );
    }
  };
  const createRecordCertificatoAssicurazione = async (
    A_02a_n_record: string
  ) => {
    try {
      const response = await axios.post(
        "http://localhost:10100/runScriptUpdateRecordCertificatoAssicurazione",
        { A_02a_n_record: A_02a_n_record }
      );
      NuovoControlloMyContext.setId_record_certificatoAssicurazione(
        response.data.response.scriptResult
      );
    } catch (error) {
      console.log(
        "Errore script creazione record in modifica di createRecordCertificatoAssicurazione",
        error
      );
    }
  };
  const createImmagini = async (A_02a_n_record: string) => {
    try {
      const response = await axios.post(
        "http://localhost:10100/runScriptUpdateRecordImmagini",
        { A_02a_n_record: A_02a_n_record }
      );
      NuovoControlloMyContext.setId_record_Immagini(
        response.data.response.scriptResult
      );
    } catch (error) {
      console.log(
        "Errore script creazione record in modifica di datiTabella",
        error
      );
    }
  };

  const lanciaScriptModificaRecord = async (idControllo: string) => {
    setLoading(true);
    await createRecordInformazioniGenerali(idControllo);
    await createRecordPatente(idControllo);
    await createRecordCartaIdentita(idControllo);
    await createRecordPassaporto(idControllo);
    await createRecordCartaCircolazione(idControllo);
    await createRecordCertificatoAssicurazione(idControllo);
    await createImmagini(idControllo);
    logCreazioneNuovoControllo(idControllo);
    setLoading(false);
    navigate(`/modifica-controllo/${idControllo}`, {
      state: { controllo, idControllo },
      replace: true,
    });
    onClose();
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
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 8v3a1 1 0 0 1-1 1H5m11 4h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v1m4 3v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7.13a1 1 0 0 1 .24-.65L7.7 8.35A1 1 0 0 1 8.46 8H13a1 1 0 0 1 1 1Z"
              />
            </svg>
            <h3 className="mb-5 text-2xl font-normal text-red-500 dark:text-gray-400">
              Modifica documento
            </h3>
            <p className="mb-5 text-base font-normal text-gray-500 dark:text-gray-400">
              {message}
            </p>{" "}
            <button
              data-modal-hide="popup-modal"
              type="button"
              onClick={() => lanciaScriptModificaRecord(idControllo)}
              className=" bg-gialloSofitel border-2 border-gialloBordo hover:bg-gialloBordo hover:border-gialloBordo focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
            >
              Confermo
            </button>
            <button
              data-modal-hide="popup-modal"
              type="button"
              onClick={onClose}
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-500 hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Annulla
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModificaPopUp;

/*
    <div className="spinner flex fixed inset-0 z-10 justify-center items-center	w-full h-full">
      <div className="bg-gray-800 bg-opacity-50 fixed inset-0"></div>
      <BeatLoader
        color={"rgb(223, 166, 0)"}
        loading={loading}
        cssOverride={override}
        size={30}
      />
    </div>
  ) : (
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
              onClick={() => lanciaScriptModificaRecord(idControllo)}
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
