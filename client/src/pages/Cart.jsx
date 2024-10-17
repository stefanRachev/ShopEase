//Cart.jsx

// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";
// import { Button, Table, Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";

// function Cart() {
//   const { cartItems, removeFromCart, totalAmount } = useContext(CartContext);

//   return (
//     <Container className="cart-container mt-5">
//       <h2 className="text-center mb-4">My Cart</h2>
//       {cartItems.length === 0 ? (
//         <div className="text-center">
//           <p>Your cart is empty</p>
//           <Link to="/products" className="btn btn-primary">
//             Browse Products
//           </Link>
//         </div>
//       ) : (
//         <>
//           <Table striped bordered hover>
//             <thead>
//               <tr>
//                 <th>Product</th>
//                 <th>Price</th>
//                 <th>Quantity</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cartItems.map((item, index) => (
//                 <tr key={`${item.id}-${index}`}>
//                   <td>{item.name}</td>
//                   <td>{item.price} лв</td>
//                   <td>{item.quantity}</td>
//                   <td>{item.description}</td>
//                   <td>
//                     <Button
//                       variant="danger"
//                       onClick={() => removeFromCart(item.id)}
//                     >
//                       Remove
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//           <Row className="mt-3">
//             <Col>
//               <h3>Total: {totalAmount} лв</h3>
//             </Col>
//             <Col className="text-right">
//               <Button variant="success">Proceed to Checkout</Button>
//             </Col>
//           </Row>
//         </>
//       )}
//     </Container>
//   );
// }

// export default Cart;

import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, removeFromCart, totalAmount } = useContext(CartContext);

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
            <Col
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={`${item.id}-${index}`}
              className="mb-4"
            >
              <Card>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    <strong>Price:</strong> {item.price} лв
                  </Card.Text>
                  <Card.Text>
                    <strong>Weight:</strong> {item.weight} кг
                  </Card.Text>
                  <Card.Text>
                    <strong>Description:</strong> {item.description}
                  </Card.Text>
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
