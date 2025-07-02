import { useState } from "react";
import { motion } from "framer-motion";

const quizQuestions = [
  {
    question: "What's your budget?",
    options: ["Under $50", "$50 - $150", "$150+"],
  },
  {
    question: "What’s your top priority?",
    options: ["Battery Life", "Design", "Performance"],
  },
  {
    question: "How often will you use it?",
    options: ["Daily", "Occasionally", "Just trying it out"],
  },
];

const results = {
  "Under $50-Battery Life-Daily": {
    name: "SmartBand Lite",
    image: "https://i.ibb.co/PGFvb0Qp/download.jpg",
    price: "$39.99",
  },
  "$50 - $150-Design-Daily": {
    name: "FitPro X2",
    image: "https://i.ibb.co/zWphnjmc/shart.webp",
    price: "$129.99",
  },
  "$150+-Performance-Daily": {
    name: "Watch Ultra Pro",
    image: "https://i.ibb.co/mF2JGQ6R/car.jpg",
    price: "$249.99",
  },
  default: {
    name: "SmartFit Basic",
    image: "https://i.ibb.co/YBPntSQ7/pcgmg17-01-228x228.webp",
    price: "$59.99",
  },
};

const ProductQuiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (option) => {
    const newAnswers = [...answers, option];
    if (step + 1 < quizQuestions.length) {
      setAnswers(newAnswers);
      setStep(step + 1);
    } else {
      setAnswers(newAnswers);
      setShowResult(true);
    }
  };

  const getResult = () => {
    const key = answers.join("-");
    return results[key] || results.default;
  };

  return (
    <section className="py-8 bg-gray-100 px-4">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-center mb-3"
        >
          🧠 Find the Perfect Product for You
        </motion.h2>

        {!showResult ? (
          <>
            <h3 className="text-lg font-semibold mb-3">
              {quizQuestions[step].question}
            </h3>
            <div className="space-y-3">
              {quizQuestions[step].options.map((option) => (
                <motion.button
                  key={option}
                  onClick={() => handleOptionSelect(option)}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-outline w-full"
                >
                  {option}
                </motion.button>
              ))}
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold mb-2">
              ✅ Our Recommendation for You
            </h3>
            <img
              src={getResult().image}
              alt={getResult().name}
              className="mx-auto w-40 h-40 object-cover rounded mb-4"
            />
            <p className="text-lg font-bold">{getResult().name}</p>
            <p className="text-gray-500">{getResult().price}</p>
            <button
              onClick={() => {
                setStep(0);
                setAnswers([]);
                setShowResult(false);
              }}
              className="mt-4 btn btn-sm btn-primary"
            >
              Take Quiz Again
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProductQuiz;
