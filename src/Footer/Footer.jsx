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
              <img src={Icon.telegram} alt="" />
              <img src={Icon.twitter} alt="" />
              <img src={Icon.youtube} alt="" />
              <img src={Icon.discord} alt="" />
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
