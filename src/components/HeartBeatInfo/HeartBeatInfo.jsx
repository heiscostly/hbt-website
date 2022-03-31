import React from "react";
import "./heartbeatinfo.scss";
import Icon from "../../assets/svg/Icon";

const HeartBeatInfo = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="col"
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "end",
              alignItems: "flex-end",
            }}
          >
            <img
              style={{
                position: "absolute",
                width: "400px",
                right: "-70px",
                zIndex: "-1",
              }}
              src={Icon.pulseVec}
              alt=""
            />
          </div>
          <div className="col-md-8 heart__div">
            <div>
              <h4 style={{ color: "white" }}>HEARTBEAT TOKEN INFORMATION.</h4>
              <p style={{ color: "white" }}>
                Token Name: HEARTBEAT
                <br /> Token Token Ticker: HBT
                <br /> Precision: 18 <br />
                Maximum Supply: 1.000.000.000.000
              </p>
            </div>
            <div className="mt-5" id="metrics">
              <img style={{ width: "100%" }} src={Icon.heartmetrics} alt="" />
            </div>
            <div className="mt-5" id="taxes">
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
