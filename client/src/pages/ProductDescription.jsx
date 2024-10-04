// ProductDescription.js
import styles from "./ProductDescription.module.css";
import { useLanguage } from "../context/useLanguage";

function ProductDescription() {
  const { language, translations } = useLanguage();

  const products = [
    {
      id: 1,
      name: translations[language].product1,
      description: translations[language].description1,
      image: "https://i.imgur.com/RxODxfH.jpg",
    },
    {
      id: 2,
      name: translations[language].product2,
      description: translations[language].description2,
      image: "https://i.imgur.com/iDxkTnw.jpg",
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
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-6 col-lg-4 mb-4">
            <div className={`card ${styles.cardCustom}`}>
              <img
                src={product.image}
                className={`card-img-top ${styles.cardImage}`}
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDescription;
