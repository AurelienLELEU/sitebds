import { useState, useEffect, React } from "react";
import "./App.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const ProductImage = ({ ref }) => {
  const [imageExists, setImageExists] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = `${process.env.PUBLIC_URL}/pict/${ref}-3.png`;
    img.onload = () => setImageExists(true);
    img.onerror = () => setImageExists(false);
  }, [ref]);

  return (
    <>
      <img
        src={`${process.env.PUBLIC_URL}/pict/${ref}-1.png`}
        alt={`Product ${ref}`}
        className="imgcarousel"
      />
      {imageExists && (
        <img
          src={`${process.env.PUBLIC_URL}/pict/${ref}-3.png`}
          alt={`Product ${ref}`}
          className="imgcarousel"
        />
      )}
      <img
        src={`${process.env.PUBLIC_URL}/pict/${ref}-2.png`}
        alt={`Product ${ref}`}
        className="imgcarousel"
      />
    </>
  );
};

function App() {
  const products = [
    { ref: "HEX-01", price: 40 },
    { ref: "HEX-03", price: 45 },
    { ref: "HEX-04", price: 35 },
    { ref: "HEX-05", price: 35 },
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
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          swipeable
          emulateTouch
        >
          {products.map((product, index) => (
            <div key={index} className="divcarousel">
              <div className="couplePhoto">
                <ProductImage ref={product.ref} />
              </div>
              <div className="product-info">
                <p>Réf: {product.ref}</p>
                <p>Prix: {product.price}€</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <footer className="footer">
        <p>
          Pour précommander, ou si vous avez des questions, adressez-vous à :{" "}
          <a href="mailto:bds-versailles@ecole-hexagone.com">bds-versailles@ecole-hexagone.com</a> ou
          à notre compte Instagram{" "}
          <a target="_blank" href="https://www.instagram.com/hexagonebds/" rel="noopener noreferrer">
            @hexagonebds
          </a>
        </p>
        <p>&copy; 2025 BDS Hexagone. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;
