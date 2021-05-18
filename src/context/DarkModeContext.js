import { useContext, createContext } from "react";

export const DarkModeContext = createContext();

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error(`You should use useDarkMode only within the useDarkMode.Provider`);
  }
  return context;
};
