import React from "react";
import { useState } from "react";
import "../Components/ProductCard.css";
import { useDispatch, useSelector } from "react-redux";
import { add, increment } from "../Store/cartSlice";
import { Link } from "react-router-dom";
import Notification from "./Notification";
import StarRating from "./StarRating";

const ProductCard = (props) => {
  const [showNotification, setShowNotification] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const existingCartItem = cartItems.find(
    (item) => item.id === props.productId
  );

  function truncate(str, no_words) {
    return str.split(" ").splice(0, no_words).join(" ");
  }

  let name = truncate(props.Title, 8);
  let details = truncate(props.desc, 13);

  const handleAdd = (product) => {
    if (existingCartItem) {
      dispatch(increment(existingCartItem.id));
    } else {
      dispatch(add(product));
    }
    setShowNotification(true);
  };

  const closeNotification = () => {
    setShowNotification(false);
  };
  return (
    <>
      <div className="flexStart card">
        <Link
          to={`/productDetails/${props.productId}`}
          className="flexStart"
          style={{ flexDirection: "column", gap: "1.5rem" }}
        >
          <div className="card-img-div">
            <img src={props.image} alt="" className="product-image" />
          </div>
          <div className="product-info">
            <h4 className="Text-black">{name}</h4>
            <p className="text-sec">{details} ...</p>
          </div>
        </Link>
        <div className="flexCenter but-and-price">
          {/* <button
            className="button"
            onClick={() => handleAdd(props.wholeProduct)}
          >
            Add to Cart
          </button> */}
          <StarRating rating={props.Rrate} count="5" />
          <h5>
            $ <span className="product-price">{props.Price}</span>
          </h5>
        </div>
      </div>
      {showNotification && (
        <Notification
          message="Item added to the cart!"
          onClose={closeNotification}
        />
      )}
    </>
  );
};

export default ProductCard;
