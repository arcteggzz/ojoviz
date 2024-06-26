import React, { createContext, useEffect, useState } from "react";
import { dropDownCategory } from "../types";

type AppContextProviderProps = {
  children: React.ReactNode;
};

type AppContextType = {
  mobileNavbarOpen: boolean;
  setMobileNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMobileNavbar: () => void;
  setDropDownChoice: React.Dispatch<React.SetStateAction<dropDownCategory>>;
  dropDownChoice: dropDownCategory;
  navBarActive: boolean;
  setNavbarActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = createContext({} as AppContextType);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false);
  const [navBarActive, setNavbarActive] = useState(false);

  const [dropDownChoice, setDropDownChoice] =
    useState<dropDownCategory>("All Projects");

  const toggleMobileNavbar = () => {
    setMobileNavbarOpen((mobileNavbarOpen) => !mobileNavbarOpen);
  };

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--scrollbar-track-color",
      "#4D4D4D"
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppContext.Provider
      value={{
        mobileNavbarOpen,
        setMobileNavbarOpen,
        toggleMobileNavbar,
        dropDownChoice,
        setDropDownChoice,
        navBarActive,
        setNavbarActive,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
