
import { UserProvider } from "./context/UserContext";
import { CartProvider } from "./context/CartContext";
import { LanguageProvider } from "./context/LanguageContext";
import { Container } from 'react-bootstrap';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./layout/Content";
import "./App.css";


function App() {
  return (
    <UserProvider>
      <CartProvider>
        <LanguageProvider>
          <div className="d-flex flex-column min-vh-100">
            <Header />
            <Container className="flex-grow-1">
              {" "}
            
              <Content />
            </Container>
            <Footer />
          </div>
        </LanguageProvider>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
