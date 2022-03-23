import React from "react";
import "./pulse.scss";
import Icon from "../../assets/svg/Icon";

const Pulse = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div
            className="col newheart"
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
                width: "200px",
                right: "-70px",
                zIndex: "-1",
              }}
              src={Icon.heart}
              alt=""
            />
          </div>
          <div className="col-md-8 housing__divpulse">
            <div className="first__divtext">
              <h5 style={{ color: "white" }} className="new">
                New: The Pulse Testnet is live.
              </h5>
              <p style={{ color: "white" }}>
                Currently the second version of the PulseChain Testnet is live
                with validator rotation, registration, and staking. You can
                connect MetaMask now to view a copy of all of your ERC20 Tokens.{" "}
              </p>
            </div>
            <div className="second__div">
              <img src={Icon.connect} alt="" />
              <p style={{ color: "white" }} className="mt-3">
                To connect to the Testnet open MetaMask and click the Networks
                dropdown. Select "Custom Network". Now enter the following
                information:
              </p>
            </div>
            <div className="network">
              <h4 style={{ color: "white" }}>Network Name: PULSE Testnet</h4>
              <h4 style={{ color: "white" }}>
                New RPC URL: https://rpc.v2.testnet.pulsechain.com
              </h4>
              <h4 style={{ color: "white" }}>Chain ID: 940</h4>
              <h4 style={{ color: "white" }}>Currency Symbol: tPLS</h4>
              <h4 style={{ color: "white" }}>
                Block Explorer URL: https://scan.v2.testnet.pulsechain.com
              </h4>
            </div>
            <div className="mt-4">
              <p style={{ color: "white" }}>
                You must manually add your ERC20s for them to show. The snapshot
                for the balances for this testnet were a couple months ago.{" "}
                <br /> <br /> Get free tPLS (worthless Testnet Pulse) at the
                official Faucet, stake them to earn yield and swap between PLS
                and PRC20s on the PulseChain Uniswap frontend. You can see all
                of the Testnet activity on the Testnet Block Explorer.
              </p>
            </div>
          </div>
          <div
            className="col lastheart"
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <img
              style={{
                width: "350px",
                position: "absolute",
                left: "-173px",
                // top: "300px",
              }}
              src={Icon.heart}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pulse;
