import React, { useEffect, useState } from "react";
import Select from "react-select";

const InputSelectRegione = (props: {
  thisState: string;
  thisSetState: React.Dispatch<React.SetStateAction<string>>;
  initial?: string;
}) => {
  const { thisState, thisSetState, initial } = props;
  const [localState, setLocalState] = useState(initial || "");
  // Verifica se initial è definito e imposta il valore iniziale (INITIAL é IL VALORE UTILIZZATO IN MODIFICA NEL CASO SIA STATO PRECEDENTEMENTE COMPILATO IL CAMPO)

  useEffect(() => {
    if (initial !== undefined) {
      setLocalState(initial);
      thisSetState(initial);
    }
  }, [initial, thisSetState]);

  const options = [
    { value: "Abruzzo", label: "Abruzzo" },
    { value: "Basilicata", label: "Basilicata" },
    { value: "Calabria", label: "Calabria" },
    { value: "Campania", label: "Campania" },
    { value: "Emilia Romagna", label: "Emilia Romagna" },
    { value: "Friuli Venezia Giulia", label: "Friuli Venezia Giulia" },
    { value: "Lazio", label: "Lazio" },
    { value: "Liguria", label: "Liguria" },
    { value: "Lombardia", label: "Lombardia" },
    { value: "Marche", label: "Marche" },
    { value: "Molise", label: "Molise" },
    { value: "Piemonte", label: "Piemonte" },
    { value: "Puglia", label: "Puglia" },
    { value: "Sardegna", label: "Sardegna" },
    { value: "Sicilia", label: "Sicilia" },
    { value: "Toscana", label: "Toscana" },
    { value: "Trentino Alto Adige", label: "Trentino Alto Adige" },
    { value: "Umbria", label: "Umbria" },
    { value: "Val d'Aosta", label: "Val d'Aosta" },
    { value: "Veneto", label: "Veneto" },
  ];

  const handleChange = (e: any) => {
    const selectedValue = e.value;
    setLocalState(selectedValue);
    thisSetState(selectedValue);
  };

  return (
    <Select
      className=" w-full rounded-lg text-gray-900  block flex-1 text-sm"
      options={options}
      onChange={handleChange}
      placeholder={"Regione"}
      value={localState ? { value: localState, label: localState } : null}
    />
  );
};

export default InputSelectRegione;
