import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../features/cart/CartSlice';
import { PRODUCTS } from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const product = PRODUCTS.find((p) => p.id === id);
  const inCart = cart.find((i) => i.id === id);

  if (!product) {
    return (
      <div className="container">
        <p className="error">Product not found.</p>
      </div>
    );
  }

  const handleAdd = () => {
    dispatch(addItem(product));
  };

  return (
    <section className="product-detail">
      <div className="container">
        <div className="detail-layout">
          <div className="detail-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="detail-info">
            <span className="category-badge">{product.category}</span>
            <h1>{product.name}</h1>
            <p className="price">
              {product.price.toLocaleString(undefined, {
                style: 'currency',
                currency: 'USD',
              })}
            </p>
            <p className="description">{product.description}</p>
            <p className="stock">
              {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
            </p>
            <div className="detail-actions">
              <button
                className="btn btn-primary"
                onClick={handleAdd}
                disabled={product.stock === 0 || inCart}
              >
                {inCart ? 'Already in cart' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
