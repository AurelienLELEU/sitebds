import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./App.css";

const ProductImage = ({ productRef, isMobile }) => {
  const [imageExists, setImageExists] = useState(false);

  useEffect(() => {
    if (!isMobile) {
      const img = new Image();
      img.src = `${process.env.PUBLIC_URL}/pict/${productRef}-3.png`;
      img.onload = () => setImageExists(true);
      img.onerror = () => setImageExists(false);
    }
  }, [productRef, isMobile]);

  return (
    <>
      <img
        src={`${process.env.PUBLIC_URL}/pict/${productRef}-1.png`}
        alt={`Product ${productRef}`}
        className="imgcarousel"
      />
      {!isMobile && imageExists && (
        <img
          src={`${process.env.PUBLIC_URL}/pict/${productRef}-3.png`}
          alt={`Product ${productRef}`}
          className="imgcarousel"
        />
      )}
      <img
        src={`${process.env.PUBLIC_URL}/pict/${productRef}-2.png`}
        alt={`Product ${productRef}`}
        className="imgcarousel"
      />
    </>
  );
};

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1100);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const products = [
    { productRef: "HEX-01", price: 40 },
    { productRef: "HEX-03", price: 45 },
    { productRef: "HEX-04", price: 40 },
    { productRef: "HEX-05", price: 40 },
    { productRef: "HEX-06", price: 25 },
  ];

  return (
    <div className="App">
      <nav className="navbar">
        <img
          src={`${process.env.PUBLIC_URL}/pict/00016-2796579985-Photoroom.png`}
          alt="Logo"
          className="logo"
        />
        <h1>BDS Hexagone</h1>
      </nav>

      {isMobile ? (
        <div className="mobile-view">
          {products.map((product, index) => (
            <div key={index} className="product-item">
              <div className="couplePhoto">
                <ProductImage
                  productRef={product.productRef}
                  isMobile={isMobile}
                />
              </div>
              <div className="product-info" style={{ textAlign: "center" }}>
                <p>Réf: {product.productRef}</p>
                <p>Prix: {product.price}€</p>
              </div>
            </div>
          ))}
          <div className="spacer"></div>
        </div>
      ) : (
        <div className="content">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={3000}
            swipeable
            emulateTouch
          >
            {products.map((product, index) => (
              <div key={index} className="divcarousel">
                <div className="couplePhoto">
                  <ProductImage
                    productRef={product.productRef}
                    isMobile={isMobile}
                  />
                </div>
                <div className="product-info">
                  <p>Réf: {product.productRef}</p>
                  <p>Prix: {product.price}€</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      )}
      {/* </div> */}

      <footer className="footer">
        {isMobile ? (
          <div>
            <p>
              Pour précommander :{" "}
              <a href="mailto:bds-versailles@ecole-hexagone.com">
                bds-versailles@ecole-hexagone.com
              </a>
              {" / "}
              <a
                target="_blank"
                href="https://www.instagram.com/hexagonebds/"
                rel="noopener noreferrer"
              >
                @hexagonebds
              </a>
            </p>
            <p>&copy; 2025 BDS Hexagone</p>
          </div>
        ) : (
          <div>
            <p>
              Pour précommander, ou tout autre question, adressez-vous à :{" "}
              <a href="mailto:bds-versailles@ecole-hexagone.com">
                bds-versailles@ecole-hexagone.com
              </a>
              {" ou "}
              <a
                target="_blank"
                href="https://www.instagram.com/hexagonebds/"
                rel="noopener noreferrer"
              >
                @hexagonebds
              </a>{" "}
              {" sur Instagram"}
            </p>
            <p>&copy; 2025 BDS Hexagone</p>
          </div>
        )}
      </footer>
    </div>
  );
}

export default App;
