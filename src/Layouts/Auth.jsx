import React from 'react';
import Logo from '../Components/Logo';
import { Outlet } from 'react-router';
import authImg from '../assets/authImage.png'

const Auth = () => {
    return (
        <div>
            <Logo></Logo>
           <div className='flex mt-10'>
             <div className='flex-1'>
                <Outlet></Outlet>
            </div>
            <div className='flex-1 border-2'>
                <img src={authImg} alt="" />
            </div>
           </div>
        </div>
    );
};

export default Auth;