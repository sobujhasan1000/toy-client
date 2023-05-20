import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Mytoy from './Mytoy';

const MyToys = () => {
    const toys=useLoaderData();
    return (
        <div>
            <h1>my add  toys</h1>
            
            {
                toys.map(toy=><Mytoy
                key={toy._id}
                toy={toy}
                ></Mytoy>)
            }
        </div>
    );
};

export default MyToys;