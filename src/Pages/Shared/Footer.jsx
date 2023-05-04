import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <Row className='p-5 bg-secondary'>
                <Col lg={3}>
                    <h4>Follow us</h4>
                    <h5><FaFacebook></FaFacebook> Facebook</h5>
                    <h5><FaInstagram></FaInstagram> Instatram</h5>
                    <h5><FaPinterest></FaPinterest> Pinterest</h5>
                    </Col>
                <Col lg={3}>
                    Second, but last
                </Col>
                <Col lg={3}>
                    Third, but second
                </Col>
                <Col lg={3}>
                    Third, but second
                </Col>
            </Row>
        </div>
    );
};

export default Footer;