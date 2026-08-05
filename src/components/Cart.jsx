import React from "react";

function Cart({ cart }) {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>No items yet.</p>
      ) : (
        cart.map((item, index) => (
          <p key={index}>{item.name} is in your cart.</p>
        ))
      )}
    </div>
  );
}

export default Cart;

