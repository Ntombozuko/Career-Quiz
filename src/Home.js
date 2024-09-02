import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container className="mt-4 p-4 bg-light rounded">
      <h1>Welcome to the Quiz Application!</h1>
      <p>
        Explore your career interests with our interactive quizzes and detailed
        dashboard.
      </p>
      <Button variant="primary" as={Link} to="/quiz">
        Start the Quiz
      </Button>
    </Container>
  );
};

export default Home;
