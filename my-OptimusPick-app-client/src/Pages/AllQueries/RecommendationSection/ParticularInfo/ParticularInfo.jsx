import React, { useEffect, useState } from 'react';
import {
  FaUserCircle,
  FaCalendarAlt,
  FaClipboardList,
  FaBoxOpen,
  FaRegQuestionCircle,
} from 'react-icons/fa';

const ParticularInfo = ({ id }) => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/particular/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setQueries(data);
        setLoading(false);
        // console.log(data)
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center my-10 text-lg">Loading...</div>;
  if (queries.length === 0) return <div className="text-center my-10 text-lg">No Recommendation found.</div>;

  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 py-10">
      {queries.map((querie, index) => (
        <div
          key={index}
          className="bg-white shadow-xl rounded-2xl overflow-hidden transition-transform hover:scale-105 duration-300 border-t-4 border-indigo-500"
        >
          <img
            src={querie.productImage}
            alt="Query Thumbnail"
            className="w-42  mx-auto object-cover"
          />
          <div className="p-5 space-y-3 text-gray-700">
            <h2 className="text-xl font-bold flex items-center gap-2 text-indigo-600">
              <FaClipboardList className="text-blue-500" /> {querie.queryTitle}
            </h2>

            <p className="flex items-center gap-2">
              <FaBoxOpen className="text-green-500" />
              <span className="font-medium">Product:</span> {querie.productName}
            </p>

            <p className="flex items-center gap-2">
              <FaRegQuestionCircle className="text-pink-500" />
              <span className="font-medium">Reason:</span> {querie.reason}
            </p>

            <p className="flex items-center gap-2">
              <FaCalendarAlt className="text-orange-500" />
              <span className="font-medium">Date:</span> {querie.date}
            </p>

            <p className="flex items-center gap-2 mt-3 text-sm text-gray-800">
              <FaUserCircle className="text-purple-600 text-lg" />
              <span className="font-medium">By:</span> {querie.recommendedUserName}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ParticularInfo;
