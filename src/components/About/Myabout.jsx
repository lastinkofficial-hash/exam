import React from 'react';
import about from '../../img/about.png';

const Myabout = () => {
  return (
    <section className="about_area section_gap">
      <div className="container">
        <div className="row h_blog_item">
          <div className="col-lg-6">
            <div className="h_blog_img">
              <img className="img-fluid" src={about} alt="About" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="h_blog_text">
              <div className="h_blog_text_inner left right">
                <h4>Welcome to our Institute</h4>
                <p>
                  Subdue whales void god which living don't midst lesser
                  yielding over lights whose. Cattle greater brought sixth fly
                  den dry good tree isn't seed stars were.
                </p>
                <p>
                  Subdue whales void god which living don't midst lesser yieldi
                  over lights whose. Cattle greater brought sixth fly den dry
                  good tree isn't seed stars were the boring.
                </p>
                <a className="primary-btn" href="#">
                  Learn More <i className="bi bi-arrow-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Myabout;