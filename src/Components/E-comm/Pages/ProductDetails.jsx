import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../Store/cartSlice";
import StarRating from "../Components/StarRating";
import { FaCheckCircle } from "react-icons/fa";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import Notification from "../Components/Notification";
import "../Pages/ProductDetails.css";
import Testimg from "../Assets/Test-img.png";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [count, setCount] = useState(1);
  const [showNotification, setShowNotification] = useState(false);

  function IncCounter() {
    setCount(count + 1);
  }

  function DecCounter() {
    if (count <= 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  }

  const handleAdd = (product) => {
    // dispatch(add(product));
    dispatch(add({ ...product, quantity: count }));
    setShowNotification(true);
  };

  const closeNotification = () => {
    setShowNotification(false);
  };

  let countData = 1;
  let rateData = 1;

  // const data = {
  //   category: "jewelery",
  //   description:
  //     "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
  //   id: 5,
  //   image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  //   price: 695,
  //   rating: { rate: 4.6, count: 400 },
  //   title:
  //     "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
  // };

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      //   const res = await fetch(`https://api.github.com/users`);
      const productData = await res.json();
      console.log(productData);
      setData(productData);
    };
    fetchProduct();
  }, [id]);

  return (
    <div className="flexColCenter Product-Details">
      <div className="P-details-L ">
        <h2>{data.title}</h2>

        <span className="detials-category cond-title">
          Category : <span style={{ fontSize: "17px" }}>{data.category}</span>
        </span>

        <div className="flexColStart p-details-main">
          <div className="p-details-image">
            <img src={data.image} alt="" />
            {/* <img src={Testimg} alt="" /> */}
          </div>

          <div className="p-details-info">
            <div className="p-desc-p">
              <span className="details-desc">Product description: </span>

              <p className="details-desc-p">{data.description}</p>
            </div>
            <br />
            <hr />
            <br />

            {data.rating === undefined ? (
              <>Rating Loading</>
            ) : (
              <div className="rating-section">
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      fontSize: "1.5rem",
                      fontWeight: "500",
                    }}
                  >
                    <StarRating rating={data.rating.rate} count="5" />
                    <span>{data.rating.rate}</span>
                  </div>
                  <span>{data.rating.count} reviews</span>
                </div>
                <div
                  className="divWithBorder"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <span
                    style={{
                      color: "orange",
                      fontSize: "1.7rem",
                      fontWeight: "600",
                      paddingLeft: "2rem",
                    }}
                  >
                    {Math.floor((data.rating.rate / 5) * 100)}%
                  </span>
                  <span>
                    of the respondents would recommend this to a friend
                  </span>
                </div>
              </div>
            )}

            <br />
            <hr />
            <br />
            <div style={{ display: "none" }}>
              {(data.category === "men's clothing" ||
                data.category === "women's clothing") && (
                <>
                  <div>
                    <span className="cond-title">Sizes:</span>
                    <span className="cond-val"> Required</span>
                  </div>
                  <div>
                    <select name="" id="">
                      <option value="XS">XS</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                    </select>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <aside className="P-details-R">
        <div>
          <span className="price">${data.price}</span>
        </div>
        <br />
        <hr />
        <br />
        <div>
          <span className="cond-title">Condition:</span>
          <span className="cond-val"> New</span>
          <br />
          <span className="cond-title">Availability:</span>
          <span className="cond-val"> Ships from warehouse</span>
        </div>
        <br />
        <hr />
        <br />
        <div>
          <span
            className="available"
            style={{
              color: "rgb(0, 232, 0)",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <FaCheckCircle /> Available Online
          </span>
        </div>
        <br />
        <hr />
        <br />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontWeight: "500" }}>PRICE: </span>{" "}
          <span className="price price2">${data.price * count}</span>
        </div>
        <br />
        <hr />
        <br />
        <div className="quanitity-counter">
          <span style={{ fontWeight: "500" }}>Quantity</span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1.2rem",
            }}
          >
            <button className="counter-button" onClick={DecCounter}>
              <TiArrowSortedDown />
            </button>
            <span>{count}</span>
            <button className="counter-button" onClick={IncCounter}>
              <TiArrowSortedUp />
            </button>
          </div>
        </div>
        <br />
        <hr />
        <br />

        <button className="button" onClick={() => handleAdd(data)}>
          Add to Cart
        </button>
      </aside>

      {showNotification && (
        <Notification
          message="Item added to the cart!"
          onClose={closeNotification}
        />
      )}
    </div>
  );
};

export default ProductDetails;

// useEffect(()=>{
// 	fetch('https://fakestoreapi.com/products/1')
//             .then(res=>res.json())
//             .then(json=>console.log(json))
// },[])
