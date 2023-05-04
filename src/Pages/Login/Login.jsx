import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthPrivider';
import Footer from '../Shared/Footer';


const Login = () => {
  const {signIn} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from?.pathname || '/'

  const handleLogin = (event) =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    signIn(email, password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      navigate(from, {replace: true})
      event.target.reset()
    })
    .catch(error => {
      console.log(error);
    })
  }
    return (
     <div>
         <Container className='justify-center mt-5'>
            <NavigationBar></NavigationBar>
            <div>
            <Form className='mx-auto w-25' onSubmit={handleLogin}>
            <h2>Login with</h2>
            <Button variant="outline-primary" className='mb-3'><FaGoogle></FaGoogle> Login with Google</Button>
      <Button variant="outline-secondary"><FaGithub></FaGithub> Login with Github</Button>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <p><small>Don't have an Account? <Link to='/register'>Register</Link></small></p>
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button><br />
      <Form.Text className="text-muted">
        </Form.Text>
    </Form>
            </div>
        </Container>
        <Footer></Footer>
     </div>
    );
};

export default Login;