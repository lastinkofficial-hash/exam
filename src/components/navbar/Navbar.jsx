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
      <div class="main_menu">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container">
            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
            <Link class="navbar-brand logo_h" to="/"><img src={logo} alt=""/></Link>
            
            <button
              class="navbar-toggler"
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
              class="collapse navbar-collapse offset pb-3 pb-lg-0"
              id="navbarSupportedContent">
              <ul class="nav navbar-nav menu_nav ms-auto ">
                <li class="nav-item active">
                  <Link class="nav-link" to="/">Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/about">About</Link>
                </li>
                <li class="nav-item submenu dropdown">
                  <Link
                    href="#"
                    class="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false">Pages</Link>
                  <ul class="dropdown-menu">
                    <li class="nav-item">
                      <Link class="nav-link" to="/Cources">Courses</Link>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="course-details.html"
                        >Course Details</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="elements.html">Elements</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item submenu dropdown">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false" >Blog</a>
                  <ul class="dropdown-menu">
                    <li class="nav-item">
                      <a class="nav-link" href="blog.html">Blog</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="single-blog.html"
                        >Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="contact.html">Contact</a>
                </li>
                <li class="nav-item d-flex align-items-center ms-lg-3">
                  <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-secondary d-flex align-items-center" type="submit">
                      <i class="bi bi-search"></i>
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
