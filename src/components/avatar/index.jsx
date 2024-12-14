import { Avatar } from "@mui/material";

const AvatarComponent = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Avatar {...props} />
    </div>
  );
};

export default AvatarComponent;
