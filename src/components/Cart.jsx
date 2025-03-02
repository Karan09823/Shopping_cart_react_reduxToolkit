import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  applyTempUpdate,
  removeFromCart,
  updateTempQuantity,
} from "../features/ShopCart/cartSlice";

function Cart() {
  const {
    items: cartItems,
    tempItems,
    totalPrice,
  } = useSelector((state) => state.cart);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateTempQuantity({ id, quantity }));
  };

  const handleApplyUpdates = (id) => {
    //
    // tempItems.forEach((item) => {
    // dispatch(applyTempUpdate(item.id));
    //});
    dispatch(applyTempUpdate(id));
  };

  return (
    <div className="wrapper">
      <div className="cart-page-container">
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <h3>Your Cart is Empty</h3>
            <button onClick={() => navigate("/")}>Back To Home</button>
          </div>
        ) : (
          <div className="cart-container">
            <h2>Your Cart</h2>

            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>price:${item.price}</p>
                  <div>
                    <input
                      type="number"
                      min="1"
                      value={
                        tempItems.find((tempItem) => tempItem.id === item.id)
                          ?.quantity || item.quantity
                      }
                      onChange={(e) =>
                        handleUpdateQuantity(item.id, parseInt(e.target.value))
                      }
                    />

                    <button onClick={()=>handleApplyUpdates(item.id)}>Update</button>
                    <button onClick={() => handleRemoveItem(item.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="cart-total">
              <p>Total:${totalPrice.toFixed(2)}</p>
            </div>
            <button onClick={() => navigate("/")} className="back-button">
              Back To Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
