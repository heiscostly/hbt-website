import React from "react";
import "./heartbeatinfo.scss";
import Icon from "../../assets/svg/Icon";

const HeartBeatInfo = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col"></div>
          <div className="col-md-8 heart__div">
            <div>
              <h4>HEARTBEAT TOKEN INFORMATION.</h4>
              <p>
                Token Name: HEARTBEAT
                <br /> Token Token Ticker: HBT
                <br /> Precision: 18 <br />
                Maximum Supply: 1.000.000.000.000
              </p>
            </div>
            <div className="mt-5">
              <img style={{ width: "100%" }} src={Icon.heartmetrics} alt="" />
            </div>
            <div className="mt-5">
              <img style={{ width: "100%" }} src={Icon.taxes} alt="" />
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};

export default HeartBeatInfo;
