import React from 'react';
import Bannar from './Bannar/Bannar';
import Gallery from './Gallery/Gallery';
import HowtoBuy from './HowtoBuy/HowtoBuy';
import Discount from './Discount/Discount';
import Shop from '../Shop/Shop';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <HowtoBuy></HowtoBuy>
           <Gallery></Gallery>
           <Discount></Discount>
           <Shop></Shop>
           
        </div>
    );
};

export default Home;