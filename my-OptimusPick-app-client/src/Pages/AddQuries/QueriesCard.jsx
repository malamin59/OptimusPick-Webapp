import { Link } from "react-router";
import { FaBoxOpen, FaTag, FaHeart } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";

const QueriesCard = ({ querie }) => {
  const { _id, queryTitle, productName, productBrand, recommendationCount } =
    querie;

  return (
    <div className="w-full mb-5 max-w-sm">
      <div
        className="
          bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
          rounded-2xl shadow-2xl
          transform hover:scale-[1.03] hover:shadow-[0_0_15px_rgba(255,0,110,0.6)]
          transition-transform duration-300 ease-in-out
          border border-white/30
        "
      >
        <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-2xl p-6">
          <p className="text-gray-700 mb-2 flex items-center gap-1">
            <FaTag className="text-pink-600" />
            <span className="font-semibold"></span> {productName}
          </p>
          <div className="flex flex-col gap-3 mb-2">
            <span className="inline-flex items-center w-fit gap-1 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full drop-shadow-md">
            <FaBoxOpen className="text-white" />
            {productBrand}
          </span>
          <span className="inline-flex w-fit items-center gap-1 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full drop-shadow-md">
            <FaHeart className="text-white" />
            {recommendationCount} Recommendations
          </span>
          </div>

          <div className="flex justify-end">
            <Link to={`/queriesDetails/${_id}`}>
              <button
                className="
                  flex items-center gap-2
                  bg-pink-600 hover:bg-pink-700
                  text-white font-semibold
                  py-2 px-6 rounded-full
                  shadow-lg
                  transition-colors duration-300
                  focus:outline-none focus:ring-4 focus:ring-pink-300
                "
              >
                Recommend <MdArrowForwardIos />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueriesCard;
