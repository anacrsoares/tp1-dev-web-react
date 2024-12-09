import React from "react";
import { Avatar } from "@mui/material";
import shopping from "../../assets/img/shopping-store.png";

const MyAvatar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Avatar src={shopping} sx={{ width: 48, height: 48 }} />
    </div>
  );
};

export default MyAvatar;
