import { useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { store } from './store';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetail from './pages/ProductDetail';
import CartItem from './components/CartItem';
import Checkout from './pages/Checkout';
import AboutUs from './components/AboutUs';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p className="landing-tagline">
          Healthy, hand-picked houseplants delivered to your door.
        </p>
        <button className="btn-get-started" onClick={() => navigate('/shop')}>
          Get Started
        </button>
      </div>
      <nav className="landing-nav">
        <Link to="/shop">Shop Plants</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/about">About Us</Link>
      </nav>
    </div>
  );
}

// TODO: move navbar into its own layout component later
function AppRoutes() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}
