import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../Pages/ShareComponents/Navber';
import Footer from '../Pages/ShareComponents/Footer';

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;