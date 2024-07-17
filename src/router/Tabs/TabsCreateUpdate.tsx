import { useContext } from "react";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import InputTabCartaCircolazione from "../Component/InputTabs/InputTabCartaCircolazione";
import InputTabsPatente from "../Component/InputTabs/InputTabPatente";
import InputTabCartaIdentita from "../Component/InputTabs/InputTabCartaIdentita";
import InputTabVerificheEffettuate from "../Component/InputTabs/InputTabVerificheEffettuate";
import InputTabNormeViolate from "../Component/InputTabs/InputTabNormeViolate";
import InputTabFoto from "../Component/InputTabs/InputTabFoto";
import InputTabNote from "../Component/InputTabs/InputTabNote";
import InputTabPassaporto from "../Component/InputTabs/InputTabPassaporto";
import InputTabCertificatoAssicurazione from "../Component/InputTabs/InputTabCertificatoAssicurazione";
import { TabActiveContext } from "../../Context/TabActiveContext";

const TabsCreateUpdate = (props: { statoIniziale?: any | undefined }) => {
  // questo componente gestisce le tabs sia in fare di creazioen che di modifica

  const TabActiveMyContext = useContext(TabActiveContext);

  return (
    <div className="grid grid-cols-7">
      <div className="col-span-1 flex items-start pl-3">
        <TETabs vertical className="w-full">
          <TETabsItem
            active={TabActiveMyContext.tabActive === "tab1"}
            className={`text-black text-base hover:text-black ${
              TabActiveMyContext.tabActive === "tab1"
                ? "bg-gialloSofitel border-b-2 border-gialloBordo"
                : ""
            }`}
          >
            Carta di circolazione
          </TETabsItem>
          <TETabsItem
            active={TabActiveMyContext.tabActive === "tab2"}
            className={`text-black text-base hover:text-black ${
              TabActiveMyContext.tabActive === "tab2"
                ? "bg-gialloSofitel border-b-2 border-gialloBordo"
                : ""
            }`}
          >
            Patente
          </TETabsItem>
          <TETabsItem
            active={TabActiveMyContext.tabActive === "tab3"}
            className={`text-black text-base hover:text-black ${
              TabActiveMyContext.tabActive === "tab3"
                ? "bg-gialloSofitel border-b-2 border-gialloBordo"
                : ""
            }`}
          >
            Carta d'identità
          </TETabsItem>
          <TETabsItem
            active={TabActiveMyContext.tabActive === "tab4"}
            className={`text-black text-base hover:text-black ${
              TabActiveMyContext.tabActive === "tab4"
                ? "bg-gialloSofitel border-b-2 border-gialloBordo"
                : ""
            }`}
          >
            Passaporto
          </TETabsItem>
          <TETabsItem
            active={TabActiveMyContext.tabActive === "tab5"}
            className={`text-black text-base hover:text-black ${
              TabActiveMyContext.tabActive === "tab5"
                ? "bg-gialloSofitel border-b-2 border-gialloBordo"
                : ""
            }`}
          >
            Certificato assicurazione
          </TETabsItem>
          <TETabsItem
            active={TabActiveMyContext.tabActive === "tab6"}
            className={`text-black text-base hover:text-black ${
              TabActiveMyContext.tabActive === "tab6"
                ? "bg-gialloSofitel border-b-2 border-gialloBordo"
                : ""
            }`}
          >
            Verifiche effettuate
          </TETabsItem>
          <TETabsItem
            active={TabActiveMyContext.tabActive === "tab7"}
            className={`text-black text-base hover:text-black ${
              TabActiveMyContext.tabActive === "tab7"
                ? "bg-gialloSofitel border-b-2 border-gialloBordo"
                : ""
            }`}
          >
            Norme violate
          </TETabsItem>
          <TETabsItem
            active={TabActiveMyContext.tabActive === "tab8"}
            className={`text-black text-base hover:text-black ${
              TabActiveMyContext.tabActive === "tab8"
                ? "bg-gialloSofitel border-b-2 border-gialloBordo"
                : ""
            }`}
          >
            Note
          </TETabsItem>
          <TETabsItem
            active={TabActiveMyContext.tabActive === "tab9"}
            className={`text-black text-base hover:text-black ${
              TabActiveMyContext.tabActive === "tab9"
                ? "bg-gialloSofitel border-b-2 border-gialloBordo"
                : ""
            }`}
          >
            Foto
          </TETabsItem>
        </TETabs>
      </div>
      <div className="col-span-6">
        <TETabsContent>
          <TETabsPane show={TabActiveMyContext.tabActive === "tab1"}>
            <InputTabCartaCircolazione statoIniziale={props.statoIniziale} />
          </TETabsPane>
          <TETabsPane show={TabActiveMyContext.tabActive === "tab2"}>
            <InputTabsPatente statoIniziale={props.statoIniziale} />
          </TETabsPane>
          <TETabsPane show={TabActiveMyContext.tabActive === "tab3"}>
            <InputTabCartaIdentita statoIniziale={props.statoIniziale} />
          </TETabsPane>
          <TETabsPane show={TabActiveMyContext.tabActive === "tab4"}>
            <InputTabPassaporto statoIniziale={props.statoIniziale} />
          </TETabsPane>
          <TETabsPane show={TabActiveMyContext.tabActive === "tab5"}>
            <InputTabCertificatoAssicurazione
              statoIniziale={props.statoIniziale}
            />
          </TETabsPane>
          <TETabsPane show={TabActiveMyContext.tabActive === "tab6"}>
            <InputTabVerificheEffettuate statoIniziale={props.statoIniziale} />
          </TETabsPane>
          <TETabsPane show={TabActiveMyContext.tabActive === "tab7"}>
            <InputTabNormeViolate statoIniziale={props.statoIniziale} />
          </TETabsPane>
          <TETabsPane show={TabActiveMyContext.tabActive === "tab8"}>
            <InputTabNote statoIniziale={props.statoIniziale} />
          </TETabsPane>
          <TETabsPane show={TabActiveMyContext.tabActive === "tab9"}>
            <InputTabFoto statoIniziale={props.statoIniziale} />
          </TETabsPane>
        </TETabsContent>
      </div>
    </div>
  );
};
export default TabsCreateUpdate;
