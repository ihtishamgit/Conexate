import React from "react";
import ConnexateNavLogo from "../../Assets/ConnexateNavLogo.png";

const Navbar = () => {
  return (
    <div style={{ width: "90%", margin: "0.5rem auto" }}>
      <ul class="nav justify-content-between">
        <li class="nav-item">
          <a class="nav-link text-dark" aria-current="page" href="#">
            <img
              style={{ width: "1.5rem", height: "1.5rem" }}
              className="img-fluid"
              src={ConnexateNavLogo}
            />
            Connexate
          </a>
        </li>

        <li class="nav">
          <a class="nav-link text-dark" href="#">
            Home
          </a>
          <a class="nav-link text-dark" href="#">
            Services
          </a>
          <a class="nav-link text-dark" href="#">
            Solutions
          </a>
          <a class="nav-link text-dark" href="#">
            Contact us
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link btn btn-dark text-white">Get a quote</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
