import { useContext } from "react";
import { CartContext } from "../context/CartContext"; // Ако използваш контекст за управление на състоянието на кошницата
import { Button, Table } from "react-bootstrap";

function Cart() {
  const { cartItems, removeFromCart, totalAmount } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>My Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <h3>Total: ${totalAmount}</h3>
      <Button variant="success">Proceed to Checkout</Button>
    </div>
  );
}

export default Cart;
