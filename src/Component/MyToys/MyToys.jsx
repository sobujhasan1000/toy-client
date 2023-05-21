import React,{useState} from 'react';
import { useLoaderData } from 'react-router-dom';
import Mytoy from './Mytoy';

const MyToys = () => {
    const lodedtoy=useLoaderData();
    const [toyss,settoys]=useState(lodedtoy)
    return (
        <div>
            {
                toyss.map(toy=><Mytoy
                key={toy._id}
                toy={toy}
                toys={toyss}
                settoys={settoys}
                ></Mytoy>)
            }
        </div>
    );
};

export default MyToys;