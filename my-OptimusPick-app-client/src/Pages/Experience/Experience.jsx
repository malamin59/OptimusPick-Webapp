import React, { useState } from "react";
import { motion } from "framer-motion"; 
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
import UseAuth from "../../Hooks/UseAuth";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const Experience = () => {
  const { register, handleSubmit, reset } = useForm();
  // const useAxios = useAxiosSecure();
  const { user } = UseAuth();
  const [imageUrl, setImageUrl] = useState("");

  const handleImageUpload = async (e) => {
    const imageFile = e.target.files[0];
    const formData = new FormData();
    formData.append("image", imageFile);
    try {
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMAGE_APT_KEY
        }`,
        formData
      );
      if (res.data.success) {
        setImageUrl(res.data.data.url);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  const onSubmit = async (data) => {
    const email = user?.email;
    const name = user?.displayName;
    
    const formData = {
      ...data,
      email,
      name,
      imageUrl,
    };
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/experience`,
        formData
      );
      // console.log(formData)
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Comment created successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    } catch (err) {
      console.error("Post failed:", err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-3xl mx-auto px-4 py-6"
    >
      <h2 className="text-3xl font-bold text-center  italic ">Share Your Experience</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5 bg-white p-6 rounded-xl shadow"
      >
        <input
          type="text"
          {...register("text")}
          placeholder="Experience Title"
          required
          className="input input-bordered w-full"
        />

        <textarea
          {...register("details")}
          rows="5"
          placeholder="Describe your experience..."
          required
          className="textarea textarea-bordered w-full"
        ></textarea>

        <input
          type="file"
          onChange={handleImageUpload}
          className="file-input file-input-bordered w-full"
          required
        />

        <button type="submit" className="btn btn-primary w-full">
          Post Experience
        </button>
      </form>
    </motion.div>
  );
};

export default Experience;
