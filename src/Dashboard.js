import React from "react";
import { Container, Card } from "react-bootstrap";

const Dashboard = () => {
  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>Dashboard</Card.Title>
          <Card.Text>
            Here you can view your quiz results and statistics.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Dashboard;
