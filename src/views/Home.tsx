import { Button } from "@mui/material";
import { useAppContext } from "../Context";

const Home: React.FC = () => {
  const { chooseLanguage } = useAppContext();

  return (
    <div>
      <p>Home</p>
      <Button onClick={chooseLanguage}>Mudar idioma</Button>
    </div>
  );
};

export default Home;
