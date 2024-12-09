import { Fab, Avatar } from "@mui/material";
import cart from "../../assets/img/cart.png";

export default function MyFab() {
  return (
    <Fab>
      <Avatar src={cart} sx={{ width: 48, height: 48 }}></Avatar>
    </Fab>
  );
}
