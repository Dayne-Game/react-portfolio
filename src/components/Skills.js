import React from "react";
import { Col, Container } from "react-bootstrap";

const Skills = () => {
  return (
    <section id="skills" className="vh100">
      <Container style={{ paddingTop: "100px" }}>
        <h1 className="display-3 fw-bolder mb-3">
          <span style={{ background: "#f4f4f4" }}>Skills</span>
        </h1>
        <Col md={7} sm={12}>
          <p>
            While I was studying, I was always learning new skills, whether that as a new language, framework, or even trying to find a more efficient way to code, I was always learning which I’m still doing to this day. Keeping the mind active, is very good thing, I built various of mini
            projects/applications while studying and even now.
          </p>
        </Col>
        <Col md={6} sm={12}>
          <h3>My Skills Graph</h3>
          <div className="skill-graph">
            <div className="skills-container">
              <div className="skills html">
                <span className="skill-background">HTML</span> <span className="percent">70%</span>
              </div>
            </div>
            <div className="skills-container">
              <div className="skills css">
                <span className="skill-background">CSS</span> <span className="percent">65%</span>
              </div>
            </div>
            <div className="skills-container">
              <div className="skills js">
                <span className="skill-background">JS</span> <span className="percent">60%</span>
              </div>
            </div>
            <div className="skills-container">
              <div className="skills react">
                <span className="skill-background">React</span> <span className="percent">60%</span>
              </div>
            </div>
            <div className="skills-container">
              <div className="skills c-sharp">
                <span className="skill-background">C#</span> <span className="percent">30%</span>
              </div>
            </div>
            <div className="skills-container">
              <div className="skills php">
                <span className="skill-background">PHP</span> <span className="percent">40%</span>
              </div>
            </div>
          </div>
        </Col>
      </Container>
    </section>
  );
};

export default Skills;
