import React from "react";
import banner1 from '../../img/home-banner.jpg';


const Banner = () => {
    const slidesData = [
  {
    img: banner1,
    title: "Welcome to Our Coaching",
    desc: "We provide the best healthcare services",
    btn: "Register Now",
  },
  {
    img: banner1,
    title: "Expert Teachers",
    desc: "Highly qualified and experienced team",
    btn: "Meet Our Team",
  },
  {
    img: banner1, 
    title: "Advanced Facilities",
    desc: "Latest technology and modern techniques",
    btn: "Explore Services",
  },
  {
    img: banner1,
    title: "Learner First Approach",
    desc: "Your Success is our priority",
    btn: "Learn More",
  },
  {
    img: banner1,
    title: "24/7 Support",
    desc: "We are always here for you",
    btn: "Contact Us",
  }

];
  return (
      <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        {slidesData.map((_, i) => (
          <button
            key={i}
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide-to={i}
            className={i === 0 ? "active" : ""}
          ></button>
        ))}
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <div className="overlay-container">
              <img
               src={`${slide.img}`}
                className="d-block w-100"
                alt="slide"
              />

              {/* Overlay Content */}
              <div className="hero-overlay">
                <div className="overlay-content">
                  <h1>{slide.title}</h1>
                  <p>{slide.desc}</p>
                  <button className="btn btn-light mt-3">
                    {slide.btn}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      
    </div>
  );
};

export default Banner;