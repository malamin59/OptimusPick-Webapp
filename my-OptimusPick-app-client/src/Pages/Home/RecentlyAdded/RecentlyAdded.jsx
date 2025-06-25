import React from 'react';
import {
    FaClock, FaCalendarAlt, FaThumbsUp, FaStoreAlt
} from 'react-icons/fa';
import { Link } from 'react-router'; // Use 'react-router-dom' instead of 'react-router'

const RecentlyAdded = ({ recentlyAdd }) => {
    const {
        productName, queryTitle, time, _id,
        productImageUrl, recommendationCount, productBrand, date, boycottReason,
    } = recentlyAdd;

    return (
        <div className="flex justify-center items-center px-4 py-6">
            <div className="bg-white rounded-2xl  shadow-lg overflow-hidden  w-full max-w-md hover:shadow-2xl transition duration-300 ease-in-out">

                {/* Product Image */}
                <div className="flex justify-center ">
                    <img
                        src={productImageUrl}
                        alt={productName}
                        className=" object-cover lg:w-5/12"
                    />
                </div>

                {/* Content */}
                <div className="p-6 space-y-3 text-gray-700">
                    <h2 className="text-xl font-bold text-gray-900">{queryTitle}</h2>

                    <p><span className="font-semibold">Product Name:</span> {productName}</p>
                    <p className="flex items-center gap-2 text-sm"><FaStoreAlt /> Brand: {productBrand}</p>
                    <p className="flex items-center gap-2 text-sm"><FaClock /> Time: {time}</p>
                    <p className="flex items-center gap-2 text-sm"><FaCalendarAlt /> Date: {date}</p>
                    <p><span className="font-semibold">Boycott Reason:</span> {boycottReason}</p>
                    <p className="flex items-center gap-2 text-sm"><FaThumbsUp /> Recommend: {recommendationCount}</p>

                    <Link to={`/queriesDetails/${_id}`}>
                        <button className="mt-3 w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition-all">
                            See more
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RecentlyAdded;
