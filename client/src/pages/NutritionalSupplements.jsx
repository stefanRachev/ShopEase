
import { useLanguage } from "../context/useLanguage";
import { Link } from "react-router-dom";
import Slider from "react-slick"; 
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
    
  ];

  
  const sliderSettings = {
    dots: false, 
    infinite: true,
    speed: 2000, 
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
    cssEase: "linear", 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, 
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
