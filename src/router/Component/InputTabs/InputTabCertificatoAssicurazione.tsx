import { useContext } from "react";
import { AddContext } from "../../../Context/AddControlContext";
import InputText from "../Input/InputText";
import InputDate from "../Input/InputData";
import InputCarburante from "../Input/InputCarburante";

interface CartificatoAssicurazioneInitial {
  A_51a_numero_documento: string;

  N_01_nome: string;
  N_02_cognome: string;
  N_03_indirizzo_residenza: string;
  N_04_nome_compagnia_assicurativa: string;
  N_05_targa_veicolo: string;
  N_06_numero_polizza: string;
  N_07_data_inizio_polizza: string;
  N_08_data_fine_polizza: string;
  N_09_marca_modello_veicolo: string;
  N_10_cilindrata: string;
  N_11_potenza: string;
  N_12_carburante: string;
  id_record: number;
}

const InputTabCertificatoAssicurazione = (props: { statoIniziale?: any }) => {
  const initialState: CartificatoAssicurazioneInitial | undefined =
    props.statoIniziale?.A3_06_TabRig_CertificatoAssicurazione.fieldData;

  const ControlloMyContext = useContext(AddContext);

  return (
    <div className="h-[43rem] w-full flex justify-center items-center ">
      <ul className="space-y-2">
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Nome:</p>
          <InputText
            initial={initialState?.N_01_nome}
            thisState={
              ControlloMyContext.A3_06_TabRig_CertificatoAssicurazione_N_01_nome
            }
            thisSetState={
              ControlloMyContext.setA3_06_TabRig_CertificatoAssicurazione_N_01_nome
            }
            placeholder="Nome"
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Cognome:</p>
          <InputText
            initial={initialState?.N_02_cognome}
            thisState={
              ControlloMyContext.A3_06_TabRig_CertificatoAssicurazione_N_02_cognome
            }
            thisSetState={
              ControlloMyContext.setA3_06_TabRig_CertificatoAssicurazione_N_02_cognome
            }
            placeholder="Cognome"
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Indirizzo di residenza</p>
          <InputText
            initial={initialState?.N_03_indirizzo_residenza}
            thisState={
              ControlloMyContext.A3_06_TabRig_CertificatoAssicurazione_N_03_indirizzo_residenza
            }
            thisSetState={
              ControlloMyContext.setA3_06_TabRig_CertificatoAssicurazione_N_03_indirizzo_residenza
            }
            placeholder="Indirizzo"
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Nome compagnia assicurativa</p>
          <InputText
            initial={initialState?.N_04_nome_compagnia_assicurativa}
            thisState={
              ControlloMyContext.A3_06_TabRig_CertificatoAssicurazione_N_04_nome_compagnia_assicurativa
            }
            thisSetState={
              ControlloMyContext.setA3_06_TabRig_CertificatoAssicurazione_N_04_nome_compagnia_assicurativa
            }
            placeholder="Compagnia assicurativa"
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Targa veicolo:</p>
          <InputText
            initial={initialState?.N_05_targa_veicolo}
            thisState={
              ControlloMyContext.A3_06_TabRig_CertificatoAssicurazione_N_05_targa_veicolo
            }
            thisSetState={
              ControlloMyContext.setA3_06_TabRig_CertificatoAssicurazione_N_05_targa_veicolo
            }
            placeholder="Targa"
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Numero polizza:</p>
          <InputText
            initial={initialState?.N_06_numero_polizza}
            thisState={
              ControlloMyContext.A3_06_TabRig_CertificatoAssicurazione_N_06_numero_polizza
            }
            thisSetState={
              ControlloMyContext.setA3_06_TabRig_CertificatoAssicurazione_N_06_numero_polizza
            }
            placeholder="Numero polizza"
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Data inizio copertura:</p>
          <InputDate
            initial={initialState?.N_07_data_inizio_polizza}
            thisState={
              ControlloMyContext.A3_06_TabRig_CertificatoAssicurazione_N_07_data_inizio_polizza
            }
            thisSetState={
              ControlloMyContext.setA3_06_TabRig_CertificatoAssicurazione_N_07_data_inizio_polizza
            }
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Data fine copertura:</p>
          <InputDate
            initial={initialState?.N_08_data_fine_polizza}
            thisState={
              ControlloMyContext.A3_06_TabRig_CertificatoAssicurazione_N_08_data_fine_polizza
            }
            thisSetState={
              ControlloMyContext.setA3_06_TabRig_CertificatoAssicurazione_N_08_data_fine_polizza
            }
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Marca e modello veicolo:</p>
          <InputText
            initial={initialState?.N_09_marca_modello_veicolo}
            thisState={
              ControlloMyContext.A3_06_TabRig_CertificatoAssicurazione_N_09_marca_modello_veicolo
            }
            thisSetState={
              ControlloMyContext.setA3_06_TabRig_CertificatoAssicurazione_N_09_marca_modello_veicolo
            }
            placeholder="Marca e modello veicolo"
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Cilindrata:</p>
          <InputText
            initial={initialState?.N_10_cilindrata}
            thisState={
              ControlloMyContext.A3_06_TabRig_CertificatoAssicurazione_N_10_cilindrata
            }
            thisSetState={
              ControlloMyContext.setA3_06_TabRig_CertificatoAssicurazione_N_10_cilindrata
            }
            placeholder="Cilindrata"
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Potenza:</p>
          <InputText
            initial={initialState?.N_11_potenza}
            thisState={
              ControlloMyContext.A3_06_TabRig_CertificatoAssicurazione_N_11_potenza
            }
            thisSetState={
              ControlloMyContext.setA3_06_TabRig_CertificatoAssicurazione_N_11_potenza
            }
            placeholder="Potenza"
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500 ">Carburante:</p>
          <InputCarburante
            initial={initialState?.N_12_carburante}
            thisState={
              ControlloMyContext.A3_06_TabRig_CertificatoAssicurazione_N_12_carburante
            }
            thisSetState={
              ControlloMyContext.setA3_06_TabRig_CertificatoAssicurazione_N_12_carburante
            }
          />
        </li>
      </ul>
    </div>
  );
};
export default InputTabCertificatoAssicurazione;
