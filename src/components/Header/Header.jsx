import React from "react";
import Logo from "../../assets/logo.png";
// import SettingsIcon from "@mui/icons-material/Settings";
import { Icon } from "../../assets/svg";
import "./Header.scss";

export const Header = () => {
  return (
    <>
      {/* <header> */}
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col-md-10 head__section">
            <img src={Logo} alt="logo" />

            <nav>
              <ul className="nav__link">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Tokenmetrics</a>
                </li>
                <li>
                  <a href="">Taxes</a>
                </li>
                <li>
                  <a href="">Docs</a>
                </li>
                <button>
                  <img src={Icon.settings} alt="" />
                </button>
              </ul>
            </nav>
          </div>
          <div className="col"></div>
        </div>
      </div>
      {/* </header> */}
    </>
  );
};
