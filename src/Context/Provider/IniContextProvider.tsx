import React, { useState } from "react";
import { IniContext } from "../IniContext";

export const IniContextProvider = ({
  children,
}: React.PropsWithChildren<object>) => {
  const [datiIni, setDatiIni] = useState <Object | >();

  return (
    <IniContext.Provider
      value={{
        datiIni,
        setDatiIni,
      }}
    >
      {children}
    </IniContext.Provider>
  );
};
