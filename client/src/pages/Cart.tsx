import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';
import type { Product } from '../types';

export default function Cart() {
    const { cart, removeFromCart, cartTotal } = useCart();
    const API_BASE_URL = "http://localhost:5010";

    if (cart.length === 0) return <div className="empty-cart"><h2>Your cart is empty</h2></div>;

    return (
        <div className="cart-container">
            <h2>Your Shopping Cart</h2>
            <div className="cart-list">
                {cart.map((item, index) => (
                    
                    <div key={`${item.id}-${index}`} className="cart-item">
                        <img src={`${API_BASE_URL}${item.imageUrl}`} alt={item.name} width="50" />
                        <div>
                            <h4>{item.name}</h4>
                            <p>${item.price}</p>
                        </div>
                        <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                ))}
            </div>
            <div className="cart-summary">
                <h3>Total: ${cartTotal.toFixed(2)}</h3>
                <Link to="/checkout"><button className="checkout-btn">Proceed to Checkout</button></Link>
            </div>
        </div>
    );
}