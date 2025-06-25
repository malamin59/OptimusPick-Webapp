import React, { useEffect, useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import { FaTrashAlt } from 'react-icons/fa';
import { MdOutlineCalendarToday, MdAccessTime } from 'react-icons/md';
import { TbDeviceMobile } from 'react-icons/tb';
import { motion } from 'framer-motion';

const RecommendationsForMe = () => {
    const { user } = UseAuth();
    const [myQueries, setMyQueries] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/getRecommendedQueries/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setMyQueries(data);
                // console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <motion.h2
                className="text-3xl font-bold text-center text-indigo-600 mb-10 flex items-center justify-center gap-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <TbDeviceMobile className="text-4xl" /> Recommendations for Me
            </motion.h2>

            {myQueries.length === 0 ? (
                <p className="text-center text-gray-500 text-lg mt-20">
                    No recommendations yet. Please check back later.
                </p>
            ) : (
                <div className="overflow-x-auto rounded-xl shadow-2xl border border-gray-100">
                    <table className="min-w-full text-sm bg-white">
                        <thead className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-left">
                            <tr>
                                <th className="px-6 py-4 font-semibold">Product</th>
                                <th className="px-6 py-4 font-semibold">Title</th>
                                <th className="px-6 py-4 font-semibold">Reason</th>
                                <th className="px-6 py-4 font-semibold"><MdOutlineCalendarToday className="inline mr-1" /> Date</th>
                                <th className="px-6 py-4 flex justify-center items-center font-semibold"><MdAccessTime className="inline mr-1" /> Time</th>
                                <th className="px-6 py-4 font-semibold text-center">Recommender User Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myQueries.map((query, index) => (
                                <motion.tr
                                    key={index}
                                    className="border-b hover:bg-indigo-50 transition-colors duration-200"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <td className="px-6 py-4 flex items-center gap-3">
                                        <img
                                            src={query.productImage}
                                            alt={query.productName}
                                            className="w-12 h-12 rounded-md object-cover border"
                                        />
                                        <span className="text-sm font-medium text-gray-800">
                                            {query.productName}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-700">{query.queryTitle}</td>
                                    <td className="px-6 py-4 text-gray-600">{query.reason}</td>
                                    <td className="px-6 py-4 text-gray-500">{query.date}</td>
                                    <td className="px-6 py-4 text-gray-500">{query.time}</td>
                                    <td className="px-6 py-4 text-center">
                                        {query.recommendedUserEmail}
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default RecommendationsForMe;
