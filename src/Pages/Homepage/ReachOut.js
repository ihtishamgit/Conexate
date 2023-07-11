import React from "react";
import ContactUsImage from "../../Assets/ContactUsImage.png";

const ReachOut = () => {
  return (
    <div className="d-flex">
      <div style={{ width: "50%" }}>
        <img className="img-fluid" src={ContactUsImage} />
      </div>
      <div
        className="d-flex flex-column align-items-center my-4"
        style={{ width: "50%" }}
      >
        <h3 className="text-dark">Reach out to us now!</h3>
        <span className="onea984">We are always here to help you</span>
        <div style={{ width: "75%" }} className="d-flex my-4">
          <form className="d-flex flex-wrap">
            <div class="form-group p-1 col-6">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Your Name*"
              />
            </div>
            <div class="form-group p-1 col-6">
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="PhoneNumber*"
              />
            </div>
            <div class="form-group p-1 col-6">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email Address*"
              />
            </div>
            <div class="form-group p-1 col-6">
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Subject"
              />
            </div>
            <div class="form-group p-1 col-12">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Message"
              ></textarea>
            </div>

            <div>
              <button class="btn-consult-now">
                {" "}
                Send Message <i class="fa fa-home"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReachOut;
