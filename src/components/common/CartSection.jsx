import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../navbar/CartContext';

const CartSection = () => {
  const { cartItems = [], updateQuantity = () => {}, removeFromCart = () => {} } = useContext(CartContext) || {};

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <section className="cart_area py-5 bg-light">
      <div className="container">
        <div className="cart_inner bg-white p-4 rounded shadow-sm">
          {cartItems.length === 0 ? (
            <div className="text-center py-5">
              <h3 className="mb-3">Your cart is empty</h3>
              <Link to="/courses" className="btn btn-warning py-2 px-4 fw-bold">Explore Courses</Link>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-borderless align-middle mb-0">
                <thead className="border-bottom">
                  <tr>
                    <th scope="col" className="pb-3 text-muted">Product</th>
                    <th scope="col" className="pb-3 text-muted">Price</th>
                    <th scope="col" className="pb-3 text-muted text-center">Quantity</th>
                    <th scope="col" className="pb-3 text-muted">Total</th>
                    <th scope="col" className="pb-3 text-muted text-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map(item => (
                    <tr key={item.id} className="border-bottom">
                      <td className="py-4">
                        <div className="d-flex align-items-center">
                          <img src={item.image} alt={item.title} className="img-fluid rounded" style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
                          <div className="ms-3">
                            <h5 className="mb-0 fw-bold">{item.title}</h5>
                          </div>
                        </div>
                      </td>
                      <td className="py-4">${item.price.toFixed(2)}</td>
                      <td className="py-4 text-center">
                        <div className="d-flex align-items-center justify-content-center">
                          <button className="btn btn-sm btn-outline-secondary px-2" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                          <span className="mx-3 fw-bold">{item.quantity}</span>
                          <button className="btn btn-sm btn-outline-secondary px-2" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                        </div>
                      </td>
                      <td className="py-4 fw-bold">${(item.price * item.quantity).toFixed(2)}</td>
                      <td className="py-4 text-end">
                        <button className="btn btn-sm btn-danger shadow-sm" onClick={() => removeFromCart(item.id)}><i className="bi bi-trash"></i> Remove</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="d-flex justify-content-between align-items-center pt-4 mt-2">
                <Link to="/courses" className="btn btn-outline-secondary py-2 px-4">Continue Shopping</Link>
                <div className="text-end d-flex align-items-center gap-4">
                  <h4 className="mb-0 fw-bold">Subtotal: <span className="text-warning">${subtotal.toFixed(2)}</span></h4>
                  <Link to="/checkout" className="btn btn-warning py-3 px-5 fw-bold shadow-sm">Proceed to Checkout</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CartSection;