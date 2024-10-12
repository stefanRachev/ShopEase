// SportGrid.jsx
// import { Card, Row, Col } from "react-bootstrap";
// import styles from "./SportGrid.module.css";

// function SportGrid() {
//   const sports = [
//     {
//       name: "Boxing",
//       image: "https://i.imgur.com/XpjouuA.jpg",
//       link: "/sports/boxing",
//     },
//     {
//       name: "Yoga",
//       image: "https://i.imgur.com/7xdqVAc.jpg",
//       link: "/sports/yoga",
//     },
//     {
//       name: "CrossFit",
//       image: "https://i.imgur.com/LCP7znY.jpg",
//       link: "/sports/crossFit",
//     },
//     // Добави още спортове тук
//   ];

//   return (
//     <Row className="g-4">
//       {sports.map((sport, index) => (
//         <Col key={index} md={4} sm={6}>
//           <a href={sport.link} className={styles.sportCard}>
//             <Card className={styles.hoverCard}>
//               <div className={styles.imageWrapper}>
//                 <Card.Img variant="top" src={sport.image} alt={sport.name} />
//               </div>
//               <Card.Body>
//                 <Card.Title className={styles.cardTitle}>{sport.name}</Card.Title>
//               </Card.Body>
//             </Card>
//           </a>
//         </Col>
//       ))}
//     </Row>
//   );
// }

// export default SportGrid;

import { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import styles from "./SportGrid.module.css";

function SportGrid() {
  const [activeCard, setActiveCard] = useState(null);

  const sports = [
    {
      name: "Boxing",
      image: "https://i.imgur.com/XpjouuA.jpg",
      link: "/sports/boxing",
    },
    {
      name: "Yoga",
      image: "https://i.imgur.com/7xdqVAc.jpg",
      link: "/sports/yoga",
    },
    {
      name: "CrossFit",
      image: "https://i.imgur.com/LCP7znY.jpg",
      link: "/sports/crossFit",
    },
    // Добави още спортове тук
  ];

  const handleTouchStart = (index) => {
    setActiveCard(index);
  };

  return (
    <Row className="g-4">
      {sports.map((sport, index) => (
        <Col key={index} md={4} sm={6} xs={12}>
          <a href={sport.link} className={styles.sportCard}>
            <Card
              className={`m-2 ${styles.hoverCard} ${
                activeCard === index ? styles.activeCard : ""
              }`}
              onTouchStart={() => handleTouchStart(index)}
            >
              <div className={styles.imageWrapper}>
                <Card.Img variant="top" src={sport.image} alt={sport.name} className="img-fluid"/>
              </div>
              <Card.Body>
                <Card.Title className={styles.cardTitle}>
                  {sport.name}
                </Card.Title>
              </Card.Body>
            </Card>
          </a>
        </Col>
      ))}
    </Row>
  );
}

export default SportGrid;
