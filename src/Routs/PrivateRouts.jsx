import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLoaderData, useLocation } from 'react-router';

const PrivateRouts = ({children}) => {
    const {user,loading}=useAuth();
    const location =useLocation();
    console.log(location);

    if(loading){
        return <span className="loading loading-bars loading-md"></span>
    }
    if(!user){
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
    return children;
};

export default PrivateRouts;