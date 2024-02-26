import React from "react";
import Products from "../Components/Products";
import "../Pages/Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  return (
    <div>
      <h2 className="primaryText">Welcome to the Redux Store</h2>
      <section>
        <h3 className="orangeText mt-2rem">Products</h3>
        <br />
        {/* <Carousel>
          <div>
            <img
              src="https://png.pngtree.com/thumb_back/fh260/back_our/20190628/ourmid/pngtree-taobao-e-commerce-advertisement-carousel-banner-background-purple-blue-image_264734.jpg"
              className="Carousel-image"
            />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img
              src="https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-fashion-sports-simple-full-screen-carousel-poster-psd-template-image_179160.jpg"
              className="Carousel-image"
            />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img
              src="https://img.lovepik.com/background/20211021/large/lovepik-blue-e-commerce-background-image_401460895.jpg"
              className="Carousel-image"
            />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel> */}
        <Products />
      </section>
    </div>
  );
};

export default Home;
