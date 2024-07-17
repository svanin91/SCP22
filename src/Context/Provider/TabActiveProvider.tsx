import React, { useState } from "react";
import { TabActiveContext } from "../TabActiveContext";

export const TabActiveProvider = ({
  children,
}: React.PropsWithChildren<object>) => {
  const [tabActive, setTabActive] = useState("tab1");

  return (
    <TabActiveContext.Provider
      value={{
        tabActive,
        setTabActive,
      }}
    >
      {children}
    </TabActiveContext.Provider>
  );
};
