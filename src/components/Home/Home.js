import React from "react";
import Laps from "../../latestLaptops.json";

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
        <div className="latest-container">
          <hr className="line" /> &nbsp; &nbsp;
          <span className="latest-laptops">Latest Laptops</span>&nbsp;&nbsp;
          <hr className="line" />
          <br />
          <br />
          <div className="product-container image-gallery">
            {Object.keys(Laps).map((keyName) => {
              const lap = Laps[keyName];
              return (
                <div className="home-products" key={keyName}>
                  <img
                    className="products-lap-image"
                    alt={lap.name}
                    src={lap.img}
                  />
                  <h3 className="lap-name">{lap.name}</h3>
                  <h3 className="lap-price">${lap.price}</h3>
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
