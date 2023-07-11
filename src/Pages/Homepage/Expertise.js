import React from "react";
import Consultation from "../../Assets/Consultation.png";

const Expertise = () => {
  return (
    <>
      <div
        style={{ width: "90%", margin: "0.5rem auto" }}
        className="d-flex flex-column justify-content-center mt-5"
      >
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-dark">Our Expertise</h1>
          <span>Your IT Journey-Simplified</span>
          <h3 className="our-services-heading mt-4">Our Services</h3>
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

export default Expertise;
