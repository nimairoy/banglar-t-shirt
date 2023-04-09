import React from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Father = ({ring}) => {
    return (
        <div className='text-center p-4 rounded-lg mt-6 border border-pink-600'>
            <h2 className='text-3xl font-bold'>Father</h2>
            <section className='grid grid-cols-3 gap-2'>
                <Myself ring={ring}></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Father;