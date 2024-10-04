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
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <div className="d-flex justify-content-around">
              {products.map((prod) => (
                <div key={prod.id} className={`card ${styles.cardCustom}`}>
                  <img
                    src={prod.image}
                    className={`card-img-top ${styles.cardImage}`}
                    alt={prod.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{prod.name}</h5>
                    <p className="card-text">{prod.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">
          {language === "en" ? "Previous" : "Предишен"}
        </span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">
          {language === "en" ? "Next" : "Следващ"}
        </span>
      </button>
    </div>
  );
}

export default ProductDescription;
