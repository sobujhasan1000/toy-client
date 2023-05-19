import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Toys from './Toys';

const AllToy = () => {

    const alltoys=useLoaderData();
    return (
        <>
            <h1 className='text-center my-4 text-xl'>ALL TOY</h1>
            {/* <table className='w-3/4  mr-6'>
            <thead>
                        <tr>
                            <th>seller Name</th>
                            <th>toy name</th>
                            <th>price</th>
                            <th>sub catagory</th>
                            <th>quantity</th>
                            <th></th>
                        </tr>
                    </thead>
            </table> */}
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