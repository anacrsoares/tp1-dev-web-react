import { useAppContext } from "../../src/Context";
import { Typography, TextField, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

const Signin: React.FC = () => {
  const { showAlertMessage, supabase } = useAppContext();

  showAlertMessage("success", "Você está na página de signin.");
  console.log(supabase);

  return (
    <div>
      <h1>
        TP 2 <hr />
      </h1>

      <div>
        <h2>10. Crie um componente de Grid em seu projeto</h2>
        <p>
          Crie e teste seu componente de grid dentro do projeto para confirmar
          que ele funciona conforme o esperado.
        </p>
      </div>

      <div>
        <h2>15. Crie um componente de TextField em seu projeto</h2>
        <p>
          Crie e teste seu componente de textField dentro do projeto para
          confirmar que ele funciona conforme o esperado.
        </p>
      </div>

      <div>
        <h2>16. Crie um componente de Typography em seu projeto</h2>
        <p>
          Crie e teste seu componente de typography dentro do projeto para
          confirmar que ele funciona conforme o esperado.
        </p>
      </div>

      <Grid container={true}>
        <Grid size={12}>
          <Typography variant="h3">Login</Typography>
        </Grid>
      </Grid>
      <Grid container={true}>
        <Grid size={12}>
          <Typography variant="h4">Seja bem-vindo(a)</Typography>
        </Grid>
      </Grid>
      <Grid container={true}>
        <Grid size={12}>
          <Typography variant="h6">Digite o seu e-mail</Typography>
        </Grid>
      </Grid>
      <Grid size={12}>
        <TextField />
      </Grid>

      <Grid container={true}>
        <Grid size={12}>
          <Typography variant="h6">Digite a sua senha</Typography>
        </Grid>
      </Grid>
      <Grid size={12}>
        <TextField />
      </Grid>

      <Button>Entrar</Button>

      <Grid size={12}>
        <Link to="/signup">Cadastrar</Link>
      </Grid>
    </div>
  );
};

export default Signin;
