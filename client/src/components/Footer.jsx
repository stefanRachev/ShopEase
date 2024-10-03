import classNames from "classnames";
import styles from "./Footer.module.css";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer
    className={classNames("bg-dark", "mt-5", "p-3", "text-center", styles.footer)}
    >
      <Container>
        <p>© 2024 ShopEase. All Rights Reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
