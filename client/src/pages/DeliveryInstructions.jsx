// DeliveryInstructions.jsx
import { Container } from "react-bootstrap";
import { useLanguage } from "../context/useLanguage";

function DeliveryInstructions() {
  const { language, translations } = useLanguage();

  return (
    <Container className="my-4">
      <h5 className="text-success">
        {translations[language].deliveryInstructions.deliveryTermsTitle}
      </h5>
      <p>{translations[language].deliveryInstructions.descriptionDelivery1}</p>
      <p>{translations[language].deliveryInstructions.descriptionDelivery2}</p>
      <p>{translations[language].deliveryInstructions.descriptionDelivery3}</p>
    </Container>
  );
}

export default DeliveryInstructions;
