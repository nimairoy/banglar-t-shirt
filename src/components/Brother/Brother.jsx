import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const ring = useContext(RingContext)
    return (
        <div className='text-center p-4 rounded-lg mt-6 border border-pink-600'>
            <h2 className="font-bold text-xl">Brother</h2>
            {ring && <p>Ring: {ring}</p>}
        </div>
    );
};

export default Brother;