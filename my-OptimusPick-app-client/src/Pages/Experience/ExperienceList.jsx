import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import GetExperience from "./GetExperience";
import { Link } from "react-router";

const ExperienceList = () => {
  const { data: experiences = [], isLoading, isError } = GetExperience();
  const listRef = useRef(null);
  const [offsetY, setOffsetY] = useState(0);

  const scrollSpeed = 1;      // px per frame
  const frameRate = 30;       // interval in ms

  useEffect(() => {
    const interval = setInterval(() => {
      if (listRef.current) {
        const totalHeight = listRef.current.scrollHeight / 2; // because of duplication
        setOffsetY((prev) => {
          if (prev >= totalHeight) {
            return 0; // reset scroll when reached bottom
          }
          return prev + scrollSpeed; // move down (y increases)
        });
      }
    }, frameRate);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) return <p>লোড হচ্ছে...</p>;
  if (isError || experiences.length === 0)
    return <p>কোনও কমেন্ট পাওয়া যায়নি!</p>;

  const formatDateToBD = (isoString) => {
    return new Date(isoString).toLocaleString("en-BD", {
      timeZone: "Asia/Dhaka",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  return (
  <div className="mb-20">
     <div className="lg:flex text-center gap-2   justify-center items-center mt-10 lg:text-4xl md:text-3xl text-2xl text-primary italic font-bold">
       <p> Our user sey</p> 
       <Link to='/experience' className="text-xl btn btn-primary lg:mt-0 mt-2"> Share your Experience</Link>
     </div>
      <div className="relative h-[300px] my-10 w-full overflow-hidden  p-4">
      
      <motion.div
        ref={listRef}
        style={{ y: -offsetY }} 
        className="flex flex-col gap-4"
      >
        {[...experiences, ...experiences].map((exp, index) => (
          <div
            key={`${exp._id}-${index}`}
            className="flex items-start gap-3 bg-gray-100 p-3 rounded-md shadow-sm w-full"
          >
            {exp.imageUrl && (
              <img
                src={exp.imageUrl}
                alt="user"
                className="w-10 h-10 rounded-full object-cover border"
              />
            )}
            <div>
              <h2 className="text-sm font-bold">{exp.name}</h2>
              <p className="text-xs text-gray-700">{exp.text}</p>
              <p className="text-xs text-gray-700">{exp.details}</p>
              <p className="text-xs text-gray-700">
                📅 {formatDateToBD(exp.create_At)}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </div>
  );
};

export default ExperienceList;


