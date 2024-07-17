import { useContext, useEffect, useMemo } from "react";
import { AddContext } from "../../../../Context/AddControlContext";
import InputText from "../../Input/InputText";
import InputDate from "../../Input/InputData";
import InputLuogoNascita from "../../Input/InputLuogoDiNascita";
import InputCatPatente from "../../Input/InputCatPatente";

interface PatenteInitial {
  N_02_cognome_conducente: string;
  N_03_nome_conducente: string;
  N_04_data_nascita_conducente: string;
  N_05_luogo_nascita_conducente: string;
  N_06_data_emissione_documento_conducente: string;
  N_07_data_scadenza_documento_conducente: string;
  N_08_rilasciata_da_conducente: string;
  N_09_numero_documento_conducente: string;
  N_10_categoria_patente_conducente: string;
  N_11_annotazioni_restrizioni_conducente: string;
  id_record: number;
}

const InputPatenteConducente = (props: { statoIniziale?: any }) => {
  const initialState: PatenteInitial | undefined = props.statoIniziale;
  const ControlloMyContext = useContext(AddContext);

  // Aggiungi uno stato per controllare se l'array è già stato impostato

  const catPatenteString = initialState?.N_10_categoria_patente_conducente;
  const catPatenteArray = useMemo(
    () => catPatenteString?.split(",").map((item: string) => item.trim()) || [],
    [catPatenteString]
  );
  useEffect(() => {
    if (catPatenteArray !== undefined) {
      // Filtra le stringhe vuote prima di aggiornare il contesto
      const filteredCatPatenteArray = catPatenteArray.filter(
        (item) => item !== ""
      );

      ControlloMyContext.setA3_02_TabRig_PatenteGuida_N_10_categoria_patente_conducente(
        [...(filteredCatPatenteArray ?? [])]
      );
    }
  }, [catPatenteArray]);

  const renderCatPatente =
    ControlloMyContext
      .A3_02_TabRig_PatenteGuida_N_10_categoria_patente_conducente.length > 0
      ? ControlloMyContext.A3_02_TabRig_PatenteGuida_N_10_categoria_patente_conducente.map(
          (item: string, index: number) => (
            <div key={index} className="flex items-center p-1">
              <p> - {item}</p>
              <p
                className="text-red-400 text-xs bg-gray-300 p-1 ml-2 rounded-md hover:bg-white"
                onClick={() => deleteCatPatente(index)}
              >
                Elimina
              </p>
            </div>
          )
        )
      : null;

  const addCatPatente = (catPatente: string) => {
    const updatedCatPatente = [
      ...(ControlloMyContext.A3_02_TabRig_PatenteGuida_N_10_categoria_patente_conducente ||
        []),
      catPatente,
    ];
    ControlloMyContext.setA3_02_TabRig_PatenteGuida_N_10_categoria_patente_conducente(
      updatedCatPatente
    );
  };

  const deleteCatPatente = (index: number) => {
    const updatedCatPatente = [
      ...(ControlloMyContext.A3_02_TabRig_PatenteGuida_N_10_categoria_patente_conducente ||
        []),
    ];
    updatedCatPatente.splice(index, 1);
    ControlloMyContext.setA3_02_TabRig_PatenteGuida_N_10_categoria_patente_conducente(
      updatedCatPatente
    );
  };

  return (
    <div className="h-[37.5rem] w-full flex justify-center items-center ">
      <ul className="space-y-2">
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Cognome:</p>
          <InputText
            initial={initialState?.N_02_cognome_conducente}
            thisState={
              ControlloMyContext.A3_02_TabRig_PatenteGuida_N_02_cognome_conducente
            }
            thisSetState={
              ControlloMyContext.setA3_02_TabRig_PatenteGuida_N_02_cognome_conducente
            }
            placeholder="Cognome"
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Nome:</p>
          <InputText
            initial={initialState?.N_03_nome_conducente}
            thisState={
              ControlloMyContext.A3_02_TabRig_PatenteGuida_N_03_nome_conducente
            }
            thisSetState={
              ControlloMyContext.setA3_02_TabRig_PatenteGuida_N_03_nome_conducente
            }
            placeholder="Nome"
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Data di nascita:</p>
          <InputDate
            initial={initialState?.N_04_data_nascita_conducente}
            thisState={
              ControlloMyContext.A3_02_TabRig_PatenteGuida_N_04_data_nascita_conducente
            }
            thisSetState={
              ControlloMyContext.setA3_02_TabRig_PatenteGuida_N_04_data_nascita_conducente
            }
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Luogo di nascita:</p>
          <InputLuogoNascita
            initial={initialState?.N_05_luogo_nascita_conducente}
            thisState={
              ControlloMyContext.A3_02_TabRig_PatenteGuida_N_05_luogo_nascita_conducente
            }
            thisSetState={
              ControlloMyContext.setA3_02_TabRig_PatenteGuida_N_05_luogo_nascita_conducente
            }
          />
        </li>{" "}
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Data emissione:</p>
          <InputDate
            initial={initialState?.N_06_data_emissione_documento_conducente}
            thisState={
              ControlloMyContext.A3_02_TabRig_PatenteGuida_N_06_data_emissione_documento_conducente
            }
            thisSetState={
              ControlloMyContext.setA3_02_TabRig_PatenteGuida_N_06_data_emissione_documento_conducente
            }
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Data Scadenza:</p>
          <InputDate
            initial={initialState?.N_07_data_scadenza_documento_conducente}
            thisState={
              ControlloMyContext.A3_02_TabRig_PatenteGuida_N_07_data_scadenza_documento_conducente
            }
            thisSetState={
              ControlloMyContext.setA3_02_TabRig_PatenteGuida_N_07_data_scadenza_documento_conducente
            }
          />
        </li>{" "}
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Rilasciata da:</p>
          <InputText
            initial={initialState?.N_08_rilasciata_da_conducente}
            thisState={
              ControlloMyContext.A3_02_TabRig_PatenteGuida_N_08_rilasciata_da_conducente
            }
            thisSetState={
              ControlloMyContext.setA3_02_TabRig_PatenteGuida_N_08_rilasciata_da_conducente
            }
            placeholder="Rilasciata da"
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Numero documento:</p>
          <InputText
            initial={initialState?.N_09_numero_documento_conducente}
            thisState={
              ControlloMyContext.A3_02_TabRig_PatenteGuida_N_09_numero_documento_conducente
            }
            thisSetState={
              ControlloMyContext.setA3_02_TabRig_PatenteGuida_N_09_numero_documento_conducente
            }
            placeholder="Numero documento"
          />
        </li>
        <li className="grid grid-cols-2 items-center">
          <div>
            <p className="pr-3 text-red-500">
              Categoria per la quale è stata emessa la patente:
            </p>
            {renderCatPatente}
          </div>
          <div>
            <InputCatPatente
              initial={initialState?.N_10_categoria_patente_conducente}
              thisState={
                ControlloMyContext.A3_02_TabRig_PatenteGuida_N_10_categoria_patente_conducente
              }
              thisSetState={
                ControlloMyContext.setA3_02_TabRig_PatenteGuida_N_10_categoria_patente_conducente
              }
              addCatPatente={addCatPatente}
            />
          </div>
        </li>
        <li className="grid grid-cols-2 items-center">
          <p className="pr-3 text-red-500">Annotazioni e restrizioni:</p>
          <InputText
            initial={initialState?.N_11_annotazioni_restrizioni_conducente}
            thisState={
              ControlloMyContext.A3_02_TabRig_PatenteGuida_N_11_annotazioni_restrizioni_conducente
            }
            thisSetState={
              ControlloMyContext.setA3_02_TabRig_PatenteGuida_N_11_annotazioni_restrizioni_conducente
            }
            placeholder="Annotazioni e restrizioni"
          />
        </li>
      </ul>
    </div>
  );
};
export default InputPatenteConducente;
