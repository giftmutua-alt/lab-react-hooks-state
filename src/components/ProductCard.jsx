import React from "react";

function ProductCard({ product, addToCart }) {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <button
        data-testid={`product-${product.id}`}  
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;


