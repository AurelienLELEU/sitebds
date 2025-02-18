import React from "react";
import "./App.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  const products = [
    { ref: "HEX-01", price: 45 },
    { ref: "HEX-02", price: 45 },
    { ref: "HEX-03", price: 40 },
    { ref: "HEX-04", price: 35 },
    { ref: "HEX-05", price: 35 },
    { ref: "HEX-06", price: 35 },
  ];

  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo-container">
          <img
            src={`${process.env.PUBLIC_URL}/pict/00016-2796579985-Photoroom.png`}
            alt="Logo"
            className="logo"
          />
          <h1>BDS Hexagone</h1>
        </div>
      </nav>

      <div className="content">
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          {[
            [
              `${process.env.PUBLIC_URL}/pict/BDSPULLLFACE-removebg-preview.png`,
              `${process.env.PUBLIC_URL}/pict/BDSPULL-removebg-preview.png`,
            ],
            [
              `${process.env.PUBLIC_URL}/pict/vesteFace1-removebg-preview.png`,
              `${process.env.PUBLIC_URL}/pict/veste1-removebg-preview.png`,
            ],
            [
              `${process.env.PUBLIC_URL}/pict/BDSPULLLFACE-removebg-preview.png`,
              `${process.env.PUBLIC_URL}/pict/simpl.png`,
            ],
            [
              `${process.env.PUBLIC_URL}/pict/teesh1.png`,
              `${process.env.PUBLIC_URL}/pict/teesh2.png`,
            ],
            [
              `${process.env.PUBLIC_URL}/pict/deb1.png`,
              `${process.env.PUBLIC_URL}/pict/deb2.png`,
            ],
            [
              `${process.env.PUBLIC_URL}/pict/deb4.png`,
              `${process.env.PUBLIC_URL}/pict/deb3.png`,
            ],
          ].map((images, index) => (
            <div key={index} className="divcarousel">
              <div className="couplePhoto">
                {images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="imgcarousel"
                  />
                ))}
              </div>
              <div className="product-info">
                <p>Réf: {products[index].ref}</p>
                <p>Prix: {products[index].price}€</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>
          Pour précommander, ou si vous avez des questions, adressez-vous à :{" "}
          <a href="mailto:bds@ecole-hexagone.com">bds@ecole-hexagone.com</a> ou
          a notre compte Instagram{" "}
          <a target="_blank" href="https://www.instagram.com/hexagonebds/">
            @hexagonebds
          </a>
        </p>
        <p>&copy; 2025 BDS Hexagone. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;

{
  /* 
  Credits : @thomasClerc et un peut @aurelienLeleu
  */
}
