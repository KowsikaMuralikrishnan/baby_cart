import React, { useState } from "react";
import { useCart } from "./CartContext";

const AddToCart = ({ product }) => {
  const { cart, handleQuantityChange, addToCart } = useCart();
  const [showControls, setShowControls] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "10px" }}>
      <img
        src={product.image}
        alt={product.name}
        height="150px"
        width="150px"
        style={{ cursor: "pointer" }}
        onClick={() => setShowControls(!showControls)}
      />
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>

      {showControls && (
        <>
          <div style={{ marginBottom: "10px" }}>
            <button
              onClick={() =>
                handleQuantityChange(
                  product.name,
                  (cart[product.name]?.quantity || 1) - 1
                )
              }
              style={buttonStyle}
            >
              -
            </button>
            <input
              type="number"
              min="1"
              value={cart[product.name]?.quantity || 1}
              onChange={(e) =>
                handleQuantityChange(
                  product.name,
                  parseInt(e.target.value) || 1
                )
              }
              style={inputStyle}
            />
            <button
              onClick={() =>
                handleQuantityChange(
                  product.name,
                  (cart[product.name]?.quantity || 1) + 1
                )
              }
              style={buttonStyle}
            >
              +
            </button>
          </div>

          <button style={addToCartButton} onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </>
      )}
    </div>
  );
};

const buttonStyle = {
  padding: "5px 10px",
  border: "none",
  backgroundColor: "#ffb6c1",
  color: "white",
  fontSize: "16px",
  borderRadius: "5px",
  cursor: "pointer",
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

const addToCartButton = {
  backgroundColor: "#ffb6c1",
  border: "none",
  color: "white",
  padding: "10px 20px",
  fontSize: "16px",
  borderRadius: "20px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "0.3s ease-in-out",
};

export default AddToCart;
