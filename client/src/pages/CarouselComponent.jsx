
import styles from "./Carousel.module.css"; 
import { useLanguage } from "../context/useLanguage";

function CarouselComponent() {
  const { language } = useLanguage();

  const slides = [
    {
      image: "https://i.imgur.com/kHLUDfd.jpg",
      title:
        language === "en" ? "Welcome to ShopEase!" : "Добре дошли в ShopEase!",
      description:
        language === "en"
          ? "Discover your strength with our amazing fitness products!"
          : "Открий своята сила с нашите страхотни фитнес продукти!",
    },
    {
      image: "https://i.imgur.com/VHgJGkF.jpg",
      title:
        language === "en"
          ? "Elevate Your Workout!"
          : "Подобрете тренировката си!",
      description:
        language === "en"
          ? "Shop now and get 20% off!"
          : "Пазарувайте сега и получете 20% отстъпка!",
    },
    {
      image: "https://i.imgur.com/W9yloIv.jpg",
      title:
        language === "en"
          ? "Join the Fitness Revolution!"
          : "Присъединете се към фитнес революцията!",
      description:
        language === "en"
          ? "Explore our latest arrivals!"
          : "Разгледайте нашите последни пристигания!",
    },
    {
      image: "https://i.imgur.com/j1ivDQd.jpg",
      title:
        language === "en" ? "Achieve Your Goals!" : "Постигнете целите си!",
      description:
        language === "en"
          ? "Start your journey with us today!"
          : "Започнете своето пътуване с нас днес!",
    },
  ];

  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="4000"
      >
        <div className={`carousel-inner ${styles.carouselInner}`}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={slide.image}
                className={styles.carouselImage}
                alt={`Slide ${index + 1}`}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>{slide.title}</h5>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">
            {language === "en" ? "Previous" : "Предишен"}
          </span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">
            {language === "en" ? "Next" : "Следващ"}
          </span>
        </button>
      </div>
    </div>
  );
}

export default CarouselComponent;
