import React, { useEffect, useState, useRef, useContext } from "react";
import DataProps from "./Interface/dataInterface";
import { useNavigate, NavigateOptions } from "react-router-dom";
import { LoggedContext } from "../../Context/LoggedContext";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import { css } from "@emotion/react";

interface InformazioniGenerali {
  A2_TabRig_informazioni_generali: {
    fieldData: {
      A_09a_livello_di_revisione: number;
      A_51a_numero_documento: string;
      A_52a_flag_di_corrente_obsoleto: string;
      D_01_data: Date;
      D_02_ora_inizio: string;
      D_03_ora_fine: string;
      D_04_numero_giorno_settimana: number;
      D_05_latitudine: string;
      D_06_longitudine: string;
      D_07_provincia: string;
      D_08_comune: string;
      D_09_codice_avviamento_postale: string;
      D_10_regione: string;
      D_11_indirizzo: string;
      D_12_nome_operatore: string;
      D_13_cognome_operatore: string;
      D_14_stato: string;
    };
  };
}

const Table = (props: {
  data: DataProps[] | [];
  setData: React.Dispatch<React.SetStateAction<DataProps[] | []>>;
  sortData: boolean;
  setSortData: React.Dispatch<React.SetStateAction<boolean>>;
  sortNumDoc: boolean;
  setSortNumDoc: React.Dispatch<React.SetStateAction<boolean>>;
  conteggio: number | undefined;
}) => {
  const navigate = useNavigate();
  const LoggedMyContext = useContext(LoggedContext);
  const [isLoading, setIsLoading] = useState(false);
  const [startDownloadRecords, setStartDownloadRecords] = useState(101);
  const [sortedData, setSortedData] = useState<DataProps[][]>([]);
  const [selectedDocument, setSelectedDocument] = useState<string>();
  const [showObsoleteRows, setShowObsoleteRows] = useState<boolean>(false);
  const [datiControllo, setDatiControllo] =
    useState<InformazioniGenerali | null>(null);
  const conteggio = props.conteggio;
  const datiTabella = props.data;
  const setDatiTabella = props.setData;
  const setSortData = props.setSortData;
  const sortData = props.sortData;
  const setSortNumDoc = props.setSortNumDoc;
  const sortNumDoc = props.sortNumDoc;
  const tableRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(false);

  const override = css`
  display: block,
  margin: 0 auto
`;

  // questa funzione recuperati i dati della tabella li ordina per numero controllo

  useEffect(() => {
    // Verifica se datiTabella esiste e non è vuoto
    if (datiTabella && datiTabella.length > 0) {
      // Raggruppa gli oggetti in base al campo A_51a_numero_documento
      const groupedData = datiTabella.reduce((acc, curr) => {
        // Verifica se esiste già un array con lo stesso A_51a_numero_documento
        const existingIndex = acc.findIndex(
          (item) =>
            item[0]?.fieldData.A_51a_numero_documento ===
            curr.fieldData.A_51a_numero_documento
        );

        if (existingIndex !== -1) {
          // Se esiste, aggiungi l'oggetto all'array corrispondente
          acc[existingIndex].push(curr);
        } else {
          // Altrimenti, crea un nuovo array e aggiungilo all'array principale
          acc.push([curr]);
        }

        return acc;
      }, []);

      // Ordina gli array interni in modo decrescente in base al campo A_09a_livello_di_revisione
      const sorted: DataProps[][] = groupedData.map((group) => {
        return group.sort(
          (a, b) =>
            b.fieldData.A_09a_livello_di_revisione -
            a.fieldData.A_09a_livello_di_revisione
        );
      });
      setSortedData(sorted);
      // Utilizza sortedData come necessario
    }
  }, [datiTabella]);

  useEffect(() => {
    if (datiControllo) {
      navigate(
        `/controllo/${datiControllo.A2_TabRig_informazioni_generali.fieldData.A_51a_numero_documento}`,
        {
          state: {
            datiControllo: datiControllo,
          },
          replace: true,
        } as NavigateOptions
      );
    }
  }, [datiControllo]);

  const lanciaLogeNaviga = async (item: any) => {
    setLoading(true);
    const body = {
      query: [
        {
          A_51a_numero_documento: item.fieldData.A_51a_numero_documento,
          A_09a_livello_di_revisione: item.fieldData.A_09a_livello_di_revisione,
        },
      ],
    };

    axios.post("http://localhost:10100/logAccessoControlloSCP22", {
      nomeUtente: LoggedMyContext.A4_03_TabRig_utenti_M_05_nome_utente,
      numeroDocumento: item.fieldData.A_51a_numero_documento,
    });

    try {
      const response = await axios.post(
        "http://localhost:10100/getSingleRecord",
        body
      );
      if (
        response.data.A2_TabRig_informazioni_generali.fieldData
          .A_51a_numero_documento
      ) {
        setDatiControllo(response.data);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  /**
   * questa funzione si attiva quando scrollando la tabella si arriva all'ultimo record disponibile
   * con la condizione che il numero di record totali (conteggio) sia <= a startDownloadRecords che é l' indicazione che
   * diamo alla chiamata per scaricare i record a partire da un determinato numero, scarica i record e setta un nuovo stato per startDownloadRecords e
   * setta un nuovo stato per datiTabella (variabile che poi mappata renderizza le righe)
   */

  const loadMoreRecords = async () => {
    if (conteggio >= startDownloadRecords) {
      try {
        setIsLoading(true);
        const response = await axios.post(
          "http://localhost:10100/getOtherRecordsTable",
          { startDownloadRecords: startDownloadRecords }
        );
        setDatiTabella((prevData) => [...prevData, ...response.data]);
        setStartDownloadRecords((prevPage) => prevPage + 100);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  /**
   * funzione che rileva lo scroll
   */

  const handleScroll = () => {
    const table = tableRef.current;
    if (
      table &&
      table.scrollHeight - (table.scrollTop + table.clientHeight) < 10 &&
      !isLoading
    ) {
      loadMoreRecords();
    }
  };

  useEffect(() => {
    const table = tableRef.current;
    if (table) {
      table.addEventListener("scroll", handleScroll);

      return () => {
        table.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isLoading, setDatiTabella]);

  const clickSortData = () => {
    setSortData(!sortData);
  };

  const clickSortNDOC = () => {
    setSortNumDoc(!sortNumDoc);
  };

  // Quando fai clic sull'icona per visualizzare gli elementi obsoleti di una riga

  const showObsoleteRowsForDocument = (numeroDocumento: string) => {
    setSelectedDocument(numeroDocumento);
    setShowObsoleteRows(true);
  };

  const toggleObsoleteRowsForDocument = (numeroDocumento: string) => {
    setSelectedDocument(numeroDocumento);
    setShowObsoleteRows(false);
  };

  const renderRighe = sortedData
    ? sortedData.map((gruppo: DataProps[], indexGruppo: number) =>
        gruppo.map((item: DataProps, index: number) => (
          <React.Fragment key={`riga_${indexGruppo}_${index}`}>
            {item.fieldData.A_52a_flag_di_corrente_obsoleto === "corrente" ? (
              <tbody
                key={`corrente_${indexGruppo}_${index}`}
                className={`divide-y divide-gray-200 bg-gray-200 hover:bg-gray-300`}
                onClick={() => {
                  lanciaLogeNaviga(item);
                }}
              >
                <tr key={`corrente_${indexGruppo}_${index}`}>
                  <td className="px-2 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    {item.fieldData.A_51a_numero_documento}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-800 whitespace-nowrap">
                    {item.fieldData.A_09a_livello_di_revisione}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-800 whitespace-nowrap">
                    {item.fieldData.D_01_data}
                  </td>
                  <td className="px-3 py-4 text-sm font-medium text-left whitespace-nowrap">
                    {item.fieldData.D_02_ora_inizio}
                  </td>
                  <td className="px-3 py-4 text-sm font-medium text-left whitespace-nowrap">
                    {item.fieldData.D_03_ora_fine}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-800 whitespace-wrap">
                    {item.fieldData.D_07_provincia &&
                      item.fieldData.D_07_provincia}
                    {item.fieldData.D_07_provincia &&
                      item.fieldData.D_08_comune &&
                      " - "}
                    {item.fieldData.D_08_comune && item.fieldData.D_08_comune}
                    {item.fieldData.D_08_comune &&
                      item.fieldData.D_09_codice_avviamento_postale &&
                      " - "}
                    {item.fieldData.D_09_codice_avviamento_postale &&
                      item.fieldData.D_09_codice_avviamento_postale}
                    {item.fieldData.D_09_codice_avviamento_postale &&
                      item.fieldData.D_11_indirizzo &&
                      " - "}
                    {item.fieldData.D_11_indirizzo &&
                      item.fieldData.D_11_indirizzo}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-800 whitespace-nowrap">
                    {item.fieldData.D_13_cognome_operatore +
                      "  " +
                      item.fieldData.D_12_nome_operatore}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-800 whitespace-nowrap">
                    {item.fieldData.D_15_targa}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-800 whitespace-wrap">
                    {item.fieldData.D_17_cognome_patente_conducente
                      ? item.fieldData.D_17_cognome_patente_conducente.toUpperCase()
                      : item.fieldData.D_41_cognome_cartaidentita_conducente.toUpperCase() ||
                        item.fieldData.D_43_cognome_passaporto_conducente.toUpperCase()}{" "}
                    {item.fieldData.D_16_nome_patente_conducente
                      ? item.fieldData.D_16_nome_patente_conducente
                      : item.fieldData.D_40_nome_cartaidentita_conducente ||
                        item.fieldData.D_42_nome_passaporto_conducente}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-800 whitespace-wrap">
                    {item.fieldData.D_23_marca_modello_veicolo}
                  </td>
                  <td
                    className="px-3 py-4 text-sm text-gray-800 whitespace-nowrap"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    {item.fieldData.A_09a_livello_di_revisione > 1 && (
                      <a className="flex justify-center">
                        <img
                          onClick={() =>
                            showObsoleteRows
                              ? toggleObsoleteRowsForDocument(
                                  item.fieldData.A_51a_numero_documento
                                )
                              : showObsoleteRowsForDocument(
                                  item.fieldData.A_51a_numero_documento
                                )
                          }
                          className="h-4"
                          src={
                            showObsoleteRows &&
                            item.fieldData.A_51a_numero_documento ===
                              selectedDocument
                              ? "../../../public/static/up-arrow.png"
                              : "../../../public/static/down-arrow.png"
                          }
                          alt=""
                          srcSet=""
                        />
                      </a>
                    )}
                  </td>
                </tr>
              </tbody>
            ) : null}
            {showObsoleteRows &&
              item.fieldData.A_52a_flag_di_corrente_obsoleto === "obsoleto" &&
              item.fieldData.A_51a_numero_documento === selectedDocument && (
                <tbody
                  key={`obsoleto_${index}`}
                  className={`divide-y divide-gray-200 bg-gray-200 hover:bg-gray-300  transition-all duration-1000  ease-in-out-out `}
                  onClick={() => {
                    lanciaLogeNaviga(item);
                  }}
                >
                  <tr>
                    <td className="px-2 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {item.fieldData.A_51a_numero_documento}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {item.fieldData.A_09a_livello_di_revisione}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {item.fieldData.D_01_data}
                    </td>
                    <td className="px-3 py-4 text-sm font-medium text-left whitespace-nowrap">
                      {item.fieldData.D_02_ora_inizio}
                    </td>
                    <td className="px-3 py-4 text-sm font-medium text-left whitespace-nowrap">
                      {item.fieldData.D_03_ora_fine}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-800 whitespace-wrap">
                      {item.fieldData.D_07_provincia &&
                        item.fieldData.D_07_provincia}
                      {item.fieldData.D_07_provincia &&
                        item.fieldData.D_08_comune &&
                        " - "}
                      {item.fieldData.D_08_comune && item.fieldData.D_08_comune}
                      {item.fieldData.D_08_comune &&
                        item.fieldData.D_09_codice_avviamento_postale &&
                        " - "}
                      {item.fieldData.D_09_codice_avviamento_postale &&
                        item.fieldData.D_09_codice_avviamento_postale}
                      {item.fieldData.D_09_codice_avviamento_postale &&
                        item.fieldData.D_11_indirizzo &&
                        " - "}
                      {item.fieldData.D_11_indirizzo &&
                        item.fieldData.D_11_indirizzo}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {item.fieldData.D_13_cognome_operatore +
                        "  " +
                        item.fieldData.D_12_nome_operatore}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {item.fieldData.D_15_targa}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {item.fieldData.D_17_cognome_patente_conducente
                        ? item.fieldData.D_17_cognome_patente_conducente.toUpperCase()
                        : item.fieldData.D_41_cognome_cartaidentita_conducente.toUpperCase() ||
                          item.fieldData.D_43_cognome_passaporto_conducente.toUpperCase()}{" "}
                      {item.fieldData.D_16_nome_patente_conducente
                        ? item.fieldData.D_16_nome_patente_conducente
                        : item.fieldData.D_40_nome_cartaidentita_conducente ||
                          item.fieldData.D_42_nome_passaporto_conducente}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-800 whitespace-wrap">
                      {item.fieldData.D_23_marca_modello_veicolo}
                    </td>
                    <td
                      className="px-3 py-4 text-sm text-gray-800 whitespace-nowrap"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <a className="flex justify-center"></a>
                    </td>
                  </tr>
                </tbody>
              )}
          </React.Fragment>
        ))
      )
    : null;

  return loading ? (
    <div className="spinner flex justify-center items-center	w-full h-full">
      <BeatLoader
        color={"rgb(223, 166, 0)"}
        loading={loading}
        cssOverride={override}
        size={30}
      />
    </div>
  ) : (
    <div className="flex flex-col pt-4 ">
      <div className="p-1.5 h-full w-full inline-block align-middle">
        <div
          ref={tableRef}
          className={`overflow-auto border-2 rounded-lg border-black block max-h-[650px] h-full`}
        >
          <table className="classe-tabella min-w-full divide-y divide-black border-b border-black">
            <thead className="bg-gray-50 h-12 sticky top-0">
              <tr>
                <th
                  scope="col"
                  className="px-2 py-3 text-xs font-bold text-left text-gray-500 uppercase w-4 "
                  onClick={() => clickSortNDOC()}
                >
                  N. documento
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-xs font-bold text-left text-gray-500 uppercase w-4 "
                >
                  Rev.
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-xs font-bold text-left text-gray-500 uppercase w-8 "
                  onClick={() => clickSortData()}
                >
                  Data
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-xs font-bold text-left text-gray-500 uppercase w-12 "
                >
                  Orario inizio
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-xs font-bold text-left text-gray-500 uppercase w-12 "
                >
                  Orario fine
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-xs font-bold text-left text-gray-500 uppercase w-52 "
                >
                  Luogo
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-xs font-bold text-left text-gray-500 uppercase w-40 "
                >
                  Operatore
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-xs font-bold text-left text-gray-500 uppercase w-16 "
                >
                  Targa
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-xs font-bold text-left text-gray-500 uppercase w-52 "
                >
                  Conducente
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-xs font-bold text-left text-gray-500 uppercase w-40  "
                >
                  Veicolo
                </th>
                <th
                  scope="col-2"
                  className="px-2 py-3 text-xs font-bold text-left text-gray-500 uppercase w-4 "
                >
                  Storico
                </th>
              </tr>
            </thead>

            {renderRighe}
          </table>
        </div>
      </div>
    </div>
  );
};
export default Table;

/*
                  <td className="px-3 py-4 text-sm text-gray-800 whitespace-nowrap">
                    {item.fieldData.D_17_cognome_patente_conducente ||
                      item.fieldData.D_41_cognome_cartaidentita_conducente ||
                      item.fieldData.D_43_cognome_passaporto_conducente +
                        " " +
                        item.fieldData.D_16_nome_patente_conducente ||
                      item.fieldData.D_40_nome_cartaidentita_conducente ||
                      item.fieldData.D_42_nome_passaporto_conducente}
                  </td>





                  ${
                    showObsoleteRows
                      ? "opacity-100 h-full delay-1000 transition-all duration-1000 ease-in-out	scale-75			"
                      : "opacity-0 max-h-0 delay-0 transition-all duration-1000 ease-in-out		"
                  }
    */
