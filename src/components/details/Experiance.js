import React, { Fragment } from "react";
import { Card, Table, Button } from "react-bootstrap";

const Experiance = () => {
  return (
    <Fragment>
      <Card>
        <Card.Header>
          <h4>Work Experiance</h4>
        </Card.Header>
        <Card.Body>
          <Table striped bordered>
            <thead>
              <tr>
                <th>Job Description</th>
                <th>Company</th>
                <th>Start date</th>
                <th>End Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Web Developer & Designer</td>
                <td>Bay of Plenty Rugby</td>
                <td>Feb 2019</td>
                <td>Jun 2020</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      <Card className="mt-3">
        <Card.Header>
          <h4>Experiance Description</h4>
        </Card.Header>
        <Card.Body>
          <p>
            My job was to design and develop the website, which was to be designed using Adobe XD, and developed using Gatsby / React and Netlify CMS. During the development process, Bay of Plenty Rugby had decided to go down a different road, and so the website wasn’t needed anymore, so we stopped
            development.
          </p>
          <Button href="https://sad-nightingale-b0552e.netlify.app" target="_blank">
            Rugby 7s Website
          </Button>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default Experiance;
