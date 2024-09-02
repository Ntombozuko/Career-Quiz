import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-3 text-center">
      <Container>
        <Row>
          <Col>
            <p className="mb-0">
              &copy; Copyright 2024 Pranary Business School. All Rights
              Reserved.
            </p>
          </Col>
          <Col>
            <p className="mb-0">Designed by Deviare Interns</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
