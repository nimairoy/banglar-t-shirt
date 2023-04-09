import React from 'react';
import Friends from '../Friends/Friends';

const Cousin = ({children , hasFriends, ring2}) => {
    return (
        <div className='text-center p-4 rounded-lg mt-6 border border-pink-600'>
            <h2 className="text-xl font-bold">Cousin</h2>
            <h2 className="text-sm font-semibold">{children}</h2>
            {hasFriends && <Friends ring2={ring2}></Friends>}
        </div>
    );
};

export default Cousin;