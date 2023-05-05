import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import {  FaUserCircle, FaSatelliteDish } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
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
        <Navbar.Brand href="#home"> <FaSatelliteDish></FaSatelliteDish> shape hunter</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
          {/* className='text-decoration-none text-dark' */}

           <Nav.Link href="#features"><NavLink to='/'  className={({ isActive }) => (isActive ? 'text-primary' : 'text-dark text-decoration-none')}>Home</NavLink></Nav.Link>
            <Nav.Link href="#features"><NavLink to='/blog'className={({ isActive }) => (isActive ? 'text-primary' : 'text-dark text-decoration-none')}>Blog</NavLink></Nav.Link>
            <Nav.Link href="#pricing"><NavLink to='/login'className={({ isActive }) => (isActive ? 'text-primary' : 'text-dark text-decoration-none')}>Login</NavLink></Nav.Link>
            <Nav.Link href="#pricing"><NavLink to='/register'className={({ isActive }) => (isActive ? 'text-primary' : 'text-dark text-decoration-none')}>Register</NavLink></Nav.Link>
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