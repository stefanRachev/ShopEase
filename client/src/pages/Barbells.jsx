//Dumbbells.jsx
import { useCart } from "../context/useCart";
import { useUser } from "../context/useUser";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";

function Barbells() {
  const { language, translations } = useLanguage();
  const { user } = useUser();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const barbells = [
    {
      id: "barbell-1",
      name: translations[language].barbell1,
      weight: 10,
      price: 100,
      diameter: 50,
      quantity: 1,
      image: "https://i.imgur.com/xjkO8aV.jpg",
      description: translations[language].description5,
    },
    {
      id: "barbell-2",
      name: translations[language].barbell2,
      weight: 20,
      price: 300,
      diameter: 50,
      quantity: 1,
      image: "https://i.imgur.com/xjkO8aV.jpg",
      description: translations[language].description6,
    },
    {
      id: "barbell-3",
      name: translations[language].barbell3,
      weight: 8,
      price: 50,
      diameter: 30,
      quantity: 1,
      image: "https://i.imgur.com/xjkO8aV.jpg",
      description: translations[language].description7,
    },
    {
      id: "barbell-4",
      name: translations[language].barbell4,
      weight: 6,
      price: 45,
      diameter: 28,
      quantity: 1,
      image: "https://i.imgur.com/xjkO8aV.jpg",
      description: translations[language].description8,
    },
    {
      id: "barbell-5",
      name: translations[language].barbell5,
      weight: 2,
      price: 18,
      diameter: 28,
      quantity: 1,
      image: "https://i.imgur.com/xjkO8aV.jpg",
      description: translations[language].description9,
    },
    {
      id: "barbell-6",
      name: translations[language].barbell6,
      weight: 2,
      price: 20,
      diameter: 30,
      quantity: 1,
      image: "https://i.imgur.com/xjkO8aV.jpg",
      description: translations[language].description9,
    },
    {
      id: "barbell-7",
      name: translations[language].barbell7,
      weight: 10,
      price: 55,
      diameter: 28,
      quantity: 1,
      image: "https://i.imgur.com/xjkO8aV.jpg",
      description: translations[language].description10,
    },
    {
      id: "barbell-8",
      name: translations[language].barbell8,
      weight: 10,
      price: 55,
      diameter: 30,
      quantity: 1,
      image: "https://i.imgur.com/xjkO8aV.jpg",
      description: translations[language].description10,
    },
  ];

  const handleAddToCart = (barbells) => {
    if (!user) {
      navigate("/login");
    } else {
      addToCart(barbells);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">
        {translations[language].barbellsDescription}
      </h1>
      <p className="text-center mb-4">
        {translations[language].barbellsDescription1}
      </p>
      <div className="row">
        {barbells.map((barbells) => (
          <div key={barbells.id} className="col-md-4 col-lg-3 mb-4">
            <div className="card h-100">
              <img
                src={barbells.image}
                className="card-img-top"
                alt={`Лост ${barbells.weight} кг`}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {barbells.weight} {translations[language].kg}
                </h5>
                <p className="card-text">
                  {translations[language].price}
                  {barbells.price} {translations[language].lv}
                </p>
                <p className="card-text">
                  {barbells.diameter} {translations[language].diameter}{" "}
                </p>
                <p className="card-text">{barbells.description} </p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(barbells)}
                >
                  {translations[language].buyNow}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Barbells;
