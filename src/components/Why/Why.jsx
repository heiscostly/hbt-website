import React from "react";
import "./Why.scss";
import { Icon } from "../../assets/svg/index";

const Why = () => {
  return (
    <>
      <div className="container-lg">
        <div className="row">
          {/* <div
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
          </div> */}
          <div className="col-lg-12 home__div">
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
                  burning 30% of all $HBT tax on every purchase.
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
                  20% of each $HBT purchases and sales tax is automatically sent
                  to a mental charity wallet and donations will be livestreamed
                  every weekend or monthly.
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
                  earn highest fixed APY in the market of 400,000%, rebasing
                  rewards every 30 minutes, and a simple buy-hold-earn system.
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
                    The Treasury
                  </h5>
                </div>

                <p style={{ paddingLeft: "50px", color: "white" }}>
                  provides support to the HIF in the event of an extreme price
                  drop in the $HBT token.The Treasury also funds new projects
                  and development of ideas under Heartbeat.
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
                    HBT Insurance Fund (HIF)
                  </h5>
                </div>
                <p style={{ paddingLeft: "44px", color: "white" }}>
                  20% of the transaction fees are redirected here. It helps
                  sustain and back the staking rewards provided by the positive
                  rebase.
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
                  With 30% of every $HBT sell transaction tax contributing to
                  the locked liquidity pool, you know we're here to stay.
                </p>
              </div>
            </div>
          </div>
          {/* <div
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
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Why;
