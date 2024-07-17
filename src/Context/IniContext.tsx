import React from "react";
import MyIniContextType from "./Interface/IniContextInterface";

export const IniContext = React.createContext<MyIniContextType>({
  datiIni: false,
  setDatiIni: () => {},
});
