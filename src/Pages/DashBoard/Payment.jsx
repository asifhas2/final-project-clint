import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Payment = () => {
    const {id}=useParams();
    const axiosSecure=useAxiosSecure();

    const {isLoading,data: parcel}=useQuery({
        queryKey:['parcels',id],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/parcels/${id}`)
            
            return res.data;
        }
    })

    if(isLoading){
        return  <span className="loading loading-bars loading-md"></span>
    }
    return (
        <div>
            please pay for : {parcel.parcelName}
        </div>
    );
};  
export default Payment;