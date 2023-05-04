import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaPinterest,  } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <Row className='p-5 bg-secondary text-light'>
                <h3 className='text-center mb-4 text-info'>Leading the way in innovation</h3>
                <Col lg={3}>
                    <h4>Follow us</h4>
                    <h6><FaFacebook></FaFacebook> Facebook</h6>
                    <h6><FaInstagram></FaInstagram> Instatram</h6>
                    <h6><FaPinterest></FaPinterest> Pinterest</h6>
                    </Col>
                <Col lg={3}>
                    <h4>Sections</h4>
                    <h6>Blog</h6>
                    <h6>About us</h6>
                    <h6>Recipes</h6>
                </Col>
                <Col lg={3}>
                    <h4>Special recipe</h4>
                    <h6>Biryani </h6>
                    <h6>Kala Bhuna</h6>
                    <h6>Shorshe ilish</h6>
                </Col>
                <Col lg={3}>
                    <h4>Contact Us</h4>
                    <h6> Email: deshirecife@gmail.com  </h6>
                    <h5> Phone: + 04049584958</h5>
                    <h5>Whatsapp: + 6465465969</h5>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;