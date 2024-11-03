import "./App.css";
import { MyButton } from "./components";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <MyButton label="Clique Aqui" onClick={() => alert("Botão clicado!")} />
      <Routes />
    </div>
  );
}

export default App;
