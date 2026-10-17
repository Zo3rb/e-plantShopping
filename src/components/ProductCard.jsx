import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from '../features/cart/CartSlice';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    // debug: check what product is being added
    console.log('adding to cart:', product.name);
    dispatch(addItem(product));
  };

  return (
    <article className="card">
      <div className="card-image">
        <img src={product.image} alt={product.name} loading="lazy" />
        <span className="badge">{product.category}</span>
      </div>
      <div className="card-body">
        <Link to={`/products/${product.id}`}>
          <h3 className="card-title">{product.name}</h3>
        </Link>
        <p className="card-rating">
          ⭐ {product.rating.toFixed(1)} ({product.stock} in stock)
        </p>
        <div className="card-footer">
          <span className="card-price">
            {product.price.toLocaleString(undefined, {
              style: 'currency',
              currency: 'USD',
            })}
          </span>
          <button className="btn btn-primary" onClick={handleAdd}>
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
