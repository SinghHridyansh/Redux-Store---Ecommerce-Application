import React from "react";
import "../Pages/Cart.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../Store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  const products = useSelector((state) => state.cart);

  // Group products by id
  const groupedProducts = Object.values(
    products.reduce((acc, product) => {
      const { id, title, price, image } = product;

      if (!acc[id]) {
        acc[id] = {
          id,
          title,
          price,
          image,
          quantity: 1,
        };
      } else {
        acc[id].quantity += 1;
      }

      return acc;
    }, {})
  );

  const totalPrice = groupedProducts.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <div>
      <h3 className="orangeText ">Cart</h3>

      {groupedProducts == 0 ? (
        <p>Cart is Empty</p>
      ) : (
        <>
          <div className="cartPage">
            <div className="cartWrapper paddings">
              {groupedProducts.map((product) => (
                <div className="flexColCenter cartCard" key={product.id}>
                  <div className="cartcard-item">
                    <img src={product.image} alt="" />
                  </div>

                  <div className="cartcard-item">
                    <h5>{product.title}</h5>
                  </div>
                  <div className="cartcard-item">
                    <h5>
                      $ {product.price} x {product.quantity}
                    </h5>
                  </div>
                  <div className="cartcard-item">
                    <button
                      className="button cart-inside"
                      onClick={() => {
                        handleRemove(product.id);
                      }}
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

          <h5>The Grand Total is: ${totalPrice}</h5>
        </>
      )}
    </div>
  );
};

// const Cart = () => {
//   const dispatch = useDispatch();

//   const handleRemove = (productId) => {
//     dispatch(remove(productId));
//   };

//   const products = useSelector((state) => state.cart);

//   const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
//   return (
//     <div>
//       <h3 className="orangeText ">Cart</h3>
//       <div className="cartWrapper paddings">
//         {products.map((product) => (
//           <div className="flexColCenter cartCard" key={product.id}>
//             {/* <span>{product.id}</span> */}
//             <div className="cartcard-item">
//               <img src={product.image} alt="" />
//             </div>

//             <div className="cartcard-item">
//               <h5>{product.title}</h5>
//             </div>
//             <div className="cartcard-item">
//               <h5>$ {product.price}</h5>
//             </div>
//             <div className="cartcard-item">
//               <button
//                 className="button"
//                 onClick={() => {
//                   handleRemove(product.id);
//                 }}
//               >
//                 Remove from Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <h5>The Grand Total is : ${totalPrice}</h5>
//     </div>
//   );
// };

export default Cart;
