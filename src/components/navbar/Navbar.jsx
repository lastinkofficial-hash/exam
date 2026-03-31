import React from "react";
import logo from '../../img/logo.png';


const Navbar = () => {
  return (
    <header class="header_area">
      <div class="main_menu">
        

        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container">
            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
            <a class="navbar-brand logo_h" href="index.html"><img src={logo} alt=""/></a>
            
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="bi bi-list"></span>
            </button>
            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
            <div
              class="collapse navbar-collapse offset"
              id="navbarSupportedContent">
              <ul class="nav navbar-nav menu_nav ms-auto ">
                <li class="nav-item active">
                  <a class="nav-link" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="about-us.html">About</a>
                </li>
                <li class="nav-item submenu dropdown">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false">Pages</a>
                  <ul class="dropdown-menu">
                    <li class="nav-item">
                      <a class="nav-link" href="courses.html">Courses</a>
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
