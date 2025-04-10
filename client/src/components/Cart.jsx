import React from 'react';

const Cart = ({ cartItems, onCheckout }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="bg-white p-4 rounded-xl shadow mt-6 max-w-md mx-auto">

      <h2 className="text-xl font-bold mb-4">🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <ul className="space-y-2">
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between border-b py-2">
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-4 font-semibold">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-center mt-4">
  <button
    className="bg-green-500 text-white py-2 px-6 rounded-xl hover:bg-green-600 transition"
    onClick={onCheckout}
  >
    Checkout
  </button>
</div>
        </>
      )}
    </div>
  );
};

export default Cart;
