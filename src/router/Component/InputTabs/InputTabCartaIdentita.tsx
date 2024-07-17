import { AddContext } from "../../../Context/AddControlContext";
import { useContext, useState } from "react";
import InputColoreOcchi from "../Input/InputColoreOcchi";
import InputDate from "../Input/InputData";
import InputStatoCivile from "../Input/InputStatoCivile";
import InputStatura from "../Input/InputStatura";
import InputText from "../Input/InputText";
import InputSesso from "../Input/InputSesso";
import InputCF from "../Input/InputCF";
import InputLuogoNascita from "../Input/InputLuogoDiNascita";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";
import CartaIdentitaConducente from "./cartaIdentita/cartaIdentitaConducente";
import CartaIdentitaPasseggero1 from "./cartaIdentita/cartaIdentitaPasseggero1";
import CartaIdentitaPasseggero2 from "./cartaIdentita/cartaidentitaPasseggero2";
import CartaIdentitaPasseggero3 from "./cartaIdentita/cartaidentitaPasseggero3";
import CartaIdentitaPasseggero4 from "./cartaIdentita/cartaIdentitaPasseggero4";
import CartaIdentitaPasseggero5 from "./cartaIdentita/cartaIdentitaPasseggero5";

/*
interface CartaIdentitaInitial {
  A_51a_numero_documento: string;
  N_01_conducente: number;
  N_02_comune_ufficio_emettitore: string;
  N_03_cognome: string;
  N_04_nome: string;
  N_05_data_nascita: string;
  N_06_luogo_nascita: string;
  N_08_sesso: string;
  N_09_statura: string;
  N_10_occhi: string;
  N_11_cittadinanza: string;
  N_12_codice_fiscale: string;
  N_13_residenza: string;
  N_14_professione: string;
  N_15_stato_civile: string;
  N_16_eventuale_non_validita_per_espatrio: string;
  N_17_nome_cognome_padre_nel_caso_minore: string;
  N_18_estremi_atto_nascita: string;
  N_19_comune_di_iscrizione_AIRE: string;
  N_20_numero_documento: string;
  N_21_data_emissione_documento: string;
  N_22_data_scadenza_documento: string;
  N_23_nome_cognome_madre_nel_caso_minore: string;
  id_record: number;
}
*/

const InputTabCartaIdentita = (props: { statoIniziale?: any }) => {
  const initialState: any =
    props.statoIniziale?.A3_03_TabRig_CartaIdentita.fieldData;

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
          <CartaIdentitaConducente statoIniziale={initialState} />
        </TETabsPane>
        <TETabsPane show={fillActive === "tab2"}>
          <CartaIdentitaPasseggero1 statoIniziale={initialState} />
        </TETabsPane>
        <TETabsPane show={fillActive === "tab3"}>
          <CartaIdentitaPasseggero2 statoIniziale={initialState} />
        </TETabsPane>
        <TETabsPane show={fillActive === "tab4"}>
          <CartaIdentitaPasseggero3 statoIniziale={initialState} />
        </TETabsPane>
        <TETabsPane show={fillActive === "tab5"}>
          <CartaIdentitaPasseggero4 statoIniziale={initialState} />
        </TETabsPane>
        <TETabsPane show={fillActive === "tab6"}>
          <CartaIdentitaPasseggero5 statoIniziale={initialState} />
        </TETabsPane>
      </TETabsContent>
    </div>
  );
};
export default InputTabCartaIdentita;
/*
<div className="h-full w-full">
      <ul className="space-y-4 flex flex-col w-4/5">
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">
            Comune o Ufficio Consolare emettitore:
          </p>
          <InputText
            initial={initialState?.N_02_comune_ufficio_emettitore}
            thisState={
              ControlloMyContext.A3_03_TabRig_CartaIdentita_N_02_comune_ufficio_emettitore_conducente
            }
            thisSetState={
              ControlloMyContext.setA3_03_TabRig_CartaIdentita_N_02_comune_ufficio_emettitore_conducente
            }
            placeholder="Comune o ufficio emettitore"
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Nome e cognome:</p>
          <div className="grid grid-cols-2 gap-10 items-center">
            <InputText
              initial={initialState?.N_04_nome}
              thisState={
                ControlloMyContext.A3_03_TabRig_CartaIdentita_N_04_nome_conducente
              }
              thisSetState={
                ControlloMyContext.setA3_03_TabRig_CartaIdentita_N_04_nome_conducente
              }
              placeholder="Nome"
            />
            <InputText
              initial={initialState?.N_03_cognome}
              thisState={
                ControlloMyContext.A3_03_TabRig_CartaIdentita_N_03_cognome_conducente
              }
              thisSetState={
                ControlloMyContext.setA3_03_TabRig_CartaIdentita_N_03_cognome_conducente
              }
              placeholder="Cognome"
            />
          </div>
        </li>

        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Data e luogo di nascita:</p>
          <div className="grid grid-cols-2 gap-10 items-center">
            <InputDate
              initial={initialState?.N_05_data_nascita}
              thisState={
                ControlloMyContext.A3_03_TabRig_CartaIdentita_N_05_data_nascita_conducente
              }
              thisSetState={
                ControlloMyContext.setA3_03_TabRig_CartaIdentita_N_05_data_nascita_conducente
              }
            />
            <InputLuogoNascita
              initial={initialState?.N_06_luogo_nascita}
              thisState={
                ControlloMyContext.A3_03_TabRig_CartaIdentita_N_06_luogo_nascita_conducente
              }
              thisSetState={
                ControlloMyContext.setA3_03_TabRig_CartaIdentita_N_06_luogo_nascita_conducente
              }
            />
          </div>
        </li>

        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Sesso, statura e occhi:</p>
          <div className="grid grid-cols-3 gap-10 items-center">
            <InputSesso
              initial={initialState?.N_08_sesso}
              thisState={
                ControlloMyContext.A3_03_TabRig_CartaIdentita_N_08_sesso_conducente
              }
              thisSetState={
                ControlloMyContext.setA3_03_TabRig_CartaIdentita_N_08_sesso_conducente
              }
            />
            <InputStatura
              initial={initialState?.N_09_statura}
              thisState={
                ControlloMyContext.A3_03_TabRig_CartaIdentita_N_09_statura_conducente
              }
              thisSetState={
                ControlloMyContext.setA3_03_TabRig_CartaIdentita_N_09_statura_conducente
              }
            />
            <InputColoreOcchi
              initial={initialState?.N_10_occhi}
              thisState={
                ControlloMyContext.A3_03_TabRig_CartaIdentita_N_10_occhi_conducente
              }
              thisSetState={
                ControlloMyContext.setA3_03_TabRig_CartaIdentita_N_10_occhi_conducente
              }
            />
          </div>
        </li>

        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Cittadinanza e codice fiscale:</p>
          <div className="grid grid-cols-2 gap-10 items-center">
            <InputText
              initial={initialState?.N_11_cittadinanza}
              thisState={
                ControlloMyContext.A3_03_TabRig_CartaIdentita_N_11_cittadinanza_conducente
              }
              thisSetState={
                ControlloMyContext.setA3_03_TabRig_CartaIdentita_N_11_cittadinanza_conducente
              }
              placeholder="Cittadinanza"
            />
            <InputCF
              initial={initialState?.N_12_codice_fiscale}
              thisState={
                ControlloMyContext.A3_03_TabRig_CartaIdentita_N_12_codice_fiscale_conducente
              }
              thisSetState={
                ControlloMyContext.setA3_03_TabRig_CartaIdentita_N_12_codice_fiscale_conducente
              }
              placeholder="Codice fiscale"
            />
          </div>
        </li>

        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Residenza e professione:</p>
          <div className="grid grid-cols-2 gap-10 items-center">
            <InputText
              initial={initialState?.N_13_residenza}
              thisState={
                ControlloMyContext.A3_03_TabRig_CartaIdentita_N_13_residenza_conducente
              }
              thisSetState={
                ControlloMyContext.setA3_03_TabRig_CartaIdentita_N_13_residenza_conducente
              }
              placeholder="Residenza"
            />
            <InputText
              initial={initialState?.N_14_professione}
              thisState={
                ControlloMyContext.A3_03_TabRig_CartaIdentita_N_14_professione_conducente
              }
              thisSetState={
                ControlloMyContext.setA3_03_TabRig_CartaIdentita_N_14_professione_conducente
              }
              placeholder="Professione"
            />
          </div>
        </li>

        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Stato civile:</p>
          <InputStatoCivile
            initial={initialState?.N_15_stato_civile}
            thisState={
              ControlloMyContext.A3_03_TabRig_CartaIdentita_N_15_stato_civile_conducente
            }
            thisSetState={
              ControlloMyContext.setA3_03_TabRig_CartaIdentita_N_15_stato_civile_conducente
            }
          />
        </li>

        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">
            Eventuale non validità per l’espatrio:
          </p>
          <InputText
            initial={initialState?.N_16_eventuale_non_validita_per_espatrio}
            thisState={
              ControlloMyContext.A3_03_TabRig_CartaIdentita_N_16_eventuale_non_validita_per_espatrio_conducente
            }
            thisSetState={
              ControlloMyContext.setA3_03_TabRig_CartaIdentita_N_16_eventuale_non_validita_per_espatrio_conducente
            }
            placeholder="Eventuale non validità per l’espatrio"
          />
        </li>

        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">
            Nome e cognome del padre (nel caso di un minore):
          </p>
          <InputText
            initial={initialState?.N_17_nome_cognome_padre_nel_caso_minore}
            thisState={
              ControlloMyContext.A3_03_TabRig_CartaIdentita_N_17_nome_cognome_padre_nel_caso_minore_conducente
            }
            thisSetState={
              ControlloMyContext.setA3_03_TabRig_CartaIdentita_N_17_nome_cognome_padre_nel_caso_minore_conducente
            }
            placeholder="Nome e cognome del padre"
          />
        </li>

        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">
            Nome e cognome della madre (nel caso di un minore):
          </p>
          <InputText
            initial={initialState?.N_23_nome_cognome_madre_nel_caso_minore}
            thisState={
              ControlloMyContext.A3_03_TabRig_CartaIdentita_N_23_nome_cognome_madre_nel_caso_minore_conducente
            }
            thisSetState={
              ControlloMyContext.setA3_03_TabRig_CartaIdentita_N_23_nome_cognome_madre_nel_caso_minore_conducente
            }
            placeholder="Nome e cognome della madre"
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Estremi dell’atto di nascita:</p>
          <InputText
            initial={initialState?.N_18_estremi_atto_nascita}
            thisState={
              ControlloMyContext.A3_03_TabRig_CartaIdentita_N_18_estremi_atto_nascita_conducente
            }
            thisSetState={
              ControlloMyContext.setA3_03_TabRig_CartaIdentita_N_18_estremi_atto_nascita_conducente
            }
            placeholder="Estremi atto di nascita"
          />
        </li>

        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Comune di iscrizione AIRE:</p>
          <InputText
            initial={initialState?.N_19_comune_di_iscrizione_AIRE}
            thisState={
              ControlloMyContext.A3_03_TabRig_CartaIdentita_N_19_comune_di_iscrizione_AIRE_conducente
            }
            thisSetState={
              ControlloMyContext.setA3_03_TabRig_CartaIdentita_N_19_comune_di_iscrizione_AIRE_conducente
            }
            placeholder="Comune iscrizione AIRE"
          />
        </li>

        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Numero documento:</p>
          <InputText
            initial={initialState?.N_20_numero_documento}
            thisState={
              ControlloMyContext.A3_03_TabRig_CartaIdentita_N_20_numero_documento_conducente
            }
            thisSetState={
              ControlloMyContext.setA3_03_TabRig_CartaIdentita_N_20_numero_documento_conducente
            }
            placeholder="Numero carta d'itentità"
          />
        </li>

        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">
            Data emissione e data scadenza del documento:
          </p>
          <div className="grid grid-cols-2 gap-10 items-center">
            <InputDate
              initial={initialState?.N_21_data_emissione_documento}
              thisState={
                ControlloMyContext.A3_03_TabRig_CartaIdentita_N_21_data_emissione_documento_conducente
              }
              thisSetState={
                ControlloMyContext.setA3_03_TabRig_CartaIdentita_N_21_data_emissione_documento_conducente
              }
            />
            <InputDate
              initial={initialState?.N_22_data_scadenza_documento}
              thisState={
                ControlloMyContext.A3_03_TabRig_CartaIdentita_N_22_data_scadenza_documento_conducente
              }
              thisSetState={
                ControlloMyContext.setA3_03_TabRig_CartaIdentita_N_22_data_scadenza_documento_conducente
              }
            />
          </div>
        </li>
      </ul>
    </div>
*/
