import React from 'react';
import Cousin from '../Cousin/Cousin';

const Uncle = () => {
    return (
        <div className='text-center p-4 rounded-lg mt-6 border border-pink-600'>
            <h2 className='text-3xl font-bold'>Uncle</h2>
            <div className='grid md:grid-cols-2 gap-1'>
            <Cousin>Gouri</Cousin>
            <Cousin>Gopal</Cousin>
            </div>
        </div>
    );
};

export default Uncle;