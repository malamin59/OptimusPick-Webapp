import { Fade, Slide, Zoom } from "react-awesome-reveal";
import {
  FaQuestionCircle,
  FaLightbulb,
  FaCheckCircle,
  FaSearch,
  FaRegCommentDots,
  FaTrashAlt,
} from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <Zoom triggerOnce>
          <h2 className="text-5xl font-extrabold mb-4 text-indigo-700 drop-shadow-lg">
            How It Works
          </h2>
        </Zoom>
        <Fade direction="up" delay={300} triggerOnce>
          <p className="max-w-3xl mx-auto mb-16 text-lg text-gray-700">
            Discover the smooth flow of posting queries, sharing recommendations, and managing your products.
          </p>
        </Fade>

        <div className="grid gap-12 md:grid-cols-3 max-w-5xl mx-auto text-left">
          <Slide direction="left" triggerOnce>
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:scale-[1.05] transform transition duration-500 ease-in-out">
              <div className="text-blue-500 text-5xl mb-5 animate-bounce">
                <FaQuestionCircle />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-indigo-900">
                Step 1: Add Your Query
              </h3>
              <p className="text-gray-600">
                Share your experience by posting a detailed query with reasons to boycott a product.
              </p>
            </div>
          </Slide>

          <Slide direction="up" triggerOnce>
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:scale-[1.05] transform transition duration-500 ease-in-out">
              <div className="text-pink-500 text-5xl mb-5 animate-pulse">
                <FaRegCommentDots />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-pink-700">
                Step 2: Get Recommendations
              </h3>
              <p className="text-gray-600">
                Other users suggest alternative products and share their opinions.
              </p>
            </div>
          </Slide>

          <Slide direction="right" triggerOnce>
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:scale-[1.05] transform transition duration-500 ease-in-out">
              <div className="text-green-600 text-5xl mb-5 animate-spin-slow">
                <FaLightbulb />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-green-900">
                Step 3: Explore Ideas
              </h3>
              <p className="text-gray-600">
                Browse through recommendations to find the best products matching your needs.
              </p>
            </div>
          </Slide>

          <Slide direction="left" delay={200} triggerOnce>
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:scale-[1.05] transform transition duration-500 ease-in-out">
              <div className="text-yellow-500 text-5xl mb-5 animate-bounce">
                <FaSearch />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-700">
                Step 4: Search Queries
              </h3>
              <p className="text-gray-600">
                Use powerful search to find queries and products posted by others.
              </p>
            </div>
          </Slide>

          <Slide direction="up" delay={400} triggerOnce>
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:scale-[1.05] transform transition duration-500 ease-in-out">
              <div className="text-purple-600 text-5xl mb-5 animate-pulse">
                <FaCheckCircle />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-900">
                Step 5: Make Decisions
              </h3>
              <p className="text-gray-600">
                Pick the top recommended products and make informed buying decisions.
              </p>
            </div>
          </Slide>

          <Slide direction="right" delay={600} triggerOnce>
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:scale-[1.05] transform transition duration-500 ease-in-out">
              <div className="text-red-500 text-5xl mb-5 animate-pulse">
                <FaTrashAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-red-700">
                Step 6: Manage Your Posts
              </h3>
              <p className="text-gray-600">
                Update or delete your queries and recommendations anytime.
              </p>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
