import { useContext } from "react";
import { AddContext } from "../../../Context/AddControlContext";
import InputText from "../Input/InputText";
import InputDate from "../Input/InputData";
import InputNumber from "../Input/InputNumber";
import InputCarburante from "../Input/InputCarburante";
import InputTipoMezzo from "../Input/InputTipoMezzo";
import InputLuogoNascita from "../Input/InputLuogoDiNascita";
import InputDestinazioneUso from "../Input/InputDestinazioneUso";
import InputDirettivaEmissioni from "../Input/InputDirettivaEmissioni";
import InputClasseAmbientale from "../Input/InputClasseAmbientale";
import InputAssi from "../Input/InputAssi";

const InputTabCartaCircolazione = (props: { statoIniziale?: any }) => {
  const initialState: any | undefined = props.statoIniziale;

  const ControlloMyContext = useContext(AddContext);

  return (
    <div className="h-full w-full flex justify-center items-center">
      <ul className="space-y-1">
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Categoria veicolo:</p>

          <InputTipoMezzo
            initial={
              initialState?.A3_05_TabRig_CartaCircolazione.fieldData
                .N_09_categorie_veicolo
            }
            thisState={
              ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_09_categorie_veicolo
            }
            thisSetState={
              ControlloMyContext.setA3_05_TabRig_CartaCircolazione_N_09_categorie_veicolo
            }
          />
        </li>

        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">
            Targa e data prima immatricolazione:
          </p>
          <div className="grid grid-cols-2 gap-10 items-center">
            <InputText
              initial={
                initialState?.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_01_targa_veicolo
              }
              thisState={
                ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_01_targa_veicolo
              }
              thisSetState={
                ControlloMyContext.setA3_05_TabRig_CartaCircolazione_N_01_targa_veicolo
              }
              placeholder="Targa"
            />

            <InputDate
              initial={
                initialState?.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_02_data_prima_immatricolazione
              }
              thisState={
                ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_02_data_prima_immatricolazione
              }
              thisSetState={
                ControlloMyContext.setA3_05_TabRig_CartaCircolazione_N_02_data_prima_immatricolazione
              }
            />
          </div>
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Nome e cognome del proprietario:</p>
          <div className="grid grid-cols-2 gap-10 items-center">
            <InputText
              initial={
                initialState?.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_03_nome_proprietario
              }
              thisState={
                ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_03_nome_proprietario
              }
              thisSetState={
                ControlloMyContext.setA3_05_TabRig_CartaCircolazione_N_03_nome_proprietario
              }
              placeholder="Nome"
            />{" "}
            <InputText
              initial={
                initialState?.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_04_cognome_proprietario
              }
              thisState={
                ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_04_cognome_proprietario
              }
              thisSetState={
                ControlloMyContext.setA3_05_TabRig_CartaCircolazione_N_04_cognome_proprietario
              }
              placeholder="Cognome"
            />
          </div>
        </li>

        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Data e luogo di nascita:</p>
          <div className="grid grid-cols-2 gap-10 items-center">
            <InputDate
              initial={
                initialState?.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_05_data_nascita
              }
              thisState={
                ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_05_data_nascita
              }
              thisSetState={
                ControlloMyContext.setA3_05_TabRig_CartaCircolazione_N_05_data_nascita
              }
            />
            <InputLuogoNascita
              initial={
                initialState?.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_06_luogo_nascita
              }
              thisState={
                ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_06_luogo_nascita
              }
              thisSetState={
                ControlloMyContext.setA3_05_TabRig_CartaCircolazione_N_06_luogo_nascita
              }
            />
          </div>
        </li>

        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">
            Marca, modello veicolo e numero di telaio:
          </p>
          <div className="grid grid-cols-2 gap-10 items-center">
            <InputText
              initial={
                initialState?.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_07_marca_modello_veicolo
              }
              thisState={
                ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_07_marca_modello_veicolo
              }
              thisSetState={
                ControlloMyContext.setA3_05_TabRig_CartaCircolazione_N_07_marca_modello_veicolo
              }
              placeholder="Marca e modello"
            />
            <InputText
              initial={
                initialState?.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_08_numero_telaio
              }
              thisState={
                ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_08_numero_telaio
              }
              thisSetState={
                ControlloMyContext.setA3_05_TabRig_CartaCircolazione_N_08_numero_telaio
              }
              placeholder="Numero di telaio"
            />
          </div>
        </li>

        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">
            Destinazione d'uso e classe ambientale:
          </p>
          <div className="grid grid-cols-2 gap-10 items-center">
            <InputDestinazioneUso
              initial={
                initialState?.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_10_destinazione_uso
              }
              thisState={
                ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_10_destinazione_uso
              }
              thisSetState={
                ControlloMyContext.setA3_05_TabRig_CartaCircolazione_N_10_destinazione_uso
              }
            />
            <InputClasseAmbientale
              initial={
                initialState?.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_12_classe_ambientale
              }
              thisState={
                ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_12_classe_ambientale
              }
              thisSetState={
                ControlloMyContext.setA3_05_TabRig_CartaCircolazione_N_12_classe_ambientale
              }
            />
          </div>
        </li>

        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Direttiva ed emissioni:</p>
          <div className="grid grid-cols-2 gap-10 items-center">
            <InputDirettivaEmissioni
              initial={
                initialState?.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_11_emissioni
              }
              thisState={
                ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_11_emissioni
              }
              thisSetState={
                ControlloMyContext.setA3_05_TabRig_CartaCircolazione_N_11_emissioni
              }
            />
            <InputNumber
              initial={
                initialState?.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_24_Emissioni_co2_g_km
              }
              thisState={
                ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_24_Emissioni_co2_g_km
              }
              thisSetState={
                ControlloMyContext.setA3_05_TabRig_CartaCircolazione_N_24_Emissioni_co2_g_km
              }
              placeholder="Valore emissioni"
            />
          </div>
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Tipo combustibile e numero assi:</p>
          <div className="grid grid-cols-2 gap-10 items-center">
            <InputCarburante
              initial={
                initialState?.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_20_tipo_combustibile_alimentazione
              }
              thisState={
                ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_20_tipo_combustibile_alimentazione
              }
              thisSetState={
                ControlloMyContext.setA3_05_TabRig_CartaCircolazione_N_20_tipo_combustibile_alimentazione
              }
            />
            <InputAssi
              initial={
                initialState?.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_14_numero_assi
              }
              thisState={
                ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_14_numero_assi
              }
              thisSetState={
                ControlloMyContext.setA3_05_TabRig_CartaCircolazione_N_14_numero_assi
              }
            />
          </div>
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">
            Massa a vuoto e Massa massima a carico tecnicamente ammissibile:
          </p>
          <div className="grid grid-cols-2 gap-10 items-center">
            <InputText
              initial={
                initialState?.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_13_massa_a_vuoto
              }
              thisState={
                ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_13_massa_a_vuoto
              }
              thisSetState={
                ControlloMyContext.setA3_05_TabRig_CartaCircolazione_N_13_massa_a_vuoto
              }
              placeholder="Massa a vuoto"
            />
            <InputText
              initial={
                initialState?.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_15_massa_massima_a_carico_tecnicamente_ammissibile
              }
              thisState={
                ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_15_massa_massima_a_carico_tecnicamente_ammissibile
              }
              thisSetState={
                ControlloMyContext.setA3_05_TabRig_CartaCircolazione_N_15_massa_massima_a_carico_tecnicamente_ammissibile
              }
              placeholder="Massa ammissibile"
            />
          </div>
        </li>

        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">
            Massa massima ammissibile con rimorchio:
          </p>
          <div className="grid grid-cols-2 gap-10 items-center">
            <InputText
              initial={
                initialState?.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_16_massa_massima_a_rimorchio_ammissibile_con_rimorchio_frenato
              }
              thisState={
                ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_16_massa_massima_a_rimorchio_ammissibile_con_rimorchio_frenato
              }
              thisSetState={
                ControlloMyContext.setA3_05_TabRig_CartaCircolazione_N_16_massa_massima_a_rimorchio_ammissibile_con_rimorchio_frenato
              }
              placeholder="frenato"
            />
            <InputText
              initial={
                initialState?.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_17_massa_massima_a_rimorchio_ammissibile_con_rimorchio_non_frenato
              }
              thisState={
                ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_17_massa_massima_a_rimorchio_ammissibile_con_rimorchio_non_frenato
              }
              thisSetState={
                ControlloMyContext.setA3_05_TabRig_CartaCircolazione_N_17_massa_massima_a_rimorchio_ammissibile_con_rimorchio_non_frenato
              }
              placeholder="non frenato"
            />
          </div>
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Cilindrata e potenza:</p>
          <div className="grid grid-cols-2 gap-10 items-center">
            <InputText
              initial={
                initialState?.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_18_cilindrata
              }
              thisState={
                ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_18_cilindrata
              }
              thisSetState={
                ControlloMyContext.setA3_05_TabRig_CartaCircolazione_N_18_cilindrata
              }
              placeholder="Cilindrata"
            />

            <InputText
              initial={
                initialState?.A3_05_TabRig_CartaCircolazione.fieldData
                  .N_19_potenza_netta_kW
              }
              thisState={
                ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_19_potenza_netta_kW
              }
              thisSetState={
                ControlloMyContext.setA3_05_TabRig_CartaCircolazione_N_19_potenza_netta_kW
              }
              placeholder="Potenza"
            />
          </div>
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">
            Numero di identificazione del motore:
          </p>
          <InputText
            initial={
              initialState?.A3_05_TabRig_CartaCircolazione.fieldData
                .N_21_numero_id_motore
            }
            thisState={
              ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_21_numero_id_motore
            }
            thisSetState={
              ControlloMyContext.setA3_05_TabRig_CartaCircolazione_N_21_numero_id_motore
            }
            placeholder="Identificativo motore"
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">
            Rapporto potenza/massa in kW/kg (solo per i motocicli):
          </p>
          <InputText
            initial={
              initialState?.A3_05_TabRig_CartaCircolazione.fieldData
                .N_22_rapporto_potenza_massa_in_kW_solo_motocicli
            }
            thisState={
              ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_22_rapporto_potenza_massa_in_kW_solo_motocicli
            }
            thisSetState={
              ControlloMyContext.setA3_05_TabRig_CartaCircolazione_N_22_rapporto_potenza_massa_in_kW_solo_motocicli
            }
            placeholder="Potenza / massa"
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">
            Numero di posti a sedere, compreso quello del conducente:
          </p>
          <InputNumber
            initial={
              initialState?.A3_05_TabRig_CartaCircolazione.fieldData
                .N_23_numeri_posti_a_sedere
            }
            thisState={
              ControlloMyContext.A3_05_TabRig_CartaCircolazione_N_23_numeri_posti_a_sedere
            }
            thisSetState={
              ControlloMyContext.setA3_05_TabRig_CartaCircolazione_N_23_numeri_posti_a_sedere
            }
            placeholder="Numero di posti a sedere"
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Targa rimorchio:</p>
          <InputText
            initial={
              initialState?.A3_05_TabRig_CartaCircolazione.fieldData
                .D_39_targa_rimorchio
            }
            thisState={
              ControlloMyContext.A2_TabRig_informazioni_generali_D_39_targa_rimorchio
            }
            thisSetState={
              ControlloMyContext.setA2_TabRig_informazioni_generali_D_39_targa_rimorchio
            }
            placeholder="Targa rimorchio"
          />
        </li>
      </ul>
    </div>
  );
};
export default InputTabCartaCircolazione;
