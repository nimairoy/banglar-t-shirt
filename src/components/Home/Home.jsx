import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tShirts = useLoaderData();
    console.log(tShirts)
    return (
        <div>
            <h1 className='text-4xl font-bold'>Available T-Shirts {tShirts.length}</h1>
        </div>
    );
};

export default Home;