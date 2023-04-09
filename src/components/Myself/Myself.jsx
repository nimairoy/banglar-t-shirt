import React from 'react';
import Specail from '../Special/Specail';

const Myself = ({ring}) => {
    return (
        <div className='text-center p-4 rounded-lg mt-6 border border-pink-600'>
            <h2 className="text-xl font-bold">Myself</h2>
            <Specail ring={ring}></Specail>
        </div>
    );
};

export default Myself;