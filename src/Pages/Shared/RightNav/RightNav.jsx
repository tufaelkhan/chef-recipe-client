import React from 'react';

const RightNav = () => {
    return (
        <div>
            <div className='mt-4'>
            <h2 className='mb-4'>Traditional recipe</h2>
            <ul>
                <h5 className='text-secondary mb-3'>Bhuna Khichuri </h5>
                <h5 className='text-secondary mb-3'>Panta bhat</h5>
                <h5 className='text-secondary mb-3'>Shutki Bhorta</h5>
                <h5 className='text-secondary mb-3'>Shorshe Hilsha</h5>
                <h5 className='text-secondary mb-3'>Chitol Maacher Muitha</h5>
                <h5 className='text-secondary mb-3'>Luchi </h5>
            </ul>
            </div>
            <div>
            <h2 className='mb-4'>Special recipe</h2>
            <div className='d-flex mb-4'>
                <img style={{height: '150px'}} src="https://media.istockphoto.com/id/1169141170/photo/chicken-biryani-directly-above-photo.jpg?s=612x612&w=0&k=20&c=A3fG29lA-iBooqPGj3WrqDJTk_z1F9RfNCO1eLbiG20=" alt="" />
                <h6 className='m-3'>A flavorful rice dish cooked with spices and meat (usually chicken, beef or goat).</h6>
            </div>
            <div className='d-flex mb-4'>
                <img style={{height: '150px'}} src="https://thumbs.dreamstime.com/b/fish-curry-28687129.jpg" alt="" />
                <h6 className='m-3'> A curry made with fish, onions, tomatoes, and a variety of spices.</h6>
            </div>
            <div className='d-flex mb-4'>
                <img style={{height: '150px'}} src="https://media.istockphoto.com/id/1173089065/photo/ilish-or-hilsa-famous-bengali-fish-curry-with-grinded-mustard-seed.jpg?b=1&s=170667a&w=0&k=20&c=g1zw_vvRm2zmbfruFhEIZwIqTREvZsx1s4nk1FEhldY=" alt="" />
                <h6 className='m-3'>A dish made with Hilsa fish (a popular fish in Bangladesh) cooked in mustard paste.</h6>
            </div>
            <div className='d-flex mb-4'>
                <img style={{height: '150px'}} src="https://t3.ftcdn.net/jpg/04/29/85/52/360_F_429855269_UX9lyIrJnlnKuXZHS0A9hA89Vsm591DT.jpg" alt="" />
                <h6 className='m-3'>A flavorful rice dish cooked with spices and meat (usually chicken, beef or goat).</h6>
            </div>
            <div className='d-flex mb-4'>
                <img style={{height: '150px'}} src="https://i.ytimg.com/vi/E9-BGyiD2o8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA07dGNYaOYv1kkRreolZ2549_6BQ" alt="" />
                <h6 className='m-3'>A rich and spicy beef curry cooked with a variety of aromatic spices.</h6>
            </div>
            </div>
            <div>
                <h2  className='m-4'>Popular Drinks Item</h2>
                <div>
                <img className='m-3' style={{height: '200px'}} src="https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <img className='' style={{height: '200px'}} src="https://www.acouplecooks.com/wp-content/uploads/2021/05/Strawberry-Mojito-008.jpg" alt="" />
                </div>
                <div>
                <img className='' style={{height: '200px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqXpRacYJ8wMJ0xen3GsUpGlE8cVVh5JmJBEVcjLTgZICG1AIDGsa6S6eD7qsNlyTn6ng&usqp=CAU" alt="" />
                <img className='mt-3' style={{height: '200px'}} src="https://cdn-food.tribune.com.pk/gallery/NGCyPRm8QAcM4xugOZcfJquaj0OCIccA9dDqqpFy.jpeg" alt="" />
                <img className='mt-3' style={{height: '200px'}} src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/4/14/1/FNM060109Insert004_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382538972575.jpeg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightNav;