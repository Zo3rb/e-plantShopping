import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearCart } from '../features/cart/CartSlice';

export default function Checkout() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const [form, setForm] = useState({ name: '', email: '', address: '' });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage('');
    // fake api call for now, replace with real backend later
    setTimeout(() => {
      setSubmitting(false);
      dispatch(clearCart());
      setMessage('Thank you! Your order has been placed.');
    }, 1000);
  };

  if (cart.length === 0) {
    return (
      <section className="checkout-page">
        <div className="container">
          <p>Your cart is empty.</p>
          <Link to="/" className="btn btn-primary">Start Shopping</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="checkout-page">
      <div className="container">
        <header className="page-header">
          <h1>Checkout</h1>
          <Link to="/cart" className="btn btn-outline">
            ← Back to Cart
          </Link>
        </header>

        {message ? (
          <div className="order-success">
            <p>{message}</p>
            <Link to="/" className="btn btn-primary">Shop Again</Link>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="checkout-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Shipping Address</label>
                <input
                  id="address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="order-total">
                <span>Order Total</span>
                <span>
                  {total.toLocaleString(undefined, {
                    style: 'currency',
                    currency: 'USD',
                  })}
                </span>
              </div>
              <button
                className="btn btn-primary"
                type="submit"
                disabled={submitting}
              >
                {submitting ? 'Placing Order...' : 'Place Order'}
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
