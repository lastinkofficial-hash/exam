import React from 'react';

const Reviews = () => {
    return (
        <>
            <h4 className="title">Reviews</h4>
            <div className="content">
                <div className="review-top row pt-40">
                    <div className="col-lg-12">
                        <h6 className="mb-15">Provide Your Rating</h6>
                        <div className="d-flex flex-row reviews justify-content-between">
                            <span>Quality</span>
                            <div className="star">
                                <i className="bi bi-star-fill checked"></i>
                                <i className="bi bi-star-fill checked"></i>
                                <i className="bi bi-star-fill checked"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                            </div>
                            <span>Outstanding</span>
                        </div>
                        <div className="d-flex flex-row reviews justify-content-between">
                            <span>Puncuality</span>
                            <div className="star">
                                <i className="bi bi-star-fill checked"></i>
                                <i className="bi bi-star-fill checked"></i>
                                <i className="bi bi-star-fill checked"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                            </div>
                            <span>Outstanding</span>
                        </div>
                        <div className="d-flex flex-row reviews justify-content-between">
                            <span>Quality</span>
                            <div className="star">
                                <i className="bi bi-star-fill checked"></i>
                                <i className="bi bi-star-fill checked"></i>
                                <i className="bi bi-star-fill checked"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                            </div>
                            <span>Outstanding</span>
                        </div>
                    </div>
                </div>
                <div className="feedeback">
                    <h6>Your Feedback</h6>
                    <textarea name="feedback" className="form-control" cols="10" rows="10"></textarea>
                    <div className="mt-10 text-end">
                        <a href="#" className="primary-btn2 text-end rounded-0 text-white">Submit</a>
                    </div>
                </div>
                <div className="comments-area mb-30">
                    <div className="comment-list">
                        <div className="single-comment single-reviews justify-content-between d-flex">
                            <div className="user justify-content-between d-flex">
                                <div className="thumb">
                                    <img src="img/blog/c1.jpg" alt=""/>
                                </div>
                                <div className="desc">
                                    <h5><a href="#">Emilly Blunt</a>
                                        <div className="star">
                                            <span className="bi bi-star-fill checked"></span>
                                            <span className="bi bi-star-fill checked"></span>
                                            <span className="bi bi-star-fill checked"></span>
                                            <span className="bi bi-star"></span>
                                            <span className="bi bi-star"></span>
                                        </div>
                                    </h5>
                                    <p className="comment">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="comment-list">
                        <div className="single-comment single-reviews justify-content-between d-flex">
                            <div className="user justify-content-between d-flex">
                                <div className="thumb">
                                    <img src="img/blog/c2.jpg" alt=""/>
                                </div>
                                <div className="desc">
                                    <h5><a href="#">Elsie Cunningham</a>
                                        <div className="star">
                                            <span className="bi bi-star-fill checked"></span>
                                            <span className="bi bi-star-fill checked"></span>
                                            <span className="bi bi-star-fill checked"></span>
                                            <span className="bi bi-star"></span>
                                            <span className="bi bi-star"></span>
                                        </div>
                                    </h5>
                                    <p className="comment">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="comment-list">
                        <div className="single-comment single-reviews justify-content-between d-flex">
                            <div className="user justify-content-between d-flex">
                                <div className="thumb">
                                    <img src="img/blog/c3.jpg" alt=""/>
                                </div>
                                <div className="desc">
                                    <h5><a href="#">Maria Luna</a>
                                        <div className="star">
                                            <span className="bi bi-star-fill checked"></span>
                                            <span className="bi bi-star-fill checked"></span>
                                            <span className="bi bi-star-fill checked"></span>
                                            <span className="bi bi-star"></span>
                                            <span className="bi bi-star"></span>
                                        </div>
                                    </h5>
                                    <p className="comment">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
       );
    };
    
    export default Reviews;