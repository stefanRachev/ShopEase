import { useLanguage } from "../context/useLanguage";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ProductDescription.module.css";

const ProductDescription = () => {
  const { language } = useLanguage();

  return (
    <div className={`container text-center ${styles.productDescription}`}>
      <h2>{language === "en" ? "Our Products" : "Нашите Продукти"}</h2>
      <p>
        {language === "en"
          ? "Explore our range of fitness products designed to enhance your workout!"
          : "Разгледайте нашата гама от фитнес продукти, предназначени да подобрят вашата тренировка!"}
      </p>
      <ul className="list-unstyled">
        <li className="mb-4">
          <h4>{language === "en" ? "Fitness Equipment" : "Фитнес уреди"}</h4>
          <p>
            {language === "en"
              ? "Find the perfect equipment for home workouts."
              : "Намерете идеалния уред за тренировка вкъщи."}
          </p>
          <a className="btn btn-primary" href="/products/fitness-machines">
            {language === "en" ? "Explore" : "Разгледайте"}
          </a>
        </li>
        <li className="mb-4">
          <h4>
            {language === "en" ? "Workout Clothes" : "Дрехи за тренировка"}
          </h4>
          <p>
            {language === "en"
              ? "Stylish and comfortable clothes to inspire you."
              : "Модерни и удобни дрехи, които ще ви вдъхновят."}
          </p>
          <a className="btn btn-primary" href="/products/workout-clothes">
            {language === "en" ? "Explore" : "Разгледайте"}
          </a>
        </li>
        <li className="mb-4">
          <h4>{language === "en" ? "Supplements" : "Добавки"}</h4>
          <p>
            {language === "en"
              ? "Support your workouts with high-quality supplements."
              : "Подкрепете тренировките си с висококачествени добавки."}
          </p>
          <a className="btn btn-primary" href="/products/supplements">
            {language === "en" ? "Explore" : "Разгледайте"}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProductDescription;
