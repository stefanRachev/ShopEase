import styles from './Carousel.module.css';
import { useLanguage } from "../context/useLanguage";

function CarouselComponent(){

    const { language } = useLanguage();
    return(
        <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="4000"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://i.imgur.com/Fo1Dgmq.jpg"
                className={`d-block w-100 ${styles.carouselImage}`} 
                alt="First slide"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>
                  {language === "en"
                    ? "Welcome to ShopEase!"
                    : "Добре дошли в ShopEase!"}
                </h5>
                <p>
                  {language === "en"
                    ? "Discover your strength with our amazing fitness products!"
                    : "Открий своята сила с нашите страхотни фитнес продукти!"}
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://i.imgur.com/mSaNqjc.jpg"
                className={`d-block w-100 ${styles.carouselImage}`} 
                alt="Second slide"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>
                  {language === "en"
                    ? "Elevate Your Workout!"
                    : "Подобрете тренировката си!"}
                </h5>
                <p>
                  {language === "en"
                    ? "Shop now and get 20% off!"
                    : "Пазарувайте сега и получете 20% отстъпка!"}
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://i.imgur.com/N9KGdhE.jpg"
                className={`d-block w-100 ${styles.carouselImage}`} 
                alt="Third slide"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>
                  {language === "en"
                    ? "Join the Fitness Revolution!"
                    : "Присъединете се към фитнес революцията!"}
                </h5>
                <p>
                  {language === "en"
                    ? "Explore our latest arrivals!"
                    : "Разгледайте нашите последни пристигания!"}
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://i.imgur.com/KgLd8Sz.jpg"
                className={`d-block w-100 ${styles.carouselImage}`} 
                alt="Fourth slide"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>
                  {language === "en"
                    ? "Achieve Your Goals!"
                    : "Постигнете целите си!"}
                </h5>
                <p>
                  {language === "en"
                    ? "Start your journey with us today!"
                    : "Започнете своето пътуване с нас днес!"}
                </p>
              </div>
            </div>
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
  
        {/* Останалата част от страницата */}
      </div>
    )
}


export default CarouselComponent