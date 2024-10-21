// DeliveryInstructions.jsx
import { Container } from "react-bootstrap";

function DeliveryInstructions() {
  return (
    <Container className="my-4">
      <h5 className="text-success">Условия за доставка</h5>
      <p>
        Благодарим Ви, че избрахте нашите услуги! Вашата поръчка ще бъде
        доставена в рамките на 3-5 работни дни.
      </p>
      <p>
        Моля, уверете се, че предоставените от вас адрес и информация за контакт
        са верни, за да избегнете забавяне на доставката.
      </p>
      <p>
        При въпроси относно доставката, моля, свържете се с нашия екип за
        поддръжка.
      </p>
    </Container>
  );
}

export default DeliveryInstructions;
