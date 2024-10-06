import { useState, useContext } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useLanguage } from "../context/useLanguage";

const apiUrl = import.meta.env.VITE_API_URL;

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    try {
      const response = await fetch(apiUrl + "/login", {
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
        });
        navigate("/");
      } else {
        setError(data.message || translations[language].loginFailed);
      }
    } catch (error) {
      setError(translations[language].errorOccurred + error.message);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center mb-4">{translations[language].login}</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>{translations[language].email}</Form.Label>
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
              <Form.Label>{translations[language].password}</Form.Label>
              <Form.Control
                type="password"
                placeholder={translations[language].password}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              {translations[language].login}
            </Button>
          </Form>
          <p className="mt-3">
            {translations[language].noAccount}{" "}
            <Link to="/register">{translations[language].registerHere}</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
