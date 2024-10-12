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
      weight: 5,
      price: 20,
      diameter: 50,
      quantity: 1,
      image: "https://i.imgur.com/m35G0Iq.jpg",
      description: translations[language].discDescription,
    },
    {
      id: "plate-2",
      weight: 20,
      price: 50,
      diameter: 50,
      quantity: 1,
      image: "https://i.imgur.com/m35G0Iq.jpg",
      description: translations[language].discDescription,
    },
    {
      id: "plate-3",
      weight: 10,
      price: 20,
      diameter: 30,
      quantity: 1,
      image: "https://i.imgur.com/m35G0Iq.jpg",
      description: translations[language].discDescription,
    },
    {
      id: "plate-4",
      weight: 2,
      price: 8,
      diameter: 28,
      quantity: 1,
      image: "https://i.imgur.com/m35G0Iq.jpg",
      description: translations[language].discDescription,
    },
    {
      id: "plate-5",
      weight: 10,
      price: 18,
      diameter: 28,
      quantity: 1,
      image: "https://i.imgur.com/m35G0Iq.jpg",
      description: translations[language].discDescription,
    },
    {
      id: "plate-6",
      weight: 2,
      price: 20,
      diameter: 30,
      quantity: 1,
      image: "https://i.imgur.com/m35G0Iq.jpg",
      description: translations[language].discDescription,
    },
    {
      id: "plate-7",
      weight: 10,
      price: 25,
      diameter: 30,
      quantity: 1,
      image: "https://i.imgur.com/m35G0Iq.jpg",
      description: translations[language].discDescription,
    },
    {
      id: "plate-8",
      weight: 10,
      price: 40,
      diameter: 30,
      quantity: 1,
      image: "https://i.imgur.com/m35G0Iq.jpg",
      description: translations[language].discDescription,
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
                  {plates.diameter} {translations[language].diameter}{" "}
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
