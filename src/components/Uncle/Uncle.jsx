import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div className='text-center p-4 rounded-lg mt-6 border border-pink-600'>
            <h2 className='text-3xl font-bold'>Uncle</h2>
            <p>Grandpa Money: {money}</p>
            <button onClick={()=>setMoney(money + 1000)} className='btn'>Send 1000tk</button>
            <div className='grid md:grid-cols-2 gap-1'>
            <Cousin>Gouri</Cousin>
            <Cousin>Gopal</Cousin>
            </div>
        </div>
    );
};

export default Uncle;