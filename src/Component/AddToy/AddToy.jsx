import React from 'react';
import { useForm } from "react-hook-form";

const AddToy = () => {
    const { register, handleSubmit,watch,
        formState: {errors},} = useForm();
    const onSubmit = (data) =>
    fetch('https://joyful-animals-server.vercel.app/postanimals',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(data),
    })
    .then((res)=>res.json())
    .then((result)=>{
        console.log(result)
    })
    // console.log(data);
    // console.log(watch("example"));
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}
           
             className='bg-slate-200 pt-4 text-center'>
                <h2 className='my-6 text-xl '>Add Your Products</h2>
                <div className='flex gap-10 justify-center my-10'>
                    <input className='text-input w-72 p-1 rounded-md '  {...register("name")} placeholder='toy name' />
                    <input className='text-input w-72 p-1 rounded-md' {...register("selarName")} placeholder='seller Name' />
                </div>
                <div className='flex gap-10 justify-center my-10'>
                    <input className='text-input w-72 p-1 rounded-md '  {...register("sellerEmail")} placeholder='email' type='email' />
                    <input className='text-input w-72 p-1 rounded-md' {...register("toyPhoto")} placeholder='product Photo' type='url' />
                </div>
                <div className='flex gap-10 justify-center my-10'>
                    <input className='text-input w-72 p-1 rounded-md '  {...register("price")} placeholder='price' type='number' />
                    <input className='text-input w-72 p-1 rounded-md' {...register("totalQuantity")} placeholder='quantity' type='number' />
                </div>
                <div className='flex gap-10 justify-center my-10'>
                    <input className='text-input w-72 p-1 rounded-md '  {...register("rating")} placeholder='rating' />
                    <input className='text-input w-72 p-1 rounded-md' {...register("description")} placeholder='productDescription' />
                </div>
                <div className='flex gap-10 justify-center my-10'>
                    <select className='w-72 p-1 rounded-md' {...register("catagory")}>
                        <option value="Hunter">Hunter</option>
                        <option value="bird">Birds</option>
                        <option value="pet animal">pets animal</option>
                    </select>
                    <select className='w-72 p-1 rounded-md' {...register("subCatagory")}>
                        <option value="tiger">tiger</option>
                        <option value="pet bird">pets Birds</option>
                        <option value="cow">cow</option>
                    </select>
                </div>
               

                <input className='btn mb-4' type="submit" />
            </form>
        </div>
    );
};

export default AddToy;