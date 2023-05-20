import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Mytoy = ({toy}) => {

    const handeldelet=_id=>{
                console.log(_id)
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                    //   Swal.fire(
                    //     'Deleted!',
                    //     'Your file has been deleted.',
                    //     'success'
                    //   )

                    fetch(`http://localhost:5000/postanimals/${_id}`,{
                        method:'delete'
                    })
                    .then(res=> res.json())
                    .then(data=>{
                        console.log(data);
                        if(data.deleteCount>0)
                        {
                              Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      ) 
                        }
                    })
                    }
                  })
    }

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
                            <th>update tory</th>
                            <th>delete tory</th>
                            <th></th>
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
                            <td>{toy.totalQuantity}</td>
                            <th>
                                <Link to={`/update/${toy._id}`}><button className="btn btn-ghost btn-xs">Update</button></Link>
                            </th>
                            <th>
                                <Link><button onClick={()=>handeldelet(toy._id)} className="btn btn-ghost btn-xs">Delet</button></Link>
                            </th>
                        </tr>

                    </tbody>
                </table>
            </div>   
        </>
    );
};

export default Mytoy;