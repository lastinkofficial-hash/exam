import React, { useState, useEffect, useContext } from "react";
import logo from '../../img/logo.png';
import { Link } from "react-router-dom";
import Login from '../common/Login';
import ForgotPassword from '../common/ForgotPassword';
import { CartContext } from './CartContext';


const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);

  const cartContext = useContext(CartContext) || {};
  const { cartItems = [] } = cartContext;
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header_area ${isFixed ? "navbar_fixed" : ""}`}>
      <div className="main_menu">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
            <Link className="navbar-brand logo_h" to="/">
              <img src={logo} alt="Site Logo" className="img-fluid" style={{ maxWidth: '70px', objectFit: 'contain' }} />
            </Link>
            
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
            <div
              className="collapse navbar-collapse offset pb-3 pb-lg-0"
              id="navbarSupportedContent">
              <ul className="nav navbar-nav menu_nav ms-auto ">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item submenu dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false">Pages</a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link className="nav-link" to="/courses">Courses</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/course-detail"
                        >Course Details</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                <li className="nav-item d-flex align-items-center ms-lg-3">
                  <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <span className="d-flex text-warning align-items-center" type="submit">
                      <i className="bi bi-search"></i>
                    </span>
                  </form>
                </li>
                <li className="nav-item d-flex align-items-center ms-lg-3 mt-3 mt-lg-0">
                  <Link to="/cart" className="text-dark fs-5 position-relative me-2">
                    <i className="bi bi-cart3"></i>
                    {cartCount > 0 && (
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark" style={{fontSize: '0.6rem'}}>{cartCount}</span>
                    )}
                  </Link>
                </li>
                <li className="nav-item ms-lg-3 mt-3 mt-lg-0 d-flex align-items-center">
                  <button className="btn text-dark btn-light fw-bold px-4 me-2" onClick={() => setShowLoginModal(true)}>
                    Login
                  </button>
                  <Link to="/register" className="btn btn-warning fw-bold px-4">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
            
          </div>
        </nav>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050, overflowY: 'auto' }} tabIndex="-1" onClick={() => setShowLoginModal(false)}>
          <div className="modal-dialog modal-lg modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content overflow-hidden border-0">
              <div className="modal-header border-0 p-0 position-absolute end-0" style={{ zIndex: 10 }}>
                <button type="button" className="btn-close m-3 shadow-none" onClick={() => setShowLoginModal(false)} aria-label="Close"></button>
              </div>
              <div className="modal-body p-0">
                <Login onForgotPasswordClick={() => {
                  setShowLoginModal(false);
                  setShowForgotModal(true);
                }} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050, overflowY: 'auto' }} tabIndex="-1" onClick={() => setShowForgotModal(false)}>
          <div className="modal-dialog modal-lg modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content overflow-hidden border-0">
              <div className="modal-header border-0 p-0 position-absolute end-0" style={{ zIndex: 10 }}>
                <button type="button" className="btn-close m-3 shadow-none" onClick={() => setShowForgotModal(false)} aria-label="Close"></button>
              </div>
              <div className="modal-body p-0">
                <ForgotPassword />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
