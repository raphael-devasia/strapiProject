import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBArOpen] = useState(false);
  const [pageId, setPageId] = useState(null);

  const openSideBar = () => {
    setIsSideBArOpen(true);
  };
  const closeSideBar = () => {
    setIsSideBArOpen(false);
  };

  return (
    <AppContext.Provider
      value={{ isSideBarOpen, closeSideBar, openSideBar, pageId, setPageId }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
