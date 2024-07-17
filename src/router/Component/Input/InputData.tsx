import { useEffect, useRef, useCallback, useState } from "react";

const InputDate = (props: {
  thisState: string;
  thisSetState: React.Dispatch<React.SetStateAction<string | undefined>>;
  initial?: string | undefined;
}) => {
  const { thisState, thisSetState, initial } = props;

  const [inputValue, setInputValue] = useState<string | undefined>(initial);

  const initialRef = useRef<string | undefined>(initial);
  // Verifica se initial è definito e imposta il valore iniziale (INITIAL é IL VALORE UTILIZZATO IN MODIFICA NEL CASO SIA STATO PRECEDENTEMENTE COMPILATO IL CAMPO)

  useEffect(() => {
    if (initialRef.current !== undefined) {
      initialRef.current = initial;
      thisSetState(initialRef.current);
      setInputValue(initial);
    }
  }, [initial, thisSetState]);

  const handleState = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (value === "" || undefined) {
        thisSetState("");
        setInputValue("");
      } else {
        const [year, month, day] = value.split("-");
        const formattedDate = `${day}/${month}/${year}`;
        thisSetState(formattedDate);
        setInputValue(value);
      }
    },
    [thisSetState]
  );

  return (
    <input
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
      type="date"
      value={inputValue || ""}
      onChange={handleState}
    />
  );
};

export default InputDate;
