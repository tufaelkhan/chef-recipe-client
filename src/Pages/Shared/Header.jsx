import React from 'react';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <div>
            <h1 className='text-center m-4 text-secondary'>Bangladeshi Special Chefs!!!</h1>
            <Marquee speed={100}>
<div className='bg-white'>
<h4 className='m-3 text-success'>Treat yourself to a moment of cookie joy. Cookie happiness in every bite</h4>
</div>
</Marquee>
        </div>
    );
};

export default Header;