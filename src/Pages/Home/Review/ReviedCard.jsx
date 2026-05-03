import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviedCard = ({ data }) => {
  const { userName, review, user_photoURL } = data;
  return (
    <div className="max-w-md bg-base-200 p-6 rounded-2xl shadow-md py-5">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-3xl text-teal-300 mb-4" />

      {/* Text */}
      <p className="text-gray-600 leading-relaxed">{review}</p>

      {/* Divider */}
      <div className="border-t border-dashed border-teal-400 my-5"></div>

      {/* User Info */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <img className="h-10 rounded-4xl " src={user_photoURL} alt="" />
        {/* Name + Role */}
        <div>
          <h3 className="font-semibold text-gray-800">{userName}</h3>
          <p className="text-sm text-gray-500">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviedCard;
