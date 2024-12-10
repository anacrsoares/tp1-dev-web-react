import { Card, Box, Typography, Fab } from "@mui/material";
import { MyBox, MyFab } from "../../components";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

export default function CardNewItem({ title, actionType, Icon, color }) {
  const navigate = useNavigate();

  return (
    <Card>
      <MyBox>
        <Icon sx={{ fontSize: "3rem", color: color }} />
      </MyBox>
      <Typography>{title}</Typography>
      <MyBox>
        <Typography>Adicionar algo</Typography>
        <MyBox></MyBox>
      </MyBox>
      <MyBox>
        <Fab
          onClick={() => {
            navigate(`new/${actionType}`);
          }}
          sx={{ color: color }}
        >
          {<AddIcon sx={{ color: color }} />}
        </Fab>
      </MyBox>
    </Card>
  );
}
