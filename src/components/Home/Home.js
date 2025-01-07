import React from "react";
import Shoes from "../../latestLaptops.json";

function Home() {
  return (
    <div>
      <div className="banner-image"></div>
      <div>
        <span className="tagline">SHOP WITH EASE!</span>
        <div className="tagline-para">
        Discover a world where technology meets excellence. we specialize in providing high-quality computers, genuine spare parts,
        and best accessories to elevate your tech experience.
        </div>

        <br />
        <br />
        <br />
        <div className="latest-container">
          <hr className="line" /> &nbsp; &nbsp;
          <span className="latest-laptops">Latest Laptops</span>&nbsp;&nbsp;
          <hr className="line" />
          <br />
          <br />
          <div className="product-container image-gallery">
            {Object.keys(Shoes).map((keyName) => {
              const shoe = Shoes[keyName];
              return (
                <div className="home-products" key={keyName}>
                  <img
                    className="products-shoe-image"
                    alt={shoe.name}
                    src={shoe.img}
                  />
                  <h3 className="shoe-name">{shoe.name}</h3>
                  <h3 className="shoe-price">${shoe.price}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
