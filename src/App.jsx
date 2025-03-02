import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Form, Button, Card } from "react-bootstrap";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [calculateValue, setCalculateValue] = useState(null);
  const [category, setCategory] = useState("");

  const inputHeight = (e) => {
    setHeight(e.target.value);
  };

  const inputWeight = (e) => {
    setWeight(e.target.value);
  };

  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight && height) {
      const cmHeight = height / 100;
      const bmi = (weight / (cmHeight * cmHeight)).toFixed(1);
      setCalculateValue(bmi);
      setCategory(getCategory(bmi));
    } else {
      alert("Please fill in all input fields.");
    }
    setWeight("");
    setHeight("");
  };

  const getCategory = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi >= 18.5 && bmi < 24.9) return "Normal weight";
    if (bmi >= 25 && bmi < 29.9) return "Overweight";
    return "Obese";
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "#f0f8ff" }}>
      <Card className="shadow-lg p-4 text-center" style={{ width: "400px", borderRadius: "15px", background: "linear-gradient(to bottom, #ffffff, #89CFF0)" }}>
        <Card.Body>
          <Card.Title className="text-primary fw-bold fs-3">BMI Calculator</Card.Title>
          <Form className="mt-3">
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold text-dark">Enter your weight (kg)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter weight in kg"
                onChange={inputWeight}
                value={weight}
                className="text-center"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold text-dark">Enter your height (cm)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter height in cm"
                onChange={inputHeight}
                value={height}
                className="text-center"
              />
            </Form.Group>
            <Button variant="primary" className="w-100" onClick={calculateBMI}>Calculate BMI</Button>
          </Form>

          {calculateValue && (
            <div className="mt-4 p-3 bg-light rounded shadow-sm">
              <h5 className="text-primary">BMI Value: {calculateValue}</h5>
              <h5 className="text-primary">Category: {category}</h5>
            </div>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
