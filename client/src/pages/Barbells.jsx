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
      diameter: 28,
      price: 100,

      quantity: 1,
      image: "https://i.imgur.com/xjkO8aV.jpg",
      description: translations[language].description5,
      details: {
        weight: 10,
        diameter: 50,
      },
    },
    {
      id: "barbell-2",
      name: translations[language].barbell2,

      price: 300,

      quantity: 1,
      image: "https://i.imgur.com/xjkO8aV.jpg",
      description: translations[language].description6,
      details: {
        weight: 20,
        diameter: 50,
      },
    },
    {
      id: "barbell-3",
      name: translations[language].barbell3,

      price: 50,

      quantity: 1,
      image: "https://i.imgur.com/xjkO8aV.jpg",
      description: translations[language].description7,
      details: {
        weight: 8,
        diameter: 30,
      },
    },
    {
      id: "barbell-4",
      name: translations[language].barbell4,

      price: 45,

      quantity: 1,
      image: "https://i.imgur.com/xjkO8aV.jpg",
      description: translations[language].description8,
      details: {
        weight: 6,
        diameter: 28,
      },
    },
    {
      id: "barbell-5",
      name: translations[language].barbell5,

      price: 18,

      quantity: 1,
      image: "https://i.imgur.com/xjkO8aV.jpg",
      description: translations[language].description9,
      details: {
        weight: 2,
        diameter: 28,
      },
    },
    {
      id: "barbell-6",
      name: translations[language].barbell6,

      price: 20,

      quantity: 1,
      image: "https://i.imgur.com/xjkO8aV.jpg",
      description: translations[language].description9,
      details: {
        weight: 2,
        diameter: 30,
      },
    },
    {
      id: "barbell-7",
      name: translations[language].barbell7,

      price: 55,

      quantity: 1,
      image: "https://i.imgur.com/xjkO8aV.jpg",
      description: translations[language].description10,
      details: {
        weight: 10,
        diameter: 28,
      },
    },
    {
      id: "barbell-8",
      name: translations[language].barbell8,

      price: 55,

      quantity: 1,
      image: "https://i.imgur.com/xjkO8aV.jpg",
      description: translations[language].description10,
      details: {
        weight: 10,
        diameter: 30,
      },
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
                  {barbells.details.weight} {translations[language].kg}
                </h5>
                <p className="card-text">
                  {translations[language].price}
                  {barbells.price} {translations[language].lv}
                </p>
                <p className="card-text">
                  {barbells.details.diameter} {translations[language].diameter}{" "}
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
