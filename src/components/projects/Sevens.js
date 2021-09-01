import React, { Fragment } from 'react'
import { Col, Image, Button } from 'react-bootstrap'

const Sevens = () => {
    return (
        <Fragment>
            <Col md={5} sm={12}>
                <p>Bay of Plenty Rugby | Feb 2019 - Jun 2020 (Work Experiance)</p>
                <p>When I was studying at Toi Ohomai, Bay of Plenty Rugby contacted my tutor (Jeff Kranenburg) about a project regarding building a website, for the up-and-coming National Rugby 7s Tournament. Jeff made me part of this project.</p>
                <hr />
                <p>My job was to design and develop the website, which was to be designed using Adobe XD, and developed using Gatsby / React and Netlify CMS. During the development process, Bay of Plenty Rugby had decided to go down a different road, and so the website wasn’t needed anymore, so we stopped development.</p>
                <Button href="https://sad-nightingale-b0552e.netlify.app" target="_blank">Rugby 7s Website</Button>
            </Col>
            <Col md={7} sm={12} className="mt-2">
                <Image src="./sevens.png" height="300" alt="National Rugby Sevens" />
            </Col>
        </Fragment>
    )
}

export default Sevens;