import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='mx-auto'>
            <div className="navbar px-2 md:px-12 bg-gray-600 text-white">
                <div className="w-10">
                    <Link className="normal-case text-sm md:text-xl">Banglar T-Shirt</Link>
                </div>
                <div className="flex-none m-0 md:ml-auto">
                    <ul className="menu menu-horizontal px-1">
                        <Link className='ml-2 text-xs md:text-base md:ml-6' to='/' >Home</Link>
                        <Link className='ml-2 text-xs md:text-base md:ml-6' to='/order-review' >Order Review</Link>
                        <Link className='ml-2 text-xs md:text-base md:ml-6' to='/about' >About</Link>
                        <Link className='ml-2 text-xs md:text-base md:ml-6' to='/grandpa' >Grandpa</Link>
                        <Link className='ml-2 text-xs md:text-base md:ml-6' to='/contact' >Contact</Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;