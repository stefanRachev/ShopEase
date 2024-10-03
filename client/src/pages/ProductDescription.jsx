// ProductDescription.jsx
import styles from './ProductDescription.module.css';
import { useLanguage } from "../context/useLanguage";

function ProductDescription() {
  const { language, translations } = useLanguage();

  const products = [
    {
      id: 1,
      name: translations[language].product1,
      description: translations[language].description1,
      price: "100.00",
      image: "https://via.placeholder.com/300x300",
    },
    {
      id: 2,
      name: translations[language].product2,
      description: translations[language].description2,
      price: "150.00",
      image: "https://via.placeholder.com/300x300",
    },
    {
      id: 3,
      name: translations[language].product3,
      description: translations[language].description3,
      price: "200.00",
      image: "https://via.placeholder.com/300x300",
    },
  ];

  return (
    <div className={styles.productContainer}>
      <h2>{translations[language].featuredProducts}</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className={`card ${styles.productCard}`}>
              <img
                src={product.image}
                className={`card-img-top ${styles.productImage}`}
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">
                  <strong>{product.price} лв.</strong>
                </p>
                <button className="btn btn-primary">
                  {translations[language].addToCart}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDescription;

