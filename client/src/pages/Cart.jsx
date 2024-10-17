// Cart.jsx;

import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

function Cart() {
  const { cartItems, removeFromCart, totalAmount } = useContext(CartContext);
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleDetails = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <Container className="cart-container mt-5">
      <h2 className="text-center mb-4">My Cart</h2>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p>Your cart is empty</p>
          <Link to="/products" className="btn btn-primary">
            Browse Products
          </Link>
        </div>
      ) : (
        <Row>
          {cartItems.map((item, index) => (
            <Col xs={12} key={`${item.id}-${index}`} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    <strong>Price:</strong> {item.price} лв
                  </Card.Text>
                  <Card.Text>
                    <strong>Quantity:</strong> {item.quantity}
                  </Card.Text>

                  <Button variant="link" onClick={() => toggleDetails(item.id)}>
                    {expandedItem === item.id ? "Hide Details" : "Show Details"}
                  </Button>
                  {expandedItem === item.id && (
                    <Card.Text>
                      <strong>Description:</strong> {item.description}
                    </Card.Text>
                  )}
                  <Button
                    variant="danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
          <Col xs={12} className="mt-3">
            <h3>Total: {totalAmount} лв</h3>
            <Button variant="success">Proceed to Checkout</Button>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Cart;
