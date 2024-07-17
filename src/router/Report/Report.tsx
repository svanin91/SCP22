import { useContext, useEffect, useState } from "react";
import { LoggedContext } from "../../Context/LoggedContext";
import { Navigate, useNavigate } from "react-router-dom";
import InputSelectOperatore from "../Component/Input/InputOperatore";
import InputDate from "../Component/Input/InputData";
import InputTime from "../Component/Input/inputTime";
import InputCDS from "../Component/Input/InputCDS";
import InputSelectRegione from "../Component/Input/InputRegione";
import InputSelectProvincia from "../Component/Input/InputProvincia";
import InputComune from "../Component/Input/InputComune";
import ErrorPopup from "../PopUp/ErrorPopup";

import { css } from "@emotion/react";
import { BeatLoader } from "react-spinners";

import axios from "axios";
import moment from "moment";
import ResultsReport from "./Components/ResultsReport";
import Button from "../Component/Button";

const Report = () => {
  const navigate = useNavigate();
  const LoggedMyContext = useContext(LoggedContext);
  console.log(LoggedMyContext);

  const [showAuthError, setShowAuthError] = useState(false);
  const [messaggioPopUp, setMessaggioPopUp] = useState("");
  const [titlePopUp, setTitlePopUp] = useState("");
  const [loading, setLoading] = useState(false);
  const [datiConteggiNonFiltrati, setDatiConteggiNonFiltrati] = useState<any[]>(
    []
  );
  const [dataStats, setDataStats] = useState<any[]>([]);
  const [dateStartFiltro, setDateStartFiltro] = useState<Date | undefined>();
  const [dateStartString, setDateStartString] = useState("");
  const [dateEndFiltro, setDateEndFiltro] = useState<Date | undefined>();
  const [dateEndString, setDateEndString] = useState("");
  const [specificDateFiltro, setSpecificDateFiltro] = useState<
    Date | undefined
  >();
  const [specificDateString, setSpecificDateString] = useState("");
  const [regioneFiltro, setRegioneFiltro] = useState("");
  const [provinciaFiltro, setProvinciaFiltro] = useState("");
  const [comuneFiltro, setComuneFiltro] = useState("");

  const [nomeOperatoreFiltro, setNomeOperatoreFiltro] = useState("");
  const [cognomeOperatoreFiltro, setCognomeOperatoreFiltro] = useState("");
  const [cognomeNomeOperatoreFiltro, setCognomeNomeOperatoreFiltro] =
    useState("");
  const [oraInizioFiltro, setOraInizioFiltro] = useState("");
  const [oraFineFiltro, setOraFineFiltro] = useState("");

  const [cds, setCds] = useState<string[]>([]);
  const [normaViolataSelezionataFiltro, setNormaViolataSelezionataFiltro] =
    useState<string[]>([]);
  const [normaViolataStringa, setNormaviolataStringa] = useState("");

  const { isLogged } = useContext(LoggedContext);
  let datiFiltro: any[] = [];
  let datiFiltratiPerData: any[] = [];
  let datiFiltrati: any[] = [];

  const override = css`
    display: block,
    margin: 0 auto
  `;

  const handleAuthenticationError = (testo: string) => {
    setMessaggioPopUp(testo);
    setShowAuthError(true);
  };

  const closeErrorPopup = () => {
    setShowAuthError(false);
  };

  // CALCOLO DEI FILTRI

  useEffect(() => {
    if (
      nomeOperatoreFiltro !== undefined ||
      cognomeOperatoreFiltro !== undefined
    ) {
      setCognomeNomeOperatoreFiltro(
        (cognomeOperatoreFiltro || "") + " " + (nomeOperatoreFiltro || "")
      );
    }
  }, [nomeOperatoreFiltro, cognomeOperatoreFiltro]);

  useEffect(() => {
    if (dateStartFiltro) {
      setDateStartString(moment(dateStartFiltro).format("DD/MM/YYYY"));
    }
    if (dateEndFiltro) {
      setDateEndString(moment(dateEndFiltro).format("DD/MM/YYYY"));
    }
    if (specificDateFiltro) {
      setSpecificDateString(moment(specificDateFiltro).format("DD/MM/YYYY"));
    }
  }, [dateStartFiltro, dateEndFiltro, specificDateFiltro]);

  /**
   * chiamata al rendering per contare i rapporti con condizioni specificate in variabile body
   */

  const body = {
    query: [
      { D_10_regione: regioneFiltro },
      { D_07_provincia: provinciaFiltro },
      { D_08_comune: comuneFiltro },
      { D_24_cognome_nome_operatore: cognomeNomeOperatoreFiltro },
      { D_25_norme_violate: normaViolataStringa },
    ],
  };

  // CHIAMATA DI RICERCA DEI RECORD

  const filter = async () => {
    setLoading(true);
    setDatiConteggiNonFiltrati([]);
    setDataStats([]);
    if (
      regioneFiltro.length > 0 ||
      provinciaFiltro.length > 0 ||
      comuneFiltro.length > 0 ||
      cognomeNomeOperatoreFiltro.length > 1 ||
      normaViolataStringa.length > 0
    ) {
      try {
        await axios
          .post("http://localhost:10100/filtroReport", body)
          .then((response) => {
            datiFiltro = response.data;
          });
        setLoading(false);
        if (dateStartFiltro && dateEndFiltro && specificDateFiltro) {
          setTitlePopUp("ATTENZIONE !!");
          handleAuthenticationError(
            "Seleziona un intervallo di date o una data specifica"
          );
          return; // Esci dalla funzione se non ci sono filtri di data validi
        }
        for (const element of datiFiltro) {
          const dataDB = new Date(element.fieldData.D_01_data);
          const dataDBInizio = new Date(element.fieldData.D_01_data);
          dataDBInizio.setHours(dataDBInizio.getHours() + 1);
          const dataDBFine = new Date(element.fieldData.D_01_data);
          dataDBFine.setHours(dataDBFine.getHours() + 1);

          if (dateStartFiltro && dateEndFiltro) {
            if (
              new Date(dateStartFiltro) <= dataDBInizio &&
              new Date(dateEndFiltro) >= dataDBFine
            ) {
              datiFiltratiPerData = [...datiFiltratiPerData, element.fieldData];
            }
          } else if (specificDateFiltro) {
            const dataSpecifica = specificDateFiltro;
            dataSpecifica.setHours(dataDBFine.getHours() - 1);
            if (dataSpecifica.getTime() === dataDB.getTime()) {
              datiFiltratiPerData = [...datiFiltratiPerData, element.fieldData];
            }
          } else if (
            dateStartFiltro === undefined &&
            dateEndFiltro === undefined &&
            specificDateFiltro === undefined
          ) {
            datiFiltratiPerData = datiFiltro;
          } else if (dateStartFiltro === undefined && dateEndFiltro) {
            setTitlePopUp("ATTENZIONE !!");
            handleAuthenticationError(
              "Nell'intervallo di date hai selezionato solo la data finale e non quella iniziale"
            );
            return;
          } else if (dateStartFiltro && dateEndFiltro === undefined) {
            setTitlePopUp("ATTENZIONE !!");
            handleAuthenticationError(
              "Nell'intervallo di date hai selezionato solo la data iniziale e non quella finale"
            );
            return;
          }
        }

        if (oraInizioFiltro && oraFineFiltro) {
          const oraInizioFiltroDate = new Date(`01/01/2000 ${oraInizioFiltro}`);
          const oraFineFiltroDate = new Date(`01/01/2000 ${oraFineFiltro}`);
          for (const element of datiFiltratiPerData) {
            const oraInizioDatabase = new Date(
              `01/01/2000 ${element.D_02_ora_inizio}`
            );
            const oraFineDatabase = new Date(
              `01/01/2000 ${element.D_03_ora_fine}`
            );
            if (
              oraInizioDatabase >= oraInizioFiltroDate &&
              oraFineDatabase <= oraFineFiltroDate
            ) {
              datiFiltrati = [...datiFiltrati, element]; // Aggiunta del dato alla variabile locale
            }
          }
          setDataStats(datiFiltrati);
        } else {
          setDataStats(datiFiltratiPerData);
        }
      } catch (error) {
        setLoading(false);
        if (
          error.response.data.error ===
          "Si è verificato un errore durante la richiesta"
        ) {
          setTitlePopUp("ATTENZIONE !!");
          console.log(error);

          handleAuthenticationError(
            "Nessun record trovato, prova ad effettuare una nuova ricerca"
          );
          return;
        } else {
          console.log(error);
        }
      }
    } else {
      setTitlePopUp("Filtri mancanti");
      handleAuthenticationError(
        "Per effettuare la ricerca é necessario aggiungere almeno 1 filtro luogo, operatore o tipo di irregiolarità"
      );
      setLoading(false);
      return;
    }
  };

  const bottoni = [
    {
      titolo: "STAMPA",
      link: "/print/report",
      report: dataStats,
    },
  ];
  const renderButton = bottoni.map((item, index) => (
    <Button
      titolo={item.titolo}
      link={item.link}
      key={index}
      report={item.report}
      filtro={{
        dateStartFiltro: dateStartFiltro,
        dateEndFiltro: dateEndFiltro,
        specificDateFiltro: specificDateFiltro,
        oraInizioFiltro: oraInizioFiltro,
        oraFineFiltro: oraFineFiltro,
        regioneFiltro: regioneFiltro,
        provinciaFiltro: provinciaFiltro,
        comuneFiltro: comuneFiltro,
        cognomeNomeOperatoreFiltro: cognomeNomeOperatoreFiltro,
        normaViolataStringa: normaViolataStringa,
      }}
    />
  ));

  return (
    <div
      className="bg-gray-200 w-screen h-screen px-8 pt-20 grid grid-cols-5"
      style={{ userSelect: "none" }}
    >
      <div className=" flex flex-col border-r-2 pr-6 border-black">
        <div className="flex flex-col ">
          <div className="h-32 flex flex-col justify-center border-b-2 border-gray-400">
            <p>Seleziona un intervallo di date:</p>
            <div className="flex justify-between items-center mt-2">
              <p className="mr-2">Dal</p>
              <InputDate
                thisState={dateStartFiltro}
                thisSetState={setDateStartFiltro}
              />
            </div>
            <div className="flex justify-between items-center mt-2">
              <p className="mr-4">Al</p>
              <InputDate
                thisState={dateEndFiltro}
                thisSetState={setDateEndFiltro}
              />
            </div>
          </div>

          <div className="h-24 flex flex-col justify-center item-center border-b-2 border-gray-400">
            <p>Seleziona una data specifica:</p>
            <div className="flex justify-between items-center mt-2">
              <p className="mr-6">Il</p>
              <InputDate
                thisState={specificDateFiltro}
                thisSetState={setSpecificDateFiltro}
              />
            </div>
          </div>
          <div className="h-44 flex flex-col justify-center border-b-2 border-gray-400">
            <div className="grid grid-cols-2 items-center">
              <p className="mr-2">Regione</p>
              <InputSelectRegione
                thisState={regioneFiltro}
                thisSetState={setRegioneFiltro}
              />
            </div>
            <div className="grid grid-cols-2 items-center mt-2">
              <p className="mr-4">Provincia</p>
              <InputSelectProvincia
                thisState={provinciaFiltro}
                thisSetState={setProvinciaFiltro}
                regioneControllo={regioneFiltro}
              />
            </div>
            <div className="grid grid-cols-2 items-center mt-2">
              <p className="mr-4">Comune</p>
              <InputComune
                thisState={comuneFiltro}
                thisSetState={setComuneFiltro}
              />
            </div>
          </div>
          <div className="h-24 flex flex-col justify-center border-b-2 border-gray-400">
            <p>Seleziona uno specifico operatore:</p>
            <InputSelectOperatore
              thisStateNome={nomeOperatoreFiltro}
              thisSetStateNome={setNomeOperatoreFiltro}
              thisStateCognome={cognomeOperatoreFiltro}
              thisSetStateCognome={setCognomeOperatoreFiltro}
            />
          </div>
          <div className="h-32 flex flex-col justify-center border-b-2 border-gray-400">
            <p>Seleziona un intervallo orario:</p>
            <div className="flex items-center mt-2">
              <p className="mr-4">Dalle</p>
              <InputTime
                thisState={oraInizioFiltro}
                thisSetState={setOraInizioFiltro}
              />
            </div>
            <div className="flex items-center mt-2">
              <p className="mr-6">Alle</p>
              <InputTime
                thisState={oraFineFiltro}
                thisSetState={setOraFineFiltro}
              />
            </div>
          </div>
          <div className="h-20 flex flex-col justify-center">
            <p>Seleziona il tipo di irregolarità:</p>
            <InputCDS
              cds={cds}
              thisSetState={setNormaViolataSelezionataFiltro}
              thisState={normaViolataSelezionataFiltro}
            />
          </div>

          <div className="h-16 flex justify-center items-center">
            <button
              onClick={filter}
              className=" bg-gialloSofitel border-2 w-full border-gialloBordo hover:bg-gialloBordo hover:border-gialloBordo font-medium rounded-lg text-sm px-4 py-2"
            >
              CERCA
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-4 w-auto flex flex-col px-4">
        <div className=" h-fit flex justify-end">
          {dataStats.length >= 1 ? renderButton : null}
          <button
            onClick={() => {
              navigate("/SCP22");
            }}
            className=" ml-2 bg-gialloSofitel border-2 border-gialloBordo hover:bg-gialloBordo hover:border-gialloBordo font-medium rounded-lg text-sm px-4 py-2"
          >
            INDIETRO
          </button>
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
          <>
            {dataStats.length <= 0 ? (
              <div className="flex justify-center items-center	w-full h-full text-2xl">
                <p>Nessun risultato trovato</p>
              </div>
            ) : (
              <ResultsReport state={dataStats} setState={setDataStats} />
            )}
          </>
        )}
      </div>
      {showAuthError && (
        <ErrorPopup
          title={titlePopUp}
          message={messaggioPopUp}
          onClose={closeErrorPopup}
        />
      )}
    </div>
  );
};
export default Report;
