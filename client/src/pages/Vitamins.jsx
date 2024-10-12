import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useLanguage } from "../context/useLanguage";
import { useCart } from "../context/useCart";
import { useUser } from "../context/useUser";
import { useNavigate } from "react-router-dom";

function Vitamins() {
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { language, translations } = useLanguage();
  const { user } = useUser();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const products = [
    {
      id: "vitamin-1",
      name: translations[language].vitamins,
      description: translations[language].proteinBrand,
      price: 25,
      quantity: 1,
      image: "https://i.imgur.com/br8boYC.jpg",
      details: {
        fullDescription: translations[language].fullDescriptionVitamins,
        additionalInfo: translations[language].exampleProductInfo,
      },
    },
    {
      id: "vitamin-2",
      name: translations[language].vitamins,
      description: translations[language].proteinBrand,
      price: 30,
      quantity: 1,
      image: "https://i.imgur.com/br8boYC.jpg",
      details: {
        fullDescription: translations[language].fullDescriptionVitamins,
        additionalInfo: translations[language].exampleProductInfo,
      },
    },
    {
      id: "vitamin-3",
      name: translations[language].vitamins,
      description: translations[language].proteinBrand,
      price: 30,
      quantity: 1,
      image: "https://i.imgur.com/br8boYC.jpg",
      details: {
        fullDescription: translations[language].fullDescriptionVitamins,
        additionalInfo: translations[language].exampleProductInfo,
      },
    },
    {
      id: "vitamin-4",
      name: translations[language].vitamins,
      description: translations[language].proteinBrand,
      price: 30,
      quantity: 1,
      image: "https://i.imgur.com/br8boYC.jpg",
      details: {
        fullDescription: translations[language].fullDescriptionVitamins,
        additionalInfo: translations[language].exampleProductInfo,
      },
    },
    {
      id: "vitamin-5",
      name: translations[language].vitamins,
      description: translations[language].proteinBrand,
      price: 30,
      quantity: 1,
      image: "https://i.imgur.com/br8boYC.jpg",
      details: {
        fullDescription: translations[language].fullDescriptionVitamins,
        additionalInfo: translations[language].exampleProductInfo,
      },
    },
  ];

  const handleAddToCart = (product) => {
    if (!user) {
      navigate("/login");
    } else {
      addToCart(product);
    }
  };

  const handleShow = (product) => {
    setSelectedProduct(product);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedProduct(null);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">{translations[language].proteins}</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">
                  {translations[language].price}
                  {product.price} {translations[language].lv}
                </p>
                <Button variant="primary" onClick={() => handleShow(product)}>
                  {translations[language].takeALook}
                </Button>{" "}
                <Button
                  variant="success"
                  onClick={() => handleAddToCart(product)}
                >
                  {translations[language].buyNow}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{selectedProduct.details.fullDescription}</p>
            <ul>
              {selectedProduct.details.additionalInfo.map((info, index) => (
                <li key={index}>{info}</li>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default Vitamins;