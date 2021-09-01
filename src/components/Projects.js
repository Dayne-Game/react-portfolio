import React from 'react'
import { Container } from 'react-bootstrap'
import Multiple from './Multiple'

const Projects = () => {
    return (
        <section id="projects" className="vh100">
            <Container style={{ paddingTop: '100px' }}>
                <h1 className="display-3 fw-bolder"><span style={{ background: '#f4f4f4' }}>Projects</span></h1>
                <Multiple />
            </Container>
        </section>
    )
}

export default Projects;