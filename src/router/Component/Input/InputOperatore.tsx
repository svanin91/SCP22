import Select from "react-select";
import React, { useContext, useEffect, useState } from "react";
import { AddContext } from "../../../Context/AddControlContext";

const InputSelectOperatore = (props: {
  thisStateNome: string;
  thisSetStateNome: React.Dispatch<React.SetStateAction<string>>;
  thisStateCognome: string;
  thisSetStateCognome: React.Dispatch<React.SetStateAction<string>>;
  initialNome?: string;
  initialCognome?: string;
}) => {
  const { thisSetStateNome, thisSetStateCognome, initialNome, initialCognome } =
    props;
  const initialnomeCompleto = initialNome
    ? initialNome + " " + initialCognome
    : undefined;
  const [localState, setLocalState] = useState(initialnomeCompleto || "");

  // Verifica se initial è definito e imposta il valore iniziale (INITIAL é IL VALORE UTILIZZATO IN MODIFICA NEL CASO SIA STATO PRECEDENTEMENTE COMPILATO IL CAMPO)

  useEffect(() => {
    if (initialNome !== undefined && initialCognome !== undefined) {
      thisSetStateCognome(initialCognome);
      thisSetStateNome(initialNome);
      setLocalState(initialnomeCompleto);
    }
  }, [initialNome, initialCognome]);

  const handleChange = (e: any) => {
    const stringaCompleta = e.value;
    setLocalState(stringaCompleta);
    const arrayNomi = stringaCompleta.split(" ");
    const cognome = arrayNomi[0];
    const nome = arrayNomi[1];
    thisSetStateNome(nome);
    thisSetStateCognome(cognome);
  };

  const options = [
    { value: "ROSSI Paolo", label: "ROSSI Paolo" },
    { value: "VERDI Giovanni", label: "VERDI Giovanni" },
    { value: "NERI Filippo", label: "NERI Filippo" },
    { value: "BIANCHI Simone", label: "BIANCHI Simone" },
  ];

  return (
    <Select
      className=" w-full rounded-lg text-gray-900  block flex-1 text-sm"
      options={options}
      onChange={handleChange}
      placeholder={"Operatore"}
      value={localState ? { value: localState, label: localState } : null}
    />
  );
};

export default InputSelectOperatore;
