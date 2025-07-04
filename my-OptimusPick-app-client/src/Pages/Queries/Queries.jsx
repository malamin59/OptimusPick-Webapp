import React, { useEffect, useState } from "react";
import QueriesCard from "../AddQuries/QueriesCard";
import { FaBoxOpen, FaQuestionCircle, FaSearch } from "react-icons/fa";
import { MdOutlineQueryStats } from "react-icons/md";
import { RiChatSmile3Line } from "react-icons/ri";

const Queries = () => {
  const [queries, setQueries] = useState([]);
  const [columns, setColumns] = useState(1); // default to 1
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_API_URL}/getAllQueries?searchParams=${search}`
    )
      .then((res) => res.json())
      .then((data) => setQueries(data))
      .catch((error) => console.log(error));
  }, [search]);

  const getGridColsClass = () => {
    return `grid-cols-${columns}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-20 lg:px-8">
      {/* Header */}
      <div className="text-center my-10">
        <h2 className="text-4xl md:text-5xl font-extrabold italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-red-500 drop-shadow-md inline-flex items-center gap-3 justify-center">
          <FaQuestionCircle className="text-pink-500 animate-bounce" />
          All Queries Are Here
          <RiChatSmile3Line className="text-indigo-500 animate-pulse" />
        </h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base flex justify-center items-center gap-1">
          <MdOutlineQueryStats className="text-blue-500" />
          Stay informed with the latest product questions
        </p>
      </div>

      {/* Search */}
      <div className="space-y-1 mb-3 text-center">
        <label className="flex items-center gap-2 justify-center text-sm font-medium text-gray-700">
          <FaBoxOpen className="text-indigo-600" />
          <h2 className="lg:text-3xl md:text-2xl text-xl font-extrabold italic text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-pink-500 to-green-500 drop-shadow-md inline-flex items-center gap-3 mb-3 justify-center">
            Search By Product Name
          </h2>
        </label>

        <div className="relative w-full lg:w-2/3 mx-auto">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            name="productName"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 px-10 py-2 rounded-3xl
             focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
      </div>

      {/* Buttons for Mobile (only 1 or 2 column) */}
      <div className="flex justify-center gap-4 mb-6 md:hidden">
        {[1, 2].map((num) => (
          <button
            key={num}
            onClick={() => setColumns(num)}
            className={`px-4 py-2 rounded ${
              columns === num ? "bg-indigo-600 text-white" : "bg-gray-200"
            }`}
          >
            {num} Column{num > 1 ? "s" : ""}
          </button>
        ))}
      </div>

      {/* Buttons for Tablet/Desktop (3 or 4 column) */}
      <div className="justify-center gap-4 mb-6 hidden md:flex">
        {[1, 2, 3, 4].map((num) => (
          <button
            key={num}
            onClick={() => setColumns(num)}
            className={`px-4 py-2 rounded ${
              columns === num ? "bg-indigo-600 text-white" : "bg-gray-200"
            }`}
          >
            {num} Columns
          </button>
        ))}
      </div>

      {/* Grid of Cards */}
      <div className={`grid ${getGridColsClass()} gap-6`}>
        {queries.map((querie) => (
          <QueriesCard key={querie._id} querie={querie} />
        ))}
      </div>

      {/* No Data */}
      {queries.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No queries found. Please try again later.
        </p>
      )}
    </div>
  );
};

export default Queries;
