import React from 'react';
import { Link } from 'react-router-dom';

const Promo1 = () => {
  return (
    <div className="py-5 registration_area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="row clock_sec clockdiv text-center" id="clockdiv">
              <div className="col-lg-12 mb-4">
                <h1 className="mb-3">Register Now</h1>
                <p>
                  There is a moment in the life of any aspiring astronomer that
                  it is time to buy that first telescope. It’s exciting to think
                  about setting up your own viewing station.
                </p>
              </div>
              <div className="col">
                <h1 className="days display-4 fw-bold">150</h1>
                <span className="smalltext">Days</span>
              </div>
              <div className="col"> 
                <h1 className="hours display-4 fw-bold">23</h1>
                <span className="smalltext">Hours</span>
              </div>
              <div className="col">
                <h1 className="minutes display-4 fw-bold">47</h1>
                <span className="smalltext">Mins</span>
              </div>
              <div className="col">
                <h1 className="seconds display-4 fw-bold">59</h1>
                <span className="smalltext">Secs</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 d-flex align-items-center justify-content-center">
            <div className="p-4 p-lg-5 bg-white rounded shadow text-center w-100">
              <h3 className="fw-bold mb-4">Ready to Learn?</h3>
              <Link to="/courses" className="btn btn-warning w-100 py-3 fw-bold fs-5">
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo1;