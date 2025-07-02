import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const GetExperience = () => {
  const axiosSecure = useAxiosSecure();

  return useQuery({
    queryKey: ["experience"],
    queryFn: async () => {
        const res = await axiosSecure.get("/userExperience"); // your backend will sort it
        return res.data;
       
    },
}
);

  

};

export default GetExperience;
