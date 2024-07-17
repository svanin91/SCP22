import React from "react";
import MyTabActiveType from "./Interface/TabActiveInterface";

export const TabActiveContext = React.createContext<MyTabActiveType>({
  tabActive: "tab1",
  setTabActive: () => {},
});
