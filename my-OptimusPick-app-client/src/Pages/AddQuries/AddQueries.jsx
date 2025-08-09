import axios from "axios";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import {
  FaBoxOpen,
  FaTags,
  FaImage,
  FaQuestionCircle,
  FaBan,
  FaPaperPlane,
} from "react-icons/fa";
import { toast } from "react-toastify";

const AddQueries = () => {
  const { user } = UseAuth();

  const handleAddQueries = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const queriesData = Object.fromEntries(formData.entries());

    if (user?.email) {
      queriesData.userEmil = user.email;
      queriesData.userName = user.displayName || "Anonymous";
      queriesData.userPhoto = user.photoURL || "";
    }
    queriesData.date = new Date().toLocaleDateString();
    queriesData.time = new Date().toLocaleTimeString();
    queriesData.recommendationCount = parseInt(0);
    if (!user) return toast.error("Please login to added Queries");

    axios
      .post(`${import.meta.env.VITE_API_URL}/allQueries`, queriesData)
      .then((res) => {
        if (res.data.insertedId) {
          form.reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Query Added Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center px-4 py-6">
      <form
        onSubmit={handleAddQueries}
        className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-xl space-y-6 transition-all duration-300 hover:shadow-2xl"
      >
        <h2 className="text-2xl font-bold text-center italic text-indigo-700">
          Add a Product Query
        </h2>
        <div className="space-y-1">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <FaBoxOpen className="text-indigo-600" /> Product Name
          </label>
          <input
            type="text"
            name="productName"
            placeholder="Enter Product Name"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="space-y-1">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <FaTags className="text-indigo-600" /> Product Brand
          </label>
          <input
            type="text"
            name="productBrand"
            placeholder="Enter Brand"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="space-y-1">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <FaImage className="text-indigo-600" /> Product Image URL
          </label>
          <input
            type="text"
            name="productImageUrl"
            placeholder="photoUrl"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="space-y-1">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <FaQuestionCircle className="text-indigo-600" /> Query Title
          </label>
          <input
            type="text"
            name="queryTitle"
            placeholder="Is there any better product that gives me the same quality?"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="space-y-1">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <FaBan className="text-indigo-600" /> Boycotting Reason
          </label>
          <textarea
            name="boycottReason"
            placeholder="Write the reason in detail..."
            required
            rows={4}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          <FaPaperPlane /> Added Query
        </button>
      </form>
    </div>
  );
};

export default AddQueries;
