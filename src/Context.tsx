import { Alert, AlertColor } from "@mui/material";
import { createContext, useContext, ReactNode } from "react";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

// 1st step - Cria o contexto
// interface ts
// Definição centralizada do tipo para Supabase Client
type SupabaseClientType = ReturnType<typeof createClient>;

interface AppContextProps {
  chooseLanguage: () => void;
  showAlertMessage: (severity: AlertColor, message: string) => void;
  supabase: SupabaseClientType;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  readonly VITE_APP_SUPABASE_URL: string;
  readonly VITE_APP_SUPABASE_API_KEY: string;
}

const AppContext = createContext<AppContextProps | null>(null);

// Create a single supabase client for interacting with your database
const supabase: SupabaseClientType = createClient(
  import.meta.env.VITE_APP_SUPABASE_URL,
  import.meta.env.VITE_APP_SUPABASE_API_KEY
);

// 2nd step - Provedor do contexto
interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  // alert
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertSeverity, setAlertSeverity] = useState<AlertColor | undefined>(
    "success"
  );

  // snackbar
  const [snackOpen, setSnackOpen] = useState(false);

  function chooseLanguage() {
    console.log("estou escolhendo um idioma.");
  }

  const showAlertMessage = (severity: AlertColor, message: string) => {
    setAlertSeverity(severity);
    setAlertMessage(message);
  };

  const sharedState: AppContextProps = {
    chooseLanguage,
    showAlertMessage,
    supabase,
  };

  return (
    <AppContext.Provider value={sharedState}>
      {children}
      {alertMessage ? (
        <Alert severity={alertSeverity}>{alertMessage}</Alert>
      ) : null}
    </AppContext.Provider>
  );
};

export default AppProvider;

// 3rd step - Hook para usar o contexto
export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
