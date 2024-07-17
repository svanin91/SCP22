interface DataCartaCircolazione {
  data: {
    A_51a_numero_documento: string;
    N_01_targa_veicolo: string;
    N_02_data_prima_immatricolazione: string;
    N_03_nome_proprietario: string;
    N_04_cognome_proprietario: string;
    N_05_data_nascita: string;
    N_06_luogo_nascita: string;
    N_07_marca_modello_veicolo: string;
    N_08_numero_telaio: string;
    N_09_categorie_veicolo: string;
    N_10_destinazione_uso: string;
    N_11_emissioni: string;
    N_12_classe_ambientale: string;
    N_13_massa_a_vuoto: string;
    N_14_numero_assi: string;
    N_15_massa_massima_a_carico_tecnicamente_ammissibile: string;
    N_16_massa_massima_a_rimorchio_ammissibile_con_rimorchio_frenato: string;
    N_17_massa_massima_a_rimorchio_ammissibile_con_rimorchio_non_frenato: string;
    N_18_cilindrata: string;
    N_19_potenza_netta_kW: string;
    N_20_tipo_combustibile_alimentazione: string;
    N_21_numero_id_motore: string;
    N_22_rapporto_potenza_massa_in_kW_solo_motocicli: string;
    N_23_numeri_posti_a_sedere: string;
    N_24_Emissioni_co2_g_km: string;
    D_39_targa_rimorchio: string;
    id_record: number;
  };
}
const TabCartaCircolazione = (data: DataCartaCircolazione) => {
  const datiCartaCircolazione = data.data;

  return (
    <div className=" h-[43rem] w-full pl-4 pt-4 ">
      <ul className="space-y-1 flex flex-col">
        <li className="flex">
          <p className="pr-3 text-red-500">Categoria veicolo:</p>
          {datiCartaCircolazione.N_09_categorie_veicolo}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Targa del veicolo:</p>
          {datiCartaCircolazione.N_01_targa_veicolo}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Data prima immatricolazione:</p>
          {datiCartaCircolazione.N_02_data_prima_immatricolazione}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">
            Nome del proprietario del veicolo:
          </p>
          {datiCartaCircolazione.N_03_nome_proprietario}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">
            Cognome del proprietario del veicolo:
          </p>
          {datiCartaCircolazione.N_04_cognome_proprietario}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Data di nascita:</p>
          {datiCartaCircolazione.N_05_data_nascita}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Luogo di nascita:</p>
          {datiCartaCircolazione.N_06_luogo_nascita}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Marca e modello veicolo:</p>
          {datiCartaCircolazione.N_07_marca_modello_veicolo}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Numero di telaio:</p>
          {datiCartaCircolazione.N_08_numero_telaio}
        </li>

        <li className="flex">
          <p className="pr-3 text-red-500">Destinazione d'uso:</p>
          {datiCartaCircolazione.N_10_destinazione_uso}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Direttiva ed emissioni:</p>
          {datiCartaCircolazione.N_24_Emissioni_co2_g_km}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">
            Classe ambientale di omologazione CE:
          </p>
          {datiCartaCircolazione.N_11_emissioni +
            " " +
            datiCartaCircolazione.N_12_classe_ambientale}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Massa a vuoto:</p>
          {datiCartaCircolazione.N_13_massa_a_vuoto}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Numero di assi:</p>
          {datiCartaCircolazione.N_14_numero_assi}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">
            Massa massima a carico tecnicamente ammissibile:
          </p>
          {
            datiCartaCircolazione.N_15_massa_massima_a_carico_tecnicamente_ammissibile
          }
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">
            Massa massima a rimorchio ammissibile con rimorchio frenato:
          </p>
          {
            datiCartaCircolazione.N_16_massa_massima_a_rimorchio_ammissibile_con_rimorchio_frenato
          }
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">
            Massa massima a rimorchio ammissibile con rimorchio non frenato:
          </p>
          {
            datiCartaCircolazione.N_17_massa_massima_a_rimorchio_ammissibile_con_rimorchio_non_frenato
          }
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Cilindrata:</p>
          {datiCartaCircolazione.N_18_cilindrata}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Potenza netta massima (kW):</p>
          {datiCartaCircolazione.N_19_potenza_netta_kW}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">
            Tipo di combustibile o di alimentazione:
          </p>
          {datiCartaCircolazione.N_20_tipo_combustibile_alimentazione}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">
            Numero di identificazione del motore:
          </p>
          {datiCartaCircolazione.N_21_numero_id_motore}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">
            Rapporto potenza/massa in kW/kg (solo per i motocicli):
          </p>
          {
            datiCartaCircolazione.N_22_rapporto_potenza_massa_in_kW_solo_motocicli
          }
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">
            Numero di posti a sedere, compreso quello del conducente:
          </p>
          {datiCartaCircolazione.N_23_numeri_posti_a_sedere}
        </li>
        <li className="flex">
          <p className="pr-3 text-red-500">Targa rimorchio:</p>
          {datiCartaCircolazione.D_39_targa_rimorchio}
        </li>
      </ul>
    </div>
  );
};
export default TabCartaCircolazione;
