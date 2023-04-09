import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='mx-auto'>
            <div className="navbar px-12 bg-gray-600 text-white">
                <div className="flex-1">
                    <Link className="btn btn-ghost normal-case text-xl">Banglar T-Shirt</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <Link className='ml-6' to='/' >Home</Link>
                        <Link className='ml-6' to='/order-review' >Order Review</Link>
                        <Link className='ml-6' to='/about' >About</Link>
                        <Link className='ml-6' to='/grandpa' >GrandPa</Link>
                        <Link className='ml-6' to='/contact' >Contact</Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;