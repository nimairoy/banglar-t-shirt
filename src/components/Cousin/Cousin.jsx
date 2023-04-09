import React, { useContext } from 'react';
import Friends from '../Friends/Friends';
import { MoneyContext } from '../Grandpa/Grandpa';

const Cousin = ({children , hasFriends, ring2}) => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div className='text-center p-4 rounded-lg mt-6 border border-pink-600'>
            <h2 className="text-xl font-bold">Cousin</h2>
            <h2 className="text-sm font-semibold">{children}</h2>
            {children === "Laxmi" && <span>Grandpa Money: {money}</span>}
            {hasFriends && <Friends ring2={ring2}></Friends>}
        </div>
    );
};

export default Cousin;