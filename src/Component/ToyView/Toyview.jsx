import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Toyview = () => {
    const toys = useLoaderData()
    return (
        <div>
            <div className="card bg-green-100 shadow-xl mb-4">
                <figure className="px-10 pt-10">
                    <img src={toys.toyPhoto} alt="Shoes" className="rounded-xl w-96" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Toy name: {toys.name}</h2>
                   <div className='flex gap-4'>
                   <p className='bg-slate-200 p-1 px-2 rounded-md'>seller Name:  {toys.selarName}</p>
                    <p className='bg-slate-200 rounded-md px-2 '>seller Email: {toys.sellerEmail}</p>
                   </div>
                   <div className='flex gap-4'>
                   <p className='bg-slate-200 p-1 rounded-md px-2 '>avaiable quantity:  {toys.totalQuantity}</p>
                    <p className='bg-slate-200 rounded-md px-2 '>product description: {toys.description}</p>
                   </div>
                   <div className='flex gap-4'>
                   <p className='bg-slate-200 p-1 rounded-md px-2 '>price:  {toys.price}</p>
                    <p className='bg-slate-200 rounded-md px-2 '>Rating: {toys.rating}</p>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Toyview;