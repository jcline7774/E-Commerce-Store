import React, { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(p => (
          <div key={p.id} className="border rounded-2xl shadow p-4">
            <h2 className="text-lg font-semibold">{p.name}</h2>
            <p className="text-sm">{p.description}</p>
            <p className="text-green-600 font-bold mt-2">${p.price}</p>
            <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded-xl hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
