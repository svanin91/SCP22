import { useState } from "react";

import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";
import InputPatenteConducente from "./patenti/inputPatenteConducente";
import InputPatentePasseggero1 from "./patenti/inputPatentePasseggero1";
import InputPatentePasseggero2 from "./patenti/inputPatentePasseggero2";
import InputPatentePasseggero3 from "./patenti/inputPatentePasseggero3";
import InputPatentePasseggero4 from "./patenti/inputPatentePasseggero4";
import InputPatentePasseggero5 from "./patenti/inputPatentePasseggero5";

const InputTabsPatente = (props: { statoIniziale?: any }) => {
  const initialState: any =
    props.statoIniziale?.A3_02_TabRig_PatenteGuida.fieldData;
  const [fillActive, setFillActive] = useState("tab1");

  const handleFillClick = (value: string) => {
    if (value === fillActive) {
      return;
    }
    setFillActive(value);
  };

  // Aggiungi uno stato per controllare se l'array è già stato impostato
  /*
  const catPatenteString = initialState?.N_10_categoria_patente;
  const catPatenteArray = useMemo(
    () => catPatenteString?.split(",").map((item: string) => item.trim()) || [],
    [catPatenteString]
  );
  useEffect(() => {
    if (catPatenteArray !== undefined) {
      // Filtra le stringhe vuote prima di aggiornare il contesto
      const filteredCatPatenteArray = catPatenteArray.filter(
        (item) => item !== ""
      );

      ControlloMyContext.setA3_02_TabRig_PatenteGuida_N_10_categoria_patente_conducente(
        [...(filteredCatPatenteArray ?? [])]
      );
    }
  }, [catPatenteArray]);

  const renderCatPatente =
    ControlloMyContext
      .A3_02_TabRig_PatenteGuida_N_10_categoria_patente_conducente.length > 0
      ? ControlloMyContext.A3_02_TabRig_PatenteGuida_N_10_categoria_patente_conducente.map(
          (item: string, index: number) => (
            <div key={index} className="flex items-center p-1">
              <p> - {item}</p>
              <p
                className="text-red-400 text-xs bg-gray-300 p-1 ml-2 rounded-md hover:bg-white"
                onClick={() => deleteCatPatente(index)}
              >
                Elimina
              </p>
            </div>
          )
        )
      : null;

  const addCatPatente = (catPatente: string) => {
    const updatedCatPatente = [
      ...(ControlloMyContext.A3_02_TabRig_PatenteGuida_N_10_categoria_patente_conducente ||
        []),
      catPatente,
    ];
    ControlloMyContext.setA3_02_TabRig_PatenteGuida_N_10_categoria_patente_conducente(
      updatedCatPatente
    );
  };

  const deleteCatPatente = (index: number) => {
    const updatedCatPatente = [
      ...(ControlloMyContext.A3_02_TabRig_PatenteGuida_N_10_categoria_patente_conducente ||
        []),
    ];
    updatedCatPatente.splice(index, 1);
    ControlloMyContext.setA3_02_TabRig_PatenteGuida_N_10_categoria_patente_conducente(
      updatedCatPatente
    );
  };
  */

  return (
    <div className="mb-3">
      <TETabs fill>
        <TETabsItem
          onClick={() => handleFillClick("tab1")}
          active={fillActive === "tab1"}
          className={`text-black text-base hover:text-black ${
            fillActive === "tab1"
              ? "bg-gialloSofitel border-b-2 border-gialloBordo"
              : ""
          }`}
        >
          Conducente
        </TETabsItem>
        <TETabsItem
          onClick={() => handleFillClick("tab2")}
          active={fillActive === "tab2"}
          className={`text-black text-base hover:text-black ${
            fillActive === "tab2"
              ? "bg-gialloSofitel border-b-2 border-gialloBordo"
              : ""
          }`}
        >
          Passeggero 1
        </TETabsItem>
        <TETabsItem
          onClick={() => handleFillClick("tab3")}
          active={fillActive === "tab3"}
          className={`text-black text-base hover:text-black ${
            fillActive === "tab3"
              ? "bg-gialloSofitel border-b-2 border-gialloBordo"
              : ""
          }`}
        >
          Passeggero 2
        </TETabsItem>
        <TETabsItem
          onClick={() => handleFillClick("tab4")}
          active={fillActive === "tab4"}
          className={`text-black text-base hover:text-black ${
            fillActive === "tab4"
              ? "bg-gialloSofitel border-b-2 border-gialloBordo"
              : ""
          }`}
        >
          Passeggero 3
        </TETabsItem>
        <TETabsItem
          onClick={() => handleFillClick("tab5")}
          active={fillActive === "tab5"}
          className={`text-black text-base hover:text-black ${
            fillActive === "tab5"
              ? "bg-gialloSofitel border-b-2 border-gialloBordo"
              : ""
          }`}
        >
          Passeggero 4
        </TETabsItem>
        <TETabsItem
          onClick={() => handleFillClick("tab6")}
          active={fillActive === "tab6"}
          className={`text-black text-base hover:text-black ${
            fillActive === "tab6"
              ? "bg-gialloSofitel border-b-2 border-gialloBordo"
              : ""
          }`}
        >
          Passeggero 5
        </TETabsItem>
      </TETabs>

      <TETabsContent>
        <TETabsPane show={fillActive === "tab1"}>
          <InputPatenteConducente statoIniziale={initialState} />
        </TETabsPane>
        <TETabsPane show={fillActive === "tab2"}>
          <InputPatentePasseggero1 statoIniziale={initialState} />
        </TETabsPane>
        <TETabsPane show={fillActive === "tab3"}>
          <InputPatentePasseggero2 statoIniziale={initialState} />
        </TETabsPane>
        <TETabsPane show={fillActive === "tab4"}>
          <InputPatentePasseggero3 statoIniziale={initialState} />
        </TETabsPane>
        <TETabsPane show={fillActive === "tab5"}>
          <InputPatentePasseggero4 statoIniziale={initialState} />
        </TETabsPane>
        <TETabsPane show={fillActive === "tab6"}>
          <InputPatentePasseggero5 statoIniziale={initialState} />
        </TETabsPane>
      </TETabsContent>
    </div>
  );
};
export default InputTabsPatente;
