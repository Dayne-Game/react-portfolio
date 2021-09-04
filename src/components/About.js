import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import DetailMultiple from "./details/DetailMultiple";

const About = () => {
  return (
    <section id="about" className="vh100" style={{ background: "#f4f4f4" }}>
      <Container style={{ paddingTop: "100px" }}>
        <Row>
          <Col md={3} sm={12}>
            <Card style={{ background: "#fff" }}>
              <Card.Body className="text-center">
                <div className="profile-image"></div>
                <div className="text-center mt-4">
                  <h5>Dayne Game</h5>
                  <p>20 Years Old</p>
                  <p style={{ color: "#bbb", marginBottom: "2px" }}>Current Job</p>
                  <p style={{ marginBottom: "1px" }}>Class 2 Supervisor</p>
                  <p>Seeka Limited</p>
                </div>
              </Card.Body>
              <Card.Footer>
                <h4 className="text-center">Junior Developer</h4>
              </Card.Footer>
            </Card>
          </Col>
          <Col md={9} sm={12}>
            <DetailMultiple />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
