import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!email.match(emailRegex)) {
      setError('Please enter a valid email address.');
      return;
    }
    
    console.log('Password reset requested for:', email);
    alert(`If an account exists for ${email}, a password reset link will be sent.`);
  };

  return (
    <section className="login_area py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="login_form p-4 p-lg-5 bg-white rounded shadow">
              <h3 className="text-center fw-bold mb-3">Forgot Password</h3>
              <p className="text-center text-muted mb-4">Enter your email address and we'll send you a link to reset your password.</p>
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-4">
                  <input type="email" name="email" className={`form-control ${error ? 'is-invalid' : ''}`} placeholder="Your Email Address" value={email} onChange={(e) => {setEmail(e.target.value); setError('');}} required />
                  {error && <div className="invalid-feedback">{error}</div>}
                </div>
                <button type="submit" className="btn btn-warning w-100 py-2 fw-bold">Send Reset Link</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;