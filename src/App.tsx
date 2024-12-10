import "./App.scss";
import { MyButton, Button16 } from "./components";
import Routes from "./routes";
import AppProvider from "./Context";

function App() {
  return (
    <div className="App">
      {/* <MyButton label="Clique Aqui" onClick={() => alert("Botão clicado!")} /> */}
      <AppProvider>
        <Routes />
      </AppProvider>
    </div>
  );
}

export default App;
