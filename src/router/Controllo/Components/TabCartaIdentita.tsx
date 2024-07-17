import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";
import { useState } from "react";
import CartaIdentitaConducente from "./cartaidentita/cartaIdentitaConducente";
import CartaIdentitaPasseggero1 from "./cartaidentita/cartaIdentitaPasseggero1";
import CartaIdentitaPasseggero2 from "./cartaidentita/cartaIdentitaPasseggero2";
import CartaIdentitaPasseggero3 from "./cartaidentita/cartaIdentitaPasseggero3";
import CartaIdentitaPasseggero4 from "./cartaidentita/cartaIdentitaPasseggero4";
import CartaIdentitaPasseggero5 from "./cartaidentita/cartaIdentitaPasseggero5";

const TabCartaIdentita = (data: any) => {
  const datiCataIdentita = data.data;

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
        {datiCataIdentita.N_03_cognome_passeggero_1 &&
        datiCataIdentita.N_04_nome_passeggero_1 ? (
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
        {datiCataIdentita.N_03_cognome_passeggero_2 &&
        datiCataIdentita.N_04_nome_passeggero_2 ? (
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
        {datiCataIdentita.N_03_cognome_passeggero_3 &&
        datiCataIdentita.N_04_nome_passeggero_3 ? (
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
        {datiCataIdentita.N_03_cognome_passeggero_4 &&
        datiCataIdentita.N_04_nome_passeggero_4 ? (
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
        {datiCataIdentita.N_03_cognome_passeggero_5 &&
        datiCataIdentita.N_04_nome_passeggero_5 ? (
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
          <CartaIdentitaConducente data={datiCataIdentita} />
        </TETabsPane>
        <TETabsPane show={fillActive === "tab2"}>
          <CartaIdentitaPasseggero1 data={datiCataIdentita} />
        </TETabsPane>
        <TETabsPane show={fillActive === "tab3"}>
          <CartaIdentitaPasseggero2 data={datiCataIdentita} />
        </TETabsPane>
        <TETabsPane show={fillActive === "tab4"}>
          <CartaIdentitaPasseggero3 data={datiCataIdentita} />
        </TETabsPane>
        <TETabsPane show={fillActive === "tab5"}>
          <CartaIdentitaPasseggero4 data={datiCataIdentita} />
        </TETabsPane>
        <TETabsPane show={fillActive === "tab6"}>
          <CartaIdentitaPasseggero5 data={datiCataIdentita} />
        </TETabsPane>
      </TETabsContent>
    </div>
  );
};
export default TabCartaIdentita;
