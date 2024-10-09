// import { useLanguage } from "../context/useLanguage";
// import { Link } from "react-router-dom";
// import { Carousel } from "react-bootstrap";

// function NutritionalSupplements() {
//   const { language, translations } = useLanguage();
//   const products = [
//     {
//       id: 1,
//       name: translations[language].proteins,
//       description: translations[language].descriptionProtein,
//       image: "https://i.imgur.com/rYJaSfB.jpg",
//       link: "/proteins",
//     },
//     {
//       id: 2,
//       name: translations[language].barbells,
//       description: translations[language].descriptionBarbells,
//       image: "https://i.imgur.com/Rp0z1Kn.jpg",
//       link: "/barbells",
//     },
//     {
//       id: 3,
//       name: translations[language].barbellDiscs,
//       description: translations[language].descriptionBarbellDiscs,
//       image: "https://i.imgur.com/idpp3Bb.jpg",
//       link: "/weight-plates",
//     },
//   ];

//   return (
//     <div className="container mt-5">
//       <h1 className="text-center mb-4">{translations[language].weights}</h1>
//       <Carousel>
//         {products.map((product) => (
//           <Carousel.Item key={product.id}>
//             <div className="row">
//               <div className="col">
//                 <img
//                   src={product.image}
//                   className="d-block w-100"
//                   alt={product.name}
//                 />
//                 <Carousel.Caption>
//                   <h5>{product.name}</h5>
//                   <p>{product.description}</p>
//                   <Link to={product.link} className="btn btn-primary">
//                     {translations[language].takeALook} {product.name}
//                   </Link>
//                 </Carousel.Caption>
//               </div>
//             </div>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </div>
//   );
// }

// export default NutritionalSupplements;
//----------------------------------------------------------------
// import { useLanguage } from "../context/useLanguage";
// import { Link } from "react-router-dom";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// function NutritionalSupplements() {
//   const { language, translations } = useLanguage();
//   const products = [
//     {
//       id: 1,
//       name: translations[language].proteins,
//       description: translations[language].descriptionProtein,
//       image: "https://i.imgur.com/rYJaSfB.jpg",
//       link: "/proteins",
//     },
//     {
//       id: 2,
//       name: translations[language].barbells,
//       description: translations[language].descriptionBarbells,
//       image: "https://i.imgur.com/Rp0z1Kn.jpg",
//       link: "/barbells",
//     },
//     {
//       id: 3,
//       name: translations[language].barbellDiscs,
//       description: translations[language].descriptionBarbellDiscs,
//       image: "https://i.imgur.com/idpp3Bb.jpg",
//       link: "/weight-plates",
//     },
//     // Добави още продукти, ако желаеш
//   ];

//   // Настройки за слайдера (можеш да ги променяш според нуждите)
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3, // Показва 3 продукта едновременно
//     slidesToScroll: 1, // Плъзга 1 продукт при всяко преминаване
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2, // На по-малки екрани показва 2 продукта
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1, // На още по-малки екрани показва 1 продукт
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="container mt-5">
//       <h1 className="text-center mb-4">{translations[language].weights}</h1>
//       <Slider {...sliderSettings}>
//         {products.map((product) => (
//           <div key={product.id} className="p-2">
//             <div className="card h-100">
//               <img
//                 src={product.image}
//                 className="card-img-top"
//                 alt={product.name}
//               />
//               <div className="card-body flex-grow-1">
//                 <h5 className="card-title">{product.name}</h5>
//                 <p className="card-text">{product.description}</p>
//               </div>
//               <div className="card-footer d-flex justify-content-center">
//                 <Link to={product.link} className="btn btn-primary w-100">
//                   {translations[language].takeALook} {product.name}
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default NutritionalSupplements;

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
