import React from 'react';
import t1 from '../../img/t1.jpg';
import t2 from '../../img/t2.jpg';
import t3 from '../../img/t3.jpg';
import t4 from '../../img/t4.jpg';
const trainersData = [
  {
    id: 1,
    name: 'Mated Nithan',
    role: 'Sr. web designer',
    img: t1,
    desc: 'If you are looking at blank cassettes on the web, you may be very confused at the.'
  },
  {
    id: 2,
    name: 'David Cameron',
    role: 'Sr. web designer',
    img: t2,
    desc: 'If you are looking at blank cassettes on the web, you may be very confused at the.'
  },
  {
    id: 3,
    name: 'Jain Redmel',
    role: 'Sr. Faculty Data Science',
    img: t3,
    desc: 'If you are looking at blank cassettes on the web, you may be very confused at the.'
  },
  {
    id: 4,
    name: 'Nathan Macken',
    role: 'Sr. web designer',
    img:  t4,
    desc: 'If you are looking at blank cassettes on the web, you may be very confused at the.'
  }
];

const Trainer = () => {
  return (
    <section className="trainer_area py-5">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-5">
            <div className="main_title">
              <h2 className="mb-3">Our Expert Trainers</h2>
              <p>
                Replenish man have thing gathering lights yielding shall you
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center mt-5">
          {trainersData.map((trainer) => (
            <div className="col-lg-3 col-md-6 col-sm-12 single-trainer mb-4 mb-lg-0" key={trainer.id}>
              <div className="thumb d-flex justify-content-center mb-3">
                <img className="img-fluid rounded shadow-sm" src={trainer.img} alt={trainer.name} />
              </div>
              <div className="meta-text text-center">
                <h4>{trainer.name}</h4>
                <p className="designation text-muted mb-3">{trainer.role}</p>
                <div className="mb-4">
                  <p>
                    {trainer.desc}
                  </p>
                </div>
                <div className="align-items-center justify-content-center d-flex gap-3">
                  <a href="#" className="text-dark fs-5"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="text-dark fs-5"><i className="bi bi-twitter"></i></a>
                  <a href="#" className="text-dark fs-5"><i className="bi bi-linkedin"></i></a>
                  <a href="#" className="text-dark fs-5"><i className="bi bi-pinterest"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainer;