import React, { useEffect, useState } from 'react';
import Header from '../Shared/Header';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../Shared/RightNav/RightNav';
import Slider from '../Shared/Slider/Slider';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import Chef from './Chef';

const Home = () => {
    const [chefs, setChef] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/chef')
        .then(res => res.json())
        .then(data => setChef(data))
        .catch(error => console.log(error))
    },[])
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Slider></Slider>
            <Container>
      <Row>
        <Col lg={8}>
           <div>
           <h2 className='pt-4'>Favorite Chefs</h2>
            {
                chefs.map(chef => <Chef
                key={chef.id}
                chef={chef}
                ></Chef>)
            }
           </div>
        </Col>
        <Col lg={4}>
            <RightNav></RightNav>
        </Col>
      </Row>
    </Container>
        </div>
    );
};

export default Home;