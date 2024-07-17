import React, { useEffect, useState } from "react";

const InputCF = (props: {
  thisState: string;
  thisSetState: React.Dispatch<React.SetStateAction<string>>;
  initial?: string;
  placeholder?: string;
}) => {
  // Verifica se initial è definito e imposta il valore iniziale (INITIAL é IL VALORE UTILIZZATO IN MODIFICA NEL CASO SIA STATO PRECEDENTEMENTE COMPILATO IL CAMPO)

  const { thisState, thisSetState, initial, placeholder } = props;
  const [localState, setLocalState] = useState(initial || "");

  useEffect(() => {
    if (initial !== undefined) {
      setLocalState(initial);
      thisSetState(initial);
    }
  }, [initial]);

  const handleState = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase(); // Converte il testo in maiuscolo
    setLocalState(value);

    if (value.length <= 16) {
      thisSetState(value);
    }
  };

  return (
    <div className="flex">
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
        type="text"
        placeholder={placeholder}
        value={localState}
        onChange={handleState}
      />
    </div>
  );
};

export default InputCF;
