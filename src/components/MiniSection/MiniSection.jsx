import React from "react";
import "./minisection.scss";

const MiniSection = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col-md-8 min__div">
            <div>
              <p style={{ color: "white" }} className="mini__text">
                <b style={{ fontWeight: "700" }}>$HBT</b> is HEARTBEAT (HBT) is
                a meme auto-staking token, by buying and holding{" "}
                <b style={{ fontWeight: "700" }}>$HBT</b>, you contribute to a
                global mental health awareness and charity while earning highest
                fixed APY in the market of 400,000%, rebasing rewards every 30
                minutes, and a simple buy-hold-earn system that grows your
                balance in your wallet in{" "}
                <b style={{ fontWeight: "700" }}>$HBT</b>, fast.
              </p>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};

export default MiniSection;
