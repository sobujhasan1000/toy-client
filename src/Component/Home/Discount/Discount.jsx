import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Discount = () => {
    return (
        <>
           <div className='lg:flex my-6 bg-green-100' data-aos="fade-up-right">
            <div className='w-2/3 p-10'>
                <img className='rounded-xl' src="https://thumbs.dreamstime.com/b/special-offer-sale-shopping-shop-retail-young-children-kids-marketing-special-offer-sale-shopping-shop-retail-young-children-kids-112206104.jpg" alt="" />
            </div>
            <div className='text-center justify-center p-10'>
                <h1 className='text-3xl text-green-600'>subscrib and get <br /> 20% off</h1>
               <div className='mt-4 my-4'>
               <input className='bg-orange-100 rounded-md p-1' type="text" placeholder='Enter Name' />
               </div>
                <div className='my-4'>
                <input className='bg-orange-100 rounded-md p-1' type="text" placeholder='Enter email' />
                </div>
                <button className='bg-rose-100 p-1 rounded-md w-32'>subscribe</button>
            </div>
            </div> 
        </>
    );
};

export default Discount;