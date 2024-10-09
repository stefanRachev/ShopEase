import { useLanguage } from "../context/useLanguage";
import { Link } from "react-router-dom";

function Weights() {
  const { language, translations } = useLanguage();
  const products = [
    {
      id: 1,
      name: translations[language].dumbbells,
      description: translations[language].descriptionDumbbells,
      image: "https://i.imgur.com/y7xXSK2.jpg",
      link: "/dumbbells",
    },
    {
      id: 2,
      name: translations[language].barbells,
      description: translations[language].descriptionBarbells,
      image: "https://i.imgur.com/8FkvkTE.jpg",
      link: "/barbells",
    },
    {
      id: 3,
      name: translations[language].barbellDiscs,
      description: translations[language].descriptionBarbellDiscs,
      image: "https://i.imgur.com/E1JXl1s.jpg",
      link: "/weight-plates",
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">{translations[language].weights}</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body flex-grow-1">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
              </div>
              <div className="card-footer d-flex justify-content-center">
                <Link to={product.link} className="btn btn-primary w-100">
                  {translations[language].takeALook} {product.name}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Weights;
