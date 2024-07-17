import React from "react";
import MyContextModificaControlloType from "./Interface/ModificaControlloInterface";

export const ModificaControlloContext =
  React.createContext<MyContextModificaControlloType>({
    mostraPopUp: false,
    setMostraPopUp: () => {},
    a_02a_n_record: "",
    setA_02a_n_record: () => {},
    messaggioPopUp: "",
    setMessaggioPopUp: () => {},
    id_record_informazioni_generali: 0,
    setId_record_informazioni_generali: () => {},
    id_record_patente: 0,
    setId_record_patente: () => {},
    id_record_cartaIdentita: 0,
    setId_record_cartaIdentita: () => {},
    id_record_passaporto: 0,
    setId_record_passaporto: () => {},
    id_record_cartaCircolazione: 0,
    setId_record_cartaCircolazione: () => {},
    id_record_certificatoAssicurazione: 0,
    setId_record_certificatoAssicurazione: () => {},
    id_record_Immagini: 0,
    setId_record_Immagini: () => {},
  });
