import { useTheme } from "@mui/material/styles";
import { CardNewItem, Grid, MyAvatar, Box, CustomList } from "../components";

import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import SettingsIcon from "@mui/icons-material/Settings";

import { IconButton, Typography } from "@mui/material";
import baby from "../assets/img/baby.png";
import { useNavigate } from "react-router-dom";

import { ACTIONS } from "../constants/actions";

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const label = { inputProps: { "aria-label": "Size switch demo" } };

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
    <>
      <Grid
        container={true}
        sx={{
          overflow: "hidden",
          height: "100vh",
          backgroundColor: `${theme.palette.primary.main}`,
        }}
      >
        <Grid
          container={true}
          size={{ xs: 12 }}
          sx={{
            ...styles.centerMyBox,
            border: `1px solid transparent`,
            backgroundColor: "#f0f0f0",
            height: "300px",
            paddingBottom: "110px",
          }}
        >
          <Grid
            item={true}
            size={{ xs: 4 }}
            onClick={() => navigate("/dashboard")}
          >
            <IconButton
              sx={{
                ...styles.iconButton,
                color: `${theme.palette.primary.main}`,
                borderRadius: "50%", // Cria o círculo
                border: `2px solid ${theme.palette.primary.main}`, // Cor da borda
              }}
            >
              {
                <SignalCellularAltIcon
                  fontSize="large"
                  sx={{ ...styles.icon }}
                />
              }
            </IconButton>
            <Box>
              <Typography sx={styles.text2}>52,5 cm</Typography>
              <Typography sx={styles.text3}>Comprimento</Typography>
            </Box>
          </Grid>
          <Grid item={true} size={{ xs: 4 }}>
            <MyAvatar
              src={baby}
              sx={{ ...styles.avatar, paddingTop: "15px" }}
            />
            <Box>
              <Typography sx={{ ...styles.text1, wordWrap: "break-word" }}>
                Helena
              </Typography>
              <Typography sx={{ ...styles.text3 }}>X Dia(s)</Typography>
            </Box>
          </Grid>
          <Grid
            item={true}
            size={{ xs: 4 }}
            onClick={() => navigate("/settings")}
          >
            <IconButton
              sx={{
                ...styles.iconButton,
                color: `${theme.palette.primary.main}`,
                borderRadius: "50%", // Cria o círculo
                border: `2px solid ${theme.palette.primary.main}`, // Cor da borda
              }}
            >
              {<SettingsIcon sx={{ ...styles.icon }} />}
            </IconButton>
            <Box>
              <Typography sx={{ ...styles.text2 }}>3,27 kg</Typography>
              <Typography sx={{ ...styles.text3 }}>Peso</Typography>
            </Box>
          </Grid>

          {/* container de tarefas */}

          <Grid container={true} size={{ xs: 12 }}>
            <Grid
              container={true}
              sx={{
                ...styles.centerMyBox,
                position: "relative",
                top: "20px",
              }}
            >
              {ACTIONS.map((action, idx) => {
                return (
                  <Grid index={idx} item={true} size={{ xs: 4 }} s>
                    <CardNewItem {...action} />
                  </Grid>
                );
              })}
            </Grid>
            {/* fim container de tarefas */}
          </Grid>

          {/* container de listagem de tarefas */}
        </Grid>
        <Grid
          item={true}
          size={{ xs: 12 }}
          sx={{
            overflow: "auto",
            position: "relative",
            top: "45px",
            height: "255px",
            width: "100%",
            paddingBottom: "10px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <CustomList items={items} />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
