import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useUser } from "../context/useUser";
import { useCart } from "../context/useCart";
import { useLanguage } from "../context/useLanguage";

function Header() {
  const { user } = useUser();
  const { language, toggleLanguage, translations } = useLanguage();
  const { isCartActive, itemCount } = useCart();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          ShopEase
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Nav className="ms-auto">
          <Nav.Link as={NavLink} to="/cart" className="position-relative">
            <i
              className={`bi bi-cart cart-icon ${isCartActive ? "active" : ""}`}
            >
              {translations[language].cart}
            </i>
            {itemCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {itemCount}
                <span className="visually-hidden">unread messages</span>
              </span>
            )}
          </Nav.Link>
        </Nav>

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
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="dropdown-item font-weight-bold text-warning"
                as={NavLink}
                to="/fitness-equipment"
                onClick={() =>
                  document.querySelector(".navbar-toggler").click()
                }
              >
                {translations[language].fitnessEquipment}
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item
                className="dropdown-item font-weight-bold text-warning"
                as={NavLink}
                to="/sports/boxing"
                onClick={() =>
                  document.querySelector(".navbar-toggler").click()
                }
              >
                Boxing
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="dropdown-item font-weight-bold text-warning"
                as={NavLink}
                to="/sports/yoga"
                onClick={() =>
                  document.querySelector(".navbar-toggler").click()
                }
              >
                Yoga
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="dropdown-item font-weight-bold text-warning"
                as={NavLink}
                to="/sports/cross-fit"
                onClick={() =>
                  document.querySelector(".navbar-toggler").click()
                }
              >
                CrossFit
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="dropdown-item font-weight-bold text-warning"
                as={NavLink}
                to="/sports/swimming"
                onClick={() =>
                  document.querySelector(".navbar-toggler").click()
                }
              >
                Swimming
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="dropdown-item font-weight-bold text-warning"
                as={NavLink}
                to="/sports/mma"
                onClick={() =>
                  document.querySelector(".navbar-toggler").click()
                }
              >
                MMA
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="dropdown-item font-weight-bold text-warning"
                as={NavLink}
                to="/sports/kick-boxing"
                onClick={() =>
                  document.querySelector(".navbar-toggler").click()
                }
              >
                Kickboxing
              </NavDropdown.Item>
            </NavDropdown>
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
                {user.isAdmin && ( 
                  <Nav.Link
                    as={NavLink}
                    to="/admin"
                    onClick={() =>
                      document.querySelector(".navbar-toggler").click()
                    }
                  >
                    Admin Panel
                  </Nav.Link>
                )}
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
            <Nav.Link
              onClick={() => {
                toggleLanguage();
                document.querySelector(".navbar-toggler").click();
              }}
            >
              {language === "en" ? (
                <>
                  <span className="flag-icon flag-icon-bg"></span> Switch to
                  Bulgarian
                </>
              ) : (
                <>
                  <span className="flag-icon flag-icon-gb"></span> Превключи на
                  английски
                </>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
