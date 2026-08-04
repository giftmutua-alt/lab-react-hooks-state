import React, { useState } from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

// Exported so tests can import it
export const sampleProducts = [
  { id: 1, name: "Milk", category: "Dairy" },
  { id: 2, name: "Bread", category: "Bakery" },
  { id: 3, name: "Apple", category: "Fruits" },   // ✅ matches test
  { id: 4, name: "Cheese", category: "Dairy" },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const filteredProducts =
    category === "All"
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === category);

  return (
    <div
      style={{
        background: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100vh",
      }}
    >
      <h1>Shopping App</h1>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <div>
        <label>Filter by category: </label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Fruits">Fruits</option>
        </select>
      </div>

      <ProductList products={filteredProducts} addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
}

export default App;



