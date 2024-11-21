import { createContext, useContext, ReactNode } from "react";

// 1st step
interface AppContextProps {
  chooseLanguage: () => void;
}

const AppContext = createContext<AppContextProps | null>(null);

// 2nd step
interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const chooseLanguage = () => {
    console.log("estou escolhendo um idioma.");
  };

  const sharedState: AppContextProps = { chooseLanguage };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
};

export default AppProvider;

// 3rd step
export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
