interface DatiCartaIdentita {
  data: {
    N_02_comune_ufficio_emettitore_passeggero_2: string;
    N_03_cognome_passeggero_2: string;
    N_04_nome_passeggero_2: string;
    N_05_data_nascita_passeggero_2: string;
    N_06_luogo_nascita_passeggero_2: string;
    N_08_sesso_passeggero_2: string;
    N_09_statura_passeggero_2: string;
    N_10_occhi_passeggero_2: string;
    N_11_cittadinanza_passeggero_2: string;
    N_12_codice_fiscale_passeggero_2: string;
    N_13_residenza_passeggero_2: string;
    N_14_professione_passeggero_2: string;
    N_15_stato_civile_passeggero_2: string;
    N_16_eventuale_non_validita_per_espatrio_passeggero_2: string;
    N_17_nome_cognome_padre_nel_caso_minore_passeggero_2: string;
    N_18_estremi_atto_nascita_passeggero_2: string;
    N_19_comune_di_iscrizione_AIRE_passeggero_2: string;
    N_20_numero_documento_passeggero_2: string;
    N_21_data_emissione_documento_passeggero_2: string;
    N_22_data_scadenza_documento_passeggero_2: string;
    N_23_nome_cognome_madre_nel_caso_minore_passeggero_2: string;
    id_record: number;
  };
}

const CartaIdentitaPasseggero2 = (data: DatiCartaIdentita) => {
  const datiCartaIdentita = data.data;

  return (
    <div className=" h-[37.5rem] pl-4 pt-4">
      <ul className="space-y-1 flex flex-col">
        <li className="flex">
          <p className="pr-3 text-red-500">
            Comune o Ufficio Consolare emettitore:
          </p>
          {datiCartaIdentita.N_02_comune_ufficio_emettitore_passeggero_2}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Nome:</p>
          {datiCartaIdentita.N_04_nome_passeggero_2}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Cognome:</p>
          {datiCartaIdentita.N_03_cognome_passeggero_2}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Data di nascita:</p>
          {datiCartaIdentita.N_05_data_nascita_passeggero_2}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Luogo di nascita:</p>
          {datiCartaIdentita.N_06_luogo_nascita_passeggero_2}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Sesso:</p>
          {datiCartaIdentita.N_08_sesso_passeggero_2}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Statura:</p>
          {datiCartaIdentita.N_09_statura_passeggero_2}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Occhi:</p>
          {datiCartaIdentita.N_10_occhi_passeggero_2}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Cittadinanza:</p>
          {datiCartaIdentita.N_11_cittadinanza_passeggero_2}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Codice fiscale:</p>
          {datiCartaIdentita.N_12_codice_fiscale_passeggero_2}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Residenza:</p>
          {datiCartaIdentita.N_13_residenza_passeggero_2}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Professione:</p>
          {datiCartaIdentita.N_14_professione_passeggero_2}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Stato civile:</p>
          {datiCartaIdentita.N_15_stato_civile_passeggero_2}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">
            Eventuale non validità per l’espatrio:
          </p>
          {
            datiCartaIdentita.N_16_eventuale_non_validita_per_espatrio_passeggero_2
          }
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">
            Nome e cognome del padre e della madre (nel caso di un minore):
          </p>
          {
            datiCartaIdentita.N_17_nome_cognome_padre_nel_caso_minore_passeggero_2
          }
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Estremi dell’atto di nascita:</p>
          {datiCartaIdentita.N_18_estremi_atto_nascita_passeggero_2}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Comune di iscrizione AIRE:</p>
          {datiCartaIdentita.N_19_comune_di_iscrizione_AIRE_passeggero_2}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Numero documento:</p>
          {datiCartaIdentita.N_20_numero_documento_passeggero_2}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Data emissione:</p>
          {datiCartaIdentita.N_21_data_emissione_documento_passeggero_2}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Data scadenza:</p>
          {datiCartaIdentita.N_22_data_scadenza_documento_passeggero_2}
        </li>
      </ul>
    </div>
  );
};
export default CartaIdentitaPasseggero2;
