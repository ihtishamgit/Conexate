import React from "react";

const ConsultNow = () => {
  return (
    <div className="d-flex justify-content-between consult-now">
      <div>
        <h3>Book your 30-minute consultation today</h3>
        <small>and discover seamless IT solutions for your business.</small>
      </div>
      <div>
        <button class="btn-consult-now">
          {" "}
          Consult now <i class="fa fa-home"></i>
        </button>
        <button type="button" class="btn "></button>
      </div>
    </div>
  );
};

export default ConsultNow;
