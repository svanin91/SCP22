import { useNavigate } from "react-router-dom";
import { TabActiveContext } from "../../Context/TabActiveContext";
import { AddContext } from "../../Context/AddControlContext";
import resetContext from "../../Reset_Context/ResetContext";
import { useContext } from "react";

const EsciPopUp = ({ message, onClose, title, rotta }) => {
  const TabActiveMyContext = useContext(TabActiveContext);
  const ControlloMyContext = useContext(AddContext);
  /**
   * questo é un componente che permette la generazione di pop up
   */

  const navigate = useNavigate();

  const confermaUscita = async () => {
    resetContext(ControlloMyContext);
    TabActiveMyContext.setTabActive("tab1");
    navigate(rotta);
  };

  return (
    <div
      className="fixed inset-0 z-10 flex items-center justify-center"
      style={{ userSelect: "none" }}
    >
      <div className="bg-gray-800 bg-opacity-50 fixed inset-0"></div>
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="p-4 md:p-5 text-center">
            <svg
              className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 className="mb-5 text-2xl font-normal text-red-500 dark:text-gray-400">
              Sei sicuro di voler uscire?
            </h3>
            <p className="mb-5 text-base font-normal text-gray-500 dark:text-gray-400">
              Le modifiche non sono salvate e perderai tutte le informazioni
              inserite.
            </p>
            <button
              data-modal-hide="popup-modal"
              type="button"
              onClick={() => confermaUscita()}
              className=" bg-gialloSofitel border-2 border-gialloBordo hover:bg-gialloBordo hover:border-gialloBordo focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
            >
              Confermo
            </button>
            <button
              data-modal-hide="popup-modal"
              type="button"
              onClick={onClose}
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-500 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Annulla
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EsciPopUp;
