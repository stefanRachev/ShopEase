import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useLanguage } from "../context/useLanguage";
import { useCart } from "../context/useCart";
import { useUser } from "../context/useUser";
import { useNavigate } from "react-router-dom";

function AminoAcids() {
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { language, translations } = useLanguage();
  const { user } = useUser();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const products = [
    {
      id: "amino-1",
      name: translations[language].aminoAcids,
      description: translations[language].proteinBrand,
      price: 25,
      quantity: 1,
      image: "https://i.imgur.com/begJJvo.jpg",
      details: {
        fullDescription: translations[language].fullDescriptionProteinPowder,
        additionalInfo: [
          "Contains 20g of protein per serving.",
          "Rich in amino acids for muscle recovery.",
          "Available in various flavors: chocolate, vanilla, and strawberry.",
        ],
      },
    },
    {
      id: "amino-2",
      name: translations[language].aminoAcids,
      description: translations[language].proteinBrand,
      price: 30,
      quantity: 1,
      image: "https://i.imgur.com/begJJvo.jpg",
      details: {
        fullDescription: translations[language].fullDescriptionWheyProtein,
        additionalInfo: [
          "High-quality whey protein isolate.",
          "Low sugar and low fat.",
          "Ideal for post-workout recovery.",
        ],
      },
    },
    {
      id: "amino-3",
      name: translations[language].aminoAcids,
      description: translations[language].proteinBrand,
      price: 30,
      quantity: 1,
      image: "https://i.imgur.com/begJJvo.jpg",
      details: {
        fullDescription: translations[language].fullDescriptionWheyProtein,
        additionalInfo: [
          "High-quality whey protein isolate.",
          "Low sugar and low fat.",
          "Ideal for post-workout recovery.",
        ],
      },
    },
    {
      id: "amino-4",
      name: translations[language].aminoAcids,
      description: translations[language].proteinBrand,
      price: 30,
      quantity: 1,
      image: "https://i.imgur.com/begJJvo.jpg",
      details: {
        fullDescription: translations[language].fullDescriptionWheyProtein,
        additionalInfo: [
          "High-quality whey protein isolate.",
          "Low sugar and low fat.",
          "Ideal for post-workout recovery.",
        ],
      },
    },
    {
      id: "amino-5",
      name: translations[language].aminoAcids,
      description: translations[language].proteinBrand,
      price: 30,
      quantity: 1,
      image: "https://i.imgur.com/begJJvo.jpg",
      details: {
        fullDescription: translations[language].fullDescriptionWheyProtein,
        additionalInfo: [
          "High-quality whey protein isolate.",
          "Low sugar and low fat.",
          "Ideal for post-workout recovery.",
        ],
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

export default AminoAcids;
