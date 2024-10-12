//import styles from "./SportGrid.module.css";

import { Card, Row, Col } from "react-bootstrap";

function SportGrid() {
  const sports = [
    {
      name: "Boxing",
      image: "/images/boxing.jpg", // Задай правилните пътища към изображенията
      link: "/sports/boxing",
    },
    {
      name: "Yoga",
      image: "/images/yoga.jpg",
      link: "/sports/yoga",
    },
    {
      name: "CrossFit",
      image: "/images/crossfit.jpg",
      link: "/sports/crossfit",
    },
    // Добави още спортове тук
  ];
  return (
    <Row className="g-4 sport-grid">
      {sports.map((sport, index) => (
        <Col key={index} md={4} sm={6}>
          <a href={sport.link} className="sport-card">
            <Card className="hover-card">
              <div className="image-wrapper">
                <Card.Img variant="top" src={sport.image} alt={sport.name} />
              </div>
              <Card.Body>
                <Card.Title>{sport.name}</Card.Title>
              </Card.Body>
            </Card>
          </a>
        </Col>
      ))}
    </Row>
  );
}

export default SportGrid;
