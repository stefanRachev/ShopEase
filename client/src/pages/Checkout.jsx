import { validateForm, createOrderData, submitOrder } from "../utils/payment";
import { useCart } from "../context/useCart";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useLanguage } from "../context/useLanguage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {

  const navigate = useNavigate();
  
  const { cartItems, totalAmount, setCartItems } = useCart();
  const { language, translations } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    paymentMethod: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validation = validateForm(formData);
    if (!validation.valid) {
      setError(validation.message);
      return;
    }

    const orderData = createOrderData(formData, cartItems, totalAmount);
   

    try {
      const paymentResult = await submitOrder(orderData);
      alert(translations[language].checkOrder);

      navigate(`/order-summary/${paymentResult.orderId}`);

      localStorage.removeItem("cartItems");
      localStorage.removeItem("totalAmount");
      setCartItems([]);

      setFormData({
        name: "",
        address: "",
        phone: "",
        paymentMethod: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
      });
    } catch (error) {
      console.error("Payment error:", error);
      setError(error.message);
    }
  };

  return (
    <Container fluid="md" className="mt-5">
      <h2 className="text-center mb-4 text-success">
        {translations[language].checkoutTitle}
      </h2>
      {cartItems.length === 0 ? (
        <p>{translations[language].cartStatus}</p>
      ) : (
        <>
          <h4>{translations[language].orderSummary}</h4>
          <Row className="justify-content-center">
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
          <h5 className="text-success">
            {translations[language].total} {totalAmount}{" "}
            {translations[language].lv}
          </h5>

          <Form onSubmit={handleSubmit} className="mt-4">
            {error && <p className="text-danger">{error}</p>}

            <Form.Group controlId="formName">
              <Form.Label>
                {translations[language].name}{" "}
                <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Вашето име"
              />
            </Form.Group>

            <Form.Group controlId="formAddress">
              <Form.Label>
                {translations[language].address}{" "}
                <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                placeholder="Вашият адрес"
              />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label>
                {translations[language].phone}{" "}
                <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="Вашият телефонен номер"
              />
            </Form.Group>

            <Form.Group controlId="formPaymentMethod">
              <Form.Label>
                {translations[language].selectPaymentMethod}{" "}
                <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                as="select"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>
                  {translations[language].selectPaymentMethod}{" "}
                </option>
                <option value="creditCard">
                  {translations[language].creditCard}
                </option>
                <option value="paypal">{translations[language].paypal}</option>
              </Form.Control>
            </Form.Group>

            {formData.paymentMethod === "creditCard" && (
              <>
                <Form.Group controlId="formCardNumber">
                  <Form.Label>
                    {translations[language].cardNumber}{" "}
                    <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    required
                    placeholder="1234 5678 9012 3456"
                  />
                </Form.Group>

                <Form.Group controlId="formExpirationDate">
                  <Form.Label>
                    {translations[language].expirationDate}
                    <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="expirationDate"
                    value={formData.expirationDate}
                    onChange={handleInputChange}
                    required
                    placeholder="MM/ГГ"
                  />
                </Form.Group>

                <Form.Group controlId="formCVV">
                  <Form.Label>
                    {translations[language].cvv}{" "}
                    <span className="text-danger">*</span>{" "}
                    <span className="text-danger"></span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    required
                    placeholder="123"
                  />
                </Form.Group>
              </>
            )}

            <Button type="submit" className="mt-3" variant="btn btn-success">
              {translations[language].submit}
            </Button>
          </Form>
        </>
      )}
    </Container>
  );
}

export default Checkout;
