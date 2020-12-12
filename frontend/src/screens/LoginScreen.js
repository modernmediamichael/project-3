import React, { useState } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "react-bootstrap";

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logIn = async () => {
    if (!email) {
      alert("Please enter your email address");
    } else if (!password) {
      alert("Please enter your account password");
    } else {
      try {
        const response = await API.logIn(email, password);
        props.onLogIn(response.data);
      } catch (error) {
        alert("Invalid credentials!");
      }
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Sign In</h1>
          <label>Email Address:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br></br>
          <label>Password:</label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
          />
          <button onClick={logIn}>Log in</button>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginScreen;
