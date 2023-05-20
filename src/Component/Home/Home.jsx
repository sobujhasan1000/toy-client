import React from 'react';
import Bannar from './Bannar/Bannar';
import Gallery from './Gallery/Gallery';
import HowtoBuy from './HowtoBuy/HowtoBuy';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <HowtoBuy></HowtoBuy>
           <Gallery></Gallery>
        </div>
    );
};

export default Home;