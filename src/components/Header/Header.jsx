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
          <div className="col-md-10 head__section desktop-view">
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
          <div className="mobile-view d-flex justify-content-between">
            <img src={Logo} alt="logo" />
            <div
              style={{
                width: "38%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <button
                style={{
                  background: "#2B2638",
                  border: "1px solid rgba(55, 91, 255, 0.4",
                  borderRadius: "5px",
                }}
              >
                <img src={Icon.mobsettings} alt="" />
              </button>
              <button
                style={{
                  background: "#2B2638",
                  border: "1px solid rgba(55, 91, 255, 0.4",
                  borderRadius: "5px",
                }}
              >
                <img src={Icon.mobmenu} alt="" />
              </button>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
      {/* </header> */}
    </>
  );
};
