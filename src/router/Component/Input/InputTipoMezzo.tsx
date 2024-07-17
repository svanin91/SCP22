import { useEffect, useState } from "react";
import Select from "react-select";

const InputTipoMezzo = (props: {
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
    { value: "Autovettura", label: "Autovettura" },
    { value: "Autocarro", label: "Autocarro" },
    { value: "Motociclo", label: "Motociclo" },
    { value: "Motocarro", label: "Motocarro" },
    { value: "Autobus", label: "Autobus" },
    { value: "Rimorchio o Semirimorchio", label: "Rimorchio o Semirimorchio" },
    { value: "Quadriciclo Leggero", label: "Quadriciclo Leggero" },
    { value: "Veicolo Agricolo", label: "Veicolo Agricolo" },
    { value: "Veicolo Speciale", label: "Veicolo Speciale" },
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
      placeholder={"Seleziona categoria mezzo"}
      value={localState ? { value: localState, label: localState } : null}
    />
  );
};
export default InputTipoMezzo;
