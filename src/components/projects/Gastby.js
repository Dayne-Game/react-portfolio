import React, { Fragment } from 'react'
import { Col, Image, Button } from 'react-bootstrap'

const Gatsby = () => {
    return (
        <Fragment>
            <Col md={5} sm={12}>
                <p>This website was a project that I built while doing my degree. It uses Gatsby and Netlify CMS. It shows blog posts, and includes a plugin I made for Gastby.</p>
                <hr />
                <Button href="https://keen-carson-53b6c4.netlify.app" target="_blank">Gatsby + Netlify</Button>
            </Col>
            <Col md={7} sm={12} className="mt-2">
                <Image src="./gatsby.png" height="300" alt="Gatsby + Netlify" />
            </Col>
        </Fragment>
    )
}

export default Gatsby;