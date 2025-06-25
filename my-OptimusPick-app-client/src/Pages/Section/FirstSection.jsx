import { Fade, Zoom, Slide } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { FaSadTear, FaLeaf, FaHeadset } from "react-icons/fa";
import { MdOutlineReportProblem, MdStars } from "react-icons/md";

// Custom animation
const popUp = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8) translateY(50px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

const FirstSection = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-24 px-6 text-center overflow-hidden">

      {/*  Animated & Beautiful Header Section */}
      <Slide direction="up" triggerOnce>
        <div className="relative py-16 px-4 bg-white/70 rounded-3xl shadow-xl border border-purple-200 backdrop-blur-xl max-w-6xl mx-auto">
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 h-1 w-40 rounded-full shadow-lg" />
          
          <Fade cascade direction="up" triggerOnce>
            <div className="max-w-6xl mx-auto text-center">
              <Zoom triggerOnce delay={100}>
                <h2 className="lg:text-5xl md:text-4xl text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 mb-4 tracking-wide leading-snug inline-flex items-center justify-center gap-2">
                  <MdStars className="text-4xl  animate-spin-slow" />
                  Why People Boycott Products?
                </h2>
              </Zoom>

              <Fade delay={300} triggerOnce>
                <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed animate-fade-in">
                  People boycott for many reasons — <strong>low quality</strong>, <strong>unethical practices</strong>,
                  or <strong>poor service</strong>. This platform lets them raise their voice and guide others to better choices.
                </p>
              </Fade>
            </div>
          </Fade>
        </div>
      </Slide>

      {/*  Cards */}
      <div className="grid md:grid-cols-3 gap-10 mt-20 max-w-6xl mx-auto">
        <Zoom triggerOnce keyframes={popUp} duration={800} delay={100}>
          <div className="p-6 bg-white rounded-3xl shadow-2xl hover:shadow-indigo-300 transition-all duration-500 border-t-4 border-indigo-500">
            <div className="text-4xl text-indigo-500 mb-4 animate-bounce">
              <FaSadTear />
            </div>
            <h3 className="text-2xl font-semibold text-indigo-600 mb-2">Low Quality</h3>
            <p className="text-gray-600">
              Fragile, low-performing products lead people to look for reliable alternatives.
            </p>
          </div>
        </Zoom>

        <Zoom triggerOnce keyframes={popUp} duration={800} delay={300}>
          <div className="p-6 bg-white rounded-3xl shadow-2xl hover:shadow-pink-300 transition-all duration-500 border-t-4 border-pink-500">
            <div className="text-4xl text-pink-500 mb-4 animate-pulse">
              <FaLeaf />
            </div>
            <h3 className="text-2xl font-semibold text-pink-600 mb-2">Unethical Brand</h3>
            <p className="text-gray-600">
              Some companies exploit workers or harm the planet. People deserve better.
            </p>
          </div>
        </Zoom>

        <Zoom triggerOnce keyframes={popUp} duration={800} delay={500}>
          <div className="p-6 bg-white rounded-3xl shadow-2xl hover:shadow-green-300 transition-all duration-500 border-t-4 border-green-500">
            <div className="text-4xl text-green-500 mb-4 animate-bounce">
              <FaHeadset />
            </div>
            <h3 className="text-2xl font-semibold text-green-600 mb-2">Bad Support</h3>
            <p className="text-gray-600">
              A bad support experience can ruin even a great product.
            </p>
          </div>
        </Zoom>
      </div>

      {/*  Button */}
      <Slide direction="up" triggerOnce delay={700}>
        <div className="mt-16">
          <button className="inline-flex items-center gap-3 bg-indigo-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 text-lg animate-pulse">
            <MdOutlineReportProblem className="text-2xl" />
            Share Your Experience
          </button>
        </div>
      </Slide>
    </section>
  );
};

export default FirstSection;
