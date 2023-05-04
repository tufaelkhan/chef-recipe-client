import React, { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';

const Slider = () => {
    const [index, setIndex] = useState(0)
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <Container>
            <Carousel activeIndex={index} onSelect={handleSelect} className='mx-auto'>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50%"
                        src="https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-white'>The perfect cookie for every moment</h3>
                        <p>While some were more for show and would sit unused for years, others would become much loved classics, passed down through families as well-worn heirlooms.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Bite into happiness with every cookie</h3>
                        <p>Meaning they’ve been real-world prepared and taste-tested by people who are proud to share their creations.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/66639/pexels-photo-66639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Third slide"
                    />

                    <Carousel.Caption className='mb-5'>
                        <h3>Discover your new favorite cookie.</h3>
                        <p>
                        What’s really fun is that they hold regular contests. Just send in your most innovative recipe, your ‘one pan wonder’, or ‘Grandma’s holiday favorite’ recipe and you could win up to $500!
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Slider;