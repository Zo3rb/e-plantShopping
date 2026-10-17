import { useProducts } from '../hooks/useProducts';
import ProductList from '../components/ProductList';

export default function Home() {
  const { products, status, error, filter, search } = useProducts();

  return (
    <section className="home">
      <div className="container">
        <header className="page-header">
          <h1>Find Your Perfect Plant</h1>
          <p className="page-subtitle">
            Healthy, hand-picked houseplants delivered to your door.
          </p>
        </header>
        <ProductList
          products={products}
          status={status}
          error={error}
          filter={filter}
          search={search}
        />
      </div>
    </section>
  );
}
