import Lottie from "lottie-react";
import errorAnimation from "../../assets/Animation - 1751379523560.json";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 px-4 text-center">
      <div className="w-full max-w-md">
        <Lottie animationData={errorAnimation} loop={true} />
      </div>
      <h1 className="text-4xl font-bold text-red-600 mt-6">
        Oops! Page Not Found
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mt-2 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
