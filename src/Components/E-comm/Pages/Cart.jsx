import React, { useState } from "react";
import "../Pages/Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { remove, increment, decrement } from "../Store/cartSlice";
import Notification from "../Components/Notification";

const Cart = () => {
  const [showNotification, setShowNotification] = useState(false);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(remove(productId));
    setShowNotification(true);
  };

  const handleIncrement = (productId) => {
    dispatch(increment(productId));
  };

  const handleDecrement = (productId) => {
    dispatch(decrement(productId));
  };

  const closeNotification = () => {
    setShowNotification(false);
  };

  const products = useSelector((state) => state.cart);

  const totalPrice = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <div className="CartPage">
      <h3 className="orangeText ">Cart</h3>

      {products.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        <>
          <div className="cartPage">
            <div className="cartWrapper paddings">
              {products.map((product) => (
                <div className="flexColCenter cartCard" key={product.id}>
                  {/* <div className="cartCard-img-title"> */}
                  <div className="cartcard-item">
                    <img src={product.image} alt="" />
                  </div>

                  <div className="cartcard-item">
                    <h5>{product.title}</h5>
                  </div>
                  {/* </div> */}
                  <div
                    className="cartcard-item"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <h5>
                        $ {product.price} x {product.quantity}
                      </h5>
                    </div>
                    <div className="incDec-btn-cont">
                      <button
                        className=" inc-dec"
                        onClick={() => handleIncrement(product.id)}
                      >
                        +
                      </button>
                      <button
                        className=" inc-dec"
                        onClick={() => handleDecrement(product.id)}
                      >
                        -
                      </button>
                    </div>
                  </div>

                  <div className="cartcard-item">
                    <button
                      className="button cart-inside"
                      onClick={() => handleRemove(product.id)}
                    >
                      Remove from Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="billing-section">
              <div className="billing-main">
                <h2>Summary</h2>

                <a href="/cart">
                  <p>Do you have a Promo code?</p>
                </a>
                <div>
                  <span>Subtotal</span>
                  <p>${totalPrice}</p>
                </div>
                <div>
                  <span>Estimated Shipping & Handling</span>
                  <p>${Math.floor(totalPrice * 0.03)}</p>
                </div>
                <div>
                  <span>Estimated Tax</span>
                  <p>${Math.floor(totalPrice * 0.08)}</p>
                </div>
                <br />
                <hr />
                <div className="total-price">
                  <span style={{ fontSize: "1.4rem", fontWeight: "700" }}>
                    Total
                  </span>
                  <p style={{ fontSize: "1.4rem", fontWeight: "700" }}>
                    $
                    {Math.floor(totalPrice * 0.08) +
                      Math.floor(totalPrice * 0.03) +
                      totalPrice}
                  </p>
                </div>
                <br />
                <hr />
                <br />

                <button className="checkout-button">Checkout</button>
              </div>
            </div>
          </div>
        </>
      )}

      {showNotification && (
        <Notification
          message="Item removed from the cart!"
          onClose={closeNotification}
        />
      )}
    </div>
  );
};

export default Cart;
