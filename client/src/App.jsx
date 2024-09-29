import { UserProvider } from "./context/UserContext";
import { CartProvider } from "./context/CartContext";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./layout/Content";

function App() {
  return (
    <UserProvider>
      <CartProvider>
      <LanguageProvider> 
        <Header />

        <Content />

        <Footer />
        </LanguageProvider>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
