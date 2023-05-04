import React, { useState } from 'react';
import { Button, Card, CardGroup, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import {IoThumbsUpSharp } from "react-icons/io5";
import NavigationBar from '../Shared/NavigationBar/NavigationBar';

const ChefDetails = () => {
    const chef = useLoaderData()
    const {name, experience, recipes, likes, image, id, ratingName , method, recipeName, bio} = chef;
    const [favorite, setFavorite] = useState(true)

    // const handndleFavorite = (event) =>{

    // }
    return (
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
          <Card.Text>
          <ol>
            <li>{method.first}</li>
            <li>{method.second}</li>
            <li>{method.third}</li>
            <li>{method.four}</li>
          </ol>
          <h5>Rating: {ratingName.third}</h5>
          </Card.Text>
        </Card.Body>
        <Button variant="primary">Favorite</Button>
      </Card>
      <Card className='m-2'>
        <Card.Body>
          <Card.Title>Recipe Name: {recipeName.second}</Card.Title>
          <Card.Text>
          <ol>
            <li>{method.five}</li>
            <li>{method.six}</li>
            <li>{method.seven}</li>
            <li>{method.eight}</li>
          </ol>
          <h5>Rating: {ratingName.first}</h5>
          </Card.Text>
        </Card.Body>
        <Button variant="primary">Favorite</Button>
      </Card>
      <Card className='m-2'>
        <Card.Body>
          <Card.Title>Recipe Name: {recipeName.four}</Card.Title>
          <Card.Text>
          <ol>
            <li>{method.nine}</li>
            <li>{method.eleven}</li>
            <li>{method.ten}</li>
            <li>{method.twelve}</li>
          </ol>
          <h5>Rating: {ratingName.four}</h5>
          </Card.Text>
        </Card.Body>
        <Button onClick={() => setFavorite(disabled={favorite})} variant="primary">Favorite</Button>
      </Card>
    </CardGroup>
        </div>
      </Container>
    );
};

export default ChefDetails;