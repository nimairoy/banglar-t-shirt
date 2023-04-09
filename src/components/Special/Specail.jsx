import React from 'react';

const Specail = ({ring}) => {
    return (
        <div>
            <h2 className="text-rose-600 text-sm">Special</h2>
            {ring && <p>Ring: {ring}</p>}
        </div>
    );
};

export default Specail;