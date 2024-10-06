//Dumbbells.jsx
import { useCart } from "../context/useCart";
import { useUser } from "../context/useUser";
import { useNavigate } from "react-router-dom"; 

function Dumbbells() {
  const { user } = useUser();
  const { addToCart } = useCart();
  const navigate = useNavigate();


  const dumbbells = [
    {
      id: 1,
      weight: 2.5,
      price: 15,
      quantity: 1,
      image: "https://i.imgur.com/sample.jpg",
    },
    {
      id: 2,
      weight: 5,
      price: 25,
      quantity: 1,
      image: "https://i.imgur.com/sample.jpg",
    },
    {
      id: 3,
      weight: 7.5,
      price: 35,
      quantity: 1,
      image: "https://i.imgur.com/sample.jpg",
    },
    {
      id: 4,
      weight: 10,
      price: 45,
      quantity: 1,
      image: "https://i.imgur.com/sample.jpg",
    },
    {
      id: 5,
      weight: 12.5,
      price: 55,
      quantity: 1,
      image: "https://i.imgur.com/sample.jpg",
    },
  ];

  const handleAddToCart = (dumbbell) => {
    if (!user) {
      // Ако няма потребител, пренасочва към логин
      navigate("/login");
    } else {
      // Ако има потребител, добавя продукта в кошницата
      addToCart(dumbbell);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Професионални дъмбели</h1>
      <p className="text-center mb-4">
        Налични от 2.5 кг до 40 кг, идеални за домашна и професионална употреба.
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
                <p className="card-text">Цена: {dumbbell.price} лв</p>
                <button
                  className="btn btn-primary"
                  //onClick={() => addToCart(dumbbell)} // Използвай директно addToCart
                  onClick={() => handleAddToCart(dumbbell)}
                >
                  Купи сега
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
