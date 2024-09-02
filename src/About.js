import React from "react";
import { Container, Card } from "react-bootstrap";

const About = () => {
  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>About Pranary Business School</Card.Title>
          <Card.Text>
            <strong>Pranary Business School</strong> is at the forefront of
            empowering African organizations and professionals by equipping them
            with crucial tech and business skills needed to thrive in a rapidly
            advancing world. We focus on practical, hands-on training to ensure
            our students and clients are prepared for the future of technology
            and business.
            <br />
            <br />
            <strong>Our Vision:</strong> To lead the transformation of business
            education and technological advancement in Africa, empowering
            individuals and organizations to excel in a global economy through
            innovative and practical learning experiences.
            <br />
            <br />
            <strong>Our Mission:</strong> To provide cutting-edge education and
            training in AI, technology, and business that directly addresses the
            needs of the African market. We aim to boost innovation, efficiency,
            and profitability for organizations, and to equip professionals with
            the skills needed to leverage technology for personal and
            organizational success.
            <br />
            <br />
            <strong>What We Offer:</strong>
            <ul>
              <li>
                <strong>AI Training:</strong> Enhance your skills with in-person
                and virtual training sessions on AI tools and applications.
              </li>
              <li>
                <strong>Future Tech Courses:</strong> Transform your career with
                courses in AI, data science, blockchain development, and
                cybersecurity.
              </li>
              <li>
                <strong>In-Person Events:</strong> Engage with experts and peers
                through events designed to expand your knowledge and network.
              </li>
            </ul>
            <br />
            <br />
            <strong>Why Choose Pranary?</strong>
            <ul>
              <li>Cutting-edge education delivered by expert practitioners.</li>
              <li>
                Practical training designed to meet tomorrow’s challenges.
              </li>
              <li>
                Tailored programs to boost innovation, efficiency, and
                profitability.
              </li>
              <li>
                Opportunities to harness AI and tech for competitive advantage.
              </li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default About;
