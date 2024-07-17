import Select from "react-select";
import { useEffect, useState } from "react";

const InputSelectProvincia = (props: {
  thisState: string;
  thisSetState: React.Dispatch<React.SetStateAction<string>>;
  regioneControllo: string;
  initial?: string;
}) => {
  const { thisState, thisSetState, initial } = props;
  const [localState, setLocalState] = useState(initial || "");
  const regioneControllo = props.regioneControllo;
  // Verifica se initial è definito e imposta il valore iniziale (INITIAL é IL VALORE UTILIZZATO IN MODIFICA NEL CASO SIA STATO PRECEDENTEMENTE COMPILATO IL CAMPO)

  useEffect(() => {
    if (initial !== undefined) {
      thisSetState(initial);
      setLocalState(initial);
    }
  }, [initial, thisSetState]);

  let regioneOption;

  const Abruzzo = [
    { value: "Chieti", label: "Chieti" },
    { value: "L'Aquila", label: "L'Aquila" },
    { value: "Pescara", label: "Pescara" },
    { value: "Teramo", label: "Teramo" },
  ];
  const Basilicata = [
    { value: "Matera", label: "Matera" },
    { value: "Potenza", label: "Potenza" },
  ];

  const Calabria = [
    { value: "Catanzaro", label: "Catanzaro" },
    { value: "Cosenza", label: "Cosenza" },
    { value: "Crotone", label: "Crotone" },
    { value: "Reggio Calabria", label: "Reggio Calabria" },
    { value: "Vibo Valentia", label: "Vibo Valentia" },
  ];

  const Campania = [
    { value: "Avellino", label: "Avellino" },
    { value: "Benevento", label: "Benevento" },
    { value: "Caserta", label: "Caserta" },
    { value: "Napoli", label: "Napoli" },
    { value: "Salerno", label: "Salerno" },
  ];

  const EmiliaRomagna = [
    { value: "Bologna", label: "Bologna" },
    { value: "Ferrara", label: "Ferrara" },
    { value: "Forlì-Cesena", label: "Forlì-Cesena" },
    { value: "Modena", label: "Modena" },
    { value: "Parma", label: "Parma" },
    { value: "Piacenza", label: "Piacenza" },
    { value: "Ravenna", label: "Ravenna" },
    { value: "Reggio Emilia", label: "Reggio Emilia" },
    { value: "Rimini", label: "Rimini" },
  ];
  const FriuliVeneziaGiulia = [
    { value: "Gorizia", label: "Gorizia" },
    { value: "Pordenone", label: "Pordenone" },
    { value: "Trieste", label: "Trieste" },
    { value: "Udine", label: "Udine" },
  ];
  const Lazio = [
    { value: "Frosinone", label: "Frosinone" },
    { value: "Latina", label: "Latina" },
    { value: "Rieti", label: "Rieti" },
    { value: "Roma", label: "Roma" },
    { value: "Viterbo", label: "Viterbo" },
  ];
  const Liguria = [
    { value: "Genova", label: "Genova" },
    { value: "Imperia", label: "Imperia" },
    { value: "La Spezia", label: "La Spezia" },
    { value: "Savona", label: "Savona" },
  ];

  const Lombardia = [
    { value: "Bergamo", label: "Bergamo" },
    { value: "Brescia", label: "Brescia" },
    { value: "Como", label: "Como" },
    { value: "Cremona", label: "Cremona" },
    { value: "Lecco", label: "Lecco" },
    { value: "Lodi", label: "Lodi" },
    { value: "Mantova", label: "Mantova" },
    { value: "Milano", label: "Milano" },
    { value: "Monza e Brianza", label: "Monza e Brianza" },
    { value: "Pavia", label: "Pavia" },
    { value: "Sondrio", label: "Sondrio" },
    { value: "Varese", label: "Varese" },
  ];
  const Marche = [
    { value: "Ancona", label: "Ancona" },
    { value: "Ascoli Piceno", label: "Ascoli Piceno" },
    { value: "Fermo", label: "Fermo" },
    { value: "Macerata", label: "Macerata" },
    { value: "Pesaro e Urbino", label: "Pesaro e Urbino" },
  ];
  const Molise = [
    { value: "Campobasso", label: "Campobasso" },
    { value: "Isernia", label: "Isernia" },
  ];
  const Piemonte = [
    { value: "Alessandria", label: "Alessandria" },
    { value: "Asti", label: "Asti" },
    { value: "Biella", label: "Biella" },
    { value: "Cuneo", label: "Cuneo" },
    { value: "Novara", label: "Novara" },
    { value: "Torino", label: "Torino" },
    { value: "Verbano Cusio Ossola", label: "Verbano Cusio Ossola" },
    { value: "Vercelli", label: "Vercelli" },
  ];
  const Puglia = [
    { value: "Bari", label: "Bari" },
    { value: "Barletta-Andria-Trani", label: "Barletta-Andria-Trani" },
    { value: "Brindisi", label: "Brindisi" },
    { value: "Lecce", label: "Lecce" },
    { value: "Foggia", label: "Foggia" },
    { value: "Taranto", label: "Taranto" },
  ];
  const Sardegna = [
    { value: "Cagliari", label: "Cagliari" },
    { value: "Carbonia-Iglesias", label: "Carbonia-Iglesias" },
    { value: "Medio Campidano", label: "Medio Campidano" },
    { value: "Nuoro", label: "Nuoro" },
    { value: "Ogliastra", label: "Ogliastra" },
    { value: "Olbia-Tempio", label: "Olbia-Tempio" },
    { value: "Oristano", label: "Oristano" },
    { value: "Sassari", label: "Sassari" },
  ];
  const Sicilia = [
    { value: "Agrigento", label: "Agrigento" },
    { value: "Caltanissetta", label: "Caltanissetta" },
    { value: "Catania", label: "Catania" },
    { value: "Enna", label: "Enna" },
    { value: "Messina", label: "Messina" },
    { value: "Palermo", label: "Palermo" },
    { value: "Ragusa", label: "Ragusa" },
    { value: "Siracusa", label: "Siracusa" },
    { value: "Trapani", label: "Trapani" },
  ];
  const Toscana = [
    { value: "Arezzo", label: "Arezzo" },
    { value: "Firenze", label: "Firenze" },
    { value: "Grosseto", label: "Grosseto" },
    { value: "Livorno", label: "Livorno" },
    { value: "Lucca", label: "Lucca" },
    { value: "Massa e Carrara", label: "Massa e Carrara" },
    { value: "Pisa", label: "Pisa" },
    { value: "Pistoia", label: "Pistoia" },
    { value: "Prato", label: "Prato" },
    { value: "Siena", label: "Siena" },
  ];
  const Umbria = [
    { value: "Perugia", label: "Perugia" },
    { value: "Terni", label: "Terni" },
  ];
  const TrentinoAltoAdige = [
    { value: "Bolzano", label: "Bolzano" },
    { value: "Trento", label: "Trento" },
  ];
  const ValleDAosta = [{ value: "Aosta", label: "Aosta" }];

  const Veneto = [
    { value: "Belluno", label: "Belluno" },
    { value: "Padova", label: "Padova" },
    { value: "Rovigo", label: "Rovigo" },
    { value: "Treviso", label: "Treviso" },
    { value: "Venezia", label: "Venezia" },
    { value: "Verona", label: "Verona" },
    { value: "Vicenza", label: "Vicenza" },
  ];

  if (regioneControllo === "Abruzzo") {
    regioneOption = Abruzzo;
  } else if (regioneControllo === "Basilicata") {
    regioneOption = Basilicata;
  } else if (regioneControllo === "Calabria") {
    regioneOption = Calabria;
  } else if (regioneControllo === "Campania") {
    regioneOption = Campania;
  } else if (regioneControllo === "Emilia Romagna") {
    regioneOption = EmiliaRomagna;
  } else if (regioneControllo === "Friuli Venezia Giulia") {
    regioneOption = FriuliVeneziaGiulia;
  } else if (regioneControllo === "Lazio") {
    regioneOption = Lazio;
  } else if (regioneControllo === "Liguria") {
    regioneOption = Liguria;
  } else if (regioneControllo === "Lombardia") {
    regioneOption = Lombardia;
  } else if (regioneControllo === "Marche") {
    regioneOption = Marche;
  } else if (regioneControllo === "Molise") {
    regioneOption = Molise;
  } else if (regioneControllo === "Piemonte") {
    regioneOption = Piemonte;
  } else if (regioneControllo === "Puglia") {
    regioneOption = Puglia;
  } else if (regioneControllo === "Sardegna") {
    regioneOption = Sardegna;
  } else if (regioneControllo === "Sicilia") {
    regioneOption = Sicilia;
  } else if (regioneControllo === "Toscana") {
    regioneOption = Toscana;
  } else if (regioneControllo === "Trentino Alto Adige") {
    regioneOption = TrentinoAltoAdige;
  } else if (regioneControllo === "Umbria") {
    regioneOption = Umbria;
  } else if (regioneControllo === "Val d'Aosta") {
    regioneOption = ValleDAosta;
  } else if (regioneControllo === "Veneto") {
    regioneOption = Veneto;
  }

  const handleChange = (e: any) => {
    thisSetState(e.value);
    setLocalState(e.value);
  };

  return (
    <Select
      className=" w-full rounded-lg text-gray-900  block flex-1 text-sm"
      options={regioneOption}
      onChange={handleChange}
      placeholder={"Provincia"}
      value={localState ? { value: localState, label: localState } : null}
    />
  );
};
export default InputSelectProvincia;

/**
 *
 */
