
import { useLanguage } from "../context/useLanguage";
import { Link } from "react-router-dom";
import Slider from "react-slick"; // Импортираме Slider от react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NutritionalSupplements() {
  const { language, translations } = useLanguage();
  const products = [
    {
      id: 1,
      name: translations[language].protein,
      description: translations[language].descriptionProtein,
      image: "https://i.imgur.com/rYJaSfB.jpg",
      link: "/proteins",
    },
    {
      id: 2,
      name: translations[language].barbells,
      description: translations[language].descriptionBarbells,
      image: "https://i.imgur.com/Rp0z1Kn.jpg",
      link: "/barbells",
    },
    {
      id: 3,
      name: translations[language].barbellDiscs,
      description: translations[language].descriptionBarbellDiscs,
      image: "https://i.imgur.com/idpp3Bb.jpg",
      link: "/weight-plates",
    },
    {
      id: 4,
      name: translations[language].barbellDiscs,
      description: translations[language].descriptionBarbellDiscs,
      image: "https://i.imgur.com/HpibGkT.jpg",
      link: "/weight-plates",
    },
    // Добави още продукти, ако желаеш
  ];

  // Настройки за слайдера
  const sliderSettings = {
    dots: false, // Не показва точки
    infinite: true,
    speed: 2000, // Скорост на плъзгане
    slidesToShow: 3, // Показва 3 продукта едновременно
    slidesToScroll: 1,
    autoplay: true, // Автоматично плъзгане
    autoplaySpeed: 3000, // Интервал на плъзгане
    cssEase: "linear", // Плавно преливане
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Показва 2 продукта на таблети
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Показва 1 продукт на телефони
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">{translations[language].weights}</h1>
      <Slider {...sliderSettings}>
        {products.map((product) => (
          <div key={product.id} className="p-2">
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
      </Slider>
    </div>
  );
}

export default NutritionalSupplements;
