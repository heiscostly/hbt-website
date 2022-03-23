import { Header } from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Why from "./components/Why/Why";
import Think from "./components/Think/Think";
import MiniSection from "./components/MiniSection/MiniSection";
import Pulse from "./components/Pulse/Pulse";
import HeartBeatInfo from "./components/HeartBeatInfo/HeartBeatInfo";
import Footer from "./Footer/Footer";
import SemiFooter from "./components/SemiFooter/SemiFooter";
import "./App.css";
function App() {
  return (
    <>
      <div className="container-lg" style={{ overflow: "auto" }}>
        <div className="row">
          {/* <div className="col"></div> */}
          <div className="col-lg-12">
            <Header />
            <Intro />
            <Why />
            <Think />
            <MiniSection />
            <Pulse />
            <HeartBeatInfo />
            <SemiFooter />
            <Footer />
          </div>
          {/* <div className="col"></div> */}
        </div>
      </div>
    </>
  );
}

export default App;
