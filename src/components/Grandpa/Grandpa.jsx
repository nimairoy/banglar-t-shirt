import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

export const RingContext = createContext('Sada Sada Kala Kala');
export const WatchContext = createContext('China Watch');
export const MoneyContext = createContext(0)

const Grandpa = () => {
    const ring = 'Diamond Ring';
    const ring2 = 'Golden Ring';

    const [money, setMoney] = useState(0);



    return (
        <div className='text-center px-12'>
            <h2 className='text-3xl font-bold mt-6'>GrandPa</h2>
            <p>Has Money: {money}</p>
            {ring}
            <p></p>
            {ring2}
            <section className='grid md:grid-cols-3 md:gap-4'>
                <MoneyContext.Provider value={[money, setMoney]}>
                    <WatchContext.Provider value='Golden Watch'>
                        <RingContext.Provider value='Silver Ring'>
                            <Father ring={ring} ></Father>
                            <Uncle></Uncle>
                            <Aunty ring2 = {ring2}></Aunty>
                        </RingContext.Provider>
                    </WatchContext.Provider>
                </MoneyContext.Provider>
            </section>
        </div>
    );
};

export default Grandpa;


/***
 * step 1. create a context 
 * step 2. create the context provider
 * step 3. use the context 
 ***/