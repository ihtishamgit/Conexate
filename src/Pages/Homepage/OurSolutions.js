import React from "react";
import Consultation from "../../Assets/Consultation.png";

import SeperatorPNG from "../../Assets/Seperator.png";

const OurSolutions = () => {
  return (
    <>
      <div className="mt-4" style={{ width: "90%", margin: "auto" }}>
        <img className="img-fluid" src={SeperatorPNG} />
      </div>

      <div
        style={{ width: "90%", margin: "0.5rem auto" }}
        className="d-flex flex-column justify-content-center"
      >
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-dark">Our Solutions</h1>
          <small className="transforming-services mb-4">
            Transforming Your Technology Landscape with Our Innovative
            Solutions!
          </small>
        </div>

        <div className="cards d-flex justify-content-between">
          <div className="card-bg-expertise d-flex flex-column justify-content-center align-items-center">
            <img
              style={{ width: "5rem" }}
              className="img-fluid"
              src={Consultation}
            />
            <h3>Consultation</h3>
            <small className="text-muted">
              By leveraging our digital strategy expertise, we develop
              customized plans that optimize your journey toward achieving
              business success through technology.
            </small>
          </div>
          <div className="card-bg-expertise d-flex flex-column justify-content-center align-items-center">
            <img style={{ width: "5rem" }} src={Consultation} />
            <h3>Consultation</h3>
            <small className="text-muted">
              By leveraging our digital strategy expertise, we develop
              customized plans that optimize your journey toward achieving
              business success through technology.
            </small>
          </div>
          <div className="card-bg-expertise d-flex flex-column justify-content-center align-items-center">
            <img style={{ width: "5rem" }} src={Consultation} />
            <h3>Consultation</h3>
            <small className="text-muted">
              By leveraging our digital strategy expertise, we develop
              customized plans that optimize your journey toward achieving
              business success through technology.
            </small>
          </div>
          <div className="card-bg-expertise d-flex flex-column justify-content-center align-items-center">
            <img style={{ width: "5rem" }} src={Consultation} />
            <h3>Consultation</h3>
            <small className="text-muted">
              By leveraging our digital strategy expertise, we develop
              customized plans that optimize your journey toward achieving
              business success through technology.
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSolutions;
