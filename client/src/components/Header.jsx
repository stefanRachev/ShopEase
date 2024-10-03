// import { Navbar, Nav, Container } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
// import { useUser } from "../context/useUser";
// import { useLanguage } from "../context/useLanguage";

// function Header() {
//   const { user } = useUser();
//   const { language, toggleLanguage } = useLanguage();

//   return (
//     <Navbar bg="dark" variant="dark" expand="lg" >
//       <Container>
//         <Navbar.Brand href="/">ShopEase</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link
//               as={NavLink}
//               to="/products"
//               onClick={() => document.querySelector(".navbar-toggler").click()}
//             >
//               {language === "en" ? "Products" : "Продукти"}
//             </Nav.Link>
//             <Nav.Link
//               as={NavLink}
//               to="/cart"
//               onClick={() => document.querySelector(".navbar-toggler").click()}
//             >
//               {language === "en" ? "Cart" : "Кошница"}
//             </Nav.Link>
//           </Nav>

//           <Nav className="ms-auto">
//             {user ? (
//               <>
//                 <Nav.Link
//                   as={NavLink}
//                   to="/logout"
//                   onClick={() =>
//                     document.querySelector(".navbar-toggler").click()
//                   }
//                 >
//                   {language === "en" ? "Logout" : "Изход"}
//                 </Nav.Link>
//                 <Nav.Link disabled>
//                   {language === "en"
//                     ? `Welcome, ${user.email}`
//                     : `Добре дошъл, ${user.email}`}
//                 </Nav.Link>
//               </>
//             ) : (
//               <>
//                 <Nav.Link
//                   as={NavLink}
//                   to="/register"
//                   onClick={() =>
//                     document.querySelector(".navbar-toggler").click()
//                   }
//                 >
//                   {language === "en" ? "Register" : "Регистрация"}
//                 </Nav.Link>
//                 <Nav.Link
//                   as={NavLink}
//                   to="/login"
//                   onClick={() =>
//                     document.querySelector(".navbar-toggler").click()
//                   }
//                 >
//                   {language === "en" ? "Login" : "Вход"}
//                 </Nav.Link>
//                 <Nav.Link disabled>
//                   {language === "en"
//                     ? "Guest, please log in or register."
//                     : "Гост, моля влезте или се регистрирайте."}
//                 </Nav.Link>
//               </>
//             )}
//             <Nav.Link onClick={toggleLanguage}>
//               {language === "en"
//                 ? "Switch to Bulgarian"
//                 : "Превключи на английски"}
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;

import { Navbar, Nav, Container } from "react-bootstrap";
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
            <Nav.Link
              as={NavLink}
              to="/products"
              onClick={() => document.querySelector(".navbar-toggler").click()}
            >
              {translations[language].products}{" "}
              
            </Nav.Link>
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
