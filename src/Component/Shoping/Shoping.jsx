import React from 'react';
import { Link } from 'react-router-dom';

const Shoping = ({ toy }) => {
    return (
        <div>
            <div className="card card-compact  bg-base-200 mb-4 shadow-xl">
                <figure><img src={toy.toyPhoto} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toy.name}</h2>
                    <div className='flex'>
                    <p>Price: {toy.price}</p>
                    <p>rating {toy.rating}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/singletoys/${toy._id}`}><button className='p-1 bg-green-300 rounded-md'>view details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shoping;