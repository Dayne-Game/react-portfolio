import React, { Fragment } from "react";
import { Table, Card } from "react-bootstrap";

const Overview = () => {
  return (
    <Fragment>
      <Card className="mb-3">
        <Card.Header>
          <h4>About</h4>
        </Card.Header>
        <Card.Body>
          <p>
            Hello. I’m Dayne (aka Dano). I moved down to Tauranga from Auckland in late 2016, with my Family, happily residing in Papamoa Beach. I dropped out of high school at age 15, to pursue a career in computer science. 2020 passed by and now I have my Bachelor’s in Applied Information
            technology by the age of 19. I have done various projects for tech, and for personal use, and always willing to learn the next big thing. I have used various types of technologies from basic HTML & CSS websites to Full Stack MERN Applications, that I’m very proud of! You can view 3 of my
            projects that im very proud of in the Projects Section.
          </p>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>
          <h4>Qualifications</h4>
        </Card.Header>
        <Card.Body>
          <Table striped bordered>
            <thead>
              <tr>
                <th>Qualification</th>
                <th>Date Started</th>
                <th>Date Recieved</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bachelor in Applied Information Technology</td>
                <td>Jul 2019</td>
                <td>Jun 2020</td>
              </tr>
              <tr>
                <td>Diploma in Software Development</td>
                <td>Jul 2019</td>
                <td>Jun 2020</td>
              </tr>
              <tr>
                <td>Diploma in Web Development and Design</td>
                <td>Jun 2018</td>
                <td>Jun 2019</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default Overview;
