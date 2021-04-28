import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">Copyright &copy; GameShop, All rights reserved.</Col>
                </Row>
                <Row>
                    <Col className="text-center py-3">Site by Sagar Adhalge</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
