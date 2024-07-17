import { useEffect, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./router/Component/Header";
import Footer from "./router/Component/Footer";
import SCP22 from "./router/SCP22/SCP22";
import Controllo from "./router/Controllo/Controllo";
import Report from "./router/Report/Report";
import NuovoControllo from "./router/Nuovo/NuovoControllo";
import ModificaControllo from "./router/Modifica/ModificaControllo";
import StampaControllo from "./router/Stampa/stampaControllo";
import StampaReport from "./router/StampaReport/stampaReport";
import { LoggedContext } from "./Context/LoggedContext";
import axios from "axios";

export default function App() {
  const LoggedMyContext = useContext(LoggedContext);

  // CHIAMTA DI LOGOUT PER INATTIVITà

  useEffect(() => {
    let timeoutId: number;

    const resetTimer = () => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        // Ricarica la pagina dopo 10 minuti di inattività
        axios.post("http://localhost:10100/logLogoutInattivita", {
          nomeUtente: LoggedMyContext.A4_03_TabRig_utenti_M_05_nome_utente,
        });
        //window.location.reload();
        window.close();
      }, 10 * 60 * 1000); // 10 minuti in millisecondi 10 * 60 * 1000)
    };

    // Aggiungi gli event listener per resettare il timer su interazione dell'utente
    window.addEventListener("mousemove", resetTimer); // Questo evento si verifica quando l'utente sposta il mouse sopra la pagina web
    window.addEventListener("keydown", resetTimer); // Si verifica quando l'utente preme un tasto sulla tastiera
    window.addEventListener("click", resetTimer); // Si verifica quando l'utente fa clic su un elemento della pagina web con il mouse
    window.addEventListener("scroll", resetTimer); // Questo evento si verifica quando l'utente scorre la pagina web

    // Inizializza il timer quando il componente si monta
    resetTimer();

    // Rimuovi gli event listener quando il componente viene smontato
    return () => {
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
      window.removeEventListener("click", resetTimer);
      window.removeEventListener("scroll", resetTimer);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (LoggedMyContext.logoutClick) {
        try {
          await axios.post("http://localhost:10100/logLogoutClick", {
            nomeUtente: LoggedMyContext.A4_03_TabRig_utenti_M_05_nome_utente,
          });
          window.location.reload();
        } catch (error) {
          console.error("Errore durante la chiamata AJAX:", error);
        }
      }
      LoggedMyContext.setLogOutClick(false);
    };

    fetchData();
  }, [LoggedMyContext.logoutClick]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/SCP22" element={<SCP22 />} />
        <Route path="/controllo/:_id" element={<Controllo />} />
        <Route path="/report" element={<Report />} />
        <Route path="/print/:_id" element={<StampaControllo />} />
        <Route path="/print/report" element={<StampaReport />} />
        <Route path="/nuovo-controllo" element={<NuovoControllo />} />
        <Route
          path="/modifica-controllo/:_id"
          element={<ModificaControllo />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
