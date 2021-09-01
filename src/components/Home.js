import React from 'react'
import { Container } from 'react-bootstrap'

const Home = () => {
    return (
        <section id="home" className="vh100">
            <Container className="py-5">
                <div className="d-flex align-items-center" style={{ height: '600px' }}>
                <div>
                    <h1 className="display-2 fw-bolder"><span style={{ background: '#f4f4f4' }}>Dayne Game.</span></h1>
                    <h2><span style={{ background: '#f4f4f4' }}>Web Developer & Designer</span></h2>
                </div>
                </div>
            </Container>
        </section>
    )
}

export default Home;