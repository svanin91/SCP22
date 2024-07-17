interface DataCertificatoAssicurazione {
  data: {
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
  };
}

const TabCertificatoAssicurazione = (data: DataCertificatoAssicurazione) => {
  const datiCertificatoAssicurazione = data.data;

  return (
    <div className=" h-[43rem] pl-4 pt-4">
      <ul className="space-y-1 flex flex-col">
        <li className="flex">
          <p className="pr-3 text-red-500">Nome:</p>
          {datiCertificatoAssicurazione.N_01_nome}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Cognome:</p>
          {datiCertificatoAssicurazione.N_02_cognome}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Nome compagnia assicurativa:</p>
          {datiCertificatoAssicurazione.N_04_nome_compagnia_assicurativa}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Targa veicolo:</p>
          {datiCertificatoAssicurazione.N_05_targa_veicolo}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Numero polizza:</p>
          {datiCertificatoAssicurazione.N_06_numero_polizza}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Data inizio copertura:</p>
          {datiCertificatoAssicurazione.N_07_data_inizio_polizza}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Data fine copertura:</p>
          {datiCertificatoAssicurazione.N_08_data_fine_polizza}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Marca e modello veicolo:</p>
          {datiCertificatoAssicurazione.N_09_marca_modello_veicolo}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Cilindrata:</p>
          {datiCertificatoAssicurazione.N_10_cilindrata}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Potenza:</p>
          {datiCertificatoAssicurazione.N_11_potenza}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Carburante:</p>
          {datiCertificatoAssicurazione.N_12_carburante}
        </li>
      </ul>
    </div>
  );
};
export default TabCertificatoAssicurazione;
