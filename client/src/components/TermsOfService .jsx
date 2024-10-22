import { Container, Row, Col } from "react-bootstrap";
import { useLanguage } from "../context/useLanguage";

function TermsOfService() {
  const { language, translations } = useLanguage();

  return (
    <Container className="my-4 bg-light p-4 rounded">
      <Row>
        <Col>
          <h1 className="text-center mb-4">
            {translations[language].termsOfService.titleTerms}
          </h1>
          <p>{translations[language].termsOfService.descriptionTitle}</p>
          <h2 className="mt-4">
            {translations[language].termsOfService.acceptanceTitle}
          </h2>
          <p>{translations[language].termsOfService.acceptanceDescription}</p>
          <h2 className="mt-4">
            {translations[language].termsOfService.userRightsTitle}
          </h2>
          <p>{translations[language].termsOfService.userRightsDescription}</p>
          <h2 className="mt-4">
            {translations[language].termsOfService.intellectualPropertyTitle}
          </h2>
          <p>
            {
              translations[language].termsOfService
                .intellectualPropertyDescription
            }
          </p>
          <h2 className="mt-4">
            {translations[language].termsOfService.liabilityTitle}
          </h2>
          <p>{translations[language].termsOfService.liabilityDescription}</p>
          <h2 className="mt-4">
            {translations[language].termsOfService.changesTitle}
          </h2>
          <p>{translations[language].termsOfService.changesDescription}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default TermsOfService;
