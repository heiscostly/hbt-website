import React from "react";
import "./Think.scss";
import { Icon } from "../../assets/svg";

const Think = () => {
  return (
    <>
      <div className="container" style={{ marginTop: "8rem" }}>
        <div className="row">
          <div className="col"></div>
          <div className="col-md-8 housing__div">
            <div className="holding__img">
              <img src={Icon.banner} alt="" />
            </div>
            <div className="div__sect d-flex justify-content-evenly flex-column d-inline-block">
              <h5 style={{ color: "white" }}>
                MENTAL HEATH CHARITY THROUGH THE HEARTBEAT TOKEN.
              </h5>
              <p style={{ color: "white" }}>
                $HBT’s values and morale directly correlate with this notion of
                all natural mental health for a prosperous lifestyle. With each
                collaboration, we will be able to bring online awareness to a
                sensitive topic that online communities really struggle to talk
                about. Through the power of cryptocurrency and network, we will
                be able to accomplish the goal of everyone living a prosperous
                life.
              </p>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};

export default Think;
