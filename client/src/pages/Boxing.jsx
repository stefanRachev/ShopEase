import { useState } from "react";
import { Card, Row, Col, Button, Container } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useLanguage } from "../context/useLanguage";
import { useCart } from "../context/useCart";
import { useUser } from "../context/useUser";
import { useNavigate } from "react-router-dom";


function Boxing() {

  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { language, translations } = useLanguage();
  const { user } = useUser();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  
  const products = [
    {
      id: "boxing-1",
      name: translations[language].boxingGloves,
      image: "https://i.imgur.com/5npwqHh.jpg",
      price: 45,
      quantity: 1,
      description: translations[language].boxingGlovesDescription,
      details: {
        image: "https://i.imgur.com/rilb15l.jpg",
        additionalInfo: translations[language].exampleProductInfo,
      },
    },
    {
      id: "boxing-2",
      name: translations[language].boxingGloves,
      image: "https://i.imgur.com/KU1nhkR.jpg",
      price: 45,
      quantity: 1,
      description: translations[language].boxingGlovesDescription,
      details: {
        image: "https://i.imgur.com/rilb15l.jpg",
        additionalInfo: translations[language].exampleProductInfo,
      },
    },
    {
      id: "boxing-3",
      name: translations[language].boxingGloves,
      image: "https://i.imgur.com/o8K4kBD.jpg",
      price: 75,
      quantity: 1,
      description: translations[language].boxingGlovesDescription,
      details: {
        image: "https://i.imgur.com/rilb15l.jpg",
        additionalInfo: translations[language].exampleProductInfo,
      },
    },
    {
      id: "boxing-4",
      name: translations[language].punchingBag,
      image: "https://i.imgur.com/vbPKOdC.jpg",
      price: 120,
      quantity: 1,
      description: translations[language].punchingBagDescription,
      details: {
        image: "https://i.imgur.com/isJ6DuY.jpg",
        additionalInfo: translations[language].exampleProductInfo,
      },
    },
    {
      id: "boxing-5",
      name: translations[language].punchingBag,
      image: "https://i.imgur.com/vbPKOdC.jpg",
      price: 120,
      quantity: 1,
      description: translations[language].punchingBagDescription,
      details: {
        image: "https://i.imgur.com/isJ6DuY.jpg",
        additionalInfo: translations[language].exampleProductInfo,
      },
    },
    {
      id: "boxing-6",
      name: translations[language].punchingBag,
      image: "https://i.imgur.com/vbPKOdC.jpg",
      price: 120,
      quantity: 1,
      description: translations[language].punchingBagDescription,
      details: {
        image: "https://i.imgur.com/isJ6DuY.jpg",
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
    <Container className="mt-5">
      <Col xs={12}>
        <h1 className="text-center text-primary mb-4">
          {translations[language].titleBoxing}
        </h1>
        <p className="text-center mb-5">
          {translations[language].boxingGlovesDescription2}
        </p>
      </Col>

      <Row className="g-4">
        {products.map((product) => (
          <Col key={product.id} md={4} sm={6} xs={12}>
            <Card className="h-100 d-flex flex-column">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                className="img-fluid"
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                </div>
                <hr />
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <span className="text-success fw-bold">
                    {translations[language].price}
                    {product.price} {translations[language].lv}
                  </span>
                  <Button variant="primary" onClick={() => handleShow(product)}>
                    {translations[language].takeALook}
                  </Button>
                  <Button
                    variant="success"
                    onClick={() => handleAddToCart(product)}
                    className="ms-2"
                  >
                    {translations[language].buyNow}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {selectedProduct && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedProduct.details.image}
              className="img-fluid"
              alt={selectedProduct.name}
            />
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
    </Container>
  );
}

export default Boxing;
