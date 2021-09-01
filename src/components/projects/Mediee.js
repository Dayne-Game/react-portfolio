import React, { Fragment } from 'react'
import { Col, Row, Button } from 'react-bootstrap'

const Mediee = () => {
    return (
        <Fragment>
            <Col md={6} sm={12}>
                <p>Mediee is a Document Managment System that is currently under development. This system will allow Resthomes/Care Facilities, to record information electronically, and save to the cloud, rather than the current paper-based system used currently.</p>
                <hr />
                <p>Mediee is built on the MERN Stack platform. It uses MongoDB as its database, ExpressJS for the REST API, ReactJS for the front-end interaction (Client-side), and NodeJS for Server Side</p>
                <Button href="https://github.com/Dayne-Game/Healthcare_Application" target="_blank">Github Repo</Button>
                </Col>
            <Row className='mt-3'>
                <Col md={6}>
                    <iframe height="400" width="100%" src="https://www.youtube.com/embed/305HC6Dszk8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Col>
                <Col md={6}>
                    <iframe height="400" width="100%" src="https://www.youtube.com/embed/Np_-PNGsK-k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Mediee;