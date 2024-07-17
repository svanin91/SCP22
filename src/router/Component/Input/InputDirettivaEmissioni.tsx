import { useEffect, useState } from "react";
import Select from "react-select";

const InputDirettivaEmissioni = (props: {
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
    { value: "Euro 1", label: "Euro 1" },
    { value: "Euro 2", label: "Euro 2" },
    { value: "Euro 3", label: "Euro 3" },
    { value: "Euro 4", label: "Euro 4" },
    { value: "Euro 5", label: "Euro 5" },
    { value: "Euro 6", label: "Euro 6" },
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
      placeholder={"Direttiva emissioni"}
      value={localState ? { value: localState, label: localState } : null}
    />
  );
};

export default InputDirettivaEmissioni;
