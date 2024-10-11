import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function FitnessEquipment() {
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Bench Press",
      description: "A great tool for building upper body strength.",
      image: "https://i.imgur.com/YOUR_IMAGE_1.jpg",
      details: {
        images: [
          "https://i.imgur.com/YOUR_IMAGE_1_1.jpg",
          "https://i.imgur.com/YOUR_IMAGE_1_2.jpg",
        ],
        fullDescription: "This bench press is designed for heavy lifting...",
      },
    },
    {
      id: 2,
      name: "Squat Rack",
      description: "Essential for leg workouts and strength training.",
      image: "https://i.imgur.com/YOUR_IMAGE_2.jpg",
      details: {
        images: [
          "https://i.imgur.com/YOUR_IMAGE_2_1.jpg",
          "https://i.imgur.com/YOUR_IMAGE_2_2.jpg",
        ],
        fullDescription: "This squat rack offers stability and safety...",
      },
    },
    // Добави още продукти тук
  ];

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
      <h1 className="text-center mb-4">Fitness Equipment</h1>
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
                <Button variant="primary" onClick={() => handleShow(product)}>
                  View Details
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
