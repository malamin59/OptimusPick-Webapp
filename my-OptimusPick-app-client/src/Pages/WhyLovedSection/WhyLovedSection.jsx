import { motion } from "framer-motion";
import { FaThumbsUp, FaStar, FaTruck, FaShieldAlt, FaHeart } from "react-icons/fa";

const reasons = [
  {
    icon: <FaThumbsUp size={30} className="text-primary" />,
    title: "Highly Rated",
    desc: "Top-rated by thousands of satisfied users.",
  },
  {
    icon: <FaTruck size={30} className="text-primary" />,
    title: "Fast Delivery",
    desc: "Most products delivered within 2 days!",
  },
  {
    icon: <FaShieldAlt size={30} className="text-primary" />,
    title: "Trusted Quality",
    desc: "Each product goes through strict quality checks.",
  },
  {
    icon: <FaStar size={30} className="text-primary" />,
    title: "Trending Picks",
    desc: "We recommend what's hot and loved right now.",
  },
];

const WhyLovedSection = () => {
  return (
    <section className="py-14 bg-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center gap-2 mb-10"
      >
        <FaHeart size={26} className="text-red-500" />
        <h2 className="text-3xl font-bold text-center">
          Why People Love These Products
        </h2>
        <FaHeart size={26} className="text-red-500" />
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {reasons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-gray-50 rounded-xl shadow p-6 text-center hover:shadow-md transition"
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyLovedSection;
