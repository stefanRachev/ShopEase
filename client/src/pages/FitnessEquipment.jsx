import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useLanguage } from "../context/useLanguage";
import { useCart } from "../context/useCart";
import { useUser } from "../context/useUser";
import { useNavigate } from "react-router-dom";

function FitnessEquipment() {
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { language, translations } = useLanguage();
  const { user } = useUser();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const products = [
    {
      id: "bench-1",
      name: translations[language].benchPress,
      description: translations[language].descriptionBenches,
      price: 25,
      quantity: 1,
      image: "https://i.imgur.com/t8CKyQn.jpg",
      details: {
        images: [
          "https://i.imgur.com/zfo5cx2.jpg",
          "https://i.imgur.com/7xAdpGD.jpg",
        ],
        fullDescription: translations[language].fullDescriptionBench,
      },
    },
    {
      id: "rack-1",
      name: translations[language].squatRack,
      price: 25,
      quantity: 1,
      description: translations[language].descriptionSquatRack,
      image: "https://i.imgur.com/ekW3zC1.jpg",
      details: {
        images: [
          "https://i.imgur.com/WbzX0oy.jpg",
          "https://i.imgur.com/QXtBEIG.jpg",
        ],
        fullDescription: translations[language].fullDescriptionSquatRack,
      },
    },
    {
      id: "rower-1",
      name: translations[language].rowingMachine,
      description: translations[language].descriptionRowingMachine,
      price: 25,
      quantity: 1,
      image: "https://i.imgur.com/bEkLu0T.jpg",
      details: {
        images: [
          "https://i.imgur.com/GUTdB3a.jpg",
          "https://i.imgur.com/qRUB7Kh.jpg",
        ],
        fullDescription: translations[language].fullDescriptionRowingMachine,
      },
    },
    {
      id: "treadmill-1",
      name: translations[language].treadmill,
      description: translations[language].descriptionTreadmill,
      price: 25,
      quantity: 1,
      image: "https://i.imgur.com/a0rcIWw.jpg",
      details: {
        images: [
          "https://i.imgur.com/jxxYBjZ.jpg",
          "https://i.imgur.com/HPIVecl.jpg",
        ],
        fullDescription: translations[language].fullDescriptionTreadmill,
      },
    },
  ];

  const handleAddToCart = (plates) => {
    if (!user) {
      navigate("/login");
    } else {
      addToCart(plates);
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
      <h1 className="text-center mb-4">{translations[language].fitnessEquipment}</h1>
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
            <div className="row">
              {selectedProduct.details.images.map((img, index) => (
                <div key={index} className="col-6 mb-2">
                  <img src={img} className="img-fluid" alt="" />
                </div>
              ))}
            </div>
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

export default FitnessEquipment;
