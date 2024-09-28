import { Route, Routes } from "react-router-dom";
import Products from "../pages/Products";
import Cart from "../pages/Cart";

function Content() {
  return (
    <Routes>
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      {/* Добави още маршрути тук */}
    </Routes>
  );
}

export default Content;