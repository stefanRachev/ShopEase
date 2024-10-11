import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Logout from "../pages/Logout";
import Weights from "../pages/Weights";
import Dumbbells from "../pages/Dumbbells";
import Barbells from "../pages/Barbells";
import WeightPlates from "../pages/WeightPlates";
import NutritionalSupplements from "../pages/NutritionalSupplements";
import FitnessEquipment from "../pages/FitnessEquipment";


function Content() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/products" element={<Products />} />
      <Route path="/weights" element={<Weights />} />
      <Route path="/nutritional-supplements" element={<NutritionalSupplements />} />
      <Route path="/fitness-equipment" element={<FitnessEquipment />} />
      <Route path="/dumbbells" element={<Dumbbells />} />
      <Route path="/weight-plates" element={<WeightPlates />} />
      <Route path="/barbells" element={<Barbells />} />
      <Route path="/cart" element={<Cart />} />
      {/* Добави още маршрути тук */}
    </Routes>
  );
}

export default Content;