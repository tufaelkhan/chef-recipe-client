import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthPrivider';
import { Navigate, useLocation } from 'react-router-dom';
import { Container, Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    // console.log(location);

    if(loading){
        return  <Container><Spinner className='mt-5' animation="border" variant="danger" /></Container>
    }

    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;

