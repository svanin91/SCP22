import React from "react";
import MyCodiceStradaleContextType from "./Interface/CodiceStradaleInterface";

export const CodiceStradaleContext =
  React.createContext<MyCodiceStradaleContextType>({
    cds: [],
    setCds: () => {},
  });
