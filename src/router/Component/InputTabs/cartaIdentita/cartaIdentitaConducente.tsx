import { AddContext } from "../../../../Context/AddControlContext";
import { useContext } from "react";
import InputColoreOcchi from "../../Input/InputColoreOcchi";
import InputDate from "../../Input/InputData";
import InputStatoCivile from "../../Input/InputStatoCivile";
import InputStatura from "../../Input/InputStatura";
import InputText from "../../Input/InputText";
import InputSesso from "../../Input/InputSesso";
import InputCF from "../../Input/InputCF";
import InputLuogoNascita from "../../Input/InputLuogoDiNascita";

interface CartaIdentitaInitial {
  A_51a_numero_documento: string;
  N_02_comune_ufficio_emettitore_conducente: string;
  N_03_cognome_conducente: string;
  N_04_nome_conducente: string;
  N_05_data_nascita_conducente: string;
  N_06_luogo_nascita_conducente: string;
  N_08_sesso_conducente: string;
  N_09_statura_conducente: string;
  N_10_occhi_conducente: string;
  N_11_cittadinanza_conducente: string;
  N_12_codice_fiscale_conducente: string;
  N_13_residenza_conducente: string;
  N_14_professione_conducente: string;
  N_15_stato_civile_conducente: string;
  N_16_eventuale_non_validita_per_espatrio_conducente: string;
  N_17_nome_cognome_padre_nel_caso_minore_conducente: string;
  N_18_estremi_atto_nascita_conducente: string;
  N_19_comune_di_iscrizione_AIRE_conducente: string;
  N_20_numero_documento_conducente: string;
  N_21_data_emissione_documento_conducente: string;
  N_22_data_scadenza_documento_documento_conducente: string;
  N_23_nome_cognome_madre_nel_caso_minore_conducente: string;
  id_record: number;
}

const CartaIdentitaConducente = (props: { statoIniziale?: any }) => {
  const initialState: CartaIdentitaInitial | undefined = props.statoIniziale;
  const ControlloMyContext = useContext(AddContext);

  return (
    <div className="max-h-[650px] w-full flex justify-center items-center">
      <ul className="space-y-0.5">
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">
            Comune o Ufficio Consolare emettitore:
          </p>
          <InputText
            initial={initialState?.N_02_comune_ufficio_emettitore_conducente}
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
              initial={initialState?.N_04_nome_conducente}
              thisState={
                ControlloMyContext.A3_03_TabRig_CartaIdentita_N_04_nome_conducente
              }
              thisSetState={
                ControlloMyContext.setA3_03_TabRig_CartaIdentita_N_04_nome_conducente
              }
              placeholder="Nome"
            />
            <InputText
              initial={initialState?.N_03_cognome_conducente}
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
              initial={initialState?.N_05_data_nascita_conducente}
              thisState={
                ControlloMyContext.A3_03_TabRig_CartaIdentita_N_05_data_nascita_conducente
              }
              thisSetState={
                ControlloMyContext.setA3_03_TabRig_CartaIdentita_N_05_data_nascita_conducente
              }
            />
            <InputLuogoNascita
              initial={initialState?.N_06_luogo_nascita_conducente}
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
              initial={initialState?.N_08_sesso_conducente}
              thisState={
                ControlloMyContext.A3_03_TabRig_CartaIdentita_N_08_sesso_conducente
              }
              thisSetState={
                ControlloMyContext.setA3_03_TabRig_CartaIdentita_N_08_sesso_conducente
              }
            />
            <InputStatura
              initial={initialState?.N_09_statura_conducente}
              thisState={
                ControlloMyContext.A3_03_TabRig_CartaIdentita_N_09_statura_conducente
              }
              thisSetState={
                ControlloMyContext.setA3_03_TabRig_CartaIdentita_N_09_statura_conducente
              }
            />
            <InputColoreOcchi
              initial={initialState?.N_10_occhi_conducente}
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
              initial={initialState?.N_11_cittadinanza_conducente}
              thisState={
                ControlloMyContext.A3_03_TabRig_CartaIdentita_N_11_cittadinanza_conducente
              }
              thisSetState={
                ControlloMyContext.setA3_03_TabRig_CartaIdentita_N_11_cittadinanza_conducente
              }
              placeholder="Cittadinanza"
            />
            <InputCF
              initial={initialState?.N_12_codice_fiscale_conducente}
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
              initial={initialState?.N_13_residenza_conducente}
              thisState={
                ControlloMyContext.A3_03_TabRig_CartaIdentita_N_13_residenza_conducente
              }
              thisSetState={
                ControlloMyContext.setA3_03_TabRig_CartaIdentita_N_13_residenza_conducente
              }
              placeholder="Residenza"
            />
            <InputText
              initial={initialState?.N_14_professione_conducente}
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
            initial={initialState?.N_15_stato_civile_conducente}
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
            initial={
              initialState?.N_16_eventuale_non_validita_per_espatrio_conducente
            }
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
            initial={
              initialState?.N_17_nome_cognome_padre_nel_caso_minore_conducente
            }
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
            initial={
              initialState?.N_23_nome_cognome_madre_nel_caso_minore_conducente
            }
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
            initial={initialState?.N_18_estremi_atto_nascita_conducente}
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
            initial={initialState?.N_19_comune_di_iscrizione_AIRE_conducente}
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
            initial={initialState?.N_20_numero_documento_conducente}
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
              initial={initialState?.N_21_data_emissione_documento_conducente}
              thisState={
                ControlloMyContext.A3_03_TabRig_CartaIdentita_N_21_data_emissione_documento_conducente
              }
              thisSetState={
                ControlloMyContext.setA3_03_TabRig_CartaIdentita_N_21_data_emissione_documento_conducente
              }
            />
            <InputDate
              initial={
                initialState?.N_22_data_scadenza_documento_documento_conducente
              }
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
  );
};
export default CartaIdentitaConducente;
