import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Toys from './Toys';

const AllToy = () => {

    const alltoys=useLoaderData();
    return (
        <>
            <h1 className='text-center my-4 text-xl'>ALL TOY</h1>
           
            {
                alltoys.map(toy=><Toys
                key={toy._id}
                toy={toy}
                ></Toys>)
            }
        </>
    );
};

export default AllToy;