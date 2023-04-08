import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <h2>This is Main compo</h2>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;