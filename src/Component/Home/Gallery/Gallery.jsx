import React from 'react';

const Gallery = () => {
    return (
        <div>
            <h1 className='text-3xl my-4 text-center'>Gallery</h1>
            <div className='flex gap-2 mx-2'>
                <div className="card card-compact w-72 bg-base-100 shadow-xl h-52">
                    <figure><img className='' src="https://cdn.shopify.com/s/files/1/2281/5369/products/bobcat-483060_512x512.jpg?v=1610663318" alt="Shoes" /></figure>
                </div>
                <div className="card card-compact w-72 bg-base-100 shadow-xl h-52">
                    <figure><img className='' src="https://cdn.shopify.com/s/files/1/0570/7009/products/african-animal-6-set-for-toddlers-439247_600x.jpg?v=1668268522" alt="Shoes" /></figure>
                </div>
                <div className="card card-compact w-72 bg-base-100 shadow-xl h-52">
                    <figure><img className='' src="https://cdn.shopify.com/s/files/1/2281/5369/collections/wildlife-animal-toys-350771_1200x1200.jpg?v=1622304026" alt="Shoes" /></figure>
                </div>
                <div className="card card-compact w-72 bg-base-100 shadow-xl h-52">
                    <figure><img className='' src="https://media.4rgos.it/i/Argos/1301863_R_Z001A?w=750&h=440&qlt=70" alt="Shoes" /></figure>
                </div>
            </div>
            <div className='my-4 mx-4'>
                <img className='h-44 w-full rounded-md' src="https://cdn.shopify.com/s/files/1/0636/0737/4044/files/Orange_Tree_Hero_Banner_Template_Classic_Pooh_Collection_1440x554.png?v=1660572296" alt="" />
            </div>
            <div className='flex gap-2 mx-2 mb-4'>
                <div className="card card-compact w-72 bg-base-100 shadow-xl h-52">
                    <figure><img className='' src="https://cdn.shopify.com/s/files/1/2281/5369/products/african-wild-dog-647358_512x512.jpg?v=1610650076" alt="Shoes" /></figure>
                </div>
                <div className="card card-compact w-72 bg-base-100 shadow-xl h-52">
                    <figure><img className='' src="https://cdn.shopify.com/s/files/1/2281/5369/products/mountain-lion-132458_512x512.jpg?v=1610914473" alt="Shoes" /></figure>
                </div>
                <div className="card card-compact w-72 bg-base-100 shadow-xl h-52">
                    <figure><img className='' src="https://www.thepartycupboard.com.au/cdn/shop/products/wild_republic_jungle_tube_set_600x600.jpg?v=1629253513" alt="Shoes" /></figure>
                </div>
                <div className="card card-compact w-72 bg-base-100 shadow-xl h-52">
                    <figure><img className='' src="https://cdn.shopify.com/s/files/1/2281/5369/products/wildebeest-966092_512x512.jpg?v=1610934741" alt="Shoes" /></figure>
                </div>
            </div>
        </div>
    );
};

export default Gallery;