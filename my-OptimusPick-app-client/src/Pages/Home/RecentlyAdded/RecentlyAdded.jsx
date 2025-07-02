import React from "react";
import { FaClock, FaCalendarAlt, FaThumbsUp, FaStoreAlt } from "react-icons/fa";
import { Link } from "react-router"; // Use 'react-router-dom' instead of 'react-router'

const RecentlyAdded = ({ recentlyAdd }) => {
  const {
    productName,
    queryTitle,
    _id,
    productImageUrl,
    recommendationCount,
    productBrand,
  } = recentlyAdd;

  return (
    <div className="flex justify-center items-center px-4 py-4 ">
      <div className="bg-white rounded-2xl  shadow-lg overflow-hidden  w-full max-w-md hover:shadow-2xl transition duration-300 ease-in-out">
        {/* Product Image */}
        <div className="flex justify-center w-30 p-2   mx-auto md:w-20 lg:w-28 ">
          <img
            src={productImageUrl}
            alt={productName}
            className=""
          />
        </div>
        {/*  */}
        {/* Content */}
        <div className="p-6 space-y-2 text-gray-700">
          <h2 className="text-xl font-bold text-gray-900">{queryTitle}</h2>

          <p>
            <span className="font-semibold">Product Name:</span> {productName}
          </p>
          <p className="flex items-center gap-2 text-sm">
            <FaStoreAlt /> Brand: {productBrand}
          </p>

          <p className="flex items-center gap-2 text-sm">
            <FaThumbsUp /> Recommend: {recommendationCount}
          </p>

          <Link to={`/queriesDetails/${_id}`}>
            <button className="mt-1 w-full btn btn-primary">
              See more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecentlyAdded;
