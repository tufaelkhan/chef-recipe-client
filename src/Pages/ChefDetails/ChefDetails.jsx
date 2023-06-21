import React, { useState } from 'react';
import { Button, Card, CardGroup, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import {IoThumbsUpSharp } from "react-icons/io5";
import { Rating } from '@smastrom/react-rating'
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import Footer from '../Shared/Footer';
import '@smastrom/react-rating/style.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { FaCookie, FaCookieBite } from 'react-icons/fa';

const ChefDetails = () => {
    const chef = useLoaderData()
    const {name, experience, recipes, likes, image, id, ratingName , method, recipeName, bio} = chef;
    const [favorite, setFavorite] = useState(true)

    // const handndleFavorite = (event) =>{
    // }
    const notify = () => toast("favorite item added!");
    return (
       <div>
         <Container className='mt-5'>
            <NavigationBar></NavigationBar>
        <div>
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <h3>Name of Chef: {name}</h3>
            <p>{bio}</p>
            <h5>Years of Experience: {experience}</h5>
            <h5>Total Likes: {likes}<IoThumbsUpSharp></IoThumbsUpSharp></h5>
            <h4>Total Recipes</h4>
            <ol>
                <li>{recipeName.first}</li>
                <li>{recipeName.second}</li>
                <li>{recipeName.third}</li>
                <li>{recipeName.four}</li>
                <li>{recipeName.five}</li>
            </ol>
          </Card.Body>
        </Card>
        </div>
        <div   className='mt-4 mb-4'>
            <h4 className='text-center text-primary'>Top Recipe Here!</h4>
        <CardGroup>
      <Card className='m-2'>
        <Card.Body>
          <Card.Title>Recipe Name: {recipeName.first}</Card.Title>
          <Card.Title>Cooking Method:  <FaCookieBite></FaCookieBite></Card.Title>
          <Card.Text>
          <ol>
            <li>{method.first}</li>
            <li>{method.second}</li>
            <li>{method.third}</li>
            <li>{method.four}</li>
          </ol>
          <h5 className='d-flex'><span>Rating:</span><span>{ratingName.second}</span> <span><Rating style={{ maxWidth: 120 }} value={ratingName.second} readOnly/></span></h5>
          </Card.Text>
        </Card.Body>
        <Button onClick={notify} variant="primary">Favorite</Button>
        <ToastContainer></ToastContainer>
      </Card>
      <Card className='m-2'>
        <Card.Body>
          <Card.Title>Recipe Name: {recipeName.second}</Card.Title>
          <Card.Title>Cooking Method:  <FaCookie></FaCookie></Card.Title>
          <Card.Text>
          <ol>
            <li>{method.five}</li>
            <li>{method.six}</li>
            <li>{method.seven}</li>
            <li>{method.eight}</li>
          </ol>
          <h5 className='d-flex'><span>Rating:</span><span>{ratingName.first}</span> <span><Rating style={{ maxWidth: 120 }} value={ratingName.first} readOnly/></span></h5>
          </Card.Text>
        </Card.Body>
        <Button onClick={notify} variant="primary">Favorite</Button>
        <ToastContainer></ToastContainer>
      </Card>
      <Card className='m-2'>
        <Card.Body>
          <Card.Title className='mb-3'>Recipe Name: {recipeName.four}</Card.Title>
          <Card.Title>Cooking Method: <FaCookieBite></FaCookieBite> </Card.Title>
          <Card.Text>
          <ol>
            <li>{method.nine}</li>
            <li>{method.eleven}</li>
            <li>{method.ten}</li>
            <li>{method.twelve}</li>
          </ol>
          <h5 className='d-flex'><span>Rating: </span><span>{ratingName.third} </span> <span><Rating style={{ maxWidth: 120 }} value={ratingName.third} readOnly /></span></h5>
          </Card.Text>
        </Card.Body>
        <Button onClick={notify} variant="primary">Favorite</Button>
        <ToastContainer></ToastContainer>
      </Card>
    </CardGroup>
        </div>
      </Container>
      <Footer></Footer>
       </div>
    );
};

export default ChefDetails;