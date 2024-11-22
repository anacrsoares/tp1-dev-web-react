import {
  Button,
  Snackbar,
  Avatar,
  Box,
  Card,
  CardContent,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Container,
  Fab,
  IconButton,
} from "@mui/material";
import { useAppContext } from "../Context";
import { DatePickerComponent, DateTimePickerComponent } from "../components";
import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import shopping from "../assets/img/shopping-store.png";
import cart from "../assets/img/cart.png";

const Home: React.FC = () => {
  const { chooseLanguage, showAlertMessage } = useAppContext();
  const [open, setOpen] = useState(false);

  // Configura o timeout apenas uma vez usando useEffect
  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpen(true);
    }, 2000);

    // Limpa o timeout ao desmontar o componente
    return () => clearTimeout(timeout);
  }, []);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return; // Evita fechar o Snackbar se clicar fora
    }
    setOpen(false); // Atualiza o estado para fechar o Snackbar
  };

  return (
    <div>
      <p>Home</p>
      <Button onClick={chooseLanguage}>Mudar idioma</Button>
      <div>
        <hr />
        <div>
          <h1>TP 2</h1>
          <h2>1. Crie um componente de Alert em seu projeto</h2>
          <p>
            Crie e teste seu componente de alert dentro do projeto para
            confirmar que ele funciona conforme o esperado.
          </p>
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

        <div>
          <h2>2. Crie um componente de Avatar em seu projeto</h2>

          <p>
            Crie e teste seu componente de avatar dentro do projeto para
            confirmar que ele funciona conforme o esperado.
          </p>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Avatar src={shopping} sx={{ width: 48, height: 48 }} />
          </div>
        </div>
        <h2>3. Crie um componente de Box em seu projeto</h2>
        <p>
          Crie e teste seu componente de box dentro do projeto para confirmar
          que ele funciona conforme o esperado.
        </p>

        <Box
          component="section"
          sx={{
            p: 2,
            border: "3px dashed grey",
            width: "50%",
            margin: "auto",
            bgcolor: "#999",
          }}
        />

        <div>
          <h2>4. Crie um componente de Card em seu projeto</h2>
          <p>
            Crie e teste seu componente de card dentro do projeto para confirmar
            que ele funciona conforme o esperado.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "auto",
            }}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Categorias
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Veja as categorias de produtos disponíveis na loja.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
        <div>
          <h2>5. Crie um componente de Checkbox em seu projeto</h2>
          <p>
            Crie e teste seu componente de checkbox dentro do projeto para
            confirmar que ele funciona conforme o esperado.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "auto",
            }}
          >
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Label"
              />
              <FormControlLabel
                required
                control={<Checkbox />}
                label="Required"
              />
              <FormControlLabel
                disabled
                control={<Checkbox />}
                label="Disabled"
              />
            </FormGroup>
          </div>
        </div>
        <div>
          <h2>6. Crie um componente de Container em seu projeto</h2>
          <p>
            Crie e teste seu componente de container dentro do projeto para
            confirmar que ele funciona conforme o esperado.
          </p>
          <Container
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                bgcolor: "lightblue",
                width: 150,
                height: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 2,
              }}
            >
              Bloco 1
            </Box>

            <Box
              sx={{
                bgcolor: "lightgreen",
                width: 100,
                height: 150,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 2,
              }}
            >
              Bloco 2
            </Box>

            <Box
              sx={{
                bgcolor: "lightcoral",
                width: 300,
                height: 150,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 2,
              }}
            >
              Bloco 3
            </Box>

            <Box
              sx={{
                bgcolor: "yellow",
                width: 400,
                height: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 2,
              }}
            >
              Bloco 4
            </Box>

            {/* Bloco 5 */}
            <Box
              sx={{
                bgcolor: "lightpink",
                width: 150,
                height: 150,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 2,
              }}
            >
              Bloco 5
            </Box>
          </Container>
        </div>

        <div>
          <h2>
            7. Instale a biblioteca adicionar @mui/x-date-pickers em seu projeto
          </h2>
          <p>
            A biblioteca mui x-date-picker é uma lib a parte que precisa ser
            instalada antes de construir o componente de datepicker e
            datetimepicker.
          </p>
        </div>

        <div>
          <h2>
            8. Crie um componente de DatePicker e outro de DateTimePicker em seu
            projeto
          </h2>
          <p>
            Crie e teste seus componentes de datePicker e DateTimePicker dentro
            do projeto para confirmar que eles funcionam conforme o esperado.
          </p>
          <DatePickerComponent format="DD / MM / YYYY" />
          <DateTimePickerComponent format="DD / MM / YYYY HH:mm" ampm={false} />
        </div>

        <div>
          <h2>9. Crie um componente de Fab em seu projeto</h2>
          <p>
            Crie e teste seus componentes de datePicker e DateTimePicker dentro
            do projeto para confirmar que eles funcionam conforme o esperado.
          </p>

          <Fab>
            <Avatar src={cart} sx={{ width: 48, height: 48 }}></Avatar>
          </Fab>
        </div>

        <div>
          <h2>11. Crie um componente de IconButton em seu projeto</h2>
          <p>
            Crie e teste seus componentes de datePicker e DateTimePicker dentro
            do projeto para confirmar que eles funcionam conforme o esperado.
          </p>
        </div>

        <div>
          <h2>12. Crie um componente de SnackBar em seu projeto</h2>
          <p>
            Crie e teste seu componente de snackBar dentro do projeto para
            confirmar que ele funciona conforme o esperado.
          </p>

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
        </div>
      </div>
    </div>
  );
};

export default Home;
