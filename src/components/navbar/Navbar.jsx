import React, { useState, useEffect } from "react";
import logo from '../../img/logo.png';
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);

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
            <Link className="navbar-brand logo_h" to="/"><img src={logo} alt=""/></Link>
            
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
              <span className="navbar-toggler-icon"></span>
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
                      <Link className="nav-link" to="/Cources">Courses</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/course-detail"
                        >Course Details</Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="elements.html">Elements</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item submenu dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false" >Blog</a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="nav-link" href="blog.html">Blog</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="single-blog.html"
                        >Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact</a>
                </li>
                <li className="nav-item d-flex align-items-center ms-lg-3">
                  <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-secondary d-flex align-items-center" type="submit">
                      <i className="bi bi-search"></i>
                    </button>
                  </form>
                </li>
              </ul>
            </div>
            
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
