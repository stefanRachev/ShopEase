import { useCart } from "../context/useCart";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useLanguage } from "../context/useLanguage";
import { useState } from "react";

function Checkout() {
  const { cartItems, totalAmount } = useCart();
  const { language, translations } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    paymentMethod: "creditCard",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Тук можеш да добавиш логика за обработка на плащането
    console.log("Submitting payment:", formData);
  };

  return (
    <Container className="checkout-container mt-5">
      <h2 className="text-center mb-4">
        {translations[language].checkoutTitle}
      </h2>
      {cartItems.length === 0 ? (
        <p>{translations[language].cartStatus}</p>
      ) : (
        <>
          <h4>{translations[language].orderSummary}</h4>
          <Row>
            {cartItems.map((item, index) => (
              <Col xs={12} key={`${item.id}-${index}`} className="mb-4">
                <hr />
                <p className="text-danger">
                  {item.name} - {item.price} {translations[language].lv} /{" "}
                  {translations[language].quantity} {item.quantity}
                </p>
              </Col>
            ))}
          </Row>
          <h5>
            {translations[language].total} {totalAmount}{" "}
            {translations[language].lv}
          </h5>

          <Form onSubmit={handleSubmit} className="mt-4">
            <Form.Group controlId="formName">
              <Form.Label>{translations[language].name}</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formAddress">
              <Form.Label>{translations[language].address}</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPaymentMethod">
              <Form.Label>{translations[language].paymentMethod}</Form.Label>
              <Form.Control
                as="select"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
              >
                <option value="creditCard">
                  {translations[language].creditCard}
                </option>
                <option value="paypal">{translations[language].paypal}</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formCardNumber">
              <Form.Label>{translations[language].cardNumber}</Form.Label>
              <Form.Control
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formExpirationDate">
              <Form.Label>{translations[language].expirationDate}</Form.Label>
              <Form.Control
                type="text"
                name="expirationDate"
                value={formData.expirationDate}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formCVV">
              <Form.Label>{translations[language].cvv}</Form.Label>
              <Form.Control
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Button variant="success" type="submit">
              {translations[language].confirmOrder}
            </Button>
          </Form>
        </>
      )}
    </Container>
  );
}

export default Checkout;
