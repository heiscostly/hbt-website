import React from "react";
import Logo from "../../assets/logo.png";
// import SettingsIcon from "@mui/icons-material/Settings";
import { Icon } from "../../assets/svg";
import "./Header.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";
// import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      {/* <header> */}
      <div className="container" id="head">
        <div className="row">
          {/* <div className="col"></div> */}
          <div className="col-lg-12 head__section desktop-view">
            <img src={Logo} alt="logo" />

            <nav>
              <ul className="nav__link">
                <li>
                  <AnchorLink href="#head">Home</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#metrics">Tokenmetrics</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#taxes">Taxes</AnchorLink>
                </li>
                <li>
                  <a
                    href="https://bit.ly/HeartbeatLitepaper"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    {" "}
                    Docs
                  </a>
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
                  <AnchorLink
                    className="nav-item nav-link active"
                    style={{
                      color: "white",
                      border: "2px solid #E617DB",
                      marginBottom: "18px",
                      marginTop: "18px",
                      borderRadius: "10px",
                      textTransform: "uppercase",
                      textAlign: "center",
                      textDecoration: "none",
                    }}
                    href="#head"
                  >
                    Home
                  </AnchorLink>
                  <AnchorLink
                    href="#metrics"
                    className="nav-item nav-link"
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
                  </AnchorLink>
                  <AnchorLink
                    href="#taxes"
                    className="nav-item nav-link"
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
                  </AnchorLink>
                  <a
                    className="nav-item nav-link disabled"
                    href="https://bit.ly/HeartbeatLitepaper"
                    target="_blank"
                    rel="noopener noreferrer"
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
