import { useEffect, useState } from "react";

const ResultsReport = (props: any) => {
  const { state } = props;
  // Calcola le statistiche quando il componente si monta
  useEffect(() => {
    calculateStatistics();
  }, [state]);

  // Tipo per l'oggetto DayCounts
  interface DayCounts {
    [dayOfWeek: string]: number;
  }

  // Tipo per l'oggetto monthStatistics
  interface MonthCount {
    [month: string]: number;
  }

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
    state.forEach((item: any) => {
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
      const normsViolated = item.fieldData.D_25_norme_violate
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

  return (
    <div className="overflow-auto flex items-start flex-col w-full h-full pb-2 max-h-[780px]">
      <div className="text-lg h-12 w-full  border-b border-gray-500 flex items-center">
        <p>Numero di controlli trovati: {state.length}</p>
      </div>
      <div className="w-full h-full grid grid-cols-3 ">
        <div className="border-r border-gray-500 mt-4 mb-8">
          <div className="pb-10">
            <p className="text-xl">Operatore</p>
            {/* Visualizza i conteggi per il cognome e il nome dell'operatore */}
            {Object.entries(operatorStatistics).map(([operator, count]) => (
              <p className="text-sm" key={operator}>
                {operator}: {count}
              </p>
            ))}
          </div>
          <div className="pb-10">
            <p className="text-xl">Regione</p>
            {/* Visualizza i conteggi delle regioni */}
            {Object.entries(regionStatistics).map(([region, count]) => (
              <p className="text-sm" key={region}>
                {region}: {count}
              </p>
            ))}
          </div>
          <div className="pb-10">
            <p className="text-xl">Provincia</p>
            {/* Visualizza i conteggi per la provincia */}
            {Object.entries(provinceStatistics).map(([province, count]) => (
              <p className="text-sm" key={province}>
                {province}: {count}
              </p>
            ))}
          </div>
          <div className="pb-10">
            <p className="text-xl">Comune</p>
            {/* Visualizza i conteggi per il comune */}
            {Object.entries(municipalityStatistics).map(
              ([municipality, count]) => (
                <p className="text-sm" key={municipality}>
                  {municipality}: {count}
                </p>
              )
            )}
          </div>
        </div>
        <div className="border-r border-gray-500 mt-4 mb-8 ">
          <div className="pb-10">
            <p className="text-xl pl-2">Anno</p>
            {/* Visualizza i conteggi per l'anno */}
            {Object.entries(yearStatistics).map(([year, count]) => (
              <p className="pl-2 text-sm" key={year}>
                {year}: {count}
              </p>
            ))}
          </div>
          <div className="pb-10">
            <p className="text-xl pl-2">Mese</p>
            {/* Visualizza i conteggi per il mese */}
            {Object.entries(monthStatistics).map(([month, count]) => (
              <p className="pl-2 text-sm" key={month}>
                {month}: {count}
              </p>
            ))}
          </div>
          <div className="pb-10">
            <p className="text-xl pl-2">Giorno</p>
            {/* Visualizza i conteggi per il giorno */}
            {Object.entries(dayStatistics).map(([day, count]) => (
              <p className="pl-2 text-sm" key={day}>
                {day}: {count}
              </p>
            ))}
          </div>
        </div>
        <div className="border-r border-gray-500 mt-4 mb-8">
          <div className="pb-10">
            <p className="text-xl pl-2">Verifiche eseguite</p>
            {/* Visualizza i conteggi per le verifiche eseguite */}
            {Object.entries(checksStatistics).map(([check, count]) => (
              <p className="pl-2 text-sm" key={check}>
                {check}: {count}
              </p>
            ))}
          </div>
          <div className="pb-10">
            <p className="text-xl pl-2">Norme CDS violate</p>
            {/* Visualizza i conteggi per le norme CDS violate */}
            {Object.entries(normsViolatedStatistics).map(([norm, count]) => (
              <p className="pl-2 text-sm" key={norm}>
                {norm}: {count}
              </p>
            ))}
          </div>
          <div className="pb-10">
            <p className="text-xl pl-2">Documenti ritirati</p>
            {/* Visualizza i conteggi per i documenti ritirati */}
            {Object.entries(documentsRetiredStatistics).map(
              ([document, count]) => (
                <p className="pl-2 text-sm" key={document}>
                  {document}: {count}
                </p>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResultsReport;
