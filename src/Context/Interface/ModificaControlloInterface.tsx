interface MyContextModificaControlloType {
  mostraPopUp: boolean;
  setMostraPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  a_02a_n_record: string;
  setA_02a_n_record: React.Dispatch<React.SetStateAction<string>>;
  messaggioPopUp: string;
  setMessaggioPopUp: React.Dispatch<React.SetStateAction<string>>;
  id_record_informazioni_generali: number;
  setId_record_informazioni_generali: React.Dispatch<
    React.SetStateAction<number>
  >;
  id_record_patente: number;
  setId_record_patente: React.Dispatch<React.SetStateAction<number>>;
  id_record_cartaIdentita: number;
  setId_record_cartaIdentita: React.Dispatch<React.SetStateAction<number>>;
  id_record_passaporto: number;
  setId_record_passaporto: React.Dispatch<React.SetStateAction<number>>;
  id_record_cartaCircolazione: number;
  setId_record_cartaCircolazione: React.Dispatch<React.SetStateAction<number>>;
  id_record_certificatoAssicurazione: number;
  setId_record_certificatoAssicurazione: React.Dispatch<
    React.SetStateAction<number>
  >;
  id_record_Immagini: number;
  setId_record_Immagini: React.Dispatch<React.SetStateAction<number>>;
}
export default MyContextModificaControlloType;
