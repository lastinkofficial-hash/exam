import React from 'react';
import Reviews from './Reviews';

const defaultOutline = [
    { title: 'Introduction Lesson', link: '#' },
    { title: 'Basics of HTML', link: '#' },
    { title: 'Getting Know about HTML', link: '#' },
    { title: 'Tags and Attributes', link: '#' },
    { title: 'Basics of CSS', link: '#' },
    { title: 'Getting Familiar with CSS', link: '#' },
    { title: 'Introduction to Bootstrap', link: '#' },
    { title: 'Responsive Design', link: '#' },
    { title: 'Canvas in HTML 5', link: '#' }
];

const CourseDetails = ({ course_image, courseOutline = defaultOutline }) => {
    return (
        <section className="course_details_area section_gap">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 course_details_left">
                    <div className="main_image">
                        <img className="img-fluid" src={course_image} alt=""/>
                    </div>
                    <div className="content_wrapper">
                        <h4 className="title">Objectives</h4>
                        <div className="content">
                            When you enter into any new area of science, you almost always find yourself with a
                            baffling new language of
                            technical terms to learn before you can converse with the experts. This is certainly
                            true in astronomy both in
                            terms of terms that refer to the cosmos and terms that describe the tools of the trade,
                            the most prevalent
                            being the telescope.
                            <br />
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea
                            commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum. Lorem ipsum dolor sit
                            amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum.
                        </div>

                        <h4 className="title">Eligibility</h4>
                        <div className="content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                            <br />
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea
                            commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum. Lorem ipsum dolor sit
                            amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum.
                        </div>

                        <h4 className="title">Course Outline</h4>
                        <div className="content">
                            <ul className="course_list">
                                {courseOutline.map((item, index) => (
                                    <li key={index} className="justify-content-between d-flex">
                                        <p>{item.title}</p>
                                        <a className="primary-btn text-uppercase" href={item.link}>View Details</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="col-lg-4 right-contents">
                    <ul>
                        <li>
                            <a className="justify-content-between d-flex" href="#">
                                <p>Trainer’s Name</p>
                                <span className="or">George Mathews</span>
                            </a>
                        </li>
                        <li>
                            <a className="justify-content-between d-flex" href="#">
                                <p>Course Fee </p>
                                <span>$230</span>
                            </a>
                        </li>
                        <li>
                            <a className="justify-content-between d-flex" href="#">
                                <p>Available Seats </p>
                                <span>15</span>
                            </a>
                        </li>
                        <li>
                            <a className="justify-content-between d-flex" href="#">
                                <p>Schedule </p>
                                <span>2.00 pm to 4.00 pm</span>
                            </a>
                        </li>
                    </ul>
                    <a href="#" className="primary-btn2 text-uppercase enroll rounded-0 text-white">Enroll the course</a>

                    <Reviews />
                </div>
            </div>
        </div>
    </section>
    );
};

export default CourseDetails;