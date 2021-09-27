import React, { Fragment } from "react";
import { Col, Button, Image } from "react-bootstrap";

const BlogWebsite = () => {
  return (
    <Fragment>
      <Col md={6} sm={12}>
        <p>
          Blog Website is a website that I created using the MERN Stack. It
          allows people to sign up and login to create posts/blogs for everyone
          to read. This website has user authentication, common GET, POST,
          DELETE, PUT requests, and sends and receives information from the
          remote MongoDB Database.
        </p>
        <hr />
        <p>
          This websites shows that I am capable of creating Full Stack MERN
          Applications, from a small idea, all the way to a full application for
          users to use. Click the link below to use the website, and create an
          account and start creating posts!
        </p>
        <Button
          href="https://daynegamewebsiteblog24.herokuapp.com/"
          target="_blank"
        >
          View Website
        </Button>
        <Col md={7} sm={12} className="mt-2">
          <Image
            src="./blog.png"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 5px",
              border: "1px solid rgb(224, 230, 237)",
            }}
            height="500"
            alt="Blog Website"
          />
        </Col>
      </Col>
    </Fragment>
  );
};

export default BlogWebsite;
