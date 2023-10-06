import React from 'react';
import { Link } from 'react-router-dom';

const Shoping = ({ toy }) => {
    const bgimg=`(${toy.toyPhoto})`;
    console.log(bgimg)
    return (
        <div className="  border-4 border-[#4ad1ad] rounded-md bg-cyan-100 hover:shadow-2xl">
            <div 
            // style={{backgroundImage: bgimg}}
             ><h1 className='p-2 text-xl font-bold uppercase'>{toy.name}</h1>
                <img className='h-64 w-full' src={toy.toyPhoto} alt="" />
                <div className="mb-4">
                    <div className='text-left m-4 text-xl'>
                    <p>Price: {toy.price}</p>
                    <p>rating {toy.rating}</p>
                    </div>
                        <Link to={`/singletoys/${toy._id}`}><button className=' p-2 bg-green-300 rounded-md hover:bg-green-400'>view details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Shoping;