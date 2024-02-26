import React, { useState, useEffect } from "react";
import "../Components/Product.css";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="flexCenter products-container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          productId={product.id}
          wholeProduct={product}
          image={product.image}
          Title={product.title}
          Price={product.price}
          desc={product.description}
          Rcount={product.rating.count}
          Rrate={product.rating.rate}
        />
      ))}
    </div>
  );
};

export default Products;

// {products.map((product) => (
// 	<div key={product.id}>
// 	  <img src={product.image} alt="" className="product-image" />
// 	  <h4>{product.title}</h4>
// 	  <h5>$ {product.price}</h5>
// 	  <button className="button">Add to Cart</button>
// 	</div>
//   ))}
