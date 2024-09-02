import React, { useState } from "react";
import { Container, Button, Card, Form } from "react-bootstrap";

const Quiz = () => {
  const questions = [
    {
      question: "Which activities do you enjoy the most?",
      options: [
        "Solving puzzles and logical problems.",
        "Creating and designing new things.",
        "Analyzing data and trends.",
        "Working with technology and computers.",
        "Learning about new scientific discoveries.",
        "Leading and managing projects.",
      ],
    },
    {
      question: "What subjects do you excel in?",
      options: [
        "Mathematics",
        "Science (Physics, Chemistry, Biology)",
        "Computer Science",
        "Business Studies",
        "Environmental Science",
        "Arts and Humanities",
      ],
    },
    {
      question: "Which statement best describes you?",
      options: [
        "I enjoy working with numbers and data.",
        "I am creative and enjoy designing things.",
        "I am interested in how things work and how to improve them.",
        "I enjoy leading teams and organizing projects.",
        "I am passionate about sustainability and the environment.",
        "I am curious about new technologies and their applications.",
      ],
    },
    {
      question: "How do you prefer to work?",
      options: [
        "Independently on tasks and projects.",
        "Collaboratively in teams.",
        "Leading and managing others.",
        "Researching and discovering new information.",
        "Solving complex problems.",
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [userInfo, setUserInfo] = useState({ whatsapp: "", email: "" });

  const handleAnswerOptionClick = (answer) => {
    setAnswers([...answers, answer]);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://xyqtycpk7a.execute-api.us-west-2.amazonaws.com/dev",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ answers, userInfo }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Success:", data);
      alert(
        "Thank you! Your personalized recommendations have been generated."
      );
    } catch (error) {
      console.error("Error submitting quiz:", error.message);
      alert("There was an error submitting your quiz. Please try again.");
    }
  };

  return (
    <Container className="mt-4">
      {!isQuizCompleted ? (
        <Card>
          <Card.Body>
            <Card.Title>Career Quiz</Card.Title>
            <Card.Text>{questions[currentQuestion].question}</Card.Text>
            <div>
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant="primary"
                  className="m-2"
                  onClick={() => handleAnswerOptionClick(option)}
                >
                  {option}
                </Button>
              ))}
            </div>
          </Card.Body>
        </Card>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formWhatsapp">
            <Form.Label>WhatsApp Number</Form.Label>
            <Form.Control
              type="text"
              name="whatsapp"
              value={userInfo.whatsapp}
              onChange={handleInputChange}
              placeholder="Enter your WhatsApp number"
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mt-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              placeholder="Enter your email address"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>
      )}
    </Container>
  );
};

export default Quiz;
