import React from 'react';



const Gallery = () => {
    
    const imgs=[
        {img:"https://cdn.shopify.com/s/files/1/2281/5369/products/bobcat-483060_512x512.jpg?v=1610663318"},
        {img:"https://cdn.shopify.com/s/files/1/0570/7009/products/african-animal-6-set-for-toddlers-439247_600x.jpg?v=1668268522"},
        {img:"https://cdn.shopify.com/s/files/1/2281/5369/collections/wildlife-animal-toys-350771_1200x1200.jpg?v=1622304026"},
        {img:"https://media.4rgos.it/i/Argos/1301863_R_Z001A?w=750&h=440&qlt=70"},
        {img:"https://cdn.shopify.com/s/files/1/0636/0737/4044/files/Orange_Tree_Hero_Banner_Template_Classic_Pooh_Collection_1440x554.png?v=1660572296"},
        {img:"https://cdn.shopify.com/s/files/1/2281/5369/products/african-wild-dog-647358_512x512.jpg?v=1610650076"},
        {img:"https://cdn.shopify.com/s/files/1/2281/5369/products/african-wild-dog-647358_512x512.jpg?v=1610650076"},
        {img:"https://cdn.shopify.com/s/files/1/2281/5369/products/mountain-lion-132458_512x512.jpg?v=1610914473"},
        {img:"https://cdn.shopify.com/s/files/1/2281/5369/products/wildebeest-966092_512x512.jpg?v=1610934741"},
    ]
    return (
        <div>
            <h1 className='text-3xl my-4 text-center'>Gallery</h1>
            <div className='grid grid-cols-4 gap-2'>
                {imgs.map((im ,index=i )=> <div key={index+1} className=" p-4 h-96 rounded-md w-full border-4 border-green-300 mt-2">
                    <figure><img src={im.img} alt="Shoes" /></figure>
                </div>)}
            </div>
        </div>
    );
};

export default Gallery;