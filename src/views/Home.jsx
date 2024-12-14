import { IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  Grid,
  Avatar,
  Box,
  Typography,
  CardNewItem,
  CustomList,
} from "../components";
import baby from "../assets/img/baby.png";

import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import SettingsIcon from "@mui/icons-material/Settings";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ACTIONS } from "../constants/actions";
import { get, list } from "../services/supabasedb";
import { calculateDuration, getUser } from "../utils/core";
import { useAppContext } from "../Context";

const Home = () => {
  const { translate } = useAppContext();
  const navigate = useNavigate();
  const theme = useTheme();
  const user = getUser();
  const [data, setData] = useState([]);
  const [profile, setProfile] = useState({});

  const loadData = async () => {
    const d = await list("actions_baby");
    const profileData = await get("actions_baby", [
      { field: "user_id", value: user.id },
    ]);
    setProfile(profileData);

    if (d) {
      setData(d);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

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
            <Avatar src={baby} sx={{ ...styles.avatar, paddingTop: "15px" }} />
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
          <CustomList items={data} />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;

const styles = {
  centerMyBox: {
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  iconButton: {
    height: "2.5em",
    width: "2.5em",
  },
  icon: {
    fontSize: "2em",
  },
  MyBoxText: {
    flexDirection: "column",
    marginTop: ".5em",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 0,
    marginBottom: 1,
  },
  text1: {
    fontSize: "1.2em",

    fontWeight: "600",
    fontFamily: "'Lato', sans-serif",
  },
  text2: {
    fontSize: "1em",
    marginTop: "0.5em",
    fontWeight: "600",
  },
  text3: {
    fontSize: "1em",
    fontWeight: "400",
  },
};
