import React from "react";
import "../Components/ProductCard.css";
import { useDispatch } from "react-redux";
import { add } from "../Store/cartSlice";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const dispatch = useDispatch();

  function truncate(str, no_words) {
    return str.split(" ").splice(0, no_words).join(" ");
  }

  let name = truncate(props.Title, 8);
  let details = truncate(props.desc, 13);

  const handleAdd = (product) => {
    dispatch(add(product));
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
          <button
            className="button"
            onClick={() => handleAdd(props.wholeProduct)}
          >
            Add to Cart
          </button>
          <h5>
            $ <span className="product-price">{props.Price}</span>
          </h5>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
