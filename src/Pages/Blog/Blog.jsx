import React from 'react';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import Footer from '../Shared/Footer';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container>
            <NavigationBar></NavigationBar>
           <div>
           <h2>Ans the Question?</h2>
            <h4>Tell us the differences between uncontrolled and controlled components</h4>
            <p>Controlled Component Use controlled component. Rather than accessing the value of the input through the reference of the element, we can store the value in React state. then we using the state value</p>
            <p>Unontrolled Component Similer to html input element. we can get the value of the input by accessing the reference to the input</p>
           </div>
           <div>
           <h2>Ans the Question?</h2>
            <h4>How to validate React props using PropTypes</h4>
            <p>Props and PropTypes are important mechanisms for passing read-only attributes between React components.</p>
            <p>
            We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app.
            </p>
           </div>
           <div>
           <h2>Ans the Question?</h2>
            <h4>Tell us the difference between nodejs and express js.</h4>
            <p>Node.js is an open source, cross-platform javascript code that runs on servers. it uses asynchronous event driven model and is designed to build scalable network applications.it's build on google chrome v8 engine.</p>
            <p>
            express.js is a web application framework for node.js. that's what mainly makes the difference between express js and node . express to build a web application to easy and quickly.
            </p>
           </div>
           <div>
           <h2>Ans the Question?</h2>
            <h4>Tell us the difference between nodejs and express js.</h4>
            <p>Node.js is an open source, cross-platform javascript code that runs on servers. it uses asynchronous event driven model and is designed to build scalable network applications.it's build on google chrome v8 engine.</p>
            <p>
            express.js is a web application framework for node.js. that's what mainly makes the difference between express js and node . express to build a web application to easy and quickly.
            </p>
           </div>
            <Footer></Footer>
        </Container>
    );
};

export default Blog;