import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { LoggedContext } from "../../Context/LoggedContext";
import { ModificaControlloContext } from "../../Context/ModificaControlloContext";
import Tabs from "./Components/Tabs";
import ModificaPopUp from "../PopUp/ModificaPopUp";

interface InformazioniGenerali {
  A2_TabRig_informazioni_generali: {
    fieldData: {
      A_09a_livello_di_revisione: number;
      A_51a_numero_documento: string;
      A_52a_flag_di_corrente_obsoleto: string;
      D_01_data: Date;
      D_02_ora_inizio: string;
      D_03_ora_fine: string;
      D_04_numero_giorno_settimana: number;
      D_05_latitudine: string;
      D_06_longitudine: string;
      D_07_provincia: string;
      D_08_comune: string;
      D_09_codice_avviamento_postale: string;
      D_10_regione: string;
      D_11_indirizzo: string;
      D_12_nome_operatore: string;
      D_13_cognome_operatore: string;
      D_14_stato: string;
      D_15_targa: string;
      D_16_nome_conducente: string;
      D_17_cognome_conducente: string;
      D_18_nome_proprietario: string;
      D_19_cognome_proprietario: string;
      D_20_numero_patente: string;
      D_21_numero_carta_id: string;
      D_22_numero_passaporto: string;
      D_23_marca_modello_veicolo: string;
      D_24_cognome_nome_operatore: string;
      D_25_norme_violate: string;
      D_27_controlli_eseguiti: string;
      D_28_documenti_ritirati: string;
      D_29_tipo_mezzo: string;
      D_31_carta_circolazione_ritirata: number;
      D_32_certificato_assicurazione_ritirato: number;
    };
  };
}

const Controllo = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const LoggedMyContext = useContext(LoggedContext);
  const ModificaControlloMyContext = useContext(ModificaControlloContext);

  const [datiControllo, setDatiControllo] =
    useState<InformazioniGenerali | null>(null);

  useEffect(() => {
    if (location.state.datiControllo) {
      setDatiControllo(location.state.datiControllo);
    }
  }, [location.state.datiControllo]);

  const handleModificaPopUp = (testo: string) => {
    ModificaControlloMyContext.setMessaggioPopUp(testo);
    ModificaControlloMyContext.setMostraPopUp(true);
  };

  const closeModificaPopUp = () => {
    ModificaControlloMyContext.setMostraPopUp(false);
  };

  const ModificaRecord = async () => {
    handleModificaPopUp(
      "Vuoi modificare questo documento creando una nuova revisione?"
    );
  };

  return (
    <div
      className="bg-gray-200 w-screen h-screen px-8 py-20 grid grid-cols-5 "
      style={{ userSelect: "none" }}
    >
      <div className=" flex flex-col border-r-2 border-gray-400 pt-6">
        <div className="h-2/6 flex items-center  border-b border-gray-400 mr-3">
          <ul className="space-y-2 flex flex-col ">
            <li className="flex">
              <p className="pr-3 text-red-500">Data:</p>
              <p>
                {datiControllo?.A2_TabRig_informazioni_generali.fieldData.D_01_data.toString()}
              </p>
            </li>
            <li className="flex">
              <p className="pr-3 text-red-500">Nome operatore:</p>
              <p>
                {
                  datiControllo?.A2_TabRig_informazioni_generali.fieldData
                    .D_12_nome_operatore
                }
              </p>
            </li>
            <li className="flex">
              <p className="pr-3 text-red-500">Cognome operatore:</p>
              <p>
                {
                  datiControllo?.A2_TabRig_informazioni_generali.fieldData
                    .D_13_cognome_operatore
                }
              </p>
            </li>
            <li className="flex">
              <p className="pr-3 text-red-500">Orario di inizio:</p>
              <p>
                {
                  datiControllo?.A2_TabRig_informazioni_generali.fieldData
                    .D_02_ora_inizio
                }
              </p>
            </li>
            <li className="flex">
              <p className="pr-3 text-red-500">Orario di fine:</p>
              <p>
                {
                  datiControllo?.A2_TabRig_informazioni_generali.fieldData
                    .D_03_ora_fine
                }
              </p>
            </li>
          </ul>
        </div>
        <div className="h-2/6 flex items-center border-b border-gray-400 mr-3">
          <ul className="space-y-2">
            <li className="flex">
              <p className="pr-3 text-red-500">Stato:</p>
              <p>
                {
                  datiControllo?.A2_TabRig_informazioni_generali.fieldData
                    .D_14_stato
                }
              </p>
            </li>
            <li className="flex">
              <p className="pr-3 text-red-500">Regione:</p>
              <p>
                {
                  datiControllo?.A2_TabRig_informazioni_generali.fieldData
                    .D_10_regione
                }
              </p>
            </li>
            <li className="flex">
              <p className="pr-3 text-red-500">Provincia:</p>
              <p>
                {
                  datiControllo?.A2_TabRig_informazioni_generali.fieldData
                    .D_07_provincia
                }
              </p>
            </li>
            <li className="flex">
              <p className="pr-3 text-red-500">Comune:</p>
              <p>
                {
                  datiControllo?.A2_TabRig_informazioni_generali.fieldData
                    .D_08_comune
                }
              </p>
            </li>
            <li className="flex">
              <p className="pr-3 text-red-500">Codice avviamento postale:</p>
              <p>
                {
                  datiControllo?.A2_TabRig_informazioni_generali.fieldData
                    .D_09_codice_avviamento_postale
                }
              </p>
            </li>
            <li className="flex">
              <p className="pr-3 text-red-500">Indirizzo:</p>
              <p>
                {
                  datiControllo?.A2_TabRig_informazioni_generali.fieldData
                    .D_11_indirizzo
                }
              </p>
            </li>
          </ul>
        </div>
        <div className=" h-1/5 flex items-center ">
          <ul className="space-y-2">
            <li className="flex">
              <p className="pr-3 text-red-500">ID documento:</p>
              <p>
                {
                  datiControllo?.A2_TabRig_informazioni_generali.fieldData
                    .A_51a_numero_documento
                }
              </p>
            </li>
            <li className="flex">
              <p className="pr-3 text-red-500">Revisione:</p>
              <p>
                {
                  datiControllo?.A2_TabRig_informazioni_generali.fieldData
                    .A_09a_livello_di_revisione
                }
              </p>
            </li>
            <li className="flex">
              <p className="pr-3 text-red-500">Stato documento:</p>
              <p>
                {
                  datiControllo?.A2_TabRig_informazioni_generali.fieldData
                    .A_52a_flag_di_corrente_obsoleto
                }
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-4 w-auto flex flex-col">
        <div className="flex items-center justify-between pl-6">
          <div className="h-14 flex items-center">
            <p className="text-2xl">
              Dettagli controllo{" "}
              {
                datiControllo?.A2_TabRig_informazioni_generali.fieldData
                  .A_51a_numero_documento
              }
            </p>
          </div>
          <div className=" h-fit flex justify-end">
            {datiControllo?.A2_TabRig_informazioni_generali.fieldData
              .A_52a_flag_di_corrente_obsoleto === "corrente" ? (
              <button
                onClick={async () => {
                  await ModificaRecord();
                }}
                className=" mr-2 bg-gialloSofitel border-2 border-gialloBordo hover:bg-gialloBordo hover:border-gialloBordo font-medium rounded-lg text-sm px-4 py-2"
              >
                MODIFICA
              </button>
            ) : null}
            <button
              onClick={() => {
                navigate(
                  `/print/${datiControllo?.A2_TabRig_informazioni_generali.fieldData.A_51a_numero_documento}`,
                  { state: datiControllo }
                ); // Esplicitamente tipizza come NavigateOptions
              }}
              className="mr-2  bg-gialloSofitel border-2 border-gialloBordo hover:bg-gialloBordo hover:border-gialloBordo font-medium rounded-lg text-sm px-4 py-2"
            >
              STAMPA
            </button>{" "}
            <button
              onClick={() => {
                navigate(`/SCP22`); // Esplicitamente tipizza come NavigateOptions
              }}
              className="  bg-gialloSofitel border-2 border-gialloBordo hover:bg-gialloBordo hover:border-gialloBordo font-medium rounded-lg text-sm px-4 py-2"
            >
              INDIETRO
            </button>
          </div>
        </div>
        {datiControllo ? (
          <Tabs data={datiControllo} />
        ) : (
          <div className="text-3xl h-full flex justify-center items-center">
            Caricamento dei dati...
          </div>
        )}
        <div className="h-full p-6"></div>
      </div>
      {ModificaControlloMyContext.mostraPopUp && (
        <ModificaPopUp
          title={"Modifica del documento"}
          message={ModificaControlloMyContext.messaggioPopUp}
          onClose={closeModificaPopUp}
          controllo={datiControllo}
          idControllo={
            datiControllo?.A2_TabRig_informazioni_generali.fieldData
              .A_51a_numero_documento
          }
        />
      )}
    </div>
  );
};
export default Controllo;
