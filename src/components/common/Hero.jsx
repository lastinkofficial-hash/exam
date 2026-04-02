import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Import your background image here (update the path to match your project structure)
import bgImage from '../../img/banner.jpg';

const Hero = ({ title }) => {
  const location = useLocation();

  // Automatically generate a title from the URL path if no title prop is provided
  const generateTitle = () => {
    const path = location.pathname.replace(/^\/+/, ''); // remove leading slash
    if (!path) return 'Home';
    return decodeURI(path)
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const pageTitle = title || generateTitle();

  return (
    <section 
      className="banner_area img-banner"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        padding: '70px 0px'
      }}
    >
      <div className="banner_inner d-flex align-items-center py-5">
        <div className="overlay"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="banner_content text-center">
                <h2 className="mb-3 fw-bold display-5">{pageTitle}</h2>
                <div className="page_link d-flex justify-content-center align-items-center gap-3">
                  <Link to="/" className="text-decoration-none text-dark fs-5">Home</Link>/
                  <Link to={location.pathname} className="text-decoration-none text-dark fs-5">{pageTitle}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;