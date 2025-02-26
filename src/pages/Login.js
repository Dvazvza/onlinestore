import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import './auth.css'; // استيراد ملف التنسيق

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [variant, setVariant] = useState("danger");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Login successful!");
        setVariant("success");
        navigate("/shop");

        // حفظ التوكن في localStorage (إذا كان عندك JWT)
        localStorage.setItem("user", JSON.stringify(data));

        // توجيه المستخدم إلى الصفحة الرئيسية بعد نجاح تسجيل الدخول
        setTimeout(() => {
          
        }, 1000);
      } else {
        setMessage(data.message || "Invalid email or password");
        setVariant("danger");
      }
    } catch (error) {
      setMessage("Server error! Please try again.");
      setVariant("danger");
    }
  };

  return (
    <Container className="auth-container">
      <h2>Login</h2>

      {message && <Alert variant={variant}>{message}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>

      <p className="link">
        Don't have an account? <Link to="/signup">Sign up here</Link>
      </p>
    </Container>
  );
};

export default Login;
