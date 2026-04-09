import React from 'react';

const ContactSection = () => {
  return (
    <section className="contact_area py-5">
      <div className="container">
        <div className="row">
              <div className="col-lg-3">
                <div className="contact_info">
                  <div className="info_item">
                    <i className="ti-home"></i>
                    <h6>California, United States</h6>
                    <p>Santa monica bullevard</p>
                  </div>
                  <div className="info_item">
                    <i className="ti-headphone"></i>
                    <h6><a href="#">00 (440) 9865 562</a></h6>
                    <p>Mon to Fri 9am to 6 pm</p>
                  </div>
                  <div className="info_item">
                    <i className="ti-email"></i>
                    <h6><a href="#">support@colorlib.com</a></h6>
                    <p>Send us your query anytime!</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <form
                  className="row contact_form"
                  action="contact_process.php"
                  method="post"
                  id="contactForm"
              noValidate
                >
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                    onFocus={(e) => (e.target.placeholder = '')}
                    onBlur={(e) => (e.target.placeholder = 'Enter your name')}
                    required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter email address"
                    onFocus={(e) => (e.target.placeholder = '')}
                    onBlur={(e) => (e.target.placeholder = 'Enter email address')}
                    required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        placeholder="Enter Subject"
                    onFocus={(e) => (e.target.placeholder = '')}
                    onBlur={(e) => (e.target.placeholder = 'Enter Subject')}
                    required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        id="message"
                        rows="1"
                        placeholder="Enter Message"
                    onFocus={(e) => (e.target.placeholder = '')}
                    onBlur={(e) => (e.target.placeholder = 'Enter Message')}
                    required
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12 text-right d-flex justify-content-center">
                    <button type="submit" value="submit" className="btn btn-warning w-50 py-2 fw-bold ">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
    </section>
  );
};

export default ContactSection;
