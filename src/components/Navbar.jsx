import { useSelector } from 'react-redux';
import { Link, useLocation, NavLink } from 'react-router-dom';

export default function Navbar() {
  const cart = useSelector((state) => state.cart.items);
  const location = useLocation();
  const itemCount = cart.reduce((sum, i) => sum + i.quantity, 0);
  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="brand">
          Paradise<span className="accent"> Nursery</span>
        </Link>
        <div className="nav-links">
          <NavLink
            to="/shop"
            end
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Shop
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? 'active' : '')}
            aria-label="Cart"
          >
            Cart
            <span className="cart-badge">{itemCount}</span>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            About Us
          </NavLink>
          {itemCount > 0 && (
            <span className="cart-total">
              {total.toLocaleString(undefined, {
                style: 'currency',
                currency: 'USD',
              })}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}
