import "./App.css";
import { MyButton } from "./components";

function App() {
  return (
    <div className="App">
      <MyButton label="Clique Aqui" onClick={() => alert("Botão clicado!")} />
    </div>
  );
}

export default App;
