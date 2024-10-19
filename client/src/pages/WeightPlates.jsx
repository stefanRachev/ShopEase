import { useCart } from "../context/useCart";
import { useUser } from "../context/useUser";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";

function WeightPlates() {
  const { language, translations } = useLanguage();
  const { user } = useUser();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const plates = [
    {
      id: "plate-1",
      name: translations[language].discName5,
      weight: 5,
      price: 20,
      quantity: 1,
      image: "https://i.imgur.com/m35G0Iq.jpg",
      description: translations[language].discDescription50,
      details: {
        diameter: 50,
      },
    },
    {
      id: "plate-2",
      name: translations[language].discName20,
      weight: 20,
      price: 50,
      quantity: 1,
      image: "https://i.imgur.com/m35G0Iq.jpg",
      description: translations[language].discDescription50,
      details: {
        diameter: 50,
      },
    },
    {
      id: "plate-3",
      name: translations[language].discName10,
      weight: 10,
      price: 20,
      quantity: 1,
      image: "https://i.imgur.com/m35G0Iq.jpg",
      description: translations[language].discDescription30,
      details: {
        diameter: 30,
      },
    },
    {
      id: "plate-4",
      name: translations[language].discName2,
      weight: 2,
      price: 8,
      quantity: 1,
      image: "https://i.imgur.com/m35G0Iq.jpg",
      description: translations[language].discDescription28,
      details: {
        diameter: 28,
      },
    },
    {
      id: "plate-5",
      name: translations[language].discName10,
      weight: 10,
      price: 18,
      quantity: 1,
      image: "https://i.imgur.com/m35G0Iq.jpg",
      description: translations[language].discDescription28,
      details: {
        diameter: 28,
      },
    },
    {
      id: "plate-6",
      name: translations[language].discName2,
      weight: 2,
      price: 9,
      quantity: 1,
      image: "https://i.imgur.com/m35G0Iq.jpg",
      description: translations[language].discDescription30,
      details: {
        diameter: 30,
      },
    },
    {
      id: "plate-7",
      name: translations[language].discName10,
      weight: 10,
      price: 25,
      quantity: 1,
      image: "https://i.imgur.com/m35G0Iq.jpg",
      description: translations[language].discDescription30,
      details: {
        diameter: 30,
      },
    },
    {
      id: "plate-8",
      name: translations[language].discName10,
      weight: 10,
      price: 22,
      quantity: 1,
      image: "https://i.imgur.com/m35G0Iq.jpg",
      description: translations[language].discDescription28,
      details: {
        diameter: 28,
      },
    },
  ];

  const handleAddToCart = (plates) => {
    if (!user) {
      navigate("/login");
    } else {
      addToCart(plates);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">
        {translations[language].platesDescription}
      </h1>
      <p className="text-center mb-4">
        {translations[language].barbellsDescription1}
      </p>
      <div className="row">
        {plates.map((plates) => (
          <div key={plates.id} className="col-md-4 col-lg-3 mb-4">
            <div className="card h-100">
              <img
                src={plates.image}
                className="card-img-top"
                alt={`Диск ${plates.weight} кг`}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {plates.weight} {translations[language].kg}
                </h5>
                <p className="card-text">
                  {translations[language].price}
                  {plates.price} {translations[language].lv}
                </p>
                <p className="card-text">
                  {plates.details.diameter} {translations[language].diameter}{" "}
                </p>
                <p className="card-text">{plates.description} </p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(plates)}
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

export default WeightPlates;
