import React, { useEffect, useState } from "react";

const InputTime = (props: {
  thisState: string;
  thisSetState: React.Dispatch<React.SetStateAction<string>>;
  initial?: string;
}) => {
  const { thisSetState, initial } = props;
  const [localState, setLocalState] = useState(initial || "");
  // Verifica se initial è definito e imposta il valore iniziale (INITIAL é IL VALORE UTILIZZATO IN MODIFICA NEL CASO SIA STATO PRECEDENTEMENTE COMPILATO IL CAMPO)

  useEffect(() => {
    if (initial !== undefined) {
      setLocalState(initial);
      thisSetState(initial);
    }
  }, [initial]);

  const handleState = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalState(value);
    thisSetState(value);
  };

  return (
    <form className="mx-auto w-full">
      <div className="flex">
        <input
          type="time"
          id="time"
          className="w-full rounded-lg bg-gray-50 border text-gray-900  block flex-1 text-sm border-gray-300 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
          min="09:00"
          max="18:00"
          required
          value={localState}
          onChange={handleState}
        />
      </div>
    </form>
  );
};

export default InputTime;
/*
    <input
      type="time"
      classNameName="w-full border-2 border-gray-400 rounded-lg pl-1"
      value={localState}
      onChange={handleState}
    />
    */
