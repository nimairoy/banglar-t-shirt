import React, { useContext } from 'react';
import { WatchContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const watch = useContext(WatchContext)
    return (
        <div className='text-center p-4 rounded-lg mt-6 border border-pink-600'>
            <h2 className="text-xl font-bold">Sister</h2>
            {watch && <p>{watch}</p>}
        </div>
    );
};

export default Sister;