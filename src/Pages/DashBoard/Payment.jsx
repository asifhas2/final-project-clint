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

    const handelPayButton =async()=>{
        const paymentInfo ={
            cost : parcel.cost,
            parcelName:parcel.parcelName,
            parcelId:parcel._id,
            senderEmail:parcel.senderEmail
        }

        const res = await axiosSecure.post('/create-checkout-session',paymentInfo);
        window.location.href=res.data.url;
        console.log(res.data);
    }

    return (
        <div>
            please pay for : {parcel.parcelName} and your payable amount is ${parcel.cost}
            <button onClick={handelPayButton} className='text-black btn btn-sm bg-green-500'>pay</button>
        </div>
    );
};  
export default Payment;