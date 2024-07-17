import { useEffect, useState } from "react";
import Select from "react-select";

const InputClasseAmbientale = (props: {
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
    {
      value: "Euro 1: veicoli ad elevato impatto ambientale",
      label: "Euro 1: veicoli ad elevato impatto ambientale",
    },
    {
      value: "Euro 2: veicoli ad impatto ambientale moderato",
      label: "Euro 2: veicoli ad impatto ambientale moderato",
    },
    {
      value: "Euro 3: veicoli a basso impatto ambientale",
      label: "Euro 3: veicoli a basso impatto ambientale",
    },
    {
      value: "Euro 4: veicoli a ridotto impatto ambientale",
      label: "Euro 4: veicoli a ridotto impatto ambientale",
    },
    {
      value: "Euro 5: veicoli a impatto ambientale molto basso",
      label: "Euro 5: veicoli a impatto ambientale molto basso",
    },
    {
      value: "Euro 6: veicoli a impatto ambientale trascurabile",
      label: "Euro 6: veicoli a impatto ambientale trascurabile",
    },
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
      placeholder={"Classe ambientale"}
      value={localState ? { value: localState, label: localState } : null}
    />
  );
};

export default InputClasseAmbientale;
