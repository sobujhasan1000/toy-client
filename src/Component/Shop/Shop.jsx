import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Shoping from '../Shoping/Shoping';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Shop = () => {
    const loadtoys = useLoaderData()
    const [toys, settoy] = useState()
    useEffect(() => {
        fetch('https://joyful-animals-server.vercel.app/postanimals')
            .then(res => res.json())
            .then(data => settoy(data))
    }, [])
    console.log(toys)
    return (
        <div>
            <h1 className='text-center text-xl'> shoping now</h1>
            <Tabs className='' defaultIndex={1} onSelect={(index) => console.log(index)}>
                <TabList className='flex gap-6 text-center p-2'>
                    <Tab className='bg-green-200 px-4 rounded-md'><button>tiger</button></Tab>
                    <Tab className='bg-green-200 px-4 rounded-md'><button>cow</button></Tab>
                    <Tab className='bg-green-200 px-4 rounded-md'><button>bard</button></Tab>
                </TabList>
            </Tabs>
            <div className='grid grid-cols-4 gap-2' >
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