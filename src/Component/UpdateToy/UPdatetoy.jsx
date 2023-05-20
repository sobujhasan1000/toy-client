import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const UPdatetoy = () => {
    const product=useLoaderData()
    const { register, handleSubmit,watch,
        formState: {errors},} = useForm();
    const onSubmit = (update) =>
    fetch(`http://localhost:5000/postanimals/${product._id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(update),
    })
    .then((res)=>res.json())
    .then((result)=>{
        console.log(result)
    })
    return (
        <div>
             <form onSubmit={handleSubmit(onSubmit)}
           
           className='bg-slate-200 pt-4 text-center'>
              <h2 className='my-6 text-xl '>Update Your Products</h2>
              <div className='flex gap-10 justify-center my-10'>
                  <input className='text-input w-72 p-1 rounded-md '  {...register("name")} placeholder='toy name' />
                  <input className='text-input w-72 p-1 rounded-md' {...register("selarName")} placeholder='seller Name' />
              </div>
              <div className='flex gap-10 justify-center my-10'>
                  <input className='text-input w-72 p-1 rounded-md '  {...register("price")} placeholder='price' type='number' />
                  <input className='text-input w-72 p-1 rounded-md' {...register("totalQuantity")} placeholder='quantity' type='number' />
              </div>
              <div className='flex gap-10 justify-center my-10'>
                  <input className='text-input w-72 p-1 rounded-md '  {...register("rating")} placeholder='rating' />
                  <input className='text-input w-72 p-1 rounded-md' {...register("description")} placeholder='productDescription' />
              </div>
             
              <input className='btn mb-4' type="submit" />
          </form>
        </div>
    );
};

export default UPdatetoy;