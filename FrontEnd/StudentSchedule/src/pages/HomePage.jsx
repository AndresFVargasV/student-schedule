import Container from "react-bootstrap/esm/Container";
import Hero from "../components/Hero";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import QuestionForm from "../components/QuestionForm";

function HomePage() {
  return (
    <>
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

export default HomePage;
