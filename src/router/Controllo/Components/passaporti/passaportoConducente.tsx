interface DataPassaporto {
  data: {
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
  };
}
const PassaportoConducente = (data: DataPassaporto) => {
  const datiPassaporto = data.data;
  return (
    <div className=" h-[37.5rem] pl-4 pt-4">
      <ul className="space-y-1 flex flex-col">
        <li className="flex">
          <p className="pr-3 text-red-500">Tipo:</p>
          {datiPassaporto.N_02_tipo_conducente}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Codice paese:</p>
          {datiPassaporto.N_03_codice_paese_conducente}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Numero di passaporto:</p>
          {datiPassaporto.N_04_numero_passaporto_conducente}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Cognome:</p>
          {datiPassaporto.N_05_cognome_conducente}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Nome:</p>
          {datiPassaporto.N_06_nome_conducente}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Cittadinanza:</p>
          {datiPassaporto.N_07_cittadinanza_conducente}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Data di nascita:</p>
          {datiPassaporto.N_08_data_nascita_conducente}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Luogo di nascita:</p>
          {datiPassaporto.N_09_luogo_nascita_conducente}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Sesso:</p>
          {datiPassaporto.N_10_sesso_conducente}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Data di rilascio:</p>
          {datiPassaporto.N_11_data_emissione_documento_conducente}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Data di scadenza:</p>
          {datiPassaporto.N_12_data_scadenza_documento_conducente}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Autorità emittente:</p>
          {datiPassaporto.N_13_autorita_emittente_conducente}
        </li>
      </ul>
    </div>
  );
};
export default PassaportoConducente;
