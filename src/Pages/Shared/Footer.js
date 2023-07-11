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
                      Lorem ipsum dolor sit, amet consectetur adipisicing.
                    </small>{" "}
                  </div>
                </li>
                <li class="media my-2 align-items-center">
                  <div class="media-body">
                    <small>
                      Lorem ipsum dolor sit, amet consectetur adipisicing.
                    </small>{" "}
                  </div>
                </li>
                <li class="media align-items-center">
                  <div class="media-body">
                    <small>
                      Lorem ipsum dolor sit, amet consectetur adipisicing.
                    </small>
                  </div>
                </li>
              </ul>
            </div>
            <div class="col-md-3">
              <h6 class="">Our Services</h6>
              <ul class="list-unstyled">
                <li class="media align-items-center">
                  <div class="media-body">
                    <small>
                      Lorem ipsum dolor sit, amet consectetur adipisicing.
                    </small>{" "}
                  </div>
                </li>
                <li class="media my-2 align-items-center">
                  <div class="media-body">
                    <small>
                      Lorem ipsum dolor sit, amet consectetur adipisicing.
                    </small>{" "}
                  </div>
                </li>
                <li class="media align-items-center">
                  <div class="media-body">
                    <small>
                      Lorem ipsum dolor sit, amet consectetur adipisicing.
                    </small>
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
                      Lorem ipsum dolor sit, amet consectetur adipisicing.
                    </small>{" "}
                  </div>
                </li>
                <li class="media my-2 align-items-center">
                  <div class="media-body">
                    <small>
                      Lorem ipsum dolor sit, amet consectetur adipisicing.
                    </small>{" "}
                  </div>
                </li>
                <li class="media align-items-center">
                  <div class="media-body">
                    <small>
                      Lorem ipsum dolor sit, amet consectetur adipisicing.
                    </small>
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
                      Lorem ipsum dolor sit, amet consectetur adipisicing.
                    </small>{" "}
                  </div>
                </li>
                <li class="media my-2 align-items-center">
                  <div class="media-body">
                    <small>
                      Lorem ipsum dolor sit, amet consectetur adipisicing.
                    </small>{" "}
                  </div>
                </li>
                <li class="media align-items-center">
                  <div class="media-body">
                    <small>
                      Lorem ipsum dolor sit, amet consectetur adipisicing.
                    </small>
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
