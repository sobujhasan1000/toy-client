import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Toyview = () => {
    const {id}=useParams()
    const toys=useLoaderData()
    return (
        <div>
            <h1>singel toy</h1>
        </div>
    );
};

export default Toyview;