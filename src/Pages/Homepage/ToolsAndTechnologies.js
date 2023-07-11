import React from "react";
import Amazon from "../../Assets/Amazon.png";
import Cisco from "../../Assets/Cisco.png";
import Aruba from "../../Assets/Aruba.png";
const ToolsAndTechnologies = () => {
  return (
    <div
      style={{ width: "90%", margin: "0.5rem auto" }}
      className="d-flex flex-column justify-content-center mt-5"
    >
      <div className="d-flex flex-column justify-content-center align-items-center mb-4">
        <h1 className="text-dark">Tools & Technologies</h1>
        <div
          style={{ width: "65%" }}
          className="d-flex justify-content-between my-5"
        >
          <img
            className="img-fluid"
            style={{ width: "5rem", height: "2rem" }}
            src={Amazon}
          />
          <img
            className="img-fluid"
            style={{ width: "5rem", height: "2rem" }}
            src={Cisco}
          />
          <img
            className="img-fluid"
            style={{ width: "5rem", height: "2rem" }}
            src={Amazon}
          />
          <img
            className="img-fluid"
            style={{ width: "5rem", height: "2rem" }}
            src={Aruba}
          />
        </div>
      </div>
    </div>
  );
};

export default ToolsAndTechnologies;
