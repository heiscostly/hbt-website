import React from "react";
import Icon from "../../assets/svg/Icon";
import "./kyc.scss";

const kyc = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div
            className="col-md-8"
            style={{
              //   width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "8rem",
            }}
          >
            <img className="hello__img" src={Icon.kyc} alt="" />
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};

export default kyc;
