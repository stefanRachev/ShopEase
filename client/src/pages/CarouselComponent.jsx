import styles from "./Carousel.module.css";
import { useLanguage } from "../context/useLanguage";

function CarouselComponent() {
  const { language, translations } = useLanguage();

  const slides = [
    {
      image: "https://i.imgur.com/kHLUDfd.jpg",
      title: translations[language].welcome,
      description: translations[language].slogan,
    },
    {
      image: "https://i.imgur.com/VHgJGkF.jpg",
      title: translations[language].elevate,
      description: translations[language].shopNow,
    },
    {
      image: "https://i.imgur.com/W9yloIv.jpg",
      title: translations[language].join,
      description: translations[language].explore,
    },
    {
      image: "https://i.imgur.com/j1ivDQd.jpg",
      title: translations[language].achieve,
      description: translations[language].startJourney,
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
              {/* carousel-caption d-none d-md-block */}
              <div
                className={`carousel-caption d-block ${styles.carouselCaption}`}
              >
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
