import { useTheme } from "@mui/material/styles";
import { CardNewItem, Grid, MyAvatar, MyBox } from "../components";

import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import SettingsIcon from "@mui/icons-material/Settings";

import { IconButton, Typography } from "@mui/material";
import baby from "../assets/img/baby.png";
import { useNavigate } from "react-router-dom";
import { BorderColor, Height, Padding } from "@mui/icons-material";

import { ACTIONS } from "../constants/actions";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Grid container={true}>
      <Grid
        container={true}
        size={{ xs: 12 }}
        sx={{
          ...styles.centerMyBox,
          border: `1px solid black`,
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
              ...styles.icon,
              color: `${theme.palette.primary.main}`,
              border: `2px solid ${theme.palette.primary.main}`,
            }}
          >
            {<SignalCellularAltIcon fontSize="large" />}
          </IconButton>
          <MyBox>
            <Typography sx={styles.text2}>52,5 cm</Typography>
            <Typography sx={styles.text3}>Comprimento</Typography>
          </MyBox>
        </Grid>
        <Grid item={true} size={{ xs: 4 }}>
          <MyAvatar src={baby} sx={styles.avatar} />
          <MyBox>
            <Typography sx={{ ...styles.text1 }}>Helena</Typography>
            <Typography sx={{ ...styles.text3 }}>X Dia(s)</Typography>
          </MyBox>
        </Grid>
        <Grid
          item={true}
          size={{ xs: 4 }}
          onClick={() => navigate("/settings")}
        >
          <IconButton
            sx={{
              ...styles.iconButton,
              ...styles.icon,
              color: `${theme.palette.primary.main}`,
              border: `2px solid ${theme.palette.primary.main}`,
            }}
          >
            {<SettingsIcon sx={{ fontSize: 40 }} />}
          </IconButton>
          <MyBox>
            <Typography sx={{ ...styles.text2 }}>3,27 kg</Typography>
            <Typography sx={{ ...styles.text3 }}>Peso</Typography>
          </MyBox>
        </Grid>
      </Grid>
      {/* grid debaixo */}

      <Grid container={true} size={{ xs: 12 }}>
        <Grid
          container={true}
          sx={{
            ...styles.centerMyBox,
            border: `1px solid black`,
          }}
        >
          {ACTIONS.map((action, idx) => {
            return (
              <Grid item={true} size={{ xs: 4 }}>
                <CardNewItem {...action} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
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
  centerText: {
    textAlign: "center",
    padding: 20,
  },
  text1: {
    fontSize: "1.2em",
    fontWeight: "600",
    fontFamily: "'Lato', sans-serif",
  },
  text2: {
    fontSize: "1em",
    fontWeight: "600",
  },
  text3: {
    fontSize: "1em",
    fontWeight: "400",
  },
};
