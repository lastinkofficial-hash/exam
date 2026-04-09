import React, { useState } from 'react';

const Login = ({ onForgotPasswordClick }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    
    if (!formData.email.match(emailRegex)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('Login Payload:', formData);
    alert('Login Successful!');
  };

  return (
    <section className="login_area py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="login_form p-4 p-lg-5 bg-white rounded shadow">
              <h3 className="text-center fw-bold mb-4">Welcome Back</h3>
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-4">
                  <input type="email" name="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} placeholder="Your Email Address" value={formData.email} onChange={handleChange} required />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="mb-3">
                  <input type="password" name="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} placeholder="Password" value={formData.password} onChange={handleChange} required />
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>
                <div className="d-flex justify-content-end mb-4">
                  <button type="button" className="btn btn-link text-muted p-0 text-decoration-none" onClick={onForgotPasswordClick}><small>Forgot Password?</small></button>
                </div>
                <button type="submit" className="btn btn-warning w-100 py-2 fw-bold">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;