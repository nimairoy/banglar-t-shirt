import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({ring2}) => {
    return (
        <div className='text-center p-4 rounded-lg mt-6 border border-pink-600'>
            <h2 className='text-3xl font-bold'>Aunty</h2>
            <div className='grid md:grid-cols-2 gap-1'>
            <Cousin>Laxmi</Cousin>
            <Cousin hasFriends ={true} ring2={ring2}  >Krishna</Cousin>
            </div>
        </div>
    );
};

export default Aunty;