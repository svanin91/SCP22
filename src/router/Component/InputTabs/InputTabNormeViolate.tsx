import { useContext, useEffect, useMemo, useState } from "react";
import { AddContext } from "../../../Context/AddControlContext";
import InputCDS from "../Input/InputCDS";
//import axios from "axios";
import CheckBox from "../CheckBox/CheckBox";
import { CodiceStradaleContext } from "../../../Context/CodiceStradaleContext";

const InputTabNormeViolate = (props: { statoIniziale?: any }) => {
  const ControlloMyContext = useContext(AddContext);
  const CodiceStradaleMyContext = useContext(CodiceStradaleContext);
  const initialState: any | undefined = props.statoIniziale;
  const normeViolateString = initialState?.N_01_articolo_CdS_violato;
  const normeViolateArray = useMemo(
    () =>
      normeViolateString?.split(",").map((item: string) => item.trim()) || [],
    [normeViolateString]
  );

  useEffect(() => {
    // Assicurati che normeViolateArray non sia undefined prima di effettuare l'aggiornamento
    if (normeViolateArray !== undefined) {
      // Filtra le stringhe vuote prima di aggiornare il contesto
      const filteredNormeViolateArray = normeViolateArray.filter(
        (item) => item !== ""
      );

      ControlloMyContext.setA2_TabRig_informazioni_generali_D_25_norme_violate([
        ...(filteredNormeViolateArray ?? []),
      ]);
    }
  }, [normeViolateArray]);

  const addNormeViolate = (normaViolata: string) => {
    const updatedNormeViolate = [
      ...(ControlloMyContext.A2_TabRig_informazioni_generali_D_25_norme_violate ||
        []),
      normaViolata,
    ];
    ControlloMyContext.setA2_TabRig_informazioni_generali_D_25_norme_violate(
      updatedNormeViolate
    );
  };

  const deleteItem = (index: number) => {
    const updatedNormeViolate = [
      ...(ControlloMyContext.A2_TabRig_informazioni_generali_D_25_norme_violate ||
        []),
    ];
    updatedNormeViolate.splice(index, 1);
    ControlloMyContext.setA2_TabRig_informazioni_generali_D_25_norme_violate(
      updatedNormeViolate
    );
  };

  const renderNormeViolate =
    ControlloMyContext.A2_TabRig_informazioni_generali_D_25_norme_violate
      .length > 0
      ? ControlloMyContext.A2_TabRig_informazioni_generali_D_25_norme_violate?.map(
          (item: string, index: number) => (
            <div key={index} className="flex items-center p-1">
              <p className="mr-2">{item}</p>
              <p
                className="text-red-400 text-xs bg-gray-300 p-1 rounded-md hover:bg-white"
                onClick={() => deleteItem(index)}
              >
                Elimina
              </p>
            </div>
          )
        )
      : null;

  return (
    <div className=" h-full w-full">
      <div className="pb-6 border-b-2 border-gray-300 ">
        <ul>
          <li className="grid grid-cols-2 items-center ">
            <div>
              <p className="pr-3 text-left text-red-500">
                Articolo CdS Violato:
              </p>
              {renderNormeViolate}
            </div>
            <div className="h-full">
              <InputCDS
                cds={CodiceStradaleMyContext.cds}
                thisState={
                  ControlloMyContext.A2_TabRig_informazioni_generali_D_25_norme_violate
                }
                thisSetState={
                  ControlloMyContext.setA2_TabRig_informazioni_generali_D_25_norme_violate
                }
                addNormeViolate={addNormeViolate}
              />
            </div>
          </li>
        </ul>
      </div>
      <div className="pt-6 h-full w-full">
        <p className="text-red-500">Documenti ritirati:</p>
        <ul className="pt-6 space-y-6 flex flex-col w-4/5">
          <li className=" items-center w-80">
            <CheckBox
              text="PATENTE"
              textColor="text-black-500"
              initial={initialState?.D_28_patente_ritirata}
              thisState={
                ControlloMyContext.A2_TabRig_informazioni_generali_D_28_patente_ritirata
              }
              thisSetState={
                ControlloMyContext.setA2_TabRig_informazioni_generali_D_28_patente_ritirata
              }
            />
          </li>
          <li className=" items-center w-80">
            <CheckBox
              text="CARTA DI CIRCOLAZIONE"
              textColor="text-black-500"
              initial={initialState?.D_31_carta_circolazione_ritirata}
              thisState={
                ControlloMyContext.A2_TabRig_informazioni_generali_D_31_carta_circolazione_ritirata
              }
              thisSetState={
                ControlloMyContext.setA2_TabRig_informazioni_generali_D_31_carta_circolazione_ritirata
              }
            />
          </li>
          <li className=" items-center w-80">
            <CheckBox
              text="CERTIFICATO ASSICURAZIONE"
              textColor="text-black-500"
              initial={initialState?.D_32_certificato_assicurazione_ritirato}
              thisState={
                ControlloMyContext.A2_TabRig_informazioni_generali_D_32_certificato_assicurazione_ritirato
              }
              thisSetState={
                ControlloMyContext.setA2_TabRig_informazioni_generali_D_32_certificato_assicurazione_ritirato
              }
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default InputTabNormeViolate;
