import React from "react";
import { Button } from "@mui/material";

// Declare the function type for showAlertMessage
type AlertMessageType = (type: "success" | "info" | "warning" | "error", message: string) => void;

// Dummy implementation for showAlertMessage (replace with actual implementation)
const showAlertMessage: AlertMessageType = (type, message) => {
  console.log(`${type.toUpperCase()}: ${message}`);
};

const Alert: React.FC = () => {
  return (
    <div>
      <Button
        onClick={() =>
          showAlertMessage("success", "Seja bem-vindo(a) à página home")
        }
      >
        Success
      </Button>
      <Button
        onClick={() => showAlertMessage("info", "Você está na página home")}
      >
        Info
      </Button>
      <Button
        onClick={() =>
          showAlertMessage(
            "warning",
            "Você precisa estar logado para acessar a página home"
          )
        }
      >
        Warning
      </Button>
      <Button onClick={() => showAlertMessage("error", "Senha incorreta")}>
        Error
      </Button>
    </div>
  );
};

export default Alert;
