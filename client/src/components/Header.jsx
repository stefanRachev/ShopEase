import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useUser } from "../context/useUser";
import { useLanguage } from "../context/useLanguage";

function Header() {
  const { user } = useUser();
  const { language, toggleLanguage, translations } = useLanguage();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">ShopEase</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              title={translations[language].products}
              id="products-dropdown"
            >
              <NavDropdown.Item
                className="dropdown-item font-weight-bold text-warning"
                as={NavLink}
                to="/weights"
                onClick={() =>
                  document.querySelector(".navbar-toggler").click()
                }
              >
                {translations[language].weights}
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/weights/dumbbells"
                onClick={() =>
                  document.querySelector(".navbar-toggler").click()
                }
              >
                {translations[language].dumbbells}
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/weights/barbells"
                onClick={() =>
                  document.querySelector(".navbar-toggler").click()
                }
              >
                {translations[language].barbells}
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/weights/plates"
                onClick={() =>
                  document.querySelector(".navbar-toggler").click()
                }
              >
                {translations[language].barbellDiscs}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="dropdown-item font-weight-bold text-warning"
                as={NavLink}
                to="/nutritional-supplements"
                onClick={() =>
                  document.querySelector(".navbar-toggler").click()
                }
              >
                {translations[language].nutritionalSupplements}
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/nutritional-supplements/proteins"
                onClick={() =>
                  document.querySelector(".navbar-toggler").click()
                }
              >
                {translations[language].protein}
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/nutritional-supplements/amino-acids"
                onClick={() =>
                  document.querySelector(".navbar-toggler").click()
                }
              >
                {translations[language].aminoAcids}
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/nutritional-supplements/vitamins"
                onClick={() =>
                  document.querySelector(".navbar-toggler").click()
                }
              >
                {translations[language].vitamins}
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              as={NavLink}
              to="/cart"
              onClick={() => document.querySelector(".navbar-toggler").click()}
            >
              {translations[language].cart}{" "}
            </Nav.Link>
          </Nav>

          <Nav className="ms-auto">
            {user ? (
              <>
                <Nav.Link
                  as={NavLink}
                  to="/logout"
                  onClick={() =>
                    document.querySelector(".navbar-toggler").click()
                  }
                >
                  {translations[language].logout}{" "}
                </Nav.Link>
                <Nav.Link disabled>
                  {language === "en"
                    ? `Welcome, ${user.email}`
                    : `Добре дошъл, ${user.email}`}
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link
                  as={NavLink}
                  to="/register"
                  onClick={() =>
                    document.querySelector(".navbar-toggler").click()
                  }
                >
                  {translations[language].register}{" "}
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/login"
                  onClick={() =>
                    document.querySelector(".navbar-toggler").click()
                  }
                >
                  {translations[language].login}{" "}
                </Nav.Link>
                <Nav.Link disabled>
                  {language === "en"
                    ? translations[language].guestMessage
                    : translations[language].guestMessage}{" "}
                </Nav.Link>
              </>
            )}
            <Nav.Link onClick={toggleLanguage}>
              {language === "en"
                ? "Switch to Bulgarian"
                : "Превключи на английски"}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
