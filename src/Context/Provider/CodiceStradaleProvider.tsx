import React, { useState } from "react";
import { CodiceStradaleContext } from "../CodiceStradaleContext";
export const CodiceStradaleContextProvider = ({
  children,
}: React.PropsWithChildren<object>) => {
  const [cds, setCds] = useState<[]>();

  return (
    <CodiceStradaleContext.Provider
      value={{
        cds,
        setCds,
      }}
    >
      {children}
    </CodiceStradaleContext.Provider>
  );
};
