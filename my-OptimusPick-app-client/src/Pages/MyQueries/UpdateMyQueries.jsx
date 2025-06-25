import { useLoaderData } from 'react-router';
import { FaBoxOpen, FaTags, FaImage, FaQuestionCircle, FaBan, FaPaperPlane } from "react-icons/fa";
import { FiRefreshCcw } from 'react-icons/fi';
import axios from 'axios';
import Swal from 'sweetalert2';

const UpdateMyQueries = () => {
    const updateMyQueries = useLoaderData();
    // console.log(updateMyQueries)
    const { productName, productBrand, _id, productImageUrl, queryTitle, boycottReason } = updateMyQueries;

    const handleUpdateQueries = e => {
        e.preventDefault();
        const from = e.target;
        const fromData = new FormData(from);
        const UpdateQueriesData = Object.fromEntries(fromData.entries());

        axios.put(`${import.meta.env.VITE_API_URL}/updateMyQueries/${_id}`, UpdateQueriesData)
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Queries updated Successfully !",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }

    return (
        <div>
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center px-4 py-6">
                <form onSubmit={handleUpdateQueries}

                    className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-xl space-y-6 transition-all duration-300 hover:shadow-2xl"
                >
                    <h2 className="text-2xl font-bold text-center text-indigo-700">
                        Update Product Query</h2>
                    <div className="space-y-1">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            <FaBoxOpen className="text-indigo-600" /> Product Name
                        </label>
                        <input
                            defaultValue={productName}
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
                            defaultValue={productBrand}
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
                            defaultValue={productImageUrl}
                            type="text"
                            name="productImageUrl"
                            placeholder="https://example.com/image.jpg"
                            required
                            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            <FaQuestionCircle className="text-indigo-600" /> Query Title
                        </label>
                        <input
                            defaultValue={queryTitle}
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
                            defaultValue={boycottReason}
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
                        <FiRefreshCcw /> Update Query
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateMyQueries;