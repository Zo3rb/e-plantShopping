import { useSelector, useDispatch } from 'react-redux';
import { removeItem, changeQuantity, clearCart } from '../../features/cart/cartSlice';

export default function CartDrawer({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const itemCount = cart.reduce((sum, i) => sum + i.quantity, 0);
  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  if (!isOpen) return null;

  return (
    <>
      <div className="backdrop" onClick={onClose} />
      <aside className={`drawer ${isOpen ? 'is-open' : ''}`} aria-label="Shopping cart">
        <header className="drawer-header">
          <h2>Your Cart ({itemCount})</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </header>
        <div className="drawer-body">
          {cart.length === 0 ? (
            <p className="empty">Your cart is empty.</p>
          ) : (
            <>
              <ul className="cart-items">
                {cart.map((item) => (
                  <li key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} className="item-img" />
                    <div className="item-info">
                      <h4 className="item-name">{item.name}</h4>
                      <p className="item-price">
                        {item.price.toLocaleString(undefined, {
                          style: 'currency',
                          currency: 'USD',
                        })}
                      </p>
                    </div>
                    <div className="item-controls">
                      <button
                        className="qty-btn"
                        onClick={() =>
                          dispatch(
                            changeQuantity({ id: item.id, quantity: item.quantity - 1 })
                          )
                        }
                      >
                        −
                      </button>
                      <span className="qty">{item.quantity}</span>
                      <button
                        className="qty-btn"
                        onClick={() =>
                          dispatch(
                            changeQuantity({ id: item.id, quantity: item.quantity + 1 })
                          )
                        }
                      >
                        +
                      </button>
                      <button
                        className="remove-btn"
                        onClick={() => dispatch(removeItem(item.id))}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="cart-totals">
                <span>Total</span>
                <span className="cart-total">
                  {total.toLocaleString(undefined, {
                    style: 'currency',
                    currency: 'USD',
                  })}
                </span>
              </div>
              <button className="btn btn-primary checkout-btn" onClick={onClose}>
                Checkout
              </button>
              <button className="btn btn-outline clear-btn" onClick={() => dispatch(clearCart())}>
                Clear Cart
              </button>
            </>
          )}
        </div>
      </aside>
    </>
  );
}
