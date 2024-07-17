interface DataPatente {
  data: {
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
  };
}

const PatenteConducente = (data: DataPatente) => {
  const datiPatente = data.data;
  return (
    <div className=" h-[37.5rem] pl-4 pt-4 ">
      <ul className="space-y-3 flex flex-col">
        <li className="flex">
          <p className="pr-3 text-red-500">Cognome:</p>
          {datiPatente.N_02_cognome_conducente}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Nome:</p>
          {datiPatente.N_03_nome_conducente}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Data di nascita:</p>
          {datiPatente.N_04_data_nascita_conducente}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Luogo di nascita:</p>
          {datiPatente.N_05_luogo_nascita_conducente}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Data emissione:</p>
          {datiPatente.N_06_data_emissione_documento_conducente}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Data Scadenza:</p>
          {datiPatente.N_07_data_scadenza_documento_conducente}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Rilasciata da:</p>
          {datiPatente.N_08_rilasciata_da_conducente}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Numero documento:</p>
          {datiPatente.N_09_numero_documento_conducente}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">
            Categoria per la quale è stata emessa la patente:
          </p>
          {datiPatente.N_09_numero_documento_conducente}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Annotazioni e restrizioni:</p>
          {datiPatente.N_11_annotazioni_restrizioni_conducente}
        </li>
      </ul>
    </div>
  );
};
export default PatenteConducente;
