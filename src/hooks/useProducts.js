import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setProducts, setError } from '../features/products/productsSlice';
import { PRODUCTS } from '../data/products';

const DELAY_MS = 600;

export function useProducts() {
  const dispatch = useDispatch();
  const { items, status, error, filter, search } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      dispatch(setLoading());
      try {
        await new Promise((r) => setTimeout(r, DELAY_MS));
        if (!cancelled) {
          dispatch(setProducts(PRODUCTS));
        }
      } catch (err) {
        if (!cancelled) {
          dispatch(setError(err.message));
        }
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, [dispatch]);

  const filtered = items.filter((p) => {
    const matchCategory =
      filter === 'all' || p.category === filter;
    const matchSearch = p.name
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return { products: filtered, status, error, filter, search };
}
