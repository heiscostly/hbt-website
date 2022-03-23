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
          {/* <div className="col"></div> */}
          <div className="col-lg-12 head__section desktop-view">
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
          <div className="mobile-view">
            <nav className="navbar navbar-expand-lg navbar-light ">
              <a className="navbar-brand" href="/">
                <img src={Logo} alt="logo" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="">
                  <img src={Icon.mobmenu} alt="" />
                </span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a
                    className="nav-item nav-link active"
                    href="/"
                    style={{
                      color: "white",
                      border: "2px solid #E617DB",
                      marginBottom: "18px",
                      marginTop: "18px",
                      borderRadius: "10px",
                      textTransform: "uppercase",
                      textAlign: "center",
                    }}
                  >
                    Home
                  </a>
                  <a
                    className="nav-item nav-link"
                    href="/"
                    style={{
                      color: "white",
                      border: "2px solid #00EAFF",
                      marginBottom: "18px",
                      borderRadius: "10px",
                      textTransform: "uppercase",
                      textAlign: "center",
                    }}
                  >
                    Tokenmetrics
                  </a>
                  <a
                    className="nav-item nav-link"
                    href="/"
                    style={{
                      color: "white",
                      border: "2px solid #E617DB",
                      marginBottom: "18px",
                      borderRadius: "10px",
                      textTransform: "uppercase",
                      textAlign: "center",
                    }}
                  >
                    Taxes
                  </a>
                  <a
                    className="nav-item nav-link disabled"
                    href="/"
                    style={{
                      color: "white",
                      border: "2px solid #00EAFF",
                      marginBottom: "18px",
                      borderRadius: "10px",
                      textTransform: "uppercase",
                      textAlign: "center",
                    }}
                  >
                    Docs
                  </a>
                </div>
              </div>
            </nav>
          </div>
          {/* <div className="col"></div> */}
        </div>
      </div>
      {/* </header> */}
    </>
  );
};
