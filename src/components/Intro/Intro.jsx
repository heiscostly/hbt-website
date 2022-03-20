import React from "react";
import Head from "../../assets/head.png";
import Lines from "../../assets/lines.png";
import "./intro.scss";

const Intro = () => {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col"></div>
          <section className="col-md-10 housing__section">
            <div className="text__section">
              <div className="inner__text">
                <p style={{ paddingRight: "15px" }}>Heart Beat Token</p>
                <img className="line" src={Lines} alt="" />
              </div>
              <div className="other__text">
                <h2 className="hopeless">The Hopeless romantic token</h2>
                <p className="text__under">
                  The Heartbeat Token will be donating proceeds from buys, sells{" "}
                  {/* <br /> */}
                  and transfers to organizations that align with our values and
                  morale. We are creating an environment where people will feel
                  comfortable discussing their stories of times of bad mental
                  health.
                </p>
                <button className="contribute">Contribute</button>
              </div>
            </div>
            <div className="image__section">
              <img
                style={{ width: "100%", height: "50%" }}
                className="img"
                src={Head}
                alt="head"
              />
            </div>
          </section>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};

export default Intro;
