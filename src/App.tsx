import "./App.scss";
import { MyButton, Button16 } from "./components";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      {/* <MyButton label="Clique Aqui" onClick={() => alert("Botão clicado!")} /> */}
      <Button16>clique aqui</Button16>
      <Routes />
    </div>
  );
}

export default App;
