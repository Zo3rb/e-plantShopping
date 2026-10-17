import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../features/cart/CartSlice';
import { Link } from 'react-router-dom';

export default function CartItem() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const itemCount = cart.reduce((sum, i) => sum + i.quantity, 0);
  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <section className="cart-page">
      <div className="container">
        <header className="page-header">
          <h1>Shopping Cart ({itemCount})</h1>
          <Link to="/shop" className="btn btn-outline">
            &larr; Continue Shopping
          </Link>
        </header>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <Link to="/shop" className="btn btn-primary">Start Shopping</Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="item-img" />
                  <div className="item-info">
                    <h3 className="item-name">{item.name}</h3>
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
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity - 1,
                          })
                        )
                      }
                    >
                      -
                    </button>
                    <span className="qty">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity + 1,
                          })
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
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="summary-row">
                <span>Items</span>
                <span>{itemCount}</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>
                  {total.toLocaleString(undefined, {
                    style: 'currency',
                    currency: 'USD',
                  })}
                </span>
              </div>
              <Link to="/checkout">
                <button className="btn btn-primary checkout-btn">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
