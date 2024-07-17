import React from "react";
import MySoftwareType from "./Interface/SoftwareInterface";
export const SoftwareContext = React.createContext<MySoftwareType>({
  nome_software: "",
  setNome_software: () => {},
});
