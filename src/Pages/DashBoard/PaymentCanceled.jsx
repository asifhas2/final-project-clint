import React from 'react';
import { Link } from 'react-router';

const PaymentCanceled = () => {
    return (
        <div>
            <h3>your payment is canceled now ! </h3>
            <Link to='/dashBord/my-parcels'><button className='btn bg-green-500'>try again</button></Link>
        </div>
    );
};

export default PaymentCanceled;