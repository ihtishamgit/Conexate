import React from "react";
import Consultation from "../../Assets/Consultation.png";

const CoreCompetencies = () => {
  return (
    <div
      style={{ width: "90%", margin: "0.5rem auto" }}
      className="d-flex flex-column justify-content-center mt-5"
    >
      <div className="d-flex justify-content-center mb-4">
        <h1 className="text-dark">Our Core Competencies</h1>
      </div>

      <div className="cards d-flex">
        <div className="col-4">
          <img src={Consultation} />
          <h3>Consultation</h3>
          <small className="text-muted">
            By leveraging our digital strategy expertise, we develop customized
            plans that optimize your journey toward achieving business success
            through technology.
          </small>
        </div>
        <div className="col-4">
          <img src={Consultation} />
          <h3>Consultation</h3>
          <small className="text-muted">
            By leveraging our digital strategy expertise, we develop customized
            plans that optimize your journey toward achieving business success
            through technology.
          </small>
        </div>
        <div className="col-4">
          <img src={Consultation} />
          <h3>Consultation</h3>
          <small className="text-muted">
            By leveraging our digital strategy expertise, we develop customized
            plans that optimize your journey toward achieving business success
            through technology.
          </small>
        </div>
      </div>
    </div>
  );
};

export default CoreCompetencies;
