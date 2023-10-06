import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Shoping from '../Shoping/Shoping';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Shop = () => {
    // const loadtoys = useLoaderData()
    const [toys, settoy] = useState()
    useEffect(() => {
        fetch('https://joyful-animals-server.vercel.app/postanimals')
            .then(res => res.json())
            .then(data => settoy(data))
    }, [])
    console.log(toys)
    return (
        <div className='text-center my-10'>
            <h1 className='text-center text-2xl uppercase font-bold'> shoping now</h1>
            <Tabs className='text-center' defaultIndex={1} onSelect={(index) => console.log(index)}>
                <TabList className='flex gap-6 text-center justify-center items-center my-6 '>
                    <Tab className='p-2 bg-green-300 rounded-md hover:bg-green-400'><button>tiger</button></Tab>
                    <Tab className='p-2 bg-green-300 rounded-md hover:bg-green-400'><button>cow</button></Tab>
                    <Tab className='p-2 bg-green-300 rounded-md hover:bg-green-400'><button>bard</button></Tab>
                </TabList>
            </Tabs>
            <div className='grid grid-cols-2 lg:grid-cols-4 md:  gap-4' >
                {
                    toys?.map(toy => <Shoping
                        key={toy._id}
                        toy={toy}
                    ></Shoping>)
                }
            </div>
        </div>
    );
};

export default Shop;