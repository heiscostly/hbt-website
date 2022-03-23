import React from "react";
import "./Why.scss";
import { Icon } from "../../assets/svg/index";

const Why = () => {
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
              src={Icon.whyvec}
              alt=""
            />
          </div>
          <div className="col-md-10 home__div">
            <img className="mt-4" src={Icon.WhyHbt} alt="" />
            {/* <Burning /> */}
            {/* <span>{Burning}</span> */}
            <div className="first__home-section pt-5">
              <div className="hidding__huh">
                <div className="d-flex">
                  <img src={Icon.Burning} alt="" />
                  <h5 style={{ paddingLeft: "11px", color: "white" }}>
                    Deflationary mechanism
                  </h5>
                </div>
                <p style={{ paddingLeft: "44px", color: "white" }}>
                  We are dedicated to our work and to the movement, therefore we
                  are incentivising long term investment by automatically
                  burning 40% of all $HBT tax on every buys and transfers.
                </p>
              </div>
              <div>
                <div className="d-flex w-100">
                  <img src={Icon.Vector} alt="" />
                  <h5 style={{ paddingLeft: "11px", color: "white" }}>
                    Support $HBT Mental Health Charity.
                  </h5>
                </div>

                <p style={{ paddingLeft: "50px", color: "white" }}>
                  20% of each $HBT transaction tax is automatically <br /> sent
                  to a mental charity wallet.
                </p>
              </div>
              <div>
                <div className="d-flex w-100">
                  <img src={Icon.reward} alt="" />
                  <h5 style={{ paddingLeft: "11px", color: "white" }}>
                    Rewards for you for holding $HBT
                  </h5>
                </div>

                <p style={{ paddingLeft: "58px", color: "white" }}>
                  20% of each $HBT transaction tax are distributed to $HBT
                  holders for passive income through RFI.
                </p>
              </div>
            </div>
            <div className="first__home-section pt-2">
              <div>
                <div className="d-flex">
                  <img src={Icon.team} alt="" />
                  <h5 style={{ paddingLeft: "11px", color: "white" }}>
                    NO TEAM TOKEN ALLOCATIONS{" "}
                  </h5>
                </div>
                <p style={{ paddingLeft: "44px", color: "white" }}>
                  There is no team token allocations, that is you know no one
                  can dump on you.
                </p>
              </div>
              <div>
                <div className="d-flex w-100">
                  <img src={Icon.guard} alt="" />
                  <h5 style={{ paddingLeft: "11px", color: "white" }}>
                    Trustless donations
                  </h5>
                </div>

                <p style={{ paddingLeft: "50px", color: "white" }}>
                  20% of each $HBT transaction tax are distributed to $HBT
                  holders for passive income through RFI.
                </p>
              </div>
              <div>
                <div className="d-flex w-100">
                  <img src={Icon.nft} alt="" />
                  <h5 style={{ paddingLeft: "11px", color: "white" }}>
                    $HBT NFTs
                  </h5>
                </div>

                <p style={{ paddingLeft: "58px", color: "white" }}>
                  Mint HEARTBEAT NFTs (700 unique pfp JPEGs with traits
                  illustrating some mental illness) using HEARTBEAT (HBT) bep20
                  Token.
                </p>
              </div>
            </div>
            <div className="first__home-section pt-2">
              <div>
                <div className="d-flex w-100">
                  <img src={Icon.refer} alt="" />
                  <h5 style={{ paddingLeft: "11px", color: "white" }}>
                    Refer your friends to buy and stake
                  </h5>
                </div>
                <p style={{ paddingLeft: "44px", color: "white" }}>
                  telling them to donate to mental health charity through buying
                  and staking $HBT with your referral link.
                </p>
              </div>

              <div>
                <div className="d-flex w-100">
                  <img src={Icon.growth} alt="" />
                  <h5 style={{ paddingLeft: "11px", color: "white" }}>
                    Growing Liquidity
                  </h5>
                </div>

                <p style={{ paddingLeft: "58px", color: "white" }}>
                  telling them to donate to mental health charity through buying
                  and staking $HBT with your referral link.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col vec__div"
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <img
              // className="vec__div"
              style={{
                position: "absolute",
                width: "400px",
                right: "-174px",
                zIndex: "-1",
              }}
              src={Icon.whyvec2}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Why;
