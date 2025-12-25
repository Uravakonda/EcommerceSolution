import { useEffect, useState } from 'react';
import { useCart } from '../CartContext';
import type { Product } from '../types';

export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    const { addToCart } = useCart();
    const API_BASE_URL = "http://localhost:5010";

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/products`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className="product-grid">
            {products.map((p) => (
                <div key={p.id} className="product-card">
                    <img src={`${API_BASE_URL}${p.imageUrl}`} alt={p.name} className="product-image" />
                    <div className="product-info">
                        <h3>{p.name}</h3>
                        <p className="price">${p.price}</p>
                        <button onClick={() => addToCart(p)}>Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    );
}