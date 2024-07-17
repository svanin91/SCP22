import React, { useState } from "react";
import { ModificaControlloContext } from "../ModificaControlloContext";

export const ModificaControlloProvider = ({
  children,
}: React.PropsWithChildren<object>) => {
  const [mostraPopUp, setMostraPopUp] = useState<boolean>(false);
  const [a_02a_n_record, setA_02a_n_record] = useState<string>("");

  const [messaggioPopUp, setMessaggioPopUp] = useState<string>("");
  const [id_record_informazioni_generali, setId_record_informazioni_generali] =
    useState<number>(0);
  const [id_record_patente, setId_record_patente] = useState<number>(0);
  const [id_record_cartaIdentita, setId_record_cartaIdentita] =
    useState<number>(0);
  const [id_record_passaporto, setId_record_passaporto] = useState<number>(0);
  const [id_record_cartaCircolazione, setId_record_cartaCircolazione] =
    useState<number>(0);
  const [
    id_record_certificatoAssicurazione,
    setId_record_certificatoAssicurazione,
  ] = useState<number>(0);
  const [id_record_Immagini, setId_record_Immagini] = useState<number>(0);

  return (
    <ModificaControlloContext.Provider
      value={{
        mostraPopUp,
        setMostraPopUp,
        a_02a_n_record,
        setA_02a_n_record,
        messaggioPopUp,
        setMessaggioPopUp,
        id_record_informazioni_generali,
        setId_record_informazioni_generali,
        id_record_patente,
        setId_record_patente,
        id_record_cartaIdentita,
        setId_record_cartaIdentita,
        id_record_passaporto,
        setId_record_passaporto,
        id_record_cartaCircolazione,
        setId_record_cartaCircolazione,
        id_record_certificatoAssicurazione,
        setId_record_certificatoAssicurazione,
        id_record_Immagini,
        setId_record_Immagini,
      }}
    >
      {children}
    </ModificaControlloContext.Provider>
  );
};

export default ModificaControlloProvider;
