import React from "react";
import "./Why.scss";
import { Icon } from "../../assets/svg/index";

const Why = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col-md-10 home__div">
            <img className="mt-4" src={Icon.WhyHbt} alt="" />
            {/* <Burning /> */}
            {/* <span>{Burning}</span> */}
            <div className="first__home-section pt-5">
              <div>
                <div className="d-flex">
                  <img src={Icon.Burning} alt="" />
                  <h5 style={{ paddingLeft: "11px" }}>
                    Deflationary mechanism
                  </h5>
                </div>
                <p style={{ paddingLeft: "44px" }}>
                  We are dedicated to our work and to the movement, therefore we
                  are incentivising long term investment by automatically
                  burning 40% of all $HBT tax on every buys and transfers.
                </p>
              </div>
              <div>
                <div className="d-flex w-100">
                  <img src={Icon.Vector} alt="" />
                  <h5 style={{ paddingLeft: "11px" }}>
                    Support $HBT Mental Health Charity.
                  </h5>
                </div>

                <p style={{ paddingLeft: "50px" }}>
                  20% of each $HBT transaction tax is automatically <br /> sent
                  to a mental charity wallet.
                </p>
              </div>
              <div>
                <div className="d-flex w-100">
                  <img src={Icon.reward} alt="" />
                  <h5 style={{ paddingLeft: "11px" }}>
                    Rewards for you for holding $HBT
                  </h5>
                </div>

                <p style={{ paddingLeft: "58px" }}>
                  20% of each $HBT transaction tax are distributed to $HBT
                  holders for passive income through RFI.
                </p>
              </div>
            </div>
            <div className="first__home-section pt-2">
              <div>
                <div className="d-flex">
                  <img src={Icon.team} alt="" />
                  <h5 style={{ paddingLeft: "11px" }}>
                    NO TEAM TOKEN ALLOCATIONS{" "}
                  </h5>
                </div>
                <p style={{ paddingLeft: "44px" }}>
                  There is no team token allocations, that is you know no one
                  can dump on you.
                </p>
              </div>
              <div>
                <div className="d-flex w-100">
                  <img src={Icon.guard} alt="" />
                  <h5 style={{ paddingLeft: "11px" }}>Trustless donations</h5>
                </div>

                <p style={{ paddingLeft: "50px" }}>
                  20% of each $HBT transaction tax are distributed to $HBT
                  holders for passive income through RFI.
                </p>
              </div>
              <div>
                <div className="d-flex w-100">
                  <img src={Icon.nft} alt="" />
                  <h5 style={{ paddingLeft: "11px" }}>$HBT NFTs</h5>
                </div>

                <p style={{ paddingLeft: "58px" }}>
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
                  <h5 style={{ paddingLeft: "11px" }}>
                    Refer your friends to buy and stake
                  </h5>
                </div>
                <p style={{ paddingLeft: "44px" }}>
                  telling them to donate to mental health charity through buying
                  and staking $HBT with your referral link.
                </p>
              </div>

              <div>
                <div className="d-flex w-100">
                  <img src={Icon.growth} alt="" />
                  <h5 style={{ paddingLeft: "11px" }}>Growing Liquidity</h5>
                </div>

                <p style={{ paddingLeft: "58px" }}>
                  telling them to donate to mental health charity through buying
                  and staking $HBT with your referral link.
                </p>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};

export default Why;
