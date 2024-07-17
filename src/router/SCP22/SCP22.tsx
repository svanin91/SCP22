import { LoggedContext } from "../../Context/LoggedContext";
import { useContext, useEffect, useState, useRef } from "react";
import Table from "../Component/Table";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DataProps from "../Component/Interface/dataInterface";
import { NuovoControlloContext } from "../../Context/NuovoControlloContext";
import NuovoPopUp from "../PopUp/NuovoPopUp";
import { BeatLoader } from "react-spinners";
import { css } from "@emotion/react";
import { CodiceStradaleContext } from "../../Context/CodiceStradaleContext";
import resetLoggedContext from "../../Reset_Context/ResetLoggedContext";

const SCP22 = () => {
  const navigate = useNavigate();

  const NuovoControlloMyContext = useContext(NuovoControlloContext);
  const LoggedMyContext = useContext(LoggedContext);
  const CodiceStradaleMyContext = useContext(CodiceStradaleContext);

  const [apiData, setApiData] = useState<DataProps[]>([]); // Modificato il tipo di stato
  const [sortData, setSortData] = useState(false);
  const [sortNumDoc, setSortNumDoc] = useState(false);
  const [inputFind, setInputFind] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [ricercaEffettuata, setRicercaEffettuata] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [conteggio, setConteggio] = useState<number>();

  // CHIAMATA PER RICEVERE IL CONTEXT LOGGEDCONTEXT DA COM38

  useEffect(() => {
    const fetchData = async () => {
      resetLoggedContext(LoggedMyContext);
      try {
        const response = await axios.get(
          "http://localhost:10100/receive-context"
        );
        console.log(response);

        LoggedMyContext.setA4_03_TabRig_utenti_M_01_nome(
          response.data.LoggedMyContext.A4_03_TabRig_utenti_M_01_nome
        );
        LoggedMyContext.setA4_03_TabRig_utenti_M_02_cognome(
          response.data.LoggedMyContext.A4_03_TabRig_utenti_M_02_cognome
        );
        LoggedMyContext.setA4_03_TabRig_utenti_M_03_grado(
          response.data.LoggedMyContext.A4_03_TabRig_utenti_M_03_grado
        );
        LoggedMyContext.setA4_03_TabRig_utenti_M_04_matricola(
          response.data.LoggedMyContext.A4_03_TabRig_utenti_M_04_matricola
        );
        LoggedMyContext.setA4_03_TabRig_utenti_M_05_nome_utente(
          response.data.LoggedMyContext.A4_03_TabRig_utenti_M_05_nome_utente
        );
        LoggedMyContext.setA4_03_TabRig_utenti_M_07_attivo(
          response.data.LoggedMyContext.A4_03_TabRig_utenti_M_07_attivo
        );
        LoggedMyContext.setA4_03_TabRig_utenti_M_10_cognome_nome(
          response.data.LoggedMyContext.A4_03_TabRig_utenti_M_10_cognome_nome
        );
        LoggedMyContext.setIsLogged(response.data.LoggedMyContext.isLogged);
        LoggedMyContext.setLogOutClick(
          response.data.LoggedMyContext.logoutClick
        );
      } catch (error) {
        console.error("Errore nel recupero dei dati:", error);
      }
    };
    fetchData();
  }, []);

  const override = css`
  display: block,
  margin: 0 auto
`;

  useEffect(() => {
    getRecordsTable();
    countRecords();
    codiceStradale();
  }, []);

  const handleNuovoPopUp = (testo: string) => {
    NuovoControlloMyContext.setMessaggioPopUp(testo);
    NuovoControlloMyContext.setMostraPopUp(true);
  };

  const closeNuovoPopUp = () => {
    NuovoControlloMyContext.setMostraPopUp(false);
  };

  // CHIAMATA PER IL CODICE DELLA STRADA

  const codiceStradale = async () => {
    try {
      const response = await axios.get("http://localhost:10100/codiceStradale");
      CodiceStradaleMyContext.setCds(response.data);
    } catch (error) {
      console.error("Error fetching apiData:", error);
    }
  };

  // Funzione per caricare ulteriori record dal database, all'avvio della pagina cacola il numero
  // di record della tabella e li salva nella variabile conteggio che poi viene passata al componente table
  const countRecords = async () => {
    try {
      const response = await axios.get(
        "http://localhost:10100/runScriptCountRecords"
      );
      setConteggio(response.data);
    } catch (error) {
      console.error("Errore durante la richiesta API:", error);
    }
  };

  /**
   * chiamata per recuperare tutti gli oggetti della tabella
   */
  const getRecordsTable = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:10100/getRecordsTable"
      );
      setApiData(response.data);
    } catch (error) {
      console.error("Errore durante la richiesta:", error);
    }
    setLoading(false);
  };

  // chiamata per registrare nel file log l'accesso utente a SCP22

  const handleChange = (e: any) => {
    setInputFind(e.target.value.trim());
  };

  /**
   * Chiamata per cercare una stringa nel db
   */

  const body = {
    query: [
      { A_51a_numero_documento: inputFind },
      { D_01_data: inputFind },
      { D_07_provincia: inputFind },
      { D_08_comune: inputFind },
      { D_09_codice_avviamento_postale: inputFind },
      { D_10_regione: inputFind },
      { D_11_indirizzo: inputFind },
      { D_12_nome_operatore: inputFind },
      { D_13_cognome_operatore: inputFind },
      { D_12_nome_operatore_2: inputFind },
      { D_13_cognome_operatore_2: inputFind },
      { D_15_targa: inputFind },
      { D_16_nome_patente_conducente: inputFind },
      { D_17_cognome_patente_conducente: inputFind },
      { D_18_nome_proprietario: inputFind },
      { D_19_cognome_proprietario: inputFind },
      { D_20_numero_patente_conducente: inputFind },
      { D_21_numero_carta_id_conducente: inputFind },
      { D_22_numero_passaporto_conducente: inputFind },
      { D_23_marca_modello_veicolo: inputFind },
      { D_24_cognome_nome_operatore: inputFind },
      { D_24_cognome_nome_operatore_2: inputFind },
      { D_25_norme_violate: inputFind },
      { D_29_tipo_mezzo: inputFind },
      { D_30_note: inputFind },
      { D_39_targa_rimorchio: inputFind },
      { D_40_nome_cartaIdentita_conducente: inputFind },
      { D_41_cognome_cartaidentita_conducente: inputFind },
      { D_42_nome_passaporto_conducente: inputFind },
      { D_43_cognome_passaporto_conducente: inputFind },
      { D_44_numero_patente_passeggero_1: inputFind },
      { D_45_numero_carta_id_passeggero_1: inputFind },
      { D_46_numero_passaporto_passeggero_1: inputFind },
      { D_47_nome_patente_passeggero_1: inputFind },
      { D_48_cognome_patente_passeggero_1: inputFind },
      { D_49_nome_cartaIdentita_passeggero_1: inputFind },
      { D_50_cognome_cartaIdentita_passeggero_1: inputFind },
      { D_51_nome_passaporto_passeggero_1: inputFind },
      { D_52_cognome_passaporto_passeggero_1: inputFind },
      { D_53_numero_patente_passeggero_2: inputFind },
      { D_54_numero_carta_id_passeggero_2: inputFind },
      { D_55_numero_passaporto_passeggero_2: inputFind },
      { D_56_nome_patente_passeggero_2: inputFind },
      { D_57_cognome_patente_passeggero_2: inputFind },
      { D_58_nome_cartaIdentita_passeggero_2: inputFind },
      { D_59_cognome_cartaIdentita_passeggero_2: inputFind },
      { D_60_nome_passaporto_passeggero_2: inputFind },
      { D_61_cognome_passaporto_passeggero_2: inputFind },
      { D_62_numero_patente_passeggero_3: inputFind },
      { D_63_numero_carta_id_passeggero_3: inputFind },
      { D_64_numero_passaporto_passeggero_3: inputFind },
      { D_65_nome_patente_passeggero_3: inputFind },
      { D_66_cognome_patente_passeggero_3: inputFind },
      { D_67_nome_cartaIdentita_passeggero_3: inputFind },
      { D_68_cognome_cartaIdentita_passeggero_3: inputFind },
      { D_69_nome_passaporto_passeggero_3: inputFind },
      { D_70_cognome_passaporto_passeggero_3: inputFind },
      { D_71_numero_patente_passeggero_4: inputFind },
      { D_72_numero_carta_id_passeggero_4: inputFind },
      { D_73_numero_passaporto_passeggero_4: inputFind },
      { D_74_nome_patente_passeggero_4: inputFind },
      { D_75_cognome_patente_passeggero_4: inputFind },
      { D_76_nome_cartaIdentita_passeggero_4: inputFind },
      { D_77_cognome_cartaIdentita_passeggero_4: inputFind },
      { D_78_nome_passaporto_passeggero_4: inputFind },
      { D_79_cognome_passaporto_passeggero_4: inputFind },
      { D_80_numero_patente_passeggero_5: inputFind },
      { D_81_numero_carta_id_passeggero_5: inputFind },
      { D_82_numero_passaporto_passeggero_5: inputFind },
      { D_83_nome_patente_passeggero_5: inputFind },
      { D_84_cognome_patente_passeggero_5: inputFind },
      { D_85_nome_cartaIdentita_passeggero_5: inputFind },
      { D_86_cognome_cartaIdentita_passeggero_5: inputFind },
      { D_87_nome_passaporto_passeggero_5: inputFind },
      { D_88_cognome_passaporto_passeggero_5: inputFind },
    ],
  };

  // CHIAMATA DI RICERCA TESTUALE DEI RECORD

  const onSubmitFind = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (inputFind === "") {
      getRecordsTable();
      setRicercaEffettuata(false);
    } else {
      try {
        const response = await axios.post(
          "http://localhost:10100/findRecords",
          body
        );
        setApiData(response.data);
        setRicercaEffettuata(true);
      } catch (error) {
        console.log("Nessun risultato dalla ricerca", error);
        setApiData([]);
        setRicercaEffettuata(true);
      }
    }
    setLoading(false);
  };

  const annullaRicerca = () => {
    setInputFind("");
    setRicercaEffettuata(false);
    //setResearchString(false);
    getRecordsTable();
  };

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const NuovoRecord = async () => {
    handleNuovoPopUp("Vuoi aggiungere un nuovo controllo ?");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmitFind(e);
    }
  };

  return (
    <div className="bg-gray-200 w-screen h-screen px-8 py-20  flex flex-col justify-between	">
      <div className="h-fit grid grid-cols-2">
        <div className="flex ">
          <form className="relative flex items-center">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-[38rem] p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Cerca uno o più controlli"
                onChange={handleChange}
                value={inputFind}
                ref={inputRef}
                onKeyPress={handleKeyPress}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              />
              <div className=" absolute end-2.5 bottom-1 focus:ring-4 focus:outline-none">
                <button
                  type="submit"
                  onClick={onSubmitFind}
                  className="  bg-gialloSofitel border-2 border-gialloBordo hover:bg-gialloBordo hover:border-gialloBordo font-medium rounded-lg text-sm px-4 py-2"
                >
                  Cerca
                </button>{" "}
                {ricercaEffettuata && inputFind ? (
                  <button
                    type="submit"
                    onClick={annullaRicerca}
                    className="  bg-gialloSofitel border-2 border-gialloBordo hover:bg-gialloBordo hover:border-gialloBordo font-medium rounded-lg text-sm px-4 py-2"
                  >
                    Annulla
                  </button>
                ) : null}
              </div>
            </div>
          </form>

          {isHovering ? (
            <div className={`bg-white absolute p-8 z-50 mt-14`}>
              <div>
                <p className="text-2xl mb-3">Qui puoi cercare:</p>
                <ul className="text-sm">
                  <li>- Nome operatore</li>
                  <li>- Cognome operatore</li>
                  <li>- Data controllo (GG/MM/AAAA)</li>
                  <li>- Targa del mezzo</li>
                  <li>- Nome proprietario</li>
                  <li>- Cognome proprietario</li>
                  <li>- Numero Doc. Carta di circolazione</li>
                  <li>- Nome del conducente/passeggero</li>
                  <li>- Cognome del conducente/passeggero</li>
                  <li>- Numero Patente del conducente/passeggero</li>
                  <li>- Numero Carta d'identità del conducente/passeggero</li>
                  <li>- Numero Passaporto del conducente/passeggero</li>
                  <li>- Norme violate</li>
                  <li>- Documenti ritirati</li>
                  <li>- ID Controllo</li>
                  <li>- Regione</li>
                  <li>- Provincia</li>
                  <li>- Comune</li>
                  <li>- Codice Postale</li>
                  <li>- Numero documento</li>
                </ul>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="flex justify-end">
          <button
            onClick={async () => {
              await NuovoRecord();
            }}
            disabled={loading}
            className="w-auto ml-2 focus:outline-none  focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-1 bg-gialloSofitel border-2 border-gialloBordo hover:bg-gialloBordo hover:border-gialloBordo"
          >
            AGGIUNGI NUOVO
          </button>
          <button
            onClick={() => {
              navigate(`/report`); // Esplicitamente tipizza come NavigateOptions
            }}
            disabled={loading}
            className="w-auto ml-2 focus:outline-none  focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-1 bg-gialloSofitel border-2 border-gialloBordo hover:bg-gialloBordo hover:border-gialloBordo"
          >
            REPORT
          </button>
        </div>
      </div>
      {loading ? (
        <div className="spinner flex justify-center items-center	w-full h-full">
          <BeatLoader
            color={"rgb(223, 166, 0)"}
            loading={loading}
            cssOverride={override}
            size={30}
          />
        </div>
      ) : (
        <div className="h-full w-full ">
          <Table
            data={apiData}
            setData={setApiData}
            setSortData={setSortData}
            sortData={sortData}
            setSortNumDoc={setSortNumDoc}
            sortNumDoc={sortNumDoc}
            conteggio={conteggio}
          />
        </div>
      )}
      {NuovoControlloMyContext.mostraPopUp && (
        <NuovoPopUp
          title={"Aggiungi nuovo"}
          message={NuovoControlloMyContext.messaggioPopUp}
          onClose={closeNuovoPopUp}
        />
      )}
    </div>
  );
};
export default SCP22;
