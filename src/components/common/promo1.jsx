import React from 'react';

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
          <div className="col-lg-4 offset-lg-1">
            <div className="register_form p-4 p-lg-5 bg-white rounded shadow">
              <h3 className="text-center fw-bold">Courses for Free</h3>
              <p className="text-center text-muted">It is high time for learning</p>
              <form
                className="form_area mt-4"
                id="myForm"
              >
                <div className="row">
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <input
                        name="name"
                        placeholder="Your Name"
                        required
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        name="phone"
                        placeholder="Your Phone Number"
                        required
                        type="tel"
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        name="email"
                        placeholder="Your Email Address"
                        pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                        required
                        type="email"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 text-center">
                    <button className="btn btn-warning w-100 py-2">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo1;