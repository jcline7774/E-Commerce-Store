// src/App.js
import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';

const fakeProducts = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    image: `${process.env.PUBLIC_URL}/images/headphones.jpg`,
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 149.99,
    image: `${process.env.PUBLIC_URL}/images/smartwatch.jpg`,
  },
  {
    id: 3,
    name: 'Running Shoes',
    price: 79.99,
    image: `${process.env.PUBLIC_URL}/images/shoes.jpg`,
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleCheckout = async () => {
    try {
      const response = await fetch("http://localhost:5000/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: cartItems }),
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error("Checkout error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
  <h1 className="text-3xl font-bold mb-6">🛍️ E-Commerce Store</h1>
  
  <div className="flex flex-col lg:flex-row gap-6">
    {/* Product Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
      {fakeProducts.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
      ))}
    </div>

    {/* Cart */}
    <div className="w-full lg:w-1/4">
      <Cart cartItems={cartItems} onCheckout={handleCheckout} />
    </div>
  </div>
</div>
  );
}

export default App;
