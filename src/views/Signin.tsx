import { useAppContext } from "src/Context";

const Signin: React.FC = () => {
  const { showAlertMessage, supabase } = useAppContext();

  return "Signin";
};

export default Signin;
