import React from "react";



const Banner = () => {
    const slidesData = [
  {
    img: "https://res.cloudinary.com/dodhn4tgj/image/upload/w_1200,f_auto,q_auto,c_fill/v1774787114/img4_r8qe0c.jpg",
    title: "Welcome to Our Clinic",
    desc: "We provide the best healthcare services",
    btn: "Book Appointment",
  },
  {
    img: 'https://res.cloudinary.com/dodhn4tgj/image/upload/v1774787112/img1_enrghm.jpg',
    title: "Expert Doctors",
    desc: "Highly qualified and experienced team",
    btn: "Meet Doctors",
  },
  {
    img: 'https://res.cloudinary.com/dodhn4tgj/image/upload/v1774787113/img3_fxanyq.jpg', 
    title: "Advanced Treatments",
    desc: "Latest technology and modern care",
    btn: "Explore Services",
  },
  {
    img:"https://res.cloudinary.com/dodhn4tgj/image/upload/v1774787112/img2_e5aia9.jpg",
    title: "Patient First Approach",
    desc: "Your health is our priority",
    btn: "Learn More",
  },
  {
    img: "https://res.cloudinary.com/dodhn4tgj/image/upload/v1774787112/img5_fabma0.jpg",
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