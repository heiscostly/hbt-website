import React from "react";
import Head from "../../assets/head.png";
import Lines from "../../assets/lines.png";
import "./intro.scss";

const Intro = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <section className="col-md-10 housing__section">
            <div className="text__section">
              <div className="inner__text">
                <h4 style={{ paddingRight: "15px" }}>Heart beat token</h4>
                <img
                  style={{ width: "35px", height: "9px" }}
                  src={Lines}
                  alt=""
                />
              </div>
              <div className="other__text">
                <h2>The Hopeless romantic token</h2>
                <p>
                  The Heartbeat Token will be donating proceeds from buys, sells
                  and transfers to organizations that align with our values and
                  morale. We are creating an environment where people will feel
                  comfortable discussing their stories of times of bad mental
                  health.
                </p>
                <button>Contribute</button>
              </div>
            </div>
            <div className="image__section">
              <img src={Head} alt="head" />
            </div>
          </section>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};

export default Intro;
