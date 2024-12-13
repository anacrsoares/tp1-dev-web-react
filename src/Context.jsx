import { createContext, useContext } from "react";
import { Alert } from "@mui/material";
import { useState } from "react";

// Configurando o supabase
import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  import.meta.env.VITE_APP_SUPABASE_URL,
  import.meta.env.VITE_APP_SUPABASE_API_KEY
);

// 1st step - App Context nulo
const AppContext = createContext(null);
const timeoutDuration = 6000;

// 2nd step - Provedor do contexto
const AppProvider = ({ children }) => {
  // 3rd step - functions for shared state

  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const [alertMessage, setAlertMessage] = useState(null);
  const [alertSeverity, setAlertSeverity] = useState("");
  const [alertVariant, setAlertVariant] = useState(null);

  const showSnackMessage = (message) => {
    setSnackMessage(message);
    setSnackOpen(true);
  };

  function chooseLanguage() {
    console.log("estou escolhendo um idioma.");
  }

  const showAlertMessage = (message, severity, variant) => {
    setAlertMessage(message);
    setAlertSeverity(severity);
    setAlertVariant(variant);

    setTimeout(() => {
      setAlertMessage("");
    }, timeoutDuration);
  };

  const handleClose = () => {
    setSnackMessage("");
    setSnackOpen(false);
  };

  // 4rd step - shared state
  const sharedState = {
    chooseLanguage,
    showSnackMessage,
    showAlertMessage,
    supabase,
  };

  // 5th step - retornar o useContext sem expor o AppContext
  return (
    <AppContext.Provider value={sharedState}>
      {children}
      {alertMessage ? (
        <Alert severity={alertSeverity} sx={{ mt: -10 }}>
          {alertMessage}
        </Alert>
      ) : null}
    </AppContext.Provider>
  );
};

export default AppProvider;

// 6th step - Hook para usar o contexto é padrão, precaver que o contexto não carregue nulo
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
