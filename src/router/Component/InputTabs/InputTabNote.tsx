import { AddContext } from "../../../Context/AddControlContext";
import { useContext, useEffect, useState } from "react";

interface initialNote {
  A_51a_numero_documento: string;
  D_30_note: string;
}

const InputTabNote = (props: { statoIniziale?: any }) => {
  const initialState: initialNote | undefined = props.statoIniziale;
  const [localState, setLocalState] = useState(initialState?.D_30_note || "");

  useEffect(() => {
    if (initialState?.D_30_note) {
      setLocalState(initialState?.D_30_note);
    }
  }, [initialState]);

  const ControlloMyContext = useContext(AddContext);

  const handleState = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLocalState(e.target.value);
    ControlloMyContext.setA2_TabRig_informazioni_generali_D_30_note(
      e.target.value
    );
  };

  return (
    <div className=" h-full w-full">
      <ul className="space-y-2 flex flex-col w-full">
        <li className="flex flex-col">
          <p className="text-red-500">Note del controllo:</p>
          <textarea
            value={localState ? localState : ""}
            onChange={handleState}
            name="textAreaNote"
            id="1"
            cols={20}
            rows={20}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          ></textarea>
        </li>
      </ul>
    </div>
  );
};
export default InputTabNote;
