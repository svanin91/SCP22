import { AddContext } from "../../../../Context/AddControlContext";
import { useContext } from "react";
import InputDate from "../../Input/InputData";
import InputText from "../../Input/InputText";
import InputSesso from "../../Input/InputSesso";
import InputLuogoNascita from "../../Input/InputLuogoDiNascita";

interface PassaportoInitial {
  A_51a_numero_documento: string;
  N_02_tipo_conducente: string;
  N_03_codice_paese_conducente: string;
  N_04_numero_passaporto_conducente: string;
  N_05_cognome_conducente: string;
  N_06_nome_conducente: string;
  N_07_cittadinanza_conducente: string;
  N_08_data_nascita_conducente: string;
  N_09_luogo_nascita_conducente: string;
  N_10_sesso_conducente: string;
  N_11_data_emissione_documento_conducente: string;
  N_12_data_scadenza_documento_conducente: string;
  N_13_autorita_emittente_conducente: string;
  id_record: number;
}

const InputPassaportoConducente = (props: { statoIniziale?: any }) => {
  const initialState: PassaportoInitial | undefined = props.statoIniziale;
  const ControlloMyContext = useContext(AddContext);

  return (
    <div className="h-[40rem] w-full flex justify-center items-center">
      <ul className="space-y-1.5">
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Tipo</p>
          <InputText
            initial={initialState?.N_02_tipo_conducente}
            thisState={
              ControlloMyContext.A3_04_TabRig_Passaporto_N_02_tipo_conducente
            }
            thisSetState={
              ControlloMyContext.setA3_04_TabRig_Passaporto_N_02_tipo_conducente
            }
            placeholder="Tipo"
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Codice paese:</p>
          <InputText
            initial={initialState?.N_03_codice_paese_conducente}
            thisState={
              ControlloMyContext.A3_04_TabRig_Passaporto_N_03_codice_paese_conducente
            }
            thisSetState={
              ControlloMyContext.setA3_04_TabRig_Passaporto_N_03_codice_paese_conducente
            }
            placeholder="Codice paese"
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Numero di passaporto:</p>
          <InputText
            initial={initialState?.N_04_numero_passaporto_conducente}
            thisState={
              ControlloMyContext.A3_04_TabRig_Passaporto_N_04_numero_passaporto_conducente
            }
            thisSetState={
              ControlloMyContext.setA3_04_TabRig_Passaporto_N_04_numero_passaporto_conducente
            }
            placeholder="Numero di passaporto"
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Cognome:</p>
          <InputText
            initial={initialState?.N_05_cognome_conducente}
            thisState={
              ControlloMyContext.A3_04_TabRig_Passaporto_N_05_cognome_conducente
            }
            thisSetState={
              ControlloMyContext.setA3_04_TabRig_Passaporto_N_05_cognome_conducente
            }
            placeholder="Cognome"
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Nome:</p>
          <InputText
            initial={initialState?.N_06_nome_conducente}
            thisState={
              ControlloMyContext.A3_04_TabRig_Passaporto_N_06_nome_conducente
            }
            thisSetState={
              ControlloMyContext.setA3_04_TabRig_Passaporto_N_06_nome_conducente
            }
            placeholder="Nome"
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Cittadinanza:</p>
          <InputText
            initial={initialState?.N_07_cittadinanza_conducente}
            thisState={
              ControlloMyContext.A3_04_TabRig_Passaporto_N_07_cittadinanza_conducente
            }
            thisSetState={
              ControlloMyContext.setA3_04_TabRig_Passaporto_N_07_cittadinanza_conducente
            }
            placeholder="Cittadinanza"
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Data di nascita:</p>
          <InputDate
            initial={initialState?.N_08_data_nascita_conducente}
            thisState={
              ControlloMyContext.A3_04_TabRig_Passaporto_N_08_data_nascita_conducente
            }
            thisSetState={
              ControlloMyContext.setA3_04_TabRig_Passaporto_N_08_data_nascita_conducente
            }
          />
        </li>

        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Luogo di nascita:</p>
          <InputLuogoNascita
            initial={initialState?.N_09_luogo_nascita_conducente}
            thisState={
              ControlloMyContext.A3_04_TabRig_Passaporto_N_09_luogo_nascita_conducente
            }
            thisSetState={
              ControlloMyContext.setA3_04_TabRig_Passaporto_N_09_luogo_nascita_conducente
            }
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Sesso:</p>
          <InputSesso
            initial={initialState?.N_10_sesso_conducente}
            thisState={
              ControlloMyContext.A3_04_TabRig_Passaporto_N_10_sesso_conducente
            }
            thisSetState={
              ControlloMyContext.setA3_04_TabRig_Passaporto_N_10_sesso_conducente
            }
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Data di rilascio:</p>
          <InputDate
            initial={initialState?.N_11_data_emissione_documento_conducente}
            thisState={
              ControlloMyContext.A3_04_TabRig_Passaporto_N_11_data_emissione_documento_conducente
            }
            thisSetState={
              ControlloMyContext.setA3_04_TabRig_Passaporto_N_11_data_emissione_documento_conducente
            }
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Data di scadenza:</p>

          <InputDate
            initial={initialState?.N_12_data_scadenza_documento_conducente}
            thisState={
              ControlloMyContext.A3_04_TabRig_Passaporto_N_12_data_scadenza_documento_conducente
            }
            thisSetState={
              ControlloMyContext.setA3_04_TabRig_Passaporto_N_12_data_scadenza_documento_conducente
            }
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Autorità emittente:</p>
          <InputText
            initial={initialState?.N_13_autorita_emittente_conducente}
            thisState={
              ControlloMyContext.A3_04_TabRig_Passaporto_N_13_autorita_emittente_conducente
            }
            thisSetState={
              ControlloMyContext.setA3_04_TabRig_Passaporto_N_13_autorita_emittente_conducente
            }
            placeholder="Autorità emittente"
          />
        </li>
      </ul>
    </div>
  );
};
export default InputPassaportoConducente;
