import React from 'react';
import logo from '../assets/images/logo.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
  
  return (
    <header>
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto">         
                    <img src={logo} alt="maribel cosmo logo" />
                </Col>
            </Row>
        </Container>
    </header>
  );
}

export default Header;