import React from 'react';

const HowtoBuy = () => {
    return (
        <div className='bg-green-100 my-4'>
            <h1 className='text-center text-4xl pt-6 pb-10 font-bold '>How to Buy?</h1>
            <div className='flex justify-around mx-4 space-x-16  pb-10 pt-4 text-center'>
                <div>
                    <img className='h-44 rounded-full border-4 border-[#4ad1ad]' src="https://richmedia.ca-richimage.com/ImageDelivery/imageService?profileId=12026540&id=1609738&recipeId=729" alt="" />
                    <p className='text-xl font-bold'>choose a toys</p>
                    <p>pick frome 1000 over of <br /> the letest have must</p>
                </div>
                <div>
                    <img className='h-44 rounded-full border-4 border-[#4ad1ad]' src="https://www.jiomart.com/images/product/600x600/rvf65enhfw/ms-little-finger-set-of-6-big-size-full-action-toy-figure-jungle-cartoon-wild-animal-toys-figure-playing-set-for-kids-current-animals-bear-rhino-elephant-leopard-tiger-lion-toys-for-children-product-images-orvf65enhfw-p597754448-2-202301211505.jpg" alt="" />
                    <p className='text-xl font-bold'>More Play & learn</p>
                    <p>kid-led display that build condidence <br /> & sport magination</p>
                </div>
                <div>
                    <img className='h-44 rounded-full border-4 border-[#4ad1ad]' src="https://m.media-amazon.com/images/I/71sV3aKX2DL._AC_UF350,350_QL80_.jpg" alt="" />
                    <p className='text-xl font-bold'>swap & reapet </p>
                    <p>Ruturn any unloved toy <br /> and swap</p>
                </div>
            </div>
        </div>
    );
};

export default HowtoBuy;