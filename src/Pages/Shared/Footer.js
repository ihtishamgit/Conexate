import React from "react";
import ConnexateLogo from "../../Assets/ConnexateLogo.png";
const Footer = () => {
  return (
    <>
      <footer className="footer text-white">
        <div class="container ">
          <div class="row">
            <div class="col-md-3">
              <div className="d-flex">
                <img
                  style={{ width: "1.5rem", height: "1.5rem" }}
                  className="img-fluid"
                  src={ConnexateLogo}
                />
                <h6 class="">CONNEXATE</h6>
              </div>

              <ul class="list-unstyled">
                <li class="media align-items-center">
                  <div class="media-body">
                    <small>
                      Connecting people, powering businesses with technology!
                    </small>{" "}
                  </div>
                </li>
              </ul>
            </div>
            <div class="col-md-3">
              <h6 class="">Our Services</h6>
              <ul class="list-unstyled">
                <li class="media align-items-center">
                  <div class="media-body">
                    <small>Network Infrastructure</small>{" "}
                  </div>
                </li>
                <li class="media my-2 align-items-center">
                  <div class="media-body">
                    <small>Cybersecurity</small>{" "}
                  </div>
                </li>
                <li class="media align-items-center">
                  <div class="media-body">
                    <small>Managed IT Services</small>
                  </div>
                </li>
                <li class="media align-items-center">
                  <div class="media-body">
                    <small>Cloud Services</small>
                  </div>
                </li>
              </ul>
            </div>
            <div class="col-md-3">
              <h6 class="">Contact us</h6>
              <ul class="list-unstyled">
                <li class="media align-items-center">
                  <div class="media-body">
                    <small>Web & Mobile App Development</small>{" "}
                  </div>
                </li>
                <li class="media my-2 align-items-center">
                  <div class="media-body">
                    <small>CRM</small>{" "}
                  </div>
                </li>
                <li class="media align-items-center">
                  <div class="media-body">
                    <small>ERP</small>
                  </div>
                </li>
                <li class="media align-items-center">
                  <div class="media-body">
                    <small>E-commerce</small>
                  </div>
                </li>
              </ul>
            </div>
            <div class="col-md-3">
              <h6 class="">Contact us</h6>
              <ul class="list-unstyled">
                <li class="media align-items-center">
                  <div class="media-body">
                    <small>
                      37- Civic Center, Model Town, Lahore, Pakistan
                    </small>{" "}
                  </div>
                </li>
                <li class="media my-2 align-items-center">
                  <div class="media-body">
                    <small>+92 42 35218801</small>{" "}
                  </div>
                </li>
                <li class="media align-items-center">
                  <div class="media-body">
                    <small>info@connexate.com</small>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <p class="text-center">Connexate @ 2022 All Right Reseved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
