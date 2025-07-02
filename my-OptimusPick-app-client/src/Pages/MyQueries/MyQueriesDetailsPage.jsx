import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router"; // ✅ router-dome use করো
import UseAuth from "../../Hooks/UseAuth";
import Loading from "../Loading/loading";

const MyQueriesDetailsPage = ({ myAddedData, onDelete }) => {

  const {loading} = UseAuth()
  
  const {
    _id,
    productName,
    queryTitle,
    time,
    productBrand,
    date,
    recommendationCount,
  } = myAddedData;

  const handleDeleteQueries = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_API_URL}/deleteQueries/${_id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              onDelete(_id);
              Swal.fire("Deleted!", "Your query has been deleted.", "success");
            }
          });
      }
    });
  };
  if(loading) {
    return Loading
  }

  return (
    <tr className="border-b hover:bg-gray-50 text-sm">
      <td className="p-2 font-semibold">{queryTitle}</td>
      <td className="p-2">{productName}</td>
      <td className="p-2">{productBrand}</td>
      {/* <td className="p-2">{boycottReason}</td> */}
      <td className="p-2">{time}</td>
      <td className="p-2">{date?.slice(0, 10)}</td>
      <td className="pl-12">{recommendationCount}</td>
      <td className="p-2 space-x-2">
        <Link to={`/queriesDetails/${_id}`}>
          <button className="btn btn-xs bg-pink-600 text-white">View</button>
        </Link>
        <Link to={`/updateMyQueries/${_id}`}>
          <button className="btn btn-xs bg-sky-600 text-white">Update</button>
        </Link>
        <button
          onClick={handleDeleteQueries}
          className="btn btn-xs bg-red-600 text-white"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MyQueriesDetailsPage;
