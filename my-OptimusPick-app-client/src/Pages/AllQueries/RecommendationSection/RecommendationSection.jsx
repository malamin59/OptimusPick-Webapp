import { MdTitle } from "react-icons/md";
import {
  FaBoxOpen,
  FaImage,
  FaRegCommentDots,
  FaRegEdit,
} from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import UseAuth from "../../../Hooks/UseAuth";
import { useParams } from "react-router";
import axios from "axios";
import ParticularInfo from "./ParticularInfo/ParticularInfo";

const RecommendationSection = ({
  queriesDetails,
  _id,
  handleCountRecommendation,
}) => {
  const { id } = useParams();
  // console.log(id)
  const { user } = UseAuth();

  const handleRecommendation = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const recommendQueries = Object.fromEntries(formData.entries());
    recommendQueries.id = id;

    recommendQueries.userEmil = queriesDetails.userEmil;
    recommendQueries.userName = queriesDetails.userName;
    recommendQueries.productName = queriesDetails.productName;
    recommendQueries.queryTitle = queriesDetails.queryTitle;

    if (user?.email) {
      recommendQueries.recommendedUserEmail = user.email;
      recommendQueries.recommendedUserName = user.displayName || "Anonymous";
    }

    recommendQueries.date = new Date().toLocaleDateString();
    recommendQueries.time = new Date().toLocaleTimeString();

    axios
      .post(
        `${import.meta.env.VITE_API_URL}/allRecommendation`,
        recommendQueries
      )
      .then((res) => {
        if (res.data.insertedId) {
          handleCountRecommendation();
          form.reset();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <section className="max-w-3xl mx-auto mt-6 mb-10 p-8 bg-gradient-to-br from-white via-slate-50 to-blue-50 rounded-2xl shadow-lg border border-blue-100">
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-8 text-gray-700">
          <FaRegEdit className="text-3xl text-blue-600" />
          <h2 className="text-3xl font-bold tracking-wide">
            Recommendation Section
          </h2>
        </div>

        <form onSubmit={handleRecommendation} className="space-y-6">
          {/* Title Input */}
          <div>
            <label className="flex items-center gap-2 text-gray-700 mb-1 font-medium">
              <MdTitle className="text-xl text-blue-500" />
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter recommendation title"
              className="w-full px-4 py-2.5 border rounded-lg shadow-sm border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              required
            />
          </div>

          {/* Product Name Input */}
          <div>
            <label className="flex items-center gap-2 text-gray-700 mb-1 font-medium">
              <FaBoxOpen className="text-xl text-green-500" />
              Product Name
            </label>
            <input
              type="text"
              name="productName"
              placeholder="Recommended product name"
              className="w-full px-4 py-2.5 border rounded-lg shadow-sm border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
              required
            />
          </div>

          {/* Product Image URL Input */}
          <div>
            <label className="flex items-center gap-2 text-gray-700 mb-1 font-medium">
              <FaImage className="text-xl text-pink-500" />
              Product Image URL
            </label>
            <input
              type="url"
              name="productImage"
              placeholder="Paste image URL here"
              className="w-full px-4 py-2.5 border rounded-lg shadow-sm border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"
              required
            />
          </div>

          {/* Recommendation Reason */}
          <div>
            <label className="flex items-center gap-2 text-gray-700 mb-1 font-medium">
              <FaRegCommentDots className="text-xl text-yellow-500" />
              Reason
            </label>
            <textarea
              name="reason"
              placeholder="Why do you recommend this product?"
              rows="5"
              className="w-full px-4 py-2.5 border rounded-lg shadow-sm border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all"
              required
            />
          </div>

          {/* Divider */}
          <hr className="border-t-2 border-dashed border-blue-200" />

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-200"
            >
              <IoMdSend className="text-xl" />
              Add Recommendation
            </button>
          </div>
        </form>
      </section>
      <ParticularInfo id={_id}> </ParticularInfo>
    </div>
  );
};

export default RecommendationSection;
