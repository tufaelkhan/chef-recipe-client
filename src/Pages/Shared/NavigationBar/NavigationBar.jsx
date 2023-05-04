import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import {  FaSatelliteDish, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthPrivider';

const NavigationBar = () => {
    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = () =>{
      logOut()
      .then()
      .catch(error => console.log(error))
    }
    return (
        <div>
             <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home"><FaSatelliteDish></FaSatelliteDish> shape hunter</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features"><Link to='/' className='text-decoration-none text-dark'>Home</Link></Nav.Link>
            <Nav.Link href="#features"><Link to='/blog'className='text-decoration-none text-dark'>Blog</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to='/login'className='text-decoration-none text-dark'>Login</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to='/register'className='text-decoration-none text-dark'>Register</Link></Nav.Link>
          </Nav>
          <Nav>
            {user && <FaUserCircle style={{fontSize: '2rem'}}></FaUserCircle>}
            {user ? 
            <Button onClick={handleLogOut} variant="dark">LogOut</Button>:
            <Link to='/login'>
            <Button variant="dark">Login</Button></Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default NavigationBar;