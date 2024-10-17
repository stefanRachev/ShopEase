import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
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
import Proteins from "../pages/Proteins";
import AminoAcids from "../pages/AminoAcids";
import Vitamins from "../pages/Vitamins";
import SportGrid from "../pages/SportGrid";
import Boxing from "../pages/Boxing";
import Yoga from "../pages/Yoga";
import CrossFit from "../pages/CrossFit";
import Swimming from "../pages/Swimming";
import Mma from "../pages/Mma";
import KikBoxing from "../pages/KickBoxing";
import Checkout from "../pages/Checkout";

function Content() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/weights" element={<Weights />} />
      <Route path="/sport" element={<SportGrid />} />
      <Route path="/sports/boxing" element={<Boxing />} />
      <Route path="/sports/yoga" element={<Yoga />} />
      <Route path="/sports/cross-fit" element={<CrossFit />} />
      <Route path="/sports/swimming" element={<Swimming />} />
      <Route path="/sports/mma" element={<Mma />} />
      <Route path="/sports/kick-boxing" element={<KikBoxing />} />
      <Route
        path="/nutritional-supplements"
        element={<NutritionalSupplements />}
      />
      <Route path="/nutritional-supplements/proteins" element={<Proteins />} />
      <Route
        path="/nutritional-supplements/amino-acids"
        element={<AminoAcids />}
      />
      <Route path="/nutritional-supplements/vitamins" element={<Vitamins />} />
      <Route path="/fitness-equipment" element={<FitnessEquipment />} />
      <Route path="/weights/dumbbells" element={<Dumbbells />} />
      <Route path="/weights/plates" element={<WeightPlates />} />
      <Route path="/weights/barbells" element={<Barbells />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      {/* Добави още маршрути тук */}
    </Routes>
  );
}

export default Content;
