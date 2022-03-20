import { Header } from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Why from "./components/Why/Why";
import Think from "./components/Think/Think";
import MiniSection from "./components/MiniSection/MiniSection";
import Pulse from "./components/Pulse/Pulse";
import HeartBeatInfo from "./components/HeartBeatInfo/HeartBeatInfo";
import Footer from "./Footer/Footer";
import "./App.css";
function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col-md-10">
            <Header />
            <Intro />
            <Why />
            <Think />
            <MiniSection />
            <Pulse />
            <HeartBeatInfo />
            <Footer />
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
}

export default App;
