import { useEffect, useState } from "react";
import Select from "react-select";

const InputCarburante = (props: {
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
    { value: "Benzina", label: "Benzina" },
    { value: "Benzina/GPL", label: "Benzina/GPL" },
    { value: "Benzina/Elettricità", label: "Benzina/Elettricità" },
    { value: "Metano", label: "Metano" },
    { value: "Elettricità", label: "Elettricità" },
    { value: "Idrogeno", label: "Idrogeno" },
    { value: "Biodiesel", label: "Biodiesel" },
    { value: "Etanolo", label: "Etanolo" },
    { value: "GNC", label: "GNC" },
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
      placeholder={"Seleziona il carburante"}
      value={localState ? { value: localState, label: localState } : null}
    />
  );
};

export default InputCarburante;
