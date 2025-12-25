import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { CartProvider, useCart } from './CartContext';
import { FaShoppingCart } from 'react-icons/fa';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import './App.css';

//navgation bar
function Navbar() {
    const { cartCount } = useCart();
    return (
        <header>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h1>My E-Commerce Store</h1>
            </Link>
            <Link to="/cart" className="cart-icon">
                <FaShoppingCart size={24} />
                {cartCount > 0 && <span className="badge">{cartCount}</span>}
            </Link>
        </header>
    );
}


function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <div className="app-container">
                    <Navbar />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/checkout" element={<Checkout />} />
                        </Routes>
                    </main>
                </div>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;