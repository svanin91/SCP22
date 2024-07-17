import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AddControlContextProvider } from "./Context/Provider/AddControlProvider.tsx";
import { LoggedContextProvider } from "./Context/Provider/LoggedProvider.tsx";
import { TabActiveProvider } from "./Context/Provider/TabActiveProvider.tsx";
import NuovoControlloProvider from "./Context/Provider/NuovoControloProvider.tsx";
import ModificaControlloProvider from "./Context/Provider/ModificaControlloProvider.tsx";
import { CodiceStradaleContextProvider } from "./Context/Provider/CodiceStradaleProvider.tsx";
import { SoftwareContextProvider } from "./Context/Provider/SoftwareProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LoggedContextProvider>
      <NuovoControlloProvider>
        <ModificaControlloProvider>
          <AddControlContextProvider>
            <CodiceStradaleContextProvider>
              <TabActiveProvider>
                <SoftwareContextProvider>
                  <App />
                </SoftwareContextProvider>
              </TabActiveProvider>
            </CodiceStradaleContextProvider>
          </AddControlContextProvider>
        </ModificaControlloProvider>
      </NuovoControlloProvider>
    </LoggedContextProvider>
  </React.StrictMode>
);
