import React, { useState } from 'react';

const Registration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    otp: '',
    firstName: '',
    lastName: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear the error for this field once the user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  // Step 1: Submit Email
  const handleGetOtp = (e) => {
    e.preventDefault();
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!formData.email.match(emailRegex)) {
      setErrors({ ...errors, email: 'Please enter a valid email address.' });
      return;
    }
    // Here you would typically make an API call to generate and send the OTP
    console.log(`OTP requested for ${formData.email}`);
    setStep(2);
  };

  // Step 2: Verify OTP
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (formData.otp.length < 4) { // Assuming OTP is at least 4 characters
      setErrors({ ...errors, otp: 'Please enter a valid OTP.' });
      return;
    }
    // Here you would typically make an API call to verify the OTP matches
    console.log(`Verifying OTP: ${formData.otp}`);
    setStep(3);
  };

  // Step 3: Final Registration Submission
  const handleFinalSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required.';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required.';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';

    // Password validation: minimum 8 characters, at least 1 letter and 1 number
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    if (!formData.password.match(passwordRegex)) {
      newErrors.password = 'Password must be at least 8 characters, and contain at least one letter and one number.';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit full registration payload to API
    console.log('Final Registration Payload:', formData);
    alert('Registration Successful!');
    
    // Reset form to step 1 (Optional based on your app flow)
    // setStep(1);
    // setFormData({ ... })
  };

  return (
    <section className="registration_area py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="register_form p-4 p-lg-5 bg-white rounded shadow">
              <h3 className="text-center fw-bold mb-2">Create an Account</h3>
              <p className="text-center text-muted mb-4">
                {step === 1 && "Start by entering your email"}
                {step === 2 && "We've sent an OTP to your email"}
                {step === 3 && "Almost there! Complete your profile"}
              </p>

              {/* Section 1: Email & OTP Request */}
              {step === 1 && (
                <form onSubmit={handleGetOtp} noValidate>
                  <div className="mb-4">
                    <input
                      type="email"
                      name="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      placeholder="Your Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                  <button type="submit" className="btn btn-warning w-100 py-2 fw-bold">
                    Get OTP
                  </button>
                </form>
              )}

              {/* Section 2: Verify OTP */}
              {step === 2 && (
                <form onSubmit={handleVerifyOtp} noValidate>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="otp"
                      className={`form-control text-center fs-4 letter-spacing-2 ${errors.otp ? 'is-invalid' : ''}`}
                      placeholder="Enter OTP"
                      value={formData.otp}
                      onChange={handleChange}
                      required
                    />
                    {errors.otp && <div className="invalid-feedback text-center">{errors.otp}</div>}
                  </div>
                  <button type="submit" className="btn btn-warning w-100 py-2 fw-bold">
                    Submit OTP
                  </button>
                  <div className="text-center mt-3">
                    <button type="button" className="btn btn-link text-muted" onClick={() => setStep(1)}>
                      <small>Change Email Address</small>
                    </button>
                  </div>
                </form>
              )}

              {/* Section 3: Profile Details */}
              {step === 3 && (
                <form onSubmit={handleFinalSubmit} noValidate>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input type="text" name="firstName" className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                      {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                    </div>
                    <div className="col-md-6 mb-3">
                      <input type="text" name="lastName" className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                      {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                    </div>
                  </div>

                  <div className="mb-3">
                    <input type="tel" name="phone" className={`form-control ${errors.phone ? 'is-invalid' : ''}`} placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
                    {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                  </div>

                  <div className="mb-3">
                    <input type="password" name="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} placeholder="Password" value={formData.password} onChange={handleChange} required />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                  </div>

                  <div className="mb-4">
                    <input type="password" name="confirmPassword" className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
                    {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                  </div>

                  <button type="submit" className="btn btn-warning w-100 py-2 fw-bold">
                    Complete Registration
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;