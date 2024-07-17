interface DataVerificheEffettuate {
  data: {
    A_51a_numero_documento: string;
    D_33_verifica_revisione: number;
    D_34_verifica_assicurazione: number;
    D_35_verifica_scarico: number;
    D_36_verifica_cinture_sicurezza: number;
    D_37_verifica_pneumatici: number;
    D_38_verifica_luci: number;
    id_record: number;
  };
}

const TabVerificheEffettuate = (data: DataVerificheEffettuate) => {
  const datiVerificheEffettuate = data.data;
  return (
    <div className=" h-[43rem] pl-4 pt-4">
      <ul className="space-y-1 flex flex-col">
        <li className="flex">
          <p className="pr-3 text-red-500">REVISIONE:</p>
          {datiVerificheEffettuate.D_33_verifica_revisione ? "SI" : "NO"}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">ASSICURAZIONE:</p>
          {datiVerificheEffettuate.D_34_verifica_assicurazione ? "SI" : "NO"}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">SCARICO:</p>
          {datiVerificheEffettuate.D_35_verifica_scarico ? "SI" : "NO"}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">CINTURE DI SICUREZZA:</p>
          {datiVerificheEffettuate.D_36_verifica_cinture_sicurezza
            ? "SI"
            : "NO"}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">PNEUMATICI:</p>
          {datiVerificheEffettuate.D_37_verifica_pneumatici ? "SI" : "NO"}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">LUCI:</p>
          {datiVerificheEffettuate.D_38_verifica_luci ? "SI" : "NO"}
        </li>
      </ul>
    </div>
  );
};
export default TabVerificheEffettuate;
