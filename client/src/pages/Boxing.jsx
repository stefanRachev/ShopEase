import { Card, Row, Col, Button, Container } from "react-bootstrap";
//import styles from "./Boxing.module.css";

function Boxing() {
  const products = [
    {
      id: "boxing-1",
      name: "Боксови Ръкавици",
      image: "https://i.imgur.com/5npwqHh.jpg",
      price: "45 лв.",
      description: "Комфортни и здрави боксови ръкавици за тренировки.",
    },
    {
      id: "boxing-2",
      name: "Боксов Чувал",
      image: "https://i.imgur.com/KU1nhkR.jpg",
      price: "120 лв.",
      description: "Тежък чувал за професионални тренировки.",
    },
    {
      id: "boxing-3",
      name: "Боксов Каска",
      image: "https://i.imgur.com/o8K4kBD.jpg",
      price: "75 лв.",
      description: "Лека каска за безопасност при спаринг.",
    },
  ];

  return (
    <Container className="mt-5">
      <Col xs={12}>
        <h1 className="text-center text-primary mb-4">Продукти за Бокс</h1>
        <p className="text-center mb-5">
          Разгледайте нашите висококачествени продукти за бокс. Подходящи както
          за начинаещи, така и за професионалисти.
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
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <span className="text-success fw-bold">{product.price}</span>
                  <Button variant="primary">Купи</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Boxing;
