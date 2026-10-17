import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter, setSearch } from '../features/products/productsSlice';
import { useProducts } from '../hooks/useProducts';
import ProductCard from './ProductCard';
import { CATEGORIES } from '../data/products';

export default function ProductList() {
  const dispatch = useDispatch();
  const { products, status, error, filter, search } = useProducts();
  const [query, setQuery] = useState(search);

  const handleCategory = (cat) => {
    dispatch(setFilter(cat));
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    dispatch(setSearch(value));
  };

  // Always show the controls so the user can clear the search / change category
  return (
    <section className="product-list">
      <div className="controls">
        <div className="filter-pills">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={filter === cat ? 'pill active' : 'pill'}
              onClick={() => handleCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search plants..."
            value={query}
            onChange={handleSearch}
            aria-label="Search products"
          />
        </div>
      </div>

      <div className="grid">
        {status === 'loading' ? (
          <p className="loading">Loading plants...</p>
        ) : status === 'failed' ? (
          <p className="error">Failed to load products: {error}</p>
        ) : !products || products.length === 0 ? (
          <p className="empty">No plants found matching your criteria.</p>
        ) : (
          products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))
        )}
      </div>
    </section>
  );
}
