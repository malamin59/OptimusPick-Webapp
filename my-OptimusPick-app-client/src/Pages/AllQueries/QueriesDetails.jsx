import { useLoaderData } from 'react-router';
import {
  FaClock, FaCalendarAlt, FaUser, FaEnvelope, FaThumbsUp, FaStoreAlt
} from 'react-icons/fa';
import UseAuth from '../../Hooks/UseAuth';
import { useState } from 'react';
import axios from 'axios';
import RecommendationSection from './RecommendationSection/RecommendationSection';
import { toast } from 'react-toastify';


const QueriesDetails = () => {
  const queriesDetails = useLoaderData();
  const { user } = UseAuth();
  // console.log(user)
  const {
    productName, queryTitle, time, _id, userEmil, userName, userPhoto,
    productImageUrl, recommendationCount, productBrand, date, boycottReason,
  } = queriesDetails;


  const [recommends, setRecommends] = useState(Number(recommendationCount) || 0);

  const handleCountRecommendation = () => {
    if (user?.email === userEmil) {
      return alert("You can't like your own post.");

    }


    axios.patch(`${import.meta.env.VITE_API_URL}/updateRecommendationCount/${_id}`)
      .then(res => {
        // console.log('PATCH response:', res.data);
        if (res.data.success) {
          setRecommends(prev => prev + 1);
          toast.success("Recommendation Added Successfully !");
        } else {
          alert(res.data.message);
        }
      })
      .catch(error => {
        console.error("Error updating recommendation:", error);
      });


  };



  return (
    <div>
      <div className="flex justify-center items-center px-4 lg:px-20 py-6">
        <div className="lg:flex bg-white rounded-lg shadow-md overflow-hidden w-full max-w-5xl">

          {/* Product Image */}
          <div className="lg:w-1/2">
            <img className=" mx-auto lg:w-72 md:w-62 w-52  lg:mt-5 " src={productImageUrl} alt={productName} />
          </div>

          {/* Details */}
          <div className="p-6 space-y-3">
            <h2 className="text-2xl font-bold text-gray-800">{queryTitle}</h2>

            <p><span className="font-semibold">Product Name:</span> {productName}</p>
            <p className="flex items-center gap-2"><FaStoreAlt /> <span>Brand: {productBrand}</span></p>
            <p className="flex items-center gap-2"><FaClock /> <span>Time: {time}</span></p>
            <p className="flex items-center gap-2"><FaCalendarAlt /> <span>Date: {date}</span></p>
            <p><span className="font-semibold">Boycott Reason:</span> {boycottReason}</p>
            <p className="flex items-center gap-2"><FaThumbsUp /> <span>Recommend: {recommends}</span></p>
            <p className="flex items-center gap-2"><FaUser /> <span>{userName}</span></p>
            <p className="flex items-center gap-2"><FaEnvelope /> <span>{userEmil}</span></p>

            <div className="flex items-center gap-2">
              <span className="font-semibold">User Photo:</span>
              <img className="w-10 h-10 rounded-full border" src={userPhoto} alt={userName} />
            </div>
          </div>
        </div>
      </div>
      <RecommendationSection _id={_id} queriesDetails={queriesDetails} handleCountRecommendation={handleCountRecommendation}

      />

    </div>

  );
};

export default QueriesDetails;
