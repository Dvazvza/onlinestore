import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import './auth.css'; // استيراد ملف التنسيق

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null); // حالة لتخزين الرسالة
  const [variant, setVariant] = useState("danger"); // لون الرسالة

  const handleSubmit = async (e) => {
    e.preventDefault();

    // التحقق من أن كلمتي المرور متطابقتان
    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      setVariant("danger");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, confirmPassword }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setVariant("success");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } else {
        setMessage(data.message || "Something went wrong!");
        setVariant("danger");
      }
    } catch (error) {
      setMessage("Server error! Please try again.");
      setVariant("danger");
    }
  };

  return (
    <Container className="auth-container">
      <h2>Sign Up</h2>

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

        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>

      <p className="link">
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </Container>
  );
};

export default SignUp;
