//Dumbbells.jsx
import { useCart } from "../context/useCart";
import { useUser } from "../context/useUser";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";

function Dumbbells() {
  const { language, translations } = useLanguage();
  const { user } = useUser();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const dumbbells = [
    {
      id: 1,
      weight: 2.5,
      price: 15,
      quantity: 1,
      image: "https://i.imgur.com/Wvxru9f.jpg",
    },
    {
      id: 2,
      weight: 5,
      price: 25,
      quantity: 1,
      image: "https://i.imgur.com/Wvxru9f.jpg",
    },
    {
      id: 3,
      weight: 7.5,
      price: 35,
      quantity: 1,
      image: "https://i.imgur.com/Wvxru9f.jpg",
    },
    {
      id: 4,
      weight: 10,
      price: 45,
      quantity: 1,
      image: "https://i.imgur.com/Wvxru9f.jpg",
    },
    {
      id: 5,
      weight: 12.5,
      price: 55,
      quantity: 1,
      image: "https://i.imgur.com/Wvxru9f.jpg",
    },
    {
      id: 6,
      weight: 14,
      price: 55,
      quantity: 1,
      image: "https://i.imgur.com/Wvxru9f.jpg",
    },
    {
      id: 7,
      weight: 17.5,
      price: 55,
      quantity: 1,
      image: "https://i.imgur.com/Wvxru9f.jpg",
    },
    {
      id: 8,
      weight: 22,
      price: 55,
      quantity: 1,
      image: "https://i.imgur.com/Wvxru9f.jpg",
    },
    {
      id: 9,
      weight: 24,
      price: 55,
      quantity: 1,
      image: "https://i.imgur.com/Wvxru9f.jpg",
    },
    {
      id: 10,
      weight: 26,
      price: 55,
      quantity: 1,
      image: "https://i.imgur.com/Wvxru9f.jpg",
    },
    {
      id: 11,
      weight: 30,
      price: 55,
      quantity: 1,
      image: "https://i.imgur.com/Wvxru9f.jpg",
    },

    {
      id: 12,
      weight: 40,
      price: 55,
      quantity: 1,
      image: "https://i.imgur.com/Wvxru9f.jpg",
    },
  ];

  const handleAddToCart = (dumbbell) => {
    if (!user) {
      navigate("/login");
    } else {
      addToCart(dumbbell);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">
        {translations[language].dumbbellsDescription}
      </h1>
      <p className="text-center mb-4">
        {translations[language].dumbbellsDescription1}
      </p>
      <div className="row">
        {dumbbells.map((dumbbell) => (
          <div key={dumbbell.id} className="col-md-4 col-lg-3 mb-4">
            <div className="card h-100">
              <img
                src={dumbbell.image}
                className="card-img-top"
                alt={`Дъмбел ${dumbbell.weight} кг`}
              />
              <div className="card-body">
                <h5 className="card-title">{dumbbell.weight} кг</h5>
                <p className="card-text">{translations[language].price}{dumbbell.price} {translations[language].lv}</p>
                <button
                  className="btn btn-primary"
                  //onClick={() => addToCart(dumbbell)} // Използвай директно addToCart
                  onClick={() => handleAddToCart(dumbbell)}
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

export default Dumbbells;
