import { useState, useContext } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useLanguage } from "../context/useLanguage";

const apiUrl = import.meta.env.VITE_API_URL;

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const { setUser, setToken } = useContext(UserContext);
  const { language, translations } = useLanguage();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError(translations[language].passwordMismatch);
      return;
    }

    if (formData.password.length < 6) {
      setError(translations[language].shortPassword);
      return;
    }

    try {
      const response = await fetch(apiUrl + "/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("tokenIssuedTime", Date.now());

        setUser(data.data.user);
        setToken(data.accessToken);

        setError("");
        setFormData({
          email: "",
          password: "",
          confirmPassword: "",
        });
        navigate("/");
      } else {
        setError(data.message || translations[language].registrationFailed);
      }
    } catch (error) {
      setError(translations[language].errorOccurred + error.message);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center mb-4">
            {translations[language].register}
          </h2>{" "}
          {error && <div className="alert alert-danger">{error}</div>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>{translations[language].email}</Form.Label>{" "}
              <Form.Control
                type="email"
                placeholder={translations[language].enterEmail}
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>{translations[language].password}</Form.Label>{" "}
              <Form.Control
                type="password"
                placeholder={translations[language].password}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>{translations[language].confirmPassword}</Form.Label>{" "}
              <Form.Control
                type="password"
                placeholder={translations[language].confirmPassword}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              {translations[language].register}{" "}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
