import axios from 'axios';
import {
  FaClock, FaCalendarAlt, FaUser, FaEnvelope, FaThumbsUp, FaStoreAlt
} from 'react-icons/fa';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const   MyQueriesDetailsPage = ({ myAddedData, onDelete }) => {

  const {
    productName, queryTitle, time, _id,
    productImageUrl, recommendationCount, productBrand, date, boycottReason,
  } = myAddedData;


  const handleDeleteQueries = () => {
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
        axios.delete(`${import.meta.env.VITE_API_URL}/deleteQueries/${_id}`)
          .then(res => {
            // console.log(res.data)
            if (res.data.deletedCount > 0) {
              onDelete(_id)
              Swal.fire({
                title: "Deleted!",
                text: "Your queries has been deleted.",
                icon: "success"
              });
            }
          })

      }
    });

  }




  return (
    <div>
      <div className="flex justify-center items-center px-4  py-6">

        <div className="lg:flex bg-white rounded-lg shadow-md overflow-hidden w-full max-w-5xl">

          {/* Product Image */}
          <div className="lg:w-full">
            <img className="w-full " src={productImageUrl} alt={productName} />
          </div>

          {/* Details */}
          <div className="p-6 space-y-3">
            <h2 className="text-2xl font-bold text-gray-800">{queryTitle}</h2>

            <p><span className="font-semibold">Product Name:</span> {productName}</p>
            <p className="flex items-center gap-2"><FaStoreAlt /> <span>Brand: {productBrand}</span></p>
            <p className="flex items-center gap-2"><FaClock /> <span>Time: {time}</span></p>
            <p className="flex items-center gap-2"><FaCalendarAlt /> <span>Date: {date}</span></p>
            <p><span className="font-semibold">Boycott Reason:</span> {boycottReason}</p>
            <p className="flex items-center gap-2"><FaThumbsUp />    <span>Recommend: {recommendationCount}</span></p>
            <div className='flex gap-3'>

              <Link to={`/queriesDetails/${_id}`}>
                <button className='btn bg-pink-600'>
                  View</button>
              </Link>
              <Link to={`/updateMyQueries/${_id}`}> <button className='btn bg-sky-600'> Update </button> </Link>
              <button onClick={() => handleDeleteQueries(myAddedData._id)} className='btn bg-red-600'>  Delete </button>


            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MyQueriesDetailsPage;