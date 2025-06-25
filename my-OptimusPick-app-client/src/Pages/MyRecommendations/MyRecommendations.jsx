import React, { useEffect, useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FaTrashAlt } from 'react-icons/fa';
import { myRecommendedPromise } from '../../Hooks/myRecommendedPromise';

const MyRecommendations = () => {
  const { user } = UseAuth();
  const [myQueries, setMyQueries] = useState([]);


  useEffect(() => {
    if (user?.email && user?.accessToken)
      myRecommendedPromise(user.email, user.accessToken)
        .then(data => {
          setMyQueries(data)
        }
        )
        .catch(err => console.log(err))
  }, [user?.email, user?.accessToken])



  const handleDelete = (id, queryId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${import.meta.env.VITE_API_URL}/deleteRecommenderData/${id}/${queryId}`)

          .then(res => {
            console.log(res.data)
            const updatedQueries = myQueries.filter(query => query._id !== id);
            setMyQueries(updatedQueries);
          })
          .catch(error => {
            console.log(error)
          })
        Swal.fire({
          title: "Deleted!",
          text: "Your Recommended has been deleted.",
          icon: "success"
        });
      }
    });

  }
  return (
    <div className="p-6">
      <h2 className="text-2xl  font-bold flex justify-center items-center gap-2 text-indigo-600 mb-6">

        My Recommendations
      </h2>
      {myQueries.length === 0 ? (
        <p className="text-center text-gray-600 text-lg mt-10">
          Currently, you have no recommendations.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-lg rounded-xl overflow-hidden">
            <thead className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold"> Product</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Title</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Reason</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Time</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(myQueries) &&
                myQueries.map((query, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-indigo-50 transition-colors"
                  >
                    <td className="px-6 py-4 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-md overflow-hidden border">
                        <img
                          src={query.productImage}
                          alt="Product"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-800">
                        {query.productName}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">{query.queryTitle}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{query.reason}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{query.date}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{query.time}</td>
                    <td>
                      <button onClick={() => handleDelete(query._id, query.id)}
                        className="text-red-500 px-6 py- text-sm btn hover:text-red-700 transition-colors duration-200"
                        title="Delete"
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyRecommendations;
