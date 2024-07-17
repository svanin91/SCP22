import { useEffect, useState } from "react";
import Select from "react-select";

const InputStatoCivile = (props: {
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
    { label: "Nubile/Celibe", value: "Nubile/Celibe" },
    { label: "Coniugato/a", value: "Coniugato/a" },
    { label: "Divorziato/a", value: "Divorziato/a" },
    { label: "Separato/a", value: "Separato/a" },
    { label: "Vedovo/a", value: "Vedovo/a" },
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
      placeholder={"Seleziona stato civile"}
      value={localState ? { value: localState, label: localState } : null}
    />
  );
};
export default InputStatoCivile;
