import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthPrivider';
import Footer from '../Shared/Footer';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../Firebase/firebase.config';


const Login = () => {
  const auth = getAuth(app)
  const [user, setUser]=useState(null)
  const [error, setError] = useState('')
  const provider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider()

  const {signIn} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from?.pathname || '/';

const handleGoogleLogin = () =>{
  signInWithPopup(auth, provider)
  .then(result => {
    const googleLogin = result.user;
    console.log(googleLogin)
    setUser(googleLogin)
  })
  .catch(error => {
    console.log(error.message)
  })
}

const handleGithubLogin = () =>{
  signInWithPopup(auth, gitHubProvider)
  .then(result =>{
    const gitHubLogin = result.user;
    console.log(gitHubLogin);
    setUser(gitHubLogin)
  })
  .catch(error => {
    console.log(error);
  })
}

  const handleLogin = (event) =>{
    event.preventDefault();
    setError('')
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    if(/^[A-Za-z]\w{7,14}$/.test(password)){
      setError('please add at last one uppercase')
      return ;
  }else if(password.length < 8){
    setError('password must be 8 chracter')
    return ;
  }
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
            <Button onClick={handleGoogleLogin} variant="outline-primary" className='mb-3'><FaGoogle></FaGoogle> Login with Google</Button>
      <Button onClick={handleGithubLogin} variant="outline-secondary">
        <FaGithub></FaGithub> Login with Github</Button>
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
      <h5 className='text-danger'>{error}</h5>
     <Button variant="primary" type="submit">
        Login
      </Button>
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