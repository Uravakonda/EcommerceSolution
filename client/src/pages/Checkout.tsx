import { useState } from 'react';
import { useCart } from '../CartContext';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
    const { cart, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', address: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const orderPayload = {
            CustomerName: formData.name,
            CustomerAddress: formData.address,
            TotalAmount: cartTotal,
            Items: cart.map(item => ({
                ProductId: item.id,
                ProductName: item.name,
                Price: item.price,
                Quantity: 1
            }))
        };

        try {
            const response = await fetch('http://localhost:5010/api/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(orderPayload)
            });

            if (response.ok) {
                alert("Order Placed Successfully!");
                clearCart();
                navigate('/');
            }
        } catch (error) {
            console.error("Checkout failed", error);
        }
    };

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            <p>Total to Pay: <strong>${cartTotal.toFixed(2)}</strong></p>
            <form onSubmit={handleSubmit} className="checkout-form">
                <label>Name</label>
                <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                />

                <label>Address</label>
                <textarea
                    required
                    value={formData.address}
                    onChange={e => setFormData({...formData, address: e.target.value})}
                />

                <button type="submit">Place Order</button>
            </form>
        </div>
    );
}