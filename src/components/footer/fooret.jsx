import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-area py-5 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-6 single-footer-widget mb-4 mb-lg-0">
            <h4 className="text-white mb-3">Top Products</h4>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Managed Website</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Manage Reputation</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Power Tools</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Marketing Service</a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 single-footer-widget mb-4 mb-lg-0">
            <h4 className="text-white mb-3">Quick Links</h4>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Jobs</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Brand Assets</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Investor Relations</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Terms of Service</a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 single-footer-widget mb-4 mb-lg-0">
            <h4 className="text-white mb-3">Features</h4>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Jobs</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Brand Assets</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Investor Relations</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Terms of Service</a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 single-footer-widget mb-4 mb-lg-0">
            <h4 className="text-white mb-3">Resources</h4>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Guides</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Research</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Experts</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Agencies</a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 single-footer-widget mb-4 mb-lg-0">
            <h4 className="text-white mb-3">Newsletter</h4>
            <p className="text-white-50">You can trust us. we only send promo offers,</p>
            <div className="form-wrap" id="mc_embed_signup">
              <form
                target="_blank"
                action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                method="get"
                className="form-inline d-flex"
              >
                <input
                  className="form-control me-2"
                  name="EMAIL"
                  placeholder="Your Email Address"
                  onFocus={(e) => e.target.placeholder = ''}
                  onBlur={(e) => e.target.placeholder = 'Your Email Address'}
                  required
                  type="email"
                />
                <button className="click-btn btn btn-primary">
                  <span>Subscribe</span>
                </button>
                <div style={{ position: 'absolute', left: '-5000px' }}>
                  <input
                    name="b_36c4fd991d266f23781ded980_aefe40901a"
                    tabIndex={-1}
                    value=""
                    type="text"
                    readOnly
                  />
                </div>
                <div className="info"></div>
              </form>
            </div>
          </div>
        </div>
        <div className="row footer-bottom d-flex justify-content-between align-items-center mt-5 pt-4 border-top border-secondary">
          <p className="col-lg-8 col-sm-12 footer-text m-0 text-white-50">
            Copyright &copy;{new Date().getFullYear()} Lastink. All rights reserved
          </p>
          <div className="col-lg-4 col-sm-12 footer-social d-flex gap-3 justify-content-lg-end mt-3 mt-lg-0">
            <a href="#" className="text-white-50 text-decoration-none fs-5"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-white-50 text-decoration-none fs-5"><i className="bi bi-twitter"></i></a>
            <a href="#" className="text-white-50 text-decoration-none fs-5"><i className="bi bi-dribbble"></i></a>
            <a href="#" className="text-white-50 text-decoration-none fs-5"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;