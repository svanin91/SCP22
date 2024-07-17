import { useContext, useState } from "react";
import { AddContext } from "../../../Context/AddControlContext";
import InputText from "../Input/InputText";
import InputDate from "../Input/InputData";
import InputSesso from "../Input/InputSesso";
import CheckBoxConducente from "../CheckBox/CheckBoxConducente";
import InputLuogoNascita from "../Input/InputLuogoDiNascita";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";
import InputPassaportoConducente from "./passaporti/inputPassaportoConducente";
import InputPassaportoPasseggero1 from "./passaporti/inputPassaportoPasseggero1";
import InputPassaportoPasseggero2 from "./passaporti/inputPassaportoPasseggero2";
import InputPassaportoPasseggero3 from "./passaporti/inputPassaportoPasseggero3";
import InputPassaportoPasseggero4 from "./passaporti/inputPassaportoPasseggero4";
import InputPassaportoPasseggero5 from "./passaporti/inputPassaportopasseggero5";

const InputTabPassaporto = (props: { statoIniziale?: any }) => {
  const initialState: any =
    props.statoIniziale?.A3_04_TabRig_Passaporto.fieldData;
  const [fillActive, setFillActive] = useState("tab1");

  const handleFillClick = (value: string) => {
    if (value === fillActive) {
      return;
    }
    setFillActive(value);
  };

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
          <InputPassaportoConducente statoIniziale={initialState} />
        </TETabsPane>
        <TETabsPane show={fillActive === "tab2"}>
          <InputPassaportoPasseggero1 statoIniziale={initialState} />
        </TETabsPane>
        <TETabsPane show={fillActive === "tab3"}>
          <InputPassaportoPasseggero2 statoIniziale={initialState} />
        </TETabsPane>
        <TETabsPane show={fillActive === "tab4"}>
          <InputPassaportoPasseggero3 statoIniziale={initialState} />
        </TETabsPane>
        <TETabsPane show={fillActive === "tab5"}>
          <InputPassaportoPasseggero4 statoIniziale={initialState} />
        </TETabsPane>
        <TETabsPane show={fillActive === "tab6"}>
          <InputPassaportoPasseggero5 statoIniziale={initialState} />
        </TETabsPane>
      </TETabsContent>
    </div>
  );
};
export default InputTabPassaporto;
