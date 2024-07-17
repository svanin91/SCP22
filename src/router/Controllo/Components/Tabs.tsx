import { useState } from "react";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import TabCartaCircolazione from "./TabCartaCircolzione";
import TabPatente from "./TabPatente";
import TabCartaIdentita from "./TabCartaIdentita";
import TabVerificheEffettuate from "./TabVerificheEffettuate";
import TabNormeViolate from "./TabNormeViolate";
import TabNote from "./TabNote";
import TabFoto from "./TabFoto";
import TabPassaporto from "./TabPassaporto";
import TabCertificatoAssicurazione from "./TabCertificatoAssicurazione";

const Tabs = ({ data }: any) => {
  const [verticalActive, setVerticalActive] = useState("tab1");

  const dataTabs = data;

  // questo componente serve da menu per visualizzare diversi tipi di contenuto

  const handleVerticalClick = (value: string) => {
    if (value === verticalActive) {
      return;
    }
    setVerticalActive(value);
  };

  return (
    <div className="flex items-start  h-full pb-4">
      <TETabs vertical className="w-2/12">
        <TETabsItem
          onClick={() => handleVerticalClick("tab1")}
          active={verticalActive === "tab1"}
          className={`text-black text-base hover:text-black  ${
            verticalActive === "tab1"
              ? "bg-gialloSofitel border-b-2 border-gialloBordo"
              : ""
          }`}
        >
          Carta di circolazione
        </TETabsItem>
        <TETabsItem
          onClick={() => handleVerticalClick("tab2")}
          active={verticalActive === "tab2"}
          className={`text-black text-base hover:text-black  ${
            verticalActive === "tab2"
              ? "bg-gialloSofitel border-b-2 border-gialloBordo"
              : ""
          }`}
        >
          Patente
        </TETabsItem>
        <TETabsItem
          onClick={() => handleVerticalClick("tab3")}
          active={verticalActive === "tab3"}
          className={`text-black text-base hover:text-black ${
            verticalActive === "tab3"
              ? "bg-gialloSofitel border-b-2 border-gialloBordo"
              : ""
          }`}
        >
          Carta d'identità
        </TETabsItem>
        <TETabsItem
          onClick={() => handleVerticalClick("tab4")}
          active={verticalActive === "tab4"}
          className={`text-black text-base hover:text-black  ${
            verticalActive === "tab4"
              ? "bg-gialloSofitel border-b-2 border-gialloBordo"
              : ""
          }`}
        >
          Passaporto
        </TETabsItem>
        <TETabsItem
          onClick={() => handleVerticalClick("tab5")}
          active={verticalActive === "tab5"}
          className={`text-black text-base hover:text-black  ${
            verticalActive === "tab5"
              ? "bg-gialloSofitel border-b-2 border-gialloBordo"
              : ""
          }`}
        >
          Certificato assicurazione
        </TETabsItem>
        <TETabsItem
          onClick={() => handleVerticalClick("tab6")}
          active={verticalActive === "tab6"}
          className={`text-black text-base hover:text-black  ${
            verticalActive === "tab6"
              ? "bg-gialloSofitel border-b-2 border-gialloBordo"
              : ""
          }`}
        >
          Verifiche effettuate
        </TETabsItem>
        <TETabsItem
          onClick={() => handleVerticalClick("tab7")}
          active={verticalActive === "tab7"}
          className={`text-black text-base hover:text-black  ${
            verticalActive === "tab7"
              ? "bg-gialloSofitel border-b-2 border-gialloBordo"
              : ""
          }`}
        >
          Norme violate
        </TETabsItem>
        <TETabsItem
          onClick={() => handleVerticalClick("tab8")}
          active={verticalActive === "tab8"}
          className={`text-black text-base hover:text-black ${
            verticalActive === "tab8"
              ? "bg-gialloSofitel border-b-2 border-gialloBordo"
              : ""
          }`}
        >
          Note
        </TETabsItem>
        <TETabsItem
          onClick={() => handleVerticalClick("tab9")}
          active={verticalActive === "tab9"}
          className={`text-black text-base  hover:text-black ${
            verticalActive === "tab9"
              ? "bg-gialloSofitel border-b-2 border-gialloBordo"
              : ""
          }`}
        >
          Foto
        </TETabsItem>
      </TETabs>

      <TETabsContent className=" h-full w-full ">
        <TETabsPane className=" h-full" show={verticalActive === "tab1"}>
          <TabCartaCircolazione
            data={dataTabs.A3_05_TabRig_CartaCircolazione.fieldData}
          />
        </TETabsPane>
        <TETabsPane show={verticalActive === "tab2"}>
          <TabPatente data={dataTabs.A3_02_TabRig_PatenteGuida.fieldData} />
        </TETabsPane>
        <TETabsPane show={verticalActive === "tab3"}>
          <TabCartaIdentita
            data={dataTabs.A3_03_TabRig_CartaIdentita.fieldData}
          />
        </TETabsPane>
        <TETabsPane show={verticalActive === "tab4"}>
          <TabPassaporto data={dataTabs.A3_04_TabRig_Passaporto.fieldData} />
        </TETabsPane>
        <TETabsPane show={verticalActive === "tab5"}>
          <TabCertificatoAssicurazione
            data={dataTabs.A3_06_TabRig_CertificatoAssicurazione.fieldData}
          />
        </TETabsPane>
        <TETabsPane show={verticalActive === "tab6"}>
          <TabVerificheEffettuate
            data={dataTabs.A2_TabRig_informazioni_generali.fieldData}
          />
        </TETabsPane>
        <TETabsPane show={verticalActive === "tab7"}>
          <TabNormeViolate
            data={dataTabs.A2_TabRig_informazioni_generali.fieldData}
          />
        </TETabsPane>
        <TETabsPane show={verticalActive === "tab8"}>
          <TabNote data={dataTabs.A2_TabRig_informazioni_generali.fieldData} />
        </TETabsPane>
        <TETabsPane show={verticalActive === "tab9"}>
          <TabFoto data={dataTabs.A4_01_TabRig_Immagini.fieldData} />
        </TETabsPane>
      </TETabsContent>
    </div>
  );
};
export default Tabs;
