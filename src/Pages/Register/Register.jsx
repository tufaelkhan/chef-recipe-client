import React, { useContext, useState } from 'react';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthPrivider';
import Footer from '../Shared/Footer';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleRegister= (event) =>{
        event.preventDefault();
        setError('')
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        console.log(email, password, name);

        if(!/^[A-Za-z]\w{7,14}$/.test(password)){
            setError('please add uppercase')
            return ;
        }
        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
            setError('')
            event.target.reset()
            setSuccess('user created successfully')
        })
        .catch(error => {
            console.log(error);
            setError(error.message)
            setSuccess('')
        })
    }

    return (
        <div>
            <Container className='mt-5'>
            <NavigationBar></NavigationBar>
            <div>
                <Form className='mx-auto w-25' onSubmit={handleRegister}>
                    <h4 className='mt-5'>Please Register!</h4>
                    <Form.Group className="mb-3" controlId="formBasicname">
                        <Form.Label>your name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="your name"  required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicphoto">
                        <Form.Label>photo URL</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Photo URL" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" name='check' label="accept" required/>
                        <p><small>Already have an Account? <Link to='/login'>Login</Link></small></p>
                    </Form.Group>
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text> <br/>
                    <Button variant="primary" type="submit">
                        Register
                    </Button><br />
                </Form>
            </div>
        </Container>
        <Footer></Footer>
        </div>
    );
};

export default Register;