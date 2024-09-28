import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useUser } from "../context/useUser";

function Header() {
  const { user } = useUser();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">ShopEase</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link as={NavLink} to="/products" onClick={() => document.querySelector('.navbar-toggler').click()}>
              Products
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cart" onClick={() => document.querySelector('.navbar-toggler').click()}>
              Cart
            </Nav.Link>
          </Nav>

         
          <Nav className="ms-auto">
            {user ? (
              <>
                <Nav.Link as={NavLink} to="/logout" onClick={() => document.querySelector('.navbar-toggler').click()}>
                  Logout
                </Nav.Link>
                <Nav.Link disabled>Welcome, {user.email}</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={NavLink} to="/register" onClick={() => document.querySelector('.navbar-toggler').click()}>
                  Register
                </Nav.Link>
                <Nav.Link as={NavLink} to="/login" onClick={() => document.querySelector('.navbar-toggler').click()}>
                  Login
                </Nav.Link>
                <Nav.Link disabled>Guest, please log in or register.</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
