import React from "react";
import { Jumbotron, Button, Container } from "react-bootstrap";
import { Link } from 'react-router-dom'
import LoginScreen from '../screens/LoginScreen'

const Hero = () => {
  return (
    <Jumbotron className="hero-section">
      <Container>
        <h1 className="hero-section__header">Welcome to our eCommerce Store</h1>
        <p>
          This is an online catalog where you can save products and view exclusive wholesale pricing.
        </p>
        <p>
          <Link to={LoginScreen}>
            <Button variant="primary">Login</Button>
          </Link>
        </p>
      </Container>
    </Jumbotron>
  );
};

export default Hero;
