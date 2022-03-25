import React from "react";
import "./footer.scss";
import { Icon } from "../assets/svg";

const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col-md-8 footer__div">
            <div className="socials">
              <a href="https://t.me/theheartbeattoken" target="_blank">
                <img src={Icon.telegram} alt="" />
              </a>
              <a href="https://twitter.com/heartbeattoken" target="_blank">
                <img src={Icon.twitter} alt="" />
              </a>
              {/* <img src={Icon.youtube} alt="" /> */}
              <a href="https://discord.gg/XxNsCykPKw">
                <img src={Icon.discord} alt="" />
              </a>
            </div>
            <p>© 2021 HBT. All rights reserved</p>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
