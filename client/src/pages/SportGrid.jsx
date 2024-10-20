// SportGrid.jsx

import { useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import styles from "./SportGrid.module.css";
import { useLanguage } from "../context/useLanguage";

function SportGrid() {
  const [activeCard, setActiveCard] = useState(null);
  const { language, translations } = useLanguage();

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
      link: "/sports/cross-fit",
    },
    {
      name: "Swimming",
      image: "https://i.imgur.com/OYoDbhQ.jpg",
      link: "/sports/swimming",
    },
    {
      name: "MMA",
      image: "https://i.imgur.com/W6raofK.jpg",
      link: "/sports/mma",
    },
    {
      name: "Kickboxing",
      image: "https://i.imgur.com/eEyP95l.jpg",
      link: "/sports/kick-boxing",
    },
  ];

  const handleTouchStart = (index) => {
    setActiveCard(index);
  };

  return (
    <Container>
      <Row className="g-4">
        <Col xs={12} className="text-center mb-4">
          <h1 className="text-warning fw-bold">
            {translations[language].sportTitle1}
          </h1>
          <p className="text-secondary fs-5">
            {translations[language].sportTitle2}
          </p>
        </Col>

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
                  <Card.Img
                    variant="top"
                    src={sport.image}
                    alt={sport.name}
                    className="img-fluid"
                  />
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
    </Container>
  );
}

export default SportGrid;
