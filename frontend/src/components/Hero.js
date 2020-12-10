import React from "react";
import { Jumbotron, Button, Container } from "react-bootstrap";

const Hero = () => {
  return (
    <Jumbotron className="hero-section">
      <Container>
        <h1 className="hero-section__header">Welcome to our eCommerce Store</h1>
        <p>
          This is an online catalog where you can save products and view exclusive wholesale pricing.
        </p>
        <p>
          <a to='/login'>
            <Button variant="primary">Login</Button>
          </a>
        </p>
      </Container>
    </Jumbotron>
  );
};

export default Hero;