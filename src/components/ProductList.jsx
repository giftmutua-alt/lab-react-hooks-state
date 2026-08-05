import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products, addToCart }) {
  if (products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;



