import { Container, Row, Col } from "react-bootstrap";
import { useLanguage } from "../context/useLanguage";

function PrivacyPolicy() {
  const { language, translations } = useLanguage();

  return (
    <Container className="my-4 bg-light p-4 rounded">
      <Row>
        <Col>
          <h1 className="text-center mb-4">
            {translations[language].privacyPolicy.titlePolicy}
          </h1>
          <p>{translations[language].privacyPolicy.descriptionPolicy}</p>
          <h2 className="mt-4">
            {translations[language].privacyPolicy.dataCollectionTitle}
          </h2>
          <p>
            {translations[language].privacyPolicy.dataCollectionDescription}
          </p>
          <h2 className="mt-4">
            {translations[language].privacyPolicy.dataUsageTitle}
          </h2>
          <p>{translations[language].privacyPolicy.dataUsageDescription}</p>
          <h2 className="mt-4">
            {translations[language].privacyPolicy.dataSharingTitle}
          </h2>
          <p>{translations[language].privacyPolicy.dataSharingDescription}</p>
          <h2 className="mt-4">
            {translations[language].privacyPolicy.dataProtectionTitle}
          </h2>
          <p>
            {translations[language].privacyPolicy.dataProtectionDescription}
          </p>
          <h2 className="mt-4">
            {translations[language].privacyPolicy.userRightsTitle}
          </h2>
          <p>{translations[language].privacyPolicy.userRightsDescription}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default PrivacyPolicy;
