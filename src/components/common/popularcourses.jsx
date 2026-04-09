import React, { useContext } from 'react';
import { CartContext } from '../navbar/CartContext';

// It's better to import images in React
import course1 from '../../img/c1.jpg';
import course2 from '../../img/c2.jpg';
import course3 from '../../img/c3.jpg';
import author1 from '../../img/author1.png';
import author2 from '../../img/author2.png';
import author3 from '../../img/author3.png';

const coursesData = [
  {
    id: 1,
    image: course1,
    price: 25,
    tag: 'design',
    title: 'Custom Product Design',
    description: "One make creepeth man bearing their one firmament won't fowl meat over sea",
    author: {
      image: author1,
      name: 'Cameron'
    },
    meta: {
      users: 50,
      likes: 35
    }
  },
  {
    id: 2,
    image: course2,
    price: 25,
    tag: 'design',
    title: 'Social Media Network',
    description: "One make creepeth man bearing their one firmament won't fowl meat over sea",
    author: {
      image: author2,
      name: 'Cameron'
    },
    meta: {
      users: 25,
      likes: 35
    }
  },
  {
    id: 3,
    image: course3,
    price: 25,
    tag: 'design',
    title: 'Computer Engineering',
    description: "One make creepeth man bearing their one firmament won't fowl meat over sea",
    author: {
      image: author3,
      name: 'Cameron'
    },
    meta: {
      users: 25,
      likes: 35
    }
  }
];

const PopularCourses = () => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (e, course) => {
    e.preventDefault();
    addToCart(course);
    alert(`${course.title} added to cart!`);
  };

  return (
    <section className="popular_courses py-5">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-5">
            <div className="main_title">
              <h2 className="mb-3">Our Popular Courses</h2>
              <p>
                Replenish man have thing gathering lights yielding shall you
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5 justify-content-center">
          {coursesData.map((course) => (
            <div className="col-lg-4 col-md-6 mb-4" key={course.id}>
              <div className="single_course d-flex flex-column h-100 shadow-sm">
                <div className="course_head">
                  <img className="img-fluid w-100" src={course.image} alt={course.title} />
                </div>
                <div className="course_content p-4 border rounded flex-grow-1 d-flex flex-column">
                  <span className="price">${course.price}</span>
                  <span className="tag mb-4 d-inline-block">{course.tag}</span>
                  <h4 className="mb-3">
                    <a href="course-details.html">{course.title}</a>
                  </h4>
                  <p className="flex-grow-1">{course.description}</p>
                  <div
                    className="course_meta d-flex justify-content-lg-between align-items-lg-center flex-lg-row flex-column mt-4"
                  >
                    <div className="authr_meta d-flex align-items-center">
                      <img src={course.author.image} alt={course.author.name} />
                      <span className="d-inline-block ms-2">{course.author.name}</span>
                    </div>
                    <div className="mt-lg-0 mt-3 d-flex">
                      <span className="meta_info me-4">
                        <a href="#" className="d-flex align-items-center text-decoration-none"> <i className="bi bi-people me-2"></i>{course.meta.users} </a>
                      </span>
                      <span className="meta_info">
                        <a href="#" className="d-flex align-items-center text-decoration-none"> <i className="bi bi-heart me-2"></i>{course.meta.likes} </a>
                      </span>
                    </div>
                  </div>
                  
                  <button className="btn btn-outline-warning w-100 mt-4 fw-bold shadow-sm" onClick={(e) => handleAddToCart(e, course)}>
                    <i className="bi bi-cart-plus me-2"></i> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;