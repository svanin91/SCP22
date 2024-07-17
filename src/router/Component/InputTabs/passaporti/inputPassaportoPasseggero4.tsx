import { AddContext } from "../../../../Context/AddControlContext";
import { useContext } from "react";
import InputDate from "../../Input/InputData";
import InputText from "../../Input/InputText";
import InputSesso from "../../Input/InputSesso";
import InputLuogoNascita from "../../Input/InputLuogoDiNascita";

interface PassaportoInitial {
  A_51a_numero_documento: string;
  N_02_tipo_passeggero_4: string;
  N_04_codice_paese_passeggero_4: string;
  N_04_numero_passaporto_passeggero_4: string;
  N_05_cognome_passeggero_4: string;
  N_06_nome_passeggero_4: string;
  N_07_cittadinanza_passeggero_4: string;
  N_08_data_nascita_passeggero_4: string;
  N_09_luogo_nascita_passeggero_4: string;
  N_10_sesso_passeggero_4: string;
  N_11_data_emissione_documento_passeggero_4: string;
  N_12_data_scadenza_documento_passeggero_4: string;
  N_14_autorita_emittente_passeggero_4: string;
  id_record: number;
}

const InputPassaportoPasseggero4 = (props: { statoIniziale?: any }) => {
  const initialState: PassaportoInitial | undefined = props.statoIniziale;
  const ControlloMyContext = useContext(AddContext);

  return (
    <div className="h-[40rem] w-full flex justify-center items-center">
      <ul className="space-y-1.5">
        <li className="grid grid-cols-2 items-center">
          <p className="pr-4 text-red-500">Tipo</p>
          <InputText
            initial={initialState?.N_02_tipo_passeggero_4}
            thisState={
              ControlloMyContext.A3_04_TabRig_Passaporto_N_02_tipo_passeggero_4
            }
            thisSetState={
              ControlloMyContext.setA3_04_TabRig_Passaporto_N_02_tipo_passeggero_4
            }
            placeholder="Tipo"
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-4 text-red-500">Codice paese:</p>
          <InputText
            initial={initialState?.N_04_codice_paese_passeggero_4}
            thisState={
              ControlloMyContext.A3_04_TabRig_Passaporto_N_03_codice_paese_passeggero_4
            }
            thisSetState={
              ControlloMyContext.setA3_04_TabRig_Passaporto_N_03_codice_paese_passeggero_4
            }
            placeholder="Codice paese"
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-4 text-red-500">Numero di passaporto:</p>
          <InputText
            initial={initialState?.N_04_numero_passaporto_passeggero_4}
            thisState={
              ControlloMyContext.A3_04_TabRig_Passaporto_N_04_numero_passaporto_passeggero_4
            }
            thisSetState={
              ControlloMyContext.setA3_04_TabRig_Passaporto_N_04_numero_passaporto_passeggero_4
            }
            placeholder="Numero di passaporto"
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-4 text-red-500">Cognome:</p>
          <InputText
            initial={initialState?.N_05_cognome_passeggero_4}
            thisState={
              ControlloMyContext.A3_04_TabRig_Passaporto_N_05_cognome_passeggero_4
            }
            thisSetState={
              ControlloMyContext.setA3_04_TabRig_Passaporto_N_05_cognome_passeggero_4
            }
            placeholder="Cognome"
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-4 text-red-500">Nome:</p>
          <InputText
            initial={initialState?.N_06_nome_passeggero_4}
            thisState={
              ControlloMyContext.A3_04_TabRig_Passaporto_N_06_nome_passeggero_4
            }
            thisSetState={
              ControlloMyContext.setA3_04_TabRig_Passaporto_N_06_nome_passeggero_4
            }
            placeholder="Nome"
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-4 text-red-500">Cittadinanza:</p>
          <InputText
            initial={initialState?.N_07_cittadinanza_passeggero_4}
            thisState={
              ControlloMyContext.A3_04_TabRig_Passaporto_N_07_cittadinanza_passeggero_4
            }
            thisSetState={
              ControlloMyContext.setA3_04_TabRig_Passaporto_N_07_cittadinanza_passeggero_4
            }
            placeholder="Cittadinanza"
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-4 text-red-500">Data di nascita:</p>
          <InputDate
            initial={initialState?.N_08_data_nascita_passeggero_4}
            thisState={
              ControlloMyContext.A3_04_TabRig_Passaporto_N_08_data_nascita_passeggero_4
            }
            thisSetState={
              ControlloMyContext.setA3_04_TabRig_Passaporto_N_08_data_nascita_passeggero_4
            }
          />
        </li>

        <li className="grid grid-cols-2 items-center">
          <p className="pr-4 text-red-500">Luogo di nascita:</p>
          <InputLuogoNascita
            initial={initialState?.N_09_luogo_nascita_passeggero_4}
            thisState={
              ControlloMyContext.A3_04_TabRig_Passaporto_N_09_luogo_nascita_passeggero_4
            }
            thisSetState={
              ControlloMyContext.setA3_04_TabRig_Passaporto_N_09_luogo_nascita_passeggero_4
            }
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-4 text-red-500">Sesso:</p>
          <InputSesso
            initial={initialState?.N_10_sesso_passeggero_4}
            thisState={
              ControlloMyContext.A3_04_TabRig_Passaporto_N_10_sesso_passeggero_4
            }
            thisSetState={
              ControlloMyContext.setA3_04_TabRig_Passaporto_N_10_sesso_passeggero_4
            }
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-4 text-red-500">Data di rilascio:</p>
          <InputDate
            initial={initialState?.N_11_data_emissione_documento_passeggero_4}
            thisState={
              ControlloMyContext.A3_04_TabRig_Passaporto_N_11_data_emissione_documento_passeggero_4
            }
            thisSetState={
              ControlloMyContext.setA3_04_TabRig_Passaporto_N_11_data_emissione_documento_passeggero_4
            }
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-4 text-red-500">Data di scadenza:</p>

          <InputDate
            initial={initialState?.N_12_data_scadenza_documento_passeggero_4}
            thisState={
              ControlloMyContext.A3_04_TabRig_Passaporto_N_12_data_scadenza_documento_passeggero_4
            }
            thisSetState={
              ControlloMyContext.setA3_04_TabRig_Passaporto_N_12_data_scadenza_documento_passeggero_4
            }
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-4 text-red-500">Autorità emittente:</p>
          <InputText
            initial={initialState?.N_14_autorita_emittente_passeggero_4}
            thisState={
              ControlloMyContext.A3_04_TabRig_Passaporto_N_13_autorita_emittente_passeggero_4
            }
            thisSetState={
              ControlloMyContext.setA3_04_TabRig_Passaporto_N_13_autorita_emittente_passeggero_4
            }
            placeholder="Autorità emittente"
          />
        </li>
      </ul>
    </div>
  );
};
export default InputPassaportoPasseggero4;
