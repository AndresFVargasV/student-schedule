import "./assets/css/App.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import QuestionForm from "./components/QuestionForm";
import Hero from "./components/Hero";
import Navegation from "./components/Navegation";

function App() {
  return (
    <>
      <Navegation />
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
