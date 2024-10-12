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

  const products = [
    {
      id: "dumbbell-1",
      name: translations[language].dumbbell1,
      description: translations[language].descriptionDumbbells1,
      weight: 2.5,
      price: 15,
      quantity: 1,
      image: "https://i.imgur.com/Wvxru9f.jpg",
    },
    {
      id: "dumbbell-2",
      name: translations[language].dumbbell2,
      description: translations[language].descriptionDumbbells1,
      weight: 5,
      price: 25,
      quantity: 1,
      image: "https://i.imgur.com/Wvxru9f.jpg",
    },
    {
      id: "dumbbell-3",
      name: translations[language].dumbbell3,
      description: translations[language].descriptionDumbbells1,
      weight: 7.5,
      price: 35,
      quantity: 1,
      image: "https://i.imgur.com/Wvxru9f.jpg",
    },
    {
      id: "dumbbell-4",
      name: translations[language].dumbbell4,
      description: translations[language].descriptionDumbbells1,
      weight: 10,
      price: 45,
      quantity: 1,
      image: "https://i.imgur.com/Wvxru9f.jpg",
    },
    {
      id: "dumbbell-5",
      name: translations[language].dumbbell5,
      description: translations[language].descriptionDumbbells1,
      weight: 12.5,
      price: 55,
      quantity: 1,
      image: "https://i.imgur.com/Wvxru9f.jpg",
    },
    {
      id: "dumbbell-6",
      name: translations[language].dumbbell6,
      description: translations[language].descriptionDumbbells1,
      weight: 14,
      price: 55,
      quantity: 1,
      image: "https://i.imgur.com/Wvxru9f.jpg",
    },
    {
      id: "dumbbell-7",
      name: translations[language].dumbbell7,
      description: translations[language].descriptionDumbbells1,
      weight: 17.5,
      price: 55,
      quantity: 1,
      image: "https://i.imgur.com/Wvxru9f.jpg",
    },
    {
      id: "dumbbell-8",
      name: translations[language].dumbbell8,
      description: translations[language].descriptionDumbbells1,
      weight: 22,
      price: 55,
      quantity: 1,
      image: "https://i.imgur.com/Wvxru9f.jpg",
    },
    {
      id: "dumbbell-9",
      name: translations[language].dumbbell9,
      description: translations[language].descriptionDumbbells1,
      weight: 24,
      price: 55,
      quantity: 1,
      image: "https://i.imgur.com/Wvxru9f.jpg",
    },
    {
      id: "dumbbell-10",
      name: translations[language].dumbbell10,
      description: translations[language].descriptionDumbbells1,
      weight: 26,
      price: 55,
      quantity: 1,
      image: "https://i.imgur.com/Wvxru9f.jpg",
    },
    {
      id: "dumbbell-11",
      name: translations[language].dumbbell11,
      description: translations[language].descriptionDumbbells1,
      weight: 30,
      price: 55,
      quantity: 1,
      image: "https://i.imgur.com/Wvxru9f.jpg",
    },

    {
      id: "dumbbell-12",
      name: translations[language].dumbbell12,
      description: translations[language].descriptionDumbbells1,
      weight: 40,
      price: 55,
      quantity: 1,
      image: "https://i.imgur.com/Wvxru9f.jpg",
    },
  ];

  const handleAddToCart = (product) => {
    if (!user) {
      navigate("/login");
    } else {
      addToCart(product);
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
        {products.map((product) => (
          <div key={product.id} className="col-md-4 col-lg-3 mb-4">
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top"
                alt={`Дъмбел ${product.weight} кг`}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {product.weight} {translations[language].kg}
                </h5>
                <p className="card-text">
                  {translations[language].price}
                  {product.price} {translations[language].lv}
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(product)}
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
