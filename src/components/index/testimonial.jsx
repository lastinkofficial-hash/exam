import React from 'react';
import t1 from '../../img/testimonials/t1.jpg';
import t2 from '../../img/testimonials/t2.jpg';

const testimonialsData = [
  {
    id: 1,
    name: 'Elite Martin',
    image: t1,
    text: "Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from"
  },
  {
    id: 2,
    name: 'Davil Saden',
    image: t2,
    text: "Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from"
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial_area py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-5">
            <div className="main_title mb-5">
              <h2 className="mb-3">Client say about me</h2>
              <p className="text-muted">
                Replenish man have thing gathering lights yielding shall you
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {testimonialsData.map((testimonial) => (
            <div className="col-lg-6 mb-4" key={testimonial.id}>
              <div className="testi_item p-4 bg-white rounded shadow-sm h-100">
                <div className="row align-items-center">
                  <div className="col-lg-4 col-md-5 text-center text-md-start mb-3 mb-md-0">
                    <img className="img-fluid rounded-circle shadow-sm" src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="col-lg-8 col-md-7">
                    <div className="testi_text">
                      <h4 className="mb-2">{testimonial.name}</h4>
                      <p className="text-muted mb-0">
                        <i className="bi bi-quote fs-4 text-primary me-2"></i>
                        {testimonial.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;