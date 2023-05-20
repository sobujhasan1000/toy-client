import React from 'react';
import { Link } from 'react-router-dom';

const Toys = ({ toy }) => {
    return (
        <>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>seller Name</th>
                            <th>toy name</th>
                            <th>price</th>
                            <th>sub catagory</th>
                            <th>quantity</th>
                            <th>click</th>
                        </tr>
                    </thead>
                    <tbody className='text-left'>
                        <tr>
                            <td>  
                             <div className="font-bold">{toy.name}</div> 
                            </td>
                            <td>
                             {toy.selarName}
                            </td>
                            <td>{toy.price}</td>
                            <td>{toy.subCatagory}</td>
                            <td>{toy.totalQuantity}</td>
                            <th>
                                <Link to={`/singletoys/${toy._id}`}><button className="btn btn-ghost btn-xs">details</button></Link>
                            </th>
                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Toys;