import { Card, Box, Typography, Fab } from "@mui/material";
import { MyBox, MyFab } from "../../components";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

export default function CardNewItem({ title, actionType, Icon, color }) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        overflow: "visible",
        borderRadius: 5,
        padding: 1,
        margin: 0.5,
        height: "fit-content",
      }}
    >
      <MyBox sx={{ ...styles.containerBox }}>
        <Icon sx={{ fontSize: "3rem", color: color }} />
      </MyBox>
      <Typography
        sx={{
          fontWeight: "800",
          width: "100%",
          marginTop: "0.5rem",
          wordWrap: "break-word",
        }}
      >
        {title}
      </Typography>
      <MyBox sx={{ ...styles.containerBox }}>
        <Typography
          sx={{ fontWeight: "400", color: "#888", wordWrap: "break-word" }}
        >
          Adicionar algo
        </Typography>
        <MyBox></MyBox>
      </MyBox>
      <MyBox sx={{ ...styles.containerBox }}>
        <Fab
          onClick={() => {
            navigate(`new/${actionType}`);
          }}
          sx={{
            color: color,
            backgroundColor: "#fff",
            bottom: "-35px",
          }}
        >
          {<AddIcon sx={{ color: color }} />}
        </Fab>
      </MyBox>
    </Card>
  );
}

const styles = {
  containerBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};
