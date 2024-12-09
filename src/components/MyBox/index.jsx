import { Box } from "@mui/material";

const MyBox = () => {
  return (
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
  );
};

export default MyBox;
