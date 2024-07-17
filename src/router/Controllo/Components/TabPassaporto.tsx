import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";
import PatenteConducente from "./patenti/patenteConducente";
import { useState } from "react";
import PassaportoPasseggero1 from "./passaporti/passaportoPasseggero1";
import PassaportoPasseggero2 from "./passaporti/passaportoPasseggero2";
import PassaportoPasseggero3 from "./passaporti/passaportoPasseggero3";
import PassaportoPasseggero4 from "./passaporti/passaportoPasseggero4";
import PassaportoPasseggero5 from "./passaporti/passaportoPasseggero5";
import PassaportoConducente from "./passaporti/passaportoConducente";

const TabPassaporto = (data: ANY) => {
  const datiPassaporto = data.data;

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
        {datiPassaporto.N_05_cognome_passeggero_1 &&
        datiPassaporto.N_06_nome_passeggero_1 ? (
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
        ) : null}{" "}
        {datiPassaporto.N_05_cognome_passeggero_1 &&
        datiPassaporto.N_06_nome_passeggero_1 ? (
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
        ) : null}{" "}
        {datiPassaporto.N_05_cognome_passeggero_1 &&
        datiPassaporto.N_06_nome_passeggero_1 ? (
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
        ) : null}
        {datiPassaporto.N_05_cognome_passeggero_1 &&
        datiPassaporto.N_06_nome_passeggero_1 ? (
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
        ) : null}
        {datiPassaporto.N_05_cognome_passeggero_1 &&
        datiPassaporto.N_06_nome_passeggero_1 ? (
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
        ) : null}
      </TETabs>

      <TETabsContent>
        <TETabsPane show={fillActive === "tab1"}>
          <PassaportoConducente data={datiPassaporto} />
        </TETabsPane>
        <TETabsPane show={fillActive === "tab2"}>
          <PassaportoPasseggero1 data={datiPassaporto} />
        </TETabsPane>
        <TETabsPane show={fillActive === "tab3"}>
          <PassaportoPasseggero2 data={datiPassaporto} />
        </TETabsPane>
        <TETabsPane show={fillActive === "tab4"}>
          <PassaportoPasseggero3 data={datiPassaporto} />
        </TETabsPane>
        <TETabsPane show={fillActive === "tab5"}>
          <PassaportoPasseggero4 data={datiPassaporto} />
        </TETabsPane>
        <TETabsPane show={fillActive === "tab6"}>
          <PassaportoPasseggero5 data={datiPassaporto} />
        </TETabsPane>
      </TETabsContent>
    </div>
  );
};
export default TabPassaporto;
