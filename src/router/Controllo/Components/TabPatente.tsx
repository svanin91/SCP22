import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";
import PatenteConducente from "./patenti/patenteConducente";
import { useState } from "react";
import PatentePasseggero1 from "./patenti/patentePasseggero1";
import PatentePasseggero2 from "./patenti/patentePasseggero2";
import PatentePasseggero3 from "./patenti/patentePasseggero3";
import PatentePasseggero4 from "./patenti/patentePasseggero4";
import PatentePasseggero5 from "./patenti/patentePasseggero5";

const TabPatente = (data: any) => {
  const datiPatente = data.data;

  const [fillActive, setFillActive] = useState("tab1");

  const handleFillClick = (value: string) => {
    if (value === fillActive) {
      return;
    }
    setFillActive(value);
  };

  //funzione di formattazione data per ottenere gg/mm/aaaa

  return (
    <div className="mb-3">
      <TETabs fill>
        <TETabsItem
          onClick={() => handleFillClick("tab1")}
          active={fillActive === "tab1"}
          className={`text-black text-base  hover:text-black ${
            fillActive === "tab1"
              ? "bg-gialloSofitel border-b-2 border-gialloBordo"
              : ""
          }`}
        >
          Conducente
        </TETabsItem>
        {datiPatente.N_02_cognome_passeggero_1 &&
        datiPatente.N_03_nome_passeggero_1 ? (
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
        ) : null}
        {datiPatente.N_02_cognome_passeggero_2 &&
        datiPatente.N_03_nome_passeggero_2 ? (
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
        ) : null}
        {datiPatente.N_02_cognome_passeggero_3 &&
        datiPatente.N_03_nome_passeggero_3 ? (
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
        {datiPatente.N_02_cognome_passeggero_4 &&
        datiPatente.N_03_nome_passeggero_4 ? (
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
        {datiPatente.N_02_cognome_passeggero_5 &&
        datiPatente.N_03_nome_passeggero_5 ? (
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
          <PatenteConducente data={datiPatente} />
        </TETabsPane>
        <TETabsPane show={fillActive === "tab2"}>
          <PatentePasseggero1 data={datiPatente} />
        </TETabsPane>
        <TETabsPane show={fillActive === "tab3"}>
          <PatentePasseggero2 data={datiPatente} />
        </TETabsPane>
        <TETabsPane show={fillActive === "tab4"}>
          <PatentePasseggero3 data={datiPatente} />
        </TETabsPane>
        <TETabsPane show={fillActive === "tab5"}>
          <PatentePasseggero4 data={datiPatente} />
        </TETabsPane>
        <TETabsPane show={fillActive === "tab6"}>
          <PatentePasseggero5 data={datiPatente} />
        </TETabsPane>
      </TETabsContent>
    </div>
  );
};
export default TabPatente;
