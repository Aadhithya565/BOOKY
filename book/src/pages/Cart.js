import React, { useContext } from "react";
import { CartContext } from "../components/Cartcontext";
import './Cart.css';

const MyCart = () => {
  const { cartItems, handleQuantityChange, handleRemoveItem } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.price ? item.price * item.quantity : 0),
    0
  );

  return (
    <div className="pageContainer">
      <div className="cartContainer">
        <h1 style={{ color: "black" }}>My Cart</h1>
        <div className="cartItems">
          {cartItems.map(item => (
            <div key={item.id} className="cartItem">
              <div className="itemDetails">
                <img
                  src={item.imageUrl || `https://via.placeholder.com/50?text=${item.title}`}
                  alt={item.title}
                  className="itemImage"
                />
                <div>
                  <span className="itemName">{item.title}</span>
                  <span className="itemPrice">
                    ${item.price ? item.price.toFixed(2) : "N/A"}
                  </span>
                </div>
              </div>
              <div className="itemActions">
                <button
                  className="quantityButton"
                  onClick={() => handleQuantityChange(item.id, -1)}
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <span className="quantity">{item.quantity}</span>
                <button
                  className="quantityButton"
                  onClick={() => handleQuantityChange(item.id, 1)}
                >
                  +
                </button>
                <button
                  className="removeButton"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cartSummary">
          <div className="totalPrice">
            <span>Total Price:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button className="placeOrderButton">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
