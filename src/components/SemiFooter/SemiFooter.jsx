import React from "react";
import "./semifooter.scss";

const SemiFooter = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col"></div>
          <div className="col-md-10 semi__div desktop-view">
            <div className="text">
              <h4>Roadmap</h4>
            </div>
            <div className="items d-flex">
              <div className="item1">
                <h3>April 2022</h3>
                <ul>
                  <li>Private Sale</li>
                  <li>Audits and KYC</li>
                  <li>Pinksale Listing with the KYC and audits badge.</li>
                  <li> Initial Marketing</li>
                  <li> IDO </li>
                  <li>Pancakeswap Listing</li>
                </ul>
              </div>
              <div className="item1">
                <h3>May 2022</h3>
                <ul>
                  <li>HeartBeat NFT Launch</li>
                  <li>First Mental Health Charity.</li>
                  <li>Marketing and collaborations.</li>
                  <li>HBT Branded Merchandise.</li>
                  <li> CEX Listing</li>
                  <li>CG and Coinmarketcap Listing</li>
                </ul>
              </div>
              <div className="item1">
                <h3>2022 to ~</h3>
                <ul>
                  <li>Expand CEX Listing.</li>
                  <li>More Marketing and Collaborations</li>
                  <li>Expand Mental Health Charity Worldwide.</li>
                  <li> Integrate DEFI and Metaverse</li>
                  <li> HBT DAO</li>
                  <li>Develop Governance</li>
                  <li>Expand Heartbeat Ecosystem</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="mobile-view"
            style={{ color: "rgba(255, 255, 255, 0.7)" }}
          >
            <div className="">
              <h4>Roadmap</h4>
            </div>
            <div className="mob__items">
              <h4 style={{ borderBottomStyle: "dotted" }}>April 2022</h4>
              <ul>
                <li>Private Sale</li>
                <li>Audits and KYC</li>
                <li>Pinksale Listing with the KYC and audits badge.</li>
                <li> Initial Marketing</li>
                <li> IDO </li>
                <li>Pancakeswap Listing</li>
                <li>Website Rebranding</li>
              </ul>
            </div>
            <div className="mob__items">
              <h4 style={{ borderBottomStyle: "dotted" }}>May 2022 </h4>
              <ul>
                <li>HeartBeat NFT Launch</li>
                <li>First Mental Health Charity.</li>
                <li>Marketing and collaborations.</li>
                <li>HBT Branded Merchandise.</li>
                <li> CEX Listing</li>
                <li>CG and Coinmarketcap Listing</li>
              </ul>
            </div>
            <div className="mob__items">
              <h4 style={{ borderBottomStyle: "dotted" }}>2022 and Beyond</h4>
              <ul>
                <li>Expand CEX Listing.</li>
                <li>More Marketing and Collaborations</li>
                <li>Expand Mental Health Charity Worldwide.</li>
                <li> Integrate DEFI and Metaverse</li>
                <li> HBT DAO</li>
                <li>Develop Governance</li>
                <li>Expand Heartbeat Ecosystem</li>
              </ul>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};

export default SemiFooter;
