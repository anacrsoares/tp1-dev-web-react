// import { Alert } from "@mui/material";
import { useAppContext } from "../../src/Context";

const Signup: React.FC = () => {
  const { showAlertMessage } = useAppContext();

  showAlertMessage("info", "Cadastre-se para obter acesso ao app.");
  return "Signup";
};

export default Signup;
