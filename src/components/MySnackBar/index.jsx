import { Snackbar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";

export default function MySnackBar() {
  const [open, setOpen] = useState(false);

  // Configura o timeout apenas uma vez usando useEffect
  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpen(true);
    }, 2000);

    // Limpa o timeout ao desmontar o componente
    return () => clearTimeout(timeout);
  }, []);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      action={
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      }
      onClose={handleClose}
      message="Você está na página home."
    />
  );
}
