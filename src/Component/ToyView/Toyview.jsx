import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Toyview = () => {
    const toys=useLoaderData()
    return (
        <div>
            <h1>singel toy {toys.name}</h1>
        </div>
    );
};

export default Toyview;