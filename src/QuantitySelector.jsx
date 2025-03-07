// components/QuantitySelector.js
import React, { useState } from "react";

export function QuantitySelector({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value) => {
    setQuantity(Math.max(1, value)); // Prevent negative values
  };

  return (
    <div style={{ textAlign: "center", padding: "10px" }}>
      <button
        onClick={() => handleQuantityChange(quantity - 1)}
        style={buttonStyle}
      >
        -
      </button>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
        style={inputStyle}
      />
      <button
        onClick={() => handleQuantityChange(quantity + 1)}
        style={buttonStyle}
      >
        +
      </button>
      <br />
      <button
        style={addToCartStyle}
        onClick={() => onAddToCart(product, quantity)}
      >
        Add to Cart
      </button>
    </div>
  );
}

// Styles
const buttonStyle = {
  padding: "5px 10px",
  border: "none",
  backgroundColor: "#ffb6c1",
  color: "white",
  fontSize: "16px",
  borderRadius: "5px",
  cursor: "pointer",
  margin: "0 5px",
};

const inputStyle = {
  width: "50px",
  textAlign: "center",
  fontSize: "16px",
  padding: "5px",
  margin: "0 10px",
  border: "1px solid #ccc",
  borderRadius: "5px",
};

const addToCartStyle = {
  backgroundColor: "#ffb6c1",
  border: "none",
  color: "white",
  padding: "10px 20px",
  fontSize: "16px",
  borderRadius: "20px",
  fontWeight: "bold",
  cursor: "pointer",
  marginTop: "10px",
};
