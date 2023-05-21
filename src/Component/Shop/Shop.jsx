import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Shoping from '../Shoping/Shoping';

const Shop = () => {
    const loadtoys=useLoaderData()
    const[toys,settoy]=useState()
    useEffect(()=>{
        fetch('http://localhost:5000/postanimals')
        .then(res=>res.json())
        .then(data=>settoy(data))
    },[])
    console.log(toys)
    return (
        <div>
            <h1 className='text-center text-xl'> shoping now</h1>
          <div className='grid grid-cols-4 gap-2' >
          {
            toys?.map(toy=><Shoping 
            key={toy._id}
            toy={toy}
            ></Shoping>)
           }
          </div>
        </div>
    );
};

export default Shop;