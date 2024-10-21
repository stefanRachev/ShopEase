import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark p-3 text-center">
      <Container>
        <p className="text-light mb-0">© 2024 ShopEase. All Rights Reserved.</p>

        <p className="text-light mb-0">
          Contact us:{" "}
          <a href="mailto:starfystef@gmail.com" className="text-light">
            starfystef@gmail.com
          </a>
        </p>

        <div className="social-links text-light mb-0">
          <a
            href="https://www.linkedin.com/in/stefan-rachev-38040428b/"
            className="text-light"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          {" | "}
          <a
            href="https://stefan-works.web.app/"
            className="text-light"
            target="_blank"
            rel="noopener noreferrer"
          >
            My personal page
          </a>
        </div>

        <div className="footer-links text-light mb-0">
          <a href="/privacy-policy" className="text-light">
            Privacy Policy
          </a>
          {" | "}
          <a href="/terms-of-service" className="text-light">
            Terms of Service
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
