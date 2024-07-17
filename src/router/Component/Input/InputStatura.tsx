import { useEffect, useState } from "react";
import Select from "react-select";

const InputStatura = (props: {
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

  const arrayAltezze = [];
  const options: { label: string; value: string }[] = [];

  for (let index = 50; index <= 220; index++) {
    arrayAltezze.push(index.toString());
  }
  arrayAltezze.forEach((numero) =>
    options.push({ label: numero + " cm", value: numero })
  );

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
      placeholder={"Statura"}
      value={localState ? { value: localState, label: localState } : null}
    />
  );
};
export default InputStatura;
