import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email:${user.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <h3 className="text-4xl font-bold">Payments History {payments.length}</h3>

      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Amount</th>
              <th>transitionId</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{payment.parcelName}</td>
                <td>{payment.amount}</td>
                <td>{payment.transitionId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
