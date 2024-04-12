import "./assets/css/App.css";
import Navbar from "./components/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import QuestionForm from "./components/QuestionForm";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Container>
        <Row>
          <Col>
            <QuestionForm />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
