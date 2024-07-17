import { useEffect, useState } from "react";
import Select from "react-select";

const InputDestinazioneUso = (props: {
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
    { value: "Privato", label: "Privato" },
    { value: "Commerciale", label: "Commerciale" },
    { value: "Promiscuo", label: "Promiscuo" },
    { value: "Noleggio", label: "Noleggio" },
    { value: "Taxi", label: "Taxi" },
    { value: "Autonoleggio", label: "Autonoleggio" },
    { value: "Trasporto pubblico", label: "Trasporto pubblico" },
    { value: "Scuola guida", label: "Scuola guida" },
    { value: "Uso speciale", label: "Uso speciale" },
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
      placeholder={"Destinazione d'uso"}
      value={localState ? { value: localState, label: localState } : null}
    />
  );
};

export default InputDestinazioneUso;
