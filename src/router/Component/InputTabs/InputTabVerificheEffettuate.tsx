import { AddContext } from "../../../Context/AddControlContext";
import { useContext } from "react";
import CheckBox from "../CheckBox/CheckBox";

interface VerificheEffettuateInitial {
  A_51a_numero_documento: string;
  D_33_verifica_revisione: number;
  D_34_verifica_assicurazione: number;
  D_35_verifica_scarico: number;
  D_36_verifica_cinture_sicurezza: number;
  D_37_verifica_pneumatici: number;
  D_38_verifica_luci: number;
  id_record: number;
}

const InputTabVerificheEffettuate = (props: { statoIniziale?: any }) => {
  const initialState: VerificheEffettuateInitial | undefined =
    props.statoIniziale?.A2_TabRig_informazioni_generali.fieldData;

  const ControlloMyContext = useContext(AddContext);

  return (
    <div className="h-[43rem] w-full flex justify-center items-center ">
      <ul className="space-y-2.5">
        <li className=" items-center w-64">
          <CheckBox
            text="REVISIONE"
            textColor="text-red-500"
            initial={initialState?.D_33_verifica_revisione}
            thisState={
              ControlloMyContext.A2_TabRig_informazioni_generali_D_33_verifica_revisione
            }
            thisSetState={
              ControlloMyContext.setA2_TabRig_informazioni_generali_D_33_verifica_revisione
            }
          />
        </li>
        <li className=" items-center  w-64">
          <CheckBox
            text="ASSICURAZIONE"
            textColor="text-red-500"
            initial={initialState?.D_34_verifica_assicurazione}
            thisState={
              ControlloMyContext.A2_TabRig_informazioni_generali_D_34_verifica_assicurazione
            }
            thisSetState={
              ControlloMyContext.setA2_TabRig_informazioni_generali_D_34_verifica_assicurazione
            }
          />
        </li>
        <li className=" items-center  w-64">
          <CheckBox
            text="SCARICO"
            textColor="text-red-500"
            initial={initialState?.D_35_verifica_scarico}
            thisState={
              ControlloMyContext.A2_TabRig_informazioni_generali_D_35_verifica_scarico
            }
            thisSetState={
              ControlloMyContext.setA2_TabRig_informazioni_generali_D_35_verifica_scarico
            }
          />
        </li>
        <li className=" items-center  w-64">
          <CheckBox
            text="CINTURE DI SICUREZZA"
            textColor="text-red-500"
            initial={initialState?.D_36_verifica_cinture_sicurezza}
            thisState={
              ControlloMyContext.A2_TabRig_informazioni_generali_D_36_verifica_cinture_sicurezza
            }
            thisSetState={
              ControlloMyContext.setA2_TabRig_informazioni_generali_D_36_verifica_cinture_sicurezza
            }
          />
        </li>
        <li className=" items-center  w-64">
          <CheckBox
            text="PNEUMATICI"
            textColor="text-red-500"
            initial={initialState?.D_37_verifica_pneumatici}
            thisState={
              ControlloMyContext.A2_TabRig_informazioni_generali_D_37_verifica_pneumatici
            }
            thisSetState={
              ControlloMyContext.setA2_TabRig_informazioni_generali_D_37_verifica_pneumatici
            }
          />
        </li>
        <li className=" items-center  w-64">
          <CheckBox
            text="LUCI"
            textColor="text-red-500"
            initial={initialState?.D_38_verifica_luci}
            thisState={
              ControlloMyContext.A2_TabRig_informazioni_generali_D_38_verifica_luci
            }
            thisSetState={
              ControlloMyContext.setA2_TabRig_informazioni_generali_D_38_verifica_luci
            }
          />
        </li>
      </ul>
    </div>
  );
};
export default InputTabVerificheEffettuate;
