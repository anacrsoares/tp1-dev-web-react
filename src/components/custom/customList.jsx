import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";

import CribIcon from "@mui/icons-material/Crib";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import BabyChangingStationIcon from "@mui/icons-material/BabyChangingStation";
import { useAppContext } from "../../Context";

const CustomList = ({ items, ...props }) => {
  const { translate } = useAppContext();

  const typesString = { 1: "sleep", 2: "eat", 3: "diaper" };
  const typesColor = {1: "#60c1fc", 2: "#33ff7d", 3: "ffff33"}

  const chooseIcon = (action_type) => {
    switch (action_type) {
      case "1":
        return <CribIcon />;
      case "2":
        return <RestaurantIcon />;
      case "3":
        return <BabyChangingStationIcon />;
      default:
        return <RestaurantIcon />;
    }
  };

  return (
    <List {...props}>
      {items.map((item, idx) => {
        return (
          <ListItem key={idx} sx={{background: "#fff"}}>
            <ListItemAvatar>
              <Avatar sx={{typesColor[item.action_type]}}>{getIcon(item.action_type)}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={t(typesString[item.action_type])}
              secondary="Jan 9, 2014"
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default CustomList;
