import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cartImage from "../images/cart1.svg";
import { CartContext } from "../../CartContext";
import Tooltip from "@material-ui/core/Tooltip";

function Lap({ lap, keyName }) {
  // Use Context
  const [cart, setCart] = useContext(CartContext);

  // Add to cart
  const addToCart = (lapProduct) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((item) => lapProduct.name === item.name);
    // Condition
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...lapProduct,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    // ...

    setCart(newCart);
  };

  return (
    <div className="hvr-grow products">
      <h3 className="lap-name">{lap.name} </h3>
      <h2 className="lap-price"> ${lap.price} </h2>
      <Link key={keyName} to={`/product/${keyName}`}>
        <img
          className="products-lap-image"
          title={lap.name}
          alt={lap.name}
          src={lap.img}
        />
      </Link>
      <br />
      <Tooltip title="Add to cart" aria-label="add to cart">
        <button onClick={() => addToCart(lap)} className="cart-button">
          <img className="cart-image" src={cartImage} alt="add to cart" />
        </button>
      </Tooltip>
    </div>
  );
}

export default Lap;
