import "./App.css";
import { Header } from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Why from "./components/Why/Why";
import Think from "./components/Think/Think";
function App() {
  return (
    <div>
      <Header />
      <Intro />
      <Why />
      <Think />
    </div>
  );
}

export default App;
