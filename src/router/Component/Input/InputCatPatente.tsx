import { useEffect, useState } from "react";
import Select, { OptionTypeBase } from "react-select";

const InputCatPatente = (props: {
  thisState: string[];
  thisSetState: React.Dispatch<React.SetStateAction<string[]>>;
  initial?: string;
  addCatPatente: (catPatente: string) => void;
}) => {
  // Verifica se initial è definito e imposta il valore iniziale (INITIAL é IL VALORE UTILIZZATO IN MODIFICA NEL CASO SIA STATO PRECEDENTEMENTE COMPILATO IL CAMPO)

  const thisState = props.thisState;
  const thisSetState = props.thisSetState;
  const initial = props.initial;
  const addCatPatente = props.addCatPatente;

  const options = [
    { value: "AM", label: "AM" },
    { value: "A1", label: "A1" },
    { value: "A2", label: "A2" },
    { value: "A", label: "A" },
    { value: "B1", label: "B1" },
    { value: "B", label: "B" },
    { value: "C1", label: "C1" },
    { value: "C", label: "C" },
    { value: "D1", label: "D1" },
    { value: "D", label: "D" },
    { value: "BE", label: "BE" },
    { value: "C1E", label: "C1E" },
    { value: "CE", label: "CE" },
    { value: "D1E", label: "D1E" },
    { value: "DE", label: "DE" },
  ];

  const handleChange = (e: any) => {
    const catPatente = e.value;
    thisSetState([...thisState, catPatente]);
    addCatPatente(catPatente);
  };

  return (
    <div className="flex flex-col">
      <Select
        className=" w-full rounded-lg text-gray-900  block flex-1 text-sm"
        options={options}
        onChange={handleChange}
        menuPlacement="auto"
        placeholder={"Seleziona Categoria"}
      />
    </div>
  );
};
export default InputCatPatente;
