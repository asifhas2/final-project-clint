import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { BiCommentDetail } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: parcels = [],refetch } = useQuery({
    queryKey: ["myParcels", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });

  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcels/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
    console.log(id);
  };

  return (
    <div>
      <h1>All my parcels : {parcels.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
                <th>price</th>
              <th>Payment</th>
              <th>Delivery status</th>
            
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr className="bg-base-200">
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                 <td>{parcel.cost}</td>

                <td>
                    {
                        parcel.paymentStatus === 'paid'?
                        <span className="btn btn-sm bg-green-500">paid</span>:
                        <Link to={`/dashBord/payment/${parcel._id}`}>
                        <button className="text-black btn btn-sm bg-amber-400">Pay</button>
                        </Link>
                    }
                </td>
                <td></td>
               
                <td>
                  <button className="btn btn-square hover:bg-amber-500">
                    <BiCommentDetail />
                  </button>
                  <button className="btn btn-square hover:bg-amber-500 mx-3">
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handelDelete(parcel._id)}
                    className="btn btn-square hover:bg-amber-500"
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}

            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
