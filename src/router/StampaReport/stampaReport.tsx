import {
  pdf,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { LoggedContext } from "../../Context/LoggedContext";
import { Navigate } from "react-router-dom";
import PrintFiltri from "./Components/FiltriPrint";
import PrintOperatore from "./Components/OperatorePrint";
import PrintComune from "./Components/ComunePrint";
import PrintVerifiche from "./Components/VerifichePrint";
import PrintNormeViol from "./Components/NormeViolatePrint";
import PrintDocumentiRitirati from "./Components/DocRitiratiPrint";
import PrintAnno from "./Components/PrintAnno";
import PrintMese from "./Components/PrintMese";
import PrintGiorno from "./Components/PrintGiorno";
import data from "../../../public/ini/ini.json";

const styles = StyleSheet.create({
  viewer: { height: "90vh", width: "170vh" },
  page: {
    display: "flex",
  },
  sectionTitle: {
    height: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logoEnte: {
    height: 45,
    width: 20,
    flex: 1,
    paddingHorizontal: 10,
  },
  title1: {
    fontSize: 22,
    flex: 7,
    textAlign: "right",
  },
  title2: {
    fontSize: 22,
    flex: 7,
  },
  sectionData: {
    margin: 5,
    padding: 5,
    flexGrow: 1,
  },
  sectionsubTitle: {
    height: 30,
    display: "flex",
    alignItems: "center",
  },
  subTitle: {
    fontSize: 20,
  },
  numberPage: {
    fontSize: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderTop: "2px solid black",
    padding: 10,
  },
  containerFilter: {
    display: "flex",
  },
  textNessunDato: { fontSize: 20 },
  titleSection: {
    fontSize: 20,
    backgroundColor: "rgb(229,231,235)",
    paddingVertical: 10,
    borderBottom: "1px solid gray",
    borderTop: "1px solid gray",
  },
  containerResult: {
    display: "flex",
  },
  sectionResultDataOperatore: {
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid gray",
    maxHeight: 270,
  },
  sectionAnno: {
    width: "25%",
  },
  sectionMese: {
    width: "25%",
    borderRight: "1px solid gray",
    borderLeft: "1px solid gray",
  },
  sectionGiorno: {
    width: "25%",
  },
  sectionOperatore: { width: "25%", borderLeft: "1px solid gray" },
  sectionComuneControlliNormeDocRit: {
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid gray",
    maxHeight: 340,
  },
  sectionComune: { width: "25%" },
  sectionVerifiche: {
    width: "25%",
    borderRight: "1px solid gray",
    borderLeft: "1px solid gray",
  },
  sectionNormeViolate: { width: "25%" },
  sectionDocRitirati: { width: "25%", borderLeft: "1px solid gray" },
});

function StampaReport() {
  const navigate = useNavigate();
  const location = useLocation();
  const LoggedMyContext = useContext(LoggedContext);

  // Tipo per l'oggetto DayCounts
  interface DayCounts {
    [dayOfWeek: string]: number;
  }

  // Tipo per l'oggetto monthStatistics
  interface MonthCount {
    [month: string]: number;
  }

  const filtri = location.state.filtro;
  const report = location.state.report;

  // Stati per tenere traccia delle statistiche
  const [operatorStatistics, setOperatorStatistics] = useState({});
  const [regionStatistics, setRegionStatistics] = useState({});
  const [provinceStatistics, setProvinceStatistics] = useState({});
  const [municipalityStatistics, setMunicipalityStatistics] = useState({});
  const [yearStatistics, setYearStatistics] = useState({});
  const [monthStatistics, setMonthStatistics] = useState({});
  const [dayStatistics, setDayStatistics] = useState({});
  const [checksStatistics, setChecksStatistics] = useState({});
  const [normsViolatedStatistics, setNormsViolatedStatistics] = useState({});
  const [documentsRetiredStatistics, setDocumentsRetiredStatistics] = useState(
    {}
  );

  // Funzione per calcolare le statistiche
  const calculateStatistics = () => {
    const operatorCounts: object = {};
    const regionCounts = {};
    const provinceCounts = {};
    const municipalityCounts = {};
    const yearCounts = {};
    const monthCounts: MonthCount = {};
    const dayCounts: DayCounts = {};
    const checksCounts = {};
    const normsViolatedCounts = {};
    const documentsRetiredCounts = {};

    // Calcola il conteggio per il cognome e il nome dell'operatore, la provincia e il comune
    report.forEach((item: any) => {
      const operator = item.fieldData.D_24_cognome_nome_operatore;
      const region = item.fieldData.D_10_regione;
      const province = item.fieldData.D_07_provincia;
      const municipality = item.fieldData.D_08_comune;
      const [giorno, mese, anno] = item.fieldData.D_01_data.split("/");
      const formattedDate = `${anno}-${mese}-${giorno}`;
      const newDate = new Date(formattedDate);

      const year = newDate.getFullYear();
      const month =
        newDate
          .toLocaleString("default", { month: "long" })
          .charAt(0)
          .toUpperCase() +
        newDate.toLocaleString("default", { month: "long" }).slice(1);
      const dayOfWeek = getDayOfWeek(newDate.getDay());
      const checks = item.fieldData.D_27_controlli_eseguiti
        ? item.fieldData.D_27_controlli_eseguiti.split(",").map((value) =>
            value.trim()
          )
        : [];
      const normsViolated = item.D_25_norme_violate
        ? item.fieldData.D_25_norme_violate.split(",").map((value) =>
            value.trim()
          )
        : [];
      const documentsRetired = item.fieldData.D_26_documenti_ritirati
        ? item.fieldData.D_26_documenti_ritirati.split(",").map((value) =>
            value.trim()
          )
        : [];

      operatorCounts[operator] = (operatorCounts[operator] || 0) + 1;
      regionCounts[region] = (regionCounts[region] || 0) + 1;
      provinceCounts[province] = (provinceCounts[province] || 0) + 1;
      municipalityCounts[municipality] =
        (municipalityCounts[municipality] || 0) + 1;
      yearCounts[year] = (yearCounts[year] || 0) + 1;
      monthCounts[month] = (monthCounts[month] || 0) + 1;
      dayCounts[dayOfWeek] = (dayCounts[dayOfWeek] || 0) + 1;

      // Incrementa il conteggio per ciascun controllo eseguito
      checks.forEach((check) => {
        checksCounts[check] = (checksCounts[check] || 0) + 1;
      });

      // Incrementa il conteggio per ciascuna norma CDS violata
      normsViolated.forEach((norm) => {
        normsViolatedCounts[norm] = (normsViolatedCounts[norm] || 0) + 1;
      });

      // Incrementa il conteggio per ciascun documento ritirato
      documentsRetired.forEach((document) => {
        documentsRetiredCounts[document] =
          (documentsRetiredCounts[document] || 0) + 1;
      });
    });

    // Ordinamento dell'oggetto in base ai giorni della settimana
    const sortedDayCounts: DayCounts = {};
    const daysOfWeek = [
      "Domenica",
      "Lunedì",
      "Martedì",
      "Mercoledì",
      "Giovedì",
      "Venerdì",
      "Sabato",
    ];
    for (const day of daysOfWeek) {
      if (dayCounts[day] !== undefined) {
        sortedDayCounts[day] = dayCounts[day];
      }
    }

    // Ordinamento dell'oggetto in base ai Mesi dell'anno
    const sortedMonthCounts: MonthCount = {};
    const monthOfYear = [
      "Gennaio",
      "Febbraio",
      "Marzo",
      "Aprile",
      "Maggio",
      "Giugno",
      "Luglio",
      "Agosto",
      "Settembre",
      "Ottobre",
      "Novembre",
      "Dicembre",
    ];
    for (const month of monthOfYear) {
      if (monthCounts[month] !== undefined) {
        sortedMonthCounts[month] = monthCounts[month];
      }
    }

    setOperatorStatistics(operatorCounts);
    setRegionStatistics(regionCounts);
    setProvinceStatistics(provinceCounts);
    setMunicipalityStatistics(municipalityCounts);
    setYearStatistics(yearCounts);
    setMonthStatistics(sortedMonthCounts);
    setDayStatistics(sortedDayCounts);
    setChecksStatistics(checksCounts);
    setNormsViolatedStatistics(normsViolatedCounts);
    setDocumentsRetiredStatistics(documentsRetiredCounts);
  };

  // Funzione per ottenere il nome del giorno della settimana
  const getDayOfWeek = (dayIndex) => {
    const daysOfWeek = [
      "Domenica",
      "Lunedì",
      "Martedì",
      "Mercoledì",
      "Giovedì",
      "Venerdì",
      "Sabato",
    ];
    return daysOfWeek[dayIndex];
  };

  // Calcola le statistiche quando il componente si monta
  useEffect(() => {
    calculateStatistics();
  }, [report]);

  const dataOdierna = () => {
    const oggi = new Date();
    const giorno = String(oggi.getDate()).padStart(2, "0");
    const mese = String(oggi.getMonth() + 1).padStart(2, "0"); // Mese inizia da 0
    const anno = oggi.getFullYear();

    return `${giorno}/${mese}/${anno}`;
  };

  const getOraAttuale = () => {
    const ora = new Date().getHours().toString().padStart(2, "0");
    const minuti = new Date().getMinutes().toString().padStart(2, "0");
    return `${ora}:${minuti}`;
  };

  function getDataOggiPerRenameFile() {
    const oggi = new Date();
    const giorno = String(oggi.getDate()).padStart(2, "0");
    const mese = String(oggi.getMonth() + 1).padStart(2, "0"); // I mesi vanno da 0 a 11
    const anno = oggi.getFullYear();

    return `${giorno}-${mese}-${anno}`;
  }

  function GeneraDocumentoPDF() {
    return (
      <Document>
        <Page size="A4" wrap={true} style={styles.page}>
          <View style={styles.sectionTitle} fixed>
            <Text style={styles.title1}>{data.header.Nome_comune}</Text>
            <Image style={styles.logoEnte} src={data.header.Logo_comune} />
            <Text style={styles.title2}>Comando polizia locale</Text>
          </View>
          <View style={styles.sectionData}>
            <View style={styles.sectionsubTitle}>
              <Text style={styles.subTitle}>
                Report statistici dei posti di controllo stradali
              </Text>
            </View>
            <View style={styles.containerFilter}>
              <View style={styles.titleSection}>
                <Text>Caratteristiche della ricerca</Text>
              </View>
              {(filtri.dateStartFiltro && filtri.dateEndFiltro) ||
              filtri.specificDateFiltro ||
              (filtri.oraInizioFiltro && filtri.oraFineFiltro) ||
              filtri.regioneFiltro ||
              filtri.provinciaFiltro ||
              filtri.comuneFiltro.description ||
              filtri.cognomeNomeOperatoreFiltro ||
              filtri.normaViolataStringa ? (
                <PrintFiltri filtri={filtri} />
              ) : (
                <Text style={styles.textNessunDato}>
                  Nessun filtro selezionato
                </Text>
              )}
            </View>
            {report ? (
              <View style={styles.containerResult}>
                <View style={styles.titleSection}>
                  <Text>Risultati</Text>
                </View>
                <View style={styles.sectionResultDataOperatore}>
                  <View style={styles.sectionAnno}>
                    <PrintAnno yearStatistics={yearStatistics} />
                  </View>
                  <View style={styles.sectionMese}>
                    <PrintMese monthStatistics={monthStatistics} />
                  </View>
                  <View style={styles.sectionGiorno}>
                    <PrintGiorno dayStatistics={dayStatistics} />
                  </View>
                  <View style={styles.sectionOperatore}>
                    <PrintOperatore operatorStatistics={operatorStatistics} />
                  </View>
                </View>
                <View style={styles.sectionComuneControlliNormeDocRit}>
                  <View style={styles.sectionComune}>
                    <PrintComune
                      regionStatistics={regionStatistics}
                      provinceStatistics={provinceStatistics}
                      municipalityStatistics={municipalityStatistics}
                    />
                  </View>
                  <View style={styles.sectionVerifiche}>
                    <PrintVerifiche checksStatistics={checksStatistics} />
                  </View>
                  <View style={styles.sectionNormeViolate}>
                    <PrintNormeViol
                      normsViolatedStatistics={normsViolatedStatistics}
                    />
                  </View>
                  <View style={styles.sectionDocRitirati}>
                    <PrintDocumentiRitirati
                      documentsRetiredStatistics={documentsRetiredStatistics}
                    />
                  </View>
                </View>
              </View>
            ) : (
              <Text style={styles.textNessunDato}>
                Nessun risultato trovato per i criteri di ricerca inseriti!
              </Text>
            )}
          </View>
          <View style={styles.numberPage} fixed>
            <Text>
              Report SCP22 effettuato in data {dataOdierna()} alle ore{" "}
              {getOraAttuale()} da{" "}
              {LoggedMyContext.A4_03_TabRig_utenti_M_10_cognome_nome}{" "}
            </Text>
            <Text
              render={({ pageNumber, totalPages }) =>
                `Pagina ${pageNumber} di ${totalPages}`
              }
            />
          </View>
        </Page>
      </Document>
    );
  }

  return (
    <div className="bg-gray-200 w-screen h-screen px-4 pt-16 grid grid-cols-8">
      <div className="col-span-7 w-full h-full ">
        <PDFViewer style={styles.viewer}>{GeneraDocumentoPDF()}</PDFViewer>
      </div>

      <div className="col-span-1 w-full h-full flex flex-col justify-start items-end">
        <button
          onClick={() => {
            navigate("/SCP22");
          }}
          className=" bg-gialloSofitel border-2 border-gialloBordo hover:bg-gialloBordo hover:border-gialloBordo font-medium rounded-lg text-sm px-4 py-2"
        >
          INDIETRO
        </button>
        {/* Bottone per scaricare il PDF */}
        <button
          className="mt-2 bg-gialloSofitel border-2 border-gialloBordo hover:bg-gialloBordo hover:border-gialloBordo font-medium rounded-lg text-sm px-4 py-2"
          onClick={() => {
            // Funzione per scaricare il PDF
            const nomeDelFile = `Report_SCP22_generato_in_data_${getDataOggiPerRenameFile()}.pdf`; // rinominare il file dinamicamente con questa variabile
            pdf(GeneraDocumentoPDF())
              .toBlob()
              .then((blob) => saveAs(blob, nomeDelFile));
          }}
        >
          SCARICA PDF
        </button>
      </div>
    </div>
  );
}
export default StampaReport;
