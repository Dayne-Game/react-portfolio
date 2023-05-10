import React from 'react'
import { Col, Container, Form, Button, Row } from 'react-bootstrap'

const Contact = () => {
const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
      return Object.keys(data).map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&")
  }

  function handleSubmit(e) {
      e.preventDefault();
      fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", name, email, message }),
      }).then(() => alert("Message Sent!")).catch((error) => alert(error))
  }

    return (
        <section id="contact" className="vh100">
            <Container style={{ paddingTop: '100px' }}>
                <h1 className="display-3 fw-bolder mb-3"><span style={{ background: '#f4f4f4' }}>Contact</span></h1>
                <Row>
                    <Col md={5} sm={12}>
                    <div className="paragraph">
        <p>Thank you for going through my website! This website is for ever updating (changing it to Gatsby is the next update!)</p>
        <p>Want to get a hold of me? View my Github and Social Media? No problem.</p>
        <h3 style={{marginBottom: '10px'}}>
          <span className="text-background"><a href="https://github.com/Dayne-Game" rel="noreferrer" target="_blank" style={{ color: '#333' }}>My Github</a></span>
        </h3>
        <h3 style={{marginBottom: '10px'}}>
          <span className="text-background"><a href="https://twitter.com/Dano_Gamo" rel="noreferrer" target="_blank" style={{ color: '#333' }}>Twitter</a></span>
        </h3>
        <h3>
          <span className="text-background"><a href="https://www.facebook.com/DanoGamo" rel="noreferrer" target="_blank" style={{ color: '#333' }}>Facebook</a></span>
        </h3>
      </div>
                </Col>
                <Col md={5} sm={12}>
                    <Form netlfiy name="contact" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label htmlFor="name">Name</Form.Label>
                            <Form.Control type="text" id="name" name="name" placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label htmlFor="email">Email address</Form.Label>
                            <Form.Control type="email" id="email" name="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea" rows={3} onChange={(e) => setMessage(e.target.value)}/>
                        </Form.Group>
                        <Button variant="secondary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact
