import React from "react";
import Logo from "../../assets/logo.png";
// import SettingsIcon from "@mui/icons-material/Settings";
import { Settings } from "@mui/icons-material";
import "./Header.scss";

export const Header = () => {
  return (
    <>
      <header>
        <div className="container head__section">
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
                <Settings fontSize="small" />
              </button>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
