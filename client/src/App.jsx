import { UserProvider } from "./context/UserContext";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./layout/Content";

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <Header />

        <Content />

        <Footer />
      </CartProvider>
    </UserProvider>
  );
}

export default App;
