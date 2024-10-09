// ProductDescription.js
import styles from "./ProductDescription.module.css";
import { useLanguage } from "../context/useLanguage";
import { Link } from "react-router-dom";

function ProductDescription() {
  const { language, translations } = useLanguage();

  const products = [
    {
      id: 1,
      name: translations[language].product1,
      description: translations[language].description1,
      image: "https://i.imgur.com/RxODxfH.jpg",
      link: "/weights",
    },
    {
      id: 2,
      name: translations[language].product2,
      description: translations[language].description2,
      image: "https://i.imgur.com/iDxkTnw.jpg",
      link: "/nutritional-supplements",
    },
    {
      id: 3,
      name: translations[language].product3,
      description: translations[language].description3,
      image: "https://i.imgur.com/5GkGTXH.jpg",
    },
    {
      id: 4,
      name: translations[language].product4,
      description: translations[language].description4,
      image: "https://i.imgur.com/NWTgIOe.jpg",
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 mb-4">
            <div className={`card h-100 ${styles.cardCustom}`}>
              <img
                src={product.image}
                className={`card-img-top ${styles.cardImage}`}
                alt={product.name}
              />
              <div className="card-body flex-grow-1">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
              </div>
              <div className="card-footer d-flex justify-content-center">
                {product.link && (
                  <Link to={product.link} className="btn btn-primary w-100">
                    {translations[language].takeALook} {product.name}
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDescription;
