import React from "react";
import { useParams } from "react-router-dom";
import Laptops from "../../laptops.json";
import "../../App.css";
import { Link } from "react-router-dom";
import BackImage from "../../images/back.svg";

function ProductItems() {
  const { id } = useParams();
  const lap = Laptops[id];

  // If not found
  if (!lap) {
    return <h2>Product Not Found!</h2>;
  }

  return (
    <div>
      <Link className="back-btn" to="/product">
        <img src={BackImage} alt="Go Back" height={30} title="back" />
      </Link>
      <div className="product-items">
        <h3 className="lap-name">{lap.name}</h3>
        <h2 className="lap-price"> Price = {lap.price} </h2>
        <img
          className="lap-image"
          alt="Laptop"
          title={lap.name}
          src={lap.img2}
        />{" "}
      </div>
    </div>
  );
}

export default ProductItems;
