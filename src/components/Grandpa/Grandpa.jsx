import React from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

const Grandpa = () => {
    const ring = 'Diamond Ring';
    const ring2 = 'Golden Ring';
    return (
        <div className='text-center px-12'>
            <h2 className='text-3xl font-bold mt-6'>GrandPa</h2>
            {ring}
            <p></p>
            {ring2}
            <section className='grid grid-cols-3 gap-4'>
                <Father ring={ring} ></Father>
                <Uncle></Uncle>
                <Aunty ring2 = {ring2}></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;