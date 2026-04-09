import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../navbar/CartContext';

const CheckoutSection = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', phone: '', email: '',
    address: '', city: '', zip: '', paymentMethod: 'creditCard'
  });
  
  const [couponCode, setCouponCode] = useState('');
  const [discountRate, setDiscountRate] = useState(0);
  const [couponMessage, setCouponMessage] = useState(null);

  const cartContext = useContext(CartContext) || {};
  const { cartItems = [], clearCart = () => {} } = cartContext;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    // Sample mock validation logic for a coupon
    if (couponCode.toUpperCase() === 'LEARN20') {
      setDiscountRate(0.20);
      setCouponMessage({ type: 'success', text: 'Coupon applied! You get 20% off.' });
    } else {
      setDiscountRate(0);
      setCouponMessage({ type: 'danger', text: 'Invalid or expired coupon code.' });
    }
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    console.log("Order placed:", formData);
    alert("Order successfully placed!");
    clearCart();
    navigate('/'); // Redirect to home after order
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = subtotal * discountRate;
  const total = subtotal - discountAmount;

  if (cartItems.length === 0) {
    return (
      <section className="checkout_area py-5 bg-light">
        <div className="container">
          <div className="text-center bg-white p-5 rounded shadow-sm">
            <h3 className="mb-4">Your cart is empty.</h3>
            <p className="text-muted mb-4">
              You cannot proceed to checkout without items in your cart.
            </p>
            <Link to="/courses" className="btn btn-warning py-2 px-4 fw-bold">Explore Courses</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="checkout_area py-5 bg-light">
      <div className="container">
        <form onSubmit={handlePlaceOrder}>
          <div className="row">
            {/* Billing Details */}
            <div className="col-lg-8 mb-4">
              <div className="bg-white p-4 rounded shadow-sm h-100">
                <h3 className="mb-4 fw-bold">Billing Details</h3>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label text-muted">First Name *</label>
                    <input type="text" name="firstName" className="form-control" required value={formData.firstName} onChange={handleChange} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label text-muted">Last Name *</label>
                    <input type="text" name="lastName" className="form-control" required value={formData.lastName} onChange={handleChange} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label text-muted">Phone Number *</label>
                    <input type="tel" name="phone" className="form-control" required value={formData.phone} onChange={handleChange} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label text-muted">Email Address *</label>
                    <input type="email" name="email" className="form-control" required value={formData.email} onChange={handleChange} />
                  </div>
                  <div className="col-12 mb-3">
                    <label className="form-label text-muted">Address *</label>
                    <input type="text" name="address" className="form-control" required value={formData.address} onChange={handleChange} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label text-muted">Town / City *</label>
                    <input type="text" name="city" className="form-control" required value={formData.city} onChange={handleChange} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label text-muted">Postcode / ZIP *</label>
                    <input type="text" name="zip" className="form-control" required value={formData.zip} onChange={handleChange} />
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="col-lg-4 mb-4">
              <div className="bg-white p-4 rounded shadow-sm h-100">
                <h3 className="mb-3 fw-bold">Your Order</h3>
                <p className="text-muted mb-4">You have {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart.</p>
                <div className="order_summary">
                  <ul className="list-group list-group-flush mb-4">
                    <li className="list-group-item d-flex justify-content-between fw-bold text-muted px-0">
                      <span>Product</span>
                      <span>Total</span>
                    </li>
                    {cartItems.map(item => (
                      <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center px-0">
                        <div className="d-flex align-items-center">
                          <img src={item.image} alt={item.title} className="img-fluid rounded me-3" style={{width: '60px', height: '60px', objectFit: 'cover'}} />
                          <div>
                            <h6 className="my-0 fw-bold">{item.title}</h6>
                            <small className="text-muted">Qty: {item.quantity}</small>
                          </div>
                        </div>
                        <span className="fw-bold">${(item.price * item.quantity).toFixed(2)}</span>
                      </li>
                    ))}
                    <li className="list-group-item d-flex justify-content-between fw-bold px-0"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></li>
                    
                    {/* Coupon System */}
                    <li className="my-3">
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Coupon code (e.g. LEARN20)" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />
                        <button className="btn btn-secondary" type="button" onClick={handleApplyCoupon}>Apply</button>
                      </div>
                      {couponMessage && (
                        <small className={`text-${couponMessage.type} d-block mt-1`}>{couponMessage.text}</small>
                      )}
                    </li>
                    
                    {discountAmount > 0 && (
                      <li className="list-group-item d-flex justify-content-between text-success fw-bold px-0">
                        <span>Discount</span><span>-${discountAmount.toFixed(2)}</span>
                      </li>
                    )}
                    <li className="list-group-item d-flex justify-content-between fw-bold fs-5 border-top mt-2 pt-3 px-0">
                      <span>Total</span><span className="text-warning">${total.toFixed(2)}</span>
                    </li>
                  </ul>

                  <h5 className="mb-3 fw-bold">Payment Method</h5>
                  <div className="form-check mb-2"><input className="form-check-input" type="radio" name="paymentMethod" id="creditCard" value="creditCard" checked={formData.paymentMethod === 'creditCard'} onChange={handleChange} /><label className="form-check-label" htmlFor="creditCard">Credit Card</label></div>
                  <div className="form-check mb-2"><input className="form-check-input" type="radio" name="paymentMethod" id="paypal" value="paypal" checked={formData.paymentMethod === 'paypal'} onChange={handleChange} /><label className="form-check-label" htmlFor="paypal">PayPal</label></div>
                  <div className="form-check mb-4"><input className="form-check-input" type="radio" name="paymentMethod" id="cod" value="cod" checked={formData.paymentMethod === 'cod'} onChange={handleChange} /><label className="form-check-label" htmlFor="cod">Cash on Delivery</label></div>

                  <button type="submit" className="btn btn-warning w-100 py-3 fw-bold fs-6 shadow-sm">Place Order</button>
                  <div className="text-center mt-3"><Link to="/cart" className="text-decoration-none text-muted"><small><i className="bi bi-arrow-left"></i> Return to Cart</small></Link></div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
export default CheckoutSection;