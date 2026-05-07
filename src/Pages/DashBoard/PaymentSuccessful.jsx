import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const PaymentSuccessful = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState({});
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxiosSecure();
  // console.log(sessionId);

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`payment-success?session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data);
          setPaymentInfo({
            transactionId: res.data.transitionId,
            trackingId: res.data.trackingId,
          });
        });
    }
  }, [sessionId, axiosSecure]);

  return (
    <div>
      <h3 className="text-4xl font-bold text-black">Payment successful</h3>
      <div>
        <h3>your transaction  id is: {paymentInfo.transactionId}</h3>
        <h3>your tracking id : {paymentInfo.trackingId}</h3>
      </div>
    </div>
  );
};

export default PaymentSuccessful;
