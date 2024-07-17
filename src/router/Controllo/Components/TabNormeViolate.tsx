interface DataNormeViolate {
  data: {
    A_51a_numero_documento: string;
    D_25_norme_violate: string;
    D_28__patante_ritirata: string;
    D_31_carta_circolazione_ritirata: string;
    D_32_certificato_assicurazione_ritirato: string;
    id_record: number;
  };
}
const TabNormeViolate = (data: DataNormeViolate) => {
  const datiNormeViolate = data.data;
  return (
    <div className=" h-[43rem] pl-4 pt-4 ">
      <div className="pb-6 border-b-2 border-gray-300 ">
        <ul>
          <li className="grid grid-cols-2 items-center ">
            <div>
              <p className="pr-3 text-left text-red-500">
                Articolo CdS Violato:
              </p>
              <p></p>
            </div>
            <div className=" h-full">{datiNormeViolate.D_25_norme_violate}</div>
          </li>
        </ul>
      </div>
      <div className="pt-6">
        <p className="text-red-500">Documenti ritirati:</p>
        <ul className="space-y-1 flex flex-col">
          <li className="grid grid-cols-2 items-center">
            <p>PATENTE</p>
            {datiNormeViolate.D_28__patante_ritirata ? "SI" : "NO"}
          </li>
          <li className="grid grid-cols-2 items-center">
            <p>CARTA DI CIRCOLAZIONE</p>
            {datiNormeViolate.D_31_carta_circolazione_ritirata ? "SI" : "NO"}
          </li>
          <li className="grid grid-cols-2 items-center">
            <p>CERTIFICATO ASSICURAZIONE</p>
            {datiNormeViolate.D_32_certificato_assicurazione_ritirato
              ? "SI"
              : "NO"}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default TabNormeViolate;
