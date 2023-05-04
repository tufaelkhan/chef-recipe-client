import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import {IoThumbsUpSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Chef = ({chef}) => {
    const {name, experience, recipes, likes, image, id} = chef;
    return (
        <Card className="mb-4">
            <Image src={image} fluid />
      <Card.Body>
        <h3><Card.Title>{name}</Card.Title></h3>
        <Card.Text>
         <h5 className='mb-0'>Years of Experience: {experience}</h5>
        </Card.Text>
        <h5>Number of Recipes: {recipes}</h5>
        <h5>Total likes: {likes}<IoThumbsUpSharp></IoThumbsUpSharp></h5>
        <Link to={`/chef/${id}`}><Button variant="primary">View Recipes</Button></Link>
      </Card.Body>
    </Card>
    );
};

export default Chef;